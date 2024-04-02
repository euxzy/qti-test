class Reverse {
  private readonly str: string
  private reversedStr: string
  private tempNum: string

  constructor(str: string) {
    this.str = str
    this.reversedStr = ''
    this.tempNum = ''
  }

  private resetValue() {
    this.reversedStr = ''
    this.tempNum = ''
  }

  usingLooping() {
    this.resetValue()
    for (let i = this.str.length - 1; i >= 0; i--) {
      if (/[0-9]/.test(this.str[i])) this.tempNum += this.str[i]
      else this.reversedStr += this.str.charAt(i)
    }
    return this.reversedStr + this.tempNum
  }

  usingReduce() {
    return this.str.split('').reduce(function (prevVal, currVal) {
      if (/[0-9]/.test(currVal)) prevVal += currVal
      else prevVal = currVal + prevVal
      return prevVal
    }, '')
  }
}

const reverse = new Reverse('SUTNAUQ3')
console.log('Using looping: ' + reverse.usingLooping())
console.log('Using reduce: ' + reverse.usingReduce())
