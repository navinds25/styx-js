// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('grpc');
var filetransfer_events_pb = require('./filetransfer_events_pb.js');

function serialize_filetransfer_RemoteDirectory(arg) {
  if (!(arg instanceof filetransfer_events_pb.RemoteDirectory)) {
    throw new Error('Expected argument of type filetransfer.RemoteDirectory');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_filetransfer_RemoteDirectory(buffer_arg) {
  return filetransfer_events_pb.RemoteDirectory.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_filetransfer_RemoteDirectoryCondition(arg) {
  if (!(arg instanceof filetransfer_events_pb.RemoteDirectoryCondition)) {
    throw new Error('Expected argument of type filetransfer.RemoteDirectoryCondition');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_filetransfer_RemoteDirectoryCondition(buffer_arg) {
  return filetransfer_events_pb.RemoteDirectoryCondition.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_filetransfer_RemoteDirectoryConditionTransfer(arg) {
  if (!(arg instanceof filetransfer_events_pb.RemoteDirectoryConditionTransfer)) {
    throw new Error('Expected argument of type filetransfer.RemoteDirectoryConditionTransfer');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_filetransfer_RemoteDirectoryConditionTransfer(buffer_arg) {
  return filetransfer_events_pb.RemoteDirectoryConditionTransfer.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_filetransfer_RemoteDirectoryTransfer(arg) {
  if (!(arg instanceof filetransfer_events_pb.RemoteDirectoryTransfer)) {
    throw new Error('Expected argument of type filetransfer.RemoteDirectoryTransfer');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_filetransfer_RemoteDirectoryTransfer(buffer_arg) {
  return filetransfer_events_pb.RemoteDirectoryTransfer.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_filetransfer_RemoteFile(arg) {
  if (!(arg instanceof filetransfer_events_pb.RemoteFile)) {
    throw new Error('Expected argument of type filetransfer.RemoteFile');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_filetransfer_RemoteFile(buffer_arg) {
  return filetransfer_events_pb.RemoteFile.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_filetransfer_TransferStatus(arg) {
  if (!(arg instanceof filetransfer_events_pb.TransferStatus)) {
    throw new Error('Expected argument of type filetransfer.TransferStatus');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_filetransfer_TransferStatus(buffer_arg) {
  return filetransfer_events_pb.TransferStatus.deserializeBinary(new Uint8Array(buffer_arg));
}


var FTServiceService = exports.FTServiceService = {
  listDir: {
    path: '/filetransfer.FTService/ListDir',
    requestStream: false,
    responseStream: true,
    requestType: filetransfer_events_pb.RemoteDirectory,
    responseType: filetransfer_events_pb.RemoteFile,
    requestSerialize: serialize_filetransfer_RemoteDirectory,
    requestDeserialize: deserialize_filetransfer_RemoteDirectory,
    responseSerialize: serialize_filetransfer_RemoteFile,
    responseDeserialize: deserialize_filetransfer_RemoteFile,
  },
  listDirCondition: {
    path: '/filetransfer.FTService/ListDirCondition',
    requestStream: false,
    responseStream: true,
    requestType: filetransfer_events_pb.RemoteDirectoryCondition,
    responseType: filetransfer_events_pb.RemoteFile,
    requestSerialize: serialize_filetransfer_RemoteDirectoryCondition,
    requestDeserialize: deserialize_filetransfer_RemoteDirectoryCondition,
    responseSerialize: serialize_filetransfer_RemoteFile,
    responseDeserialize: deserialize_filetransfer_RemoteFile,
  },
};

exports.FTServiceClient = grpc.makeGenericClientConstructor(FTServiceService);
var RemoteFTServiceService = exports.RemoteFTServiceService = {
  transferFile: {
    path: '/filetransfer.RemoteFTService/TransferFile',
    requestStream: false,
    responseStream: true,
    requestType: filetransfer_events_pb.RemoteDirectoryTransfer,
    responseType: filetransfer_events_pb.TransferStatus,
    requestSerialize: serialize_filetransfer_RemoteDirectoryTransfer,
    requestDeserialize: deserialize_filetransfer_RemoteDirectoryTransfer,
    responseSerialize: serialize_filetransfer_TransferStatus,
    responseDeserialize: deserialize_filetransfer_TransferStatus,
  },
  transferCondition: {
    path: '/filetransfer.RemoteFTService/TransferCondition',
    requestStream: false,
    responseStream: true,
    requestType: filetransfer_events_pb.RemoteDirectoryConditionTransfer,
    responseType: filetransfer_events_pb.TransferStatus,
    requestSerialize: serialize_filetransfer_RemoteDirectoryConditionTransfer,
    requestDeserialize: deserialize_filetransfer_RemoteDirectoryConditionTransfer,
    responseSerialize: serialize_filetransfer_TransferStatus,
    responseDeserialize: deserialize_filetransfer_TransferStatus,
  },
};

exports.RemoteFTServiceClient = grpc.makeGenericClientConstructor(RemoteFTServiceService);
