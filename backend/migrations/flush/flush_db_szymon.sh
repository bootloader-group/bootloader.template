#!/bin/bash
mysql -e "DROP DATABASE IF EXISTS database_name;"
mysql -e "CREATE DATABASE database_name CHARACTER SET utf8 COLLATE utf8_general_ci;"