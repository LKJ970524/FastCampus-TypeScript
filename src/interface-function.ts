// 인터페이스(Interface)
// 함수타입 - 호출시그니처(Call Signature)

interface GetName {
  (message: string):string
}
interface Usera {
  name: string
  age: number
  getName: GetName
}
const LKJ: Usera = {
  name: 'Kyu Jeong',
  age: 27,
  getName(message: string) {
    console.log(message);
    return this.name
  }
}
LKJ.getName('Hello~')