import { S3 } from "aws-sdk";
import { AWSError } from "../../node_modules/aws-sdk/index";
export declare class S3Client {
    constructor();
    listFiles(folder: string): Promise<S3.ListObjectsOutput | AWSError>;
    getFile(key: string): Promise<string>;
    uploadFile(key: string, data: string): Promise<import("aws-sdk/lib/request").PromiseResult<S3.PutObjectOutput, AWSError>>;
}
