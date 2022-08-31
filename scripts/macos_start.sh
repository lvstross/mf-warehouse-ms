#!/bin/bash

workspace=$(pwd)

# Open new terminal sessions and start all micro frontends - MacOs
# Launches host application in browser while the rest start quietly without opening in the browser.

osascript -e "tell application \"Terminal\" to do script \"cd $workspace && yarn host start\""

osascript -e "tell application \"Terminal\" to do script \"cd $workspace && yarn customers start:quiet\""

osascript -e "tell application \"Terminal\" to do script \"cd $workspace && yarn departments start:quiet\""

osascript -e "tell application \"Terminal\" to do script \"cd $workspace && yarn inventory start:quiet\""

osascript -e "tell application \"Terminal\" to do script \"cd $workspace && yarn invoices start:quiet\""

osascript -e "tell application \"Terminal\" to do script \"cd $workspace && yarn products start:quiet\""

osascript -e "tell application \"Terminal\" to do script \"cd $workspace && yarn purchaseorders start:quiet\""

osascript -e "tell application \"Terminal\" to do script \"cd $workspace && yarn purchases start:quiet\""

osascript -e "tell application \"Terminal\" to do script \"cd $workspace && yarn routers start:quiet\""

osascript -e "tell application \"Terminal\" to do script \"cd $workspace && yarn store start:quiet\""

osascript -e "tell application \"Terminal\" to do script \"cd $workspace && yarn vendors start:quiet\""
