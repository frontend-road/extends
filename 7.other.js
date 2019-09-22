console.log('%c其他继承 setPrototypeOf ************', 'color: red; font-size: 16px;')

// https://github.com/InterviewMap/CS-Interview-Knowledge-Map/blob/master/JS/JS-ch.md

class MyDate1 extends Date {
  test() {
    return this.getTime()
  }
}
let myDate1 = new MyDate1()
console.log('myDate1:', myDate1.test())


// function MyDate2() {}
// MyDate2.prototype = new Date()
// MyDate2.prototype.constructor = MyDate2
// MyDate2.prototype.test = function() {
//   // Uncaught TypeError: this is not a Date object.
//   // 因为在 JS 底层有限制，如果不是由 Date 构造出来的实例的话，是不能调用 Date 里的函数的。
//   return this.getTime()
// }

// let myDate2 = new MyDate2()
// console.log('myDate2:', myDate2.test())


// 先创建父类实例 => 改变实例原先的 _proto__ 转而连接到子类的 prototype => 子类的 prototype 的 __proto__ 改为父类的 prototype。
// 通过以上方法实现的继承就可以完美解决 JS 底层的这个限制。
function MyDate3() {}
MyDate3.prototype.test = function() {
  return this.getTime()
}
let myDate3 = new Date()
Object.setPrototypeOf(myDate3, MyDate3.prototype)
Object.setPrototypeOf(MyDate3.prototype, Date.prototype)
console.log('myDate3:', myDate3.test())
