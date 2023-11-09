// 제네릭(Generic)
// function(함수)

interface Obj {
  x: number
}
type Arr = [number, number]

// function toArray(a: string, b: string): string[]
// function toArray(a: number, b: number): number[]
// function toArray(a: boolean, b: boolean): boolean[]
// function toArray(a: Obj, b: Obj): Obj[]
// function toArray(a: Arr, b: Arr): Arr[]
// function toArray(a: any, b: any) {
//   return [a, b]
// }
function toArray<T>(a:T, b:T) {
  return [a,b]
}


console.log(
  toArray<string>('Neo', 'Anderson'),
  toArray<number>(1, 2),
  toArray<boolean>(true, false),
  toArray<Obj>({x:1}, {x:2}),
  toArray<Arr>([1,2], [3,4])
);
