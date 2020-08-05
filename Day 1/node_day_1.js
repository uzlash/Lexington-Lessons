//CALLBACKS

// function add(x, y, aCallBackFucniton) {
//     setTimeout(function(){
//         let sum = x + y;
//         if(sum > 10){
//             aCallBackFucniton('Error sum more than 10', null)
//         }
//         else {
//             aCallBackFucniton(null, sum)
//         }
//     }, 5000)
// }

// add(1,2, function (err, result) {
//     if(err){
//         console.log('Err => ', err)
//     }
//     else {
//         console.log('Sum => ', result)
//         add(3,6,function (err, result) {
//             if(err){
//                 console.log('Err => ', err)
//             }
//             else {
//                 console.log('Sum => ', result)
//                 add(3,2,function (err, result) {
//                     if(err){
//                         console.log('Err => ', err)
//                     }
//                     else {
//                         console.log('Sum => ', result)
//                     }
//                 }
//             )}
//         })
//     }
// })

// function (err, result) {
//     if(err){
//         console.log('Err => ', err)
//     }
//     else {
//         console.log('Sum => ', result)
//     }
// }

//Using Promises

// function add(x, y) {
//     return new Promise ((reslove, reject) => {
//         setTimeout(function(){
//             let sum = x + y;
//             if(sum > 10) {
//                 reject('Error sum more than 10')
//             }
//             else {
//                 reslove(sum)
//             }
//         }, 3000)
//     })
// }

// add(4, 3)
// .then(result => {
//     console.log(result)
//     return add(3,5)
// }).then(r => {
//     console.log(r)
//     return add(2,3)
// }).then(x => {
//     console.log(x)
// })
// .catch(err => console.log(err))

//Generators

// function gen() {
//     var x = 0
//     while (true) {
//         yield x + 1
//     }
// }

// var taskGenerator = gen()

// console.log(taskGenerator.next().value)


//Events

const events = require('events')

myEmitter = new events.EventEmitter()

// myEmitter.on('pim', () => {
//     console.log('Pim Bus is here')
// })

// myEmitter.on('pim-pim', () => {
//     console.log('Pim-pim Bus is here')
// })

// myEmitter.emit('pim');
// myEmitter.emit('pim-pim');

myEmitter.on('uploadEvent', (progress) => {
    console.log(`File upload progress is ${progress}%`)
})

// function myProgressApp() {
//     for(i = 1; i < 101; i++) {
//         incr(i, function(ii) {
//             myEmitter.emit('uploadEvent', ii)
//         })
//     }
// }


function myProgressApp() {
    for(i = 1; i < 101; i++) {
        incr(i, function(ii) {
             myEmitter.emit('uploadEvent', ii)
        })
    }
}


function incr(i, cb) {
    setTimeout(() => {
        cb(i)
    }, 1000)
}

myProgressApp();