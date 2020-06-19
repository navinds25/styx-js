import * as grpc from 'grpc';
import * as fs from 'fs';
import { ExecuteServiceClient } from './src/protos/execute/execute_grpc_pb';
import * as executeDefinitions from './src/protos/execute/execute_pb';
import { ExtensionServiceClient } from './src/protos/extension/extension_grpc_pb';

export interface StyxOps {
    executeClient: ExecuteServiceClient;
    extensionClient: ExtensionServiceClient;
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
    //ftclient: grpc.Client;
    executeClient: ExecuteServiceClient;
    extensionClient: ExtensionServiceClient;
    args: StyxClientArgs;
    constructor(args: StyxClientArgs) {
        //this.ftclient = this.initFTClient();
        this.executeClient = this.initExecuteClient();
        this.extensionClient = this.initExtensionClient();
        this.args = args
    }
    private initCreateSSL() {
        return grpc.credentials.createSsl(
                fs.readFileSync(this.args.tlsCAFile),
                fs.readFileSync(this.args.tlsKeyFile),
                fs.readFileSync(this.args.tlsCertFile));
    }
    private initExecuteClient() {
        return new ExecuteServiceClient(
            this.args.address,
            this.initCreateSSL());
    }
    private initExtensionClient() {
        return new ExtensionServiceClient(
            this.args.address,
            this.initCreateSSL());
    }
}