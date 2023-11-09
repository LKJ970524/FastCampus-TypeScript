// 제네릭(Generic)
// class(클래스)

class USer<P> {
  constructor(public payload: P) {}
  getPayload() {
    return this.payload
  }
}

interface USerAType {
  name: string
  age: number
  isValid: boolean
}
interface USerBType {
  name: string
  age: number
  emails: string[]
}
const Heropy = new USer<USerAType>({
  name: 'Heropy',
  age:80,
  isValid: true,
})
const NEO = new USer<USerBType>({
  name: 'NEO',
  age: 102,
  emails: ['NEO@gmail.com']
})