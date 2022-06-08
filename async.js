
// function next(generator, feedback) {
//   const res = generator.next(feedback)
//   return res.done ? () => {} : res.value
// }

// function recursiveCall(generator, feedback) {
//   next(generator, feedback)(v => recursiveCall(generator, v))
// }

// function yeildContination (generator) {
//   recursiveCall(generator)
// }

// yeildContination(gen())


// function *gen () {
//   const res = yield (v) => {
//      setTimeout(v, 2000, 321322)
//    }
 
//    console.log(res, 'res')
 
//    yield k => new Promise(resolve => {
//      resolve(123)
//    }).then(k)
//  }


// const gen = function *(params) {
//   yield 1
//   yield 2
// }

// console.log(gen().next(), 'gen')


function  yieldCon(generator) {
  recusiveCall(generator)
}

function  recusiveCall(generator, feedback) {
  next(generator, feedback)(v => recusiveCall(generator, v))
}

function next(generator, feedback) {
  const { done, value } = generator.next(feedback)
  return done ? () => {} : value
}


yieldCon(function *() {
 const res1 = yield k => setTimeout(k, 2000, '132')
 console.log(res1)
 const res2 = yield k => new Promise(resolve => {
   resolve(res1)
 }).then(k)
 console.log(res2, '222')
}())