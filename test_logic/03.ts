class FindUnique {
  private readonly numStr: string
  private uniqueNumber: number[]
  private frequency: { [key: string]: number }

  constructor(num: number) {
    this.numStr = num.toString()
    this.uniqueNumber = []
    this.frequency = {}
  }

  private resetValue() {
    this.uniqueNumber = []
    this.frequency = {}
  }

  private setFrequency() {
    this.resetValue()
    this.numStr.split('').forEach(num => {
      if (!this.frequency[num]) this.frequency[num] = 0
      this.frequency[num]++
    })
  }

  private findUnique() {
    this.setFrequency()
    Object.keys(this.frequency).forEach(num => {
      if (this.frequency[num] === 1) this.uniqueNumber.push(parseInt(num))
    })
  }

  getUniqueNumber() {
    this.findUnique()
    return this.uniqueNumber
  }
}

const unique = new FindUnique(76529752)
console.log(unique.getUniqueNumber())
