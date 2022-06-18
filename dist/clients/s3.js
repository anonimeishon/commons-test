"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.S3Client = void 0;
const common_1 = require("@nestjs/common");
const aws_sdk_1 = require("aws-sdk");
const aws_config_1 = require("../configs/aws.config");
const s3 = new aws_sdk_1.S3(aws_config_1.default.AWSS3Config);
let S3Client = class S3Client {
    constructor() { }
    async listFiles(folder) {
        let listParams = Object.assign(Object.assign({}, aws_config_1.default.S3ConfigDownload), { Prefix: folder });
        return await s3.listObjects(listParams).promise();
    }
    async getFile(key) {
        let params = Object.assign(Object.assign({}, aws_config_1.default.S3ConfigDownload), { Key: key });
        let rawFile = await s3.getObject(params).promise();
        let file = rawFile.Body.toString();
        return file;
    }
    async uploadFile(key, data) {
        let params = Object.assign(Object.assign({}, aws_config_1.default.S3ConfigUpload), { Key: key, Body: data });
        const response = await s3.putObject(params).promise();
        return response;
    }
};
S3Client = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [])
], S3Client);
exports.S3Client = S3Client;
//# sourceMappingURL=s3.js.map