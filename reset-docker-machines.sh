#!/usr/bin/env bash

source ./box.sh

function switchToServer {
  env='docker-machine env '$1
  box "·· Swtiching >>>> '$1' server ··" "light_purple" "blue"
  eval $($env)
}

function removeContainer {
  switchToServer $1
  docker rm -f $2
  docker volume rm $(docker volume ls -qf dangling=true)
}

removeContainer manager1 mongoNode1
removeContainer worker1 mongoNode2
removeContainer worker2 mongoNode3
