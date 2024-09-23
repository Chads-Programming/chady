const write = async (cb) => {
  console.time('t')
  const result = await cb()
  console.timeEnd('t')
  console.log(result)
}

exports.write = write
