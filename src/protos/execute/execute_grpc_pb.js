// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('grpc');
var execute_pb = require('./execute_pb.js');

function serialize_execute_Executable(arg) {
  if (!(arg instanceof execute_pb.Executable)) {
    throw new Error('Expected argument of type execute.Executable');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_execute_Executable(buffer_arg) {
  return execute_pb.Executable.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_execute_Output(arg) {
  if (!(arg instanceof execute_pb.Output)) {
    throw new Error('Expected argument of type execute.Output');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_execute_Output(buffer_arg) {
  return execute_pb.Output.deserializeBinary(new Uint8Array(buffer_arg));
}


var ExecuteServiceService = exports.ExecuteServiceService = {
  run: {
    path: '/execute.ExecuteService/Run',
    requestStream: false,
    responseStream: false,
    requestType: execute_pb.Executable,
    responseType: execute_pb.Output,
    requestSerialize: serialize_execute_Executable,
    requestDeserialize: deserialize_execute_Executable,
    responseSerialize: serialize_execute_Output,
    responseDeserialize: deserialize_execute_Output,
  },
  runStreamOutput: {
    path: '/execute.ExecuteService/RunStreamOutput',
    requestStream: false,
    responseStream: true,
    requestType: execute_pb.Executable,
    responseType: execute_pb.Output,
    requestSerialize: serialize_execute_Executable,
    requestDeserialize: deserialize_execute_Executable,
    responseSerialize: serialize_execute_Output,
    responseDeserialize: deserialize_execute_Output,
  },
};

exports.ExecuteServiceClient = grpc.makeGenericClientConstructor(ExecuteServiceService);
