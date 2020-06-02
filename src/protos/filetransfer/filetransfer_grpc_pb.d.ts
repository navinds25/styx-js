// package: filetransfer
// file: filetransfer.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "grpc";
import * as filetransfer_pb from "./filetransfer_pb";
import * as filetransfer_events_pb from "./filetransfer_events_pb";

interface IFTServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    listDir: IFTServiceService_IListDir;
    listDirCondition: IFTServiceService_IListDirCondition;
}

interface IFTServiceService_IListDir extends grpc.MethodDefinition<filetransfer_events_pb.RemoteDirectory, filetransfer_events_pb.RemoteFile> {
    path: string; // "/filetransfer.FTService/ListDir"
    requestStream: boolean; // false
    responseStream: boolean; // true
    requestSerialize: grpc.serialize<filetransfer_events_pb.RemoteDirectory>;
    requestDeserialize: grpc.deserialize<filetransfer_events_pb.RemoteDirectory>;
    responseSerialize: grpc.serialize<filetransfer_events_pb.RemoteFile>;
    responseDeserialize: grpc.deserialize<filetransfer_events_pb.RemoteFile>;
}
interface IFTServiceService_IListDirCondition extends grpc.MethodDefinition<filetransfer_events_pb.RemoteDirectoryCondition, filetransfer_events_pb.RemoteFile> {
    path: string; // "/filetransfer.FTService/ListDirCondition"
    requestStream: boolean; // false
    responseStream: boolean; // true
    requestSerialize: grpc.serialize<filetransfer_events_pb.RemoteDirectoryCondition>;
    requestDeserialize: grpc.deserialize<filetransfer_events_pb.RemoteDirectoryCondition>;
    responseSerialize: grpc.serialize<filetransfer_events_pb.RemoteFile>;
    responseDeserialize: grpc.deserialize<filetransfer_events_pb.RemoteFile>;
}

export const FTServiceService: IFTServiceService;

export interface IFTServiceServer {
    listDir: grpc.handleServerStreamingCall<filetransfer_events_pb.RemoteDirectory, filetransfer_events_pb.RemoteFile>;
    listDirCondition: grpc.handleServerStreamingCall<filetransfer_events_pb.RemoteDirectoryCondition, filetransfer_events_pb.RemoteFile>;
}

export interface IFTServiceClient {
    listDir(request: filetransfer_events_pb.RemoteDirectory, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<filetransfer_events_pb.RemoteFile>;
    listDir(request: filetransfer_events_pb.RemoteDirectory, metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<filetransfer_events_pb.RemoteFile>;
    listDirCondition(request: filetransfer_events_pb.RemoteDirectoryCondition, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<filetransfer_events_pb.RemoteFile>;
    listDirCondition(request: filetransfer_events_pb.RemoteDirectoryCondition, metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<filetransfer_events_pb.RemoteFile>;
}

export class FTServiceClient extends grpc.Client implements IFTServiceClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
    public listDir(request: filetransfer_events_pb.RemoteDirectory, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<filetransfer_events_pb.RemoteFile>;
    public listDir(request: filetransfer_events_pb.RemoteDirectory, metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<filetransfer_events_pb.RemoteFile>;
    public listDirCondition(request: filetransfer_events_pb.RemoteDirectoryCondition, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<filetransfer_events_pb.RemoteFile>;
    public listDirCondition(request: filetransfer_events_pb.RemoteDirectoryCondition, metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<filetransfer_events_pb.RemoteFile>;
}

interface IRemoteFTServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    transferFile: IRemoteFTServiceService_ITransferFile;
    transferCondition: IRemoteFTServiceService_ITransferCondition;
}

interface IRemoteFTServiceService_ITransferFile extends grpc.MethodDefinition<filetransfer_events_pb.RemoteDirectoryTransfer, filetransfer_events_pb.TransferStatus> {
    path: string; // "/filetransfer.RemoteFTService/TransferFile"
    requestStream: boolean; // false
    responseStream: boolean; // true
    requestSerialize: grpc.serialize<filetransfer_events_pb.RemoteDirectoryTransfer>;
    requestDeserialize: grpc.deserialize<filetransfer_events_pb.RemoteDirectoryTransfer>;
    responseSerialize: grpc.serialize<filetransfer_events_pb.TransferStatus>;
    responseDeserialize: grpc.deserialize<filetransfer_events_pb.TransferStatus>;
}
interface IRemoteFTServiceService_ITransferCondition extends grpc.MethodDefinition<filetransfer_events_pb.RemoteDirectoryConditionTransfer, filetransfer_events_pb.TransferStatus> {
    path: string; // "/filetransfer.RemoteFTService/TransferCondition"
    requestStream: boolean; // false
    responseStream: boolean; // true
    requestSerialize: grpc.serialize<filetransfer_events_pb.RemoteDirectoryConditionTransfer>;
    requestDeserialize: grpc.deserialize<filetransfer_events_pb.RemoteDirectoryConditionTransfer>;
    responseSerialize: grpc.serialize<filetransfer_events_pb.TransferStatus>;
    responseDeserialize: grpc.deserialize<filetransfer_events_pb.TransferStatus>;
}

export const RemoteFTServiceService: IRemoteFTServiceService;

export interface IRemoteFTServiceServer {
    transferFile: grpc.handleServerStreamingCall<filetransfer_events_pb.RemoteDirectoryTransfer, filetransfer_events_pb.TransferStatus>;
    transferCondition: grpc.handleServerStreamingCall<filetransfer_events_pb.RemoteDirectoryConditionTransfer, filetransfer_events_pb.TransferStatus>;
}

export interface IRemoteFTServiceClient {
    transferFile(request: filetransfer_events_pb.RemoteDirectoryTransfer, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<filetransfer_events_pb.TransferStatus>;
    transferFile(request: filetransfer_events_pb.RemoteDirectoryTransfer, metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<filetransfer_events_pb.TransferStatus>;
    transferCondition(request: filetransfer_events_pb.RemoteDirectoryConditionTransfer, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<filetransfer_events_pb.TransferStatus>;
    transferCondition(request: filetransfer_events_pb.RemoteDirectoryConditionTransfer, metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<filetransfer_events_pb.TransferStatus>;
}

export class RemoteFTServiceClient extends grpc.Client implements IRemoteFTServiceClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
    public transferFile(request: filetransfer_events_pb.RemoteDirectoryTransfer, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<filetransfer_events_pb.TransferStatus>;
    public transferFile(request: filetransfer_events_pb.RemoteDirectoryTransfer, metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<filetransfer_events_pb.TransferStatus>;
    public transferCondition(request: filetransfer_events_pb.RemoteDirectoryConditionTransfer, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<filetransfer_events_pb.TransferStatus>;
    public transferCondition(request: filetransfer_events_pb.RemoteDirectoryConditionTransfer, metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<filetransfer_events_pb.TransferStatus>;
}
