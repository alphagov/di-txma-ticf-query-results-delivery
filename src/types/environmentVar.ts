export interface EnvironmentVar {
  name:
    | 'AWS_REGION'
    | 'SECURE_DOWNLOAD_TABLE_NAME'
    | 'LINK_EXPIRY_TIME'
    | 'AUDIT_DATA_REQUEST_EVENTS_QUEUE_URL'
    | 'QUERY_RESULTS_BUCKET_NAME'
    | 'ATHENA_OUTPUT_BUCKET_NAME'
    | 'SECURE_DOWNLOAD_LINK_BASE_URL'
    | 'CLOSE_TICKET_QUEUE_URL'
    | 'NOTIFY_API_SECRETS_ARN'
    | 'SEND_TO_EMAIL_QUEUE_URL'
    | 'SECURE_DOWNLOAD_LINK_BASE_URL'
    | 'MOCK_SERVER_URL'
    | 'MOCK_SERVER_BASE_URL'
    | 'USE_NOTIFY_MOCK_SERVER'
    | 'DATABASE_TTL_HOURS'
}
