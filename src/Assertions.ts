// 타입 단언(Assertion)
// 단언 - 주저하지 아니하고 딱 잘라 말함.

// 단언 키워드 - as
// Non-null 단언 연산자 - ! 
//! 느낌표를 사용해서 단원하는 방법은 null 이나 undefined가 아니다 라는것을 명시할 때만 쓰이는 것이다.

// 1)
const el = document.querySelector('.title')
if (el) {
  el.textContent = 'Hello world?!'
}

// 2)
function getNumber(x: number | null | undefined ) {
  if (x) {
    return Number(x.toFixed(2))
  }
}
getNumber(3.1415926535)
getNumber(null)

// 3)
function getValue(x: string | number, isNumber: boolean) {
  if (isNumber) {
    return Number((x as number).toFixed(2))
  }
  return (x as string).toUpperCase()
}
getValue('Hello world', false) // "HELLO WORLD"
getValue(3.1415926535, true) // 3.14