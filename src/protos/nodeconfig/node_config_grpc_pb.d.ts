// package: nodeconfig
// file: node_config.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "grpc";
import * as node_config_pb from "./node_config_pb";
import * as node_config_events_pb from "./node_config_events_pb";

interface INodeConfigServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    addNodeConfig: INodeConfigServiceService_IAddNodeConfig;
    getNodeConfigByID: INodeConfigServiceService_IGetNodeConfigByID;
    listNodeConfig: INodeConfigServiceService_IListNodeConfig;
    addNode: INodeConfigServiceService_IAddNode;
}

interface INodeConfigServiceService_IAddNodeConfig extends grpc.MethodDefinition<node_config_events_pb.NodeConfig, node_config_events_pb.AddNodeConfigResponse> {
    path: string; // "/nodeconfig.NodeConfigService/AddNodeConfig"
    requestStream: boolean; // false
    responseStream: boolean; // false
    requestSerialize: grpc.serialize<node_config_events_pb.NodeConfig>;
    requestDeserialize: grpc.deserialize<node_config_events_pb.NodeConfig>;
    responseSerialize: grpc.serialize<node_config_events_pb.AddNodeConfigResponse>;
    responseDeserialize: grpc.deserialize<node_config_events_pb.AddNodeConfigResponse>;
}
interface INodeConfigServiceService_IGetNodeConfigByID extends grpc.MethodDefinition<node_config_events_pb.NodeID, node_config_events_pb.NodeConfig> {
    path: string; // "/nodeconfig.NodeConfigService/GetNodeConfigByID"
    requestStream: boolean; // false
    responseStream: boolean; // false
    requestSerialize: grpc.serialize<node_config_events_pb.NodeID>;
    requestDeserialize: grpc.deserialize<node_config_events_pb.NodeID>;
    responseSerialize: grpc.serialize<node_config_events_pb.NodeConfig>;
    responseDeserialize: grpc.deserialize<node_config_events_pb.NodeConfig>;
}
interface INodeConfigServiceService_IListNodeConfig extends grpc.MethodDefinition<node_config_events_pb.ListNodeConfigRequest, node_config_events_pb.AllNodeConfig> {
    path: string; // "/nodeconfig.NodeConfigService/ListNodeConfig"
    requestStream: boolean; // false
    responseStream: boolean; // false
    requestSerialize: grpc.serialize<node_config_events_pb.ListNodeConfigRequest>;
    requestDeserialize: grpc.deserialize<node_config_events_pb.ListNodeConfigRequest>;
    responseSerialize: grpc.serialize<node_config_events_pb.AllNodeConfig>;
    responseDeserialize: grpc.deserialize<node_config_events_pb.AllNodeConfig>;
}
interface INodeConfigServiceService_IAddNode extends grpc.MethodDefinition<node_config_events_pb.NodeConfig, node_config_events_pb.AllNodeConfig> {
    path: string; // "/nodeconfig.NodeConfigService/AddNode"
    requestStream: boolean; // false
    responseStream: boolean; // false
    requestSerialize: grpc.serialize<node_config_events_pb.NodeConfig>;
    requestDeserialize: grpc.deserialize<node_config_events_pb.NodeConfig>;
    responseSerialize: grpc.serialize<node_config_events_pb.AllNodeConfig>;
    responseDeserialize: grpc.deserialize<node_config_events_pb.AllNodeConfig>;
}

export const NodeConfigServiceService: INodeConfigServiceService;

export interface INodeConfigServiceServer {
    addNodeConfig: grpc.handleUnaryCall<node_config_events_pb.NodeConfig, node_config_events_pb.AddNodeConfigResponse>;
    getNodeConfigByID: grpc.handleUnaryCall<node_config_events_pb.NodeID, node_config_events_pb.NodeConfig>;
    listNodeConfig: grpc.handleUnaryCall<node_config_events_pb.ListNodeConfigRequest, node_config_events_pb.AllNodeConfig>;
    addNode: grpc.handleUnaryCall<node_config_events_pb.NodeConfig, node_config_events_pb.AllNodeConfig>;
}

export interface INodeConfigServiceClient {
    addNodeConfig(request: node_config_events_pb.NodeConfig, callback: (error: grpc.ServiceError | null, response: node_config_events_pb.AddNodeConfigResponse) => void): grpc.ClientUnaryCall;
    addNodeConfig(request: node_config_events_pb.NodeConfig, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: node_config_events_pb.AddNodeConfigResponse) => void): grpc.ClientUnaryCall;
    addNodeConfig(request: node_config_events_pb.NodeConfig, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: node_config_events_pb.AddNodeConfigResponse) => void): grpc.ClientUnaryCall;
    getNodeConfigByID(request: node_config_events_pb.NodeID, callback: (error: grpc.ServiceError | null, response: node_config_events_pb.NodeConfig) => void): grpc.ClientUnaryCall;
    getNodeConfigByID(request: node_config_events_pb.NodeID, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: node_config_events_pb.NodeConfig) => void): grpc.ClientUnaryCall;
    getNodeConfigByID(request: node_config_events_pb.NodeID, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: node_config_events_pb.NodeConfig) => void): grpc.ClientUnaryCall;
    listNodeConfig(request: node_config_events_pb.ListNodeConfigRequest, callback: (error: grpc.ServiceError | null, response: node_config_events_pb.AllNodeConfig) => void): grpc.ClientUnaryCall;
    listNodeConfig(request: node_config_events_pb.ListNodeConfigRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: node_config_events_pb.AllNodeConfig) => void): grpc.ClientUnaryCall;
    listNodeConfig(request: node_config_events_pb.ListNodeConfigRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: node_config_events_pb.AllNodeConfig) => void): grpc.ClientUnaryCall;
    addNode(request: node_config_events_pb.NodeConfig, callback: (error: grpc.ServiceError | null, response: node_config_events_pb.AllNodeConfig) => void): grpc.ClientUnaryCall;
    addNode(request: node_config_events_pb.NodeConfig, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: node_config_events_pb.AllNodeConfig) => void): grpc.ClientUnaryCall;
    addNode(request: node_config_events_pb.NodeConfig, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: node_config_events_pb.AllNodeConfig) => void): grpc.ClientUnaryCall;
}

export class NodeConfigServiceClient extends grpc.Client implements INodeConfigServiceClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
    public addNodeConfig(request: node_config_events_pb.NodeConfig, callback: (error: grpc.ServiceError | null, response: node_config_events_pb.AddNodeConfigResponse) => void): grpc.ClientUnaryCall;
    public addNodeConfig(request: node_config_events_pb.NodeConfig, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: node_config_events_pb.AddNodeConfigResponse) => void): grpc.ClientUnaryCall;
    public addNodeConfig(request: node_config_events_pb.NodeConfig, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: node_config_events_pb.AddNodeConfigResponse) => void): grpc.ClientUnaryCall;
    public getNodeConfigByID(request: node_config_events_pb.NodeID, callback: (error: grpc.ServiceError | null, response: node_config_events_pb.NodeConfig) => void): grpc.ClientUnaryCall;
    public getNodeConfigByID(request: node_config_events_pb.NodeID, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: node_config_events_pb.NodeConfig) => void): grpc.ClientUnaryCall;
    public getNodeConfigByID(request: node_config_events_pb.NodeID, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: node_config_events_pb.NodeConfig) => void): grpc.ClientUnaryCall;
    public listNodeConfig(request: node_config_events_pb.ListNodeConfigRequest, callback: (error: grpc.ServiceError | null, response: node_config_events_pb.AllNodeConfig) => void): grpc.ClientUnaryCall;
    public listNodeConfig(request: node_config_events_pb.ListNodeConfigRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: node_config_events_pb.AllNodeConfig) => void): grpc.ClientUnaryCall;
    public listNodeConfig(request: node_config_events_pb.ListNodeConfigRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: node_config_events_pb.AllNodeConfig) => void): grpc.ClientUnaryCall;
    public addNode(request: node_config_events_pb.NodeConfig, callback: (error: grpc.ServiceError | null, response: node_config_events_pb.AllNodeConfig) => void): grpc.ClientUnaryCall;
    public addNode(request: node_config_events_pb.NodeConfig, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: node_config_events_pb.AllNodeConfig) => void): grpc.ClientUnaryCall;
    public addNode(request: node_config_events_pb.NodeConfig, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: node_config_events_pb.AllNodeConfig) => void): grpc.ClientUnaryCall;
}
