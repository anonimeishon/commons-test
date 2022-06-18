import { Injectable } from "@nestjs/common";
import { S3 } from "aws-sdk";
import config from "../configs/aws.config";
// import * as AWS from 'aws-sdk';

// AWS.config.update(config.AWSS3Config);
const s3 = new S3(config.AWSS3Config);
@Injectable()
export class S3Client {
  constructor() {}
  async listFiles(
    folder: string
  ): Promise<S3.ListObjectsOutput | AWS.AWSError> {
    let listParams: S3.ListObjectsRequest = {
      ...config.S3ConfigDownload,
      Prefix: folder,
    };
    return await s3.listObjects(listParams).promise();
  }
  async getFile(key: string): Promise<string> {
    let params: S3.GetObjectRequest = {
      ...config.S3ConfigDownload,
      Key: key,
    };
    let rawFile = await s3.getObject(params).promise();
    let file = rawFile.Body.toString();
    return file;
  }
  async uploadFile(key: string, data: string) {
    let params: S3.PutObjectRequest = {
      ...config.S3ConfigUpload,
      Key: key,
      Body: data,
    };
    const response = await s3.putObject(params).promise();
    return response;
  }
}
