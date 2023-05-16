#!/bin/sh

(cd $1 && tsc --init && npm init -y && npm install express
&& npm install typescript ts-node @types/node @types/express --save-dev)