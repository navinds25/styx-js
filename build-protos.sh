#!/bin/bash

BASEDIR=$(dirname "$0")


PROTOS=(filetransfer execute extension nodeconfig)
for PROTO in "${PROTOS[@]}"
do
	PROTO_SOURCE=../styx/api/${PROTO}
	PROTO_DEST=src/protos/${PROTO}
	mkdir -p ${PROTO_DEST}
	
	# JavaScript code generation
	yarn run grpc_tools_node_protoc \
	    --js_out=import_style=commonjs,binary:${PROTO_DEST} \
	    --grpc_out=${PROTO_DEST} \
	    --plugin=protoc-gen-grpc=./node_modules/.bin/grpc_tools_node_protoc_plugin \
	    -I ${PROTO_SOURCE}/ \
	    ${PROTO_SOURCE}/*.proto
	
	# TypeScript code generation
	yarn run grpc_tools_node_protoc \
	    --plugin=protoc-gen-ts=./node_modules/.bin/protoc-gen-ts \
	    --ts_out=${PROTO_DEST} \
	    -I ${PROTO_SOURCE} \
	    ${PROTO_SOURCE}/*.proto
done
