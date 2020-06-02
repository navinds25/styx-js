// package: extension
// file: extension.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";

export class ExecuteExtensionParams extends jspb.Message { 
    getName(): string;
    setName(value: string): ExecuteExtensionParams;


    getArgumentsMap(): jspb.Map<string, string>;
    clearArgumentsMap(): void;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ExecuteExtensionParams.AsObject;
    static toObject(includeInstance: boolean, msg: ExecuteExtensionParams): ExecuteExtensionParams.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ExecuteExtensionParams, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ExecuteExtensionParams;
    static deserializeBinaryFromReader(message: ExecuteExtensionParams, reader: jspb.BinaryReader): ExecuteExtensionParams;
}

export namespace ExecuteExtensionParams {
    export type AsObject = {
        name: string,

        argumentsMap: Array<[string, string]>,
    }
}

export class ExecuteExtensionOutput extends jspb.Message { 

    getOutputMap(): jspb.Map<string, string>;
    clearOutputMap(): void;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ExecuteExtensionOutput.AsObject;
    static toObject(includeInstance: boolean, msg: ExecuteExtensionOutput): ExecuteExtensionOutput.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ExecuteExtensionOutput, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ExecuteExtensionOutput;
    static deserializeBinaryFromReader(message: ExecuteExtensionOutput, reader: jspb.BinaryReader): ExecuteExtensionOutput;
}

export namespace ExecuteExtensionOutput {
    export type AsObject = {

        outputMap: Array<[string, string]>,
    }
}
