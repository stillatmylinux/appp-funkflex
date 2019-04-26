#!/bin/bash

mv www/build/* phonegap/litdigitaldjs/build/
cd phonegap/
rm *.zip
zip -r litdigitaldjs.zip litdigitaldjs
say -v Victoria Lit digital JS phone gap file is ready
