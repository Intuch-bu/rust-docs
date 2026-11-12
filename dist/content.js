window.BOOK = {
  "meta": {
    "title": "Rust ผ่านแอปจริง",
    "sourceCommit": null,
    "sourceUrl": "https://github.com/rust-lang/rust-by-example",
    "snapshotDate": "2026-11-12",
    "provenance": "Official documentation retrieved through web cache; exact upstream revision unavailable. Cached extracted sources retained under vendor/.",
    "coverage": {
      "written": 197,
      "total": 197
    }
  },
  "chapters": [
    {
      "id": "index",
      "title": "เริ่มอ่าน Rust by Example",
      "section": "เริ่มอ่าน Rust by Example",
      "source": "https://doc.rust-lang.org/rust-by-example/index.html",
      "body": "<h2>แนวคิดที่ต้องรู้</h2><p>Rust by Example ใช้ตัวอย่างที่รันได้อธิบายภาษาและไลบรารีมาตรฐาน หนังสือเริ่มจากข้อความและชนิดข้อมูล แล้วค่อยเข้าสู่ฟังก์ชัน การจัดโมดูล ownership และเครื่องมือของ Rust การอ่านลำดับนี้ช่วยให้คำศัพท์ที่ใช้ในบทหลังมีที่มา แต่ยังใช้สารบัญย้อนกลับมาดูหัวข้อเฉพาะได้ ตัวอย่างแต่ละหน้าแสดงเพียงพฤติกรรมที่กำลังอธิบาย ไม่ได้รวมองค์ประกอบทั้งหมดของแอปจริง เช่น การติดตั้ง การเก็บข้อมูล และการรับมือความล้มเหลวทุกชนิด</p><h2>เมื่อนำไปใช้ในแอป</h2><p>ฉบับนี้ใช้รายการงาน การตั้งค่า และรายงานเป็นบริบท แยกค่าป้อนเข้าออกจากผลลัพธ์ให้เห็น เมื่อรันตัวอย่างต้องอ่านผลตรวจที่แนบไว้ด้วย ผลลัพธ์ที่คาดหมายยังไม่เท่ากับผลที่รันยืนยันแล้ว</p>",
      "examples": [
        {
          "title": "ตัวอย่างในบริบทแอป",
          "code": "fn main() {\n    for tasks in [0, 3] {\n        println!(\"tasks={tasks}\");\n    }\n}",
          "expected": "tasks=0\ntasks=3\n",
          "mode": "run",
          "edition": "2021"
        }
      ],
      "tips": [
        "อ่านตามลำดับเมื่อเจอคำศัพท์ใหม่ แล้วกลับมาค้นหัวข้อที่ต้องใช้ในงาน"
      ]
    },
    {
      "id": "hello",
      "title": "ข้อความแรก · Hello World",
      "section": "ข้อความแรก · Hello World",
      "source": "https://doc.rust-lang.org/rust-by-example/hello.html",
      "body": "<h2>แนวคิดที่ต้องรู้</h2><p>โปรแกรมไบนารี Rust ทั่วไปมี fn main() เป็นจุดเริ่มต้น วงเล็บปีกกาครอบชุดคำสั่งในฟังก์ชัน และคำสั่งเรียก println! ในตัวอย่างลงท้ายด้วย ; เครื่องหมาย ! บอกว่ากำลังเรียก macro ข้อความในเครื่องหมายคำพูดเป็น string literal ส่วน println! ส่งข้อความไป standard output แล้วขึ้นบรรทัดใหม่ เมื่อบันทึกไฟล์เป็น hello.rs สามารถคอมไพล์ด้วย rustc hello.rs แล้วเรียกไบนารีที่ได้ ชื่อและวิธีเรียกไบนารีขึ้นกับระบบปฏิบัติการ</p><h2>เมื่อนำไปใช้ในแอป</h2><p>CLI อาจพิมพ์ชื่อโครงการที่กำลังเปิดเพื่อให้ผู้ใช้ตามงานทัน ตัวอย่างคงคำว่า Loading ไว้แล้วเปลี่ยนเฉพาะชื่อโครงการ สังเกตว่าการเรียก println! สองครั้งให้ข้อความสองบรรทัด</p>",
      "examples": [
        {
          "title": "ตัวอย่างในบริบทแอป",
          "code": "fn main() {\n    let project = \"work\";\n    println!(\"Loading {project}\");\n\n    let project = \"home\";\n    println!(\"Loading {project}\");\n}",
          "expected": "Loading work\nLoading home\n",
          "mode": "run",
          "edition": "2021"
        }
      ],
      "tips": [
        "เครื่องหมาย ! เป็นส่วนหนึ่งของการเรียก macro ไม่ใช่ชื่อฟังก์ชันธรรมดา"
      ]
    },
    {
      "id": "hello/comment",
      "title": "เขียนเหตุผลไว้ในโค้ด · Comments",
      "section": "ข้อความแรก · Hello World",
      "source": "https://doc.rust-lang.org/rust-by-example/hello/comment.html",
      "body": "<h2>แนวคิดที่ต้องรู้</h2><p>// เริ่มคอมเมนต์จนจบบรรทัด ส่วน /* ... */ ครอบคอมเมนต์ที่อยู่ในบรรทัดเดียวหรือหลายบรรทัดได้ และ block comment ซ้อนกันได้ คอมเมนต์ปกติไม่ได้เป็นคำสั่งที่โปรแกรมนำไปคำนวณ ต่างจากข้อความที่อยู่ใน string literal ซึ่งเป็นข้อมูลของโปรแกรม คอมเมนต์เอกสารมีรูปแบบเฉพาะ เช่น /// ใช้อธิบาย item ที่ตามมา ส่วน //! ใช้กับ item ที่ครอบบริเวณนั้น เครื่องมือ rustdoc ใช้คอมเมนต์เอกสารสร้างหน้าเอกสารได้</p><h2>เมื่อนำไปใช้ในแอป</h2><p>เมื่อจำนวนงานที่ยังไม่เสร็จต่างกัน คอมเมนต์ไม่ได้เปลี่ยนค่าที่โปรแกรมคำนวณ</p>",
      "examples": [
        {
          "title": "ตัวอย่างในบริบทแอป",
          "code": "fn main() {\n    // Exclude completed tasks from the pending count.\n    for done in [1, 3] {\n        println!(\"pending={}\", 5 - done);\n    }\n}",
          "expected": "pending=4\npending=2\n",
          "mode": "run",
          "edition": "2021"
        }
      ],
      "tips": [
        "คอมเมนต์อธิบายเหตุผลที่เลือกวิธีนี้ ส่วนชื่อและโค้ดควรบอกว่ากำลังทำอะไร"
      ]
    },
    {
      "id": "hello/print",
      "title": "จัดข้อความ · Formatted print",
      "section": "ข้อความแรก · Hello World",
      "source": "https://doc.rust-lang.org/rust-by-example/hello/print.html",
      "body": "<h2>แนวคิดที่ต้องรู้</h2><p>macro กลุ่มจัดรูปแบบใช้ข้อความต้นแบบกับค่าที่ส่งเข้าไป format! คืน String; print! เขียนไป stdout โดยไม่เติมบรรทัดใหม่ ส่วน println! เติมให้ eprint! และ eprintln! ใช้ stderr แทน ช่อง {} รับค่าตามลำดับ ช่อง {0} ระบุตำแหน่ง และช่อง {name} อ้างชื่อได้ ตัวแปรใน scope สามารถใช้ชื่อในช่องได้โดยตรง เช่น {count} เมื่อต้องพิมพ์ปีกกาจริงให้เขียน {{ หรือ }} ข้อมูลที่นำมาใส่ต้องรองรับ trait ตามรูปแบบที่เลือก หากจำนวน argument หรือรูปแบบไม่ถูกต้อง compiler จะตรวจได้หลายกรณีตั้งแต่ตอนคอมไพล์</p><h2>เมื่อนำไปใช้ในแอป</h2><p>รายงานสถานะสร้างข้อความด้วย format! แล้วจึงส่งให้ส่วนแสดงผล ตัวอย่างเปลี่ยนจำนวนงานจาก 1 เป็น 12 โดยข้อความต้นแบบเดิมไม่เปลี่ยน สำหรับ CLI ที่ stdout เป็นข้อมูลให้โปรแกรมอื่นอ่าน ให้พิจารณาส่งข้อความแจ้งปัญหาไป stderr</p>",
      "examples": [
        {
          "title": "ตัวอย่างในบริบทแอป",
          "code": "fn main() {\n    for count in [1, 12] {\n        let report = format!(\"Tasks: {count}\");\n        println!(\"{report}\");\n    }\n}",
          "expected": "Tasks: 1\nTasks: 12\n",
          "mode": "run",
          "edition": "2021"
        }
      ],
      "tips": [
        "ข้อความแจ้งข้อผิดพลาดของ CLI เหมาะกับ stderr เพื่อไม่ปะปนกับข้อมูล stdout"
      ]
    },
    {
      "id": "hello/print/print_debug",
      "title": "ดูข้อมูลระหว่างพัฒนา · Debug",
      "section": "ข้อความแรก · Hello World",
      "source": "https://doc.rust-lang.org/rust-by-example/hello/print/print_debug.html",
      "body": "<h2>แนวคิดที่ต้องรู้</h2><p>{:?} เลือกรูปแบบ Debug สำหรับดูโครงสร้างข้อมูลระหว่างพัฒนา ส่วน {:#?} ขอรูปแบบแยกบรรทัดที่อ่านง่ายขึ้น #[derive(Debug)] สร้าง implementation ให้ struct หรือ enum ได้เมื่อ field ที่อยู่ข้างในรองรับ Debug ด้วย การประกาศ struct เพียงอย่างเดียวไม่ได้ทำให้พิมพ์ด้วย {:?} ได้ทันที และการมี Debug ไม่ได้แปลว่าจะมี Display สำหรับ {} รูปแบบข้อความของ derived Debug และ Debug ของชนิดในไลบรารีมาตรฐานไม่รับประกันว่าจะคงเดิมข้ามเวอร์ชัน</p><h2>เมื่อนำไปใช้ในแอป</h2><p>ตรวจข้อมูลรายการงานก่อนออกแบบรูปแบบข้อความสำหรับผู้ใช้</p><h2>อ้างอิงเพิ่มเติม</h2><ul><li><a href=\"https://doc.rust-lang.org/std/fmt/trait.Debug.html\">https://doc.rust-lang.org/std/fmt/trait.Debug.html</a></li></ul>",
      "examples": [
        {
          "title": "ตัวอย่างในบริบทแอป",
          "code": "#[derive(Debug)]\nstruct Task {\n    done: bool,\n}\n\nfn main() {\n    for done in [false, true] {\n        println!(\"{:?}\", Task { done });\n    }\n}",
          "expected": "Task { done: false }\nTask { done: true }\n",
          "mode": "run",
          "edition": "2021"
        }
      ],
      "tips": [
        "รูปแบบ Debug มีไว้ดูข้อมูลขณะพัฒนา อย่าใช้เป็นสัญญารูปแบบไฟล์ถาวร"
      ]
    },
    {
      "id": "hello/print/print_display",
      "title": "ข้อความที่ผู้ใช้จะเห็น · Display",
      "section": "ข้อความแรก · Hello World",
      "source": "https://doc.rust-lang.org/rust-by-example/hello/print/print_display.html",
      "body": "<h2>แนวคิดที่ต้องรู้</h2><p>{} เลือก Display สำหรับข้อความที่ต้องการให้คนอ่าน ชนิดที่สร้างเองต้อง implement trait นี้หากอยากกำหนดรูปแบบดังกล่าว โดยเขียนเมธอด fmt ที่รับ &amp;self และ &amp;mut fmt::Formatter แล้วคืน fmt::Result macro write! เขียนข้อความลง formatter ที่ได้รับ การ derive ที่มากับภาษาไม่ได้สร้าง Display ให้โดยอัตโนมัติ จึงเลือกคำและรูปแบบได้เองโดยไม่จำเป็นต้องเปิดชื่อ field ภายในทั้งหมด เมื่อจะพิมพ์ตัวเลขฐานอื่นยังมี trait เช่น Binary หรือ LowerHex แยกต่างหาก</p><h2>เมื่อนำไปใช้ในแอป</h2><p>แปลงสถานะงานเป็นข้อความที่อ่านรู้เรื่องโดยไม่เปิดเผยโครงสร้างภายใน</p>",
      "examples": [
        {
          "title": "ตัวอย่างในบริบทแอป",
          "code": "use std::fmt;\n\nstruct Status(bool);\n\nimpl fmt::Display for Status {\n    fn fmt(&self, f: &mut fmt::Formatter<'_>) -> fmt::Result {\n        write!(f, \"{}\", if self.0 { \"done\" } else { \"pending\" })\n    }\n}\n\nfn main() {\n    println!(\"{} / {}\", Status(false), Status(true));\n}",
          "expected": "pending / done\n",
          "mode": "run",
          "edition": "2021"
        }
      ],
      "tips": [
        "คืน fmt::Result และส่งต่อข้อผิดพลาดจาก write! อย่ากลืนผลลัพธ์ของการเขียน"
      ]
    },
    {
      "id": "hello/print/print_display/testcase_list",
      "title": "แสดงรายการโดยไม่เหลือจุลภาคท้าย · List",
      "section": "ข้อความแรก · Hello World",
      "source": "https://doc.rust-lang.org/rust-by-example/hello/print/print_display/testcase_list.html",
      "body": "<h2>แนวคิดที่ต้องรู้</h2><p>เมื่อ Display ต้องเขียนหลายส่วนต่อกัน แต่ละ write! คืน Result จึงต้องส่งต่อความล้มเหลวด้วย ? แล้วคืน Ok(()) เมื่อเขียนครบ ตัวอย่างใช้ชนิด Selected หุ้ม Vec&lt;u32&gt; เพื่อกำหนดรูปแบบของรายการนี้เอง การใช้ enumerate() ให้ทั้งตำแหน่งและสมาชิก จึงเพิ่มตัวคั่นก่อนสมาชิกตัวที่สองเป็นต้นไปได้โดยไม่เหลือจุลภาคท้าย รายการว่างจะไม่เข้าลูปเลย ทำให้ formatter ยังสำเร็จและไม่มีข้อมูลด้านในวงเล็บ</p><h2>เมื่อนำไปใช้ในแอป</h2><p>ใช้แสดงเลขงานที่เลือกสำหรับรายงาน CLI และรองรับรายการว่าง</p>",
      "examples": [
        {
          "title": "ตัวอย่างในบริบทแอป",
          "code": "use std::fmt;\n\nstruct Selected(Vec<u32>);\n\nimpl fmt::Display for Selected {\n    fn fmt(&self, f: &mut fmt::Formatter<'_>) -> fmt::Result {\n        for (i, n) in self.0.iter().enumerate() {\n            if i > 0 {\n                write!(f, \", \")?;\n            }\n            write!(f, \"{n}\")?;\n        }\n        Ok(())\n    }\n}\n\nfn main() {\n    println!(\"[{}]\", Selected(vec![]));\n    println!(\"[{}]\", Selected(vec![2, 8]));\n}",
          "expected": "[]\n[2, 8]\n",
          "mode": "run",
          "edition": "2021"
        }
      ],
      "tips": [
        "ทดสอบรายการว่าง หนึ่งตัว และหลายตัวเมื่อเขียนตัวคั่น"
      ]
    },
    {
      "id": "hello/print/fmt",
      "title": "ควบคุมความกว้างและความละเอียด · Formatting",
      "section": "ข้อความแรก · Hello World",
      "source": "https://doc.rust-lang.org/rust-by-example/hello/print/fmt.html",
      "body": "<h2>แนวคิดที่ต้องรู้</h2><p>ส่วนหลัง : ในช่องจัดรูปแบบควบคุมรายละเอียด เช่น {id:03} ให้ความกว้างอย่างน้อยสามตัวและเติมศูนย์ ส่วน {progress:.2} แสดงทศนิยมสองตำแหน่ง ความกว้างเป็นค่าขั้นต่ำ ไม่ได้สั่งตัดข้อมูลที่ยาวกว่า รูปแบบตัวเลขฐานสอง ฐานแปด และฐานสิบหกใช้ b, o และ x หรือ X และขึ้นกับ trait ที่ชนิดข้อมูล implement การจัดชิดและตัวเติมช่วยทำคอลัมน์ในรายงานได้ การเปลี่ยนรูปแบบแสดงผลไม่ได้เปลี่ยนชนิดหรือตัวเลขที่เก็บอยู่ในตัวแปร</p><h2>เมื่อนำไปใช้ในแอป</h2><p>แสดงเลขงานสามหลัก และค่าที่วัดได้สองตำแหน่งทศนิยม</p>",
      "examples": [
        {
          "title": "ตัวอย่างในบริบทแอป",
          "code": "fn main() {\n    for id in [7, 42] {\n        println!(\"TASK-{id:03}\");\n    }\n    for progress in [1.0, 1.234] {\n        println!(\"{progress:.2}\");\n    }\n}",
          "expected": "TASK-007\nTASK-042\n1.00\n1.23\n",
          "mode": "run",
          "edition": "2021"
        }
      ],
      "tips": [
        "การแสดงทศนิยมเป็นเรื่องรูปแบบข้อความ ไม่ใช่การรับประกันความแม่นยำทางการเงิน"
      ]
    },
    {
      "id": "primitives",
      "title": "ชนิดข้อมูลพื้นฐาน · Primitives",
      "section": "ชนิดข้อมูลพื้นฐาน · Primitives",
      "source": "https://doc.rust-lang.org/rust-by-example/primitives.html",
      "body": "<h2>แนวคิดที่ต้องรู้</h2><p>ชนิดพื้นฐานแบ่งเป็น scalar และ compound จำนวนเต็มมีทั้ง signed i8, i16, i32, i64, i128 และ unsigned u8, u16, u32, u64, u128 ตัวเลขท้ายชื่อคือจำนวนบิต ส่วน isize และ usize มีขนาดตาม pointer ของ target จำนวนทศนิยมใช้ f32 หรือ f64; bool มีค่า true หรือ false และ char เก็บ Unicode scalar value หนึ่งค่า ซึ่งไม่จำเป็นต้องตรงกับตัวอักษรที่ผู้ใช้มองเห็นหนึ่งตัวเสมอ tuple รวมค่าหลายชนิด ส่วน array รวมสมาชิกชนิดเดียวกันโดยมีความยาวคงที่ในชนิด compiler อนุมานชนิดจากบริบทได้ แต่ไม่ได้เปลี่ยนชนิดของ binding เดิมไปมาตอนรัน</p><h2>เมื่อนำไปใช้ในแอป</h2><p>ใช้ bool เก็บสถานะ และจำนวนเต็มเก็บจำนวนงานให้เหมาะกับความหมาย</p><h2>อ้างอิงเพิ่มเติม</h2><ul><li><a href=\"https://doc.rust-lang.org/reference/types/numeric.html\">https://doc.rust-lang.org/reference/types/numeric.html</a></li><li><a href=\"https://doc.rust-lang.org/std/primitive.char.html\">https://doc.rust-lang.org/std/primitive.char.html</a></li></ul>",
      "examples": [
        {
          "title": "ตัวอย่างในบริบทแอป",
          "code": "fn main() {\n    let done: bool = false;\n    let tasks: u32 = 3;\n\n    println!(\"{tasks} {done}\");\n    println!(\"{} {}\", tasks + 2, !done);\n}",
          "expected": "3 false\n5 true\n",
          "mode": "run",
          "edition": "2021"
        }
      ],
      "tips": [
        "เลือกชนิดจากช่วงค่าและความหมาย ไม่จำเป็นต้องใช้ชนิดใหญ่ที่สุดทุกครั้ง"
      ]
    },
    {
      "id": "primitives/literals",
      "title": "ค่าคงรูปและตัวดำเนินการ · Literals",
      "section": "ชนิดข้อมูลพื้นฐาน · Primitives",
      "source": "https://doc.rust-lang.org/rust-by-example/primitives/literals.html",
      "body": "<h2>แนวคิดที่ต้องรู้</h2><p>literal คือค่าที่เขียนตรงในโค้ด เช่น 10, 3.5, true และข้อความในเครื่องหมายคำพูด ตัวเลขเติม suffix ระบุชนิด เช่น 10_u32 และใช้ _ แบ่งหลักเพื่ออ่านง่ายได้ จำนวนเต็มยังเขียนฐานสองด้วย 0b ฐานแปดด้วย 0o และฐานสิบหกด้วย 0x ตัวดำเนินการคำนวณมี + - * / % ส่วนการเปรียบเทียบคืน bool และ &amp;&amp; หรือ || ใช้กับเงื่อนไข การหารจำนวนเต็มตัดส่วนเศษเข้าหาศูนย์ จึงได้ผลต่างจากการหารแบบ floating point ตัวดำเนินการระดับบิต เช่น &amp; | ^ &lt;&lt; &gt;&gt; เป็นอีกกลุ่มหนึ่งที่ทำงานกับบิตของตัวเลข</p><h2>เมื่อนำไปใช้ในแอป</h2><p>คำนวณจำนวนหน้ารายงานจากจำนวนแถว โดยสังเกตผลหารจำนวนเต็ม</p><h2>อ้างอิงเพิ่มเติม</h2><ul><li><a href=\"https://doc.rust-lang.org/reference/expressions/operator-expr.html\">https://doc.rust-lang.org/reference/expressions/operator-expr.html</a></li></ul>",
      "examples": [
        {
          "title": "ตัวอย่างในบริบทแอป",
          "code": "fn main() {\n    for rows in [10_u32, 11_u32] {\n        println!(\"{} {}\", rows / 5, rows % 5);\n    }\n}",
          "expected": "2 0\n2 1\n",
          "mode": "run",
          "edition": "2021"
        }
      ],
      "tips": [
        "เมื่อแบ่งหน้า อย่าลืมจัดการแถวที่เหลือจาก % และตรวจว่าตัวหารไม่เป็นศูนย์"
      ]
    },
    {
      "id": "primitives/tuples",
      "title": "คืนค่าหลายชนิดพร้อมกัน · Tuples",
      "section": "ชนิดข้อมูลพื้นฐาน · Primitives",
      "source": "https://doc.rust-lang.org/rust-by-example/primitives/tuples.html",
      "body": "<h2>แนวคิดที่ต้องรู้</h2><p>tuple จัดค่าหลายชนิดไว้ในชุดที่มีจำนวนสมาชิกและลำดับแน่นอน เขียนค่าด้วยวงเล็บ เช่น (3, false) และอ่านสมาชิกด้วย .0 หรือ .1 นอกจากนี้แยกค่าพร้อมตั้งชื่อด้วย pattern เช่น let (count, complete) = value ได้ ฟังก์ชันคืน tuple เพื่อส่งค่าหลายส่วนพร้อมกันได้ และ tuple สามารถซ้อนกันได้ด้วย tuple หนึ่งสมาชิกต้องมีจุลภาค เช่น (3,) เพื่อแยกจาก expression ในวงเล็บ ส่วน () คือ unit ซึ่งเป็น tuple ที่ไม่มีสมาชิก</p><h2>เมื่อนำไปใช้ในแอป</h2><p>สรุปจำนวนงานทั้งหมดกับจำนวนที่เสร็จเป็นค่าคู่</p>",
      "examples": [
        {
          "title": "ตัวอย่างในบริบทแอป",
          "code": "fn summary(done: u32) -> (u32, bool) {\n    (done, done == 3)\n}\n\nfn main() {\n    for done in [1, 3] {\n        let (count, complete) = summary(done);\n        println!(\"{count} {complete}\");\n    }\n}",
          "expected": "1 false\n3 true\n",
          "mode": "run",
          "edition": "2021"
        }
      ],
      "tips": [
        "เมื่อค่าคู่เริ่มมีความหมายหลายช่อง ใช้ struct ที่ตั้งชื่อ field ชัดเจน"
      ]
    },
    {
      "id": "primitives/array",
      "title": "ข้อมูลต่อเนื่อง · Arrays และ Slices",
      "section": "ชนิดข้อมูลพื้นฐาน · Primitives",
      "source": "https://doc.rust-lang.org/rust-by-example/primitives/array.html",
      "body": "<h2>แนวคิดที่ต้องรู้</h2><p>array เก็บสมาชิกชนิดเดียวกันต่อเนื่อง โดย [u32; 3] กับ [u32; 2] เป็นคนละชนิดเพราะความยาวอยู่ในชนิดด้วย ใช้ [ค่า; จำนวน] สร้างค่าซ้ำได้ เช่น [0; 7] slice [T] เป็นมุมมองช่วงข้อมูลที่ความยาวทราบตอนรัน จึงมักใช้ผ่าน reference อย่าง &amp;[u32] การเขียน &amp;days[..2] ยืมสองตัวแรกโดยไม่สร้าง array ใหม่ อ่านสมาชิกด้วย index เริ่มที่ศูนย์ ถ้า index หรือช่วงอยู่นอกขอบเขตจะ panic เมื่อต้องรับตำแหน่งที่อาจผิดให้ใช้ get ซึ่งคืน Option แทน</p><h2>เมื่อนำไปใช้ในแอป</h2><p>ฟังก์ชันรวมจำนวนงานแต่ละวันรับ slice จึงใช้ได้กับช่วงข้อมูลหลายขนาด</p><h2>อ้างอิงเพิ่มเติม</h2><ul><li><a href=\"https://doc.rust-lang.org/std/primitive.slice.html#method.get\">https://doc.rust-lang.org/std/primitive.slice.html#method.get</a></li><li><a href=\"https://doc.rust-lang.org/std/primitive.slice.html#method.get\">เอกสารทางการเพิ่มเติม</a></li></ul>",
      "examples": [
        {
          "title": "ตัวอย่างในบริบทแอป",
          "code": "fn total(days: &[u32]) -> u32 {\n    days.iter().sum()\n}\n\nfn main() {\n    let days = [2, 4, 6];\n    println!(\"{}\", total(&days));\n    println!(\"{}\", total(&days[..2]));\n}",
          "expected": "12\n6\n",
          "mode": "run",
          "edition": "2021"
        }
      ],
      "tips": [
        "ใช้ get เมื่อ index มาจากผู้ใช้ เพื่อรับ Option แทนการ panic เมื่อหลุดขอบเขต"
      ]
    },
    {
      "id": "custom_types",
      "title": "สร้างชนิดที่ตรงกับงาน · Custom Types",
      "section": "สร้างชนิดที่ตรงกับงาน · Custom Types",
      "source": "https://doc.rust-lang.org/rust-by-example/custom_types.html",
      "body": "<h2>แนวคิดที่ต้องรู้</h2><p>นอกจากชนิดพื้นฐาน Rust ให้สร้างชนิดที่สื่อความหมายของงานด้วย struct และ enum โดย struct รวมข้อมูลที่อยู่ด้วยกัน ส่วน enum ระบุทางเลือกที่ค่าหนึ่งเลือกเป็นได้ในขณะนั้น แต่ละ variant อาจมีข้อมูลของตัวเอง ทั้งสองแบบใช้ impl เพิ่มเมธอดได้ การตั้งชื่อชนิดทำให้ signature ของฟังก์ชันสื่อว่ารับอะไรและคืนอะไรได้ชัดขึ้น บทนี้ยังแนะนำ const กับ static สำหรับค่าที่ประกาศใช้ร่วมกัน ส่วนรายละเอียด ownership ของ field จะขยายในบทถัดไป</p><h2>เมื่อนำไปใช้ในแอป</h2><p>โมเดลงานด้วยชื่อและสถานะ แทนการใช้ตัวเลขที่ต้องจำความหมาย</p>",
      "examples": [
        {
          "title": "ตัวอย่างในบริบทแอป",
          "code": "struct Task {\n    title: String,\n    done: bool,\n}\n\nfn main() {\n    for done in [false, true] {\n        let task = Task { title: \"backup\".into(), done };\n        println!(\"{} {}\", task.title, task.done);\n    }\n}",
          "expected": "backup false\nbackup true\n",
          "mode": "run",
          "edition": "2021"
        }
      ],
      "tips": [
        "ออกแบบชนิดให้สื่อข้อจำกัดของงาน ก่อนเพิ่มเงื่อนไขกระจายหลายที่"
      ]
    },
    {
      "id": "custom_types/structs",
      "title": "ข้อมูลหนึ่งรายการ · Structures",
      "section": "สร้างชนิดที่ตรงกับงาน · Custom Types",
      "source": "https://doc.rust-lang.org/rust-by-example/custom_types/structs.html",
      "body": "<h2>แนวคิดที่ต้องรู้</h2><p>struct มีแบบ field มีชื่อ เช่น Task { title, minutes }; tuple struct ที่อ่านสมาชิกด้วยตำแหน่ง และ unit struct ที่ไม่มี field เมื่อตัวแปรใน scope มีชื่อเหมือน field ใช้ field shorthand ได้ เช่น Task { title, minutes } การสร้างค่าใหม่จาก struct เดิมใช้ ..old ได้ แต่ field ที่ย้ายมาซึ่งไม่ใช่ Copy อาจทำให้ใช้ค่านั้นของ old ต่อไม่ได้ สามารถแยก field ด้วย struct pattern และเปลี่ยนชื่อ binding ใน pattern ได้ วิธีสร้างและแยกข้อมูลเหล่านี้ช่วยให้ตามเส้นทางของข้อมูลหนึ่งรายการได้โดยไม่ต้องจำตำแหน่งใน tuple</p><h2>เมื่อนำไปใช้ในแอป</h2><p>รวมชื่อกับเวลาประเมินของงาน เพื่อส่งให้ฟังก์ชันเป็นหน่วยเดียว</p>",
      "examples": [
        {
          "title": "ตัวอย่างในบริบทแอป",
          "code": "struct Task {\n    title: &'static str,\n    minutes: u32,\n}\n\nfn main() {\n    for minutes in [15, 30] {\n        let task = Task { title: \"review\", minutes };\n        println!(\"{}: {}m\", task.title, task.minutes);\n    }\n}",
          "expected": "review: 15m\nreview: 30m\n",
          "mode": "run",
          "edition": "2021"
        }
      ],
      "tips": [
        "struct update syntax อาจ move field ที่ไม่ใช่ Copy จากค่าต้นทาง"
      ]
    },
    {
      "id": "custom_types/enum",
      "title": "สถานะที่เลือกได้ · Enums",
      "section": "สร้างชนิดที่ตรงกับงาน · Custom Types",
      "source": "https://doc.rust-lang.org/rust-by-example/custom_types/enum.html",
      "body": "<h2>แนวคิดที่ต้องรู้</h2><p>enum ประกาศ variant ที่ค่าของชนิดนั้นเป็นได้ เช่น Pending หรือ Done(u32) ต่างจาก field หลายช่องที่อยู่พร้อมกัน ค่า enum หนึ่งค่าจะเลือก variant หนึ่งแบบในขณะหนึ่ง variant อาจไม่มีข้อมูล มีข้อมูลตามตำแหน่งแบบ tuple หรือมี field มีชื่อแบบ struct การ match แยกกรณีและดึงข้อมูลข้างในได้ โดย compiler ตรวจว่าครอบคลุมค่าที่เป็นไปได้ทั้งหมด ภายใน impl สามารถใช้ Self อ้างถึงชนิดที่กำลัง implement และใช้ type alias ลดความยาวของชื่อชนิดได้</p><h2>เมื่อนำไปใช้ในแอป</h2><p>สถานะงานอาจรอทำหรือเสร็จแล้วพร้อมเลขรายงาน</p>",
      "examples": [
        {
          "title": "ตัวอย่างในบริบทแอป",
          "code": "enum State {\n    Pending,\n    Done(u32),\n}\n\nfn main() {\n    for state in [State::Pending, State::Done(8)] {\n        match state {\n            State::Pending => println!(\"pending\"),\n            State::Done(id) => println!(\"report={id}\"),\n        }\n    }\n}",
          "expected": "pending\nreport=8\n",
          "mode": "run",
          "edition": "2021"
        }
      ],
      "tips": [
        "ใช้ข้อมูลที่ผูกกับ variant แทน field เสริมที่อาจไม่สอดคล้องกับสถานะ"
      ]
    },
    {
      "id": "custom_types/enum/enum_use",
      "title": "ย่อชื่อ variant · use",
      "section": "สร้างชนิดที่ตรงกับงาน · Custom Types",
      "source": "https://doc.rust-lang.org/rust-by-example/custom_types/enum/enum_use.html",
      "body": "<h2>แนวคิดที่ต้องรู้</h2><p>ปกติอ้าง variant ผ่านชื่อ enum เช่น State::Pending แต่ use State::Pending นำชื่อนั้นเข้ามาใน scope ให้เรียก Pending ได้โดยตรง สามารถนำเข้าหลายชื่อด้วยวงเล็บปีกกา หรือใช้ * นำเข้า variant ทั้งหมด การ use เปลี่ยนวิธีอ้างชื่อ ไม่ได้สร้างชนิดหรือสำเนาค่าขึ้นใหม่ เมื่ออ่าน match จึงควรดู import ด้วยว่าชื่อสั้น ๆ เหล่านั้นมาจาก enum ใด หากนำเข้าชื่อซ้ำกันต้องเลือกชื่อให้ไม่ชนหรือกลับไปใช้ path ที่ชัดเจน</p><h2>เมื่อนำไปใช้ในแอป</h2><p>ลดความยาวของ match สถานะงาน โดยยังเลือก import เฉพาะชื่อที่ใช้</p>",
      "examples": [
        {
          "title": "ตัวอย่างในบริบทแอป",
          "code": "enum State {\n    Pending,\n    Done,\n}\n\nuse State::{Pending, Done};\n\nfn main() {\n    for state in [Pending, Done] {\n        println!(\"{}\", match state {\n            Pending => \"wait\",\n            Done => \"ok\",\n        });\n    }\n}",
          "expected": "wait\nok\n",
          "mode": "run",
          "edition": "2021"
        }
      ],
      "tips": [
        "หลีกเลี่ยง glob import เมื่อชื่ออย่าง Error หรือ Done ชนกันหลายโมดูล"
      ]
    },
    {
      "id": "custom_types/enum/c_like",
      "title": "enum กับรหัสตัวเลข · C-like",
      "section": "สร้างชนิดที่ตรงกับงาน · Custom Types",
      "source": "https://doc.rust-lang.org/rust-by-example/custom_types/enum/c_like.html",
      "body": "<h2>แนวคิดที่ต้องรู้</h2><p>enum แบบไม่มี payload ใช้แทนชุดชื่อที่มีค่าจำนวนเต็มกำกับได้ โดยกำหนด discriminant ชัดเจน เช่น Pending = 10 หรือปล่อยให้ compiler ไล่ค่าให้ตามกฎของภาษา ในตัวอย่างสามารถใช้ as แปลง variant เหล่านี้เป็นจำนวนเต็มเพื่อส่งรหัสออกไป การมีรหัสกำกับไม่ได้หมายความว่าจำนวนเต็มทุกค่าจะแปลงย้อนกลับเป็น enum ได้อย่างปลอดภัย และตัวอย่างนี้ไม่ได้กำหนดขนาดหรือ layout สำหรับ FFI ถ้าต้องใช้ข้ามภาษาให้ศึกษา representation และข้อจำกัดแยกต่างหาก</p><h2>เมื่อนำไปใช้ในแอป</h2><p>กำหนดรหัสสถานะที่โปรโตคอลภายในต้องใช้</p>",
      "examples": [
        {
          "title": "ตัวอย่างในบริบทแอป",
          "code": "enum Code {\n    Pending = 10,\n    Done = 20,\n}\n\nfn main() {\n    println!(\"{}\", Code::Pending as u8);\n    println!(\"{}\", Code::Done as u8);\n}",
          "expected": "10\n20\n",
          "mode": "run",
          "edition": "2021"
        }
      ],
      "tips": [
        "ค่าที่รับจากภายนอกควรตรวจด้วย match หรือ TryFrom ก่อนสร้างสถานะ"
      ]
    },
    {
      "id": "custom_types/enum/testcase_linked_list",
      "title": "ข้อมูลต่อกันด้วย Box · Linked list",
      "section": "สร้างชนิดที่ตรงกับงาน · Custom Types",
      "source": "https://doc.rust-lang.org/rust-by-example/custom_types/enum/testcase_linked_list.html",
      "body": "<h2>แนวคิดที่ต้องรู้</h2><p>ชนิดที่อ้างตัวเองโดยเก็บค่าตัวเองอยู่ข้างในตรง ๆ จะมีปัญหาขนาดไม่สิ้นสุด จึงใช้ indirection อย่าง Box ให้โหนดเก็บตัวชี้ไปยังโหนดถัดไปแทน enum ใช้แยกกรณีมีโหนดกับจุดจบรายการได้ เมธอด len ในตัวอย่างยืม &amp;self แล้ว match แบบ recursive เพื่อรวมจำนวนสมาชิก การเพิ่มหัวรายการทำได้โดยสร้างโหนดใหม่ที่ชี้ไปยังรายการเดิม วิธีนี้สอนการประกอบ recursive type แต่ไม่ได้ครอบคลุมการใช้งานคิวจริง เช่น การเพิ่มท้าย การลบ และต้นทุนของรายการขนาดใหญ่</p><h2>เมื่อนำไปใช้ในแอป</h2><p>ดูโครงสร้างคิวงานอย่างย่อ โดยเพิ่มหัวคิวแล้วนับสมาชิก</p>",
      "examples": [
        {
          "title": "ตัวอย่างในบริบทแอป",
          "code": "enum Queue {\n    End,\n    Item(u32, Box<Queue>),\n}\n\nimpl Queue {\n    fn len(&self) -> usize {\n        match self {\n            Self::End => 0,\n            Self::Item(_, tail) => 1 + tail.len(),\n        }\n    }\n}\n\nfn main() {\n    let queue = Queue::End;\n    println!(\"{}\", queue.len());\n    let queue = Queue::Item(7, Box::new(queue));\n    if let Queue::Item(id, _) = &queue {\n        println!(\"{id}: {}\", queue.len());\n    }\n}",
          "expected": "0\n7: 1\n",
          "mode": "run",
          "edition": "2021"
        }
      ],
      "tips": [
        "ตัวอย่างนี้สอน recursive type; ไม่ใช่ข้อสรุปว่า linked list เหมาะกว่าคอลเลกชันมาตรฐาน"
      ]
    },
    {
      "id": "custom_types/constants",
      "title": "ค่าที่ใช้ร่วมกัน · constants",
      "section": "สร้างชนิดที่ตรงกับงาน · Custom Types",
      "source": "https://doc.rust-lang.org/rust-by-example/custom_types/constants.html",
      "body": "<h2>แนวคิดที่ต้องรู้</h2><p>const ประกาศค่าคงที่พร้อมชนิดและ initializer ที่ประเมินได้ในบริบท constant ส่วน static ประกาศตำแหน่งเก็บข้อมูลที่อยู่ตลอดอายุโปรแกรม การอ้าง const เดียวกันไม่ได้รับประกันว่าจะได้ address เดียวกัน ต่างจากแนวคิดของ static ทั้งสองแบบต้องระบุชนิดของรายการนั้นให้ชัด ชื่อมักเขียนเป็นตัวใหญ่คั่นด้วยขีดล่าง การเปลี่ยน static ที่เป็น mutable มีข้อกำหนดความปลอดภัยเพิ่ม จึงไม่ควรใช้แทนตัวแปรสถานะทั่วไปเพียงเพื่อให้เข้าถึงจากหลายฟังก์ชันได้</p><h2>เมื่อนำไปใช้ในแอป</h2><p>กำหนดขนาดหน้ารายงานที่ใช้เหมือนกันหลายฟังก์ชัน</p><h2>อ้างอิงเพิ่มเติม</h2><ul><li><a href=\"https://doc.rust-lang.org/reference/items/constant-items.html\">https://doc.rust-lang.org/reference/items/constant-items.html</a></li></ul>",
      "examples": [
        {
          "title": "ตัวอย่างในบริบทแอป",
          "code": "const PAGE_SIZE: u32 = 10;\n\nfn main() {\n    for pages in [1, 3] {\n        println!(\"{}\", pages * PAGE_SIZE);\n    }\n}",
          "expected": "10\n30\n",
          "mode": "run",
          "edition": "2021"
        }
      ],
      "tips": [
        "ค่าคงที่เหมาะกับค่าที่ไม่ต้องอ่านจากการตั้งค่าของผู้ใช้"
      ]
    },
    {
      "id": "variable_bindings",
      "title": "ตั้งชื่อให้ค่า · Variable bindings",
      "section": "ตั้งชื่อให้ค่า · Variable bindings",
      "source": "https://doc.rust-lang.org/rust-by-example/variable_bindings.html",
      "body": "<h2>แนวคิดที่ต้องรู้</h2><p>let ผูกชื่อกับค่า โดย compiler ต้องทราบชนิดของ binding อาจระบุชนิดหลัง : หรือให้อนุมานจากบริบทก็ได้ ค่าเริ่มต้นของ binding เป็น immutable จึงกำหนดค่าใหม่ให้ binding ที่มีค่าแล้วไม่ได้จนกว่าจะประกาศ mut การประกาศ let ชื่อเดิมอีกครั้งเป็น shadowing ซึ่งสร้าง binding ใหม่ จึงเปลี่ยนชนิดได้เมื่อบริบทอนุญาต ไม่ใช่การเปลี่ยนชนิดของ binding เดิม ตัวแปรที่ไม่ได้ใช้จะเกิด warning ได้ หากตั้งใจไม่ใช้ชื่อหนึ่งอาจขึ้นต้นด้วย _ เพื่อสื่อเจตนา</p><h2>เมื่อนำไปใช้ในแอป</h2><p>ตั้งชื่อจำนวนงานก่อนนำไปสร้างข้อความรายงาน</p>",
      "examples": [
        {
          "title": "ตัวอย่างในบริบทแอป",
          "code": "fn main() {\n    let tasks = 3;\n    println!(\"{tasks}\");\n\n    let tasks = tasks + 2;\n    println!(\"{tasks}\");\n}",
          "expected": "3\n5\n",
          "mode": "run",
          "edition": "2021"
        }
      ],
      "tips": [
        "binding ใหม่ที่ใช้ชื่อเดิมคือ shadowing ไม่ใช่การแก้ binding เดิม"
      ]
    },
    {
      "id": "variable_bindings/mut",
      "title": "แก้ค่าอย่างตั้งใจ · Mutability",
      "section": "ตั้งชื่อให้ค่า · Variable bindings",
      "source": "https://doc.rust-lang.org/rust-by-example/variable_bindings/mut.html",
      "body": "<h2>แนวคิดที่ต้องรู้</h2><p>let mut อนุญาตให้กำหนดค่าใหม่ให้ binding เดิม แต่ชนิดยังคงเดิม เช่น ตัวนับ u32 ไม่เปลี่ยนเป็น String ด้วยการ assign การใช้ += เป็นการอ่านค่าเดิมแล้วเก็บผลที่เพิ่มแล้วกลับไป การประกาศ mut ที่ไม่ได้ใช้แก้ค่าจริงอาจถูกเตือน เพราะผู้อ่านอาจเข้าใจว่าจุดนั้นมีการเปลี่ยนสถานะ ข้อจำกัดของ binding นี้ต้องแยกจากความสามารถของค่าที่เข้าถึงผ่าน reference ซึ่งจะอธิบายในบท borrowing</p><h2>เมื่อนำไปใช้ในแอป</h2><p>สะสมจำนวนงานที่เสร็จระหว่างประมวลผล</p>",
      "examples": [
        {
          "title": "ตัวอย่างในบริบทแอป",
          "code": "fn main() {\n    let mut done = 0;\n    for count in [2, 3] {\n        done += count;\n        println!(\"{done}\");\n    }\n}",
          "expected": "2\n5\n",
          "mode": "run",
          "edition": "2021"
        }
      ],
      "tips": [
        "ใช้ mut เฉพาะเมื่อมีการแก้ค่าจริง เพื่อให้จุดเปลี่ยนสถานะมองเห็นง่าย"
      ]
    },
    {
      "id": "variable_bindings/scope",
      "title": "ขอบเขตชื่อและการบังชื่อ · Scope",
      "section": "ตั้งชื่อให้ค่า · Variable bindings",
      "source": "https://doc.rust-lang.org/rust-by-example/variable_bindings/scope.html",
      "body": "<h2>แนวคิดที่ต้องรู้</h2><p>scope คือบริเวณที่อ้างชื่อได้ โดยบล็อก { ... } สร้างขอบเขตซ้อนได้ ชื่อที่ประกาศในบล็อกย่อยใช้หลังออกบล็อกนั้นไม่ได้ ชื่อภายนอกยังใช้งานได้ในบล็อกย่อยจนกว่าจะมีชื่อใหม่มาบัง เมื่อออกบล็อกย่อยที่มี binding ใหม่ ชื่อด้านนอกจึงกลับมาให้มองเห็นเหมือนเดิม Shadowing เกิดได้ในบล็อกเดียวกันด้วยการเขียน let ใหม่ ตัวอย่างนี้แยกให้เห็นว่าการพิมพ์ชื่อเดียวกันสองตำแหน่งอาจอ้างคนละ binding</p><h2>เมื่อนำไปใช้ในแอป</h2><p>ปรับค่ารายงานชั่วคราวโดยไม่เปลี่ยนค่าหลัก</p>",
      "examples": [
        {
          "title": "ตัวอย่างในบริบทแอป",
          "code": "fn main() {\n    let limit = 10;\n    {\n        let limit = 3;\n        println!(\"{limit}\");\n    }\n    println!(\"{limit}\");\n}",
          "expected": "3\n10\n",
          "mode": "run",
          "edition": "2021"
        }
      ],
      "tips": [
        "อย่าให้ shadowing หลายชั้นทำให้ไม่รู้ว่าค่ามาจากไหน"
      ]
    },
    {
      "id": "variable_bindings/declare",
      "title": "ประกาศก่อนกำหนดค่า · Declare first",
      "section": "ตั้งชื่อให้ค่า · Variable bindings",
      "source": "https://doc.rust-lang.org/rust-by-example/variable_bindings/declare.html",
      "body": "<h2>แนวคิดที่ต้องรู้</h2><p>ประกาศ binding ไว้ก่อนแล้วกำหนดค่าในภายหลังได้ แต่ต้องกำหนดค่าก่อนอ่าน และ compiler ต้องพิสูจน์ได้ว่าทุกเส้นทางที่มาถึงจุดอ่านมีค่าพร้อมแล้ว การยังไม่กำหนดค่าไม่ได้แปลว่ามีค่าเริ่มต้นเป็นศูนย์หรือค่าว่าง ตัวอย่างกำหนด limit ทั้งแขนง true และ false จึงมีค่าหลัง if แม้ไม่ได้ใช้ mut เพราะแต่ละเส้นทางเป็นการกำหนดค่าครั้งแรกเพียงครั้งเดียว ถ้าตัด else ออกแล้วบางเส้นทางไม่มีค่า compiler จะปฏิเสธการอ่านนั้น</p><h2>เมื่อนำไปใช้ในแอป</h2><p>เลือกขนาดรายงานตามโหมดแล้วใช้งานภายหลัง</p>",
      "examples": [
        {
          "title": "ตัวอย่างในบริบทแอป",
          "code": "fn main() {\n    for compact in [true, false] {\n        let limit;\n        if compact {\n            limit = 5;\n        } else {\n            limit = 20;\n        }\n        println!(\"{limit}\");\n    }\n}",
          "expected": "5\n20\n",
          "mode": "run",
          "edition": "2021"
        }
      ],
      "tips": [
        "เมื่อทำได้ ใช้ if expression สร้างค่าใน let เดียว จะตามรอยง่ายกว่า"
      ]
    },
    {
      "id": "variable_bindings/freeze",
      "title": "บังชื่อ mutable ด้วยชื่อ immutable · Freezing",
      "section": "ตั้งชื่อให้ค่า · Variable bindings",
      "source": "https://doc.rust-lang.org/rust-by-example/variable_bindings/freeze.html",
      "body": "<h2>แนวคิดที่ต้องรู้</h2><p>สามารถสร้าง immutable binding ชื่อเดียวกับ mutable binding ในบล็อกย่อยได้ เมื่ออยู่ในบล็อกนั้นชื่อที่มองเห็นจึงแก้ค่าไม่ได้ พอออกบล็อกชื่อ mutable ด้านนอกกลับมาให้ใช้อีกครั้ง กรณีตัวเลขที่เป็น Copy การผูก let limit = limit อ่านค่ามาสร้าง binding ใหม่โดยไม่ย้ายค่าต้นทาง กรณีชนิดที่ไม่ใช่ Copy ต้องคำนึงถึง ownership เพิ่มด้วย คำว่า freezing ในตัวอย่างจึงหมายถึงการบังชื่อใน scope ไม่ได้เปลี่ยนคุณสมบัติถาวรของ binding เดิม</p><h2>เมื่อนำไปใช้ในแอป</h2><p>ดูค่าจำนวนงานในช่วงที่ไม่ต้องการแก้มัน</p>",
      "examples": [
        {
          "title": "ตัวอย่างในบริบทแอป",
          "code": "fn main() {\n    let mut limit = 5;\n    {\n        let limit = limit;\n        println!(\"{limit}\");\n    }\n    limit += 1;\n    println!(\"{limit}\");\n}",
          "expected": "5\n6\n",
          "mode": "run",
          "edition": "2021"
        }
      ],
      "tips": [
        "freeze ในตัวอย่างคือผลของ shadowing ไม่ใช่คำสั่ง lock ข้อมูล"
      ]
    },
    {
      "id": "types",
      "title": "ชนิดที่ compiler ต้องรู้ · Types",
      "section": "ชนิดที่ compiler ต้องรู้ · Types",
      "source": "https://doc.rust-lang.org/rust-by-example/types.html",
      "body": "<h2>แนวคิดที่ต้องรู้</h2><p>ชนิดของ binding กำหนดว่าทำอะไรกับค่าได้ และไม่เปลี่ยนตามค่าที่ใส่ภายหลัง</p><h2>เมื่อนำไปใช้ในแอป</h2><p>ให้จำนวนงานเป็น u32 เพื่อแยกจากชื่อที่เป็นข้อความ</p>",
      "examples": [
        {
          "title": "ตัวอย่างในบริบทแอป",
          "code": "fn main() {\n    let a: u32 = 2;\n    let b: u32 = 5;\n    println!(\"{}\", a + b);\n    println!(\"{}\", b - a);\n}",
          "expected": "7\n3\n",
          "mode": "run",
          "edition": "2021"
        }
      ],
      "tips": [
        "การอนุมานชนิดลดข้อความที่ต้องเขียน แต่ไม่ได้ทำให้ Rust เป็น dynamic typing"
      ]
    },
    {
      "id": "types/cast",
      "title": "แปลงด้วย as · Casting",
      "section": "ชนิดที่ compiler ต้องรู้ · Types",
      "source": "https://doc.rust-lang.org/rust-by-example/types/cast.html",
      "body": "<h2>แนวคิดที่ต้องรู้</h2><p>as ใช้แปลงชนิดตัวเลขตามกฎของภาษา การแปลงให้เล็กลงอาจสูญเสียข้อมูล</p><h2>เมื่อนำไปใช้ในแอป</h2><p>ดูว่ารหัสที่เกินช่วง u8 เปลี่ยนไปอย่างไรเมื่อ cast</p><h2>อ้างอิงเพิ่มเติม</h2><ul><li><a href=\"https://doc.rust-lang.org/std/convert/trait.TryFrom.html\">เอกสารทางการเพิ่มเติม</a></li></ul>",
      "examples": [
        {
          "title": "ตัวอย่างในบริบทแอป",
          "code": "fn main() {\n    for id in [255_u16, 256] {\n        println!(\"{id} -> {}\", id as u8);\n    }\n}",
          "expected": "255 -> 255\n256 -> 0\n",
          "mode": "run",
          "edition": "2021"
        }
      ],
      "tips": [
        "เมื่อค่าจากภายนอกต้องไม่สูญหาย ใช้ TryFrom และรับมือกรณีเกินช่วง"
      ]
    },
    {
      "id": "types/literals",
      "title": "ระบุชนิดที่ literal · Literals",
      "section": "ชนิดที่ compiler ต้องรู้ · Types",
      "source": "https://doc.rust-lang.org/rust-by-example/types/literals.html",
      "body": "<h2>แนวคิดที่ต้องรู้</h2><p>suffix เช่น u32 หรือ f64 ทำให้ชนิดของ literal ชัดเจน; ค่าที่ไม่ระบุใช้บริบทช่วยอนุมาน</p><h2>เมื่อนำไปใช้ในแอป</h2><p>กำหนดตัวเลขตัวอย่างให้เหมือนชนิด field ในแอป</p>",
      "examples": [
        {
          "title": "ตัวอย่างในบริบทแอป",
          "code": "fn main() {\n    let small = 2_u8;\n    let large = 2_u64;\n    println!(\"{} {}\", std::mem::size_of_val(&small), std::mem::size_of_val(&large));\n}",
          "expected": "1 8\n",
          "mode": "run",
          "edition": "2021"
        }
      ],
      "tips": [
        "ขนาดของ usize ขึ้นกับ target ต่างจากชนิดจำนวนเต็มที่ระบุจำนวนบิต"
      ]
    },
    {
      "id": "types/inference",
      "title": "อนุมานชนิดจากการใช้ · Inference",
      "section": "ชนิดที่ compiler ต้องรู้ · Types",
      "source": "https://doc.rust-lang.org/rust-by-example/types/inference.html",
      "body": "<h2>แนวคิดที่ต้องรู้</h2><p>compiler ใช้การใช้งานภายหลังช่วยอนุมานชนิดได้ เช่น push ค่าลง Vec ที่ยังไม่ได้ระบุชนิด</p><h2>เมื่อนำไปใช้ในแอป</h2><p>เริ่มรายการเลขงานว่าง แล้วเพิ่มข้อมูลที่กำหนดชนิดสมาชิก</p>",
      "examples": [
        {
          "title": "ตัวอย่างในบริบทแอป",
          "code": "fn main() {\n    let mut ids = Vec::new();\n    ids.push(3_u16);\n    ids.push(9);\n    println!(\"{:?}\", ids);\n}",
          "expected": "[3, 9]\n",
          "mode": "run",
          "edition": "2021"
        }
      ],
      "tips": [
        "ถ้าบริบทไม่พอ ระบุชนิดตรง let หรือ generic argument แทนการเดา"
      ]
    },
    {
      "id": "types/alias",
      "title": "ตั้งชื่อแทนชนิด · Aliasing",
      "section": "ชนิดที่ compiler ต้องรู้ · Types",
      "source": "https://doc.rust-lang.org/rust-by-example/types/alias.html",
      "body": "<h2>แนวคิดที่ต้องรู้</h2><p>type สร้างชื่อแทนชนิดเดิม ไม่ได้สร้างชนิดใหม่ที่ compiler แยกออกจากกัน</p><h2>เมื่อนำไปใช้ในแอป</h2><p>ชื่อ TaskId ช่วยสื่อความหมายใน signature แต่ยังรับ u64 ทั่วไปได้</p><h2>อ้างอิงเพิ่มเติม</h2><ul><li><a href=\"https://doc.rust-lang.org/reference/items/type-aliases.html\">เอกสารทางการเพิ่มเติม</a></li></ul>",
      "examples": [
        {
          "title": "ตัวอย่างในบริบทแอป",
          "code": "type TaskId = u64;\n\nfn main() {\n    let id: TaskId = 7;\n    let ordinary: u64 = id;\n    println!(\"{} {}\", id, ordinary + 1);\n}",
          "expected": "7 8\n",
          "mode": "run",
          "edition": "2021"
        }
      ],
      "tips": [
        "ถ้าต้องกันการสลับ UserId กับ TaskId ให้ใช้ newtype struct"
      ]
    },
    {
      "id": "conversion",
      "title": "แปลงค่าผ่าน trait · Conversion",
      "section": "แปลงค่าผ่าน trait · Conversion",
      "source": "https://doc.rust-lang.org/rust-by-example/conversion.html",
      "body": "<h2>แนวคิดที่ต้องรู้</h2><p>From และ Into ใช้เมื่อการแปลงตามสัญญาไม่ล้มเหลว; TryFrom และ TryInto คืนข้อผิดพลาดได้</p><h2>เมื่อนำไปใช้ในแอป</h2><p>แยกการรับค่าภายนอกออกจากชนิดข้อมูลภายใน</p>",
      "examples": [
        {
          "title": "ตัวอย่างในบริบทแอป",
          "code": "fn main() {\n    let small = 12_u8;\n    let wide = u32::from(small);\n    println!(\"{wide}\");\n    println!(\"{}\", u8::try_from(300_u32).is_err());\n}",
          "expected": "12\ntrue\n",
          "mode": "run",
          "edition": "2021"
        }
      ],
      "tips": [
        "เลือกชนิดการแปลงจากความเป็นไปได้ที่จะผิดพลาด"
      ]
    },
    {
      "id": "conversion/from_into",
      "title": "แปลงที่ไม่ล้มเหลว · From / Into",
      "section": "แปลงค่าผ่าน trait · Conversion",
      "source": "https://doc.rust-lang.org/rust-by-example/conversion/from_into.html",
      "body": "<h2>แนวคิดที่ต้องรู้</h2><p>เมื่อ implement From&lt;T&gt; ให้ U จะมี Into&lt;U&gt; สำหรับ T ผ่าน blanket implementation</p><h2>เมื่อนำไปใช้ในแอป</h2><p>หุ้มเลขงานให้มีความหมายและรับค่าจากจำนวนเต็ม</p>",
      "examples": [
        {
          "title": "ตัวอย่างในบริบทแอป",
          "code": "struct TaskId(u32);\n\nimpl From<u32> for TaskId {\n    fn from(value: u32) -> Self {\n        Self(value)\n    }\n}\n\nfn main() {\n    let a = TaskId::from(3);\n    let b: TaskId = 8_u32.into();\n    println!(\"{} {}\", a.0, b.0);\n}",
          "expected": "3 8\n",
          "mode": "run",
          "edition": "2021"
        }
      ],
      "tips": [
        "เขียน From เป็นหลักเมื่อเป็นเจ้าของชนิดปลายทาง แล้วใช้ Into ที่ฝั่งเรียก"
      ]
    },
    {
      "id": "conversion/try_from_try_into",
      "title": "แปลงพร้อมตรวจช่วง · TryFrom / TryInto",
      "section": "แปลงค่าผ่าน trait · Conversion",
      "source": "https://doc.rust-lang.org/rust-by-example/conversion/try_from_try_into.html",
      "body": "<h2>แนวคิดที่ต้องรู้</h2><p>TryFrom คืน Result เพื่อให้ผู้เรียกรับมือค่าที่แปลงไม่ได้</p><h2>เมื่อนำไปใช้ในแอป</h2><p>รับค่าขนาดหน้าในชนิดเล็ก โดยปฏิเสธจำนวนที่เกินช่วง</p>",
      "examples": [
        {
          "title": "ตัวอย่างในบริบทแอป",
          "code": "fn main() {\n    for size in [10_u16, 300] {\n        match u8::try_from(size) {\n            Ok(v) => println!(\"size={v}\"),\n            Err(_) => println!(\"out of range\")\n        }\n    }\n}",
          "expected": "size=10\nout of range\n",
          "mode": "run",
          "edition": "2021"
        }
      ],
      "tips": [
        "อย่าเปลี่ยนการแปลงที่ควรตรวจช่วงเป็น as เพียงเพื่อให้คอมไพล์ผ่าน"
      ]
    },
    {
      "id": "conversion/string",
      "title": "ข้อความกับค่าที่มีชนิด · String conversion",
      "section": "แปลงค่าผ่าน trait · Conversion",
      "source": "https://doc.rust-lang.org/rust-by-example/conversion/string.html",
      "body": "<h2>แนวคิดที่ต้องรู้</h2><p>Display ทำให้ใช้ to_string ได้ ส่วน parse ใช้ FromStr และคืน Result เพราะข้อความอาจไม่ตรงชนิด</p><h2>เมื่อนำไปใช้ในแอป</h2><p>อ่านจำนวนงานจากไฟล์ตั้งค่าที่เป็นข้อความ</p>",
      "examples": [
        {
          "title": "ตัวอย่างในบริบทแอป",
          "code": "fn main() {\n    for raw in [\"12\", \"many\"] {\n        match raw.parse::<u32>() {\n            Ok(n) => println!(\"{n}\"),\n            Err(_) => println!(\"invalid number\")\n        }\n    }\n}",
          "expected": "12\ninvalid number\n",
          "mode": "run",
          "edition": "2021"
        }
      ],
      "tips": [
        "ระบุชนิดที่ต้องการ parse ให้ชัดและส่งข้อผิดพลาดพร้อมชื่อการตั้งค่า"
      ]
    },
    {
      "id": "expression",
      "title": "บล็อกคืนค่าได้ · Expressions",
      "section": "บล็อกคืนค่าได้ · Expressions",
      "source": "https://doc.rust-lang.org/rust-by-example/expression.html",
      "body": "<h2>แนวคิดที่ต้องรู้</h2><p>บล็อกเป็น expression ได้ ค่าสุดท้ายที่ไม่มี ; เป็นผลลัพธ์; ถ้าเติม ; จะได้ ()</p><h2>เมื่อนำไปใช้ในแอป</h2><p>เลือกข้อความสรุปจากจำนวนงานโดยกำหนดค่าใน let เดียว</p>",
      "examples": [
        {
          "title": "ตัวอย่างในบริบทแอป",
          "code": "fn main() {\n    for count in [0, 2] {\n        let label = {\n            if count == 0 {\n                \"empty\"\n            } else {\n                \"ready\"\n            }\n        };\n        println!(\"{label}\");\n    }\n}",
          "expected": "empty\nready\n",
          "mode": "run",
          "edition": "2021"
        }
      ],
      "tips": [
        "ตรวจ ; ท้ายบล็อกเมื่อ compiler บอกว่าคาดหวังชนิดหนึ่งแต่พบ ()"
      ]
    },
    {
      "id": "flow_control",
      "title": "เลือกทางและทำซ้ำ · Flow of Control",
      "section": "เลือกทางและทำซ้ำ · Flow of Control",
      "source": "https://doc.rust-lang.org/rust-by-example/flow_control.html",
      "body": "<h2>แนวคิดที่ต้องรู้</h2><p>if เลือกเส้นทาง match จับรูปแบบ ส่วน loop while และ for ทำซ้ำภายใต้เงื่อนไขต่างกัน</p><h2>เมื่อนำไปใช้ในแอป</h2><p>ประมวลผลรายการงานตามสถานะของแต่ละรายการ</p>",
      "examples": [
        {
          "title": "ตัวอย่างในบริบทแอป",
          "code": "fn main() {\n    for done in [false, true] {\n        if done {\n            println!(\"archive\");\n        } else {\n            println!(\"keep\");\n        }\n    }\n}",
          "expected": "keep\narchive\n",
          "mode": "run",
          "edition": "2021"
        }
      ],
      "tips": [
        "เลือกโครงสร้างที่สะท้อนเงื่อนไขหยุดและรูปแบบข้อมูลชัดที่สุด"
      ]
    },
    {
      "id": "flow_control/if_else",
      "title": "เงื่อนไขคืนค่า · if / else",
      "section": "เลือกทางและทำซ้ำ · Flow of Control",
      "source": "https://doc.rust-lang.org/rust-by-example/flow_control/if_else.html",
      "body": "<h2>แนวคิดที่ต้องรู้</h2><p>เงื่อนไข if ต้องเป็น bool และแขนงที่ใช้เป็นค่าต้องให้ชนิดที่เข้ากันได้</p><h2>เมื่อนำไปใช้ในแอป</h2><p>เลือกขนาดชุดประมวลผลจากโหมด compact</p>",
      "examples": [
        {
          "title": "ตัวอย่างในบริบทแอป",
          "code": "fn main() {\n    for compact in [true, false] {\n        let batch = if compact { 5 } else { 20 };\n        println!(\"{batch}\");\n    }\n}",
          "expected": "5\n20\n",
          "mode": "run",
          "edition": "2021"
        }
      ],
      "tips": [
        "Rust ไม่แปลงจำนวนศูนย์หรือข้อความว่างให้เป็น bool โดยอัตโนมัติ"
      ]
    },
    {
      "id": "flow_control/loop",
      "title": "ทำซ้ำจนสั่งหยุด · loop",
      "section": "เลือกทางและทำซ้ำ · Flow of Control",
      "source": "https://doc.rust-lang.org/rust-by-example/flow_control/loop.html",
      "body": "<h2>แนวคิดที่ต้องรู้</h2><p>loop ทำซ้ำไม่จำกัดจนพบ break; continue เริ่มรอบใหม่</p><h2>เมื่อนำไปใช้ในแอป</h2><p>จำลองการประมวลผลงานทีละชิ้นจนเหลือศูนย์</p>",
      "examples": [
        {
          "title": "ตัวอย่างในบริบทแอป",
          "code": "fn main() {\n    let mut left = 2;\n    loop {\n        println!(\"left={left}\");\n        if left == 0 {\n            break;\n        }\n        left -= 1;\n    }\n}",
          "expected": "left=2\nleft=1\nleft=0\n",
          "mode": "run",
          "edition": "2021"
        }
      ],
      "tips": [
        "ตัวอย่าง retry จริงต้องมีเงื่อนไขหยุดและจัดการข้อผิดพลาดด้วย"
      ]
    },
    {
      "id": "flow_control/loop/nested",
      "title": "หยุดลูปที่ต้องการ · Labels",
      "section": "เลือกทางและทำซ้ำ · Flow of Control",
      "source": "https://doc.rust-lang.org/rust-by-example/flow_control/loop/nested.html",
      "body": "<h2>แนวคิดที่ต้องรู้</h2><p>label เช่น 'projects: ระบุว่าคำสั่ง break หรือ continue หมายถึงลูปใดเมื่อซ้อนกัน</p><h2>เมื่อนำไปใช้ในแอป</h2><p>หยุดค้นหาทั้งโครงการทันทีเมื่อเจอเลขงานที่ต้องการ</p>",
      "examples": [
        {
          "title": "ตัวอย่างในบริบทแอป",
          "code": "fn main() {\n    'projects: for project in [1, 2] {\n        for task in [3, 4] {\n            println!(\"{project}:{task}\");\n            if task == 4 {\n                break 'projects;\n            }\n        }\n    }\n}",
          "expected": "1:3\n1:4\n",
          "mode": "run",
          "edition": "2021"
        }
      ],
      "tips": [
        "ตั้งชื่อ label ตามความหมายของลูป แทนชื่อ outer ที่ต้องไล่อ่านตำแหน่ง"
      ]
    },
    {
      "id": "flow_control/loop/return",
      "title": "คืนค่าจากลูป · break value",
      "section": "เลือกทางและทำซ้ำ · Flow of Control",
      "source": "https://doc.rust-lang.org/rust-by-example/flow_control/loop/return.html",
      "body": "<h2>แนวคิดที่ต้องรู้</h2><p>break value ทำให้ loop expression ส่งค่านั้นออกมาได้</p><h2>เมื่อนำไปใช้ในแอป</h2><p>ค้นหา slot ว่างแรกจากตัวนับที่เพิ่มขึ้น</p>",
      "examples": [
        {
          "title": "ตัวอย่างในบริบทแอป",
          "code": "fn main() {\n    for occupied in [0, 2] {\n        let mut slot = 0;\n        let free = loop {\n            if slot >= occupied {\n                break slot;\n            }\n            slot += 1;\n        };\n        println!(\"{free}\");\n    }\n}",
          "expected": "0\n2\n",
          "mode": "run",
          "edition": "2021"
        }
      ],
      "tips": [
        "การคืนค่าด้วย break ใช้กับ loop ไม่ใช่ค่าผลลัพธ์จาก for หรือ while"
      ]
    },
    {
      "id": "flow_control/while",
      "title": "ทำซ้ำขณะเงื่อนไขจริง · while",
      "section": "เลือกทางและทำซ้ำ · Flow of Control",
      "source": "https://doc.rust-lang.org/rust-by-example/flow_control/while.html",
      "body": "<h2>แนวคิดที่ต้องรู้</h2><p>while ตรวจ bool ก่อนทุกรอบ และอาจไม่ทำงานเลยถ้าเงื่อนไขแรกเป็น false</p><h2>เมื่อนำไปใช้ในแอป</h2><p>ระบายจำนวนงานค้างทีละรายการ</p>",
      "examples": [
        {
          "title": "ตัวอย่างในบริบทแอป",
          "code": "fn main() {\n    for initial in [0, 2] {\n        let mut left = initial;\n        while left > 0 {\n            println!(\"{left}\");\n            left -= 1;\n        }\n        println!(\"done\");\n    }\n}",
          "expected": "done\n2\n1\ndone\n",
          "mode": "run",
          "edition": "2021"
        }
      ],
      "tips": [
        "เช็กว่าทุกรอบขยับเข้าใกล้เงื่อนไขหยุด หรือมีทางออกอื่น"
      ]
    },
    {
      "id": "flow_control/for",
      "title": "วน iterator · for และ range",
      "section": "เลือกทางและทำซ้ำ · Flow of Control",
      "source": "https://doc.rust-lang.org/rust-by-example/flow_control/for.html",
      "body": "<h2>แนวคิดที่ต้องรู้</h2><p>for วนค่าจาก IntoIterator; a..b ไม่รวม b ส่วน a..=b รวมปลายทั้งสอง</p><h2>เมื่อนำไปใช้ในแอป</h2><p>สร้างเลขหน้ารายงานโดยดูความต่างของขอบเขต</p>",
      "examples": [
        {
          "title": "ตัวอย่างในบริบทแอป",
          "code": "fn main() {\n    for page in 1..3 {\n        println!(\"exclusive={page}\");\n    }\n    for page in 1..=3 {\n        println!(\"inclusive={page}\");\n    }\n}",
          "expected": "exclusive=1\nexclusive=2\ninclusive=1\ninclusive=2\ninclusive=3\n",
          "mode": "run",
          "edition": "2021"
        }
      ],
      "tips": [
        "เลือก iter, iter_mut หรือ into_iter ตามว่าต้องการยืม แก้ผ่านการยืม หรือรับ ownership"
      ]
    },
    {
      "id": "flow_control/match",
      "title": "แยกทุกกรณี · match",
      "section": "เลือกทางและทำซ้ำ · Flow of Control",
      "source": "https://doc.rust-lang.org/rust-by-example/flow_control/match.html",
      "body": "<h2>แนวคิดที่ต้องรู้</h2><p>match เลือกแขนงจาก pattern และต้องครอบคลุมค่าที่เป็นไปได้ทั้งหมด</p><h2>เมื่อนำไปใช้ในแอป</h2><p>จำแนกจำนวนงานที่ค้างเพื่อสร้างข้อความแจ้งสถานะ</p>",
      "examples": [
        {
          "title": "ตัวอย่างในบริบทแอป",
          "code": "fn main() {\n    for pending in [0, 1, 5] {\n        println!(\"{}\", match pending {\n            0 => \"empty\",\n            1 => \"one\",\n            _ => \"many\"\n        });\n    }\n}",
          "expected": "empty\none\nmany\n",
          "mode": "run",
          "edition": "2021"
        }
      ],
      "tips": [
        "ใช้ match กับ enum เพื่อให้ compiler ช่วยเตือนเมื่อเพิ่ม variant แล้วลืมจัดการ"
      ]
    },
    {
      "id": "flow_control/match/destructuring",
      "title": "แยกข้อมูลด้วย pattern · Destructuring",
      "section": "เลือกทางและทำซ้ำ · Flow of Control",
      "source": "https://doc.rust-lang.org/rust-by-example/flow_control/match/destructuring.html",
      "body": "<h2>แนวคิดที่ต้องรู้</h2><p>pattern แยกส่วนของ tuple array struct และ enum พร้อมเลือกเงื่อนไขการจับได้</p><h2>เมื่อนำไปใช้ในแอป</h2><p>อ่านชื่อและสถานะจากข้อมูลหนึ่งรายการโดยไม่ใช้ index กระจาย</p>",
      "examples": [
        {
          "title": "ตัวอย่างในบริบทแอป",
          "code": "fn main() {\n    for task in [(\"backup\", false), (\"report\", true)] {\n        let (name, done) = task;\n        println!(\"{name} {done}\");\n    }\n}",
          "expected": "backup false\nreport true\n",
          "mode": "run",
          "edition": "2021"
        }
      ],
      "tips": [
        "pattern ที่อาจจับไม่สำเร็จต้องอยู่ในบริบทที่รับมือกรณีไม่ตรง เช่น match หรือ if let"
      ]
    },
    {
      "id": "flow_control/match/destructuring/destructure_tuple",
      "title": "จับรูปแบบ tuple",
      "section": "เลือกทางและทำซ้ำ · Flow of Control",
      "source": "https://doc.rust-lang.org/rust-by-example/flow_control/match/destructuring/destructure_tuple.html",
      "body": "<h2>แนวคิดที่ต้องรู้</h2><p>tuple pattern จับแต่ละตำแหน่งได้ ใช้ _ ข้ามค่าหนึ่งและ .. ข้ามส่วนที่เหลือ</p><h2>เมื่อนำไปใช้ในแอป</h2><p>เลือกข้อความจากคู่ชื่อโครงการกับจำนวนงาน</p>",
      "examples": [
        {
          "title": "ตัวอย่างในบริบทแอป",
          "code": "fn main() {\n    for item in [(\"home\", 0), (\"work\", 3)] {\n        match item {\n            (name, 0) => println!(\"{name}: empty\"),\n            (name, n) => println!(\"{name}: {n}\")\n        }\n    }\n}",
          "expected": "home: empty\nwork: 3\n",
          "mode": "run",
          "edition": "2021"
        }
      ],
      "tips": [
        "ถ้าต้องจำว่าตำแหน่งไหนคืออะไรหลายจุด ให้พิจารณา struct"
      ]
    },
    {
      "id": "flow_control/match/destructuring/destructure_slice",
      "title": "จับ array และ slice",
      "section": "เลือกทางและทำซ้ำ · Flow of Control",
      "source": "https://doc.rust-lang.org/rust-by-example/flow_control/match/destructuring/destructure_slice.html",
      "body": "<h2>แนวคิดที่ต้องรู้</h2><p>slice pattern แยกหัว ท้าย และส่วนกลางด้วย .. ได้โดยตรวจความยาวให้ด้วย</p><h2>เมื่อนำไปใช้ในแอป</h2><p>แสดงชื่อคำสั่งแรก หรือแจ้งว่าไม่มี argument</p>",
      "examples": [
        {
          "title": "ตัวอย่างในบริบทแอป",
          "code": "fn main() {\n    for args in [&[][..], &[\"list\", \"all\"][..]] {\n        match args {\n            [] => println!(\"no command\"),\n            [command, rest @ ..] => println!(\"{command} {}\", rest.len())\n        }\n    }\n}",
          "expected": "no command\nlist 1\n",
          "mode": "run",
          "edition": "2021"
        }
      ],
      "tips": [
        "pattern ตรวจจำนวนสมาชิกให้ แต่การแปล argument ยังต้องตรวจความหมายเอง"
      ]
    },
    {
      "id": "flow_control/match/destructuring/destructure_enum",
      "title": "แยกข้อมูลใน enum",
      "section": "เลือกทางและทำซ้ำ · Flow of Control",
      "source": "https://doc.rust-lang.org/rust-by-example/flow_control/match/destructuring/destructure_enum.html",
      "body": "<h2>แนวคิดที่ต้องรู้</h2><p>แต่ละ variant อาจมีรูปแบบข้อมูลไม่เหมือนกัน match แยกพร้อมผูกข้อมูลภายในกับชื่อได้</p><h2>เมื่อนำไปใช้ในแอป</h2><p>คำสั่งงานหนึ่งอาจเพิ่มงานหรือขอให้นับงาน</p>",
      "examples": [
        {
          "title": "ตัวอย่างในบริบทแอป",
          "code": "enum Command {\n    Add(&'static str),\n    Count\n}\n\nfn main() {\n    for c in [Command::Add(\"backup\"), Command::Count] {\n        match c {\n            Command::Add(name) => println!(\"add {name}\"),\n            Command::Count => println!(\"count\")\n        }\n    }\n}",
          "expected": "add backup\ncount\n",
          "mode": "run",
          "edition": "2021"
        }
      ],
      "tips": [
        "ให้ enum เก็บข้อมูลที่จำเป็นของแต่ละคำสั่งไว้ด้วยกัน"
      ]
    },
    {
      "id": "flow_control/match/destructuring/destructure_pointers",
      "title": "แยก reference กับ ref pattern",
      "section": "เลือกทางและทำซ้ำ · Flow of Control",
      "source": "https://doc.rust-lang.org/rust-by-example/flow_control/match/destructuring/destructure_pointers.html",
      "body": "<h2>แนวคิดที่ต้องรู้</h2><p>&amp; ใน pattern จับรูปแบบ reference ส่วน ref สร้าง reference ให้ binding; ทั้งสองมีหน้าที่ต่างกัน</p><h2>เมื่อนำไปใช้ในแอป</h2><p>อ่านจำนวนงานผ่านการยืมโดยไม่ย้ายข้อมูลต้นทาง</p>",
      "examples": [
        {
          "title": "ตัวอย่างในบริบทแอป",
          "code": "fn main() {\n    for n in [2, 5] {\n        let borrowed = &n;\n        let &count = borrowed;\n        println!(\"{} {}\", count, *borrowed);\n    }\n}",
          "expected": "2 2\n5 5\n",
          "mode": "run",
          "edition": "2021"
        }
      ],
      "tips": [
        "อย่าสับสน * สำหรับ dereference expression กับ & หรือ ref ใน pattern"
      ]
    },
    {
      "id": "flow_control/match/destructuring/destructure_structures",
      "title": "แยก field ของ struct",
      "section": "เลือกทางและทำซ้ำ · Flow of Control",
      "source": "https://doc.rust-lang.org/rust-by-example/flow_control/match/destructuring/destructure_structures.html",
      "body": "<h2>แนวคิดที่ต้องรู้</h2><p>struct pattern เลือก field ที่ต้องการและใช้ .. ข้าม field อื่นได้</p><h2>เมื่อนำไปใช้ในแอป</h2><p>รายงานจำนวนงานโดยไม่ต้องอ่านชื่อโครงการในจุดนี้</p>",
      "examples": [
        {
          "title": "ตัวอย่างในบริบทแอป",
          "code": "struct Summary {\n    project: &'static str,\n    pending: u32\n}\n\nfn main() {\n    for pending in [0, 4] {\n        let s = Summary { project: \"work\", pending };\n        let Summary { pending: count, .. } = s;\n        println!(\"{count}\");\n    }\n}",
          "expected": "0\n4\n",
          "mode": "run",
          "edition": "2021"
        }
      ],
      "tips": [
        "ใช้ชื่อใหม่ใน field pattern เมื่อช่วยให้บทบาทของค่าชัดขึ้น"
      ]
    },
    {
      "id": "flow_control/match/guard",
      "title": "เงื่อนไขเพิ่มในแขนง · Guards",
      "section": "เลือกทางและทำซ้ำ · Flow of Control",
      "source": "https://doc.rust-lang.org/rust-by-example/flow_control/match/guard.html",
      "body": "<h2>แนวคิดที่ต้องรู้</h2><p>match guard เป็น if หลัง pattern ใช้ตรวจเงื่อนไขที่ pattern อย่างเดียวไม่พอ</p><h2>เมื่อนำไปใช้ในแอป</h2><p>จัดระดับจำนวนงานตามเกณฑ์ที่เปลี่ยนได้</p>",
      "examples": [
        {
          "title": "ตัวอย่างในบริบทแอป",
          "code": "fn main() {\n    let limit = 3;\n    for n in [2, 5] {\n        println!(\"{}\", match n {\n            count if count > limit => \"busy\",\n            _ => \"normal\"\n        });\n    }\n}",
          "expected": "normal\nbusy\n",
          "mode": "run",
          "edition": "2021"
        }
      ],
      "tips": [
        "guard ไม่ทำให้ compiler ถือว่า pattern ครอบคลุมทุกค่าที่เป็นไปได้"
      ]
    },
    {
      "id": "flow_control/match/binding",
      "title": "ตั้งชื่อค่าที่จับได้ · @ binding",
      "section": "เลือกทางและทำซ้ำ · Flow of Control",
      "source": "https://doc.rust-lang.org/rust-by-example/flow_control/match/binding.html",
      "body": "<h2>แนวคิดที่ต้องรู้</h2><p>name @ pattern ผูกชื่อกับค่าพร้อมจำกัดรูปแบบที่ยอมรับ</p><h2>เมื่อนำไปใช้ในแอป</h2><p>รับเลขความสำคัญเฉพาะช่วงที่ระบบรองรับ</p>",
      "examples": [
        {
          "title": "ตัวอย่างในบริบทแอป",
          "code": "fn main() {\n    for level in [2, 8] {\n        match level {\n            valid @ 1..=3 => println!(\"priority={valid}\"),\n            _ => println!(\"invalid\")\n        }\n    }\n}",
          "expected": "priority=2\ninvalid\n",
          "mode": "run",
          "edition": "2021"
        }
      ],
      "tips": [
        "ใช้ @ เมื่อทั้งต้องตรวจ pattern และใช้ค่าที่จับได้ในแขนง"
      ]
    },
    {
      "id": "flow_control/if_let",
      "title": "สนใจเพียง pattern เดียว · if let",
      "section": "เลือกทางและทำซ้ำ · Flow of Control",
      "source": "https://doc.rust-lang.org/rust-by-example/flow_control/if_let.html",
      "body": "<h2>แนวคิดที่ต้องรู้</h2><p>if let จัดการกรณีที่ตรง pattern เดียวได้โดยไม่ต้องเขียน match เต็มชุด</p><h2>เมื่อนำไปใช้ในแอป</h2><p>อ่านเลขงานที่อาจยังไม่มีค่า แล้วแสดงเฉพาะเมื่อมี</p>",
      "examples": [
        {
          "title": "ตัวอย่างในบริบทแอป",
          "code": "fn main() {\n    for id in [None, Some(7)] {\n        if let Some(id) = id {\n            println!(\"task={id}\");\n        } else {\n            println!(\"no selection\");\n        }\n    }\n}",
          "expected": "no selection\ntask=7\n",
          "mode": "run",
          "edition": "2021"
        }
      ],
      "tips": [
        "ใช้ match เมื่อทุก variant ต้องมีการทำงานที่สำคัญ"
      ]
    },
    {
      "id": "flow_control/let_else",
      "title": "แยกกรณีใช้ไม่ได้ออกก่อน · let-else",
      "section": "เลือกทางและทำซ้ำ · Flow of Control",
      "source": "https://doc.rust-lang.org/rust-by-example/flow_control/let_else.html",
      "body": "<h2>แนวคิดที่ต้องรู้</h2><p>let pattern = expression else ต้องออกจากเส้นทางปัจจุบัน เช่น return; binding ที่จับได้ใช้ต่อใน scope ด้านนอกได้</p><h2>เมื่อนำไปใช้ในแอป</h2><p>ปฏิเสธคำขอที่ไม่มีเลขงาน แล้วทำงานกรณีปกติต่อ</p>",
      "examples": [
        {
          "title": "ตัวอย่างในบริบทแอป",
          "code": "fn show(id: Option<u32>) {\n    let Some(id) = id else {\n        println!(\"missing id\");\n        return;\n    };\n    println!(\"task={id}\");\n}\n\nfn main() {\n    show(None);\n    show(Some(9));\n}",
          "expected": "missing id\ntask=9\n",
          "mode": "run",
          "edition": "2021"
        }
      ],
      "tips": [
        "ใช้เมื่อต้องการลดการซ้อนบล็อกหลังตรวจ input"
      ]
    },
    {
      "id": "flow_control/while_let",
      "title": "วนขณะที่ยังจับ pattern ได้ · while let",
      "section": "เลือกทางและทำซ้ำ · Flow of Control",
      "source": "https://doc.rust-lang.org/rust-by-example/flow_control/while_let.html",
      "body": "<h2>แนวคิดที่ต้องรู้</h2><p>while let ทำซ้ำตราบใดที่ expression ยังตรง pattern ที่กำหนด</p><h2>เมื่อนำไปใช้ในแอป</h2><p>หยิบงานจาก stack จนไม่มีงานเหลือ</p><h2>อ้างอิงเพิ่มเติม</h2><ul><li><a href=\"https://doc.rust-lang.org/std/collections/struct.VecDeque.html\">เอกสารทางการเพิ่มเติม</a></li></ul>",
      "examples": [
        {
          "title": "ตัวอย่างในบริบทแอป",
          "code": "fn main() {\n    let mut tasks = vec![1, 2];\n    while let Some(id) = tasks.pop() {\n        println!(\"task={id}\");\n    }\n    println!(\"left={}\", tasks.len());\n}",
          "expected": "task=2\ntask=1\nleft=0\n",
          "mode": "run",
          "edition": "2021"
        }
      ],
      "tips": [
        "Vec::pop หยิบท้ายรายการ ถ้าต้องการคิวหน้าก่อนให้พิจารณา VecDeque"
      ]
    },
    {
      "id": "fn",
      "title": "แบ่งงานเป็นฟังก์ชัน · Functions",
      "section": "แบ่งงานเป็นฟังก์ชัน · Functions",
      "source": "https://doc.rust-lang.org/rust-by-example/fn.html",
      "body": "<h2>แนวคิดที่ต้องรู้</h2><p>fn ระบุชนิด parameter และชนิดคืนค่า; expression ท้ายฟังก์ชันคืนค่าได้โดยไม่ต้องเขียน return ส่วนฟังก์ชันที่ไม่ระบุผลลัพธ์คืน ()</p><h2>เมื่อนำไปใช้ในแอป</h2><p>แยกการคำนวณงานค้างออกจากข้อความแสดงผล เพื่อใช้ซ้ำกับรายงานหลายแบบ</p>",
      "examples": [
        {
          "title": "ตัวอย่างในบริบทแอป",
          "code": "fn pending(total: u32, done: u32) -> u32 {\n    total - done\n}\n\nfn main() {\n    println!(\"{}\", pending(5, 2));\n    println!(\"{}\", pending(5, 5));\n}",
          "expected": "3\n0\n",
          "mode": "run",
          "edition": "2021"
        }
      ],
      "tips": [
        "ตัวอย่างนี้สมมติว่า done ไม่เกิน total; input ภายนอกต้องตรวจเงื่อนไขนี้"
      ]
    },
    {
      "id": "fn/methods",
      "title": "พฤติกรรมของข้อมูล · Methods",
      "section": "แบ่งงานเป็นฟังก์ชัน · Functions",
      "source": "https://doc.rust-lang.org/rust-by-example/fn/methods.html",
      "body": "<h2>แนวคิดที่ต้องรู้</h2><p>impl วาง associated function และ method; method มี self เป็น receiver โดย self รับ ownership, &amp;self ยืมอ่าน และ &amp;mut self ยืมแก้</p><h2>เมื่อนำไปใช้ในแอป</h2><p>ให้งานมี method สำหรับปิดงาน แทนการแก้ field กระจาย</p>",
      "examples": [
        {
          "title": "ตัวอย่างในบริบทแอป",
          "code": "struct Task {\n    done: bool\n}\n\nimpl Task {\n    fn new() -> Self {\n        Self { done: false }\n    }\n    fn finish(&mut self) {\n        self.done = true;\n    }\n}\n\nfn main() {\n    let mut task = Task::new();\n    println!(\"{}\", task.done);\n    task.finish();\n    println!(\"{}\", task.done);\n}",
          "expected": "false\ntrue\n",
          "mode": "run",
          "edition": "2021"
        }
      ],
      "tips": [
        "เลือก receiver ตามการเข้าถึงที่ต้องใช้จริง"
      ]
    },
    {
      "id": "fn/closures",
      "title": "ฟังก์ชันที่จำค่ารอบตัว · Closures",
      "section": "แบ่งงานเป็นฟังก์ชัน · Functions",
      "source": "https://doc.rust-lang.org/rust-by-example/fn/closures.html",
      "body": "<h2>แนวคิดที่ต้องรู้</h2><p>closure เขียนเป็น |parameter| expression และจับค่าจาก environment ได้ ชนิด input/output มักอนุมานจากการใช้</p><h2>เมื่อนำไปใช้ในแอป</h2><p>ใช้ค่าเกณฑ์จากหน้าตั้งค่ามากรองจำนวนงาน</p>",
      "examples": [
        {
          "title": "ตัวอย่างในบริบทแอป",
          "code": "fn main() {\n    let limit = 3;\n    let busy = |count| count > limit;\n    println!(\"{}\", busy(2));\n    println!(\"{}\", busy(5));\n}",
          "expected": "false\ntrue\n",
          "mode": "run",
          "edition": "2021"
        }
      ],
      "tips": [
        "closure แต่ละตัวมีชนิดเฉพาะตัว แม้หน้าตาคล้ายกัน"
      ]
    },
    {
      "id": "fn/closures/capture",
      "title": "จับค่าโดยยืมหรือย้าย · Capturing",
      "section": "แบ่งงานเป็นฟังก์ชัน · Functions",
      "source": "https://doc.rust-lang.org/rust-by-example/fn/closures/capture.html",
      "body": "<h2>แนวคิดที่ต้องรู้</h2><p>closure อาจจับด้วย &amp;T, &amp;mut T หรือย้ายค่า ขึ้นกับสิ่งที่ body ทำ; move บังคับให้จับโดยค่า</p><h2>เมื่อนำไปใช้ในแอป</h2><p>ตัวนับงานต้องยืมแบบแก้ไขได้ระหว่างที่ closure ยังใช้งานอยู่</p>",
      "examples": [
        {
          "title": "ตัวอย่างในบริบทแอป",
          "code": "fn main() {\n    let mut done = 0;\n    {\n        let mut finish = || {\n            done += 1;\n            println!(\"{done}\");\n        };\n        finish();\n        finish();\n    }\n    println!(\"final={done}\");\n}",
          "expected": "1\n2\nfinal=2\n",
          "mode": "run",
          "edition": "2021"
        }
      ],
      "tips": [
        "move ไม่ได้หมายความว่า closure เรียกได้ครั้งเดียวเสมอไป ดูว่ามันย้ายค่าที่จับออกจาก body หรือไม่"
      ]
    },
    {
      "id": "fn/closures/input_parameters",
      "title": "รับ closure เป็น parameter",
      "section": "แบ่งงานเป็นฟังก์ชัน · Functions",
      "source": "https://doc.rust-lang.org/rust-by-example/fn/closures/input_parameters.html",
      "body": "<h2>แนวคิดที่ต้องรู้</h2><p>Fn ใช้ shared receiver, FnMut แก้ environment ได้ และ FnOnce อาจใช้ค่าที่จับหมดไป; Fn เป็นข้อจำกัดที่เข้มกว่าในการรับ closure</p><h2>เมื่อนำไปใช้ในแอป</h2><p>ให้ฟังก์ชันรายงานรับวิธีจัดข้อความจากผู้เรียก</p>",
      "examples": [
        {
          "title": "ตัวอย่างในบริบทแอป",
          "code": "fn report<F: Fn(u32) -> String>(format: F) {\n    println!(\"{}\", format(2));\n    println!(\"{}\", format(5));\n}\n\nfn main() {\n    let prefix = \"tasks\";\n    report(|n| format!(\"{prefix}={n}\"));\n}",
          "expected": "tasks=2\ntasks=5\n",
          "mode": "run",
          "edition": "2021"
        }
      ],
      "tips": [
        "ใช้ bound ที่ต้องการจริง ถ้าเรียกเพียงครั้งเดียว FnOnce อาจยืดหยุ่นกว่า"
      ]
    },
    {
      "id": "fn/closures/anonymity",
      "title": "ชนิดที่ไม่มีชื่อให้เขียน · Type anonymity",
      "section": "แบ่งงานเป็นฟังก์ชัน · Functions",
      "source": "https://doc.rust-lang.org/rust-by-example/fn/closures/anonymity.html",
      "body": "<h2>แนวคิดที่ต้องรู้</h2><p>compiler สร้างชนิดเฉพาะสำหรับแต่ละ closure การรับแบบ generic พร้อม Fn bound จึงรับชนิดที่ไม่ต้องระบุชื่อได้</p><h2>เมื่อนำไปใช้ในแอป</h2><p>ฟังก์ชันเดียวรับตัวตรวจงานต่างเกณฑ์กันได้โดยไม่สร้าง trait เฉพาะแอป</p>",
      "examples": [
        {
          "title": "ตัวอย่างในบริบทแอป",
          "code": "fn check<F: Fn(u32) -> bool>(f: F) {\n    println!(\"{}\", f(3));\n}\n\nfn main() {\n    check(|n| n > 2);\n    check(|n| n > 5);\n}",
          "expected": "true\nfalse\n",
          "mode": "run",
          "edition": "2021"
        }
      ],
      "tips": [
        "อย่าคิดว่า closure ที่เขียนเหมือนกันจะมีชนิดเดียวกัน"
      ]
    },
    {
      "id": "fn/closures/input_functions",
      "title": "ส่งฟังก์ชันแทน closure",
      "section": "แบ่งงานเป็นฟังก์ชัน · Functions",
      "source": "https://doc.rust-lang.org/rust-by-example/fn/closures/input_functions.html",
      "body": "<h2>แนวคิดที่ต้องรู้</h2><p>ฟังก์ชันที่เข้ากับ signature ใช้กับ parameter ที่มี Fn bound ได้ จึงไม่จำเป็นต้องห่อด้วย closure ทุกครั้ง</p><h2>เมื่อนำไปใช้ในแอป</h2><p>ใช้ตัวตรวจที่ตั้งชื่อไว้แล้วร่วมกับเครื่องมือรายงาน</p>",
      "examples": [
        {
          "title": "ตัวอย่างในบริบทแอป",
          "code": "fn urgent(n: u32) -> bool {\n    n > 3\n}\n\nfn show<F: Fn(u32) -> bool>(f: F) {\n    println!(\"{} {}\", f(2), f(5));\n}\n\nfn main() {\n    show(urgent);\n    show(|n| n == 2);\n}",
          "expected": "false true\ntrue false\n",
          "mode": "run",
          "edition": "2021"
        }
      ],
      "tips": [
        "ใช้ฟังก์ชันมีชื่อเมื่อเงื่อนไขยาวหรือมีหลายที่ใช้"
      ]
    },
    {
      "id": "fn/closures/output_parameters",
      "title": "คืน closure จากฟังก์ชัน",
      "section": "แบ่งงานเป็นฟังก์ชัน · Functions",
      "source": "https://doc.rust-lang.org/rust-by-example/fn/closures/output_parameters.html",
      "body": "<h2>แนวคิดที่ต้องรู้</h2><p>impl Fn... ซ่อนชนิด closure ที่คืนได้ และ move ย้ายค่าที่ต้องอยู่ต่อเข้าไปใน closure</p><h2>เมื่อนำไปใช้ในแอป</h2><p>สร้างตัวตรวจจำนวนงานจากเกณฑ์ตั้งค่าของแต่ละโครงการ</p>",
      "examples": [
        {
          "title": "ตัวอย่างในบริบทแอป",
          "code": "fn over(limit: u32) -> impl Fn(u32) -> bool {\n    move |count| count > limit\n}\n\nfn main() {\n    let over_three = over(3);\n    let over_ten = over(10);\n    println!(\"{} {}\", over_three(5), over_ten(5));\n}",
          "expected": "true false\n",
          "mode": "run",
          "edition": "2021"
        }
      ],
      "tips": [
        "ค่าที่คืนแบบ impl Trait ต้องเป็นชนิด concrete เดียวกันในทุกเส้นทางคืนค่า"
      ]
    },
    {
      "id": "fn/closures/closure_examples",
      "title": "ใช้ closure กับ std",
      "section": "แบ่งงานเป็นฟังก์ชัน · Functions",
      "source": "https://doc.rust-lang.org/rust-by-example/fn/closures/closure_examples.html",
      "body": "<h2>แนวคิดที่ต้องรู้</h2><p>method ของ iterator ใน std รับ closure เพื่อกำหนดการค้นหาและเงื่อนไขโดยไม่ต้องเขียนลูปเองทุกครั้ง</p><h2>เมื่อนำไปใช้ในแอป</h2><p>เลือกงานที่ยังค้างและรวมจำนวนเพื่อทำรายงาน</p>",
      "examples": [
        {
          "title": "ตัวอย่างในบริบทแอป",
          "code": "fn main() {\n    let counts = [0, 2, 5];\n    let active: Vec<_> = counts.into_iter().filter(|n| *n > 0).collect();\n    println!(\"{:?}\", active);\n}",
          "expected": "[2, 5]\n",
          "mode": "run",
          "edition": "2021"
        }
      ],
      "tips": [
        "iterator adapter ส่วนมากยังไม่ทำงานจนมีตัวขับ เช่น collect, sum หรือ for"
      ]
    },
    {
      "id": "fn/closures/closure_examples/iter_any",
      "title": "มีอย่างน้อยหนึ่งค่าหรือไม่ · any",
      "section": "แบ่งงานเป็นฟังก์ชัน · Functions",
      "source": "https://doc.rust-lang.org/rust-by-example/fn/closures/closure_examples/iter_any.html",
      "body": "<h2>แนวคิดที่ต้องรู้</h2><p>Iterator::any รับ predicate และหยุดเมื่อพบค่าที่ให้ true; ถ้าไม่พบคืน false รวมถึง iterator ว่าง</p><h2>เมื่อนำไปใช้ในแอป</h2><p>ตรวจว่ามีโครงการใดงานค้างเกินเกณฑ์</p>",
      "examples": [
        {
          "title": "ตัวอย่างในบริบทแอป",
          "code": "fn main() {\n    let pending = [1, 4, 2];\n    for limit in [3, 5] {\n        println!(\"{}\", pending.iter().any(|&n| n > limit));\n    }\n}",
          "expected": "true\nfalse\n",
          "mode": "run",
          "edition": "2021"
        }
      ],
      "tips": [
        "predicate รับ Item ของ iterator ซึ่งอาจเป็น reference หากเริ่มจาก iter()"
      ]
    },
    {
      "id": "fn/closures/closure_examples/iter_find",
      "title": "ค้นหาค่าแรก · find / position",
      "section": "แบ่งงานเป็นฟังก์ชัน · Functions",
      "source": "https://doc.rust-lang.org/rust-by-example/fn/closures/closure_examples/iter_find.html",
      "body": "<h2>แนวคิดที่ต้องรู้</h2><p>find คืน Option ของ Item แรกที่ผ่าน predicate ส่วน position คืนตำแหน่ง; predicate ของ find ยืม Item จึงอาจเห็น reference ซ้อน</p><h2>เมื่อนำไปใช้ในแอป</h2><p>หาโครงการแรกที่มีงานค้างมากกว่าจำนวนที่กำหนด</p>",
      "examples": [
        {
          "title": "ตัวอย่างในบริบทแอป",
          "code": "fn main() {\n    let counts = [1, 4, 8];\n    for limit in [3, 9] {\n        println!(\"{:?}\", counts.iter().find(|&&n| n > limit));\n    }\n    println!(\"{:?}\", counts.iter().position(|&n| n > 3));\n}",
          "expected": "Some(4)\nNone\nSome(1)\n",
          "mode": "run",
          "edition": "2021"
        }
      ],
      "tips": [
        "แยกให้ชัดว่าต้องการค่าหรือตำแหน่ง และดูชนิด Item ของ iterator ก่อนแก้จำนวน &"
      ]
    },
    {
      "id": "fn/hof",
      "title": "ประกอบการแปลงข้อมูล · Higher Order Functions",
      "section": "แบ่งงานเป็นฟังก์ชัน · Functions",
      "source": "https://doc.rust-lang.org/rust-by-example/fn/hof.html",
      "body": "<h2>แนวคิดที่ต้องรู้</h2><p>ฟังก์ชันที่รับหรือคืนฟังก์ชันเรียกว่า higher order function; map/filter เปลี่ยนหรือคัดข้อมูลแบบ lazy ก่อนรวมผล</p><h2>เมื่อนำไปใช้ในแอป</h2><p>รวมเวลาของงานที่ใช้เวลาตั้งแต่เกณฑ์ขึ้นไป</p>",
      "examples": [
        {
          "title": "ตัวอย่างในบริบทแอป",
          "code": "fn main() {\n    let minutes = [5, 15, 30];\n    for limit in [10, 20] {\n        let total: u32 = minutes.iter().copied().filter(|n| *n >= limit).sum();\n        println!(\"{total}\");\n    }\n}",
          "expected": "45\n30\n",
          "mode": "run",
          "edition": "2021"
        }
      ],
      "tips": [
        "ลำดับ filter กับ map มีผลต่อทั้งความหมายและจำนวนงานที่ต้องทำ"
      ]
    },
    {
      "id": "fn/diverging",
      "title": "ฟังก์ชันที่ไม่กลับมา · Diverging functions",
      "section": "แบ่งงานเป็นฟังก์ชัน · Functions",
      "source": "https://doc.rust-lang.org/rust-by-example/fn/diverging.html",
      "body": "<h2>แนวคิดที่ต้องรู้</h2><p>ผลลัพธ์ ! หมายถึงไม่คืนการควบคุมตามปกติ เช่น panic หรือวนไม่จบ ต่างจาก () ที่คืนได้แต่ไม่มีข้อมูล</p><h2>เมื่อนำไปใช้ในแอป</h2><p>ตัวอย่างนี้เป็นการหยุดเมื่อ invariant ภายในพัง ไม่ใช่วิธีรับมือ input ผิดจากผู้ใช้</p>",
      "examples": [
        {
          "title": "ตัวอย่างในบริบทแอป",
          "code": "fn broken_state() -> ! {\n    panic!(\"task invariant broken\")\n}\n\nfn main() {\n    broken_state();\n}",
          "expected": "",
          "mode": "should_panic",
          "edition": "2021",
          "expectedError": "task invariant broken",
          "note": "คาดว่าจะ panic ด้วยข้อความ task invariant broken"
        }
      ],
      "tips": [
        "ใช้ Result สำหรับความผิดพลาดที่ผู้เรียกควรจัดการได้"
      ]
    },
    {
      "id": "mod",
      "title": "จัดขอบเขตโค้ด · Modules",
      "section": "จัดขอบเขตโค้ด · Modules",
      "source": "https://doc.rust-lang.org/rust-by-example/mod.html",
      "body": "<h2>แนวคิดที่ต้องรู้</h2><p>module รวม function, struct, trait, impl และ module ย่อย โดยมีการควบคุม visibility ตามลำดับชั้น</p><h2>เมื่อนำไปใช้ในแอป</h2><p>แยกส่วนคำนวณรายงานออกจากจุดเริ่มโปรแกรม</p>",
      "examples": [
        {
          "title": "ตัวอย่างในบริบทแอป",
          "code": "mod report {\n    pub fn pending(done: u32) -> u32 {\n        5 - done\n    }\n}\n\nfn main() {\n    println!(\"{}\", report::pending(1));\n    println!(\"{}\", report::pending(5));\n}",
          "expected": "4\n0\n",
          "mode": "run",
          "edition": "2021"
        }
      ],
      "tips": [
        "module ช่วยจัดชื่อและ visibility ไม่ได้แยกหน่วยคอมไพล์เป็น crate ใหม่"
      ]
    },
    {
      "id": "mod/visibility",
      "title": "เปิดให้ใช้เท่าที่จำเป็น · Visibility",
      "section": "จัดขอบเขตโค้ด · Modules",
      "source": "https://doc.rust-lang.org/rust-by-example/mod/visibility.html",
      "body": "<h2>แนวคิดที่ต้องรู้</h2><p>item ภายใน module เป็น private โดยปริยาย; pub เปิดการเข้าถึง และ pub(crate), pub(super), pub(in path) จำกัดขอบเขตได้</p><h2>เมื่อนำไปใช้ในแอป</h2><p>ให้ผู้เรียกใช้ API รายงาน ขณะที่ซ่อน helper ภายใน</p>",
      "examples": [
        {
          "title": "ตัวอย่างในบริบทแอป",
          "code": "mod report {\n    fn limit() -> u32 {\n        10\n    }\n    pub fn capped(n: u32) -> u32 {\n        n.min(limit())\n    }\n}\n\nfn main() {\n    println!(\"{} {}\", report::capped(3), report::capped(20));\n}",
          "expected": "3 10\n",
          "mode": "run",
          "edition": "2021"
        }
      ],
      "tips": [
        "pub function ภายใน private module ยังถูกจำกัดด้วยทางเข้าของ module"
      ]
    },
    {
      "id": "mod/struct_visibility",
      "title": "เปิด struct แต่ซ่อน field",
      "section": "จัดขอบเขตโค้ด · Modules",
      "source": "https://doc.rust-lang.org/rust-by-example/mod/struct_visibility.html",
      "body": "<h2>แนวคิดที่ต้องรู้</h2><p>visibility ของ struct กับ field แยกกัน; struct ที่มี private field ต้องสร้างผ่านฟังก์ชันที่เข้าถึง field ได้</p><h2>เมื่อนำไปใช้ในแอป</h2><p>บังคับให้ค่าจำนวนงานผ่าน constructor แทนการสร้าง field จากภายนอก</p>",
      "examples": [
        {
          "title": "ตัวอย่างในบริบทแอป",
          "code": "mod model {\n    pub struct Count {\n        value: u32\n    }\n    impl Count {\n        pub fn new(value: u32) -> Self {\n            Self { value }\n        }\n        pub fn value(&self) -> u32 {\n            self.value\n        }\n    }\n}\n\nfn main() {\n    println!(\"{} {}\", model::Count::new(2).value(), model::Count::new(8).value());\n}",
          "expected": "2 8\n",
          "mode": "run",
          "edition": "2021"
        }
      ],
      "tips": [
        "constructor เป็นจุดวาง validation เมื่อชนิดมีข้อจำกัดเพิ่มเติม"
      ]
    },
    {
      "id": "mod/use",
      "title": "นำชื่อเข้ามาใน scope · use",
      "section": "จัดขอบเขตโค้ด · Modules",
      "source": "https://doc.rust-lang.org/rust-by-example/mod/use.html",
      "body": "<h2>แนวคิดที่ต้องรู้</h2><p>use ย่อเส้นทางชื่อและใช้ as เปลี่ยนชื่อที่นำเข้าได้ โดยไม่เปลี่ยน visibility ของ item ต้นทาง</p><h2>เมื่อนำไปใช้ในแอป</h2><p>ตั้งชื่อ alias ให้คอลเลกชันที่ใช้เก็บจำนวนงาน</p>",
      "examples": [
        {
          "title": "ตัวอย่างในบริบทแอป",
          "code": "use std::collections::HashMap as Counts;\n\nfn main() {\n    let mut counts = Counts::new();\n    counts.insert(\"work\", 2);\n    println!(\"{:?}\", counts.get(\"work\"));\n    println!(\"{:?}\", counts.get(\"home\"));\n}",
          "expected": "Some(2)\nNone\n",
          "mode": "run",
          "edition": "2021"
        }
      ],
      "tips": [
        "pub use ใช้เปิดชื่อจากอีก module เป็น API ของ module ปัจจุบันได้"
      ]
    },
    {
      "id": "mod/super",
      "title": "อ้างตำแหน่งใน module · super / self",
      "section": "จัดขอบเขตโค้ด · Modules",
      "source": "https://doc.rust-lang.org/rust-by-example/mod/super.html",
      "body": "<h2>แนวคิดที่ต้องรู้</h2><p>self อ้าง module ปัจจุบัน ส่วน super อ้าง parent module และ crate อ้างราก crate</p><h2>เมื่อนำไปใช้ในแอป</h2><p>module ย่อยใช้ค่าเกณฑ์ของ module รายงานแม่</p>",
      "examples": [
        {
          "title": "ตัวอย่างในบริบทแอป",
          "code": "mod report {\n    const LIMIT: u32 = 3;\n    pub mod status {\n        pub fn busy(n: u32) -> bool {\n            n > super::LIMIT\n        }\n    }\n}\n\nfn main() {\n    println!(\"{} {}\", report::status::busy(2), report::status::busy(5));\n}",
          "expected": "false true\n",
          "mode": "run",
          "edition": "2021"
        }
      ],
      "tips": [
        "ใช้เส้นทางที่สื่อความสัมพันธ์ระหว่าง module ให้ชัด"
      ]
    },
    {
      "id": "mod/split",
      "title": "แยก module เป็นไฟล์ · File hierarchy",
      "section": "จัดขอบเขตโค้ด · Modules",
      "source": "https://doc.rust-lang.org/rust-by-example/mod/split.html",
      "body": "<h2>แนวคิดที่ต้องรู้</h2><p>mod report; ให้ compiler หา report.rs หรือ report/mod.rs ตามโครงสร้าง module; ไม่ใช่การ include ข้อความตามอำเภอใจ</p><h2>เมื่อนำไปใช้ในแอป</h2><p>แยกตรรกะนับงานจาก main เมื่อไฟล์เริ่มยาว</p>",
      "examples": [
        {
          "title": "ตัวอย่างในบริบทแอป",
          "code": "// src/main.rs\nmod report;\nfn main() { println!(\"{}\", report::pending(5, 2)); }\n\n// src/report.rs\npub fn pending(total: u32, done: u32) -> u32 { total - done }",
          "expected": "3\n",
          "mode": "text",
          "edition": "2021",
          "note": "โค้ดสองไฟล์ ต้องสร้างโครงการ Cargo และแยกตามชื่อไฟล์ก่อนรัน cargo run"
        }
      ],
      "tips": [
        "เลือก layout ไฟล์แบบเดียวให้สม่ำเสมอในโครงการ"
      ]
    },
    {
      "id": "crates",
      "title": "หน่วยคอมไพล์ · Crates",
      "section": "หน่วยคอมไพล์ · Crates",
      "source": "https://doc.rust-lang.org/rust-by-example/crates.html",
      "body": "<h2>แนวคิดที่ต้องรู้</h2><p>crate เป็นหน่วยคอมไพล์ อาจสร้าง executable หรือ library; module หลายตัวอยู่ใน crate เดียวกันได้</p><h2>เมื่อนำไปใช้ในแอป</h2><p>แยกโค้ดรายงานที่หลายโปรแกรมใช้ร่วมกันเป็น library</p>",
      "examples": [
        {
          "title": "ตัวอย่างในบริบทแอป",
          "code": "// library crate: src/lib.rs\npub fn pending(total: u32, done: u32) -> u32 { total - done }\n// caller example\n// pending(5, 2) == 3; pending(5, 5) == 0;",
          "expected": "",
          "mode": "text",
          "edition": "2021",
          "note": "ตัวอย่าง layout ของ library ไม่ใช่ executable เดี่ยว ต้องเรียก API จาก binary หรือ test"
        }
      ],
      "tips": [
        "แยก crate เมื่อขอบเขตการนำกลับไปใช้ต้องการ ไม่ใช่แค่เพราะไฟล์เริ่มยาว"
      ]
    },
    {
      "id": "crates/lib",
      "title": "สร้าง library · Creating a Library",
      "section": "หน่วยคอมไพล์ · Crates",
      "source": "https://doc.rust-lang.org/rust-by-example/crates/lib.html",
      "body": "<h2>แนวคิดที่ต้องรู้</h2><p>library crate เปิด item ด้วย pub และไม่มี main ที่จำเป็นสำหรับ executable; rustc เลือกชนิด output ด้วย --crate-type=lib ได้</p><h2>เมื่อนำไปใช้ในแอป</h2><p>เก็บฟังก์ชันรายงานไว้ใน lib.rs เพื่อให้ CLI เรียกซ้ำ</p>",
      "examples": [
        {
          "title": "ตัวอย่างในบริบทแอป",
          "code": "// src/lib.rs\npub fn pending(total: u32, done: u32) -> u32 {\n    total - done\n}\n// สร้างด้วย cargo build ในโครงการ library",
          "expected": "",
          "mode": "text",
          "edition": "2021",
          "note": "สร้างโครงการด้วย cargo new task_core --lib และวางโค้ดใน src/lib.rs"
        }
      ],
      "tips": [
        "pub เปิด API ให้ crate อื่น แต่ module ทางเข้าต้องเปิดถึง item ด้วย"
      ]
    },
    {
      "id": "crates/using_lib",
      "title": "เรียก library · Using a Library",
      "section": "หน่วยคอมไพล์ · Crates",
      "source": "https://doc.rust-lang.org/rust-by-example/crates/using_lib.html",
      "body": "<h2>แนวคิดที่ต้องรู้</h2><p>compiler ต้องทราบ library dependency; Cargo จัดการการ build และส่ง dependency ให้ rustc ส่วนการเรียก rustc ตรงใช้ --extern</p><h2>เมื่อนำไปใช้ในแอป</h2><p>binary ใช้ตรรกะจาก library ชื่อ task_core ผ่าน dependency แบบ path</p>",
      "examples": [
        {
          "title": "ตัวอย่างในบริบทแอป",
          "code": "# Cargo.toml ของ binary\n[dependencies]\ntask_core = { path = \"../task_core\" }\n\n# src/main.rs\n# fn main() { println!(\"{}\", task_core::pending(5, 2)); }",
          "expected": "3\n",
          "mode": "text",
          "edition": "2021",
          "note": "เป็นไฟล์ TOML กับแนวทางเรียก API ต้องมี library จากหัวข้อก่อนหน้า"
        }
      ],
      "tips": [
        "เส้นทาง dependency อ้างจากโฟลเดอร์ที่เก็บ Cargo.toml"
      ]
    },
    {
      "id": "cargo",
      "title": "จัดการโครงการ · Cargo",
      "section": "จัดการโครงการ · Cargo",
      "source": "https://doc.rust-lang.org/rust-by-example/cargo.html",
      "body": "<h2>แนวคิดที่ต้องรู้</h2><p>Cargo ช่วยสร้าง build test และจัดการ dependency; Cargo.toml ระบุ package และ dependency ของโครงการ</p><h2>เมื่อนำไปใช้ในแอป</h2><p>เริ่มแอป CLI สำหรับงานแล้วใช้คำสั่งเดิมตลอดวงจรพัฒนา</p>",
      "examples": [
        {
          "title": "ตัวอย่างในบริบทแอป",
          "code": "cargo new task_app\ncd task_app\ncargo run\ncargo build\ncargo test",
          "expected": "",
          "mode": "text",
          "edition": "2021",
          "note": "คำสั่ง shell ต้องติดตั้ง Rust/Cargo; output และเวลา build ขึ้นกับเครื่องและเวอร์ชัน"
        }
      ],
      "tips": [
        "cargo build สร้างไฟล์โปรแกรม ส่วน cargo run สร้างแล้วเรียกโปรแกรมด้วย"
      ]
    },
    {
      "id": "cargo/deps",
      "title": "ระบุสิ่งที่แอปพึ่งพา · Dependencies",
      "section": "จัดการโครงการ · Cargo",
      "source": "https://doc.rust-lang.org/rust-by-example/cargo/deps.html",
      "body": "<h2>แนวคิดที่ต้องรู้</h2><p>[dependencies] รองรับเวอร์ชันจาก registry, git และ path; Cargo.lock บันทึก resolution เพื่อให้ใช้ชุด dependency เดิมได้</p><h2>เมื่อนำไปใช้ในแอป</h2><p>หากย้ายตรรกะงานเป็น crate ในเครื่อง ใช้ path แทนการเผยแพร่ package ก่อน</p>",
      "examples": [
        {
          "title": "ตัวอย่างในบริบทแอป",
          "code": "[package]\nname = \"task_app\"\nversion = \"0.1.0\"\nedition = \"2021\"\n\n[dependencies]\ntask_core = { path = \"../task_core\" }",
          "expected": "",
          "mode": "text",
          "edition": "2021",
          "note": "TOML นี้ต้องมี crate task_core อยู่ใน path ที่ระบุ ไม่ใช่ dependency ที่ติดตั้งให้ในเว็บ"
        }
      ],
      "tips": [
        "ตรวจ API และรุ่นจริงของ dependency ก่อนนำตัวอย่างภายนอกมาวาง"
      ]
    },
    {
      "id": "cargo/conventions",
      "title": "โครงสร้างไฟล์ที่ Cargo รู้จัก · Conventions",
      "section": "จัดการโครงการ · Cargo",
      "source": "https://doc.rust-lang.org/rust-by-example/cargo/conventions.html",
      "body": "<h2>แนวคิดที่ต้องรู้</h2><p>src/main.rs เป็น binary หลัก src/lib.rs เป็น library; src/bin/ เก็บ binary เพิ่ม ส่วน tests/ examples/ benches/ มีบทบาทเฉพาะ</p><h2>เมื่อนำไปใช้ในแอป</h2><p>แอปเดียวมี CLI หลัก ตัวอย่างเรียก API และ integration tests แยกตำแหน่ง</p>",
      "examples": [
        {
          "title": "ตัวอย่างในบริบทแอป",
          "code": "task_app/\n  Cargo.toml\n  src/main.rs\n  src/lib.rs\n  src/bin/export.rs\n  tests/report.rs\n  examples/count.rs",
          "expected": "",
          "mode": "text",
          "edition": "2021",
          "note": "ผังไฟล์ ไม่ใช่โค้ด Rust ที่รันได้"
        }
      ],
      "tips": [
        "อย่าใส่ไฟล์ helper integration test เป็นไฟล์ .rs ระดับ tests โดยไม่ตั้งใจ เพราะ Cargo อาจมองเป็น test crate แยก"
      ]
    },
    {
      "id": "cargo/test",
      "title": "ให้ Cargo รันชุดตรวจ · Tests",
      "section": "จัดการโครงการ · Cargo",
      "source": "https://doc.rust-lang.org/rust-by-example/cargo/test.html",
      "body": "<h2>แนวคิดที่ต้องรู้</h2><p>cargo test คอมไพล์และรัน tests; #[test] ระบุฟังก์ชันทดสอบ การ assert ไม่ผ่านทำให้ test ล้มเหลว</p><h2>เมื่อนำไปใช้ในแอป</h2><p>ตรวจจำนวนงานค้างทั้งกรณีบางงานเสร็จและเสร็จทั้งหมด</p>",
      "examples": [
        {
          "title": "ตัวอย่างในบริบทแอป",
          "code": "// src/lib.rs\npub fn pending(total: u32, done: u32) -> u32 { total - done }\n#[test]\nfn counts_pending() {\n    assert_eq!(pending(5, 2), 3);\n    assert_eq!(pending(5, 5), 0);\n}",
          "expected": "",
          "mode": "text",
          "edition": "2021",
          "note": "โค้ดสำหรับ src/lib.rs ต้องรันด้วย cargo test; rustc main แบบปกติไม่รัน #[test]"
        }
      ],
      "tips": [
        "เลือก test ที่ตรวจพฤติกรรมสำคัญและขอบเขตข้อมูล ไม่ใช่เพียงเรียกฟังก์ชันโดยไม่ assert"
      ]
    },
    {
      "id": "cargo/build_scripts",
      "title": "ทำงานก่อนคอมไพล์ · Build scripts",
      "section": "จัดการโครงการ · Cargo",
      "source": "https://doc.rust-lang.org/rust-by-example/cargo/build_scripts.html",
      "body": "<h2>แนวคิดที่ต้องรู้</h2><p>build.rs เป็นโปรแกรม build script แยกต่างหากสำหรับงานอย่าง generate code หรือเชื่อม native library และสื่อสารกับ Cargo ผ่าน stdout ตามรูปแบบที่กำหนด</p><h2>เมื่อนำไปใช้ในแอป</h2><p>เมื่อไฟล์ตั้งค่าต้นแบบเปลี่ยน ให้ Cargo รู้ว่าควรรันขั้นตอน build ใหม่</p>",
      "examples": [
        {
          "title": "ตัวอย่างในบริบทแอป",
          "code": "// build.rs\nfn main() {\n    println!(\"cargo:rerun-if-changed=config.template\");\n}",
          "expected": "",
          "mode": "text",
          "edition": "2021",
          "note": "วางในราก package และเรียกผ่าน cargo build ไม่ใช่โค้ด runtime ของแอป"
        }
      ],
      "tips": [
        "build script ทำงานบน host; ถ้า cross compile อย่าสมมติว่า host คือ target"
      ]
    },
    {
      "id": "attribute",
      "title": "ข้อมูลกำกับโค้ด · Attributes",
      "section": "ข้อมูลกำกับโค้ด · Attributes",
      "source": "https://doc.rust-lang.org/rust-by-example/attribute.html",
      "body": "<h2>แนวคิดที่ต้องรู้</h2><p>#[...] ใช้กับ item ที่ตามมา ส่วน #![...] ใช้กับ enclosing item; attribute ควบคุม derive, lint, test และ conditional compilation ได้</p><h2>เมื่อนำไปใช้ในแอป</h2><p>สร้าง Debug ให้ข้อมูลรายงานโดยไม่ต้องเขียน implementation เอง</p>",
      "examples": [
        {
          "title": "ตัวอย่างในบริบทแอป",
          "code": "#[derive(Debug)]\nstruct Report {\n    count: u32\n}\n\nfn main() {\n    println!(\"{:?}\", Report { count: 2 });\n    println!(\"{:?}\", Report { count: 5 });\n}",
          "expected": "Report { count: 2 }\nReport { count: 5 }\n",
          "mode": "run",
          "edition": "2021"
        }
      ],
      "tips": [
        "attribute ไม่ใช่คอมเมนต์ มันมีผลกับการคอมไพล์หรือเครื่องมือที่อ่านโค้ด"
      ]
    },
    {
      "id": "attribute/unused",
      "title": "คำเตือนโค้ดที่ไม่ได้ใช้ · dead_code",
      "section": "ข้อมูลกำกับโค้ด · Attributes",
      "source": "https://doc.rust-lang.org/rust-by-example/attribute/unused.html",
      "body": "<h2>แนวคิดที่ต้องรู้</h2><p>dead_code lint แจ้ง item ที่ไม่ถูกใช้; #[allow(dead_code)] ปิดคำเตือนเฉพาะ scope ที่วาง attribute</p><h2>เมื่อนำไปใช้ในแอป</h2><p>helper ที่เก็บไว้เพื่อสาธิตอาจถูกปิด warning แต่แอปจริงควรถามก่อนว่ายังต้องมีหรือไม่</p>",
      "examples": [
        {
          "title": "ตัวอย่างในบริบทแอป",
          "code": "#[allow(dead_code)]\nfn old_report() {}\n\nfn report(n: u32) {\n    println!(\"{n}\");\n}\n\nfn main() {\n    report(2);\n    report(5);\n}",
          "expected": "2\n5\n",
          "mode": "run",
          "edition": "2021"
        }
      ],
      "tips": [
        "ปิด lint ในขอบเขตเล็กที่สุดและลบโค้ดที่ไม่จำเป็นแทนการปิด warning ทั้ง crate"
      ]
    },
    {
      "id": "attribute/crate",
      "title": "กำกับ crate · crate attributes",
      "section": "ข้อมูลกำกับโค้ด · Attributes",
      "source": "https://doc.rust-lang.org/rust-by-example/attribute/crate.html",
      "body": "<h2>แนวคิดที่ต้องรู้</h2><p>crate_name และ crate_type ระบุชื่อและชนิดเมื่อเรียก rustc โดยตรง; โครงการ Cargo ให้กำหนดผ่าน manifest แทน</p><h2>เมื่อนำไปใช้ในแอป</h2><p>ทำ library คำนวณงานโดยใช้ rustc ตรงเพื่อเห็นหน่วย build</p>",
      "examples": [
        {
          "title": "ตัวอย่างในบริบทแอป",
          "code": "// task_core.rs\n#![crate_type = \"lib\"]\n#![crate_name = \"task_core\"]\npub fn pending(total: u32, done: u32) -> u32 { total - done }\n// rustc task_core.rs",
          "expected": "",
          "mode": "text",
          "edition": "2021",
          "note": "ไฟล์ library ต้อง build ด้วย rustc หรือ Cargo ไม่ใช่ executable ที่พิมพ์ output"
        }
      ],
      "tips": [
        "สำหรับแอปที่ใช้ Cargo ให้จัดการ package/library target ใน Cargo.toml"
      ]
    },
    {
      "id": "attribute/cfg",
      "title": "เลือกโค้ดตอนคอมไพล์ · cfg",
      "section": "ข้อมูลกำกับโค้ด · Attributes",
      "source": "https://doc.rust-lang.org/rust-by-example/attribute/cfg.html",
      "body": "<h2>แนวคิดที่ต้องรู้</h2><p>#[cfg(...)] ตัด item ออกจากการคอมไพล์ ส่วน cfg!(...) ให้ bool และไม่ได้ตัดโค้ดในแขนง if ออกก่อนตรวจชนิด</p><h2>เมื่อนำไปใช้ในแอป</h2><p>เลือก separator ตามระบบปฏิบัติการโดยไม่สมมติว่าเครื่องผู้ใช้เหมือนเครื่องพัฒนา</p>",
      "examples": [
        {
          "title": "ตัวอย่างในบริบทแอป",
          "code": "fn main() { println!(\"windows={}\", cfg!(target_os = \"windows\")); println!(\"unix={}\", cfg!(unix)); }",
          "expected": "",
          "mode": "text",
          "edition": "2021",
          "note": "ผลขึ้นกับ target ที่คอมไพล์ ไม่ใช่ค่าที่เปลี่ยนได้ขณะรัน"
        }
      ],
      "tips": [
        "ทั้งสองแขนงของ if cfg!(...) ต้องเป็นโค้ดที่ถูกต้องบน target นั้น"
      ]
    },
    {
      "id": "attribute/cfg/custom",
      "title": "เพิ่มเงื่อนไข cfg ของตนเอง",
      "section": "ข้อมูลกำกับโค้ด · Attributes",
      "source": "https://doc.rust-lang.org/rust-by-example/attribute/cfg/custom.html",
      "body": "<h2>แนวคิดที่ต้องรู้</h2><p>rustc รับ custom cfg ผ่าน --cfg; item ที่ถูกตัดออกไม่สามารถอ้างถึงโดยไม่มีเงื่อนไขรองรับได้</p><h2>เมื่อนำไปใช้ในแอป</h2><p>ทำโหมดรายงานพิเศษที่เลือกในขั้นตอน build</p>",
      "examples": [
        {
          "title": "ตัวอย่างในบริบทแอป",
          "code": "#[cfg(compact)]\nfn limit() -> u32 { 5 }\n#[cfg(not(compact))]\nfn limit() -> u32 { 20 }\nfn main() { println!(\"{}\", limit()); }",
          "expected": "ไม่ส่ง --cfg compact: 20\nส่ง --cfg compact: 5",
          "mode": "text",
          "edition": "2021",
          "note": "รัน rustc main.rs และ rustc --cfg compact main.rs เพื่อเปรียบเทียบ ต้องมี compiler"
        }
      ],
      "tips": [
        "เมื่อใช้ Cargo ต้องประกาศ custom cfg ที่คาดไว้ให้ระบบตรวจ cfg ด้วย"
      ]
    },
    {
      "id": "generics",
      "title": "โค้ดเดียวใช้หลายชนิด · Generics",
      "section": "โค้ดเดียวใช้หลายชนิด · Generics",
      "source": "https://doc.rust-lang.org/rust-by-example/generics.html",
      "body": "<h2>แนวคิดที่ต้องรู้</h2><p>type parameter เช่น T ให้โครงสร้างหรือฟังก์ชันทำงานกับชนิดหลายแบบ แต่ body ใช้ได้เฉพาะความสามารถที่มี bound รองรับ</p><h2>เมื่อนำไปใช้ในแอป</h2><p>หุ้มผลรายงานทั้งจำนวนงานและชื่อโครงการด้วยโครงสร้างเดียว</p>",
      "examples": [
        {
          "title": "ตัวอย่างในบริบทแอป",
          "code": "struct Report<T> {\n    value: T\n}\n\nfn main() {\n    let count = Report { value: 3 };\n    let name = Report { value: \"work\" };\n    println!(\"{} {}\", count.value, name.value);\n}",
          "expected": "3 work\n",
          "mode": "run",
          "edition": "2021"
        }
      ],
      "tips": [
        "เพิ่ม generic เมื่อมีชนิดหลายแบบจริง ไม่จำเป็นต้องทำทุก struct ให้เป็น generic"
      ]
    },
    {
      "id": "generics/gen_fn",
      "title": "ฟังก์ชัน generic",
      "section": "โค้ดเดียวใช้หลายชนิด · Generics",
      "source": "https://doc.rust-lang.org/rust-by-example/generics/gen_fn.html",
      "body": "<h2>แนวคิดที่ต้องรู้</h2><p>ประกาศ fn name&lt;T&gt; ทำให้ T เป็น parameter ชนิด; ใช้ ::&lt;Type&gt; เมื่อ compiler อนุมานไม่พอ</p><h2>เมื่อนำไปใช้ในแอป</h2><p>คืนค่าที่เลือกไว้โดยไม่ผูกกับชนิดข้อมูลรายงาน</p>",
      "examples": [
        {
          "title": "ตัวอย่างในบริบทแอป",
          "code": "fn chosen<T>(value: T) -> T {\n    value\n}\n\nfn main() {\n    println!(\"{}\", chosen::<u32>(3));\n    println!(\"{}\", chosen(\"work\"));\n}",
          "expected": "3\nwork\n",
          "mode": "run",
          "edition": "2021"
        }
      ],
      "tips": [
        "body ที่รับ T ทั่วไปยังพิมพ์ด้วย {} ไม่ได้หากไม่มี Display bound"
      ]
    },
    {
      "id": "generics/impl",
      "title": "method ของชนิด generic",
      "section": "โค้ดเดียวใช้หลายชนิด · Generics",
      "source": "https://doc.rust-lang.org/rust-by-example/generics/impl.html",
      "body": "<h2>แนวคิดที่ต้องรู้</h2><p>impl&lt;T&gt; Report&lt;T&gt; สร้าง implementation สำหรับทุก T; impl Report&lt;u32&gt; สร้างเฉพาะชนิดนั้น</p><h2>เมื่อนำไปใช้ในแอป</h2><p>ให้รายงานอ่านค่าได้โดยยืม ไม่ต้อง clone ค่าทั้งชุด</p>",
      "examples": [
        {
          "title": "ตัวอย่างในบริบทแอป",
          "code": "struct Report<T>(T);\n\nimpl<T> Report<T> {\n    fn value(&self) -> &T {\n        &self.0\n    }\n}\n\nfn main() {\n    println!(\"{}\", Report(3).value());\n    println!(\"{}\", Report(\"work\").value());\n}",
          "expected": "3\nwork\n",
          "mode": "run",
          "edition": "2021"
        }
      ],
      "tips": [
        "อย่าลืมประกาศ <T> หลัง impl เมื่อ T ยังเป็น parameter"
      ]
    },
    {
      "id": "generics/gen_trait",
      "title": "trait ที่มี type parameter",
      "section": "โค้ดเดียวใช้หลายชนิด · Generics",
      "source": "https://doc.rust-lang.org/rust-by-example/generics/gen_trait.html",
      "body": "<h2>แนวคิดที่ต้องรู้</h2><p>trait อาจ generic เหนือชนิด input ได้ และชนิดเดียวอาจมี implementation สำหรับ input หลายชนิดตามกฎ coherence</p><h2>เมื่อนำไปใช้ในแอป</h2><p>กำหนดวิธีตรวจข้อมูลของ task importer โดยรับ input เป็นชนิดที่กำหนด</p>",
      "examples": [
        {
          "title": "ตัวอย่างในบริบทแอป",
          "code": "trait Accepts<T> {\n    fn accepts(&self, value: T) -> bool;\n}\n\nstruct Positive;\n\nimpl Accepts<u32> for Positive {\n    fn accepts(&self, value: u32) -> bool {\n        value > 0\n    }\n}\n\nfn main() {\n    println!(\"{} {}\", Positive.accepts(0), Positive.accepts(3));\n}",
          "expected": "false true\n",
          "mode": "run",
          "edition": "2021"
        }
      ],
      "tips": [
        "พิจารณา associated type เมื่อชนิดนั้นควรเลือกได้เพียงแบบเดียวต่อ implementation"
      ]
    },
    {
      "id": "generics/bounds",
      "title": "ระบุความสามารถที่ต้องมี · Bounds",
      "section": "โค้ดเดียวใช้หลายชนิด · Generics",
      "source": "https://doc.rust-lang.org/rust-by-example/generics/bounds.html",
      "body": "<h2>แนวคิดที่ต้องรู้</h2><p>T: Trait จำกัดว่าผู้เรียกต้องส่งชนิดที่ implement trait นั้น จึงเรียก method ของ trait ใน body ได้</p><h2>เมื่อนำไปใช้ในแอป</h2><p>ฟังก์ชันพิมพ์รายงานต้องการ Display ไม่ได้ต้องการชนิดตัวเลขเฉพาะ</p>",
      "examples": [
        {
          "title": "ตัวอย่างในบริบทแอป",
          "code": "use std::fmt::Display;\n\nfn report<T: Display>(value: T) {\n    println!(\"{value}\");\n}\n\nfn main() {\n    report(3);\n    report(\"work\");\n}",
          "expected": "3\nwork\n",
          "mode": "run",
          "edition": "2021"
        }
      ],
      "tips": [
        "bound มีหน้าที่บอกความสามารถขั้นต่ำที่ body ต้องใช้"
      ]
    },
    {
      "id": "generics/bounds/testcase_empty",
      "title": "trait ที่ใช้เป็นเครื่องหมาย · Empty bounds",
      "section": "โค้ดเดียวใช้หลายชนิด · Generics",
      "source": "https://doc.rust-lang.org/rust-by-example/generics/bounds/testcase_empty.html",
      "body": "<h2>แนวคิดที่ต้องรู้</h2><p>trait ที่ไม่มี method ยังใช้เป็น bound เพื่อจำกัดกลุ่มชนิดได้</p><h2>เมื่อนำไปใช้ในแอป</h2><p>อนุญาตให้ส่งออกเฉพาะชนิดรายงานที่ประกาศว่า export ได้</p>",
      "examples": [
        {
          "title": "ตัวอย่างในบริบทแอป",
          "code": "trait Exportable {}\n\nstruct Report(u32);\n\nimpl Exportable for Report {}\n\nfn export<T: Exportable>(_: &T) {\n    println!(\"export allowed\");\n}\n\nfn main() {\n    export(&Report(2));\n    export(&Report(5));\n}",
          "expected": "export allowed\nexport allowed\n",
          "mode": "run",
          "edition": "2021"
        }
      ],
      "tips": [
        "marker trait บอกการจัดประเภทตามสัญญาของแอป แต่ไม่ได้ตรวจเนื้อหาข้อมูลให้เอง"
      ]
    },
    {
      "id": "generics/multi_bounds",
      "title": "ต้องมีหลายความสามารถ · Multiple bounds",
      "section": "โค้ดเดียวใช้หลายชนิด · Generics",
      "source": "https://doc.rust-lang.org/rust-by-example/generics/multi_bounds.html",
      "body": "<h2>แนวคิดที่ต้องรู้</h2><p>ใช้ + รวม trait bounds เช่น Display + Debug เมื่อฟังก์ชันต้องใช้ทั้งสองจริง</p><h2>เมื่อนำไปใช้ในแอป</h2><p>รายงานหนึ่งค่าในรูปแบบผู้ใช้และรูปแบบตรวจข้อมูล</p>",
      "examples": [
        {
          "title": "ตัวอย่างในบริบทแอป",
          "code": "use std::fmt::{Display, Debug};\n\nfn show<T: Display + Debug>(value: T) {\n    println!(\"{value} / {value:?}\");\n}\n\nfn main() {\n    show(3);\n    show(\"work\");\n}",
          "expected": "3 / 3\nwork / \"work\"\n",
          "mode": "run",
          "edition": "2021"
        }
      ],
      "tips": [
        "อย่าเพิ่ม Clone หรือ Debug เพียงเผื่อใช้ถ้า body ไม่ได้ต้องการ"
      ]
    },
    {
      "id": "generics/where",
      "title": "ย้าย bound ให้อ่านง่าย · where",
      "section": "โค้ดเดียวใช้หลายชนิด · Generics",
      "source": "https://doc.rust-lang.org/rust-by-example/generics/where.html",
      "body": "<h2>แนวคิดที่ต้องรู้</h2><p>where แยกข้อจำกัดชนิดออกจากรายการ parameter และเขียนข้อจำกัดของชนิดประกอบได้</p><h2>เมื่อนำไปใช้ในแอป</h2><p>แยก signature รายงานออกจากข้อกำหนดการพิมพ์</p>",
      "examples": [
        {
          "title": "ตัวอย่างในบริบทแอป",
          "code": "fn report<T>(value: T)\nwhere\n    T: std::fmt::Display\n{\n    println!(\"{value}\");\n}\n\nfn main() {\n    report(3);\n    report(\"ready\");\n}",
          "expected": "3\nready\n",
          "mode": "run",
          "edition": "2021"
        }
      ],
      "tips": [
        "ใช้ where เมื่อหลาย bound ทำให้ signature ยาวจนอ่านไม่ออก"
      ]
    },
    {
      "id": "generics/new_types",
      "title": "แยกชนิดแม้ใช้ตัวเลขเหมือนกัน · Newtype",
      "section": "โค้ดเดียวใช้หลายชนิด · Generics",
      "source": "https://doc.rust-lang.org/rust-by-example/generics/new_types.html",
      "body": "<h2>แนวคิดที่ต้องรู้</h2><p>tuple struct สร้างชนิดใหม่ ต่างจาก type alias; compiler ไม่ถือว่า wrapper กับค่าภายในเป็นชนิดเดียวกัน</p><h2>เมื่อนำไปใช้ในแอป</h2><p>แยก TaskId ออกจาก UserId เพื่อกันส่งเลขสลับตำแหน่ง</p><h2>อ้างอิงเพิ่มเติม</h2><ul><li><a href=\"https://doc.rust-lang.org/error_codes/E0308.html\">เอกสารทางการเพิ่มเติม</a></li></ul>",
      "examples": [
        {
          "title": "ตัวอย่างในบริบทแอป",
          "code": "struct TaskId(u32);\nstruct UserId(u32);\n\nfn main() {\n    let task = TaskId(3);\n    let user = UserId(3);\n    println!(\"task={} user={}\", task.0, user.0);\n}",
          "expected": "task=3 user=3\n",
          "mode": "run",
          "edition": "2021"
        },
        {
          "title": "เมื่อเปลี่ยนโค้ดจนผิดสัญญา",
          "code": "struct TaskId(u32);\nstruct UserId(u32);\nfn open_task(_: TaskId) {}\nfn main() {\n    open_task(UserId(3));\n}",
          "expected": "",
          "mode": "compile_fail",
          "edition": "2021",
          "expectedError": "E0308",
          "note": "ตัวอย่างตั้งใจให้คอมไพล์ไม่ผ่าน ต้องตรวจรหัสข้อผิดพลาดตามที่ระบุ ไม่ใช่ยอมรับ error ใดก็ได้"
        }
      ],
      "tips": [
        "การแยกชนิดช่วยกันสลับบทบาท แต่ยังต้องตรวจว่ารหัสนั้นมีอยู่จริง"
      ]
    },
    {
      "id": "generics/assoc_items",
      "title": "ชนิดและค่าที่ผูกกับ trait · Associated items",
      "section": "โค้ดเดียวใช้หลายชนิด · Generics",
      "source": "https://doc.rust-lang.org/rust-by-example/generics/assoc_items.html",
      "body": "<h2>แนวคิดที่ต้องรู้</h2><p>associated item เป็นชื่อที่กำหนดใน trait หรือ impl เช่น associated type เพื่อบอกชนิดผลลัพธ์ของ implementation</p><h2>เมื่อนำไปใช้ในแอป</h2><p>แหล่งข้อมูลแต่ละชนิดระบุชนิดรายการที่มันคืน</p>",
      "examples": [
        {
          "title": "ตัวอย่างในบริบทแอป",
          "code": "trait Source {\n    type Item;\n    fn first(&self) -> Self::Item;\n}\n\nstruct Tasks;\n\nimpl Source for Tasks {\n    type Item = u32;\n    fn first(&self) -> u32 {\n        7\n    }\n}\n\nfn main() {\n    println!(\"{}\", Tasks.first());\n}",
          "expected": "7\n",
          "mode": "run",
          "edition": "2021"
        }
      ],
      "tips": [
        "ชนิดที่ผูกกับ trait ทำให้ signature ผู้ใช้ไม่ต้องรับ generic parameter ที่สัมพันธ์กันหลายตัว"
      ]
    },
    {
      "id": "generics/assoc_items/the_problem",
      "title": "ปัญหา parameter ที่ต้องส่งต่อหลายชั้น",
      "section": "โค้ดเดียวใช้หลายชนิด · Generics",
      "source": "https://doc.rust-lang.org/rust-by-example/generics/assoc_items/the_problem.html",
      "body": "<h2>แนวคิดที่ต้องรู้</h2><p>trait generic หลาย parameter อาจทำให้ผู้เรียกต้องระบุชนิดที่มีความสัมพันธ์กับ container ซ้ำในทุกฟังก์ชัน</p><h2>เมื่อนำไปใช้ในแอป</h2><p>แม้ฟังก์ชันต้องการเพียงจำนวนรายการ ก็ยังต้องนำ parameter ของ trait ไปด้วย</p>",
      "examples": [
        {
          "title": "ตัวอย่างในบริบทแอป",
          "code": "trait Contains<T> {\n    fn has(&self, item: T) -> bool;\n}\n\nimpl Contains<u32> for Vec<u32> {\n    fn has(&self, item: u32) -> bool {\n        self.contains(&item)\n    }\n}\n\nfn check<C: Contains<u32>>(c: &C, id: u32) -> bool {\n    c.has(id)\n}\n\nfn main() {\n    println!(\"{} {}\", check(&vec![2, 5], 2), check(&vec![2, 5], 9));\n}",
          "expected": "true false\n",
          "mode": "run",
          "edition": "2021"
        }
      ],
      "tips": [
        "ถ้าชนิดสมาชิกถูกกำหนดโดย container อยู่แล้ว associated type อาจสื่อความสัมพันธ์ได้ตรงกว่า"
      ]
    },
    {
      "id": "generics/assoc_items/types",
      "title": "ให้ implementation เลือกชนิด · Associated types",
      "section": "โค้ดเดียวใช้หลายชนิด · Generics",
      "source": "https://doc.rust-lang.org/rust-by-example/generics/assoc_items/types.html",
      "body": "<h2>แนวคิดที่ต้องรู้</h2><p>ประกาศ type Item ใน trait แล้วระบุใน impl; ผู้เรียกอ้างชนิดผ่าน C::Item แทน parameter แยก</p><h2>เมื่อนำไปใช้ในแอป</h2><p>collection งานประกาศชนิดรหัสของสมาชิกใน API</p>",
      "examples": [
        {
          "title": "ตัวอย่างในบริบทแอป",
          "code": "trait Contains {\n    type Item;\n    fn has(&self, item: Self::Item) -> bool;\n}\n\nimpl Contains for Vec<u32> {\n    type Item = u32;\n    fn has(&self, item: u32) -> bool {\n        self.contains(&item)\n    }\n}\n\nfn main() {\n    println!(\"{} {}\", vec![2, 5].has(2), vec![2, 5].has(9));\n}",
          "expected": "true false\n",
          "mode": "run",
          "edition": "2021"
        }
      ],
      "tips": [
        "trait ที่มี associated type เลือกค่า type นั้นต่อ implementation เดียว ไม่เหมือน generic input หลายแบบ"
      ]
    },
    {
      "id": "generics/phantom",
      "title": "บอกชนิดที่ไม่ได้เก็บจริง · PhantomData",
      "section": "โค้ดเดียวใช้หลายชนิด · Generics",
      "source": "https://doc.rust-lang.org/rust-by-example/generics/phantom.html",
      "body": "<h2>แนวคิดที่ต้องรู้</h2><p>PhantomData&lt;T&gt; ทำให้ compiler รับรู้ความสัมพันธ์กับ T แม้ไม่มี field ข้อมูล T จริง และมีผลต่อการตรวจชนิดและคุณสมบัติของ wrapper</p><h2>เมื่อนำไปใช้ในแอป</h2><p>ทำรหัสงานคนละหมวดโดยไม่ต้องเก็บข้อมูล marker เพิ่ม</p>",
      "examples": [
        {
          "title": "ตัวอย่างในบริบทแอป",
          "code": "use std::marker::PhantomData;\n\nstruct Id<T> {\n    value: u32,\n    marker: PhantomData<T>\n}\n\nstruct Task;\n\nfn main() {\n    for value in [2, 5] {\n        let id = Id::<Task> { value, marker: PhantomData };\n        println!(\"{}\", id.value);\n    }\n}",
          "expected": "2\n5\n",
          "mode": "run",
          "edition": "2021"
        }
      ],
      "tips": [
        "PhantomData ไม่ทำ validation ให้ และความสัมพันธ์แบบ ownership/variance ต้องออกแบบอย่างระมัดระวัง"
      ]
    },
    {
      "id": "generics/phantom/testcase_units",
      "title": "กันการบวกคนละหน่วย · Phantom units",
      "section": "โค้ดเดียวใช้หลายชนิด · Generics",
      "source": "https://doc.rust-lang.org/rust-by-example/generics/phantom/testcase_units.html",
      "body": "<h2>แนวคิดที่ต้องรู้</h2><p>ใช้ marker แยก Length&lt;Meters&gt; ออกจาก Length&lt;Millimeters&gt; ได้ และกำหนด Add เฉพาะหน่วยเดียวกัน</p><h2>เมื่อนำไปใช้ในแอป</h2><p>ข้อมูลระยะทางจากสองเซนเซอร์รวมได้เมื่อหน่วยตรงกัน</p>",
      "examples": [
        {
          "title": "ตัวอย่างในบริบทแอป",
          "code": "use std::{marker::PhantomData, ops::Add};\n\nstruct Meters;\nstruct Length<U>(u32, PhantomData<U>);\n\nimpl<U> Add for Length<U> {\n    type Output = Self;\n    fn add(self, rhs: Self) -> Self {\n        Self(self.0 + rhs.0, PhantomData)\n    }\n}\n\nfn main() {\n    let a = Length::<Meters>(2, PhantomData);\n    let b = Length::<Meters>(5, PhantomData);\n    println!(\"{}\", (a + b).0);\n}",
          "expected": "7\n",
          "mode": "run",
          "edition": "2021"
        }
      ],
      "tips": [
        "การแปลงหน่วยต้องกำหนดสูตรเอง marker เพียงกันการผสมชนิดที่ไม่ตรงกัน"
      ]
    },
    {
      "id": "scope",
      "title": "ขอบเขตข้อมูล · Scoping rules",
      "section": "ขอบเขตข้อมูล · Scoping rules",
      "source": "https://doc.rust-lang.org/rust-by-example/scope.html",
      "body": "<h2>แนวคิดที่ต้องรู้</h2><p>scope เกี่ยวข้องกับการสร้างและทำลายค่า ส่วน ownership, borrowing และ lifetime ช่วยกำหนดว่าค่าใดใช้ที่ใดได้อย่างปลอดภัย</p><h2>เมื่อนำไปใช้ในแอป</h2><p>ข้อมูลที่ยืมมาเพื่อรายงานต้องไม่อยู่ยาวกว่าเจ้าของข้อมูล</p>",
      "examples": [
        {
          "title": "ตัวอย่างในบริบทแอป",
          "code": "fn main() {\n    let tasks = vec![\"backup\", \"review\"];\n    {\n        let summary = &tasks;\n        println!(\"{}\", summary.len());\n    }\n    println!(\"{}\", tasks.len());\n}",
          "expected": "2\n2\n",
          "mode": "run",
          "edition": "2021"
        }
      ],
      "tips": [
        "แยกอายุของข้อมูลออกจากระยะที่มีการยืมข้อมูลนั้น"
      ]
    },
    {
      "id": "scope/raii",
      "title": "คืนทรัพยากรเมื่อจบขอบเขต · RAII",
      "section": "ขอบเขตข้อมูล · Scoping rules",
      "source": "https://doc.rust-lang.org/rust-by-example/scope/raii.html",
      "body": "<h2>แนวคิดที่ต้องรู้</h2><p>ค่าที่เป็นเจ้าของทรัพยากรเรียก Drop เมื่อถูกทำลาย จึงผูกการคืนทรัพยากรกับอายุของค่าได้โดยไม่ต้องสั่ง free เอง</p><h2>เมื่อนำไปใช้ในแอป</h2><p>ดูว่าทรัพยากรจำลองของงานย่อยถูกคืนก่อนจบ main</p>",
      "examples": [
        {
          "title": "ตัวอย่างในบริบทแอป",
          "code": "struct Work(&'static str);\n\nimpl Drop for Work {\n    fn drop(&mut self) {\n        println!(\"release {}\", self.0);\n    }\n}\n\nfn main() {\n    let _outer = Work(\"outer\");\n    {\n        let _inner = Work(\"inner\");\n        println!(\"working\");\n    }\n    println!(\"finished\");\n}",
          "expected": "working\nrelease inner\nfinished\nrelease outer\n",
          "mode": "run",
          "edition": "2021"
        }
      ],
      "tips": [
        "Drop ไม่รับประกันว่าจะถูกเรียกหาก process abort หรือถูกระบบหยุดทันที"
      ]
    },
    {
      "id": "scope/move",
      "title": "ส่งต่อเจ้าของค่า · Ownership and moves",
      "section": "ขอบเขตข้อมูล · Scoping rules",
      "source": "https://doc.rust-lang.org/rust-by-example/scope/move.html",
      "body": "<h2>แนวคิดที่ต้องรู้</h2><p>assignment และการส่ง argument แบบค่าอาจย้าย ownership สำหรับชนิดที่ไม่ใช่ Copy หลัง move ใช้ binding เดิมไม่ได้จนกว่าจะกำหนดค่าใหม่</p><h2>เมื่อนำไปใช้ในแอป</h2><p>ส่งชื่องานจากขั้นตอนอ่านไปขั้นตอนบันทึกโดยไม่คัดลอก String</p><h2>อ้างอิงเพิ่มเติม</h2><ul><li><a href=\"https://doc.rust-lang.org/error_codes/E0382.html\">เอกสารทางการเพิ่มเติม</a></li></ul>",
      "examples": [
        {
          "title": "ตัวอย่างในบริบทแอป",
          "code": "fn save(name: String) {\n    println!(\"saved {name}\");\n}\n\nfn main() {\n    let draft = String::from(\"backup\");\n    let ready = draft;\n    save(ready);\n    let count = 3_u32;\n    let copied = count;\n    println!(\"{count} {copied}\");\n}",
          "expected": "saved backup\n3 3\n",
          "mode": "run",
          "edition": "2021"
        },
        {
          "title": "เมื่อเปลี่ยนโค้ดจนผิดสัญญา",
          "code": "fn main() {\n    let draft = String::from(\"backup\");\n    let saved = draft;\n    println!(\"{draft} {saved}\");\n}",
          "expected": "",
          "mode": "compile_fail",
          "edition": "2021",
          "expectedError": "E0382",
          "note": "ตัวอย่างตั้งใจให้คอมไพล์ไม่ผ่าน ต้องตรวจรหัสข้อผิดพลาดตามที่ระบุ ไม่ใช่ยอมรับ error ใดก็ได้"
        }
      ],
      "tips": [
        "ใช้การยืมเมื่อผู้รับเพียงอ่านข้อมูลและไม่จำเป็นต้องเป็นเจ้าของ"
      ]
    },
    {
      "id": "scope/move/mut",
      "title": "เจ้าของใหม่เลือก mut ได้",
      "section": "ขอบเขตข้อมูล · Scoping rules",
      "source": "https://doc.rust-lang.org/rust-by-example/scope/move/mut.html",
      "body": "<h2>แนวคิดที่ต้องรู้</h2><p>mutability ของ binding ไม่ได้ผูกติดกับค่าตลอดไป ค่าจาก binding immutable ย้ายไป binding mutable ได้</p><h2>เมื่อนำไปใช้ในแอป</h2><p>รับรายการงานที่อ่านมา แล้วเริ่มขั้นตอนแก้ไขภายใต้เจ้าของใหม่</p>",
      "examples": [
        {
          "title": "ตัวอย่างในบริบทแอป",
          "code": "fn main() {\n    let loaded = vec![1, 2];\n    let mut editable = loaded;\n    editable.push(3);\n    println!(\"{:?}\", editable);\n}",
          "expected": "[1, 2, 3]\n",
          "mode": "run",
          "edition": "2021"
        }
      ],
      "tips": [
        "การเปลี่ยนชื่อ binding หลัง move ไม่ได้ clone buffer"
      ]
    },
    {
      "id": "scope/move/partial_move",
      "title": "ย้ายเพียงบาง field · Partial moves",
      "section": "ขอบเขตข้อมูล · Scoping rules",
      "source": "https://doc.rust-lang.org/rust-by-example/scope/move/partial_move.html",
      "body": "<h2>แนวคิดที่ต้องรู้</h2><p>destructuring ย้าย field ที่ไม่ใช่ Copy บางส่วนพร้อมยืม field อื่นได้ หลังจากนั้นใช้ทั้ง struct เดิมไม่ได้ แต่ field ที่ยังไม่ถูกย้ายอาจใช้ได้; ชนิดที่มี Drop มีข้อจำกัดเพิ่ม</p><h2>เมื่อนำไปใช้ในแอป</h2><p>ส่ง title ไปเก็บแยก แต่ยังอ่านเลขความสำคัญของงานได้</p>",
      "examples": [
        {
          "title": "ตัวอย่างในบริบทแอป",
          "code": "struct Task {\n    title: String,\n    priority: u8\n}\n\nfn main() {\n    let task = Task { title: \"backup\".into(), priority: 2 };\n    let Task { title, .. } = task;\n    println!(\"{title} {}\", task.priority);\n}",
          "expected": "backup 2\n",
          "mode": "run",
          "edition": "2021"
        }
      ],
      "tips": [
        "ระวัง move ที่เกิดจาก pattern โดยไม่ได้ตั้งใจ ถ้าต้องแค่อ่านให้ยืม field"
      ]
    },
    {
      "id": "scope/borrow",
      "title": "ใช้ข้อมูลโดยไม่รับ ownership · Borrowing",
      "section": "ขอบเขตข้อมูล · Scoping rules",
      "source": "https://doc.rust-lang.org/rust-by-example/scope/borrow.html",
      "body": "<h2>แนวคิดที่ต้องรู้</h2><p>&amp;T ให้ผู้เรียกยืมอ่านข้อมูล โดยเจ้าของยังมีหน้าที่ทำลายค่า; reference ต้องไม่อยู่เลยอายุข้อมูลที่อ้างถึง</p><h2>เมื่อนำไปใช้ในแอป</h2><p>รายงานชื่องานโดยไม่กิน String ที่ผู้เรียกยังต้องใช้ต่อ</p><h2>อ้างอิงเพิ่มเติม</h2><ul><li><a href=\"https://doc.rust-lang.org/std/primitive.str.html\">เอกสารทางการเพิ่มเติม</a></li></ul>",
      "examples": [
        {
          "title": "ตัวอย่างในบริบทแอป",
          "code": "fn show(title: &str) {\n    println!(\"{title}\");\n}\n\nfn main() {\n    let title = String::from(\"backup\");\n    show(&title);\n    show(&title);\n    println!(\"length={}\", title.len());\n}",
          "expected": "backup\nbackup\nlength=6\n",
          "mode": "run",
          "edition": "2021"
        }
      ],
      "tips": [
        "รับ &str แทน &String เมื่อฟังก์ชันต้องการเพียงอ่านข้อความ"
      ]
    },
    {
      "id": "scope/borrow/mut",
      "title": "ให้ยืมแก้ข้อมูล · &mut",
      "section": "ขอบเขตข้อมูล · Scoping rules",
      "source": "https://doc.rust-lang.org/rust-by-example/scope/borrow/mut.html",
      "body": "<h2>แนวคิดที่ต้องรู้</h2><p>&amp;mut T ให้สิทธิ์แก้ข้อมูลที่ยืมมา โดยเจ้าของเดิมต้องอนุญาตให้ยืมแบบ mutable</p><h2>เมื่อนำไปใช้ในแอป</h2><p>ฟังก์ชันปิดงานแก้จำนวนงานค้างผ่าน reference</p>",
      "examples": [
        {
          "title": "ตัวอย่างในบริบทแอป",
          "code": "fn finish(pending: &mut u32) {\n    if *pending > 0 {\n        *pending -= 1;\n    }\n}\n\nfn main() {\n    let mut pending = 2;\n    finish(&mut pending);\n    println!(\"{pending}\");\n    finish(&mut pending);\n    println!(\"{pending}\");\n}",
          "expected": "1\n0\n",
          "mode": "run",
          "edition": "2021"
        }
      ],
      "tips": [
        "ใช้ * เมื่อแก้ค่าที่อยู่หลัง reference ไม่ใช่เปลี่ยนตัว reference เอง"
      ]
    },
    {
      "id": "scope/borrow/alias",
      "title": "กฎการยืมที่ทับซ้อน · Aliasing",
      "section": "ขอบเขตข้อมูล · Scoping rules",
      "source": "https://doc.rust-lang.org/rust-by-example/scope/borrow/alias.html",
      "body": "<h2>แนวคิดที่ต้องรู้</h2><p>ขณะมี shared borrow ที่ยังใช้งานอยู่จะสร้าง mutable borrow ทับไม่ได้; mutable borrow ต้องไม่มีการเข้าถึงที่ขัดกันระหว่างที่มันยังใช้ต่อ</p><h2>เมื่อนำไปใช้ในแอป</h2><p>อ่านรายการจากสองจุด แล้วค่อยเพิ่มงานเมื่อการอ่านครั้งสุดท้ายจบ</p><h2>อ้างอิงเพิ่มเติม</h2><ul><li><a href=\"https://doc.rust-lang.org/error_codes/E0502.html\">เอกสารทางการเพิ่มเติม</a></li></ul>",
      "examples": [
        {
          "title": "ตัวอย่างในบริบทแอป",
          "code": "fn main() {\n    let mut ids = vec![1];\n    let a = &ids;\n    let b = &ids;\n    println!(\"{} {}\", a.len(), b.len());\n    ids.push(2);\n    println!(\"{}\", ids.len());\n}",
          "expected": "1 1\n2\n",
          "mode": "run",
          "edition": "2021"
        },
        {
          "title": "เมื่อเปลี่ยนโค้ดจนผิดสัญญา",
          "code": "fn main() {\n    let mut tasks = vec![1];\n    let view = &tasks;\n    tasks.push(2);\n    println!(\"{:?}\", view);\n}",
          "expected": "",
          "mode": "compile_fail",
          "edition": "2021",
          "expectedError": "E0502",
          "note": "ตัวอย่างตั้งใจให้คอมไพล์ไม่ผ่าน ต้องตรวจรหัสข้อผิดพลาดตามที่ระบุ ไม่ใช่ยอมรับ error ใดก็ได้"
        }
      ],
      "tips": [
        "compiler มักจบการยืมหลังการใช้ครั้งสุดท้าย ไม่จำเป็นต้องรอปิดบล็อกเสมอ"
      ]
    },
    {
      "id": "scope/borrow/ref",
      "title": "ยืม field ผ่าน pattern · ref",
      "section": "ขอบเขตข้อมูล · Scoping rules",
      "source": "https://doc.rust-lang.org/rust-by-example/scope/borrow/ref.html",
      "body": "<h2>แนวคิดที่ต้องรู้</h2><p>ref และ ref mut สร้าง binding เป็น reference ระหว่าง destructuring โดยไม่ย้าย field ออกจากเจ้าของ</p><h2>เมื่อนำไปใช้ในแอป</h2><p>อ่าน title ของงานผ่าน pattern แล้วใช้ทั้งงานต่อได้</p>",
      "examples": [
        {
          "title": "ตัวอย่างในบริบทแอป",
          "code": "struct Task {\n    title: String\n}\n\nfn main() {\n    let task = Task { title: \"backup\".into() };\n    let Task { ref title } = task;\n    println!(\"{title}\");\n    println!(\"{}\", task.title);\n}",
          "expected": "backup\nbackup\n",
          "mode": "run",
          "edition": "2021"
        }
      ],
      "tips": [
        "ใน Rust รุ่นปัจจุบัน match ergonomics ช่วยยืมผ่าน pattern ได้หลายกรณี โดยยังต้องเข้าใจกฎ ownership"
      ]
    },
    {
      "id": "scope/lifetime",
      "title": "อายุของการยืม · Lifetimes",
      "section": "ขอบเขตข้อมูล · Scoping rules",
      "source": "https://doc.rust-lang.org/rust-by-example/scope/lifetime.html",
      "body": "<h2>แนวคิดที่ต้องรู้</h2><p>lifetime ใช้อธิบายช่วงที่ reference ใช้ได้ compiler ตรวจว่าข้อมูลที่อ้างถึงยังอยู่; annotation ไม่ได้ยืดอายุข้อมูลหรือสร้างข้อมูลใหม่</p><h2>เมื่อนำไปใช้ในแอป</h2><p>ฟังก์ชันเลือกชื่อรายงานคืน reference ที่ยืมมาจาก input</p>",
      "examples": [
        {
          "title": "ตัวอย่างในบริบทแอป",
          "code": "fn choose<'a>(a: &'a str, b: &'a str) -> &'a str {\n    if a.len() >= b.len() {\n        a\n    } else {\n        b\n    }\n}\n\nfn main() {\n    println!(\"{}\", choose(\"work\", \"home\"));\n    println!(\"{}\", choose(\"work\", \"personal\"));\n}",
          "expected": "work\npersonal\n",
          "mode": "run",
          "edition": "2021"
        }
      ],
      "tips": [
        "เมื่อคืนค่าจากข้อมูลที่สร้างในฟังก์ชันเอง ให้คืนค่าที่เป็นเจ้าของ เช่น String"
      ]
    },
    {
      "id": "scope/lifetime/explicit",
      "title": "ระบุความสัมพันธ์ของ reference",
      "section": "ขอบเขตข้อมูล · Scoping rules",
      "source": "https://doc.rust-lang.org/rust-by-example/scope/lifetime/explicit.html",
      "body": "<h2>แนวคิดที่ต้องรู้</h2><p>ชื่ออย่าง 'a ใน signature บอกความสัมพันธ์ระหว่างอายุ reference โดยไม่ได้กำหนดจำนวนวินาทีหรือบังคับให้ข้อมูลอยู่ตลอดโปรแกรม</p><h2>เมื่อนำไปใช้ในแอป</h2><p>เลือกชื่อที่ยาวกว่าโดยให้ผลลัพธ์ใช้ได้เท่าช่วงร่วมที่ input ทั้งสองยังถูกต้อง</p>",
      "examples": [
        {
          "title": "ตัวอย่างในบริบทแอป",
          "code": "fn longer<'a>(a: &'a str, b: &'a str) -> &'a str {\n    if a.len() > b.len() {\n        a\n    } else {\n        b\n    }\n}\n\nfn main() {\n    let work = String::from(\"work\");\n    let personal = String::from(\"personal\");\n    println!(\"{}\", longer(&work, &personal));\n}",
          "expected": "personal\n",
          "mode": "run",
          "edition": "2021"
        }
      ],
      "tips": [
        "ตัวอักษรชื่อ lifetime ไม่มีความหมายพิเศษ แต่ความสัมพันธ์ที่ประกาศมีความหมาย"
      ]
    },
    {
      "id": "scope/lifetime/fn",
      "title": "lifetime ใน signature ฟังก์ชัน",
      "section": "ขอบเขตข้อมูล · Scoping rules",
      "source": "https://doc.rust-lang.org/rust-by-example/scope/lifetime/fn.html",
      "body": "<h2>แนวคิดที่ต้องรู้</h2><p>reference ที่คืนต้องผูกอายุกับ reference ที่รับเข้า หรือข้อมูลที่มีอายุเพียงพออย่าง static; คืน reference ไปยัง local ที่กำลังถูกทำลายไม่ได้</p><h2>เมื่อนำไปใช้ในแอป</h2><p>คืนส่วนชื่อที่ตัดช่องว่างโดยไม่จอง String ใหม่</p>",
      "examples": [
        {
          "title": "ตัวอย่างในบริบทแอป",
          "code": "fn clean<'a>(title: &'a str) -> &'a str {\n    title.trim()\n}\n\nfn main() {\n    println!(\"[{}]\", clean(\" work \"));\n    println!(\"[{}]\", clean(\"home\"));\n}",
          "expected": "[work]\n[home]\n",
          "mode": "run",
          "edition": "2021"
        }
      ],
      "tips": [
        "annotation ทำให้ความสัมพันธ์เห็นชัด แต่ตัวอย่าง input reference เดียวมักละได้ด้วย elision"
      ]
    },
    {
      "id": "scope/lifetime/methods",
      "title": "lifetime ใน method",
      "section": "ขอบเขตข้อมูล · Scoping rules",
      "source": "https://doc.rust-lang.org/rust-by-example/scope/lifetime/methods.html",
      "body": "<h2>แนวคิดที่ต้องรู้</h2><p>method ใช้ lifetime เช่นเดียวกับฟังก์ชัน และ receiver &amp;self มักให้กฎ elision ผูกผลลัพธ์ reference กับ self ได้</p><h2>เมื่อนำไปใช้ในแอป</h2><p>คืนชื่องานที่ยืมจาก field ของตัวเอง</p>",
      "examples": [
        {
          "title": "ตัวอย่างในบริบทแอป",
          "code": "struct Task(String);\n\nimpl Task {\n    fn title<'a>(&'a self) -> &'a str {\n        &self.0\n    }\n}\n\nfn main() {\n    let task = Task(\"backup\".into());\n    println!(\"{}\", task.title());\n}",
          "expected": "backup\n",
          "mode": "run",
          "edition": "2021"
        }
      ],
      "tips": [
        "อย่าใส่ lifetime ที่ยาวเกินจำเป็นให้ &mut self เพราะอาจจำกัดการใช้ instance ต่อ"
      ]
    },
    {
      "id": "scope/lifetime/struct",
      "title": "struct ที่ยืมข้อมูล",
      "section": "ขอบเขตข้อมูล · Scoping rules",
      "source": "https://doc.rust-lang.org/stable/rust-by-example/scope/lifetime/struct.html",
      "body": "<h2>แนวคิดที่ต้องรู้</h2><p>เมื่อ struct เก็บ reference ที่อายุขึ้นกับข้อมูลภายนอก ใช้ lifetime parameter บอกความสัมพันธ์นั้น; field ที่ใช้ static โดยตรงไม่ต้องมี parameter</p><h2>เมื่อนำไปใช้ในแอป</h2><p>สร้างมุมมองรายงานชั่วคราวที่ยืมชื่อโครงการโดยไม่ clone</p>",
      "examples": [
        {
          "title": "ตัวอย่างในบริบทแอป",
          "code": "struct View<'a> {\n    title: &'a str\n}\n\nfn main() {\n    let title = String::from(\"work\");\n    let view = View { title: &title };\n    println!(\"{}\", view.title);\n    println!(\"{}\", title);\n}",
          "expected": "work\nwork\n",
          "mode": "run",
          "edition": "2021"
        }
      ],
      "tips": [
        "ถ้า instance ต้องอยู่ต่อหลัง input ถูกทิ้ง ให้เก็บ String หรือรูปแบบ ownership ที่เหมาะสม"
      ]
    },
    {
      "id": "scope/lifetime/trait",
      "title": "lifetime ใน trait implementation",
      "section": "ขอบเขตข้อมูล · Scoping rules",
      "source": "https://doc.rust-lang.org/rust-by-example/scope/lifetime/trait.html",
      "body": "<h2>แนวคิดที่ต้องรู้</h2><p>ชนิดที่มี lifetime parameter ต้องประกาศ parameter ที่ impl ด้วยเมื่อ implementation ใช้ได้กับหลายอายุการยืม</p><h2>เมื่อนำไปใช้ในแอป</h2><p>ทำ Display ให้มุมมองชื่องานที่ยืมมาจากข้อมูลอื่น</p>",
      "examples": [
        {
          "title": "ตัวอย่างในบริบทแอป",
          "code": "use std::fmt;\n\nstruct View<'a>(&'a str);\n\nimpl<'a> fmt::Display for View<'a> {\n    fn fmt(&self, f: &mut fmt::Formatter<'_>) -> fmt::Result {\n        write!(f, \"{}\", self.0)\n    }\n}\n\nfn main() {\n    println!(\"{} {}\", View(\"work\"), View(\"home\"));\n}",
          "expected": "work home\n",
          "mode": "run",
          "edition": "2021"
        }
      ],
      "tips": [
        "แยก lifetime ของข้อมูลที่ struct ยืมออกจาก lifetime ของการยืม self ใน method"
      ]
    },
    {
      "id": "scope/lifetime/lifetime_bounds",
      "title": "กำหนดอายุขั้นต่ำ · Lifetime bounds",
      "section": "ขอบเขตข้อมูล · Scoping rules",
      "source": "https://doc.rust-lang.org/rust-by-example/scope/lifetime/lifetime_bounds.html",
      "body": "<h2>แนวคิดที่ต้องรู้</h2><p>T: 'a บอกว่า reference ภายใน T ต้องใช้ได้ตลอด 'a; 'a: 'b บอกว่า 'a อยู่ได้นานอย่างน้อยเท่า 'b</p><h2>เมื่อนำไปใช้ในแอป</h2><p>helper อ่านค่ารายงานที่ยืมได้ตลอดช่วงที่กำลังแสดงผล</p>",
      "examples": [
        {
          "title": "ตัวอย่างในบริบทแอป",
          "code": "fn show<'a, T>(value: &'a T)\nwhere\n    T: std::fmt::Display + 'a\n{\n    println!(\"{value}\");\n}\n\nfn main() {\n    let title = String::from(\"work\");\n    show(&title);\n    show(&3);\n}",
          "expected": "work\n3\n",
          "mode": "run",
          "edition": "2021"
        }
      ],
      "tips": [
        "lifetime bound ไม่ได้แปลว่าค่าต้องมี reference ภายในเสมอไป"
      ]
    },
    {
      "id": "scope/lifetime/lifetime_coercion",
      "title": "ใช้ reference ในช่วงที่สั้นลง",
      "section": "ขอบเขตข้อมูล · Scoping rules",
      "source": "https://doc.rust-lang.org/rust-by-example/scope/lifetime/lifetime_coercion.html",
      "body": "<h2>แนวคิดที่ต้องรู้</h2><p>reference ที่ใช้ได้นานกว่าสามารถใช้ในบริบทที่ต้องการอายุสั้นกว่าได้ตามกฎ subtyping; ไม่ใช่การยืดอายุค่าที่สั้นกว่า</p><h2>เมื่อนำไปใช้ในแอป</h2><p>รวมชื่อคงที่กับข้อมูลอ่านจากผู้ใช้ภายในช่วงที่ผู้ใช้ยังมีข้อมูลนั้น</p>",
      "examples": [
        {
          "title": "ตัวอย่างในบริบทแอป",
          "code": "fn pick<'a>(a: &'a str, b: &'a str) -> &'a str {\n    if b.is_empty() {\n        a\n    } else {\n        b\n    }\n}\n\nfn main() {\n    let input = String::from(\"home\");\n    println!(\"{}\", pick(\"default\", &input));\n    println!(\"{}\", pick(\"default\", \"\"));\n}",
          "expected": "home\ndefault\n",
          "mode": "run",
          "edition": "2021"
        }
      ],
      "tips": [
        "การย่ออายุ reference ใน signature ไม่ได้เปลี่ยนอายุจริงของเจ้าของ"
      ]
    },
    {
      "id": "scope/lifetime/static_lifetime",
      "title": "ความหมายสองแบบของ static",
      "section": "ขอบเขตข้อมูล · Scoping rules",
      "source": "https://doc.rust-lang.org/rust-by-example/scope/lifetime/static_lifetime.html",
      "body": "<h2>แนวคิดที่ต้องรู้</h2><p>&amp;'static T อ้างข้อมูลที่อยู่ได้ตลอดโปรแกรม ส่วน T: 'static หมายถึง T ไม่มี reference ที่ผูกกับข้อมูลอายุสั้นกว่า; String ที่เป็นเจ้าของจึงผ่าน bound ได้และยังถูก drop ปกติ</p><h2>เมื่อนำไปใช้ในแอป</h2><p>ส่งค่าที่เป็นเจ้าของให้ตัวประมวลผลที่ไม่ยืมข้อมูลจาก stack ของผู้เรียก</p>",
      "examples": [
        {
          "title": "ตัวอย่างในบริบทแอป",
          "code": "fn owned<T: std::fmt::Display + 'static>(value: T) {\n    println!(\"{value}\");\n}\n\nfn main() {\n    let name: &'static str = \"default\";\n    owned(name);\n    owned(String::from(\"work\"));\n}",
          "expected": "default\nwork\n",
          "mode": "run",
          "edition": "2021"
        }
      ],
      "tips": [
        "อย่าแก้ปัญหา borrow checker ด้วยการใส่ static ถ้าข้อมูลจริงไม่ได้มีอายุตามนั้น"
      ]
    },
    {
      "id": "scope/lifetime/elision",
      "title": "ละ lifetime เมื่อกฎชัด · Elision",
      "section": "ขอบเขตข้อมูล · Scoping rules",
      "source": "https://doc.rust-lang.org/rust-by-example/scope/lifetime/elision.html",
      "body": "<h2>แนวคิดที่ต้องรู้</h2><p>แต่ละ input reference ที่ละ annotation ได้ lifetime ของตนเอง; input เดียวเชื่อมกับ output และใน method ที่มี &amp;self กฎเชื่อม output กับ receiver</p><h2>เมื่อนำไปใช้ในแอป</h2><p>API ตัดช่องว่างชื่ออ่านง่ายได้โดยไม่ต้องเขียนชื่อ lifetime เอง</p>",
      "examples": [
        {
          "title": "ตัวอย่างในบริบทแอป",
          "code": "fn clean(title: &str) -> &str {\n    title.trim()\n}\n\nfn main() {\n    println!(\"[{}]\", clean(\" work \"));\n    println!(\"[{}]\", clean(\" home \"));\n}",
          "expected": "[work]\n[home]\n",
          "mode": "run",
          "edition": "2021"
        }
      ],
      "tips": [
        "หากคืน reference และมี input หลายตัวที่กฎยังเลือกไม่ได้ ต้องประกาศความสัมพันธ์ให้ชัด"
      ]
    },
    {
      "id": "trait",
      "title": "สัญญาพฤติกรรม · Traits",
      "section": "สัญญาพฤติกรรม · Traits",
      "source": "https://doc.rust-lang.org/rust-by-example/trait.html",
      "body": "<h2>แนวคิดที่ต้องรู้</h2><p>trait ประกาศ method ที่ชนิดต้องมี และอาจให้ default method ที่เรียก method อื่นใน trait; impl Trait for Type เลือกพฤติกรรมของชนิดนั้น</p><h2>เมื่อนำไปใช้ในแอป</h2><p>ให้ตัวส่งออกรายงานหลายแบบมี API เดียวกัน</p>",
      "examples": [
        {
          "title": "ตัวอย่างในบริบทแอป",
          "code": "trait Export {\n    fn extension(&self) -> &str;\n    fn name(&self) -> String {\n        format!(\"report.{}\", self.extension())\n    }\n}\n\nstruct Csv;\n\nimpl Export for Csv {\n    fn extension(&self) -> &str {\n        \"csv\"\n    }\n}\n\nfn main() {\n    println!(\"{}\", Csv.name());\n}",
          "expected": "report.csv\n",
          "mode": "run",
          "edition": "2021"
        }
      ],
      "tips": [
        "แยก trait ตามพฤติกรรมที่ผู้เรียกต้องใช้ ไม่จำเป็นต้องมีหนึ่ง trait ต่อหนึ่ง struct"
      ]
    },
    {
      "id": "trait/derive",
      "title": "ให้ compiler เขียน trait พื้นฐาน · Derive",
      "section": "สัญญาพฤติกรรม · Traits",
      "source": "https://doc.rust-lang.org/rust-by-example/trait/derive.html",
      "body": "<h2>แนวคิดที่ต้องรู้</h2><p>derive สร้าง implementation เช่น Debug, Clone, Copy, PartialEq, Eq, PartialOrd, Ord, Hash และ Default ตามความสามารถของ field; Display ต้องออกแบบเอง</p><h2>เมื่อนำไปใช้ในแอป</h2><p>เปรียบเทียบตัวกรองงานและพิมพ์ตรวจความแตกต่าง</p>",
      "examples": [
        {
          "title": "ตัวอย่างในบริบทแอป",
          "code": "#[derive(Debug, PartialEq, Clone)]\nstruct Filter {\n    done: bool\n}\n\nfn main() {\n    let a = Filter { done: false };\n    let b = a.clone();\n    println!(\"{}\", a == b);\n    println!(\"{}\", a == Filter { done: true });\n}",
          "expected": "true\nfalse\n",
          "mode": "run",
          "edition": "2021"
        }
      ],
      "tips": [
        "derive Eq/Hash ด้วยกันสำหรับ key ที่เปรียบเทียบจาก field เดียวกัน"
      ]
    },
    {
      "id": "trait/dyn",
      "title": "เลือก implementation ขณะรัน · dyn Trait",
      "section": "สัญญาพฤติกรรม · Traits",
      "source": "https://doc.rust-lang.org/rust-by-example/trait/dyn.html",
      "body": "<h2>แนวคิดที่ต้องรู้</h2><p>trait object ผ่าน pointer อย่าง Box&lt;dyn Trait&gt; เก็บค่าคนละชนิดภายใต้ interface เดียวได้ และ dispatch method ขณะรัน โดย trait ต้องรองรับ dyn</p><h2>เมื่อนำไปใช้ในแอป</h2><p>เลือกชนิดไฟล์ส่งออกจากค่าตั้งค่าโดยคืนตัวส่งออกผ่าน trait object</p>",
      "examples": [
        {
          "title": "ตัวอย่างในบริบทแอป",
          "code": "trait Export {\n    fn extension(&self) -> &str;\n}\n\nstruct Csv;\nstruct Text;\n\nimpl Export for Csv {\n    fn extension(&self) -> &str {\n        \"csv\"\n    }\n}\n\nimpl Export for Text {\n    fn extension(&self) -> &str {\n        \"txt\"\n    }\n}\n\nfn exporter(csv: bool) -> Box<dyn Export> {\n    if csv {\n        Box::new(Csv)\n    } else {\n        Box::new(Text)\n    }\n}\n\nfn main() {\n    println!(\"{} {}\", exporter(true).extension(), exporter(false).extension());\n}",
          "expected": "csv txt\n",
          "mode": "run",
          "edition": "2021"
        }
      ],
      "tips": [
        "ใช้ dyn เมื่อต้องเก็บหรือคืนหลาย concrete types ผ่าน interface เดียวจริง"
      ]
    },
    {
      "id": "trait/ops",
      "title": "กำหนดความหมาย operator · Operator overloading",
      "section": "สัญญาพฤติกรรม · Traits",
      "source": "https://doc.rust-lang.org/rust-by-example/trait/ops.html",
      "body": "<h2>แนวคิดที่ต้องรู้</h2><p>operator หลายตัวเรียก trait ใน std::ops เช่น + ใช้ Add; associated type Output กำหนดชนิดผลลัพธ์</p><h2>เมื่อนำไปใช้ในแอป</h2><p>บวกเวลาประเมินงานที่ใช้หน่วยเดียวกัน</p>",
      "examples": [
        {
          "title": "ตัวอย่างในบริบทแอป",
          "code": "use std::ops::Add;\n\nstruct Minutes(u32);\n\nimpl Add for Minutes {\n    type Output = Self;\n    fn add(self, rhs: Self) -> Self {\n        Self(self.0 + rhs.0)\n    }\n}\n\nfn main() {\n    println!(\"{}\", (Minutes(15) + Minutes(30)).0);\n    println!(\"{}\", (Minutes(0) + Minutes(5)).0);\n}",
          "expected": "45\n5\n",
          "mode": "run",
          "edition": "2021"
        }
      ],
      "tips": [
        "ความหมายของ operator ควรคาดเดาได้จากชนิด อย่าให้ + ทำงานที่ซ่อน side effect แปลกไป"
      ]
    },
    {
      "id": "trait/drop",
      "title": "ทำงานตอนค่าถูกทำลาย · Drop",
      "section": "สัญญาพฤติกรรม · Traits",
      "source": "https://doc.rust-lang.org/rust-by-example/trait/drop.html",
      "body": "<h2>แนวคิดที่ต้องรู้</h2><p>Drop::drop ถูกเรียกอัตโนมัติเมื่อค่าถูกทำลาย ใช้คืนทรัพยากร; ถ้าต้องการทำลายก่อน ใช้ std::mem::drop แทนเรียก method drop โดยตรง</p><h2>เมื่อนำไปใช้ในแอป</h2><p>ดูเวลาคืน resource จำลองของงานแต่ละชิ้น</p>",
      "examples": [
        {
          "title": "ตัวอย่างในบริบทแอป",
          "code": "struct Job(u32);\n\nimpl Drop for Job {\n    fn drop(&mut self) {\n        println!(\"close {}\", self.0);\n    }\n}\n\nfn main() {\n    let first = Job(1);\n    let _second = Job(2);\n    drop(first);\n    println!(\"continue\");\n}",
          "expected": "close 1\ncontinue\nclose 2\n",
          "mode": "run",
          "edition": "2021"
        }
      ],
      "tips": [
        "Drop ไม่คืน Result หากขั้นตอนต้องรายงานข้อผิดพลาด ให้มี method ปิดงานแบบ explicit ด้วย"
      ]
    },
    {
      "id": "trait/iter",
      "title": "สร้างลำดับข้อมูล · Iterator",
      "section": "สัญญาพฤติกรรม · Traits",
      "source": "https://doc.rust-lang.org/rust-by-example/trait/iter.html",
      "body": "<h2>แนวคิดที่ต้องรู้</h2><p>Iterator ระบุ associated type Item และ next() -&gt; Option&lt;Item&gt;; adapter เช่น take/map ทำงานบนสัญญานี้ได้</p><h2>เมื่อนำไปใช้ในแอป</h2><p>สร้างเลขงานจากตัวนับที่หมดแล้วคืน None</p>",
      "examples": [
        {
          "title": "ตัวอย่างในบริบทแอป",
          "code": "struct Ids {\n    next: u32,\n    end: u32\n}\n\nimpl Iterator for Ids {\n    type Item = u32;\n    fn next(&mut self) -> Option<u32> {\n        if self.next >= self.end {\n            None\n        } else {\n            let id = self.next;\n            self.next += 1;\n            Some(id)\n        }\n    }\n}\n\nfn main() {\n    for id in (Ids { next: 3, end: 5 }) {\n        println!(\"{id}\");\n    }\n}",
          "expected": "3\n4\n",
          "mode": "run",
          "edition": "2021"
        }
      ],
      "tips": [
        "next เป็นตัวขับลำดับ ส่วน adapter อย่าง map ยังต้องมีผู้เรียกให้เดินหน้า"
      ]
    },
    {
      "id": "trait/impl_trait",
      "title": "ซ่อนชนิด concrete · impl Trait",
      "section": "สัญญาพฤติกรรม · Traits",
      "source": "https://doc.rust-lang.org/rust-by-example/trait/impl_trait.html",
      "body": "<h2>แนวคิดที่ต้องรู้</h2><p>impl Trait ใน parameter คือการรับชนิดที่ผ่าน bound; ในตำแหน่ง return ซ่อน concrete type เดียวที่ compiler รู้ โดยไม่ใช่ trait object</p><h2>เมื่อนำไปใช้ในแอป</h2><p>คืน iterator ของงานที่ผ่านเกณฑ์โดยไม่เขียนชนิด adapter ที่ยาว</p>",
      "examples": [
        {
          "title": "ตัวอย่างในบริบทแอป",
          "code": "fn selected(limit: u32) -> impl Iterator<Item = u32> {\n    (1..=5).filter(move |n| *n > limit)\n}\n\nfn main() {\n    println!(\"{:?}\", selected(3).collect::<Vec<_>>());\n    println!(\"{:?}\", selected(5).collect::<Vec<_>>());\n}",
          "expected": "[4, 5]\n[]\n",
          "mode": "run",
          "edition": "2021"
        }
      ],
      "tips": [
        "return impl Trait ไม่อนุญาตให้แต่ละแขนงคืน concrete type คนละชนิดโดยอัตโนมัติ"
      ]
    },
    {
      "id": "trait/clone",
      "title": "คัดลอกโดยตั้งใจ · Clone และ Copy",
      "section": "สัญญาพฤติกรรม · Traits",
      "source": "https://doc.rust-lang.org/rust-by-example/trait/clone.html",
      "body": "<h2>แนวคิดที่ต้องรู้</h2><p>Clone ขอสำเนาแบบ explicit และอาจมีต้นทุน ส่วน Copy คัดลอกบิตแทน move โดยอัตโนมัติและไม่ใช้กับชนิดที่มี Drop; Clone ของ smart pointer บางชนิดแชร์ข้อมูลเดิม</p><h2>เมื่อนำไปใช้ในแอป</h2><p>แยกรายการงานสำรองแล้วแก้ต้นฉบับเพื่อเห็นว่า Vec clone แยก buffer</p>",
      "examples": [
        {
          "title": "ตัวอย่างในบริบทแอป",
          "code": "fn main() {\n    let mut live = vec![1, 2];\n    let snapshot = live.clone();\n    live.push(3);\n    println!(\"{:?}\", live);\n    println!(\"{:?}\", snapshot);\n}",
          "expected": "[1, 2, 3]\n[1, 2]\n",
          "mode": "run",
          "edition": "2021"
        }
      ],
      "tips": [
        "อย่าแก้ borrow error ด้วย clone โดยไม่เข้าใจว่าต้องการ ownership แยกจริงหรือไม่"
      ]
    },
    {
      "id": "trait/supertraits",
      "title": "trait ที่ต้องมีอีก trait ก่อน · Supertraits",
      "section": "สัญญาพฤติกรรม · Traits",
      "source": "https://doc.rust-lang.org/rust-by-example/trait/supertraits.html",
      "body": "<h2>แนวคิดที่ต้องรู้</h2><p>trait Child: Parent บังคับให้ชนิดที่ implement Child ต้อง implement Parent ด้วย; ไม่ใช่การสืบทอด field ของ class</p><h2>เมื่อนำไปใช้ในแอป</h2><p>สิ่งที่ส่งออกได้ต้องมีชื่อเพื่อให้รายงานใช้แสดงผล</p>",
      "examples": [
        {
          "title": "ตัวอย่างในบริบทแอป",
          "code": "trait Named {\n    fn name(&self) -> &str;\n}\n\ntrait Exportable: Named {\n    fn filename(&self) -> String {\n        format!(\"{}.txt\", self.name())\n    }\n}\n\nstruct Report;\n\nimpl Named for Report {\n    fn name(&self) -> &str {\n        \"tasks\"\n    }\n}\n\nimpl Exportable for Report {}\n\nfn main() {\n    println!(\"{}\", Report.filename());\n}",
          "expected": "tasks.txt\n",
          "mode": "run",
          "edition": "2021"
        }
      ],
      "tips": [
        "ใช้ supertrait เมื่อพฤติกรรม child ต้องพึ่งสัญญาของ parent จริง"
      ]
    },
    {
      "id": "trait/disambiguating",
      "title": "method ชื่อซ้ำกัน · Fully Qualified Syntax",
      "section": "สัญญาพฤติกรรม · Traits",
      "source": "https://doc.rust-lang.org/rust-by-example/trait/disambiguating.html",
      "body": "<h2>แนวคิดที่ต้องรู้</h2><p>ชนิดเดียว implement หลาย trait ที่มี method ชื่อเดียวกันได้ โดยเลือกเรียก Trait::method หรือ &lt;Type as Trait&gt;::method ให้ชัด</p><h2>เมื่อนำไปใช้ในแอป</h2><p>ชื่อรายงานที่ใช้แสดงกับชื่อที่ใช้ในไฟล์อาจมาจาก interface คนละชุด</p>",
      "examples": [
        {
          "title": "ตัวอย่างในบริบทแอป",
          "code": "trait DisplayName {\n    fn name(&self) -> &str;\n}\n\ntrait FileName {\n    fn name(&self) -> &str;\n}\n\nstruct Report;\n\nimpl DisplayName for Report {\n    fn name(&self) -> &str {\n        \"Task report\"\n    }\n}\n\nimpl FileName for Report {\n    fn name(&self) -> &str {\n        \"tasks.txt\"\n    }\n}\n\nfn main() {\n    println!(\"{}\", DisplayName::name(&Report));\n    println!(\"{}\", <Report as FileName>::name(&Report));\n}",
          "expected": "Task report\ntasks.txt\n",
          "mode": "run",
          "edition": "2021"
        }
      ],
      "tips": [
        "ถ้าความหมายต่างกันมาก ชื่อ method ที่เฉพาะเจาะจงช่วยลดความกำกวมตั้งแต่ API"
      ]
    },
    {
      "id": "macros",
      "title": "สร้างโค้ดจาก pattern · macro_rules!",
      "section": "สร้างโค้ดจาก pattern · macro_rules!",
      "source": "https://doc.rust-lang.org/rust-by-example/macros.html",
      "body": "<h2>แนวคิดที่ต้องรู้</h2><p>macro_rules! จับ token pattern แล้วขยายเป็นโค้ดก่อนคอมไพล์ ใช้ ! ที่จุดเรียก ต่างจากฟังก์ชันที่รับค่าตอนรัน</p><h2>เมื่อนำไปใช้ในแอป</h2><p>ย่อรูปแบบพิมพ์เลขงานซ้ำโดยให้ compiler ตรวจโค้ดที่ขยายแล้ว</p>",
      "examples": [
        {
          "title": "ตัวอย่างในบริบทแอป",
          "code": "macro_rules! task_line {\n    ($id:expr) => {\n        println!(\"task={}\", $id)\n    };\n}\n\nfn main() {\n    task_line!(2);\n    task_line!(3 + 2);\n}",
          "expected": "task=2\ntask=5\n",
          "mode": "run",
          "edition": "2021"
        }
      ],
      "tips": [
        "ใช้ฟังก์ชันก่อนถ้ารูปแบบ input และ output ปกติพอ ไม่จำเป็นต้องมี macro ทุกจุดที่ซ้ำ"
      ]
    },
    {
      "id": "macros/syntax",
      "title": "โครงสร้างของ macro",
      "section": "สร้างโค้ดจาก pattern · macro_rules!",
      "source": "https://doc.rust-lang.org/rust-by-example/macros/syntax.html",
      "body": "<h2>แนวคิดที่ต้องรู้</h2><p>macro ประกอบด้วย matcher และ expansion แต่ละแขนงใช้ =&gt; เชื่อมกัน; fragment specifier ระบุชนิด token ส่วน repetition รับจำนวนส่วนซ้ำได้</p><h2>เมื่อนำไปใช้ในแอป</h2><p>สร้างบรรทัดสรุปที่รับ expression เป็นค่าของจำนวนงาน</p>",
      "examples": [
        {
          "title": "ตัวอย่างในบริบทแอป",
          "code": "macro_rules! count {\n    ($n:expr) => {\n        println!(\"count={}\", $n)\n    };\n}\n\nfn main() {\n    count!(0);\n    count!(2 + 3);\n}",
          "expected": "count=0\ncount=5\n",
          "mode": "run",
          "edition": "2021"
        }
      ],
      "tips": [
        "macro จับโครงสร้าง syntax ไม่ใช่การแทนข้อความด้วย string ธรรมดา"
      ]
    },
    {
      "id": "macros/designators",
      "title": "บอกชนิด fragment · Designators",
      "section": "สร้างโค้ดจาก pattern · macro_rules!",
      "source": "https://doc.rust-lang.org/rust-by-example/macros/designators.html",
      "body": "<h2>แนวคิดที่ต้องรู้</h2><p>fragment เช่น ident, expr, ty, pat, stmt, block, item และ tt จำกัดว่าส่วนที่จับเป็นโครงสร้างแบบใด</p><h2>เมื่อนำไปใช้ในแอป</h2><p>สร้าง helper ที่มีชื่อจาก ident และค่าจาก expr</p>",
      "examples": [
        {
          "title": "ตัวอย่างในบริบทแอป",
          "code": "macro_rules! define_count {\n    ($name:ident, $value:expr) => {\n        fn $name() -> u32 {\n            $value\n        }\n    };\n}\n\ndefine_count!(pending, 2 + 3);\ndefine_count!(completed, 2);\n\nfn main() {\n    println!(\"{} {}\", pending(), completed());\n}",
          "expected": "5 2\n",
          "mode": "run",
          "edition": "2021"
        }
      ],
      "tips": [
        "เลือก fragment ให้ตรงสิ่งที่ macro ต้องรับ เพื่อให้ข้อผิดพลาดอ่านง่าย"
      ]
    },
    {
      "id": "macros/overload",
      "title": "หลายรูปแบบการเรียก · Overload",
      "section": "สร้างโค้ดจาก pattern · macro_rules!",
      "source": "https://doc.rust-lang.org/rust-by-example/macros/overload.html",
      "body": "<h2>แนวคิดที่ต้องรู้</h2><p>macro มีหลาย matcher ได้ โดยเลือกแขนงที่ตรงตามลำดับ; รูปแบบ argument ไม่จำเป็นต้องเหมือนฟังก์ชัน</p><h2>เมื่อนำไปใช้ในแอป</h2><p>ให้ผู้เรียกเลือกรายงานค่าเดี่ยวหรือรวมสองค่า</p>",
      "examples": [
        {
          "title": "ตัวอย่างในบริบทแอป",
          "code": "macro_rules! report {\n    ($a:expr) => {\n        println!(\"{}\", $a)\n    };\n    ($a:expr, $b:expr) => {\n        println!(\"{}\", $a + $b)\n    };\n}\n\nfn main() {\n    report!(2);\n    report!(2, 5);\n}",
          "expected": "2\n7\n",
          "mode": "run",
          "edition": "2021"
        }
      ],
      "tips": [
        "แขนงที่กว้างเกินไปก่อนแขนงเฉพาะอาจจับ token ไปก่อน"
      ]
    },
    {
      "id": "macros/repeat",
      "title": "รับค่าซ้ำ · Repetition",
      "section": "สร้างโค้ดจาก pattern · macro_rules!",
      "source": "https://doc.rust-lang.org/rust-by-example/macros/repeat.html",
      "body": "<h2>แนวคิดที่ต้องรู้</h2><p>$(...),* จับศูนย์ครั้งขึ้นไป ส่วน + อย่างน้อยหนึ่งครั้ง และระบุตัวคั่นอย่างจุลภาคได้</p><h2>เมื่อนำไปใช้ในแอป</h2><p>สรุปเวลางานจำนวนเท่าใดก็ได้จาก expression หลายตัว</p>",
      "examples": [
        {
          "title": "ตัวอย่างในบริบทแอป",
          "code": "macro_rules! total {\n    ($($n:expr),*) => {\n        0_u32 $(+ $n)*\n    };\n}\n\nfn main() {\n    println!(\"{}\", total!());\n    println!(\"{}\", total!(5, 15, 30));\n}",
          "expected": "0\n50\n",
          "mode": "run",
          "edition": "2021"
        }
      ],
      "tips": [
        "กำหนดพฤติกรรมกรณี input ว่างให้ชัดเมื่อเลือก *"
      ]
    },
    {
      "id": "macros/dry",
      "title": "ลด boilerplate ด้วย macro · DRY",
      "section": "สร้างโค้ดจาก pattern · macro_rules!",
      "source": "https://doc.rust-lang.org/rust-by-example/macros/dry.html",
      "body": "<h2>แนวคิดที่ต้องรู้</h2><p>macro สามารถสร้าง function หรือชุดทดสอบที่มีโครงสร้างเหมือนกันได้ แต่โค้ดที่ซ้ำเพียงเล็กน้อยอาจอ่านง่ายกว่าการซ่อนรูปแบบ</p><h2>เมื่อนำไปใช้ในแอป</h2><p>สร้าง helper หลายชื่อที่ต่างกันเพียงเกณฑ์รายงาน</p>",
      "examples": [
        {
          "title": "ตัวอย่างในบริบทแอป",
          "code": "macro_rules! threshold {\n    ($name:ident, $limit:expr) => {\n        fn $name(n: u32) -> bool {\n            n > $limit\n        }\n    };\n}\n\nthreshold!(busy, 3);\nthreshold!(overloaded, 10);\n\nfn main() {\n    println!(\"{} {}\", busy(5), overloaded(5));\n}",
          "expected": "true false\n",
          "mode": "run",
          "edition": "2021"
        }
      ],
      "tips": [
        "ถ้าความต่างเป็นแค่ค่าที่ส่งเข้า ฟังก์ชันรับ limit มักง่ายกว่า macro นี้"
      ]
    },
    {
      "id": "macros/dsl",
      "title": "รูปแบบภาษาเล็กในแอป · DSL",
      "section": "สร้างโค้ดจาก pattern · macro_rules!",
      "source": "https://doc.rust-lang.org/rust-by-example/macros/dsl.html",
      "body": "<h2>แนวคิดที่ต้องรู้</h2><p>DSL ใน macro กำหนด token เฉพาะแล้วขยายเป็น Rust ปกติได้ แต่ยังอยู่ภายใต้กฎ matcher และชนิดของ Rust</p><h2>เมื่อนำไปใช้ในแอป</h2><p>เขียนรูปแบบสรุปจำนวนงานที่อ่านคล้ายคำสั่งรายงาน</p>",
      "examples": [
        {
          "title": "ตัวอย่างในบริบทแอป",
          "code": "macro_rules! summary {\n    (pending $total:expr => $done:expr) => {\n        $total - $done\n    };\n}\n\nfn main() {\n    println!(\"{}\", summary!(pending 5_u32 => 2));\n    println!(\"{}\", summary!(pending 5_u32 => 5));\n}",
          "expected": "3\n0\n",
          "mode": "run",
          "edition": "2021"
        }
      ],
      "tips": [
        "DSL เพิ่ม syntax ที่ผู้ใช้ต้องเรียน ใช้เมื่อสื่อความหมายดีกว่า function call จริง"
      ]
    },
    {
      "id": "macros/variadics",
      "title": "จำนวน argument ไม่คงที่ · Variadics",
      "section": "สร้างโค้ดจาก pattern · macro_rules!",
      "source": "https://doc.rust-lang.org/rust-by-example/macros/variadics.html",
      "body": "<h2>แนวคิดที่ต้องรู้</h2><p>macro รองรับจำนวน argument เปลี่ยนได้ด้วย repetition หรือ recursion ต่างจาก function signature ทั่วไปที่มีจำนวน parameter คงที่</p><h2>เมื่อนำไปใช้ในแอป</h2><p>พิมพ์สรุปงานแต่ละโครงการจากรายการ expression หลายชุด</p>",
      "examples": [
        {
          "title": "ตัวอย่างในบริบทแอป",
          "code": "macro_rules! reports {\n    ($($name:expr => $count:expr),+ $(,)?) => {\n        $(println!(\"{}={}\", $name, $count);)+\n    };\n}\n\nfn main() {\n    reports!(\"work\" => 3, \"home\" => 0);\n}",
          "expected": "work=3\nhome=0\n",
          "mode": "run",
          "edition": "2021"
        }
      ],
      "tips": [
        "ถ้าข้อมูลมาจาก runtime ให้ส่ง slice หรือ iterator แทน variadic macro"
      ]
    },
    {
      "id": "error",
      "title": "ออกแบบทางผิดพลาด · Error handling",
      "section": "ออกแบบทางผิดพลาด · Error handling",
      "source": "https://doc.rust-lang.org/rust-by-example/error.html",
      "body": "<h2>แนวคิดที่ต้องรู้</h2><p>Option แทนค่าที่อาจไม่มี Result เก็บค่าหรือสาเหตุล้มเหลว ส่วน panic เหมาะกับสภาพที่ไม่ควรทำงานต่อในเส้นทางนั้น</p><h2>เมื่อนำไปใช้ในแอป</h2><p>ข้อมูลจำนวนงานจากผู้ใช้ควร parse เป็น Result แทนหยุดทั้งแอปทันที</p>",
      "examples": [
        {
          "title": "ตัวอย่างในบริบทแอป",
          "code": "fn main() {\n    for raw in [\"3\", \"oops\"] {\n        match raw.parse::<u32>() {\n            Ok(n) => println!(\"tasks={n}\"),\n            Err(_) => println!(\"invalid count\")\n        }\n    }\n}",
          "expected": "tasks=3\ninvalid count\n",
          "mode": "run",
          "edition": "2021"
        }
      ],
      "tips": [
        "เลือก Error ที่ช่วยให้ผู้เรียกตัดสินใจว่าจะ retry แจ้งผู้ใช้ หรือหยุด"
      ]
    },
    {
      "id": "error/panic",
      "title": "หยุดเมื่อเดินต่อไม่ได้ · panic!",
      "section": "ออกแบบทางผิดพลาด · Error handling",
      "source": "https://doc.rust-lang.org/rust-by-example/error/panic.html",
      "body": "<h2>แนวคิดที่ต้องรู้</h2><p>panic! เริ่มการล้มเหลวของเส้นทางทำงาน โดยพฤติกรรม unwind หรือ abort ขึ้นกับ panic strategy และ runtime</p><h2>เมื่อนำไปใช้ในแอป</h2><p>ตัวอย่างจำลอง invariant ที่ไม่ยอมรับจำนวนงานติดลบ เพื่อให้เห็นจุดที่หยุดก่อนข้อความถัดไป</p>",
      "examples": [
        {
          "title": "ตัวอย่างในบริบทแอป",
          "code": "fn main() {\n    println!(\"before\");\n    panic!(\"negative task count\");\n}",
          "expected": "before\n",
          "mode": "should_panic",
          "edition": "2021",
          "expectedError": "negative task count",
          "note": "คาดว่า stderr มีข้อความ negative task count และโปรแกรมจบไม่สำเร็จ"
        }
      ],
      "tips": [
        "สำหรับข้อมูลจากผู้ใช้ให้คืน Result พร้อมข้อผิดพลาดที่แก้ได้ แทน panic"
      ]
    },
    {
      "id": "error/abort_unwind",
      "title": "สองวิธีจบเมื่อ panic · abort / unwind",
      "section": "ออกแบบทางผิดพลาด · Error handling",
      "source": "https://doc.rust-lang.org/rust-by-example/error/abort_unwind.html",
      "body": "<h2>แนวคิดที่ต้องรู้</h2><p>unwind คลาย stack และทำลายค่าตามเส้นทางที่คลาย ส่วน abort หยุด process โดยไม่คลาย stack; cfg(panic = \"...\") แยกโค้ดตามกลยุทธ์ที่ build</p><h2>เมื่อนำไปใช้ในแอป</h2><p>ตรวจการตั้งค่า build ก่อนอาศัย Drop ของตัวจัดการงานเพื่อทำ cleanup</p>",
      "examples": [
        {
          "title": "ตัวอย่างในบริบทแอป",
          "code": "fn main() {\n    println!(\"unwind={}\", cfg!(panic = \"unwind\"));\n    println!(\"abort={}\", cfg!(panic = \"abort\"));\n}",
          "expected": "",
          "mode": "text",
          "edition": "2021",
          "note": "ผลขึ้นกับ build strategy เช่น rustc -C panic=abort หรือค่า profile ของ Cargo; ต้องทดสอบทั้งสอง build"
        }
      ],
      "tips": [
        "อย่าอาศัย Drop เป็นวิธีเดียวในการรับประกันการเขียนข้อมูลถาวรเมื่อ process อาจหยุดฉับพลัน"
      ]
    },
    {
      "id": "error/option_unwrap",
      "title": "ค่าอาจไม่มี · Option / unwrap",
      "section": "ออกแบบทางผิดพลาด · Error handling",
      "source": "https://doc.rust-lang.org/rust-by-example/error/option_unwrap.html",
      "body": "<h2>แนวคิดที่ต้องรู้</h2><p>Option&lt;T&gt; มี Some(T) และ None; unwrap คืนค่าจาก Some แต่ panic เมื่อ None ขณะที่ expect เพิ่มข้อความอธิบายได้</p><h2>เมื่อนำไปใช้ในแอป</h2><p>เลขงานที่ผู้ใช้เลือกอาจไม่มี จัดการ None เป็นสถานะปกติแทน sentinel เช่น 0</p>",
      "examples": [
        {
          "title": "ตัวอย่างในบริบทแอป",
          "code": "fn main() {\n    for selected in [Some(7), None] {\n        match selected {\n            Some(id) => println!(\"task={id}\"),\n            None => println!(\"no selection\")\n        }\n    }\n}",
          "expected": "task=7\nno selection\n",
          "mode": "run",
          "edition": "2021"
        }
      ],
      "tips": [
        "unwrap ใช้เมื่อมีเหตุผลยืนยันว่าค่ามีแน่จริง ไม่ใช่เพื่อข้ามทางผิดพลาด"
      ]
    },
    {
      "id": "error/option_unwrap/question_mark",
      "title": "ส่ง None ต่อด้วย ?",
      "section": "ออกแบบทางผิดพลาด · Error handling",
      "source": "https://doc.rust-lang.org/rust-by-example/error/option_unwrap/question_mark.html",
      "body": "<h2>แนวคิดที่ต้องรู้</h2><p>? กับ Option คืน None ออกจากฟังก์ชันทันทีเมื่อพบ None หรือแกะ Some เพื่อทำงานต่อ</p><h2>เมื่อนำไปใช้ในแอป</h2><p>คำนวณจำนวนงานที่เหลือเมื่อ input ทั้งสองค่าอาจไม่มี</p>",
      "examples": [
        {
          "title": "ตัวอย่างในบริบทแอป",
          "code": "fn pending(total: Option<u32>, done: Option<u32>) -> Option<u32> {\n    total?.checked_sub(done?)\n}\n\nfn main() {\n    println!(\"{:?}\", pending(Some(5), Some(2)));\n    println!(\"{:?}\", pending(Some(5), None));\n}",
          "expected": "Some(3)\nNone\n",
          "mode": "run",
          "edition": "2021"
        }
      ],
      "tips": [
        "Option ไม่เก็บเหตุผล ถ้าผู้ใช้ต้องรู้ว่าขาดค่าตรงไหน ให้คืน Result"
      ]
    },
    {
      "id": "error/option_unwrap/map",
      "title": "แปลงค่าที่มีอยู่ · Option::map",
      "section": "ออกแบบทางผิดพลาด · Error handling",
      "source": "https://doc.rust-lang.org/rust-by-example/error/option_unwrap/map.html",
      "body": "<h2>แนวคิดที่ต้องรู้</h2><p>map ใช้ฟังก์ชันกับค่าภายใน Some และส่ง None ผ่านไปโดยไม่เรียกฟังก์ชันนั้น</p><h2>เมื่อนำไปใช้ในแอป</h2><p>แปลงเลขงานที่เลือกให้เป็น label โดยยังเก็บสถานะไม่มีงานไว้</p>",
      "examples": [
        {
          "title": "ตัวอย่างในบริบทแอป",
          "code": "fn main() {\n    for id in [Some(7), None] {\n        println!(\"{:?}\", id.map(|n| format!(\"TASK-{n:03}\")));\n    }\n}",
          "expected": "Some(\"TASK-007\")\nNone\n",
          "mode": "run",
          "edition": "2021"
        }
      ],
      "tips": [
        "map ที่คืน Option อีกชั้นทำให้ได้ Option<Option<T>> ถ้าต้องการแบนใช้ and_then"
      ]
    },
    {
      "id": "error/option_unwrap/and_then",
      "title": "ต่อขั้นตอนที่อาจไม่มีค่า · and_then",
      "section": "ออกแบบทางผิดพลาด · Error handling",
      "source": "https://doc.rust-lang.org/rust-by-example/error/option_unwrap/and_then.html",
      "body": "<h2>แนวคิดที่ต้องรู้</h2><p>and_then รับฟังก์ชันที่คืน Option จึงส่ง None ผ่านและไม่ซ้อน Option เพิ่มหนึ่งชั้นเหมือน map</p><h2>เมื่อนำไปใช้ในแอป</h2><p>ข้อมูลชื่อ field อาจไม่มี หรือมีแต่ parse จำนวนงานไม่ได้</p>",
      "examples": [
        {
          "title": "ตัวอย่างในบริบทแอป",
          "code": "fn main() {\n    for raw in [Some(\"3\"), Some(\"oops\"), None] {\n        println!(\"{:?}\", raw.and_then(|s| s.parse::<u32>().ok()));\n    }\n}",
          "expected": "Some(3)\nNone\nNone\n",
          "mode": "run",
          "edition": "2021"
        }
      ],
      "tips": [
        "การใช้ ok() ละทิ้งเหตุผล parse error โดยตั้งใจ ถ้าต้องเก็บให้ใช้ Result"
      ]
    },
    {
      "id": "error/option_unwrap/defaults",
      "title": "กำหนดค่าเมื่อไม่มี · Option defaults",
      "section": "ออกแบบทางผิดพลาด · Error handling",
      "source": "https://doc.rust-lang.org/rust-by-example/error/option_unwrap/defaults.html",
      "body": "<h2>แนวคิดที่ต้องรู้</h2><p>or รับทางเลือกที่ประเมินไว้แล้ว ส่วน or_else ประเมิน closure เมื่อ None; get_or_insert และ get_or_insert_with เติมค่าลง Option ผ่าน &amp;mut self และคืน mutable reference</p><h2>เมื่อนำไปใช้ในแอป</h2><p>ตั้งจำนวนแถวเริ่มต้นโดยเห็นว่าค่าที่มีอยู่ไม่ถูกเขียนทับ</p>",
      "examples": [
        {
          "title": "ตัวอย่างในบริบทแอป",
          "code": "fn main() {\n    let mut missing = None;\n    let mut present = Some(20);\n    println!(\"{}\", missing.get_or_insert(10));\n    println!(\"{}\", present.get_or_insert_with(|| 10));\n    println!(\"{:?} {:?}\", missing, present);\n}",
          "expected": "10\n20\nSome(10) Some(20)\n",
          "mode": "run",
          "edition": "2021"
        }
      ],
      "tips": [
        "เลือกแบบ _else หรือ _with เมื่อการสร้าง default แพงหรือมี side effect"
      ]
    },
    {
      "id": "error/result",
      "title": "เก็บสาเหตุล้มเหลว · Result",
      "section": "ออกแบบทางผิดพลาด · Error handling",
      "source": "https://doc.rust-lang.org/rust-by-example/error/result.html",
      "body": "<h2>แนวคิดที่ต้องรู้</h2><p>Result&lt;T,E&gt; มี Ok(T) กับ Err(E) ให้ผู้เรียกรู้ทั้งค่าที่สำเร็จหรือเหตุผลที่ไม่สำเร็จ; unwrap บน Err ทำให้ panic</p><h2>เมื่อนำไปใช้ในแอป</h2><p>รับจำนวนงานจากข้อความและแยกทางผิดพลาดอย่างชัดเจน</p>",
      "examples": [
        {
          "title": "ตัวอย่างในบริบทแอป",
          "code": "fn parse_count(raw: &str) -> Result<u32, std::num::ParseIntError> {\n    raw.parse()\n}\n\nfn main() {\n    for raw in [\"12\", \"bad\"] {\n        println!(\"{}\", parse_count(raw).is_ok());\n    }\n}",
          "expected": "true\nfalse\n",
          "mode": "run",
          "edition": "2021"
        }
      ],
      "tips": [
        "อย่าทำให้ Err กลายเป็นศูนย์ถ้าศูนย์เป็นข้อมูลจริงที่มีความหมายต่างจาก parse ไม่ผ่าน"
      ]
    },
    {
      "id": "error/result/result_map",
      "title": "แปลงค่าที่สำเร็จ · Result::map",
      "section": "ออกแบบทางผิดพลาด · Error handling",
      "source": "https://doc.rust-lang.org/rust-by-example/error/result/result_map.html",
      "body": "<h2>แนวคิดที่ต้องรู้</h2><p>map แปลง Ok ส่วน Err ผ่านไปเดิม; and_then ใช้ต่อขั้นตอนที่คืน Result; map_err แปลงสาเหตุผิดพลาด</p><h2>เมื่อนำไปใช้ในแอป</h2><p>แปลงจำนวนงานที่ parse สำเร็จเป็นเวลาประเมินต่อรายการ</p>",
      "examples": [
        {
          "title": "ตัวอย่างในบริบทแอป",
          "code": "fn main() {\n    for raw in [\"3\", \"bad\"] {\n        let minutes = raw.parse::<u32>().map(|n| n * 5);\n        match minutes {\n            Ok(n) => println!(\"minutes={n}\"),\n            Err(_) => println!(\"invalid\")\n        }\n    }\n}",
          "expected": "minutes=15\ninvalid\n",
          "mode": "run",
          "edition": "2021"
        }
      ],
      "tips": [
        "การคำนวณหลัง parse ยังต้องพิจารณาช่วงตัวเลขเมื่อ input มาจากภายนอก"
      ]
    },
    {
      "id": "error/result/result_alias",
      "title": "ย่อ Result ที่ใช้บ่อย · Type alias",
      "section": "ออกแบบทางผิดพลาด · Error handling",
      "source": "https://doc.rust-lang.org/rust-by-example/error/result/result_alias.html",
      "body": "<h2>แนวคิดที่ต้องรู้</h2><p>type alias ย่อ Result ที่ใช้ error type เดียวกันได้ โดยไม่ได้เปลี่ยนความหมายของ Result</p><h2>เมื่อนำไปใช้ในแอป</h2><p>ฟังก์ชันอ่าน field ตัวเลขหลายตัวใน importer ใช้ error ชนิดเดียวกัน</p>",
      "examples": [
        {
          "title": "ตัวอย่างในบริบทแอป",
          "code": "type ParseResult<T> = Result<T, std::num::ParseIntError>;\n\nfn count(raw: &str) -> ParseResult<u32> {\n    raw.parse()\n}\n\nfn main() {\n    println!(\"{} {}\", count(\"3\").is_ok(), count(\"bad\").is_ok());\n}",
          "expected": "true false\n",
          "mode": "run",
          "edition": "2021"
        }
      ],
      "tips": [
        "ชื่อ alias ควรบอกว่าเป็นผลลัพธ์ของระบบใดเมื่อหลาย error domain อยู่ใน scope เดียวกัน"
      ]
    },
    {
      "id": "error/result/early_returns",
      "title": "คืน error ออกก่อน · Early returns",
      "section": "ออกแบบทางผิดพลาด · Error handling",
      "source": "https://doc.rust-lang.org/rust-by-example/error/result/early_returns.html",
      "body": "<h2>แนวคิดที่ต้องรู้</h2><p>return Err(...) ออกจากฟังก์ชันทันที ทำให้แยกทางผิดพลาดก่อนเข้าส่วนคำนวณหลักได้</p><h2>เมื่อนำไปใช้ในแอป</h2><p>ตรวจ field จำนวนงานก่อนรวมผล ไม่ปล่อยข้อความผิดเข้าคำนวณ</p>",
      "examples": [
        {
          "title": "ตัวอย่างในบริบทแอป",
          "code": "fn doubled(raw: &str) -> Result<u32, std::num::ParseIntError> {\n    let n = match raw.parse::<u32>() {\n        Ok(n) => n,\n        Err(e) => return Err(e)\n    };\n    Ok(n * 2)\n}\n\nfn main() {\n    println!(\"{} {}\", doubled(\"3\").is_ok(), doubled(\"bad\").is_ok());\n}",
          "expected": "true false\n",
          "mode": "run",
          "edition": "2021"
        }
      ],
      "tips": [
        "เมื่อ error type รองรับการแปลงแล้ว ? เขียนทางส่งต่อ error ได้สั้นกว่า"
      ]
    },
    {
      "id": "error/result/enter_question_mark",
      "title": "ส่ง Err ต่อด้วย ?",
      "section": "ออกแบบทางผิดพลาด · Error handling",
      "source": "https://doc.rust-lang.org/rust-by-example/error/result/enter_question_mark.html",
      "body": "<h2>แนวคิดที่ต้องรู้</h2><p>? คืนค่าจาก Ok หรือแปลงและส่ง Err ออกจากฟังก์ชันตาม From; ฟังก์ชันต้องมีชนิดผลลัพธ์ที่รองรับการใช้ ?</p><h2>เมื่อนำไปใช้ในแอป</h2><p>อ่านสอง field แล้วคำนวณงานค้าง โดยไม่ซ้อน match</p>",
      "examples": [
        {
          "title": "ตัวอย่างในบริบทแอป",
          "code": "fn remaining(total: &str, done: &str) -> Result<u32, std::num::ParseIntError> {\n    let total = total.parse::<u32>()?;\n    let done = done.parse::<u32>()?;\n    Ok(total.saturating_sub(done))\n}\n\nfn main() {\n    println!(\"{:?}\", remaining(\"5\", \"2\"));\n    println!(\"{}\", remaining(\"bad\", \"2\").is_err());\n}",
          "expected": "Ok(3)\ntrue\n",
          "mode": "run",
          "edition": "2021"
        }
      ],
      "tips": [
        "? ส่งต่อ error ไม่ได้แปลว่าจัดการ error เสร็จแล้ว จุดเรียกชั้นบนยังต้องตัดสินใจ"
      ]
    },
    {
      "id": "error/multiple_error_types",
      "title": "เมื่อผิดได้หลายสาเหตุ · Multiple error types",
      "section": "ออกแบบทางผิดพลาด · Error handling",
      "source": "https://doc.rust-lang.org/rust-by-example/error/multiple_error_types.html",
      "body": "<h2>แนวคิดที่ต้องรู้</h2><p>ฟังก์ชันเดียวอาจผิดเพราะไม่มีข้อมูล parse ไม่ได้ หรือเงื่อนไขของโดเมนไม่ผ่าน จึงต้องออกแบบชนิดผลลัพธ์ที่แทนสาเหตุเหล่านั้นได้</p><h2>เมื่อนำไปใช้ในแอป</h2><p>อ่านรายการแรกจากชุดข้อมูลแล้ว parse จำนวนงาน ซึ่งแยกกรณีว่างกับข้อความผิดได้</p>",
      "examples": [
        {
          "title": "ตัวอย่างในบริบทแอป",
          "code": "fn first(items: &[&str]) -> Result<u32, &'static str> {\n    let raw = items.first().ok_or(\"empty\")?;\n    raw.parse().map_err(|_| \"invalid number\")\n}\n\nfn main() {\n    println!(\"{:?}\", first(&[]));\n    println!(\"{:?}\", first(&[\"bad\"]));\n    println!(\"{:?}\", first(&[\"3\"]));\n}",
          "expected": "Err(\"empty\")\nErr(\"invalid number\")\nOk(3)\n",
          "mode": "run",
          "edition": "2021"
        }
      ],
      "tips": [
        "อย่ารวมทุกกรณีเป็นข้อความเดียวถ้าผู้เรียกต้องตัดสินใจต่างกันตามสาเหตุ"
      ]
    },
    {
      "id": "error/multiple_error_types/option_result",
      "title": "สลับชั้น Option กับ Result",
      "section": "ออกแบบทางผิดพลาด · Error handling",
      "source": "https://doc.rust-lang.org/rust-by-example/error/multiple_error_types/option_result.html",
      "body": "<h2>แนวคิดที่ต้องรู้</h2><p>Option&lt;Result&lt;T,E&gt;&gt; กับ Result&lt;Option&lt;T&gt;,E&gt; สื่อความหมายต่างกัน; transpose สลับชั้นได้โดยรักษา None และ Err</p><h2>เมื่อนำไปใช้ในแอป</h2><p>field จำนวนงานอาจไม่ถูกระบุ แต่ถ้าระบุแล้วต้องเป็นตัวเลข</p>",
      "examples": [
        {
          "title": "ตัวอย่างในบริบทแอป",
          "code": "fn count(raw: Option<&str>) -> Result<Option<u32>, std::num::ParseIntError> {\n    raw.map(str::parse).transpose()\n}\n\nfn main() {\n    println!(\"{:?}\", count(None));\n    println!(\"{:?}\", count(Some(\"3\")));\n    println!(\"{}\", count(Some(\"bad\")).is_err());\n}",
          "expected": "Ok(None)\nOk(Some(3))\ntrue\n",
          "mode": "run",
          "edition": "2021"
        }
      ],
      "tips": [
        "กำหนดให้ชัดว่าไม่มี field เป็นข้อผิดพลาดหรือเป็นค่า optional ตามปกติ"
      ]
    },
    {
      "id": "error/multiple_error_types/define_error_type",
      "title": "สร้าง error ที่สื่อภาษาแอป",
      "section": "ออกแบบทางผิดพลาด · Error handling",
      "source": "https://doc.rust-lang.org/rust-by-example/error/multiple_error_types/define_error_type.html",
      "body": "<h2>แนวคิดที่ต้องรู้</h2><p>error ของแอปอาจเป็น enum ที่มี variant ตามสาเหตุ โดย implement Display สำหรับข้อความและ Error สำหรับสัญญา error มาตรฐาน</p><h2>เมื่อนำไปใช้ในแอป</h2><p>รายงานแยกได้ว่าข้อมูลว่างหรือเลขไม่ถูกต้อง</p>",
      "examples": [
        {
          "title": "ตัวอย่างในบริบทแอป",
          "code": "use std::{error::Error, fmt};\n\n#[derive(Debug)]\nenum ImportError {\n    Empty,\n    Invalid\n}\n\nimpl fmt::Display for ImportError {\n    fn fmt(&self, f: &mut fmt::Formatter<'_>) -> fmt::Result {\n        write!(f, \"{}\", match self {\n            Self::Empty => \"empty input\",\n            Self::Invalid => \"invalid count\"\n        })\n    }\n}\n\nimpl Error for ImportError {}\n\nfn main() {\n    println!(\"{}\", ImportError::Empty);\n    println!(\"{}\", ImportError::Invalid);\n}",
          "expected": "empty input\ninvalid count\n",
          "mode": "run",
          "edition": "2021"
        }
      ],
      "tips": [
        "เก็บ original error เพิ่มถ้าข้อมูลวินิจฉัยนั้นจำเป็นต่อการแก้ปัญหา"
      ]
    },
    {
      "id": "error/multiple_error_types/boxing_errors",
      "title": "รวม error ผ่าน trait object · Box<dyn Error>",
      "section": "ออกแบบทางผิดพลาด · Error handling",
      "source": "https://doc.rust-lang.org/rust-by-example/error/multiple_error_types/boxing_errors.html",
      "body": "<h2>แนวคิดที่ต้องรู้</h2><p>Box&lt;dyn Error&gt; เก็บ error คนละ concrete type ผ่าน interface เดียวได้ แต่ผู้เรียกไม่ได้เห็น variant ที่ระบุสาเหตุแบบ enum ในชนิดผลลัพธ์</p><h2>เมื่อนำไปใช้ในแอป</h2><p>CLI ขนาดเล็กอ่าน field และส่ง error จากหลายขั้นตอนขึ้นชั้นบน</p>",
      "examples": [
        {
          "title": "ตัวอย่างในบริบทแอป",
          "code": "use std::error::Error;\n\nfn first(items: &[&str]) -> Result<u32, Box<dyn Error>> {\n    let raw = items.first().ok_or(\"empty input\")?;\n    Ok(raw.parse()?)\n}\n\nfn main() {\n    println!(\"{}\", first(&[\"3\"]).is_ok());\n    println!(\"{}\", first(&[]).is_err());\n    println!(\"{}\", first(&[\"bad\"]).is_err());\n}",
          "expected": "true\ntrue\ntrue\n",
          "mode": "run",
          "edition": "2021"
        }
      ],
      "tips": [
        "เหมาะกับขอบเขตที่เน้นส่งข้อความ error ต่อ; library ที่ผู้ใช้ต้อง match สาเหตุอาจเหมาะกับ enum มากกว่า"
      ]
    },
    {
      "id": "error/multiple_error_types/reenter_question_mark",
      "title": "? กับการแปลง error หลายชนิด",
      "section": "ออกแบบทางผิดพลาด · Error handling",
      "source": "https://doc.rust-lang.org/rust-by-example/error/multiple_error_types/reenter_question_mark.html",
      "body": "<h2>แนวคิดที่ต้องรู้</h2><p>? ใช้ From แปลง error ให้ตรงชนิดผลลัพธ์ จึงลด map_err ที่เพียงห่อ error แบบเดิมซ้ำได้</p><h2>เมื่อนำไปใช้ในแอป</h2><p>แปลงข้อความเป็นจำนวนงานก่อนเพิ่มค่า โดยคืน boxed error ที่จุดเชื่อมของ CLI</p>",
      "examples": [
        {
          "title": "ตัวอย่างในบริบทแอป",
          "code": "use std::error::Error;\n\nfn next_count(raw: &str) -> Result<u32, Box<dyn Error>> {\n    let n: u32 = raw.parse()?;\n    Ok(n.checked_add(1).ok_or(\"overflow\")?)\n}\n\nfn main() {\n    println!(\"{:?}\", next_count(\"3\"));\n    println!(\"{}\", next_count(\"bad\").is_err());\n}",
          "expected": "Ok(4)\ntrue\n",
          "mode": "run",
          "edition": "2021"
        }
      ],
      "tips": [
        "การแปลง error อัตโนมัติเกิดเมื่อมี From ที่เหมาะสม ไม่ใช่ทุก error แปลงหากันได้เสมอ"
      ]
    },
    {
      "id": "error/multiple_error_types/wrap_error",
      "title": "เก็บ error ต้นเหตุ · Wrapping errors",
      "section": "ออกแบบทางผิดพลาด · Error handling",
      "source": "https://doc.rust-lang.org/rust-by-example/error/multiple_error_types/wrap_error.html",
      "body": "<h2>แนวคิดที่ต้องรู้</h2><p>error wrapper เก็บ original error เป็น field และเปิดผ่าน Error::source ได้ จึงเพิ่มบริบทพร้อมรักษาสาเหตุ</p><h2>เมื่อนำไปใช้ในแอป</h2><p>parse จำนวนงานไม่ผ่านแต่ยังเก็บสาเหตุของ parser ไว้ให้ผู้วินิจฉัย</p>",
      "examples": [
        {
          "title": "ตัวอย่างในบริบทแอป",
          "code": "use std::{error::Error, fmt, num::ParseIntError};\n\n#[derive(Debug)]\nstruct CountError(ParseIntError);\n\nimpl fmt::Display for CountError {\n    fn fmt(&self, f: &mut fmt::Formatter<'_>) -> fmt::Result {\n        write!(f, \"invalid task count: {}\", self.0)\n    }\n}\n\nimpl Error for CountError {\n    fn source(&self) -> Option<&(dyn Error + 'static)> {\n        Some(&self.0)\n    }\n}\n\nfn main() {\n    if let Err(e) = \"bad\".parse::<u32>().map_err(CountError) {\n        println!(\"has source={}\", e.source().is_some());\n    }\n}",
          "expected": "has source=true\n",
          "mode": "run",
          "edition": "2021"
        }
      ],
      "tips": [
        "ข้อความบริบทบอกว่าอะไรล้มเหลว ส่วน source ช่วยรักษาสาเหตุทางเทคนิค"
      ]
    },
    {
      "id": "error/iter_result",
      "title": "ประมวลผลหลายค่าที่อาจผิด · Iterating Results",
      "section": "ออกแบบทางผิดพลาด · Error handling",
      "source": "https://doc.rust-lang.org/rust-by-example/error/iter_result.html",
      "body": "<h2>แนวคิดที่ต้องรู้</h2><p>collect::&lt;Result&lt;Vec&lt;_&gt;,_&gt;&gt;() หยุดที่ Err แรก ส่วน filter_map(Result::ok) เก็บเฉพาะค่าที่สำเร็จ; partition แยกผลลัพธ์ได้โดยไม่ทิ้งสาเหตุ</p><h2>เมื่อนำไปใช้ในแอป</h2><p>import จำนวนงานหลายบรรทัด โดยเทียบการยอมข้อมูลบางส่วนกับการปฏิเสธทั้งชุด</p>",
      "examples": [
        {
          "title": "ตัวอย่างในบริบทแอป",
          "code": "fn main() {\n    let rows = [\"2\", \"bad\", \"5\"];\n    let accepted: Vec<_> = rows.iter().filter_map(|s| s.parse::<u32>().ok()).collect();\n    let all: Result<Vec<u32>, _> = rows.iter().map(|s| s.parse()).collect();\n    println!(\"{:?}\", accepted);\n    println!(\"all valid={}\", all.is_ok());\n}",
          "expected": "[2, 5]\nall valid=false\n",
          "mode": "run",
          "edition": "2021"
        }
      ],
      "tips": [
        "อย่าทิ้งแถวผิดแบบเงียบ ๆ ในแอปจริงถ้าผู้ใช้ต้องรู้ว่าข้อมูลหายไปเท่าไร"
      ]
    },
    {
      "id": "std",
      "title": "ชนิดที่พร้อมใช้ใน std",
      "section": "ชนิดที่พร้อมใช้ใน std",
      "source": "https://doc.rust-lang.org/rust-by-example/std.html",
      "body": "<h2>แนวคิดที่ต้องรู้</h2><p>std มี String, Vec, Option, Result, Box, HashMap และ smart pointer เพื่อขยายจากชนิดพื้นฐาน หลายชนิดมี ownership และการคืนทรัพยากรในตัว</p><h2>เมื่อนำไปใช้ในแอป</h2><p>ใช้ Vec เก็บรายการงานที่เพิ่มจำนวนระหว่างรัน และ String เก็บชื่อที่อ่านจากผู้ใช้</p>",
      "examples": [
        {
          "title": "ตัวอย่างในบริบทแอป",
          "code": "fn main() {\n    let mut tasks = Vec::new();\n    tasks.push(String::from(\"backup\"));\n    println!(\"{}\", tasks.len());\n    tasks.push(String::from(\"review\"));\n    println!(\"{}\", tasks.len());\n}",
          "expected": "1\n2\n",
          "mode": "run",
          "edition": "2021"
        }
      ],
      "tips": [
        "เลือกคอลเลกชันตามการเข้าถึงที่ต้องการ ก่อนเขียนโครงสร้างข้อมูลใหม่เอง"
      ]
    },
    {
      "id": "std/box",
      "title": "ค่าใน heap กับ Box",
      "section": "ชนิดที่พร้อมใช้ใน std",
      "source": "https://doc.rust-lang.org/rust-by-example/std/box.html",
      "body": "<h2>แนวคิดที่ต้องรู้</h2><p>Box&lt;T&gt; เป็นเจ้าของค่าบน heap โดยตัว handle มีขนาดทราบตอนคอมไพล์; ชนิด recursive ใช้ indirection นี้ได้ ส่วนการจัดวางจริงยังขึ้นกับ compiler optimization</p><h2>เมื่อนำไปใช้ในแอป</h2><p>ย้ายข้อมูลสรุปที่ต้องการ ownership ชัดเจนเข้า Box แล้วเข้าถึงค่าผ่าน dereference</p><h2>อ้างอิงเพิ่มเติม</h2><ul><li><a href=\"https://doc.rust-lang.org/std/boxed/struct.Box.html\">เอกสารทางการเพิ่มเติม</a></li></ul>",
      "examples": [
        {
          "title": "ตัวอย่างในบริบทแอป",
          "code": "fn main() {\n    let mut report = Box::new(3_u32);\n    println!(\"{}\", *report);\n    *report += 2;\n    println!(\"{}\", *report);\n}",
          "expected": "3\n5\n",
          "mode": "run",
          "edition": "2021"
        }
      ],
      "tips": [
        "Box ไม่ทำให้ข้อมูลแชร์ ownership หลายเจ้าของ; หากต้องการแชร์ให้เลือกกลไกตามการใช้งาน"
      ]
    },
    {
      "id": "std/vec",
      "title": "รายการที่โตได้ · Vec",
      "section": "ชนิดที่พร้อมใช้ใน std",
      "source": "https://doc.rust-lang.org/rust-by-example/std/vec.html",
      "body": "<h2>แนวคิดที่ต้องรู้</h2><p>Vec&lt;T&gt; เก็บสมาชิกชนิดเดียวกันใน buffer ต่อเนื่อง โดยมี length และ capacity; push เพิ่มท้าย pop หยิบท้าย และการ index นอกขอบเขต panic</p><h2>เมื่อนำไปใช้ในแอป</h2><p>เพิ่มงานใหม่แล้วลบงานท้ายออกจากรายการ</p><h2>อ้างอิงเพิ่มเติม</h2><ul><li><a href=\"https://doc.rust-lang.org/std/vec/struct.Vec.html\">เอกสารทางการเพิ่มเติม</a></li></ul>",
      "examples": [
        {
          "title": "ตัวอย่างในบริบทแอป",
          "code": "fn main() {\n    let mut tasks = vec![2, 5];\n    tasks.push(8);\n    println!(\"{:?}\", tasks);\n    println!(\"{:?}\", tasks.pop());\n    println!(\"{:?}\", tasks.get(9));\n}",
          "expected": "[2, 5, 8]\nSome(8)\nNone\n",
          "mode": "run",
          "edition": "2021"
        }
      ],
      "tips": [
        "การเพิ่มจนเกิน capacity อาจย้าย buffer จึงไม่เก็บ reference ไปยังสมาชิกขณะ push"
      ]
    },
    {
      "id": "std/str",
      "title": "ข้อความ UTF-8 · String / &str",
      "section": "ชนิดที่พร้อมใช้ใน std",
      "source": "https://doc.rust-lang.org/rust-by-example/std/str.html",
      "body": "<h2>แนวคิดที่ต้องรู้</h2><p>String เป็นข้อความ UTF-8 ที่เป็นเจ้าของ buffer และเปลี่ยนขนาดได้ ส่วน &amp;str ยืมข้อความ; len นับ bytes และ chars นับ Unicode scalar values ไม่ใช่จำนวนตัวอักษรที่ผู้ใช้เห็นเสมอ</p><h2>เมื่อนำไปใช้ในแอป</h2><p>แยกจำนวน bytes ออกจากจำนวน scalar values เมื่อตรวจชื่อภาษาไทยหรืออักษรนอก ASCII</p>",
      "examples": [
        {
          "title": "ตัวอย่างในบริบทแอป",
          "code": "fn main() {\n    for title in [\"work\", \"é\"] {\n        println!(\"{} bytes={} chars={}\", title, title.len(), title.chars().count());\n    }\n    let mut title = String::from(\"task\");\n    title.push_str(\"-1\");\n    println!(\"{title}\");\n}",
          "expected": "work bytes=4 chars=4\né bytes=2 chars=1\ntask-1\n",
          "mode": "run",
          "edition": "2021"
        }
      ],
      "tips": [
        "อย่า index ข้อความด้วยจำนวนเต็มเพื่อหมายถึงตัวอักษร; slice ต้องตรงขอบเขต UTF-8"
      ]
    },
    {
      "id": "std/option",
      "title": "ค่าที่ไม่มีไม่ใช่ null · Option",
      "section": "ชนิดที่พร้อมใช้ใน std",
      "source": "https://doc.rust-lang.org/rust-by-example/std/option.html",
      "body": "<h2>แนวคิดที่ต้องรู้</h2><p>Option&lt;T&gt; บังคับให้พิจารณา Some กับ None ผ่าน match หรือ method; เป็นชนิด enum ปกติที่ใช้กับ generic ได้</p><h2>เมื่อนำไปใช้ในแอป</h2><p>รายการงานแรกอาจไม่มีเมื่อยังไม่เพิ่มงาน</p>",
      "examples": [
        {
          "title": "ตัวอย่างในบริบทแอป",
          "code": "fn main() {\n    for tasks in [vec![], vec![7]] {\n        match tasks.first() {\n            Some(id) => println!(\"first={id}\"),\n            None => println!(\"empty\")\n        }\n    }\n}",
          "expected": "empty\nfirst=7\n",
          "mode": "run",
          "edition": "2021"
        }
      ],
      "tips": [
        "None ควรมีความหมายเฉพาะใน API ไม่ควรใช้แทนความผิดพลาดหลายสาเหตุที่ต้องแยก"
      ]
    },
    {
      "id": "std/result",
      "title": "ผลลัพธ์ที่มีสาเหตุ · std::result",
      "section": "ชนิดที่พร้อมใช้ใน std",
      "source": "https://doc.rust-lang.org/rust-by-example/std/result.html",
      "body": "<h2>แนวคิดที่ต้องรู้</h2><p>Result เก็บ Ok หรือ Err จึงประกอบหลายขั้นตอนที่อาจล้มเหลวได้โดยไม่ทิ้งสาเหตุ</p><h2>เมื่อนำไปใช้ในแอป</h2><p>ตรวจทั้งกรณีจำนวนเป็นศูนย์ที่ถูกต้อง กับข้อความที่แปลงไม่ได้</p>",
      "examples": [
        {
          "title": "ตัวอย่างในบริบทแอป",
          "code": "fn main() {\n    for raw in [\"0\", \"bad\"] {\n        let result = raw.parse::<u32>();\n        match result {\n            Ok(count) => println!(\"count={count}\"),\n            Err(_) => println!(\"parse failed\")\n        }\n    }\n}",
          "expected": "count=0\nparse failed\n",
          "mode": "run",
          "edition": "2021"
        }
      ],
      "tips": [
        "หากคืน Result ให้ผู้เรียก ให้เลือก error type ที่ตรงวิธีรับมือของผู้เรียก"
      ]
    },
    {
      "id": "std/result/question_mark",
      "title": "ต่อหลาย Result ด้วย ?",
      "section": "ชนิดที่พร้อมใช้ใน std",
      "source": "https://doc.rust-lang.org/rust-by-example/std/result/question_mark.html",
      "body": "<h2>แนวคิดที่ต้องรู้</h2><p>? ส่ง error ออกในจุดแรกที่พบ และเหลือ body หลักสำหรับค่าที่สำเร็จ; ต่างจาก panic เพราะผู้เรียกยังรับ Err ได้</p><h2>เมื่อนำไปใช้ในแอป</h2><p>parse สองค่าก่อนตรวจจำนวนงานค้าง</p>",
      "examples": [
        {
          "title": "ตัวอย่างในบริบทแอป",
          "code": "fn remaining(total: &str, done: &str) -> Result<u32, std::num::ParseIntError> {\n    Ok(total.parse::<u32>()?.saturating_sub(done.parse::<u32>()?))\n}\n\nfn main() {\n    println!(\"{:?}\", remaining(\"5\", \"2\"));\n    println!(\"{}\", remaining(\"5\", \"bad\").is_err());\n}",
          "expected": "Ok(3)\ntrue\n",
          "mode": "run",
          "edition": "2021"
        }
      ],
      "tips": [
        "? ทำให้ทางผิดพลาดสั้นลง แต่ยังควรเพิ่มบริบทที่ขอบเขตสำคัญ"
      ]
    },
    {
      "id": "std/panic",
      "title": "panic และการคืนทรัพยากร",
      "section": "ชนิดที่พร้อมใช้ใน std",
      "source": "https://doc.rust-lang.org/rust-by-example/std/panic.html",
      "body": "<h2>แนวคิดที่ต้องรู้</h2><p>เมื่อ panic แบบ unwind ค่าบนเส้นทางที่คลาย stack จะถูกทำลาย แต่กลยุทธ์ abort ไม่ทำเช่นนั้น; panic ไม่ใช่การคืน error ให้ผู้เรียกตามปกติ</p><h2>เมื่อนำไปใช้ในแอป</h2><p>จำลองสถานะงานภายในที่ไม่สอดคล้องและไม่ควรเดินหน้าต่อ</p>",
      "examples": [
        {
          "title": "ตัวอย่างในบริบทแอป",
          "code": "fn main() {\n    println!(\"checking\");\n    panic!(\"task state corrupted\");\n}",
          "expected": "checking\n",
          "mode": "should_panic",
          "edition": "2021",
          "expectedError": "task state corrupted",
          "note": "คาดว่า stderr มี task state corrupted และ exit ไม่สำเร็จ"
        }
      ],
      "tips": [
        "อย่าใช้ catch_unwind เป็นตัวแทน Result สำหรับความล้มเหลวที่คาดหมาย"
      ]
    },
    {
      "id": "std/hash",
      "title": "ค้นด้วย key · HashMap",
      "section": "ชนิดที่พร้อมใช้ใน std",
      "source": "https://doc.rust-lang.org/rust-by-example/std/hash.html",
      "body": "<h2>แนวคิดที่ต้องรู้</h2><p>HashMap&lt;K,V&gt; เก็บค่าตาม key ที่ implement Eq และ Hash; insert อาจแทนค่าเดิม get คืน Option ของ reference และลำดับ iteration ไม่รับประกัน</p><h2>เมื่อนำไปใช้ในแอป</h2><p>นับงานตามชื่อโครงการแล้วอ่านชื่อที่มีและไม่มี</p>",
      "examples": [
        {
          "title": "ตัวอย่างในบริบทแอป",
          "code": "use std::collections::HashMap;\n\nfn main() {\n    let mut counts = HashMap::new();\n    counts.insert(\"work\", 2);\n    *counts.entry(\"work\").or_insert(0) += 3;\n    println!(\"{:?}\", counts.get(\"work\"));\n    println!(\"{:?}\", counts.get(\"home\"));\n}",
          "expected": "Some(5)\nNone\n",
          "mode": "run",
          "edition": "2021"
        }
      ],
      "tips": [
        "ถ้ารายงานต้องเรียงลำดับให้ sort ผลลัพธ์หรือใช้คอลเลกชันที่มีลำดับตามโจทย์"
      ]
    },
    {
      "id": "std/hash/alt_key_types",
      "title": "ชนิดที่สร้างเองเป็น key",
      "section": "ชนิดที่พร้อมใช้ใน std",
      "source": "https://doc.rust-lang.org/rust-by-example/std/hash/alt_key_types.html",
      "body": "<h2>แนวคิดที่ต้องรู้</h2><p>key ของ HashMap ต้องมี Eq และ Hash ที่สอดคล้องกัน: เมื่อสองค่าเท่ากัน hash ต้องเท่ากันด้วย; derive ช่วยสร้างจาก field ได้</p><h2>เมื่อนำไปใช้ในแอป</h2><p>แยกจำนวนงานตามคู่ผู้ใช้กับโครงการ แทนการต่อ string ที่อาจกำกวม</p>",
      "examples": [
        {
          "title": "ตัวอย่างในบริบทแอป",
          "code": "use std::collections::HashMap;\n\n#[derive(PartialEq, Eq, Hash)]\nstruct Key {\n    user: u32,\n    project: u32\n}\n\nfn main() {\n    let mut counts = HashMap::new();\n    counts.insert(Key { user: 1, project: 2 }, 5);\n    println!(\"{:?}\", counts.get(&Key { user: 1, project: 2 }));\n    println!(\"{:?}\", counts.get(&Key { user: 1, project: 3 }));\n}",
          "expected": "Some(5)\nNone\n",
          "mode": "run",
          "edition": "2021"
        }
      ],
      "tips": [
        "อย่าแก้ส่วนของ key ที่มีผลต่อ Eq/Hash ขณะที่ยังเป็น key อยู่ใน map"
      ]
    },
    {
      "id": "std/hash/hashset",
      "title": "สมาชิกที่ไม่ซ้ำ · HashSet",
      "section": "ชนิดที่พร้อมใช้ใน std",
      "source": "https://doc.rust-lang.org/rust-by-example/std/hash/hashset.html",
      "body": "<h2>แนวคิดที่ต้องรู้</h2><p>HashSet&lt;T&gt; เก็บสมาชิกตาม Eq และ Hash โดยไม่ผูก value; มี union intersection difference และ symmetric_difference สำหรับเปรียบเทียบชุด</p><h2>เมื่อนำไปใช้ในแอป</h2><p>รวมเลขงานที่ถูกเลือกจากสองแหล่งแล้วกำจัดค่าซ้ำ</p>",
      "examples": [
        {
          "title": "ตัวอย่างในบริบทแอป",
          "code": "use std::collections::HashSet;\n\nfn main() {\n    let a: HashSet<_> = [1, 2].into_iter().collect();\n    let b: HashSet<_> = [2, 3].into_iter().collect();\n    let mut ids: Vec<_> = a.union(&b).copied().collect();\n    ids.sort();\n    println!(\"{:?}\", ids);\n    println!(\"{}\", a.intersection(&b).count());\n}",
          "expected": "[1, 2, 3]\n1\n",
          "mode": "run",
          "edition": "2021"
        }
      ],
      "tips": [
        "sort ก่อนแสดงผลเมื่อจำเป็นต้องได้ลำดับแน่นอน"
      ]
    },
    {
      "id": "std/rc",
      "title": "แชร์ ownership ใน thread เดียว · Rc",
      "section": "ชนิดที่พร้อมใช้ใน std",
      "source": "https://doc.rust-lang.org/rust-by-example/std/rc.html",
      "body": "<h2>แนวคิดที่ต้องรู้</h2><p>Rc&lt;T&gt; นับ strong references แบบไม่ atomic clone เพิ่มเจ้าของข้อมูลเดิม และข้อมูลถูกทำลายเมื่อ strong count เป็นศูนย์; Rc ไม่ใช่เครื่องมือแชร์ข้าม thread</p><h2>เมื่อนำไปใช้ในแอป</h2><p>มุมมองรายงานสองตัวใช้ชื่อโครงการเดียวกันโดยไม่ clone เนื้อหา String</p><h2>อ้างอิงเพิ่มเติม</h2><ul><li><a href=\"https://doc.rust-lang.org/std/rc/struct.Rc.html\">เอกสารทางการเพิ่มเติม</a></li></ul>",
      "examples": [
        {
          "title": "ตัวอย่างในบริบทแอป",
          "code": "use std::rc::Rc;\n\nfn main() {\n    let name = Rc::new(String::from(\"work\"));\n    println!(\"{}\", Rc::strong_count(&name));\n    let view = Rc::clone(&name);\n    println!(\"{} {}\", view, Rc::strong_count(&name));\n    drop(view);\n    println!(\"{}\", Rc::strong_count(&name));\n}",
          "expected": "1\nwork 2\n1\n",
          "mode": "run",
          "edition": "2021"
        }
      ],
      "tips": [
        "วงจร strong references อาจทำให้ไม่ถูกคืน ใช้ Weak เมื่อความสัมพันธ์ไม่ควรเป็นเจ้าของ"
      ]
    },
    {
      "id": "std/arc",
      "title": "แชร์ ownership ข้าม thread · Arc",
      "section": "ชนิดที่พร้อมใช้ใน std",
      "source": "https://doc.rust-lang.org/rust-by-example/std/arc.html",
      "body": "<h2>แนวคิดที่ต้องรู้</h2><p>Arc&lt;T&gt; ใช้ atomic reference counting; การแชร์ข้าม thread ยังขึ้นกับ Send/Sync ของ T และ Arc ไม่ได้ให้สิทธิ์แก้ T พร้อมกันโดยอัตโนมัติ</p><h2>เมื่อนำไปใช้ในแอป</h2><p>ส่งชื่อโครงการให้ worker โดย worker เป็นเจ้าของ Arc อีกหนึ่งตัว</p><h2>อ้างอิงเพิ่มเติม</h2><ul><li><a href=\"https://doc.rust-lang.org/std/sync/struct.Arc.html\">เอกสารทางการเพิ่มเติม</a></li></ul>",
      "examples": [
        {
          "title": "ตัวอย่างในบริบทแอป",
          "code": "use std::{sync::Arc, thread};\n\nfn main() {\n    let name = Arc::new(String::from(\"work\"));\n    let worker_name = Arc::clone(&name);\n    let worker = thread::spawn(move || worker_name.len());\n    match worker.join() {\n        Ok(n) => println!(\"{} {n}\", name),\n        Err(_) => println!(\"worker failed\")\n    }\n}",
          "expected": "work 4\n",
          "mode": "run",
          "edition": "2021"
        }
      ],
      "tips": [
        "ถ้าต้องแก้ข้อมูลร่วมกัน ให้เลือก synchronization ที่เหมาะสม เช่น Mutex และตรวจผล lock"
      ]
    },
    {
      "id": "std_misc",
      "title": "ทำงานกับระบบภายนอก · Std misc",
      "section": "ทำงานกับระบบภายนอก · Std misc",
      "source": "https://doc.rust-lang.org/rust-by-example/std_misc.html",
      "body": "<h2>แนวคิดที่ต้องรู้</h2><p>std มี thread, channel, file, process และ path เพื่อให้โปรแกรมทำงานกับระบบปฏิบัติการ ขั้นตอนเหล่านี้อาจล้มเหลวต่างจากคำนวณค่าล้วน</p><h2>เมื่อนำไปใช้ในแอป</h2><p>ใช้ worker คำนวณจำนวนงานแล้วรับผลกลับก่อนสร้างรายงาน</p>",
      "examples": [
        {
          "title": "ตัวอย่างในบริบทแอป",
          "code": "fn main() {\n    let worker = std::thread::spawn(|| [2_u32, 3].iter().sum::<u32>());\n    match worker.join() {\n        Ok(total) => println!(\"total={total}\"),\n        Err(_) => println!(\"worker failed\")\n    }\n}",
          "expected": "total=5\n",
          "mode": "run",
          "edition": "2021"
        }
      ],
      "tips": [
        "ตรวจ Result ที่ขอบเขตระบบภายนอก และอย่าสมมติลำดับการทำงานของ thread"
      ]
    },
    {
      "id": "std_misc/threads",
      "title": "แยกงานไป thread · Threads",
      "section": "ทำงานกับระบบภายนอก · Std misc",
      "source": "https://doc.rust-lang.org/rust-by-example/std_misc/threads.html",
      "body": "<h2>แนวคิดที่ต้องรู้</h2><p>thread::spawn เริ่ม thread พร้อม closure; JoinHandle::join รอให้เสร็จและคืน Result เพราะ thread อาจ panic; ลำดับการพิมพ์จากหลาย threadไม่แน่นอน</p><h2>เมื่อนำไปใช้ในแอป</h2><p>คำนวณจำนวนงานสองชุดแล้วรวมเมื่อ worker เสร็จ แทนการคาดเดาว่า worker ใดเสร็จก่อน</p>",
      "examples": [
        {
          "title": "ตัวอย่างในบริบทแอป",
          "code": "use std::thread;\n\nfn main() {\n    let a = thread::spawn(|| 2_u32 + 3);\n    let b = thread::spawn(|| 4_u32);\n    match (a.join(), b.join()) {\n        (Ok(a), Ok(b)) => println!(\"total={}\", a + b),\n        _ => println!(\"worker failed\")\n    }\n}",
          "expected": "total=9\n",
          "mode": "run",
          "edition": "2021"
        }
      ],
      "tips": [
        "การแตกงานเล็กมากอาจเสียเวลาเริ่มและประสาน thread มากกว่าคำนวณ"
      ]
    },
    {
      "id": "std_misc/threads/testcase_mapreduce",
      "title": "แบ่งข้อมูลแล้วรวมผล · Map-reduce",
      "section": "ทำงานกับระบบภายนอก · Std misc",
      "source": "https://doc.rust-lang.org/rust-by-example/std_misc/threads/testcase_mapreduce.html",
      "body": "<h2>แนวคิดที่ต้องรู้</h2><p>map-reduce แบ่ง input ให้ worker คำนวณผลย่อย แล้ว reduce รวมผล; ต้องคิดถึงต้นทุนแบ่งงานและความถูกต้องของการรวม ไม่ใช่แค่จำนวน thread</p><h2>เมื่อนำไปใช้ในแอป</h2><p>แบ่งจำนวนงานรายวันเป็นสองช่วง คำนวณผลรวมแต่ละช่วงแล้วรวมกัน</p>",
      "examples": [
        {
          "title": "ตัวอย่างในบริบทแอป",
          "code": "use std::thread;\n\nfn main() {\n    let chunks = [vec![2_u32, 3], vec![4, 1]];\n    let handles: Vec<_> = chunks.into_iter()\n        .map(|chunk| thread::spawn(move || chunk.iter().sum::<u32>()))\n        .collect();\n    let mut total = 0;\n    for handle in handles {\n        match handle.join() {\n            Ok(part) => total += part,\n            Err(_) => {\n                println!(\"worker failed\");\n                return;\n            }\n        }\n    }\n    println!(\"total={total}\");\n}",
          "expected": "total=10\n",
          "mode": "run",
          "edition": "2021"
        }
      ],
      "tips": [
        "วัดกับข้อมูลจริงก่อนสรุปว่า parallel เร็วกว่า sequential"
      ]
    },
    {
      "id": "std_misc/channels",
      "title": "ส่งข้อมูลระหว่าง thread · Channels",
      "section": "ทำงานกับระบบภายนอก · Std misc",
      "source": "https://doc.rust-lang.org/rust-by-example/std_misc/channels.html",
      "body": "<h2>แนวคิดที่ต้องรู้</h2><p>std::sync::mpsc::channel ให้ Sender กับ Receiver; ส่งได้ทางเดียว clone Sender เพิ่มผู้ส่ง และ recv คืน error เมื่อไม่มีผู้ส่งที่ยังเปิดและไม่มีข้อมูลเหลือ</p><h2>เมื่อนำไปใช้ในแอป</h2><p>worker ส่งจำนวนงานที่คำนวณเสร็จมาให้ตัวสร้างรายงาน</p>",
      "examples": [
        {
          "title": "ตัวอย่างในบริบทแอป",
          "code": "use std::{sync::mpsc, thread};\n\nfn main() {\n    let (tx, rx) = mpsc::channel();\n    let worker = thread::spawn(move || tx.send(5_u32));\n    match rx.recv() {\n        Ok(n) => println!(\"count={n}\"),\n        Err(_) => println!(\"channel closed\")\n    }\n    println!(\"worker ok={}\", matches!(worker.join(), Ok(Ok(()))));\n}",
          "expected": "count=5\nworker ok=true\n",
          "mode": "run",
          "edition": "2021"
        }
      ],
      "tips": [
        "อย่ารอ recv จาก channel ที่ยังมี Sender เก็บไว้แต่จะไม่ส่งข้อมูลอีก เพราะอาจรอไม่จบ"
      ]
    },
    {
      "id": "std_misc/path",
      "title": "จัดเส้นทางไฟล์ · Path / PathBuf",
      "section": "ทำงานกับระบบภายนอก · Std misc",
      "source": "https://doc.rust-lang.org/rust-by-example/std_misc/path.html",
      "body": "<h2>แนวคิดที่ต้องรู้</h2><p>Path เป็นมุมมองยืมของเส้นทาง PathBuf เป็นเจ้าของเส้นทางที่แก้ได้; เส้นทางไม่จำเป็นต้องเป็น UTF-8 และการ join ไม่ตรวจว่าไฟล์มีอยู่จริง</p><h2>เมื่อนำไปใช้ในแอป</h2><p>ต่อชื่อไฟล์ตั้งค่าโดยไม่ต่อ string ด้วย separator เอง</p>",
      "examples": [
        {
          "title": "ตัวอย่างในบริบทแอป",
          "code": "use std::path::Path;\n\nfn main() {\n    for name in [\"tasks.csv\", \"settings.toml\"] {\n        let path = Path::new(\"data\").join(name);\n        println!(\"{:?}\", path.extension().and_then(|v| v.to_str()));\n    }\n}",
          "expected": "Some(\"csv\")\nSome(\"toml\")\n",
          "mode": "run",
          "edition": "2021"
        }
      ],
      "tips": [
        "ถ้าชื่อไฟล์มาจากผู้ใช้ ต้องตรวจข้อจำกัดการเข้าถึง path ตามบริบทแอป"
      ]
    },
    {
      "id": "std_misc/file",
      "title": "อ่านเขียนไฟล์ด้วย Result · File I/O",
      "section": "ทำงานกับระบบภายนอก · Std misc",
      "source": "https://doc.rust-lang.org/rust-by-example/std_misc/file.html",
      "body": "<h2>แนวคิดที่ต้องรู้</h2><p>File เป็นเจ้าของ handle ของไฟล์; การเปิดอ่านเขียนคืน Result เพราะไฟล์อาจหาย สิทธิ์ไม่พอ หรืออุปกรณ์ผิดพลาด; Drop คืน handle แต่ไม่ได้รับประกันการ sync ข้อมูลถาวร</p><h2>เมื่อนำไปใช้ในแอป</h2><p>parser อ่านข้อมูลตั้งค่าได้จากตัวอ่านที่มีสัญญา Read โดยแยกจากการเปิดไฟล์จริง</p>",
      "examples": [
        {
          "title": "ตัวอย่างในบริบทแอป",
          "code": "use std::io::{self, Read};\n\nfn read_count(mut input: impl Read) -> io::Result<String> {\n    let mut text = String::new();\n    input.read_to_string(&mut text)?;\n    Ok(text)\n}\n\nfn main() -> io::Result<()> {\n    println!(\"{}\", read_count(&b\"3\"[..])?);\n    println!(\"{}\", read_count(&b\"5\"[..])?);\n    Ok(())\n}",
          "expected": "3\n5\n",
          "mode": "run",
          "edition": "2021"
        }
      ],
      "tips": [
        "แยกการอ่าน bytes ออกจากการตีความค่าของแอป เพื่อรายงาน error ได้ตรงขั้นตอน"
      ]
    },
    {
      "id": "std_misc/file/open",
      "title": "เปิดไฟล์เพื่ออ่าน · File::open",
      "section": "ทำงานกับระบบภายนอก · Std misc",
      "source": "https://doc.rust-lang.org/rust-by-example/std_misc/file/open.html",
      "body": "<h2>แนวคิดที่ต้องรู้</h2><p>File::open เปิดไฟล์แบบอ่านอย่างเดียวและคืน io::Result; read_to_string ต้องการข้อมูล UTF-8 ที่ถูกต้อง</p><h2>เมื่อนำไปใช้ในแอป</h2><p>ตัวอย่างสร้างไฟล์ชั่วคราวเฉพาะการสาธิต จากนั้นเปิดอ่านจำนวนงานและลบออก</p>",
      "examples": [
        {
          "title": "ตัวอย่างในบริบทแอป",
          "code": "use std::{fs::{self, File}, io::{self, Read}};\n\nfn main() -> io::Result<()> {\n    let path = std::env::temp_dir().join(format!(\"rbe-open-{}.txt\", std::process::id()));\n    let mut created = fs::OpenOptions::new()\n        .write(true)\n        .create_new(true)\n        .open(&path)?;\n    use std::io::Write;\n    created.write_all(b\"3\")?;\n    drop(created);\n    let mut text = String::new();\n    File::open(&path)?.read_to_string(&mut text)?;\n    fs::remove_file(&path)?;\n    println!(\"count={text}\");\n    Ok(())\n}",
          "expected": "count=3\n",
          "mode": "run",
          "edition": "2021"
        }
      ],
      "tips": [
        "ในแอปจริงอย่าสร้างไฟล์ทับเองเพื่อแก้กรณี File::open ไม่สำเร็จ ให้แยก NotFound ออกจากข้อผิดพลาดอื่น"
      ]
    },
    {
      "id": "std_misc/file/create",
      "title": "สร้างไฟล์โดยรู้ผลของการเขียนทับ · create",
      "section": "ทำงานกับระบบภายนอก · Std misc",
      "source": "https://doc.rust-lang.org/rust-by-example/std_misc/file/create.html",
      "body": "<h2>แนวคิดที่ต้องรู้</h2><p>File::create สร้างไฟล์ใหม่หรือ truncate ไฟล์เดิมให้ว่างทันที; write_all พยายามเขียนข้อมูลทั้งหมดและคืน error หากทำไม่ได้</p><h2>เมื่อนำไปใช้ในแอป</h2><p>เมื่อ export ต้องการป้องกันไฟล์เดิม ใช้ OpenOptions::create_new(true) เพื่อให้การสร้างล้มเหลวแทนเขียนทับ</p>",
      "examples": [
        {
          "title": "ตัวอย่างในบริบทแอป",
          "code": "use std::{fs::{self, OpenOptions}, io::{self, Write}};\n\nfn main() -> io::Result<()> {\n    let path = std::env::temp_dir().join(format!(\"rbe-create-{}.txt\", std::process::id()));\n    let mut file = OpenOptions::new()\n        .write(true)\n        .create_new(true)\n        .open(&path)?;\n    file.write_all(b\"tasks=3\n\")?;\n    drop(file);\n    let text = fs::read_to_string(&path)?;\n    fs::remove_file(&path)?;\n    print!(\"{text}\");\n    Ok(())\n}",
          "expected": "tasks=3\n",
          "mode": "run",
          "edition": "2021"
        }
      ],
      "tips": [
        "ตกลงนโยบายเขียนทับให้ชัดก่อนใช้ File::create กับข้อมูลผู้ใช้"
      ]
    },
    {
      "id": "std_misc/file/read_lines",
      "title": "อ่านทีละบรรทัด · BufRead::lines",
      "section": "ทำงานกับระบบภายนอก · Std misc",
      "source": "https://doc.rust-lang.org/rust-by-example/std_misc/file/read_lines.html",
      "body": "<h2>แนวคิดที่ต้องรู้</h2><p>BufReader ช่วย buffer การอ่าน ส่วน lines() คืน iterator ของ io::Result&lt;String&gt; จึงต้องตรวจ error ในแต่ละบรรทัดด้วย; read_to_string อ่านทั้งไฟล์เข้าหน่วยความจำ</p><h2>เมื่อนำไปใช้ในแอป</h2><p>สรุปจำนวนงานจากข้อมูลหลายบรรทัดโดยใช้ Cursor เป็นไฟล์จำลองที่อ่านซ้ำได้</p>",
      "examples": [
        {
          "title": "ตัวอย่างในบริบทแอป",
          "code": "use std::io::{self, BufRead, Cursor};\n\nfn main() -> io::Result<()> {\n    for line in Cursor::new(b\"2\n5\n\").lines() {\n        let text = line?;\n        match text.parse::<u32>() {\n            Ok(n) => println!(\"tasks={n}\"),\n            Err(_) => println!(\"invalid count\")\n        }\n    }\n    Ok(())\n}",
          "expected": "tasks=2\ntasks=5\n",
          "mode": "run",
          "edition": "2021"
        }
      ],
      "tips": [
        "อย่าใช้ filter_map(Result::ok) ถ้าข้อผิดพลาดอ่านไฟล์ไม่ควรถูกกลืนหาย"
      ]
    },
    {
      "id": "std_misc/process",
      "title": "เรียกโปรแกรมลูก · Command",
      "section": "ทำงานกับระบบภายนอก · Std misc",
      "source": "https://doc.rust-lang.org/rust-by-example/std_misc/process.html",
      "body": "<h2>แนวคิดที่ต้องรู้</h2><p>Command สร้าง process โดยกำหนด executable และ arguments แยกกัน; output รอให้จบพร้อมเก็บ stdout stderr และ status; การ spawn สำเร็จไม่ได้แปลว่าโปรแกรมลูกทำงานสำเร็จ</p><h2>เมื่อนำไปใช้ในแอป</h2><p>ตัวอย่างเรียก executable ตัวเองในโหมด worker จึงไม่ต้องพึ่ง shell หรือคำสั่งของระบบใดระบบหนึ่ง</p>",
      "examples": [
        {
          "title": "ตัวอย่างในบริบทแอป",
          "code": "use std::{io, process::Command};\n\nfn main() -> io::Result<()> {\n    if std::env::args().any(|a| a == \"--worker\") {\n        println!(\"tasks=5\");\n        return Ok(());\n    }\n    let out = Command::new(std::env::current_exe()?)\n        .arg(\"--worker\")\n        .output()?;\n    println!(\"success={}\", out.status.success());\n    print!(\"{}\", String::from_utf8_lossy(&out.stdout));\n    Ok(())\n}",
          "expected": "success=true\ntasks=5\n",
          "mode": "run",
          "edition": "2021"
        }
      ],
      "tips": [
        "ใช้ arg แยกจากชื่อโปรแกรม และตรวจ exit status ก่อนใช้ stdout เป็นข้อมูลที่เชื่อถือได้"
      ]
    },
    {
      "id": "std_misc/process/pipe",
      "title": "ต่อ stdin/stdout ผ่าน pipe",
      "section": "ทำงานกับระบบภายนอก · Std misc",
      "source": "https://doc.rust-lang.org/rust-by-example/std_misc/process/pipe.html",
      "body": "<h2>แนวคิดที่ต้องรู้</h2><p>Stdio::piped เปิด handle ให้ parent ส่งหรือรับข้อมูลกับ child; ต้องปิด stdin เมื่อส่งเสร็จเพื่อให้ child ที่อ่านจน EOF ทำงานต่อได้</p><h2>เมื่อนำไปใช้ในแอป</h2><p>ส่งชื่อรายงานเข้า worker แล้วรับข้อความที่แปลงกลับมา</p>",
      "examples": [
        {
          "title": "ตัวอย่างในบริบทแอป",
          "code": "use std::{io::{self, Read, Write}, process::{Command, Stdio}};\n\nfn main() -> io::Result<()> {\n    if std::env::args().any(|a| a == \"--worker\") {\n        let mut input = String::new();\n        io::stdin().read_to_string(&mut input)?;\n        print!(\"{}\", input.to_uppercase());\n        return Ok(());\n    }\n    let mut child = Command::new(std::env::current_exe()?)\n        .arg(\"--worker\")\n        .stdin(Stdio::piped())\n        .stdout(Stdio::piped())\n        .spawn()?;\n    if let Some(mut input) = child.stdin.take() {\n        input.write_all(b\"work\n\")?;\n    }\n    let out = child.wait_with_output()?;\n    if out.status.success() {\n        print!(\"{}\", String::from_utf8_lossy(&out.stdout));\n    } else {\n        println!(\"worker failed\");\n    }\n    Ok(())\n}",
          "expected": "WORK\n",
          "mode": "run",
          "edition": "2021"
        }
      ],
      "tips": [
        "อ่านเขียนข้อมูลจำนวนมากต้องออกแบบไม่ให้ทั้งสองฝั่งรอกันจน pipe เต็ม"
      ]
    },
    {
      "id": "std_misc/process/wait",
      "title": "รอ child จบ · Child::wait",
      "section": "ทำงานกับระบบภายนอก · Std misc",
      "source": "https://doc.rust-lang.org/rust-by-example/std_misc/process/wait.html",
      "body": "<h2>แนวคิดที่ต้องรู้</h2><p>Child::wait รอ process จบและคืน ExitStatus; การ drop Child ไม่ได้รอให้มันจบโดยอัตโนมัติ</p><h2>เมื่อนำไปใช้ในแอป</h2><p>ก่อนแจ้ง export เสร็จ ต้องรอ worker และดูว่าจบสำเร็จจริง</p><h2>อ้างอิงเพิ่มเติม</h2><ul><li><a href=\"https://doc.rust-lang.org/std/process/struct.Child.html\">เอกสารทางการเพิ่มเติม</a></li></ul>",
      "examples": [
        {
          "title": "ตัวอย่างในบริบทแอป",
          "code": "use std::{io, process::Command};\n\nfn main() -> io::Result<()> {\n    if std::env::args().any(|a| a == \"--worker\") {\n        return Ok(());\n    }\n    let mut child = Command::new(std::env::current_exe()?)\n        .arg(\"--worker\")\n        .spawn()?;\n    println!(\"success={}\", child.wait()?.success());\n    Ok(())\n}",
          "expected": "success=true\n",
          "mode": "run",
          "edition": "2021"
        }
      ],
      "tips": [
        "หากไม่ใช้ output() หรือ wait_with_output() ต้องวางจุด wait ให้ชัดเอง"
      ]
    },
    {
      "id": "std_misc/fs",
      "title": "งานกับระบบไฟล์ · std::fs",
      "section": "ทำงานกับระบบภายนอก · Std misc",
      "source": "https://doc.rust-lang.org/rust-by-example/std_misc/fs.html",
      "body": "<h2>แนวคิดที่ต้องรู้</h2><p>std::fs มี create_dir, read_dir, copy, rename, remove_file และ remove_dir; แต่ละคำสั่งอาจล้มเหลวและความสามารถบางอย่างต่างกันตามระบบปฏิบัติการ</p><h2>เมื่อนำไปใช้ในแอป</h2><p>ทำโฟลเดอร์รายงานชั่วคราว ตรวจว่ามีจริง แล้วลบเฉพาะโฟลเดอร์ว่างที่ตัวอย่างสร้าง</p><h2>อ้างอิงเพิ่มเติม</h2><ul><li><a href=\"https://doc.rust-lang.org/std/fs/struct.OpenOptions.html\">เอกสารทางการเพิ่มเติม</a></li></ul>",
      "examples": [
        {
          "title": "ตัวอย่างในบริบทแอป",
          "code": "use std::{fs, io};\n\nfn main() -> io::Result<()> {\n    let path = std::env::temp_dir().join(format!(\"rbe-dir-{}\", std::process::id()));\n    fs::create_dir(&path)?;\n    println!(\"directory={}\", fs::metadata(&path)?.is_dir());\n    fs::remove_dir(&path)?;\n    println!(\"exists={}\", path.exists());\n    Ok(())\n}",
          "expected": "directory=true\nexists=false\n",
          "mode": "run",
          "edition": "2021"
        }
      ],
      "tips": [
        "การเช็กว่ามีไฟล์แล้วค่อยทำงานไม่กัน race; ใช้ operation ที่รับประกันเงื่อนไขนั้น เช่น create_new เมื่อสร้างไฟล์"
      ]
    },
    {
      "id": "std_misc/arg",
      "title": "อ่าน argument ของโปรแกรม",
      "section": "ทำงานกับระบบภายนอก · Std misc",
      "source": "https://doc.rust-lang.org/rust-by-example/std_misc/arg.html",
      "body": "<h2>แนวคิดที่ต้องรู้</h2><p>std::env::args คืน iterator ของ String และตัวแรกตามปกติเป็นชื่อหรือ path ของโปรแกรม; args_os รองรับ argument ที่ไม่ใช่ UTF-8</p><h2>เมื่อนำไปใช้ในแอป</h2><p>ตัวอย่างจำลองค่าจาก args เพื่อให้เห็นความต่างระหว่างชื่อโปรแกรมกับตัวเลือกของผู้ใช้</p>",
      "examples": [
        {
          "title": "ตัวอย่างในบริบทแอป",
          "code": "fn main() {\n    let args = [\"tasks\", \"list\", \"work\"];\n    for (index, arg) in args.iter().enumerate() {\n        println!(\"{index}={arg}\");\n    }\n}",
          "expected": "0=tasks\n1=list\n2=work\n",
          "mode": "run",
          "edition": "2021"
        }
      ],
      "tips": [
        "โค้ดนี้ใช้ชุด argument จำลองเพื่อให้ผลซ้ำได้ เมื่อต่อ CLI จริงใช้ env::args หรือ args_os"
      ]
    },
    {
      "id": "std_misc/arg/matching",
      "title": "แปลคำสั่งจาก pattern · Argument parsing",
      "section": "ทำงานกับระบบภายนอก · Std misc",
      "source": "https://doc.rust-lang.org/rust-by-example/std_misc/arg/matching.html",
      "body": "<h2>แนวคิดที่ต้องรู้</h2><p>match บน slice ของ argument แยกคำสั่งและจำนวน parameter ได้ แล้ว parse ค่าที่ต้องมีชนิด; pattern ไม่ได้ตรวจความหมายของข้อความให้</p><h2>เมื่อนำไปใช้ในแอป</h2><p>รองรับ list ที่ไม่ต้องมีเลข และ show ที่ต้องมีเลขงานถูกต้อง</p>",
      "examples": [
        {
          "title": "ตัวอย่างในบริบทแอป",
          "code": "fn command(args: &[&str]) {\n    match args {\n        [\"list\"] => println!(\"all tasks\"),\n        [\"show\", id] => match id.parse::<u32>() {\n            Ok(id) => println!(\"task={id}\"),\n            Err(_) => println!(\"invalid id\")\n        },\n        _ => println!(\"usage\")\n    }\n}\n\nfn main() {\n    command(&[\"list\"]);\n    command(&[\"show\", \"7\"]);\n    command(&[\"show\", \"bad\"]);\n}",
          "expected": "all tasks\ntask=7\ninvalid id\n",
          "mode": "run",
          "edition": "2021"
        }
      ],
      "tips": [
        "เมื่อคำสั่ง ตัวเลือก และ help ซับซ้อน ค่อยประเมิน parser library จากเอกสารจริง"
      ]
    },
    {
      "id": "std_misc/ffi",
      "title": "เรียก native library · FFI",
      "section": "ทำงานกับระบบภายนอก · Std misc",
      "source": "https://doc.rust-lang.org/rust-by-example/std_misc/ffi.html",
      "body": "<h2>แนวคิดที่ต้องรู้</h2><p>extern block ประกาศ signature ของ foreign function และ link ระบุ library; การเรียก foreign function โดยทั่วไปเป็น unsafe เพราะ compiler พิสูจน์สัญญาฝั่งภายนอกไม่ได้ ต้องตรวจ ABI ชนิด และ precondition</p><h2>เมื่อนำไปใช้ในแอป</h2><p>ตัวอย่างอ่านค่า cosine จาก libm แสดงการเชื่อม native library; ไม่ได้จำเป็นสำหรับแอปจัดการงานทั่วไป</p>",
      "examples": [
        {
          "title": "ตัวอย่างในบริบทแอป",
          "code": "// ตัวอย่างเฉพาะ target ที่มี libm และ C double ตรงกับ f64\n#[link(name = \"m\")]\nextern \"C\" { fn cos(x: f64) -> f64; }\nfn main() {\n    // SAFETY: signature ต้องตรงกับ libm บน target ที่เลือก\n    let value = unsafe { cos(0.0) };\n    println!(\"{value}\");\n}",
          "expected": "1\n",
          "mode": "text",
          "edition": "2021",
          "note": "ต้อง link libm บน target ที่รองรับและตรวจ ABI; เป็นตัวอย่าง platform-specific ที่ยังไม่ผ่าน native build"
        }
      ],
      "tips": [
        "ทำ safe wrapper หลังตรวจสัญญาของ native API ทุกข้อ และระบุ target ที่ทดสอบจริง"
      ]
    },
    {
      "id": "testing",
      "title": "ตรวจพฤติกรรมด้วยการทดสอบ · Testing",
      "section": "ตรวจพฤติกรรมด้วยการทดสอบ · Testing",
      "source": "https://doc.rust-lang.org/rust-by-example/testing.html",
      "body": "<h2>แนวคิดที่ต้องรู้</h2><p>Rust รองรับ unit test, integration test และ documentation test โดย Cargo ช่วย compile และรัน; เมื่อทดสอบผลคำนวณ ควร assert ผลที่ต้องการ ไม่ใช่เพียงเรียกฟังก์ชันแล้วไม่ตรวจค่า</p><h2>เมื่อนำไปใช้ในแอป</h2><p>ตรวจการนับงานที่เสร็จและกรณียังไม่มีงาน เพื่อป้องกันผลรายงานผิดหลังแก้โค้ด</p>",
      "examples": [
        {
          "title": "ตัวอย่างในบริบทแอป",
          "code": "fn pending(total: u32, done: u32) -> u32 {\n    total.saturating_sub(done)\n}\n\nfn main() {\n    assert_eq!(pending(5, 2), 3);\n    assert_eq!(pending(0, 0), 0);\n    println!(\"checks passed\");\n}",
          "expected": "checks passed\n",
          "mode": "run",
          "edition": "2021"
        }
      ],
      "tips": [
        "assert ยืนยันกรณีที่กำหนดไว้ ไม่ใช่หลักฐานว่าทุก input ถูกต้อง"
      ]
    },
    {
      "id": "testing/unit_testing",
      "title": "ตรวจหน่วยเล็กของโค้ด · Unit testing",
      "section": "ตรวจพฤติกรรมด้วยการทดสอบ · Testing",
      "source": "https://doc.rust-lang.org/rust-by-example/testing/unit_testing.html",
      "body": "<h2>แนวคิดที่ต้องรู้</h2><p>#[test] ระบุฟังก์ชันทดสอบ; assert!, assert_eq!, assert_ne! ตรวจเงื่อนไข #[should_panic] ระบุการ panic ที่คาดหมาย #[ignore] ข้ามโดยปริยาย และ test คืน Result ได้; #[cfg(test)] แยก test module จาก build ปกติ</p><h2>เมื่อนำไปใช้ในแอป</h2><p>วางชุดตรวจตรรกะจำนวนงานข้าง implementation เพื่อเรียก private helper ได้</p><h2>อ้างอิงเพิ่มเติม</h2><ul><li><a href=\"https://doc.rust-lang.org/reference/attributes/testing.html\">เอกสารทางการเพิ่มเติม</a></li></ul>",
      "examples": [
        {
          "title": "ตัวอย่างในบริบทแอป",
          "code": "// src/lib.rs\nfn pending(total: u32, done: u32) -> u32 { total.saturating_sub(done) }\n#[cfg(test)]\nmod tests {\n    use super::pending;\n    #[test]\n    fn remaining_tasks() {\n        assert_eq!(pending(5, 2), 3);\n        assert_eq!(pending(0, 0), 0);\n    }\n}",
          "expected": "",
          "mode": "text",
          "edition": "2021",
          "note": "วางใน Cargo library แล้วรัน cargo test; โค้ดนี้ต้องใช้ test harness ไม่ใช่ main executable"
        }
      ],
      "tips": [
        "ตรวจพฤติกรรมที่เสี่ยงพังและขอบเขต input; should_panic ควรระบุ expected เพื่อไม่ยอมรับ panic คนละสาเหตุ"
      ]
    },
    {
      "id": "testing/doc_testing",
      "title": "ตัวอย่างในเอกสารเป็น test ได้ · Doc tests",
      "section": "ตรวจพฤติกรรมด้วยการทดสอบ · Testing",
      "source": "https://doc.rust-lang.org/rust-by-example/testing/doc_testing.html",
      "body": "<h2>แนวคิดที่ต้องรู้</h2><p>rustdoc ใช้ Rust code block ใน doc comments เป็น test โดยปริยายเมื่อ cargo test; # ซ่อนบรรทัดจากหน้าที่แสดงแต่ยังคอมไพล์; no_run ตรวจ compile โดยไม่ run ส่วน compile_fail คาดว่าคอมไพล์ไม่ผ่าน</p><h2>เมื่อนำไปใช้ในแอป</h2><p>ตัวอย่างใช้ public API รายงานอยู่ใกล้คำอธิบาย จึงตรวจได้ว่า API ยังใช้ตามเอกสารได้</p>",
      "examples": [
        {
          "title": "ตัวอย่างในบริบทแอป",
          "code": "// src/lib.rs ของ package task_core\n/// Count tasks not yet finished.\n///\n/// ```\n/// assert_eq!(task_core::pending(5, 2), 3);\n/// assert_eq!(task_core::pending(0, 0), 0);\n/// ```\npub fn pending(total: u32, done: u32) -> u32 { total.saturating_sub(done) }",
          "expected": "",
          "mode": "text",
          "edition": "2021",
          "note": "ต้องใช้ package ชื่อ task_core และรัน cargo test --doc; snippet อ้างชื่อ crate ตาม package นี้"
        }
      ],
      "tips": [
        "อย่าใช้ ignore กลบตัวอย่างที่ล้าสมัยถ้าจริง ๆ ต้องแก้ให้ compile ได้"
      ]
    },
    {
      "id": "testing/integration_testing",
      "title": "ตรวจจากมุมผู้ใช้ crate · Integration tests",
      "section": "ตรวจพฤติกรรมด้วยการทดสอบ · Testing",
      "source": "https://doc.rust-lang.org/rust-by-example/testing/integration_testing.html",
      "body": "<h2>แนวคิดที่ต้องรู้</h2><p>ไฟล์ .rs ระดับ tests/ เป็น crate ทดสอบแยก เข้าถึงได้ผ่าน public API; helper หลายไฟล์ใช้ tests/common/mod.rs เพื่อลดการถูกมองเป็น test target แยก</p><h2>เมื่อนำไปใช้ในแอป</h2><p>ตรวจ API ที่ CLI หรือโปรแกรมอื่นใช้จริง โดยไม่พึ่ง private implementation</p>",
      "examples": [
        {
          "title": "ตัวอย่างในบริบทแอป",
          "code": "// tests/report.rs ของ package task_core\nuse task_core::pending;\n#[test]\nfn public_report_counts() {\n    assert_eq!(pending(5, 2), 3);\n    assert_eq!(pending(5, 5), 0);\n}",
          "expected": "",
          "mode": "text",
          "edition": "2021",
          "note": "ต้องมี task_core::pending เป็น pub ใน src/lib.rs และรัน cargo test"
        }
      ],
      "tips": [
        "การทดสอบ integration ที่เข้าถึง public API ช่วยตรวจว่า consumer เรียกใช้งานได้จริง"
      ]
    },
    {
      "id": "testing/dev_dependencies",
      "title": "dependency เฉพาะงานพัฒนา",
      "section": "ตรวจพฤติกรรมด้วยการทดสอบ · Testing",
      "source": "https://doc.rust-lang.org/rust-by-example/testing/dev_dependencies.html",
      "body": "<h2>แนวคิดที่ต้องรู้</h2><p>[dev-dependencies] ใช้กับ tests, examples และ benchmarks โดยไม่เป็น dependency ที่ consumer ใช้ build library ตามปกติ</p><h2>เมื่อนำไปใช้ในแอป</h2><p>ถ้าชุดทดสอบต้องใช้ helper crate ให้แยกจาก runtime dependency เพื่อไม่ทำให้ขอบเขต library ปะปน</p>",
      "examples": [
        {
          "title": "ตัวอย่างในบริบทแอป",
          "code": "# Cargo.toml\n[dev-dependencies]\ntest_support = { path = \"../test_support\" }\n\n# ต้องมี package test_support จริงที่เส้นทางนี้",
          "expected": "",
          "mode": "text",
          "edition": "2021",
          "note": "ตัวอย่าง manifest สำหรับโครงการหลาย crate ต้องมี test_support อยู่จริงก่อน cargo test"
        }
      ],
      "tips": [
        "ไม่ต้องเพิ่ม dependency เมื่อ standard assert และข้อมูลทดสอบขนาดเล็กพอแล้ว"
      ]
    },
    {
      "id": "unsafe",
      "title": "รับหน้าที่พิสูจน์เพิ่ม · Unsafe Operations",
      "section": "รับหน้าที่พิสูจน์เพิ่ม · Unsafe Operations",
      "source": "https://doc.rust-lang.org/rust-by-example/unsafe.html",
      "body": "<h2>แนวคิดที่ต้องรู้</h2><p>unsafe อนุญาตการทำงานบางอย่างที่ safe Rust ไม่ยอม เช่น dereference raw pointer เรียก unsafe function เข้าถึง mutable static และอ่าน union field; borrow checking ส่วนอื่นยังทำงานตามปกติ และผู้เขียนต้องพิสูจน์สัญญาความปลอดภัย</p><h2>เมื่อนำไปใช้ในแอป</h2><p>ดู raw pointer ที่สร้างจาก reference ซึ่งยังมีชีวิต โดยไม่มีเหตุผลให้ใช้ unsafe แทน &amp;value ในแอปทั่วไป</p>",
      "examples": [
        {
          "title": "ตัวอย่างในบริบทแอป",
          "code": "fn main() {\n    let count = 3_u32;\n    let pointer = &count as *const u32;\n    // SAFETY: pointer มาจาก reference ที่ยังถูกต้องและ count ยังมีชีวิต\n    let read = unsafe { *pointer };\n    println!(\"{read}\");\n}",
          "expected": "3\n",
          "mode": "run",
          "edition": "2021",
          "note": "อ่าน raw pointer ที่สร้างจาก reference ซึ่งยัง valid เท่านั้น; ผลคาดหมายต้องผ่าน compiler/runtime check ก่อนแสดงว่าตรวจแล้ว"
        }
      ],
      "tips": [
        "ในโค้ดแอปทั่วไปให้อยู่กับ safe API; unsafe ต้องอธิบาย precondition ทุกข้อ ไม่ใช่แค่ใส่บล็อกให้ compiler ยอม"
      ]
    },
    {
      "id": "unsafe/asm",
      "title": "แทรก assembly · Inline assembly",
      "section": "รับหน้าที่พิสูจน์เพิ่ม · Unsafe Operations",
      "source": "https://doc.rust-lang.org/rust-by-example/unsafe/asm.html",
      "body": "<h2>แนวคิดที่ต้องรู้</h2><p>asm! รองรับ assembly ที่ผูกกับสถาปัตยกรรม ต้องประกาศ input/output registers และ side effects ให้ compiler รู้ in/out/inout กับ lateout มีข้อจำกัดการใช้ register ต่างกัน; const และ sym ใช้ค่าคงที่หรือ symbol ส่วน clobber_abi ระบุ register ที่ ABI อาจเปลี่ยน</p><h2>เมื่อนำไปใช้ในแอป</h2><p>การอ่าน register หรือคำสั่งเฉพาะเครื่องเหมาะกับงานระดับระบบที่มีข้อจำกัดชัดเจน ไม่จำเป็นสำหรับแอปงานทั่วไป ตัวอย่างคำนวณค่าบน x86_64 เท่านั้น</p>",
      "examples": [
        {
          "title": "ตัวอย่างในบริบทแอป",
          "code": "// เฉพาะ target_arch = \"x86_64\"\nuse std::arch::asm;\nfn main() {\n    let mut value: u64 = 3;\n    // SAFETY: ทำงานเฉพาะ register ที่ประกาศและไม่เข้าถึงหน่วยความจำ\n    unsafe { asm!(\"add {value}, 2\", value = inout(reg) value); }\n    println!(\"{value}\");\n}",
          "expected": "5\n",
          "mode": "text",
          "edition": "2021",
          "note": "ต้องทดสอบบน x86_64 และ compiler ที่รองรับ; ยังไม่ผ่าน target-specific compilation จึงไม่ถือว่า verified"
        }
      ],
      "tips": [
        "options เช่น nomem, nostack, preserves_flags และ pure เป็นสัญญาที่ต้องเป็นจริง; อย่าระบุเพื่อหวังให้เร็วขึ้นโดยไม่มีหลักฐาน"
      ]
    },
    {
      "id": "compatibility",
      "title": "โค้ดอยู่ร่วมกับภาษาที่เปลี่ยนไป · Compatibility",
      "section": "โค้ดอยู่ร่วมกับภาษาที่เปลี่ยนไป · Compatibility",
      "source": "https://doc.rust-lang.org/rust-by-example/compatibility.html",
      "body": "<h2>แนวคิดที่ต้องรู้</h2><p>Rust เพิ่ม keyword และรูปแบบใหม่ผ่านการพัฒนาภาษาและ editions จึงต้องดู edition ของ crate และเอกสารที่อ้างอิงให้สอดคล้องกัน</p><h2>เมื่อนำไปใช้ในแอป</h2><p>ระบุ edition ใน manifest เพื่อให้ทีมและระบบ build ใช้กฎภาษาเดียวกัน</p>",
      "examples": [
        {
          "title": "ตัวอย่างในบริบทแอป",
          "code": "[package]\nname = \"task_app\"\nversion = \"0.1.0\"\nedition = \"2021\"",
          "expected": "",
          "mode": "text",
          "edition": "2021",
          "note": "TOML สำหรับ Cargo; ตัวอย่าง Rust ที่ตรวจอัตโนมัติในโครงการนี้ระบุ edition แยกใน metadata"
        }
      ],
      "tips": [
        "edition ต่างจากเวอร์ชัน compiler; crate edition เดิมยังใช้ compiler ใหม่ที่รองรับได้"
      ]
    },
    {
      "id": "compatibility/raw_identifiers",
      "title": "ชื่อชน keyword · Raw identifiers",
      "section": "โค้ดอยู่ร่วมกับภาษาที่เปลี่ยนไป · Compatibility",
      "source": "https://doc.rust-lang.org/rust-by-example/compatibility/raw_identifiers.html",
      "body": "<h2>แนวคิดที่ต้องรู้</h2><p>r#name ทำให้ใช้ keyword บางคำเป็น identifier ได้ เช่น r#type; รูปแบบ raw ไม่ได้เปลี่ยนชื่อจริงของ identifier และใช้ไม่ได้กับทุกชื่อพิเศษ</p><h2>เมื่อนำไปใช้ในแอป</h2><p>ข้อมูลที่มี field ชื่อ type จากระบบเดิมยังตั้งชื่อใน Rust ให้สอดคล้องได้</p>",
      "examples": [
        {
          "title": "ตัวอย่างในบริบทแอป",
          "code": "struct Task {\n    r#type: &'static str\n}\n\nfn main() {\n    for kind in [\"backup\", \"report\"] {\n        let task = Task { r#type: kind };\n        println!(\"{}\", task.r#type);\n    }\n}",
          "expected": "backup\nreport\n",
          "mode": "run",
          "edition": "2021"
        }
      ],
      "tips": [
        "ถ้าตั้ง API ใหม่เองได้ เลือกชื่อเฉพาะความหมายเช่น task_kind เพื่ออ่านง่าย"
      ]
    },
    {
      "id": "meta",
      "title": "เครื่องมือที่ช่วยคนอ่านโค้ด · Meta",
      "section": "เครื่องมือที่ช่วยคนอ่านโค้ด · Meta",
      "source": "https://doc.rust-lang.org/rust-by-example/meta.html",
      "body": "<h2>แนวคิดที่ต้องรู้</h2><p>เอกสารและตัวอย่างที่ทดลองได้ช่วยให้ผู้ใช้เข้าใจ API แม้ไม่เปลี่ยนผล runtime ของแอปโดยตรง</p><h2>เมื่อนำไปใช้ในแอป</h2><p>เก็บคำอธิบาย ข้อจำกัด และตัวอย่างเรียก API ของการนับงานไว้ด้วยกัน</p>",
      "examples": [
        {
          "title": "ตัวอย่างในบริบทแอป",
          "code": "/// Return the number of pending tasks, clamped at zero.\nfn pending(total: u32, done: u32) -> u32 {\n    total.saturating_sub(done)\n}\n\nfn main() {\n    println!(\"{} {}\", pending(5, 2), pending(2, 5));\n}",
          "expected": "3 0\n",
          "mode": "run",
          "edition": "2021"
        }
      ],
      "tips": [
        "เอกสารควรบอกกรณีผิดพลาดและข้อสมมติ ไม่ใช่บอกแค่ชื่อ argument ซ้ำ"
      ]
    },
    {
      "id": "meta/doc",
      "title": "สร้างเอกสารจากโค้ด · rustdoc",
      "section": "เครื่องมือที่ช่วยคนอ่านโค้ด · Meta",
      "source": "https://doc.rust-lang.org/rust-by-example/meta/doc.html",
      "body": "<h2>แนวคิดที่ต้องรู้</h2><p>cargo doc สร้างเอกสารใน target/doc และ --open เปิดใน browser; /// อธิบาย item ถัดไป //! อธิบาย enclosing module/crate; doc attributes ควบคุมการแสดงผล และ cargo test --doc ตรวจตัวอย่างในเอกสาร</p><h2>เมื่อนำไปใช้ในแอป</h2><p>ให้ API ของ library อธิบายพฤติกรรมเมื่อจำนวนที่ทำเสร็จเกินทั้งหมด เพื่อไม่ให้ consumer เดาเอง</p>",
      "examples": [
        {
          "title": "ตัวอย่างในบริบทแอป",
          "code": "// src/lib.rs ของ task_core\n/// Count unfinished tasks, returning zero when done exceeds total.\n///\n/// # Examples\n/// ```\n/// assert_eq!(task_core::pending(5, 2), 3);\n/// assert_eq!(task_core::pending(2, 5), 0);\n/// ```\npub fn pending(total: u32, done: u32) -> u32 { total.saturating_sub(done) }",
          "expected": "",
          "mode": "text",
          "edition": "2021",
          "note": "ใช้ cargo doc --open และ cargo test --doc ใน package task_core ที่มี lib.rs นี้"
        }
      ],
      "tips": [
        "ใช้ doc(hidden) ซ่อนรายละเอียดจากเอกสารได้ แต่ไม่ได้ทำให้ public item เป็น private"
      ]
    },
    {
      "id": "meta/playground",
      "title": "ลองโค้ดผ่านเว็บ · Playground",
      "section": "เครื่องมือที่ช่วยคนอ่านโค้ด · Meta",
      "source": "https://doc.rust-lang.org/rust-by-example/meta/playground.html",
      "body": "<h2>แนวคิดที่ต้องรู้</h2><p>Rust Playground ใช้ทดลองโค้ดในเว็บได้; mdBook ทำ code block ให้ editable/runnable ได้ ส่วน rustdoc กำหนด html_playground_url เพื่อเชื่อมตัวอย่างกับบริการ; การรันผ่านบริการต้องใช้อินเทอร์เน็ต</p><h2>เมื่อนำไปใช้ในแอป</h2><p>เว็บนี้เก็บโค้ดและผลลัพธ์ที่คาดไว้ให้อ่านออฟไลน์ โดยไม่อ้างว่าได้เรียก Playground ทุกครั้งที่อ่าน</p>",
      "examples": [
        {
          "title": "ตัวอย่างในบริบทแอป",
          "code": "fn main() {\n    for done in [2_u32, 5] {\n        println!(\"pending={}\", 5_u32.saturating_sub(done));\n    }\n}",
          "expected": "pending=3\npending=0\n",
          "mode": "run",
          "edition": "2021"
        }
      ],
      "tips": [
        "การรันในเว็บเป็นเพียงเครื่องมือทดลอง ต้องระบุ compiler edition และตรวจเงื่อนไข target ของโค้ดด้วย"
      ]
    }
  ]
};
