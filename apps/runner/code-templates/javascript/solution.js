const sum = (a, b) => {
  return a + b
}

exports.sum = sum

function main() {
  const args = process.argv.slice(2)
  const params = JSON.parse(args)

  write.result(() => sum(...params))
}

main()
