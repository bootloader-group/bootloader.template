#!/bin/bash
echo "Flushing DB started"
./flush/flush_db_int.sh
echo "Flushing DB finished"

echo "Deploying DB started"
./deploy/deploy_to_int.sh
echo "Deploying DB finished"
