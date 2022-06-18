declare const _default: {
    HTTPEndpoint: {
        errorReporting: string;
    };
    AWSEndpoint: {
        s3Endpoint: {
            endpoint: string;
        };
        sqsEndpoint: {
            endpoint: string;
        };
    };
    AWSSQSConfig: {
        region: string;
        accessKeyId: string;
        secretAccessKey: string;
        endpoint: string;
    };
    AWSS3Config: {
        region: string;
        accessKeyId: string;
        secretAccessKey: string;
        endpoint: string;
        s3ForcePathStyle: boolean;
    };
    S3ListConfig: {
        Bucket: string;
    };
    S3GetConfig: {
        Bucket: string;
        Key: any;
    };
    S3ConfigDownload: {
        Bucket: string;
    };
    S3ConfigUpload: {
        Bucket: string;
    };
};
export default _default;
