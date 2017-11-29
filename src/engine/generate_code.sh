#!/bin/bash

NOTEBOOKS=notebooks/*.ipynb
for f in $NOTEBOOKS
do
    echo "Generating python code from $f"
    filename=$(basename "$f" .ipynb)".py"
    $(jupyter nbconvert --to script $f --output-dir .)
    echo "---------------------------------------------------> generated $filename"
done
