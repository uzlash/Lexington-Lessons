//1
// const add = (x, y) => x + y;
// console.log(add(3,4))


//2
// function addAsync (x,y){ 
//     setTimeout(() => {
//         let sum = 0
//         sum = x + y
//         console.log(sum)
//     }, 2000)
// }
// addAsync(2,8)


// 3
// function addAsync1 (n){ 
//         if(n < 5){
//           setTimeout(function(){
//             n += 1;
//             console.log(n);
//             addAsync1(n);
//           }, 2000);
//         }
// }

// addAsync1(0)

//4
// function addPromise(x, y) {
//     return new Promise ((reslove, reject) => {
//         setTimeout(function(){
//             let sum = x + y;
//             reslove(sum)
//             console.log(sum)
//         }, 2000)
//     })
// }

// addPromise(3,4)

//5

// addPromise(0, 1)
// .then( () => addPromise(1,1))
// .then(() => addPromise(2,1))
// .then( () => addPromise(3,1))
// .then(() => addPromise(4,1))
// .catch(err => console.log(err))

//6

//Function 1
// function* gen(n) {
//     for(let i = 1; i <= n; i++) {
//         yield i
//     }
// }

// function* gen(n) {
//     if(n < 5){
//         setTimeout(function(){
//           yield n
//           gen(n)
//         }, 2000);
//       }
// }

// for (val of gen(0)) {
//     console.log(val)
// }

//Function 2
// function * naturalNumbers() {
//     let num = 1;
//       while (num <= 10) {
//       yield num;
//       num += 1
//     }
//   }

// const numbers = naturalNumbers();
// for (val of naturalNumbers()) {
//     setTimeout(() => console.log(numbers.next().value),2000)
// }

//Function 3
// function * powerSeries(number, power) {
//     let base = number;
//     while(true) {
//       yield Math.pow(base, power);
//       base++;
//     }
// }

// const powersOf2 = powerSeries(3,2)
// const powersOf3 = powerSeries(4,3)

// for (let i = 1; i < 10; i++) {
//     console.log(i+2, powersOf2.next().value)
// }