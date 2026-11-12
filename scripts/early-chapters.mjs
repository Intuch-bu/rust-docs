// Additional editorial detail for the opening chapters; merged by the content generator.
export const EARLY_ENRICHMENT = {
  index: {
    concept: 'Rust by Example ใช้ตัวอย่างที่รันได้อธิบายภาษาและไลบรารีมาตรฐาน หนังสือเริ่มจากข้อความและชนิดข้อมูล แล้วค่อยเข้าสู่ฟังก์ชัน การจัดโมดูล ownership และเครื่องมือของ Rust การอ่านลำดับนี้ช่วยให้คำศัพท์ที่ใช้ในบทหลังมีที่มา แต่ยังใช้สารบัญย้อนกลับมาดูหัวข้อเฉพาะได้ ตัวอย่างแต่ละหน้าแสดงเพียงพฤติกรรมที่กำลังอธิบาย ไม่ได้รวมองค์ประกอบทั้งหมดของแอปจริง เช่น การติดตั้ง การเก็บข้อมูล และการรับมือความล้มเหลวทุกชนิด',
    app: 'ฉบับนี้ใช้รายการงาน การตั้งค่า และรายงานเป็นบริบท แยกค่าป้อนเข้าออกจากผลลัพธ์ให้เห็น เมื่อรันตัวอย่างต้องอ่านผลตรวจที่แนบไว้ด้วย ผลลัพธ์ที่คาดหมายยังไม่เท่ากับผลที่รันยืนยันแล้ว',
    code: `fn main() {
    for tasks in [0, 3] {
        println!("tasks={tasks}");
    }
}`
  },
  hello: {
    concept: 'โปรแกรมไบนารี Rust ทั่วไปมี fn main() เป็นจุดเริ่มต้น วงเล็บปีกกาครอบชุดคำสั่งในฟังก์ชัน และคำสั่งเรียก println! ในตัวอย่างลงท้ายด้วย ; เครื่องหมาย ! บอกว่ากำลังเรียก macro ข้อความในเครื่องหมายคำพูดเป็น string literal ส่วน println! ส่งข้อความไป standard output แล้วขึ้นบรรทัดใหม่ เมื่อบันทึกไฟล์เป็น hello.rs สามารถคอมไพล์ด้วย rustc hello.rs แล้วเรียกไบนารีที่ได้ ชื่อและวิธีเรียกไบนารีขึ้นกับระบบปฏิบัติการ',
    app: 'CLI อาจพิมพ์ชื่อโครงการที่กำลังเปิดเพื่อให้ผู้ใช้ตามงานทัน ตัวอย่างคงคำว่า Loading ไว้แล้วเปลี่ยนเฉพาะชื่อโครงการ สังเกตว่าการเรียก println! สองครั้งให้ข้อความสองบรรทัด',
    code: `fn main() {
    let project = "work";
    println!("Loading {project}");

    let project = "home";
    println!("Loading {project}");
}`
  },
  'hello/comment': {
    concept: '// เริ่มคอมเมนต์จนจบบรรทัด ส่วน /* ... */ ครอบคอมเมนต์ที่อยู่ในบรรทัดเดียวหรือหลายบรรทัดได้ และ block comment ซ้อนกันได้ คอมเมนต์ปกติไม่ได้เป็นคำสั่งที่โปรแกรมนำไปคำนวณ ต่างจากข้อความที่อยู่ใน string literal ซึ่งเป็นข้อมูลของโปรแกรม คอมเมนต์เอกสารมีรูปแบบเฉพาะ เช่น /// ใช้อธิบาย item ที่ตามมา ส่วน //! ใช้กับ item ที่ครอบบริเวณนั้น เครื่องมือ rustdoc ใช้คอมเมนต์เอกสารสร้างหน้าเอกสารได้',
    code: `fn main() {
    // Exclude completed tasks from the pending count.
    for done in [1, 3] {
        println!("pending={}", 5 - done);
    }
}`
  },
  'hello/print': {
    concept: 'macro กลุ่มจัดรูปแบบใช้ข้อความต้นแบบกับค่าที่ส่งเข้าไป format! คืน String; print! เขียนไป stdout โดยไม่เติมบรรทัดใหม่ ส่วน println! เติมให้ eprint! และ eprintln! ใช้ stderr แทน ช่อง {} รับค่าตามลำดับ ช่อง {0} ระบุตำแหน่ง และช่อง {name} อ้างชื่อได้ ตัวแปรใน scope สามารถใช้ชื่อในช่องได้โดยตรง เช่น {count} เมื่อต้องพิมพ์ปีกกาจริงให้เขียน {{ หรือ }} ข้อมูลที่นำมาใส่ต้องรองรับ trait ตามรูปแบบที่เลือก หากจำนวน argument หรือรูปแบบไม่ถูกต้อง compiler จะตรวจได้หลายกรณีตั้งแต่ตอนคอมไพล์',
    app: 'รายงานสถานะสร้างข้อความด้วย format! แล้วจึงส่งให้ส่วนแสดงผล ตัวอย่างเปลี่ยนจำนวนงานจาก 1 เป็น 12 โดยข้อความต้นแบบเดิมไม่เปลี่ยน สำหรับ CLI ที่ stdout เป็นข้อมูลให้โปรแกรมอื่นอ่าน ให้พิจารณาส่งข้อความแจ้งปัญหาไป stderr',
    code: `fn main() {
    for count in [1, 12] {
        let report = format!("Tasks: {count}");
        println!("{report}");
    }
}`
  },
  'hello/print/print_debug': {
    concept: '{:?} เลือกรูปแบบ Debug สำหรับดูโครงสร้างข้อมูลระหว่างพัฒนา ส่วน {:#?} ขอรูปแบบแยกบรรทัดที่อ่านง่ายขึ้น #[derive(Debug)] สร้าง implementation ให้ struct หรือ enum ได้เมื่อ field ที่อยู่ข้างในรองรับ Debug ด้วย การประกาศ struct เพียงอย่างเดียวไม่ได้ทำให้พิมพ์ด้วย {:?} ได้ทันที และการมี Debug ไม่ได้แปลว่าจะมี Display สำหรับ {} รูปแบบข้อความของ derived Debug และ Debug ของชนิดในไลบรารีมาตรฐานไม่รับประกันว่าจะคงเดิมข้ามเวอร์ชัน',
    references: ['https://doc.rust-lang.org/std/fmt/trait.Debug.html'],
    code: `#[derive(Debug)]
struct Task {
    done: bool,
}

fn main() {
    for done in [false, true] {
        println!("{:?}", Task { done });
    }
}`
  },
  'hello/print/print_display': {
    concept: '{} เลือก Display สำหรับข้อความที่ต้องการให้คนอ่าน ชนิดที่สร้างเองต้อง implement trait นี้หากอยากกำหนดรูปแบบดังกล่าว โดยเขียนเมธอด fmt ที่รับ &self และ &mut fmt::Formatter แล้วคืน fmt::Result macro write! เขียนข้อความลง formatter ที่ได้รับ การ derive ที่มากับภาษาไม่ได้สร้าง Display ให้โดยอัตโนมัติ จึงเลือกคำและรูปแบบได้เองโดยไม่จำเป็นต้องเปิดชื่อ field ภายในทั้งหมด เมื่อจะพิมพ์ตัวเลขฐานอื่นยังมี trait เช่น Binary หรือ LowerHex แยกต่างหาก',
    code: `use std::fmt;

struct Status(bool);

impl fmt::Display for Status {
    fn fmt(&self, f: &mut fmt::Formatter<'_>) -> fmt::Result {
        write!(f, "{}", if self.0 { "done" } else { "pending" })
    }
}

fn main() {
    println!("{} / {}", Status(false), Status(true));
}`
  },
  'hello/print/print_display/testcase_list': {
    concept: 'เมื่อ Display ต้องเขียนหลายส่วนต่อกัน แต่ละ write! คืน Result จึงต้องส่งต่อความล้มเหลวด้วย ? แล้วคืน Ok(()) เมื่อเขียนครบ ตัวอย่างใช้ชนิด Selected หุ้ม Vec<u32> เพื่อกำหนดรูปแบบของรายการนี้เอง การใช้ enumerate() ให้ทั้งตำแหน่งและสมาชิก จึงเพิ่มตัวคั่นก่อนสมาชิกตัวที่สองเป็นต้นไปได้โดยไม่เหลือจุลภาคท้าย รายการว่างจะไม่เข้าลูปเลย ทำให้ formatter ยังสำเร็จและไม่มีข้อมูลด้านในวงเล็บ',
    code: `use std::fmt;

struct Selected(Vec<u32>);

impl fmt::Display for Selected {
    fn fmt(&self, f: &mut fmt::Formatter<'_>) -> fmt::Result {
        for (i, n) in self.0.iter().enumerate() {
            if i > 0 {
                write!(f, ", ")?;
            }
            write!(f, "{n}")?;
        }
        Ok(())
    }
}

fn main() {
    println!("[{}]", Selected(vec![]));
    println!("[{}]", Selected(vec![2, 8]));
}`
  },
  'hello/print/fmt': {
    concept: 'ส่วนหลัง : ในช่องจัดรูปแบบควบคุมรายละเอียด เช่น {id:03} ให้ความกว้างอย่างน้อยสามตัวและเติมศูนย์ ส่วน {progress:.2} แสดงทศนิยมสองตำแหน่ง ความกว้างเป็นค่าขั้นต่ำ ไม่ได้สั่งตัดข้อมูลที่ยาวกว่า รูปแบบตัวเลขฐานสอง ฐานแปด และฐานสิบหกใช้ b, o และ x หรือ X และขึ้นกับ trait ที่ชนิดข้อมูล implement การจัดชิดและตัวเติมช่วยทำคอลัมน์ในรายงานได้ การเปลี่ยนรูปแบบแสดงผลไม่ได้เปลี่ยนชนิดหรือตัวเลขที่เก็บอยู่ในตัวแปร',
    code: `fn main() {
    for id in [7, 42] {
        println!("TASK-{id:03}");
    }
    for progress in [1.0, 1.234] {
        println!("{progress:.2}");
    }
}`
  },
  primitives: {
    concept: 'ชนิดพื้นฐานแบ่งเป็น scalar และ compound จำนวนเต็มมีทั้ง signed i8, i16, i32, i64, i128 และ unsigned u8, u16, u32, u64, u128 ตัวเลขท้ายชื่อคือจำนวนบิต ส่วน isize และ usize มีขนาดตาม pointer ของ target จำนวนทศนิยมใช้ f32 หรือ f64; bool มีค่า true หรือ false และ char เก็บ Unicode scalar value หนึ่งค่า ซึ่งไม่จำเป็นต้องตรงกับตัวอักษรที่ผู้ใช้มองเห็นหนึ่งตัวเสมอ tuple รวมค่าหลายชนิด ส่วน array รวมสมาชิกชนิดเดียวกันโดยมีความยาวคงที่ในชนิด compiler อนุมานชนิดจากบริบทได้ แต่ไม่ได้เปลี่ยนชนิดของ binding เดิมไปมาตอนรัน',
    references: ['https://doc.rust-lang.org/reference/types/numeric.html', 'https://doc.rust-lang.org/std/primitive.char.html'],
    code: `fn main() {
    let done: bool = false;
    let tasks: u32 = 3;

    println!("{tasks} {done}");
    println!("{} {}", tasks + 2, !done);
}`
  },
  'primitives/literals': {
    references: ['https://doc.rust-lang.org/reference/expressions/operator-expr.html'],
    concept: 'literal คือค่าที่เขียนตรงในโค้ด เช่น 10, 3.5, true และข้อความในเครื่องหมายคำพูด ตัวเลขเติม suffix ระบุชนิด เช่น 10_u32 และใช้ _ แบ่งหลักเพื่ออ่านง่ายได้ จำนวนเต็มยังเขียนฐานสองด้วย 0b ฐานแปดด้วย 0o และฐานสิบหกด้วย 0x ตัวดำเนินการคำนวณมี + - * / % ส่วนการเปรียบเทียบคืน bool และ && หรือ || ใช้กับเงื่อนไข การหารจำนวนเต็มตัดส่วนเศษเข้าหาศูนย์ จึงได้ผลต่างจากการหารแบบ floating point ตัวดำเนินการระดับบิต เช่น & | ^ << >> เป็นอีกกลุ่มหนึ่งที่ทำงานกับบิตของตัวเลข',
    code: `fn main() {
    for rows in [10_u32, 11_u32] {
        println!("{} {}", rows / 5, rows % 5);
    }
}`
  },
  'primitives/tuples': {
    concept: 'tuple จัดค่าหลายชนิดไว้ในชุดที่มีจำนวนสมาชิกและลำดับแน่นอน เขียนค่าด้วยวงเล็บ เช่น (3, false) และอ่านสมาชิกด้วย .0 หรือ .1 นอกจากนี้แยกค่าพร้อมตั้งชื่อด้วย pattern เช่น let (count, complete) = value ได้ ฟังก์ชันคืน tuple เพื่อส่งค่าหลายส่วนพร้อมกันได้ และ tuple สามารถซ้อนกันได้ด้วย tuple หนึ่งสมาชิกต้องมีจุลภาค เช่น (3,) เพื่อแยกจาก expression ในวงเล็บ ส่วน () คือ unit ซึ่งเป็น tuple ที่ไม่มีสมาชิก',
    code: `fn summary(done: u32) -> (u32, bool) {
    (done, done == 3)
}

fn main() {
    for done in [1, 3] {
        let (count, complete) = summary(done);
        println!("{count} {complete}");
    }
}`
  },
  'primitives/array': {
    concept: 'array เก็บสมาชิกชนิดเดียวกันต่อเนื่อง โดย [u32; 3] กับ [u32; 2] เป็นคนละชนิดเพราะความยาวอยู่ในชนิดด้วย ใช้ [ค่า; จำนวน] สร้างค่าซ้ำได้ เช่น [0; 7] slice [T] เป็นมุมมองช่วงข้อมูลที่ความยาวทราบตอนรัน จึงมักใช้ผ่าน reference อย่าง &[u32] การเขียน &days[..2] ยืมสองตัวแรกโดยไม่สร้าง array ใหม่ อ่านสมาชิกด้วย index เริ่มที่ศูนย์ ถ้า index หรือช่วงอยู่นอกขอบเขตจะ panic เมื่อต้องรับตำแหน่งที่อาจผิดให้ใช้ get ซึ่งคืน Option แทน',
    references: ['https://doc.rust-lang.org/std/primitive.slice.html#method.get'],
    code: `fn total(days: &[u32]) -> u32 {
    days.iter().sum()
}

fn main() {
    let days = [2, 4, 6];
    println!("{}", total(&days));
    println!("{}", total(&days[..2]));
}`
  },
  custom_types: {
    concept: 'นอกจากชนิดพื้นฐาน Rust ให้สร้างชนิดที่สื่อความหมายของงานด้วย struct และ enum โดย struct รวมข้อมูลที่อยู่ด้วยกัน ส่วน enum ระบุทางเลือกที่ค่าหนึ่งเลือกเป็นได้ในขณะนั้น แต่ละ variant อาจมีข้อมูลของตัวเอง ทั้งสองแบบใช้ impl เพิ่มเมธอดได้ การตั้งชื่อชนิดทำให้ signature ของฟังก์ชันสื่อว่ารับอะไรและคืนอะไรได้ชัดขึ้น บทนี้ยังแนะนำ const กับ static สำหรับค่าที่ประกาศใช้ร่วมกัน ส่วนรายละเอียด ownership ของ field จะขยายในบทถัดไป',
    code: `struct Task {
    title: String,
    done: bool,
}

fn main() {
    for done in [false, true] {
        let task = Task { title: "backup".into(), done };
        println!("{} {}", task.title, task.done);
    }
}`
  },
  'custom_types/structs': {
    concept: 'struct มีแบบ field มีชื่อ เช่น Task { title, minutes }; tuple struct ที่อ่านสมาชิกด้วยตำแหน่ง และ unit struct ที่ไม่มี field เมื่อตัวแปรใน scope มีชื่อเหมือน field ใช้ field shorthand ได้ เช่น Task { title, minutes } การสร้างค่าใหม่จาก struct เดิมใช้ ..old ได้ แต่ field ที่ย้ายมาซึ่งไม่ใช่ Copy อาจทำให้ใช้ค่านั้นของ old ต่อไม่ได้ สามารถแยก field ด้วย struct pattern และเปลี่ยนชื่อ binding ใน pattern ได้ วิธีสร้างและแยกข้อมูลเหล่านี้ช่วยให้ตามเส้นทางของข้อมูลหนึ่งรายการได้โดยไม่ต้องจำตำแหน่งใน tuple',
    code: `struct Task {
    title: &'static str,
    minutes: u32,
}

fn main() {
    for minutes in [15, 30] {
        let task = Task { title: "review", minutes };
        println!("{}: {}m", task.title, task.minutes);
    }
}`
  },
  'custom_types/enum': {
    concept: 'enum ประกาศ variant ที่ค่าของชนิดนั้นเป็นได้ เช่น Pending หรือ Done(u32) ต่างจาก field หลายช่องที่อยู่พร้อมกัน ค่า enum หนึ่งค่าจะเลือก variant หนึ่งแบบในขณะหนึ่ง variant อาจไม่มีข้อมูล มีข้อมูลตามตำแหน่งแบบ tuple หรือมี field มีชื่อแบบ struct การ match แยกกรณีและดึงข้อมูลข้างในได้ โดย compiler ตรวจว่าครอบคลุมค่าที่เป็นไปได้ทั้งหมด ภายใน impl สามารถใช้ Self อ้างถึงชนิดที่กำลัง implement และใช้ type alias ลดความยาวของชื่อชนิดได้',
    code: `enum State {
    Pending,
    Done(u32),
}

fn main() {
    for state in [State::Pending, State::Done(8)] {
        match state {
            State::Pending => println!("pending"),
            State::Done(id) => println!("report={id}"),
        }
    }
}`
  },
  'custom_types/enum/enum_use': {
    concept: 'ปกติอ้าง variant ผ่านชื่อ enum เช่น State::Pending แต่ use State::Pending นำชื่อนั้นเข้ามาใน scope ให้เรียก Pending ได้โดยตรง สามารถนำเข้าหลายชื่อด้วยวงเล็บปีกกา หรือใช้ * นำเข้า variant ทั้งหมด การ use เปลี่ยนวิธีอ้างชื่อ ไม่ได้สร้างชนิดหรือสำเนาค่าขึ้นใหม่ เมื่ออ่าน match จึงควรดู import ด้วยว่าชื่อสั้น ๆ เหล่านั้นมาจาก enum ใด หากนำเข้าชื่อซ้ำกันต้องเลือกชื่อให้ไม่ชนหรือกลับไปใช้ path ที่ชัดเจน',
    code: `enum State {
    Pending,
    Done,
}

use State::{Pending, Done};

fn main() {
    for state in [Pending, Done] {
        println!("{}", match state {
            Pending => "wait",
            Done => "ok",
        });
    }
}`
  },
  'custom_types/enum/c_like': {
    concept: 'enum แบบไม่มี payload ใช้แทนชุดชื่อที่มีค่าจำนวนเต็มกำกับได้ โดยกำหนด discriminant ชัดเจน เช่น Pending = 10 หรือปล่อยให้ compiler ไล่ค่าให้ตามกฎของภาษา ในตัวอย่างสามารถใช้ as แปลง variant เหล่านี้เป็นจำนวนเต็มเพื่อส่งรหัสออกไป การมีรหัสกำกับไม่ได้หมายความว่าจำนวนเต็มทุกค่าจะแปลงย้อนกลับเป็น enum ได้อย่างปลอดภัย และตัวอย่างนี้ไม่ได้กำหนดขนาดหรือ layout สำหรับ FFI ถ้าต้องใช้ข้ามภาษาให้ศึกษา representation และข้อจำกัดแยกต่างหาก',
    code: `enum Code {
    Pending = 10,
    Done = 20,
}

fn main() {
    println!("{}", Code::Pending as u8);
    println!("{}", Code::Done as u8);
}`
  },
  'custom_types/enum/testcase_linked_list': {
    concept: 'ชนิดที่อ้างตัวเองโดยเก็บค่าตัวเองอยู่ข้างในตรง ๆ จะมีปัญหาขนาดไม่สิ้นสุด จึงใช้ indirection อย่าง Box ให้โหนดเก็บตัวชี้ไปยังโหนดถัดไปแทน enum ใช้แยกกรณีมีโหนดกับจุดจบรายการได้ เมธอด len ในตัวอย่างยืม &self แล้ว match แบบ recursive เพื่อรวมจำนวนสมาชิก การเพิ่มหัวรายการทำได้โดยสร้างโหนดใหม่ที่ชี้ไปยังรายการเดิม วิธีนี้สอนการประกอบ recursive type แต่ไม่ได้ครอบคลุมการใช้งานคิวจริง เช่น การเพิ่มท้าย การลบ และต้นทุนของรายการขนาดใหญ่',
    code: `enum Queue {
    End,
    Item(u32, Box<Queue>),
}

impl Queue {
    fn len(&self) -> usize {
        match self {
            Self::End => 0,
            Self::Item(_, tail) => 1 + tail.len(),
        }
    }
}

fn main() {
    let queue = Queue::End;
    println!("{}", queue.len());
    let queue = Queue::Item(7, Box::new(queue));
    if let Queue::Item(id, _) = &queue {
        println!("{id}: {}", queue.len());
    }
}`
  },
  'custom_types/constants': {
    concept: 'const ประกาศค่าคงที่พร้อมชนิดและ initializer ที่ประเมินได้ในบริบท constant ส่วน static ประกาศตำแหน่งเก็บข้อมูลที่อยู่ตลอดอายุโปรแกรม การอ้าง const เดียวกันไม่ได้รับประกันว่าจะได้ address เดียวกัน ต่างจากแนวคิดของ static ทั้งสองแบบต้องระบุชนิดของรายการนั้นให้ชัด ชื่อมักเขียนเป็นตัวใหญ่คั่นด้วยขีดล่าง การเปลี่ยน static ที่เป็น mutable มีข้อกำหนดความปลอดภัยเพิ่ม จึงไม่ควรใช้แทนตัวแปรสถานะทั่วไปเพียงเพื่อให้เข้าถึงจากหลายฟังก์ชันได้',
    references: ['https://doc.rust-lang.org/reference/items/constant-items.html'],
    code: `const PAGE_SIZE: u32 = 10;

fn main() {
    for pages in [1, 3] {
        println!("{}", pages * PAGE_SIZE);
    }
}`
  },
  variable_bindings: {
    concept: 'let ผูกชื่อกับค่า โดย compiler ต้องทราบชนิดของ binding อาจระบุชนิดหลัง : หรือให้อนุมานจากบริบทก็ได้ ค่าเริ่มต้นของ binding เป็น immutable จึงกำหนดค่าใหม่ให้ binding ที่มีค่าแล้วไม่ได้จนกว่าจะประกาศ mut การประกาศ let ชื่อเดิมอีกครั้งเป็น shadowing ซึ่งสร้าง binding ใหม่ จึงเปลี่ยนชนิดได้เมื่อบริบทอนุญาต ไม่ใช่การเปลี่ยนชนิดของ binding เดิม ตัวแปรที่ไม่ได้ใช้จะเกิด warning ได้ หากตั้งใจไม่ใช้ชื่อหนึ่งอาจขึ้นต้นด้วย _ เพื่อสื่อเจตนา',
    code: `fn main() {
    let tasks = 3;
    println!("{tasks}");

    let tasks = tasks + 2;
    println!("{tasks}");
}`
  },
  'variable_bindings/mut': {
    concept: 'let mut อนุญาตให้กำหนดค่าใหม่ให้ binding เดิม แต่ชนิดยังคงเดิม เช่น ตัวนับ u32 ไม่เปลี่ยนเป็น String ด้วยการ assign การใช้ += เป็นการอ่านค่าเดิมแล้วเก็บผลที่เพิ่มแล้วกลับไป การประกาศ mut ที่ไม่ได้ใช้แก้ค่าจริงอาจถูกเตือน เพราะผู้อ่านอาจเข้าใจว่าจุดนั้นมีการเปลี่ยนสถานะ ข้อจำกัดของ binding นี้ต้องแยกจากความสามารถของค่าที่เข้าถึงผ่าน reference ซึ่งจะอธิบายในบท borrowing',
    code: `fn main() {
    let mut done = 0;
    for count in [2, 3] {
        done += count;
        println!("{done}");
    }
}`
  },
  'variable_bindings/scope': {
    concept: 'scope คือบริเวณที่อ้างชื่อได้ โดยบล็อก { ... } สร้างขอบเขตซ้อนได้ ชื่อที่ประกาศในบล็อกย่อยใช้หลังออกบล็อกนั้นไม่ได้ ชื่อภายนอกยังใช้งานได้ในบล็อกย่อยจนกว่าจะมีชื่อใหม่มาบัง เมื่อออกบล็อกย่อยที่มี binding ใหม่ ชื่อด้านนอกจึงกลับมาให้มองเห็นเหมือนเดิม Shadowing เกิดได้ในบล็อกเดียวกันด้วยการเขียน let ใหม่ ตัวอย่างนี้แยกให้เห็นว่าการพิมพ์ชื่อเดียวกันสองตำแหน่งอาจอ้างคนละ binding',
    code: `fn main() {
    let limit = 10;
    {
        let limit = 3;
        println!("{limit}");
    }
    println!("{limit}");
}`
  },
  'variable_bindings/declare': {
    concept: 'ประกาศ binding ไว้ก่อนแล้วกำหนดค่าในภายหลังได้ แต่ต้องกำหนดค่าก่อนอ่าน และ compiler ต้องพิสูจน์ได้ว่าทุกเส้นทางที่มาถึงจุดอ่านมีค่าพร้อมแล้ว การยังไม่กำหนดค่าไม่ได้แปลว่ามีค่าเริ่มต้นเป็นศูนย์หรือค่าว่าง ตัวอย่างกำหนด limit ทั้งแขนง true และ false จึงมีค่าหลัง if แม้ไม่ได้ใช้ mut เพราะแต่ละเส้นทางเป็นการกำหนดค่าครั้งแรกเพียงครั้งเดียว ถ้าตัด else ออกแล้วบางเส้นทางไม่มีค่า compiler จะปฏิเสธการอ่านนั้น',
    code: `fn main() {
    for compact in [true, false] {
        let limit;
        if compact {
            limit = 5;
        } else {
            limit = 20;
        }
        println!("{limit}");
    }
}`
  },
  'variable_bindings/freeze': {
    concept: 'สามารถสร้าง immutable binding ชื่อเดียวกับ mutable binding ในบล็อกย่อยได้ เมื่ออยู่ในบล็อกนั้นชื่อที่มองเห็นจึงแก้ค่าไม่ได้ พอออกบล็อกชื่อ mutable ด้านนอกกลับมาให้ใช้อีกครั้ง กรณีตัวเลขที่เป็น Copy การผูก let limit = limit อ่านค่ามาสร้าง binding ใหม่โดยไม่ย้ายค่าต้นทาง กรณีชนิดที่ไม่ใช่ Copy ต้องคำนึงถึง ownership เพิ่มด้วย คำว่า freezing ในตัวอย่างจึงหมายถึงการบังชื่อใน scope ไม่ได้เปลี่ยนคุณสมบัติถาวรของ binding เดิม',
    code: `fn main() {
    let mut limit = 5;
    {
        let limit = limit;
        println!("{limit}");
    }
    limit += 1;
    println!("{limit}");
}`,
    expected: '5\n6\n'
  }
};
