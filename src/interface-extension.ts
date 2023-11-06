// 인터페이스(Interface)
// 확장(상속)

interface UserE {
  name: string
  age: number
}
interface UserD extends UserE {
  isValid: boolean
}

const KJKJ: UserE = {
  name: 'Kyu Jeong',
  age: 27,
  isValid: true
}
const rojeta: UserD = {
  name: 'rojeta',
  age: 27,
  isValid: true
}


// 다른 예제
interface FullName {
  firstName: string
  lastName: string
}
interface FullName {
  middleName: string
  lastName: boolean
}

const fullName: FullName = {
  firstName: 'Tomas',
  middleName: 'Sean',
  lastName: 'Connery'
}