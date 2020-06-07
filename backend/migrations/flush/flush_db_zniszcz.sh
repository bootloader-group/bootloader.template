#!/bin/bash
mysql -e "DROP DATABASE IF EXISTS umb;"
mysql -e "CREATE DATABASE umb CHARACTER SET utf8 COLLATE utf8_general_ci;"