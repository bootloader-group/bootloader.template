#!/bin/bash
mysql -e "DROP DATABASE IF EXISTS int;"
mysql -e "CREATE DATABASE int CHARACTER SET utf8 COLLATE utf8_general_ci;"