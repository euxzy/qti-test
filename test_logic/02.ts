class LongestText {
  private readonly sentence: string
  private longestWord: string

  constructor(sentence: string) {
    this.sentence = sentence
    this.longestWord = ''
  }

  private resetValue() {
    this.longestWord = ''
  }

  private find() {
    this.resetValue()
    this.longestWord = this.sentence.split(' ').sort((a, b) => b.length - a.length)[0]
  }

  getLongestWord() {
    this.find()
    return this.longestWord
  }

  getTotalCharLongestWord() {
    this.find()
    return this.longestWord.length + ' karakter'
  }
}

const sentence = new LongestText('Saya sangat senang mengerjakan soal algoritma dari PT. Quantus Telematika')
console.log(sentence.getLongestWord() + ': ' + sentence.getTotalCharLongestWord())
