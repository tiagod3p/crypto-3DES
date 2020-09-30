import ftp from 'basic-ftp'

const ftpConnection = async () => {
  try {
    const client = new ftp.Client()
    client.ftp.verbose = true

    await client.access({
    host: process.env.HOST,
    user: process.env.USER,
    password: process.env.PASSWORD,
    secure: false,
    })

    return client
  } catch(err) {
    console.error(err.stack)
  }
}

export default ftpConnection