#!/bin/bash

if [ $# -eq 0 ]
then
	echo "No arguments supplied"
else
	for arg in {1..3}; do
       if [ "$arg" -le "$#" ]; then
           echo "${!arg}"
       fi
    done
fi
