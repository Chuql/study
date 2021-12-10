const debounce = function (callback, time = 1000) {
  let timer = null;
  return function (...args) {
    if (timer) {
      clearTimeout(timer);
      timer = null;
    }
    timer = setTimeout(() => {
      callback(...args);
    }, time);
  }
}

const fn = debounce(() => {
  console.log('节流')
})

fn()
fn()
fn()
fn()
fn()
fn()
fn()