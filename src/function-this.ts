// 함수 - 명시적 this

interface Cat {
  name: string
  age: number
}
const cat: Cat = {
  name: 'Lucy',
  age: 3
}

//! this의 타입을 명시할수 있는 문법 예제....(this라는 타입이 정확하게 무엇인지 알 수 없는 환경에서 this가 무엇인지 타입스크립트에게 알려줄수 있는 방법)
function hello(this: Cat, message: string) {
  console.log(`Hello ${this.name}, ${message}`);
}
hello.call(cat, 'You are pretty awesome!')