import * as grpc from "@grpc/grpc-js";
import * as protoLoader from "@grpc/proto-loader";
import * as path from "path";
import * as fs from 'fs';

interface StyxOps {
    ftclient: grpc.Client;
    pullFile(arg: any):void;
    pushFile(arg: any):void;
}

interface StyxClientArgs {
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
    args: StyxClientArgs;
    constructor(args: StyxClientArgs) {
        this.ftclient = this.initFTClient();
        this.args = args
    }
    private initFTClient() {
        const protoFilePath = path.join(__dirname+'/api/filetransfer/filetransfer.proto');
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
    pullFile() {

    }
    pushFile() {

    }
}