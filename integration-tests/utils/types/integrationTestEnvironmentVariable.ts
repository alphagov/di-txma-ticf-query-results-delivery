export type IntegrationTestEnvironmentVariable = {
  name:
    | 'DOWNLOAD_PAGE_BASE_URL'
    | 'AWS_REGION'
    | 'DOWNLOAD_DYNAMODB_TABLE_NAME'
    | 'S3_RESULTS_KEY'
    | 'S3_RESULTS_BUCKET'
    | 'ATHENA_OUTPUT_BUCKET'
    | 'QUERY_COMPLETED_QUEUE_URL'
    | 'RECIPIENT_EMAIL'
    | 'RECIPIENT_NAME'
}
