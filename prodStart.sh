#!/bin/bash
# A script which will run this application on http://localhost:8081
ng build --aot --prod
xdg-open http://localhost:8081
node server.js
