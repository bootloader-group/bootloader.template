#!/bin/bash
mysql -e "DROP DATABASE IF EXISTS test;"
mysql -e "CREATE DATABASE test CHARACTER SET utf8 COLLATE utf8_general_ci;"