// package: execute
// file: execute.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "grpc";
import * as execute_pb from "./execute_pb";

interface IExecuteServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    run: IExecuteServiceService_IRun;
    runStreamOutput: IExecuteServiceService_IRunStreamOutput;
}

interface IExecuteServiceService_IRun extends grpc.MethodDefinition<execute_pb.Executable, execute_pb.Output> {
    path: string; // "/execute.ExecuteService/Run"
    requestStream: boolean; // false
    responseStream: boolean; // false
    requestSerialize: grpc.serialize<execute_pb.Executable>;
    requestDeserialize: grpc.deserialize<execute_pb.Executable>;
    responseSerialize: grpc.serialize<execute_pb.Output>;
    responseDeserialize: grpc.deserialize<execute_pb.Output>;
}
interface IExecuteServiceService_IRunStreamOutput extends grpc.MethodDefinition<execute_pb.Executable, execute_pb.Output> {
    path: string; // "/execute.ExecuteService/RunStreamOutput"
    requestStream: boolean; // false
    responseStream: boolean; // true
    requestSerialize: grpc.serialize<execute_pb.Executable>;
    requestDeserialize: grpc.deserialize<execute_pb.Executable>;
    responseSerialize: grpc.serialize<execute_pb.Output>;
    responseDeserialize: grpc.deserialize<execute_pb.Output>;
}

export const ExecuteServiceService: IExecuteServiceService;

export interface IExecuteServiceServer {
    run: grpc.handleUnaryCall<execute_pb.Executable, execute_pb.Output>;
    runStreamOutput: grpc.handleServerStreamingCall<execute_pb.Executable, execute_pb.Output>;
}

export interface IExecuteServiceClient {
    run(request: execute_pb.Executable, callback: (error: grpc.ServiceError | null, response: execute_pb.Output) => void): grpc.ClientUnaryCall;
    run(request: execute_pb.Executable, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: execute_pb.Output) => void): grpc.ClientUnaryCall;
    run(request: execute_pb.Executable, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: execute_pb.Output) => void): grpc.ClientUnaryCall;
    runStreamOutput(request: execute_pb.Executable, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<execute_pb.Output>;
    runStreamOutput(request: execute_pb.Executable, metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<execute_pb.Output>;
}

export class ExecuteServiceClient extends grpc.Client implements IExecuteServiceClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
    public run(request: execute_pb.Executable, callback: (error: grpc.ServiceError | null, response: execute_pb.Output) => void): grpc.ClientUnaryCall;
    public run(request: execute_pb.Executable, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: execute_pb.Output) => void): grpc.ClientUnaryCall;
    public run(request: execute_pb.Executable, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: execute_pb.Output) => void): grpc.ClientUnaryCall;
    public runStreamOutput(request: execute_pb.Executable, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<execute_pb.Output>;
    public runStreamOutput(request: execute_pb.Executable, metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<execute_pb.Output>;
}
