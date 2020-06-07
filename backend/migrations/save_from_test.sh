#!/bin/bash
mysqldump umb > database.sql &&
sed -i -e 's/http:\/\/panel.test.umb.calor-cae.li/💩💩WP_HOME💩💩/g' ./database.sql &&
sed -i -e 's/\/home\/szymon\/projects\/test\/backend/💩💩PROJECT_PATH💩💩/g' ./database.sql

if [[ $(cat database.sql | grep -c \/home\/szymon) -eq "0" ]] ; then
    echo "Zero wystąpień zahardcodeowanych ścieżek"
else
    echo "Występują zahardcodeowane ścieżki"
fi