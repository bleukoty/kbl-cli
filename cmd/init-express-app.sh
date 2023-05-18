#!/bin/sh

(cd $1 && npm install express cors && npm install typescript ts-node @types/node @types/express @types/cors nodemon --save-dev \
&& npm install cors dotenv)
