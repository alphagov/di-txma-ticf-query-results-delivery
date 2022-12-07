import { PutItemCommand, PutItemCommandInput } from '@aws-sdk/client-dynamodb'
import { ddbClient } from '../../sharedServices/dynamoDb/dynamoDbClient'
import {
  currentDateEpochMilliseconds,
  currentDateEpochSeconds
} from '../../utils/currentDateEpoch'
import { getEnv } from '../../utils/getEnv'

export const writeOutSecureDownloadRecord = async (parameters: {
  athenaQueryId: string
  downloadHash: string
  zendeskId: string
}) => {
  const recordExpiryTimeSeconds =
    currentDateEpochSeconds() + parseInt(getEnv('DATABASE_TTL_HOURS')) * 60 * 60

  const putCommand: PutItemCommandInput = {
    TableName: getEnv('SECURE_DOWNLOAD_TABLE_NAME'),
    Item: {
      ttl: { N: recordExpiryTimeSeconds.toString() },
      downloadHash: { S: parameters.downloadHash },
      downloadsRemaining: { N: '2' },
      s3ResultsKey: { S: `${parameters.athenaQueryId}.csv` },
      s3ResultsBucket: { S: getEnv('QUERY_RESULTS_BUCKET_NAME') },
      zendeskId: { S: parameters.zendeskId },
      createdDate: { N: currentDateEpochMilliseconds().toString() }
    }
  }

  console.log(
    `Writing secure download record for zendeskId ${parameters.zendeskId}`
  )

  await ddbClient.send(new PutItemCommand(putCommand))
}
