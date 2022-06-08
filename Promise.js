class Promise {
  static PENDING = 'PENDING'
  static FULLFILED = 'FULLFILED'
  static REJECTED = 'REJECTED'

  constructor(exceutor) {
    this.status = Promise.PENDING
    this.value = undefined
    this.reason = undefined
    this.resolves = []
    this.rejects = []

    try {
      exceutor(this._resolve, this._reject)
    } catch (err) {
      this._reject(err)
    }

  }
  _resolve(value) {
    this.handle(Promise.FULLFILED, value)
  }

  _reject (reason) {
    this.handle(Promise.REJECTED, reason)
  }

  handle(status, val) {
    if (this.status !== Promise.PENDING) {
      return
    }
    const flag = status === Promise.FULLFILED
    this.status = status
    flag ? (this.value = val) : (this.reason = val)
    setTimeout(() => {
      let cb , cbs 
      cbs = flag ? this.resolves : this.rejects

      while((cb = cbs.shift())) {
        cb(val)
      }
    })
  }
}