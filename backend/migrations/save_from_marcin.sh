#!/bin/bash
mysqldump umb > database.sql &&
sed -i -e 's/http:\/\/panel.umb.localhost/💩💩WP_HOME💩💩/g' ./database.sql &&
sed -i -e 's/\/home\/marcin\/projects\/umb\/backend/💩💩PROJECT_PATH💩💩/g' ./database.sql

if [[ $(cat database.sql | grep -c \/home\/marcin) -eq "0" ]] ; then
    echo "Zero wystąpień zahardcodeowanych ścieżek"
else
    echo "Występują zahardcodeowane ścieżki"
fi