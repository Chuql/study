const throttling = function (callback, time = 2000) {
  let timer = null
  return function (...args) {
    if (!timer) {
      timer = setTimeout(() => {
        callback(...args)
        clearTimeout(timer)
        timer = null
      }, time)
    } 
  }
}

const fn = throttling(() => {
  console.log("防抖")
})


setInterval(() => {
  fn()
}, 10)