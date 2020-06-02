// package: filetransfer
// file: filetransfer_events.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";

export class RemoteDirectory extends jspb.Message { 
    getSourcePath(): string;
    setSourcePath(value: string): RemoteDirectory;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): RemoteDirectory.AsObject;
    static toObject(includeInstance: boolean, msg: RemoteDirectory): RemoteDirectory.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: RemoteDirectory, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): RemoteDirectory;
    static deserializeBinaryFromReader(message: RemoteDirectory, reader: jspb.BinaryReader): RemoteDirectory;
}

export namespace RemoteDirectory {
    export type AsObject = {
        sourcePath: string,
    }
}

export class RemoteFile extends jspb.Message { 
    getSourcefile(): string;
    setSourcefile(value: string): RemoteFile;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): RemoteFile.AsObject;
    static toObject(includeInstance: boolean, msg: RemoteFile): RemoteFile.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: RemoteFile, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): RemoteFile;
    static deserializeBinaryFromReader(message: RemoteFile, reader: jspb.BinaryReader): RemoteFile;
}

export namespace RemoteFile {
    export type AsObject = {
        sourcefile: string,
    }
}

export class TimeValues extends jspb.Message { 
    getTimeStart(): number;
    setTimeStart(value: number): TimeValues;

    getTimeEnd(): number;
    setTimeEnd(value: number): TimeValues;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): TimeValues.AsObject;
    static toObject(includeInstance: boolean, msg: TimeValues): TimeValues.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: TimeValues, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): TimeValues;
    static deserializeBinaryFromReader(message: TimeValues, reader: jspb.BinaryReader): TimeValues;
}

export namespace TimeValues {
    export type AsObject = {
        timeStart: number,
        timeEnd: number,
    }
}

export class Condition extends jspb.Message { 
    getConditionType(): Condition.ConditionType;
    setConditionType(value: Condition.ConditionType): Condition;


    hasTimeValues(): boolean;
    clearTimeValues(): void;
    getTimeValues(): TimeValues | undefined;
    setTimeValues(value?: TimeValues): Condition;


    hasPattern(): boolean;
    clearPattern(): void;
    getPattern(): string;
    setPattern(value: string): Condition;


    getConditionValueCase(): Condition.ConditionValueCase;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Condition.AsObject;
    static toObject(includeInstance: boolean, msg: Condition): Condition.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Condition, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Condition;
    static deserializeBinaryFromReader(message: Condition, reader: jspb.BinaryReader): Condition;
}

export namespace Condition {
    export type AsObject = {
        conditionType: Condition.ConditionType,
        timeValues?: TimeValues.AsObject,
        pattern: string,
    }

    export enum ConditionType {
    CONDITION_TYPE_UNSPECIFIED = 0,
    TIME = 1,
    TIME_RANGE = 2,
    REGEX = 3,
    GLOB = 4,
    }


    export enum ConditionValueCase {
        CONDITION_VALUE_NOT_SET = 0,
    
    TIME_VALUES = 2,

    PATTERN = 3,

    }

}

export class RemoteDirectoryCondition extends jspb.Message { 
    getSourcePath(): string;
    setSourcePath(value: string): RemoteDirectoryCondition;

    clearConditionList(): void;
    getConditionList(): Array<Condition>;
    setConditionList(value: Array<Condition>): RemoteDirectoryCondition;
    addCondition(value?: Condition, index?: number): Condition;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): RemoteDirectoryCondition.AsObject;
    static toObject(includeInstance: boolean, msg: RemoteDirectoryCondition): RemoteDirectoryCondition.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: RemoteDirectoryCondition, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): RemoteDirectoryCondition;
    static deserializeBinaryFromReader(message: RemoteDirectoryCondition, reader: jspb.BinaryReader): RemoteDirectoryCondition;
}

export namespace RemoteDirectoryCondition {
    export type AsObject = {
        sourcePath: string,
        conditionList: Array<Condition.AsObject>,
    }
}

export class RemoteDirectoryTransfer extends jspb.Message { 
    getTransferType(): RemoteDirectoryTransfer.TransferType;
    setTransferType(value: RemoteDirectoryTransfer.TransferType): RemoteDirectoryTransfer;

    getSourcePath(): string;
    setSourcePath(value: string): RemoteDirectoryTransfer;

    getDestinationPath(): string;
    setDestinationPath(value: string): RemoteDirectoryTransfer;

    getRemoteServer(): string;
    setRemoteServer(value: string): RemoteDirectoryTransfer;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): RemoteDirectoryTransfer.AsObject;
    static toObject(includeInstance: boolean, msg: RemoteDirectoryTransfer): RemoteDirectoryTransfer.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: RemoteDirectoryTransfer, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): RemoteDirectoryTransfer;
    static deserializeBinaryFromReader(message: RemoteDirectoryTransfer, reader: jspb.BinaryReader): RemoteDirectoryTransfer;
}

export namespace RemoteDirectoryTransfer {
    export type AsObject = {
        transferType: RemoteDirectoryTransfer.TransferType,
        sourcePath: string,
        destinationPath: string,
        remoteServer: string,
    }

    export enum TransferType {
    TRANSFER_TYPE_UNSPECIFIED = 0,
    PULL = 1,
    PUSH = 2,
    }

}

export class RemoteDirectoryConditionTransfer extends jspb.Message { 

    hasRemoteDirectory(): boolean;
    clearRemoteDirectory(): void;
    getRemoteDirectory(): RemoteDirectoryTransfer | undefined;
    setRemoteDirectory(value?: RemoteDirectoryTransfer): RemoteDirectoryConditionTransfer;


    hasPrecondition(): boolean;
    clearPrecondition(): void;
    getPrecondition(): Condition | undefined;
    setPrecondition(value?: Condition): RemoteDirectoryConditionTransfer;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): RemoteDirectoryConditionTransfer.AsObject;
    static toObject(includeInstance: boolean, msg: RemoteDirectoryConditionTransfer): RemoteDirectoryConditionTransfer.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: RemoteDirectoryConditionTransfer, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): RemoteDirectoryConditionTransfer;
    static deserializeBinaryFromReader(message: RemoteDirectoryConditionTransfer, reader: jspb.BinaryReader): RemoteDirectoryConditionTransfer;
}

export namespace RemoteDirectoryConditionTransfer {
    export type AsObject = {
        remoteDirectory?: RemoteDirectoryTransfer.AsObject,
        precondition?: Condition.AsObject,
    }
}

export class TransferStatus extends jspb.Message { 
    getTransferredFile(): string;
    setTransferredFile(value: string): TransferStatus;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): TransferStatus.AsObject;
    static toObject(includeInstance: boolean, msg: TransferStatus): TransferStatus.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: TransferStatus, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): TransferStatus;
    static deserializeBinaryFromReader(message: TransferStatus, reader: jspb.BinaryReader): TransferStatus;
}

export namespace TransferStatus {
    export type AsObject = {
        transferredFile: string,
    }
}
