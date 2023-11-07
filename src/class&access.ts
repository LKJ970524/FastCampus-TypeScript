// 클래스(class)

// 접근 제어자(Access Modifiers)
//~ public - 어디서나 자유롭게 접근 가능, 클래스 바디에서 생략 가능
//~ protected - 나와 파생된 후손 클래스 내에서 접근 가능
//~ private - 내 클래스에서만 접근 가능

class UserA {
  constructor( //^ 매개변수에서 접근제어자를 사용할 때는 public은 생략이 불가능하다.
      public first: string = '',
      public last: string = '',
      public age: number = 0
    ) {
      // ...
    }
  protected getAge() {
    return `${this.first}, ${this.last} is ${this.age}`;
  }
}
class UserB extends UserA {
  getAge() {
    return `${this.first}, ${this.last} is ${this.age}`;
  }
}
class UserC extends UserB {
  getAge() {
    return `${this.first}, ${this.last} is ${this.age}`;
  }
}

const james = new UserA("James", "Lee", 27);
console.log(james.first);
console.log(james.last);
console.log(james.age);
james.getAge();
