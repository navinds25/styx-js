import * as grpc from 'grpc';
import * as fs from 'fs';
import * as executeService from './src/protos/execute/execute_grpc_pb';
import * as executeDefinitions from './src/protos/execute/execute_pb';

let grpcCreds = grpc.credentials.createSsl(
    fs.readFileSync('../styx/bin/ca.pem'),
    fs.readFileSync('../styx/bin/styxnode-key.pem'),
    fs.readFileSync('../styx/bin/styxnode.pem'),
);
var client = new executeService.ExecuteServiceClient('127.0.0.1:28888', grpc.credentials.createSsl(fs.readFileSync('../styx/bin/ca.pem')
));
const cmdArgs = new executeDefinitions.Executable();
cmdArgs.setCommand('powershell.exe');
//cmdArgs.setArgumentsList([ 'C:\\Program Files\\Adobe\\Adobe InDesign Server 2020\\InDesignServer.exe', '-port', '10001']);
cmdArgs.setArgumentsList(['echo', 'hello'])
//let output = client.run(cmdArgs, (error, resp) => {
//    console.log(error);
//    const out = JSON.stringify(resp.toObject());
//    console.log(out);
//});
async function f() {
    let output;
    client.run(cmdArgs, (error, resp) => {
    console.log(error);
    const out = JSON.stringify(resp.toObject());
    output=out
});
    console.log(output);
    return output;
}
const finalOutput = f();
console.log(finalOutput);