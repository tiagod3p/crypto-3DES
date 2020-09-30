const convertCSVtoJSON = async (csvTransformer, file) => {
  const csvFilePath = `./temp/${file.name}`
  
  const json = await csvTransformer().fromFile(csvFilePath)

  const jsonStringify = JSON.stringify(json, null, 4)

  return jsonStringify
}

export default convertCSVtoJSON