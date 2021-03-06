const transferFiles = async (ftpConnection, fs, convertCSVtoJSON, csvTransformer, cryptography) => {
  const client = await ftpConnection()
  const fileList = await client.list('./docs');
  await client.cd('./docs')
  fileList.forEach(file => {
      if (fs.existsSync(`./json/${file.name.replace('.csv', '.json')}`)) {
        continue;
      }
      await client.downloadTo(`./temp/${file.name}`, file.name);

      const jsonStringify = await convertCSVtoJSON(csvTransformer, file)
      const jsonEncrypted = cryptography(jsonStringify, process.env.KEY)

      fs.writeFile(`./json/${arquivo.name.replace('.csv', '.json')}`, jsonEncrypted, (err) => console.error(err));
      fs.unlink(csvFilePath, (err) => console.error(err));
  })

  client.close()
}

export default transferFiles