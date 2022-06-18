export default {
  HTTPEndpoint: {
    errorReporting: process.env.ERROR_REPORT_HOST || "http://localhost:3001",
  },
  AWSEndpoint: {
    s3Endpoint: {
      endpoint: process.env.S3_ENDPOINT || "http://localhost:4566",
    },
    sqsEndpoint: {
      endpoint:
        process.env.SQS_QUEUE_URL || "http://localhost:4566/000000000000/test",
    },
  },
  AWSSQSConfig: {
    region: process.env.SQS_REGION || "ap-south-1",
    accessKeyId: process.env.SQS_ACCESS_KEY_ID || "localstack",
    secretAccessKey: process.env.SQS_SECRET_ACCESS_KEY || "localstack",
    endpoint: process.env.SQS_ENDPOINT || "http://localhost:4566",
  },
  AWSS3Config: {
    region: process.env.S3_REGION || "ap-south-1",
    accessKeyId: process.env.S3_ACCESS_KEY_ID || "localstack",
    secretAccessKey: process.env.S3_SECRET_ACCESS_KEY || "localstack",
    endpoint: process.env.S3_ENDPOINT || "http://localhost:4566",
    s3ForcePathStyle: true,
  },
  S3ListConfig: {
    Bucket: process.env.S3_BUCKET || "fileprocess",
  },
  S3GetConfig: {
    Bucket: process.env.S3_BUCKET || "fileprocess",
    Key: null,
  },
  S3ConfigDownload: {
    Bucket: process.env.S3_DOWNLOAD_BUCKET || "fileprocess",
  },
  S3ConfigUpload: {
    Bucket: process.env.S3_UPLOAD_BUCKET || "fileprocess",
  },
};
