#!/bin/bash

sed -i -e 's/💩💩WP_HOME💩💩/http:\/\/panel.test.umb.calor-cae.li/g' ../database.sql &&
sed -i -e 's/💩💩PROJECT_PATH💩💩/\/home\/szymon\/projects\/test\/backend/g' ../database.sql

if [[ $(cat database.sql | grep -c 💩) -eq "0" ]] ; then
    echo "Zero wystąpień zahardcodeowanych ścieżek. Ładuję bazę."
    mysql test < ../database.sql
    echo "Załadowałem bazę, przeklikaj panel i front."
else
    echo "Występują gówna, jest lipa."
fi