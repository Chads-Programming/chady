const solution = require('./solution')
const writter = require('./write')

const main = async () => {
  const args = process.argv.slice(2)
  const params = JSON.parse(args)

  await writter.write(() => {
    return solution.sum(...params)
  })
}

main()
