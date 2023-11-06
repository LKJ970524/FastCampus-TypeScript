// 인터페이스(Interface)

// 선택적 속성 - ?
// 읽기전용 속성 - readonly
//^ 인터페이스를 만들때는 interface 키워드로 시작해주고 이름을 파스칼케이스를 사용하여 만든다.
//^ 속성을 지정해줄때 선택적으로 속성을 지정해주고싶으면 할당뒤에 ? 붙이면 된다

interface User {
  name: string
  readonly age: number
  isValid?: boolean
}
const KJ: User = {
  name: 'Kyu Jeong',
  age: 27,
  isValid: true
}
KJ.isValid = false
KJ.age = 27

const neo: User = {
  name: 'Neo',
  age: 30
}





// 함수타입 - 호출시그니처(Call Signature)
// 인덱스 가능 타입 - 인덱스 시그니처(Index Signature)
// 확장(상속)