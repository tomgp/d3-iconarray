# d3-iconarray

Draw an array of icons!

There are two parts to this plugin. First a layout function which will assign x,y coordinates to elemetns of an array given some parameters. Second a scale which will put regular breaks in the array of icons to aid legibility.

## Installing

If you use NPM, `npm install d3-iconarray`. Otherwise, download the [latest release](https://github.com/tomgp/d3-icon-array/releases/latest).

## API Reference

<a href="#layout" name="layout">#</a> d3_iconarray<b>.layout</b>()

Construct a new icon array layout function when given an array of data th function will return an array containing grid positions as well as the original data.

example

```
var layout = d3_iconarray.layout();

var grid = layout([1,2,3,4]); 

/*
'grid' is

[
	{"data":1,"position":{"x":0,"y":0}},
	{"data":2,"position":{"x":1,"y":0}},
	{"data":3,"position":{"x":0,"y":1}},
	{"data":4,"position":{"x":1,"y":1}}
]

/*

```