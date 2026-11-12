/* The book and verification report are local scripts so file:// works offline too. */
(async () => {
  'use strict';
  const $ = (selector) => document.querySelector(selector);
  const escape = (value) => String(value ?? '').replace(/[&<>"']/g, (char) => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[char]));
  const book = window.BOOK;
  if (!book || !Array.isArray(book.chapters) || !book.chapters.length) {
    $('#article').innerHTML = '<h1 id="chapter-title">ยังเปิดเนื้อหาไม่ได้</h1><p>ตรวจสอบว่ามีไฟล์ content.js อยู่ในโฟลเดอร์เดียวกับ index.html แล้วเปิดหน้านี้อีกครั้ง</p>';
    return;
  }
  const chapters = book.chapters;
  const byId = new Map(chapters.map((chapter) => [chapter.id, chapter]));
  let report = null;
  let reportNotice = 'ยังไม่มีผลตรวจโค้ดอัตโนมัติสำหรับหัวข้อนี้';
  if (window.VERIFICATION) {
    try {
      if (!window.VERIFICATION.bookHash || !window.crypto?.subtle) throw new Error('Cannot confirm report identity');
      const digest = await window.crypto.subtle.digest('SHA-256', new TextEncoder().encode(JSON.stringify(book)));
      const hash = [...new Uint8Array(digest)].map((byte) => byte.toString(16).padStart(2, '0')).join('');
      if (hash === window.VERIFICATION.bookHash) report = window.VERIFICATION;
      else reportNotice = 'เนื้อหาเปลี่ยนไปหลังการตรวจ ต้องตรวจใหม่ก่อนยืนยันผลโค้ด';
    } catch { reportNotice = 'ยืนยันไม่ได้ว่ารายงานการตรวจตรงกับเนื้อหาชุดนี้ จึงยังไม่แสดงสถานะผ่าน'; }
  }
  const checked = new Map((report?.chapters || []).map((chapter) => [chapter.id, chapter]));
  const storageKey = 'rust-by-example-th.reading';
  let saved = null;
  try { saved = JSON.parse(localStorage.getItem(storageKey)); } catch { /* Reading remains available without storage. */ }
  let current = null;
  let copyTimer;
  let scrollTimer;
  let latestSearch = [];
  const route = (id) => `#${encodeURIComponent(id)}`;
  const textOf = (html) => {
    const template = document.createElement('template');
    template.innerHTML = html || '';
    return template.content.textContent || '';
  };
  const searchable = chapters.map((chapter) => ({chapter, text: [chapter.title, chapter.section, textOf(chapter.body), ...(chapter.tips || []), ...(chapter.examples || []).map((example) => `${example.title} ${example.code} ${example.note || ''}`)].join(' ').replace(/\s+/g, ' ')}));
  function persist() {
    if (!current) return;
    try { localStorage.setItem(storageKey, JSON.stringify({id:current.id, scroll:window.scrollY})); } catch { /* Storage can be disabled or full. */ }
  }
  function closeMenu() {
    $('#sidebar').classList.remove('is-open');
    $('#menu-button').setAttribute('aria-expanded', 'false');
    $('#backdrop').hidden = true;
    document.body.classList.remove('menu-open');
    $('#sidebar').inert = window.innerWidth <= 680;
  }
  function buildContents() {
    const groups = new Map();
    for (const chapter of chapters) {
      const section = chapter.section || 'บทเรียน';
      if (!groups.has(section)) groups.set(section, []);
      groups.get(section).push(chapter);
    }
    $('#chapter-count').textContent = `${chapters.length} หัวข้อ`;
    $('#contents').innerHTML = [...groups].map(([section, pages]) => `<details class="toc-group"><summary>${escape(section)}</summary>${pages.map((page) => `<a class="toc-link" href="${route(page.id)}" data-chapter="${escape(page.id)}" style="--depth:${Math.min(3, Math.max(0, page.id.split('/').length - 1))}">${escape(page.title)}</a>`).join('')}</details>`).join('');
    $('#book-source').href = safeUrl(book.meta?.sourceUrl) || 'https://github.com/rust-lang/rust-by-example';
    $('.brand').href = route(chapters[0].id);
  }
  function safeUrl(value) {
    try { const url = new URL(value); return url.protocol === 'https:' || url.protocol === 'http:' ? url.href : ''; } catch { return ''; }
  }
  function highlighted(code) {
    const tokens = /(\/\/[^\n]*|"(?:[^"\\]|\\.)*"|'(?:[^'\\]|\\.)'|\b(?:fn|let|mut|pub|struct|enum|impl|trait|for|in|while|loop|if|else|match|return|use|mod|const|static|type|where|async|await|move|unsafe|extern|ref|Self|self|true|false|as|break|continue|dyn)\b|\b\d+(?:\.\d+)?(?:u\d+|i\d+|f\d+|usize|isize)?\b)/g;
    return code.split(tokens).map((token, index) => {
      if (!(index % 2)) return escape(token);
      const kind = token.startsWith('//') ? 'comment' : /^["']/.test(token) ? 'string' : /^\d/.test(token) ? 'number' : 'keyword';
      return `<span class="tok-${kind}">${escape(token)}</span>`;
    }).join('');
  }
  function exampleHtml(example, index, chapterReport) {
    const mode = example.mode || 'run';
    const check = chapterReport?.examples?.find((entry) => entry.index === index);
    const type = mode === 'compile_fail' ? 'ตัวอย่างที่คอมไพล์ไม่ผ่าน' : mode === 'should_panic' ? 'ตัวอย่างที่เกิด panic' : mode === 'text' ? 'ตัวอย่างประกอบ' : `Rust · ${example.edition || '2021'}`;
    const status = check?.status === 'passed' ? 'ผ่านการตรวจโค้ด' : check?.status === 'failed' ? 'ตรวจพบข้อผิดพลาด' : mode === 'text' ? 'อ่านตามบริบทของตัวอย่าง' : 'ยังไม่ได้ยืนยันผลด้วยคอมไพเลอร์';
    const expected = example.expected ?? example.expectedError;
    return `<section class="example" aria-label="${escape(example.title || `ตัวอย่าง ${index + 1}`)}"><div class="example-header"><p class="example-title">${escape(example.title || `ตัวอย่าง ${index + 1}`)}</p><span class="example-tag">${escape(type)}</span></div><pre><code>${highlighted(String(example.code || ''))}</code></pre><div class="code-tools"><span>${escape(status)}</span><button class="copy-button" type="button" data-copy="${index}" aria-label="คัดลอกโค้ด: ${escape(example.title || `ตัวอย่าง ${index + 1}`)}">คัดลอกโค้ด</button></div>${expected !== undefined && expected !== null && String(expected).length ? `<div class="output"><span class="output-label">${mode === 'compile_fail' || mode === 'should_panic' ? 'ข้อผิดพลาดที่คาดหมาย' : 'ผลลัพธ์ที่คาดหมาย'}</span><pre>${escape(expected)}</pre></div>` : ''}${example.note ? `<p class="example-note">${escape(example.note)}</p>` : ''}</section>`;
  }
  function evidenceHtml(chapter, chapterReport) {
    const source = safeUrl(chapter.source);
    let status = reportNotice;
    if (chapterReport?.status === 'passed') status = 'ตัวอย่างที่อยู่ในขอบเขตการทดสอบผ่านการตรวจโค้ด';
    else if (chapterReport?.status === 'failed') status = 'หัวข้อนี้ยังไม่ผ่านเกณฑ์ตรวจรับ ดูรายละเอียดในรายงาน';
    else if (chapterReport?.status === 'blocked') status = 'ยังตรวจโค้ดไม่สำเร็จ เนื่องจากสภาพแวดล้อมการตรวจไม่พร้อม';
    else if (chapterReport?.status === 'manual') status = 'มีตัวอย่างที่ต้องตรวจด้วยมือ จึงยังยืนยันผลตรวจทั้งหัวข้อไม่ได้';
    const commit = report?.sourceCommit || book.meta?.sourceCommit;
    return `<details class="evidence" id="evidence"><summary>แหล่งอ้างอิงและสถานะการตรวจ</summary><p>${source ? `<a href="${escape(source)}" target="_blank" rel="noopener noreferrer">อ่านต้นฉบับหัวข้อนี้ ↗</a><br>` : ''}${commit ? `อ้างอิงซอร์สเวอร์ชัน <code>${escape(commit)}</code><br>` : 'ยังไม่ยืนยันเวอร์ชันซอร์สต้นฉบับที่แน่นอน<br>'}${escape(status)}${report?.rustVersion ? `<br>คอมไพเลอร์ที่ใช้: <code>${escape(report.rustVersion)}</code>` : ''}${report?.generatedAt ? `<br>รายงานเมื่อ: ${escape(report.generatedAt)}` : ''}<br>ผลตรวจโค้ดครอบคลุมพฤติกรรมตามตัวอย่าง ไม่ได้พิสูจน์ว่าคำอธิบายทั้งหมดถูกต้องโดยอัตโนมัติ${report ? '<br><a href="verification.json" target="_blank" rel="noopener noreferrer">เปิดรายงานการตรวจฉบับเต็ม ↗</a>' : ''}</p></details>`;
  }
  function render(id, {initial = false, anchor = ''} = {}) {
    const chapter = byId.get(id);
    if (!chapter) {
      current = null;
      document.title = 'ไม่พบหัวข้อ · Rust by Example ภาษาไทย';
      $('#contents').querySelectorAll('[aria-current]').forEach((link) => link.removeAttribute('aria-current'));
      $('#article').innerHTML = `<h1 id="chapter-title">ไม่พบหัวข้อนี้</h1><p>ลิงก์อาจสะกดไม่ตรงกับสารบัญ เลือกหัวข้อด้านข้างหรือ <a href="${route(chapters[0].id)}">เริ่มอ่านหัวข้อแรก</a></p>`;
      $('#pagination').innerHTML = '';
      $('#page-outline').innerHTML = '';
      closeMenu();
      closeSearch();
      $('#reading').focus({preventScroll:true});
      window.scrollTo({top:0, behavior:'instant'});
      return;
    }
    if (current?.id === id && anchor) { document.getElementById(anchor)?.scrollIntoView(); return; }
    if (!initial) persist();
    current = chapter;
    const index = chapters.indexOf(chapter);
    const chapterReport = checked.get(chapter.id);
    const examples = chapter.examples || [];
    document.title = `${chapter.title} · Rust by Example ภาษาไทย`;
    $('#article').innerHTML = `<div class="chapter-kicker"><p class="eyebrow">${escape(chapter.section || 'Rust by Example')}</p><span class="chapter-position">${String(index + 1).padStart(2, '0')} / ${chapters.length}</span></div><h1 id="chapter-title">${escape(chapter.title)}</h1><div class="chapter-meta"><span>Rust by Example · ภาษาไทย</span>${safeUrl(chapter.source) ? `<a href="${escape(safeUrl(chapter.source))}" target="_blank" rel="noopener noreferrer">เทียบกับต้นฉบับ ↗</a>` : ''}</div><div class="chapter-body">${chapter.body || ''}</div>${examples.length ? `<h2 id="app-examples">ตัวอย่างการใช้งาน</h2>${examples.map((example, exampleIndex) => exampleHtml(example, exampleIndex, chapterReport)).join('')}` : ''}${chapter.tips?.length ? `<aside class="tips"><h2 id="practical-notes">เมื่อนำไปใช้ในแอป</h2><ul>${chapter.tips.map((tip) => `<li>${escape(tip)}</li>`).join('')}</ul></aside>` : ''}${evidenceHtml(chapter, chapterReport)}`;
    const total = report?.coverage?.expected || book.meta?.coverage?.total;
    if (!book.meta?.sourceCommit || report?.status !== 'passed') {
      const notice = document.createElement('p');
      notice.className = 'editorial-status';
      notice.innerHTML = `ฉบับนี้ยังตรวจรับรองไม่ครบ${total && chapters.length < total ? ` · มีเนื้อหา ${chapters.length} จาก ${Number(total)} หัวข้อ` : ''}<br><a href="${route(chapter.id)}~evidence" data-evidence>ดูสถานะและแหล่งอ้างอิง ↓</a>`;
      $('.chapter-meta').after(notice);
    }
    const headings = [...$('#article').querySelectorAll('h2,h3')];
    headings.forEach((heading, headingIndex) => { if (!heading.id) heading.id = `section-${headingIndex}`; });
    $('#page-outline').innerHTML = headings.map((heading) => `<a class="${heading.tagName === 'H3' ? 'subheading' : ''}" href="${route(chapter.id)}~${encodeURIComponent(heading.id)}">${escape(heading.textContent)}</a>`).join('');
    $('#pagination').innerHTML = `${index > 0 ? `<a class="page-link previous" href="${route(chapters[index - 1].id)}"><small>← หัวข้อก่อนหน้า</small>${escape(chapters[index - 1].title)}</a>` : ''}${index < chapters.length - 1 ? `<a class="page-link next" href="${route(chapters[index + 1].id)}"><small>หัวข้อถัดไป →</small>${escape(chapters[index + 1].title)}</a>` : ''}`;
    $('#contents').querySelectorAll('.toc-link').forEach((link) => {
      if (link.dataset.chapter === id) {
        link.setAttribute('aria-current', 'page');
        link.closest('details').open = true;
      } else link.removeAttribute('aria-current');
    });
    closeSearch();
    closeMenu();
    if (!initial) $('#reading').focus({preventScroll:true});
    requestAnimationFrame(() => {
      if (anchor) document.getElementById(anchor)?.scrollIntoView();
      else window.scrollTo({top:initial && saved?.id === id ? Math.max(0, Number(saved.scroll) || 0) : 0, behavior:'instant'});
      updateProgress();
      persist();
    });
  }
  function onRoute(initial = false) {
    let raw;
    try { raw = decodeURIComponent(location.hash.slice(1)); } catch { raw = ''; }
    if (raw === 'reading') {
      if (initial) render(byId.has(saved?.id) ? saved.id : chapters[0].id, {initial});
      requestAnimationFrame(() => window.scrollTo({top:0, behavior:initial ? 'instant' : 'smooth'}));
      return;
    }
    const [id, anchor] = raw.split('~');
    render(id || (initial && byId.has(saved?.id) ? saved.id : chapters[0].id), {initial, anchor});
  }
  function closeSearch() {
    $('#search-results').hidden = true;
    $('#search').setAttribute('aria-expanded', 'false');
  }
  function search() {
    const query = $('#search').value.trim().toLocaleLowerCase('th');
    if (!query) { closeSearch(); return; }
    const terms = query.split(/\s+/);
    latestSearch = searchable.filter((entry) => terms.every((term) => entry.text.toLocaleLowerCase('th').includes(term)))
      .sort((a, b) => Number(b.chapter.title.toLocaleLowerCase('th').includes(query)) - Number(a.chapter.title.toLocaleLowerCase('th').includes(query)));
    const visible = latestSearch.slice(0, 30);
    $('#search-results').innerHTML = `<p role="status">${latestSearch.length ? `พบ ${latestSearch.length} หัวข้อ${latestSearch.length > 30 ? ' · แสดง 30 หัวข้อแรก' : ''}` : 'ไม่พบหัวข้อ ลองค้นด้วยคำศัพท์อังกฤษ เช่น borrow หรือ Result'}</p>${visible.map(({chapter, text}) => {
      const at = text.toLocaleLowerCase('th').indexOf(terms[0]);
      const snippet = text.slice(Math.max(0, at - 30), Math.max(0, at - 30) + 130);
      return `<a class="search-result" href="${route(chapter.id)}"><small>${escape(chapter.section)}</small><strong>${escape(chapter.title)}</strong><p>${escape(snippet)}…</p></a>`;
    }).join('')}`;
    $('#search-results').hidden = false;
    $('#search').setAttribute('aria-expanded', 'true');
  }
  function updateProgress() {
    const distance = document.documentElement.scrollHeight - window.innerHeight;
    $('#progress-bar').style.width = `${distance > 0 ? Math.min(100, window.scrollY / distance * 100) : 100}%`;
  }
  function toast(message) {
    clearTimeout(copyTimer);
    $('#toast').textContent = message;
    $('#toast').hidden = false;
    copyTimer = setTimeout(() => { $('#toast').hidden = true; }, 2500);
  }
  $('#article').addEventListener('click', async (event) => {
    if (event.target.closest('[data-evidence]')) $('#evidence').open = true;
    const button = event.target.closest('[data-copy]');
    if (!button) return;
    const code = current?.examples?.[Number(button.dataset.copy)]?.code;
    if (typeof code !== 'string') return;
    try {
      if (navigator.clipboard?.writeText) await navigator.clipboard.writeText(code);
      else {
        const field = document.createElement('textarea');
        field.value = code;
        field.style.cssText = 'position:fixed;left:-10000px;top:0';
        document.body.appendChild(field);
        field.select();
        const copied = document.execCommand('copy');
        field.remove();
        if (!copied) throw new Error('Clipboard unavailable');
        button.focus();
      }
      toast('คัดลอกโค้ดแล้ว');
    } catch { toast('คัดลอกอัตโนมัติไม่ได้ กรุณาเลือกโค้ดแล้วคัดลอก'); }
  });
  $('#menu-button').addEventListener('click', () => {
    const open = !$('#sidebar').classList.contains('is-open');
    $('#sidebar').classList.toggle('is-open', open);
    $('#menu-button').setAttribute('aria-expanded', String(open));
    $('#backdrop').hidden = !open;
    document.body.classList.toggle('menu-open', open);
    $('#sidebar').inert = !open && window.innerWidth <= 680;
    if (open) ($('#contents [aria-current="page"]') || $('#contents a'))?.focus();
  });
  $('#backdrop').addEventListener('click', () => { closeMenu(); $('#menu-button').focus(); });
  $('#contents').addEventListener('click', (event) => {
    if (event.target.closest('a')) { closeMenu(); $('#reading').focus({preventScroll:true}); }
  });
  $('#search').addEventListener('input', search);
  $('#search').addEventListener('focus', () => { if ($('#search').value.trim()) search(); });
  $('#search').addEventListener('keydown', (event) => {
    if (event.key === 'ArrowDown') { event.preventDefault(); $('#search-results a')?.focus(); }
    if (event.key === 'Enter' && latestSearch.length && !$('#search-results').hidden) { event.preventDefault(); location.hash = route(latestSearch[0].chapter.id); closeSearch(); }
  });
  $('#search-results').addEventListener('keydown', (event) => {
    const links = [...$('#search-results').querySelectorAll('a')];
    const index = links.indexOf(document.activeElement);
    if (event.key === 'ArrowDown') { event.preventDefault(); links[Math.min(links.length - 1, index + 1)]?.focus(); }
    if (event.key === 'ArrowUp') { event.preventDefault(); if (index <= 0) $('#search').focus(); else links[index - 1]?.focus(); }
  });
  $('#search-results').addEventListener('click', (event) => { if (event.target.closest('a')) closeSearch(); });
  document.addEventListener('click', (event) => { if (!event.target.closest('.search-wrap')) closeSearch(); });
  document.addEventListener('keydown', (event) => {
    if (event.key === 'Tab' && $('#sidebar').classList.contains('is-open') && window.innerWidth <= 680) {
      const items = [$('#menu-button'), ...$('#sidebar').querySelectorAll('a,summary')].filter((element) => element.getClientRects().length);
      const first = items[0];
      const last = items[items.length - 1];
      if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last.focus(); }
      else if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first.focus(); }
    }
    if (event.key === 'Escape') {
      const menuWasOpen = $('#sidebar').classList.contains('is-open');
      closeMenu(); closeSearch();
      if (menuWasOpen) $('#menu-button').focus();
      else if (document.activeElement?.closest('.search-wrap')) $('#search').blur();
    }
    if (event.key === '/' && !event.ctrlKey && !event.metaKey && !event.altKey && !['INPUT','TEXTAREA','SELECT'].includes(document.activeElement.tagName) && !document.activeElement.isContentEditable) {
      event.preventDefault(); $('#search').focus();
    }
  });
  document.querySelectorAll('a[href="#reading"]').forEach((link) => link.addEventListener('click', (event) => {
    event.preventDefault(); $('#reading').focus({preventScroll:true}); window.scrollTo({top:0, behavior:'smooth'});
  }));
  window.addEventListener('hashchange', () => onRoute());
  window.addEventListener('scroll', () => { updateProgress(); clearTimeout(scrollTimer); scrollTimer = setTimeout(persist, 200); }, {passive:true});
  window.addEventListener('resize', () => {
    updateProgress();
    if (window.innerWidth > 680) closeMenu();
    else $('#sidebar').inert = !$('#sidebar').classList.contains('is-open');
  });
  window.addEventListener('pagehide', persist);
  buildContents();
  onRoute(true);
})();
