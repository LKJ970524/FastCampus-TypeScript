// 타입 종류

// 문자
/*let str: string
let red: string = "red"
let green: string = "Green"
let myColor: string = `my color is ${red}.`
let yourColor: string = 'Your color is' + green*/

// 숫자
/* let num: number
let integer: number = 6
let float: number = 3.14
let infinity: number = Infinity
let nan: number = NaN*/

// 불린
/*let isBoolean: boolean
let isDone: boolean = false*/

// Null / Undefined
/*let nul: null
let und: undefined
nul = null
let num2: number
num2 = 123
console.log(nul);
console.log(und);
console.log(num2);
//! 타입으로 null이나 undefined를 직접적으로 명시하는 일은 거의 없을것이라고 본다. 지정하는것만 가능하다 정도 알고있으면 될것같다.*/

// 배열 //! 배열타입은 항상 배열을 의미하는 대괄호와 그 안에 들어갈 아이템의 타입을 같이 작성해서 완성한다.
/*const fruits: string[] = ['apple', 'banana', 'cherry']
const numbers: number[] = [1, 2, 3, 4, 5, 6, 7]
const union: (string|number)[] = ['apple', 1, 2, 'banana', 3]
const array: number[] = [1,2,3]*/

// 객체
// typeof DATA === 'object'
/*const obj: object = {}
const arr: object = []
const func: object = function () {}

interface User {
  name: string
  age: number
  isValid: boolean
}
const userA: User= {
  name: 'Lee Kyu Jeong',
  age: 27,
  isValid: true
}
const userB: User = {
  name: 'Neo',
  age: 26,
  isValid: false
}*/

// 함수
/*const add: (x:number, y:number) => number = function (x,y) {
  return x + y
}
const a: number = add(1,2)

const Hello: () => void = function () {
  console.log('hello world~');
}
const h: void = Hello()*/

// Any //! any는 아무거나 할당해도 전혀 문제가 없는 타입
/*let hello: any = 'Hello world'
hello = 123
hello = false
hello = null
hello = {}
hello = []
hello = function () {}*/

// Unknown //! any타입은 사용하지 말고 정확하게 데이터의 타입을 알수가 없는 상황에서는 unknown을 사용하자
/*const a: any = 123
const u: unknown = 123

const any:any = u
const boo:boolean = u
const num:number = u
const arr : string[] = u
const obj: {x: string, y: number} = u*/

// Tuple //! tuple이 front-end에서 많이 사용하지는 않지만 배열데이터 부분에 명확한 아이템의 순서가 존재할때, 간혹 쓰일수 있다. 그리고 온전하게 순서와 개수가 정해져 있는 배열의 아이템을 만들때 유용하게 쓸 수 있다.
/*const tuple: [string, number, boolean] = ["a", 1, false];
const users: [number, string, boolean][] = [
  [1, "neo", true],
  [2, "evan", false],
  [3, "lewis", true],
];*/

// Void //! return 키워드를 작성하지 않은 함수 안에서 반환 되는 데이터 타입이다.
function hello(msg: string): void {
  console.log(`Hello ${msg}`);
}
const hi: void = hello('world')

// Never //! never 타입을 만나면 혹시 타입 지정이 잘못된 것은 아닌지 다시한번 검토를 해봐야한다.
/*const nev: [] = []
nev.push(3)*/
//~ push는 배열 데이터의 마지막 아이템으로 데이터를 밀어 넣는 역할이다.

// Union //! union 변수의 경우 하나의 배열 데이터 이지만 그 배열의 아이템으로 문자데이터, 숫자데이터, boolean 데이터 모두 허용이 가능하다.
/*let union: (string | number | boolean)[]
union = 'hello type!'
union = 123
union = false*/

// Intersection //! 객체 하나의 객체타입과 다른부분의 객체 타입의 속성의 내용들이 전부 다 합쳐진 새로운 타입을 만들때 intersection타입을 사용한다. &기호를 사용하는 intersection 타입은 and 연산자와 유사하다.
interface User {
  name: string,
  age: number
}
interface Validation {
  isValid: boolean
}
const heropy: User & Validation = {
  name: 'Neo',
  age: 28,
  isValid: false
}