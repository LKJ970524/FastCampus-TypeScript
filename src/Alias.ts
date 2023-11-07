// 타입 별칭(Alias)

type TypeA = string
type TypeB = string | number | boolean
type USER = {
  name: string
  age: number
  isValid: boolean
} | [string, number, boolean]

const USERa : USER = {
  name: 'neo',
  age: 85,
  isValid: true
}
const USERb: USER = ['Evan', 36 , false]

function someFunc(param: TypeB): TypeA {
  switch (typeof param) {
    case 'string':
      return param.toUpperCase()
    case 'number':
      return param.toFixed(2)
    default:
      return 'Boolean'
  }
}



type TypeUser = {
  name: string
  age: number
  isValid: boolean
}
interface InterfaceUser {
  name: string
  age: number
  isValid: boolean
}

const dazy: InterfaceUser = {
  name: 'Dazy',
  age: 30,
  isValid: true
}
