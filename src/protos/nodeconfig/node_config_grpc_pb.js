// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('grpc');
var node_config_events_pb = require('./node_config_events_pb.js');

function serialize_nodeconfig_AddNodeConfigResponse(arg) {
  if (!(arg instanceof node_config_events_pb.AddNodeConfigResponse)) {
    throw new Error('Expected argument of type nodeconfig.AddNodeConfigResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_nodeconfig_AddNodeConfigResponse(buffer_arg) {
  return node_config_events_pb.AddNodeConfigResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_nodeconfig_AllNodeConfig(arg) {
  if (!(arg instanceof node_config_events_pb.AllNodeConfig)) {
    throw new Error('Expected argument of type nodeconfig.AllNodeConfig');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_nodeconfig_AllNodeConfig(buffer_arg) {
  return node_config_events_pb.AllNodeConfig.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_nodeconfig_ListNodeConfigRequest(arg) {
  if (!(arg instanceof node_config_events_pb.ListNodeConfigRequest)) {
    throw new Error('Expected argument of type nodeconfig.ListNodeConfigRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_nodeconfig_ListNodeConfigRequest(buffer_arg) {
  return node_config_events_pb.ListNodeConfigRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_nodeconfig_NodeConfig(arg) {
  if (!(arg instanceof node_config_events_pb.NodeConfig)) {
    throw new Error('Expected argument of type nodeconfig.NodeConfig');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_nodeconfig_NodeConfig(buffer_arg) {
  return node_config_events_pb.NodeConfig.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_nodeconfig_NodeID(arg) {
  if (!(arg instanceof node_config_events_pb.NodeID)) {
    throw new Error('Expected argument of type nodeconfig.NodeID');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_nodeconfig_NodeID(buffer_arg) {
  return node_config_events_pb.NodeID.deserializeBinary(new Uint8Array(buffer_arg));
}


var NodeConfigServiceService = exports.NodeConfigServiceService = {
  addNodeConfig: {
    path: '/nodeconfig.NodeConfigService/AddNodeConfig',
    requestStream: false,
    responseStream: false,
    requestType: node_config_events_pb.NodeConfig,
    responseType: node_config_events_pb.AddNodeConfigResponse,
    requestSerialize: serialize_nodeconfig_NodeConfig,
    requestDeserialize: deserialize_nodeconfig_NodeConfig,
    responseSerialize: serialize_nodeconfig_AddNodeConfigResponse,
    responseDeserialize: deserialize_nodeconfig_AddNodeConfigResponse,
  },
  getNodeConfigByID: {
    path: '/nodeconfig.NodeConfigService/GetNodeConfigByID',
    requestStream: false,
    responseStream: false,
    requestType: node_config_events_pb.NodeID,
    responseType: node_config_events_pb.NodeConfig,
    requestSerialize: serialize_nodeconfig_NodeID,
    requestDeserialize: deserialize_nodeconfig_NodeID,
    responseSerialize: serialize_nodeconfig_NodeConfig,
    responseDeserialize: deserialize_nodeconfig_NodeConfig,
  },
  listNodeConfig: {
    path: '/nodeconfig.NodeConfigService/ListNodeConfig',
    requestStream: false,
    responseStream: false,
    requestType: node_config_events_pb.ListNodeConfigRequest,
    responseType: node_config_events_pb.AllNodeConfig,
    requestSerialize: serialize_nodeconfig_ListNodeConfigRequest,
    requestDeserialize: deserialize_nodeconfig_ListNodeConfigRequest,
    responseSerialize: serialize_nodeconfig_AllNodeConfig,
    responseDeserialize: deserialize_nodeconfig_AllNodeConfig,
  },
  addNode: {
    path: '/nodeconfig.NodeConfigService/AddNode',
    requestStream: false,
    responseStream: false,
    requestType: node_config_events_pb.NodeConfig,
    responseType: node_config_events_pb.AllNodeConfig,
    requestSerialize: serialize_nodeconfig_NodeConfig,
    requestDeserialize: deserialize_nodeconfig_NodeConfig,
    responseSerialize: serialize_nodeconfig_AllNodeConfig,
    responseDeserialize: deserialize_nodeconfig_AllNodeConfig,
  },
};

exports.NodeConfigServiceClient = grpc.makeGenericClientConstructor(NodeConfigServiceService);
