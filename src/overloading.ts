// 함수 - 오버로딩(Overloading)

// 1)
function add1(a:string, b:string) {
  return a + b
}
function add2(a:number, b:number) {
  return a + b
}
add1('hello', 'world~') // hello world
add2(1,2) //3
add1('hello', 2) // 숫자는 문자에 할당될 수 없다.
add2('hello', 2) // 문자는 숫자에 할당될 수 없다.


// 2) //!오버로딩
//^ 함수의 오버로딩을 사용하게 되면 하나의 이름으로 만들어서 함수가 호출될 떄 사용되는 타입만 분기해준다.
function add(a: string, b: string): string //~ 타입을 선언하는 부분
function add(a: number, b: number): number //~ 타입을 선언하는 부분
function add(a: any, b: any) { //~ 함수를 구현하는 부분
  return a + b
}
add('hello', 'world~') // hello world
add(1,2) //3
add('hello', 2) // 시작이 문자이기 때문에 뒤쪽도 문자가 나와야한다.
add(1, 'world~') // 시작이 숫자이기 때문에 뒤쪽도 숫자가 나와야한다.