#!/bin/bash

workspace=$(pwd)

# Open new terminal sessions and start all micro frontends - MacOs
# Launches host application in browser while the rest start quitely without opening in the browser.

osascript -e "tell application \"Terminal\" to do script \"cd $workspace && yarn host start\""

osascript -e "tell application \"Terminal\" to do script \"cd $workspace && yarn customers start:quite\""

osascript -e "tell application \"Terminal\" to do script \"cd $workspace && yarn departments start:quite\""

osascript -e "tell application \"Terminal\" to do script \"cd $workspace && yarn inventory start:quite\""

osascript -e "tell application \"Terminal\" to do script \"cd $workspace && yarn invoices start:quite\""

osascript -e "tell application \"Terminal\" to do script \"cd $workspace && yarn products start:quite\""

osascript -e "tell application \"Terminal\" to do script \"cd $workspace && yarn purchaseorders start:quite\""

osascript -e "tell application \"Terminal\" to do script \"cd $workspace && yarn purchases start:quite\""

osascript -e "tell application \"Terminal\" to do script \"cd $workspace && yarn routers start:quite\""

osascript -e "tell application \"Terminal\" to do script \"cd $workspace && yarn store start:quite\""

osascript -e "tell application \"Terminal\" to do script \"cd $workspace && yarn vendors start:quite\""
