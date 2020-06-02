import * as grpc from "@grpc/grpc-js";
import * as protoLoader from "@grpc/proto-loader";
import * as path from "path";
import * as fs from 'fs';

export interface StyxOps {
    ftclient: grpc.Client;
    pullFile(arg: any):void;
    pushFile(arg: any):void;
}

export interface StyxClientArgs {
    address: string,
    tls: boolean,
    tlsCAFile: string,
    tlsKeyFile: string,
    tlsCertFile: string
}

export function NewStyxClientArgs() {
    return {
        address: 'localhost:28888',
        tls: false,
        tlsCAFile: '',
        tlsKeyFile: '',
        tlsCertFile: '',
    }
}

export class StyxClient implements StyxOps {
    ftclient: grpc.Client;
    executeClient: grpc.Client;
    extensionClient: grpc.Client;
    args: StyxClientArgs;
    constructor(args: StyxClientArgs) {
        this.ftclient = this.initFTClient();
        this.executeClient = this.initExecuteClient();
        this.extensionClient = this.initExtensionClient();
        this.args = args
    }
    private initClient(protoFilePath:string) {
        const packageDefinition = protoLoader.loadSync(protoFilePath);
        const packageObject = grpc.loadPackageDefinition(packageDefinition);
        const address = this.args.address;
        let clientCreds = () => {
            if (!this.args.tls) {
                return grpc.credentials.createInsecure();
            } else {
                return grpc.credentials.createSsl(
                    fs.readFileSync(this.args.tlsCAFile),
                    fs.readFileSync(this.args.tlsKeyFile),
                    fs.readFileSync(this.args.tlsCertFile)
                    );
            }
        };
        let client = new grpc.Client(address, clientCreds());
        return client;
    }
    private initFTClient() {
        const protoFilePath = path.join(__dirname+'/api/filetransfer/filetransfer.proto');
        let client = this.initClient(protoFilePath);
        return client;
    }
    private initExecuteClient() {
        const protoFilePath = '../styx/api/execute/execute.proto';
        const packageDefinition = protoLoader.loadSync(protoFilePath);
        const packageObject = grpc.loadPackageDefinition(packageDefinition).execute;
        const address = this.args.address;
        let clientCreds = () => {
            if (!this.args.tls) {
                return grpc.credentials.createInsecure();
            } else {
                return grpc.credentials.createSsl(
                    fs.readFileSync(this.args.tlsCAFile),
                    fs.readFileSync(this.args.tlsKeyFile),
                    fs.readFileSync(this.args.tlsCertFile)
                    );
            }
        };
        const client = new packageObject.ExecuteService(address, clientCreds);
        return client;
    }
    private initExtensionClient() {
        const protoFilePath = path.join(__dirname+'/api/filetransfer/filetransfer.proto');
        let client = this.initClient(protoFilePath);
        return client;
    }
    pullFile() {

    }
    pushFile() {

    }
}