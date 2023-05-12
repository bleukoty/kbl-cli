#!/bin/sh

cd $1 && tsc --init && npm init -y && npm install express @types/express;