#!/bin/sh
ffmpeg -qscale 5 -r 4 -b 9600 -i movie/movie-%02d.png movie/movie.ogv
