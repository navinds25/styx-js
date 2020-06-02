// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('grpc');
var extension_pb = require('./extension_pb.js');

function serialize_extension_ExecuteExtensionOutput(arg) {
  if (!(arg instanceof extension_pb.ExecuteExtensionOutput)) {
    throw new Error('Expected argument of type extension.ExecuteExtensionOutput');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_extension_ExecuteExtensionOutput(buffer_arg) {
  return extension_pb.ExecuteExtensionOutput.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_extension_ExecuteExtensionParams(arg) {
  if (!(arg instanceof extension_pb.ExecuteExtensionParams)) {
    throw new Error('Expected argument of type extension.ExecuteExtensionParams');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_extension_ExecuteExtensionParams(buffer_arg) {
  return extension_pb.ExecuteExtensionParams.deserializeBinary(new Uint8Array(buffer_arg));
}


var ExtensionServiceService = exports.ExtensionServiceService = {
  executeExtension: {
    path: '/extension.ExtensionService/ExecuteExtension',
    requestStream: false,
    responseStream: false,
    requestType: extension_pb.ExecuteExtensionParams,
    responseType: extension_pb.ExecuteExtensionOutput,
    requestSerialize: serialize_extension_ExecuteExtensionParams,
    requestDeserialize: deserialize_extension_ExecuteExtensionParams,
    responseSerialize: serialize_extension_ExecuteExtensionOutput,
    responseDeserialize: deserialize_extension_ExecuteExtensionOutput,
  },
};

exports.ExtensionServiceClient = grpc.makeGenericClientConstructor(ExtensionServiceService);
