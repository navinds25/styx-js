@echo off
set PROTO_SOURCE=C:\EviveInDesign2.0\Windows\styx\api
set PROTO_DEST=C:\EviveInDesign2.0\Windows\styxjs\src\proto

:generate_execute
set PROTO_NAME=execute
mkdir %PROTO_DEST%\%PROTO_NAME%
REM yarn run grpc_tools_node_protoc ^
REM  --js_out=import_style=commonjs,binary:%PROTO_DEST%\%PROTO_NAME% --grpc_out=%PROTO_DEST%\%PROTO_NAME% ^
REM  --plugin=proto-gen-grpc=./node_modules/.bin/grpc_tools_node_protoc_plugin ^
REM   -I %PROTO_SOURCE%\%PROTO_NAME% %PROTO_SOURCE%\%PROTO_NAME%\*.proto
yarn run grpc_tools_node_protoc ^
    --plugin=protoc-gen-ts=./node_modules/.bin/protoc-gen-ts ^
    --ts_out=%PROTO_DEST%\%PROTO_NAME% ^
    -I %PROTO_SOURCE%\%PROTO_NAME% ^
    %PROTO_SOURCE%\%PROTO_NAME%\*.proto
EXIT /B 0

:generate_filetransfer
set PROTO_NAME=filetransfer
mkdir %PROTO_DEST%\%PROTO_NAME%
yarn run grpc_tools_node_protoc ^
 --js_out=import_style=commonjs,binary:%PROTO_DEST%\%PROTO_NAME% --grpc_out=%PROTO_DEST%\%PROTO_NAME% ^
 --plugin=proto-gen-grpc=./node_modules/.bin/grpc_tools_node_protoc_plugin ^
  -I %PROTO_SOURCE%\%PROTO_NAME% %PROTO_SOURCE%\%PROTO_NAME%\*.proto
EXIT /B 0

call generate_execute
call generate_filetransfer