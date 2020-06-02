// package: execute
// file: execute.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";

export class Executable extends jspb.Message { 
    getCommand(): string;
    setCommand(value: string): Executable;

    clearArgumentsList(): void;
    getArgumentsList(): Array<string>;
    setArgumentsList(value: Array<string>): Executable;
    addArguments(value: string, index?: number): string;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Executable.AsObject;
    static toObject(includeInstance: boolean, msg: Executable): Executable.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Executable, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Executable;
    static deserializeBinaryFromReader(message: Executable, reader: jspb.BinaryReader): Executable;
}

export namespace Executable {
    export type AsObject = {
        command: string,
        argumentsList: Array<string>,
    }
}

export class Output extends jspb.Message { 
    getOutput(): string;
    setOutput(value: string): Output;

    getError(): string;
    setError(value: string): Output;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Output.AsObject;
    static toObject(includeInstance: boolean, msg: Output): Output.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Output, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Output;
    static deserializeBinaryFromReader(message: Output, reader: jspb.BinaryReader): Output;
}

export namespace Output {
    export type AsObject = {
        output: string,
        error: string,
    }
}
