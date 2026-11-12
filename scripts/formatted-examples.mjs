// Whitespace-only presentation edits; these examples have no line-sensitive macros.
export const FORMATTED_EXAMPLES = {
    'types': `fn main() {
    let a: u32 = 2;
    let b: u32 = 5;
    println!("{}", a + b);
    println!("{}", b - a);
}`,
    'types/cast': `fn main() {
    for id in [255_u16, 256] {
        println!("{id} -> {}", id as u8);
    }
}`,
    'types/literals': `fn main() {
    let small = 2_u8;
    let large = 2_u64;
    println!("{} {}", std::mem::size_of_val(&small), std::mem::size_of_val(&large));
}`,
    'types/inference': `fn main() {
    let mut ids = Vec::new();
    ids.push(3_u16);
    ids.push(9);
    println!("{:?}", ids);
}`,
    'types/alias': `type TaskId = u64;

fn main() {
    let id: TaskId = 7;
    let ordinary: u64 = id;
    println!("{} {}", id, ordinary + 1);
}`,
    'conversion': `fn main() {
    let small = 12_u8;
    let wide = u32::from(small);
    println!("{wide}");
    println!("{}", u8::try_from(300_u32).is_err());
}`,
    'conversion/from_into': `struct TaskId(u32);

impl From<u32> for TaskId {
    fn from(value: u32) -> Self {
        Self(value)
    }
}

fn main() {
    let a = TaskId::from(3);
    let b: TaskId = 8_u32.into();
    println!("{} {}", a.0, b.0);
}`,
    'conversion/try_from_try_into': `fn main() {
    for size in [10_u16, 300] {
        match u8::try_from(size) {
            Ok(v) => println!("size={v}"),
            Err(_) => println!("out of range")
        }
    }
}`,
    'conversion/string': `fn main() {
    for raw in ["12", "many"] {
        match raw.parse::<u32>() {
            Ok(n) => println!("{n}"),
            Err(_) => println!("invalid number")
        }
    }
}`,
    'expression': `fn main() {
    for count in [0, 2] {
        let label = {
            if count == 0 {
                "empty"
            } else {
                "ready"
            }
        };
        println!("{label}");
    }
}`,
    'flow_control': `fn main() {
    for done in [false, true] {
        if done {
            println!("archive");
        } else {
            println!("keep");
        }
    }
}`,
    'flow_control/if_else': `fn main() {
    for compact in [true, false] {
        let batch = if compact { 5 } else { 20 };
        println!("{batch}");
    }
}`,
    'flow_control/loop': `fn main() {
    let mut left = 2;
    loop {
        println!("left={left}");
        if left == 0 {
            break;
        }
        left -= 1;
    }
}`,
    'flow_control/loop/nested': `fn main() {
    'projects: for project in [1, 2] {
        for task in [3, 4] {
            println!("{project}:{task}");
            if task == 4 {
                break 'projects;
            }
        }
    }
}`,
    'flow_control/loop/return': `fn main() {
    for occupied in [0, 2] {
        let mut slot = 0;
        let free = loop {
            if slot >= occupied {
                break slot;
            }
            slot += 1;
        };
        println!("{free}");
    }
}`,
    'flow_control/while': `fn main() {
    for initial in [0, 2] {
        let mut left = initial;
        while left > 0 {
            println!("{left}");
            left -= 1;
        }
        println!("done");
    }
}`,
    'flow_control/for': `fn main() {
    for page in 1..3 {
        println!("exclusive={page}");
    }
    for page in 1..=3 {
        println!("inclusive={page}");
    }
}`,
    'flow_control/match': `fn main() {
    for pending in [0, 1, 5] {
        println!("{}", match pending {
            0 => "empty",
            1 => "one",
            _ => "many"
        });
    }
}`,
    'flow_control/match/destructuring': `fn main() {
    for task in [("backup", false), ("report", true)] {
        let (name, done) = task;
        println!("{name} {done}");
    }
}`,
    'flow_control/match/destructuring/destructure_tuple': `fn main() {
    for item in [("home", 0), ("work", 3)] {
        match item {
            (name, 0) => println!("{name}: empty"),
            (name, n) => println!("{name}: {n}")
        }
    }
}`,
    'flow_control/match/destructuring/destructure_slice': `fn main() {
    for args in [&[][..], &["list", "all"][..]] {
        match args {
            [] => println!("no command"),
            [command, rest @ ..] => println!("{command} {}", rest.len())
        }
    }
}`,
    'flow_control/match/destructuring/destructure_enum': `enum Command {
    Add(&'static str),
    Count
}

fn main() {
    for c in [Command::Add("backup"), Command::Count] {
        match c {
            Command::Add(name) => println!("add {name}"),
            Command::Count => println!("count")
        }
    }
}`,
    'flow_control/match/destructuring/destructure_pointers': `fn main() {
    for n in [2, 5] {
        let borrowed = &n;
        let &count = borrowed;
        println!("{} {}", count, *borrowed);
    }
}`,
    'flow_control/match/destructuring/destructure_structures': `struct Summary {
    project: &'static str,
    pending: u32
}

fn main() {
    for pending in [0, 4] {
        let s = Summary { project: "work", pending };
        let Summary { pending: count, .. } = s;
        println!("{count}");
    }
}`,
    'flow_control/match/guard': `fn main() {
    let limit = 3;
    for n in [2, 5] {
        println!("{}", match n {
            count if count > limit => "busy",
            _ => "normal"
        });
    }
}`,
    'flow_control/match/binding': `fn main() {
    for level in [2, 8] {
        match level {
            valid @ 1..=3 => println!("priority={valid}"),
            _ => println!("invalid")
        }
    }
}`,
    'flow_control/if_let': `fn main() {
    for id in [None, Some(7)] {
        if let Some(id) = id {
            println!("task={id}");
        } else {
            println!("no selection");
        }
    }
}`,
    'flow_control/let_else': `fn show(id: Option<u32>) {
    let Some(id) = id else {
        println!("missing id");
        return;
    };
    println!("task={id}");
}

fn main() {
    show(None);
    show(Some(9));
}`,
    'flow_control/while_let': `fn main() {
    let mut tasks = vec![1, 2];
    while let Some(id) = tasks.pop() {
        println!("task={id}");
    }
    println!("left={}", tasks.len());
}`,
    'fn': `fn pending(total: u32, done: u32) -> u32 {
    total - done
}

fn main() {
    println!("{}", pending(5, 2));
    println!("{}", pending(5, 5));
}`,
    'fn/methods': `struct Task {
    done: bool
}

impl Task {
    fn new() -> Self {
        Self { done: false }
    }
    fn finish(&mut self) {
        self.done = true;
    }
}

fn main() {
    let mut task = Task::new();
    println!("{}", task.done);
    task.finish();
    println!("{}", task.done);
}`,
    'fn/closures': `fn main() {
    let limit = 3;
    let busy = |count| count > limit;
    println!("{}", busy(2));
    println!("{}", busy(5));
}`,
    'fn/closures/capture': `fn main() {
    let mut done = 0;
    {
        let mut finish = || {
            done += 1;
            println!("{done}");
        };
        finish();
        finish();
    }
    println!("final={done}");
}`,
    'fn/closures/input_parameters': `fn report<F: Fn(u32) -> String>(format: F) {
    println!("{}", format(2));
    println!("{}", format(5));
}

fn main() {
    let prefix = "tasks";
    report(|n| format!("{prefix}={n}"));
}`,
    'fn/closures/anonymity': `fn check<F: Fn(u32) -> bool>(f: F) {
    println!("{}", f(3));
}

fn main() {
    check(|n| n > 2);
    check(|n| n > 5);
}`,
    'fn/closures/input_functions': `fn urgent(n: u32) -> bool {
    n > 3
}

fn show<F: Fn(u32) -> bool>(f: F) {
    println!("{} {}", f(2), f(5));
}

fn main() {
    show(urgent);
    show(|n| n == 2);
}`,
    'fn/closures/output_parameters': `fn over(limit: u32) -> impl Fn(u32) -> bool {
    move |count| count > limit
}

fn main() {
    let over_three = over(3);
    let over_ten = over(10);
    println!("{} {}", over_three(5), over_ten(5));
}`,
    'fn/closures/closure_examples': `fn main() {
    let counts = [0, 2, 5];
    let active: Vec<_> = counts.into_iter().filter(|n| *n > 0).collect();
    println!("{:?}", active);
}`,
    'fn/closures/closure_examples/iter_any': `fn main() {
    let pending = [1, 4, 2];
    for limit in [3, 5] {
        println!("{}", pending.iter().any(|&n| n > limit));
    }
}`,
    'fn/closures/closure_examples/iter_find': `fn main() {
    let counts = [1, 4, 8];
    for limit in [3, 9] {
        println!("{:?}", counts.iter().find(|&&n| n > limit));
    }
    println!("{:?}", counts.iter().position(|&n| n > 3));
}`,
    'fn/hof': `fn main() {
    let minutes = [5, 15, 30];
    for limit in [10, 20] {
        let total: u32 = minutes.iter().copied().filter(|n| *n >= limit).sum();
        println!("{total}");
    }
}`,
    'fn/diverging': `fn broken_state() -> ! {
    panic!("task invariant broken")
}

fn main() {
    broken_state();
}`,
    'mod': `mod report {
    pub fn pending(done: u32) -> u32 {
        5 - done
    }
}

fn main() {
    println!("{}", report::pending(1));
    println!("{}", report::pending(5));
}`,
    'mod/visibility': `mod report {
    fn limit() -> u32 {
        10
    }
    pub fn capped(n: u32) -> u32 {
        n.min(limit())
    }
}

fn main() {
    println!("{} {}", report::capped(3), report::capped(20));
}`,
    'mod/struct_visibility': `mod model {
    pub struct Count {
        value: u32
    }
    impl Count {
        pub fn new(value: u32) -> Self {
            Self { value }
        }
        pub fn value(&self) -> u32 {
            self.value
        }
    }
}

fn main() {
    println!("{} {}", model::Count::new(2).value(), model::Count::new(8).value());
}`,
    'mod/use': `use std::collections::HashMap as Counts;

fn main() {
    let mut counts = Counts::new();
    counts.insert("work", 2);
    println!("{:?}", counts.get("work"));
    println!("{:?}", counts.get("home"));
}`,
    'mod/super': `mod report {
    const LIMIT: u32 = 3;
    pub mod status {
        pub fn busy(n: u32) -> bool {
            n > super::LIMIT
        }
    }
}

fn main() {
    println!("{} {}", report::status::busy(2), report::status::busy(5));
}`,
    'attribute': `#[derive(Debug)]
struct Report {
    count: u32
}

fn main() {
    println!("{:?}", Report { count: 2 });
    println!("{:?}", Report { count: 5 });
}`,
    'attribute/unused': `#[allow(dead_code)]
fn old_report() {}

fn report(n: u32) {
    println!("{n}");
}

fn main() {
    report(2);
    report(5);
}`,
    'generics': `struct Report<T> {
    value: T
}

fn main() {
    let count = Report { value: 3 };
    let name = Report { value: "work" };
    println!("{} {}", count.value, name.value);
}`,
    'generics/gen_fn': `fn chosen<T>(value: T) -> T {
    value
}

fn main() {
    println!("{}", chosen::<u32>(3));
    println!("{}", chosen("work"));
}`,
    'generics/impl': `struct Report<T>(T);

impl<T> Report<T> {
    fn value(&self) -> &T {
        &self.0
    }
}

fn main() {
    println!("{}", Report(3).value());
    println!("{}", Report("work").value());
}`,
    'generics/gen_trait': `trait Accepts<T> {
    fn accepts(&self, value: T) -> bool;
}

struct Positive;

impl Accepts<u32> for Positive {
    fn accepts(&self, value: u32) -> bool {
        value > 0
    }
}

fn main() {
    println!("{} {}", Positive.accepts(0), Positive.accepts(3));
}`,
    'generics/bounds': `use std::fmt::Display;

fn report<T: Display>(value: T) {
    println!("{value}");
}

fn main() {
    report(3);
    report("work");
}`,
    'generics/bounds/testcase_empty': `trait Exportable {}

struct Report(u32);

impl Exportable for Report {}

fn export<T: Exportable>(_: &T) {
    println!("export allowed");
}

fn main() {
    export(&Report(2));
    export(&Report(5));
}`,
    'generics/multi_bounds': `use std::fmt::{Display, Debug};

fn show<T: Display + Debug>(value: T) {
    println!("{value} / {value:?}");
}

fn main() {
    show(3);
    show("work");
}`,
    'generics/where': `fn report<T>(value: T)
where
    T: std::fmt::Display
{
    println!("{value}");
}

fn main() {
    report(3);
    report("ready");
}`,
    'generics/new_types': `struct TaskId(u32);
struct UserId(u32);

fn main() {
    let task = TaskId(3);
    let user = UserId(3);
    println!("task={} user={}", task.0, user.0);
}`,
    'generics/assoc_items': `trait Source {
    type Item;
    fn first(&self) -> Self::Item;
}

struct Tasks;

impl Source for Tasks {
    type Item = u32;
    fn first(&self) -> u32 {
        7
    }
}

fn main() {
    println!("{}", Tasks.first());
}`,
    'generics/assoc_items/the_problem': `trait Contains<T> {
    fn has(&self, item: T) -> bool;
}

impl Contains<u32> for Vec<u32> {
    fn has(&self, item: u32) -> bool {
        self.contains(&item)
    }
}

fn check<C: Contains<u32>>(c: &C, id: u32) -> bool {
    c.has(id)
}

fn main() {
    println!("{} {}", check(&vec![2, 5], 2), check(&vec![2, 5], 9));
}`,
    'generics/assoc_items/types': `trait Contains {
    type Item;
    fn has(&self, item: Self::Item) -> bool;
}

impl Contains for Vec<u32> {
    type Item = u32;
    fn has(&self, item: u32) -> bool {
        self.contains(&item)
    }
}

fn main() {
    println!("{} {}", vec![2, 5].has(2), vec![2, 5].has(9));
}`,
    'generics/phantom': `use std::marker::PhantomData;

struct Id<T> {
    value: u32,
    marker: PhantomData<T>
}

struct Task;

fn main() {
    for value in [2, 5] {
        let id = Id::<Task> { value, marker: PhantomData };
        println!("{}", id.value);
    }
}`,
    'generics/phantom/testcase_units': `use std::{marker::PhantomData, ops::Add};

struct Meters;
struct Length<U>(u32, PhantomData<U>);

impl<U> Add for Length<U> {
    type Output = Self;
    fn add(self, rhs: Self) -> Self {
        Self(self.0 + rhs.0, PhantomData)
    }
}

fn main() {
    let a = Length::<Meters>(2, PhantomData);
    let b = Length::<Meters>(5, PhantomData);
    println!("{}", (a + b).0);
}`,
    'scope': `fn main() {
    let tasks = vec!["backup", "review"];
    {
        let summary = &tasks;
        println!("{}", summary.len());
    }
    println!("{}", tasks.len());
}`,
    'scope/raii': `struct Work(&'static str);

impl Drop for Work {
    fn drop(&mut self) {
        println!("release {}", self.0);
    }
}

fn main() {
    let _outer = Work("outer");
    {
        let _inner = Work("inner");
        println!("working");
    }
    println!("finished");
}`,
    'scope/move': `fn save(name: String) {
    println!("saved {name}");
}

fn main() {
    let draft = String::from("backup");
    let ready = draft;
    save(ready);
    let count = 3_u32;
    let copied = count;
    println!("{count} {copied}");
}`,
    'scope/move/mut': `fn main() {
    let loaded = vec![1, 2];
    let mut editable = loaded;
    editable.push(3);
    println!("{:?}", editable);
}`,
    'scope/move/partial_move': `struct Task {
    title: String,
    priority: u8
}

fn main() {
    let task = Task { title: "backup".into(), priority: 2 };
    let Task { title, .. } = task;
    println!("{title} {}", task.priority);
}`,
    'scope/borrow': `fn show(title: &str) {
    println!("{title}");
}

fn main() {
    let title = String::from("backup");
    show(&title);
    show(&title);
    println!("length={}", title.len());
}`,
    'scope/borrow/mut': `fn finish(pending: &mut u32) {
    if *pending > 0 {
        *pending -= 1;
    }
}

fn main() {
    let mut pending = 2;
    finish(&mut pending);
    println!("{pending}");
    finish(&mut pending);
    println!("{pending}");
}`,
    'scope/borrow/alias': `fn main() {
    let mut ids = vec![1];
    let a = &ids;
    let b = &ids;
    println!("{} {}", a.len(), b.len());
    ids.push(2);
    println!("{}", ids.len());
}`,
    'scope/borrow/ref': `struct Task {
    title: String
}

fn main() {
    let task = Task { title: "backup".into() };
    let Task { ref title } = task;
    println!("{title}");
    println!("{}", task.title);
}`,
    'scope/lifetime': `fn choose<'a>(a: &'a str, b: &'a str) -> &'a str {
    if a.len() >= b.len() {
        a
    } else {
        b
    }
}

fn main() {
    println!("{}", choose("work", "home"));
    println!("{}", choose("work", "personal"));
}`,
    'scope/lifetime/explicit': `fn longer<'a>(a: &'a str, b: &'a str) -> &'a str {
    if a.len() > b.len() {
        a
    } else {
        b
    }
}

fn main() {
    let work = String::from("work");
    let personal = String::from("personal");
    println!("{}", longer(&work, &personal));
}`,
    'scope/lifetime/fn': `fn clean<'a>(title: &'a str) -> &'a str {
    title.trim()
}

fn main() {
    println!("[{}]", clean(" work "));
    println!("[{}]", clean("home"));
}`,
    'scope/lifetime/methods': `struct Task(String);

impl Task {
    fn title<'a>(&'a self) -> &'a str {
        &self.0
    }
}

fn main() {
    let task = Task("backup".into());
    println!("{}", task.title());
}`,
    'scope/lifetime/struct': `struct View<'a> {
    title: &'a str
}

fn main() {
    let title = String::from("work");
    let view = View { title: &title };
    println!("{}", view.title);
    println!("{}", title);
}`,
    'scope/lifetime/trait': `use std::fmt;

struct View<'a>(&'a str);

impl<'a> fmt::Display for View<'a> {
    fn fmt(&self, f: &mut fmt::Formatter<'_>) -> fmt::Result {
        write!(f, "{}", self.0)
    }
}

fn main() {
    println!("{} {}", View("work"), View("home"));
}`,
    'scope/lifetime/lifetime_bounds': `fn show<'a, T>(value: &'a T)
where
    T: std::fmt::Display + 'a
{
    println!("{value}");
}

fn main() {
    let title = String::from("work");
    show(&title);
    show(&3);
}`,
    'scope/lifetime/lifetime_coercion': `fn pick<'a>(a: &'a str, b: &'a str) -> &'a str {
    if b.is_empty() {
        a
    } else {
        b
    }
}

fn main() {
    let input = String::from("home");
    println!("{}", pick("default", &input));
    println!("{}", pick("default", ""));
}`,
    'scope/lifetime/static_lifetime': `fn owned<T: std::fmt::Display + 'static>(value: T) {
    println!("{value}");
}

fn main() {
    let name: &'static str = "default";
    owned(name);
    owned(String::from("work"));
}`,
    'scope/lifetime/elision': `fn clean(title: &str) -> &str {
    title.trim()
}

fn main() {
    println!("[{}]", clean(" work "));
    println!("[{}]", clean(" home "));
}`,
    'trait': `trait Export {
    fn extension(&self) -> &str;
    fn name(&self) -> String {
        format!("report.{}", self.extension())
    }
}

struct Csv;

impl Export for Csv {
    fn extension(&self) -> &str {
        "csv"
    }
}

fn main() {
    println!("{}", Csv.name());
}`,
    'trait/derive': `#[derive(Debug, PartialEq, Clone)]
struct Filter {
    done: bool
}

fn main() {
    let a = Filter { done: false };
    let b = a.clone();
    println!("{}", a == b);
    println!("{}", a == Filter { done: true });
}`,
    'trait/dyn': `trait Export {
    fn extension(&self) -> &str;
}

struct Csv;
struct Text;

impl Export for Csv {
    fn extension(&self) -> &str {
        "csv"
    }
}

impl Export for Text {
    fn extension(&self) -> &str {
        "txt"
    }
}

fn exporter(csv: bool) -> Box<dyn Export> {
    if csv {
        Box::new(Csv)
    } else {
        Box::new(Text)
    }
}

fn main() {
    println!("{} {}", exporter(true).extension(), exporter(false).extension());
}`,
    'trait/ops': `use std::ops::Add;

struct Minutes(u32);

impl Add for Minutes {
    type Output = Self;
    fn add(self, rhs: Self) -> Self {
        Self(self.0 + rhs.0)
    }
}

fn main() {
    println!("{}", (Minutes(15) + Minutes(30)).0);
    println!("{}", (Minutes(0) + Minutes(5)).0);
}`,
    'trait/drop': `struct Job(u32);

impl Drop for Job {
    fn drop(&mut self) {
        println!("close {}", self.0);
    }
}

fn main() {
    let first = Job(1);
    let _second = Job(2);
    drop(first);
    println!("continue");
}`,
    'trait/iter': `struct Ids {
    next: u32,
    end: u32
}

impl Iterator for Ids {
    type Item = u32;
    fn next(&mut self) -> Option<u32> {
        if self.next >= self.end {
            None
        } else {
            let id = self.next;
            self.next += 1;
            Some(id)
        }
    }
}

fn main() {
    for id in (Ids { next: 3, end: 5 }) {
        println!("{id}");
    }
}`,
    'trait/impl_trait': `fn selected(limit: u32) -> impl Iterator<Item = u32> {
    (1..=5).filter(move |n| *n > limit)
}

fn main() {
    println!("{:?}", selected(3).collect::<Vec<_>>());
    println!("{:?}", selected(5).collect::<Vec<_>>());
}`,
    'trait/clone': `fn main() {
    let mut live = vec![1, 2];
    let snapshot = live.clone();
    live.push(3);
    println!("{:?}", live);
    println!("{:?}", snapshot);
}`,
    'trait/supertraits': `trait Named {
    fn name(&self) -> &str;
}

trait Exportable: Named {
    fn filename(&self) -> String {
        format!("{}.txt", self.name())
    }
}

struct Report;

impl Named for Report {
    fn name(&self) -> &str {
        "tasks"
    }
}

impl Exportable for Report {}

fn main() {
    println!("{}", Report.filename());
}`,
    'trait/disambiguating': `trait DisplayName {
    fn name(&self) -> &str;
}

trait FileName {
    fn name(&self) -> &str;
}

struct Report;

impl DisplayName for Report {
    fn name(&self) -> &str {
        "Task report"
    }
}

impl FileName for Report {
    fn name(&self) -> &str {
        "tasks.txt"
    }
}

fn main() {
    println!("{}", DisplayName::name(&Report));
    println!("{}", <Report as FileName>::name(&Report));
}`,
    'macros': `macro_rules! task_line {
    ($id:expr) => {
        println!("task={}", $id)
    };
}

fn main() {
    task_line!(2);
    task_line!(3 + 2);
}`,
    'macros/syntax': `macro_rules! count {
    ($n:expr) => {
        println!("count={}", $n)
    };
}

fn main() {
    count!(0);
    count!(2 + 3);
}`,
    'macros/designators': `macro_rules! define_count {
    ($name:ident, $value:expr) => {
        fn $name() -> u32 {
            $value
        }
    };
}

define_count!(pending, 2 + 3);
define_count!(completed, 2);

fn main() {
    println!("{} {}", pending(), completed());
}`,
    'macros/overload': `macro_rules! report {
    ($a:expr) => {
        println!("{}", $a)
    };
    ($a:expr, $b:expr) => {
        println!("{}", $a + $b)
    };
}

fn main() {
    report!(2);
    report!(2, 5);
}`,
    'macros/repeat': `macro_rules! total {
    ($($n:expr),*) => {
        0_u32 $(+ $n)*
    };
}

fn main() {
    println!("{}", total!());
    println!("{}", total!(5, 15, 30));
}`,
    'macros/dry': `macro_rules! threshold {
    ($name:ident, $limit:expr) => {
        fn $name(n: u32) -> bool {
            n > $limit
        }
    };
}

threshold!(busy, 3);
threshold!(overloaded, 10);

fn main() {
    println!("{} {}", busy(5), overloaded(5));
}`,
    'macros/dsl': `macro_rules! summary {
    (pending $total:expr => $done:expr) => {
        $total - $done
    };
}

fn main() {
    println!("{}", summary!(pending 5_u32 => 2));
    println!("{}", summary!(pending 5_u32 => 5));
}`,
    'macros/variadics': `macro_rules! reports {
    ($($name:expr => $count:expr),+ $(,)?) => {
        $(println!("{}={}", $name, $count);)+
    };
}

fn main() {
    reports!("work" => 3, "home" => 0);
}`,
    'error': `fn main() {
    for raw in ["3", "oops"] {
        match raw.parse::<u32>() {
            Ok(n) => println!("tasks={n}"),
            Err(_) => println!("invalid count")
        }
    }
}`,
    'error/panic': `fn main() {
    println!("before");
    panic!("negative task count");
}`,
    'error/option_unwrap': `fn main() {
    for selected in [Some(7), None] {
        match selected {
            Some(id) => println!("task={id}"),
            None => println!("no selection")
        }
    }
}`,
    'error/option_unwrap/question_mark': `fn pending(total: Option<u32>, done: Option<u32>) -> Option<u32> {
    total?.checked_sub(done?)
}

fn main() {
    println!("{:?}", pending(Some(5), Some(2)));
    println!("{:?}", pending(Some(5), None));
}`,
    'error/option_unwrap/map': `fn main() {
    for id in [Some(7), None] {
        println!("{:?}", id.map(|n| format!("TASK-{n:03}")));
    }
}`,
    'error/option_unwrap/and_then': `fn main() {
    for raw in [Some("3"), Some("oops"), None] {
        println!("{:?}", raw.and_then(|s| s.parse::<u32>().ok()));
    }
}`,
    'error/option_unwrap/defaults': `fn main() {
    let mut missing = None;
    let mut present = Some(20);
    println!("{}", missing.get_or_insert(10));
    println!("{}", present.get_or_insert_with(|| 10));
    println!("{:?} {:?}", missing, present);
}`,
    'error/result': `fn parse_count(raw: &str) -> Result<u32, std::num::ParseIntError> {
    raw.parse()
}

fn main() {
    for raw in ["12", "bad"] {
        println!("{}", parse_count(raw).is_ok());
    }
}`,
    'error/result/result_map': `fn main() {
    for raw in ["3", "bad"] {
        let minutes = raw.parse::<u32>().map(|n| n * 5);
        match minutes {
            Ok(n) => println!("minutes={n}"),
            Err(_) => println!("invalid")
        }
    }
}`,
    'error/result/result_alias': `type ParseResult<T> = Result<T, std::num::ParseIntError>;

fn count(raw: &str) -> ParseResult<u32> {
    raw.parse()
}

fn main() {
    println!("{} {}", count("3").is_ok(), count("bad").is_ok());
}`,
    'error/result/early_returns': `fn doubled(raw: &str) -> Result<u32, std::num::ParseIntError> {
    let n = match raw.parse::<u32>() {
        Ok(n) => n,
        Err(e) => return Err(e)
    };
    Ok(n * 2)
}

fn main() {
    println!("{} {}", doubled("3").is_ok(), doubled("bad").is_ok());
}`,
    'error/result/enter_question_mark': `fn remaining(total: &str, done: &str) -> Result<u32, std::num::ParseIntError> {
    let total = total.parse::<u32>()?;
    let done = done.parse::<u32>()?;
    Ok(total.saturating_sub(done))
}

fn main() {
    println!("{:?}", remaining("5", "2"));
    println!("{}", remaining("bad", "2").is_err());
}`,
    'error/multiple_error_types': `fn first(items: &[&str]) -> Result<u32, &'static str> {
    let raw = items.first().ok_or("empty")?;
    raw.parse().map_err(|_| "invalid number")
}

fn main() {
    println!("{:?}", first(&[]));
    println!("{:?}", first(&["bad"]));
    println!("{:?}", first(&["3"]));
}`,
    'error/multiple_error_types/option_result': `fn count(raw: Option<&str>) -> Result<Option<u32>, std::num::ParseIntError> {
    raw.map(str::parse).transpose()
}

fn main() {
    println!("{:?}", count(None));
    println!("{:?}", count(Some("3")));
    println!("{}", count(Some("bad")).is_err());
}`,
    'error/multiple_error_types/define_error_type': `use std::{error::Error, fmt};

#[derive(Debug)]
enum ImportError {
    Empty,
    Invalid
}

impl fmt::Display for ImportError {
    fn fmt(&self, f: &mut fmt::Formatter<'_>) -> fmt::Result {
        write!(f, "{}", match self {
            Self::Empty => "empty input",
            Self::Invalid => "invalid count"
        })
    }
}

impl Error for ImportError {}

fn main() {
    println!("{}", ImportError::Empty);
    println!("{}", ImportError::Invalid);
}`,
    'error/multiple_error_types/boxing_errors': `use std::error::Error;

fn first(items: &[&str]) -> Result<u32, Box<dyn Error>> {
    let raw = items.first().ok_or("empty input")?;
    Ok(raw.parse()?)
}

fn main() {
    println!("{}", first(&["3"]).is_ok());
    println!("{}", first(&[]).is_err());
    println!("{}", first(&["bad"]).is_err());
}`,
    'error/multiple_error_types/reenter_question_mark': `use std::error::Error;

fn next_count(raw: &str) -> Result<u32, Box<dyn Error>> {
    let n: u32 = raw.parse()?;
    Ok(n.checked_add(1).ok_or("overflow")?)
}

fn main() {
    println!("{:?}", next_count("3"));
    println!("{}", next_count("bad").is_err());
}`,
    'error/multiple_error_types/wrap_error': `use std::{error::Error, fmt, num::ParseIntError};

#[derive(Debug)]
struct CountError(ParseIntError);

impl fmt::Display for CountError {
    fn fmt(&self, f: &mut fmt::Formatter<'_>) -> fmt::Result {
        write!(f, "invalid task count: {}", self.0)
    }
}

impl Error for CountError {
    fn source(&self) -> Option<&(dyn Error + 'static)> {
        Some(&self.0)
    }
}

fn main() {
    if let Err(e) = "bad".parse::<u32>().map_err(CountError) {
        println!("has source={}", e.source().is_some());
    }
}`,
    'error/iter_result': `fn main() {
    let rows = ["2", "bad", "5"];
    let accepted: Vec<_> = rows.iter().filter_map(|s| s.parse::<u32>().ok()).collect();
    let all: Result<Vec<u32>, _> = rows.iter().map(|s| s.parse()).collect();
    println!("{:?}", accepted);
    println!("all valid={}", all.is_ok());
}`,
    'std': `fn main() {
    let mut tasks = Vec::new();
    tasks.push(String::from("backup"));
    println!("{}", tasks.len());
    tasks.push(String::from("review"));
    println!("{}", tasks.len());
}`,
    'std/box': `fn main() {
    let mut report = Box::new(3_u32);
    println!("{}", *report);
    *report += 2;
    println!("{}", *report);
}`,
    'std/vec': `fn main() {
    let mut tasks = vec![2, 5];
    tasks.push(8);
    println!("{:?}", tasks);
    println!("{:?}", tasks.pop());
    println!("{:?}", tasks.get(9));
}`,
    'std/str': `fn main() {
    for title in ["work", "é"] {
        println!("{} bytes={} chars={}", title, title.len(), title.chars().count());
    }
    let mut title = String::from("task");
    title.push_str("-1");
    println!("{title}");
}`,
    'std/option': `fn main() {
    for tasks in [vec![], vec![7]] {
        match tasks.first() {
            Some(id) => println!("first={id}"),
            None => println!("empty")
        }
    }
}`,
    'std/result': `fn main() {
    for raw in ["0", "bad"] {
        let result = raw.parse::<u32>();
        match result {
            Ok(count) => println!("count={count}"),
            Err(_) => println!("parse failed")
        }
    }
}`,
    'std/result/question_mark': `fn remaining(total: &str, done: &str) -> Result<u32, std::num::ParseIntError> {
    Ok(total.parse::<u32>()?.saturating_sub(done.parse::<u32>()?))
}

fn main() {
    println!("{:?}", remaining("5", "2"));
    println!("{}", remaining("5", "bad").is_err());
}`,
    'std/panic': `fn main() {
    println!("checking");
    panic!("task state corrupted");
}`,
    'std/hash': `use std::collections::HashMap;

fn main() {
    let mut counts = HashMap::new();
    counts.insert("work", 2);
    *counts.entry("work").or_insert(0) += 3;
    println!("{:?}", counts.get("work"));
    println!("{:?}", counts.get("home"));
}`,
    'std/hash/alt_key_types': `use std::collections::HashMap;

#[derive(PartialEq, Eq, Hash)]
struct Key {
    user: u32,
    project: u32
}

fn main() {
    let mut counts = HashMap::new();
    counts.insert(Key { user: 1, project: 2 }, 5);
    println!("{:?}", counts.get(&Key { user: 1, project: 2 }));
    println!("{:?}", counts.get(&Key { user: 1, project: 3 }));
}`,
    'std/hash/hashset': `use std::collections::HashSet;

fn main() {
    let a: HashSet<_> = [1, 2].into_iter().collect();
    let b: HashSet<_> = [2, 3].into_iter().collect();
    let mut ids: Vec<_> = a.union(&b).copied().collect();
    ids.sort();
    println!("{:?}", ids);
    println!("{}", a.intersection(&b).count());
}`,
    'std/rc': `use std::rc::Rc;

fn main() {
    let name = Rc::new(String::from("work"));
    println!("{}", Rc::strong_count(&name));
    let view = Rc::clone(&name);
    println!("{} {}", view, Rc::strong_count(&name));
    drop(view);
    println!("{}", Rc::strong_count(&name));
}`,
    'std/arc': `use std::{sync::Arc, thread};

fn main() {
    let name = Arc::new(String::from("work"));
    let worker_name = Arc::clone(&name);
    let worker = thread::spawn(move || worker_name.len());
    match worker.join() {
        Ok(n) => println!("{} {n}", name),
        Err(_) => println!("worker failed")
    }
}`,
    'std_misc': `fn main() {
    let worker = std::thread::spawn(|| [2_u32, 3].iter().sum::<u32>());
    match worker.join() {
        Ok(total) => println!("total={total}"),
        Err(_) => println!("worker failed")
    }
}`,
    'std_misc/threads': `use std::thread;

fn main() {
    let a = thread::spawn(|| 2_u32 + 3);
    let b = thread::spawn(|| 4_u32);
    match (a.join(), b.join()) {
        (Ok(a), Ok(b)) => println!("total={}", a + b),
        _ => println!("worker failed")
    }
}`,
    'std_misc/threads/testcase_mapreduce': `use std::thread;

fn main() {
    let chunks = [vec![2_u32, 3], vec![4, 1]];
    let handles: Vec<_> = chunks.into_iter()
        .map(|chunk| thread::spawn(move || chunk.iter().sum::<u32>()))
        .collect();
    let mut total = 0;
    for handle in handles {
        match handle.join() {
            Ok(part) => total += part,
            Err(_) => {
                println!("worker failed");
                return;
            }
        }
    }
    println!("total={total}");
}`,
    'std_misc/channels': `use std::{sync::mpsc, thread};

fn main() {
    let (tx, rx) = mpsc::channel();
    let worker = thread::spawn(move || tx.send(5_u32));
    match rx.recv() {
        Ok(n) => println!("count={n}"),
        Err(_) => println!("channel closed")
    }
    println!("worker ok={}", matches!(worker.join(), Ok(Ok(()))));
}`,
    'std_misc/path': `use std::path::Path;

fn main() {
    for name in ["tasks.csv", "settings.toml"] {
        let path = Path::new("data").join(name);
        println!("{:?}", path.extension().and_then(|v| v.to_str()));
    }
}`,
    'std_misc/file': `use std::io::{self, Read};

fn read_count(mut input: impl Read) -> io::Result<String> {
    let mut text = String::new();
    input.read_to_string(&mut text)?;
    Ok(text)
}

fn main() -> io::Result<()> {
    println!("{}", read_count(&b"3"[..])?);
    println!("{}", read_count(&b"5"[..])?);
    Ok(())
}`,
    'std_misc/file/open': `use std::{fs::{self, File}, io::{self, Read}};

fn main() -> io::Result<()> {
    let path = std::env::temp_dir().join(format!("rbe-open-{}.txt", std::process::id()));
    let mut created = fs::OpenOptions::new()
        .write(true)
        .create_new(true)
        .open(&path)?;
    use std::io::Write;
    created.write_all(b"3")?;
    drop(created);
    let mut text = String::new();
    File::open(&path)?.read_to_string(&mut text)?;
    fs::remove_file(&path)?;
    println!("count={text}");
    Ok(())
}`,
    'std_misc/file/create': `use std::{fs::{self, OpenOptions}, io::{self, Write}};

fn main() -> io::Result<()> {
    let path = std::env::temp_dir().join(format!("rbe-create-{}.txt", std::process::id()));
    let mut file = OpenOptions::new()
        .write(true)
        .create_new(true)
        .open(&path)?;
    file.write_all(b"tasks=3
")?;
    drop(file);
    let text = fs::read_to_string(&path)?;
    fs::remove_file(&path)?;
    print!("{text}");
    Ok(())
}`,
    'std_misc/file/read_lines': `use std::io::{self, BufRead, Cursor};

fn main() -> io::Result<()> {
    for line in Cursor::new(b"2
5
").lines() {
        let text = line?;
        match text.parse::<u32>() {
            Ok(n) => println!("tasks={n}"),
            Err(_) => println!("invalid count")
        }
    }
    Ok(())
}`,
    'std_misc/process': `use std::{io, process::Command};

fn main() -> io::Result<()> {
    if std::env::args().any(|a| a == "--worker") {
        println!("tasks=5");
        return Ok(());
    }
    let out = Command::new(std::env::current_exe()?)
        .arg("--worker")
        .output()?;
    println!("success={}", out.status.success());
    print!("{}", String::from_utf8_lossy(&out.stdout));
    Ok(())
}`,
    'std_misc/process/pipe': `use std::{io::{self, Read, Write}, process::{Command, Stdio}};

fn main() -> io::Result<()> {
    if std::env::args().any(|a| a == "--worker") {
        let mut input = String::new();
        io::stdin().read_to_string(&mut input)?;
        print!("{}", input.to_uppercase());
        return Ok(());
    }
    let mut child = Command::new(std::env::current_exe()?)
        .arg("--worker")
        .stdin(Stdio::piped())
        .stdout(Stdio::piped())
        .spawn()?;
    if let Some(mut input) = child.stdin.take() {
        input.write_all(b"work
")?;
    }
    let out = child.wait_with_output()?;
    if out.status.success() {
        print!("{}", String::from_utf8_lossy(&out.stdout));
    } else {
        println!("worker failed");
    }
    Ok(())
}`,
    'std_misc/process/wait': `use std::{io, process::Command};

fn main() -> io::Result<()> {
    if std::env::args().any(|a| a == "--worker") {
        return Ok(());
    }
    let mut child = Command::new(std::env::current_exe()?)
        .arg("--worker")
        .spawn()?;
    println!("success={}", child.wait()?.success());
    Ok(())
}`,
    'std_misc/fs': `use std::{fs, io};

fn main() -> io::Result<()> {
    let path = std::env::temp_dir().join(format!("rbe-dir-{}", std::process::id()));
    fs::create_dir(&path)?;
    println!("directory={}", fs::metadata(&path)?.is_dir());
    fs::remove_dir(&path)?;
    println!("exists={}", path.exists());
    Ok(())
}`,
    'std_misc/arg': `fn main() {
    let args = ["tasks", "list", "work"];
    for (index, arg) in args.iter().enumerate() {
        println!("{index}={arg}");
    }
}`,
    'std_misc/arg/matching': `fn command(args: &[&str]) {
    match args {
        ["list"] => println!("all tasks"),
        ["show", id] => match id.parse::<u32>() {
            Ok(id) => println!("task={id}"),
            Err(_) => println!("invalid id")
        },
        _ => println!("usage")
    }
}

fn main() {
    command(&["list"]);
    command(&["show", "7"]);
    command(&["show", "bad"]);
}`,
    'testing': `fn pending(total: u32, done: u32) -> u32 {
    total.saturating_sub(done)
}

fn main() {
    assert_eq!(pending(5, 2), 3);
    assert_eq!(pending(0, 0), 0);
    println!("checks passed");
}`,
    'compatibility/raw_identifiers': `struct Task {
    r#type: &'static str
}

fn main() {
    for kind in ["backup", "report"] {
        let task = Task { r#type: kind };
        println!("{}", task.r#type);
    }
}`,
    'meta': `/// Return the number of pending tasks, clamped at zero.
fn pending(total: u32, done: u32) -> u32 {
    total.saturating_sub(done)
}

fn main() {
    println!("{} {}", pending(5, 2), pending(2, 5));
}`
};
