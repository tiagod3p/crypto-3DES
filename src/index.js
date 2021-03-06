import fs from 'fs'
import csvTransformer from 'csvtojson'
import cron from 'node-cron'

import ftpConnection from './services/ftp-connection.js'
import csvToJson from './services/convert-csv-to-json.js'
import cryptography from './services/cryptography.js'

import transferFiles from './services/transfer-ftp-files.js'

const task = cron.schedule('*/10 * * * * *', async () => {
  await transferFiles(ftpConnection, fs, csvToJson, csvTransformer, cryptography)
});

task.start();