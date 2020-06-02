// package: nodeconfig
// file: node_config_events.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";

export class GRPCAuth extends jspb.Message { 
    getTlsCert(): string;
    setTlsCert(value: string): GRPCAuth;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GRPCAuth.AsObject;
    static toObject(includeInstance: boolean, msg: GRPCAuth): GRPCAuth.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GRPCAuth, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GRPCAuth;
    static deserializeBinaryFromReader(message: GRPCAuth, reader: jspb.BinaryReader): GRPCAuth;
}

export namespace GRPCAuth {
    export type AsObject = {
        tlsCert: string,
    }
}

export class SFTPAuth extends jspb.Message { 
    getSftpAuthType(): SFTPAuth.SFTPAuthType;
    setSftpAuthType(value: SFTPAuth.SFTPAuthType): SFTPAuth;

    getUsername(): string;
    setUsername(value: string): SFTPAuth;

    getPassword(): string;
    setPassword(value: string): SFTPAuth;

    getKey(): string;
    setKey(value: string): SFTPAuth;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SFTPAuth.AsObject;
    static toObject(includeInstance: boolean, msg: SFTPAuth): SFTPAuth.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SFTPAuth, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SFTPAuth;
    static deserializeBinaryFromReader(message: SFTPAuth, reader: jspb.BinaryReader): SFTPAuth;
}

export namespace SFTPAuth {
    export type AsObject = {
        sftpAuthType: SFTPAuth.SFTPAuthType,
        username: string,
        password: string,
        key: string,
    }

    export enum SFTPAuthType {
    SFTP_AUTH_TYPE_UNSPECIFIED = 0,
    PASSWORD = 1,
    KEYBASED = 2,
    KEYPASSPHRASE = 3,
    }

}

export class NodeConfig extends jspb.Message { 
    getNodeId(): string;
    setNodeId(value: string): NodeConfig;

    getNodetype(): NodeConfig.NodeType;
    setNodetype(value: NodeConfig.NodeType): NodeConfig;

    getGrpcAddress(): string;
    setGrpcAddress(value: string): NodeConfig;

    getSftpAddress(): string;
    setSftpAddress(value: string): NodeConfig;

    getSz(): NodeConfig.SZ;
    setSz(value: NodeConfig.SZ): NodeConfig;


    hasGrpcAuth(): boolean;
    clearGrpcAuth(): void;
    getGrpcAuth(): GRPCAuth | undefined;
    setGrpcAuth(value?: GRPCAuth): NodeConfig;


    hasSftpAuth(): boolean;
    clearSftpAuth(): void;
    getSftpAuth(): SFTPAuth | undefined;
    setSftpAuth(value?: SFTPAuth): NodeConfig;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): NodeConfig.AsObject;
    static toObject(includeInstance: boolean, msg: NodeConfig): NodeConfig.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: NodeConfig, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): NodeConfig;
    static deserializeBinaryFromReader(message: NodeConfig, reader: jspb.BinaryReader): NodeConfig;
}

export namespace NodeConfig {
    export type AsObject = {
        nodeId: string,
        nodetype: NodeConfig.NodeType,
        grpcAddress: string,
        sftpAddress: string,
        sz: NodeConfig.SZ,
        grpcAuth?: GRPCAuth.AsObject,
        sftpAuth?: SFTPAuth.AsObject,
    }

    export enum NodeType {
    NODETYPE_UNSPECIFIED = 0,
    NODETYPE_MASTER = 1,
    NODETYPE_NODE = 2,
    NODETYPE_EXTERNAL = 3,
    }

    export enum SZ {
    SZ_UNSPECIFIED = 0,
    SZ_EXTERNAL = 10,
    SZ_DMZ = 20,
    SZ_APP = 30,
    SZ_DATA = 40,
    SZ_CONTROLPLANE = 50,
    }

}

export class AddNodeConfigResponse extends jspb.Message { 
    getNodeId(): string;
    setNodeId(value: string): AddNodeConfigResponse;

    getNodeEntryMessage(): string;
    setNodeEntryMessage(value: string): AddNodeConfigResponse;

    getNodeEntryStatus(): AddNodeConfigResponse.NodeEntryStatus;
    setNodeEntryStatus(value: AddNodeConfigResponse.NodeEntryStatus): AddNodeConfigResponse;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): AddNodeConfigResponse.AsObject;
    static toObject(includeInstance: boolean, msg: AddNodeConfigResponse): AddNodeConfigResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: AddNodeConfigResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): AddNodeConfigResponse;
    static deserializeBinaryFromReader(message: AddNodeConfigResponse, reader: jspb.BinaryReader): AddNodeConfigResponse;
}

export namespace AddNodeConfigResponse {
    export type AsObject = {
        nodeId: string,
        nodeEntryMessage: string,
        nodeEntryStatus: AddNodeConfigResponse.NodeEntryStatus,
    }

    export enum NodeEntryStatus {
    NODE_ENTRY_STATUS_UNSPECIFIED = 0,
    NODE_ENTRY_STATUS_SUCCESS = 1,
    NODE_ENTRY_STATUS_ERROR = 2,
    }

}

export class NodeID extends jspb.Message { 
    getNodeId(): string;
    setNodeId(value: string): NodeID;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): NodeID.AsObject;
    static toObject(includeInstance: boolean, msg: NodeID): NodeID.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: NodeID, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): NodeID;
    static deserializeBinaryFromReader(message: NodeID, reader: jspb.BinaryReader): NodeID;
}

export namespace NodeID {
    export type AsObject = {
        nodeId: string,
    }
}

export class ListNodeConfigRequest extends jspb.Message { 

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ListNodeConfigRequest.AsObject;
    static toObject(includeInstance: boolean, msg: ListNodeConfigRequest): ListNodeConfigRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ListNodeConfigRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ListNodeConfigRequest;
    static deserializeBinaryFromReader(message: ListNodeConfigRequest, reader: jspb.BinaryReader): ListNodeConfigRequest;
}

export namespace ListNodeConfigRequest {
    export type AsObject = {
    }
}

export class AllNodeConfig extends jspb.Message { 
    clearAllNodeConfigList(): void;
    getAllNodeConfigList(): Array<NodeConfig>;
    setAllNodeConfigList(value: Array<NodeConfig>): AllNodeConfig;
    addAllNodeConfig(value?: NodeConfig, index?: number): NodeConfig;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): AllNodeConfig.AsObject;
    static toObject(includeInstance: boolean, msg: AllNodeConfig): AllNodeConfig.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: AllNodeConfig, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): AllNodeConfig;
    static deserializeBinaryFromReader(message: AllNodeConfig, reader: jspb.BinaryReader): AllNodeConfig;
}

export namespace AllNodeConfig {
    export type AsObject = {
        allNodeConfigList: Array<NodeConfig.AsObject>,
    }
}
