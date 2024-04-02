class QueryInput {
  private readonly input: string[]
  private readonly query: string[]
  private output: number[]

  constructor(input: string[], query: string[]) {
    this.input = input
    this.query = query
    this.output = []
  }

  private resetValue() {
    this.output = []
  }

  private countQuery() {
    this.resetValue()
    this.query.forEach(itemQuery => {
      let count = 0
      this.input.forEach(itemInput => {
        if (itemQuery === itemInput) count++
      })
      this.output.push(count)
    })
  }

  getOutput() {
    this.countQuery()
    return this.output
  }
}

const queryInput = new QueryInput(['xc', 'dz', 'bbb', 'dz'], ['bbb', 'ac', 'dz'])
console.log(queryInput.getOutput())
