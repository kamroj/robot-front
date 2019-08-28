#!/bin/bash
# A script which will run this application on http://localhost:4200
ng build --aot --prod
xdg-open http://localhost:4200
node server.js
