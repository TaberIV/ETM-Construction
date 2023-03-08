#!/bin/bash
cd public
FOLDERS="img/houses/*"
mkdir -p public/img/thumbs
for folder in $FOLDERS
do
    echo "Processing folder $folder"
    cd $folder
    mkdir -p "../../thumbs/$folder"
    for img in *.jpg
    do
        echo "Prcoessing image $img ..."
        /usr/bin/convert -thumbnail 200 $img "../../thumbs/$folder/$img"
    done

    cd -
done