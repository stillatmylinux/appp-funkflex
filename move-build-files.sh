#!/bin/bash

mv www/build/* /Users/matt/projects/alphaweb/appp-funkflex/phonegap/litdigitaldjs/build/
cd /Users/matt/projects/alphaweb/appp-funkflex/phonegap/
rm *.zip
zip -r litdigitaldjs.zip litdigitaldjs
say -v Victoria Lit digital JS phone gap file is ready