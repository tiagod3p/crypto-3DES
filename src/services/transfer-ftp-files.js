const transferFiles = async (ftpConnection, fs, convertCSVtoJSON, csvTransformer) => {
  const client = await ftpConnection()
  const fileList = await client.list('./docs');
  await client.cd('./docs')
  fileList.forEach(file => {
      if (fs.existsSync(`./json/${file.name.replace('.csv', '.json')}`)) {
        continue;
      }
      await client.downloadTo(`./temp/${file.name}`, file.name);

      const jsonStringify = await convertCSVtoJSON(csvTransformer, file)
  })
}