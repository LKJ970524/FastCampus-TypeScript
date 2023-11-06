// 인터페이스(Interface)
// 인덱스 가능 타입 - 인덱스 시그니처(Index Signature)

// 배열
interface Fruits {
  [item: number]: string
}
const fruits: Fruits = ['Apple', 'Banana', 'Cherry']
console.log(fruits[1]);

// 객체
interface UserB {
  [key: string]: unknown
  name: string
  age: number
}
const JK: UserB = {
  name: 'Jeong Kyu',
  age: 27
}
JK['isValid'] = true
JK['emails'] = ['dlrbwjd7096@naver.com', 'dlrbwjd7096@gmail.com']
console.log(JK);



// 예제
interface Payload {
  [key: string]: unknown
}
function logValues(payload: Payload) {
  for (const key in payload) {
    console.log(payload[key]);
  }
}

interface UserC {
  [key: string]:unknown
  name: string
  age: number
  isValid: boolean
}
const JKL: UserC = {
  name: 'Lee Kyu Jeong',
  age: 27,
  isValid: true
}
logValues(JKL)