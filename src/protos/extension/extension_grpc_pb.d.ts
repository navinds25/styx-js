// package: extension
// file: extension.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "grpc";
import * as extension_pb from "./extension_pb";

interface IExtensionServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    executeExtension: IExtensionServiceService_IExecuteExtension;
}

interface IExtensionServiceService_IExecuteExtension extends grpc.MethodDefinition<extension_pb.ExecuteExtensionParams, extension_pb.ExecuteExtensionOutput> {
    path: string; // "/extension.ExtensionService/ExecuteExtension"
    requestStream: boolean; // false
    responseStream: boolean; // false
    requestSerialize: grpc.serialize<extension_pb.ExecuteExtensionParams>;
    requestDeserialize: grpc.deserialize<extension_pb.ExecuteExtensionParams>;
    responseSerialize: grpc.serialize<extension_pb.ExecuteExtensionOutput>;
    responseDeserialize: grpc.deserialize<extension_pb.ExecuteExtensionOutput>;
}

export const ExtensionServiceService: IExtensionServiceService;

export interface IExtensionServiceServer {
    executeExtension: grpc.handleUnaryCall<extension_pb.ExecuteExtensionParams, extension_pb.ExecuteExtensionOutput>;
}

export interface IExtensionServiceClient {
    executeExtension(request: extension_pb.ExecuteExtensionParams, callback: (error: grpc.ServiceError | null, response: extension_pb.ExecuteExtensionOutput) => void): grpc.ClientUnaryCall;
    executeExtension(request: extension_pb.ExecuteExtensionParams, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: extension_pb.ExecuteExtensionOutput) => void): grpc.ClientUnaryCall;
    executeExtension(request: extension_pb.ExecuteExtensionParams, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: extension_pb.ExecuteExtensionOutput) => void): grpc.ClientUnaryCall;
}

export class ExtensionServiceClient extends grpc.Client implements IExtensionServiceClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
    public executeExtension(request: extension_pb.ExecuteExtensionParams, callback: (error: grpc.ServiceError | null, response: extension_pb.ExecuteExtensionOutput) => void): grpc.ClientUnaryCall;
    public executeExtension(request: extension_pb.ExecuteExtensionParams, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: extension_pb.ExecuteExtensionOutput) => void): grpc.ClientUnaryCall;
    public executeExtension(request: extension_pb.ExecuteExtensionParams, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: extension_pb.ExecuteExtensionOutput) => void): grpc.ClientUnaryCall;
}
