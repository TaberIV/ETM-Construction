#!/bin/bash
FOLDERS="client/public/img/houses/*"

for folder in $FOLDERS
do
    echo "Processing folder $folder"
    cd $folder
    mkdir -p thumbs
    for img in *.jpg
    do
        echo "Prcoessing image $img ..."
        /usr/bin/convert -thumbnail 200 $img "thumbs/$img"
    done

    cd -
done