(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
	typeof define === 'function' && define.amd ? define(['exports'], factory) :
	(factory((global.d3_iconarray = global.d3_iconarray || {})));
}(this, function (exports) { 'use strict';

	function iconArray() {
		var width = undefined;
		var height = undefined;
		var widthFirst = true;

		function layout(data){
			//work our missing height, width stuff

			return data.map(function(d,i){
				return '';
			});
		}

		layout.width = function(x){
			if(x === undefined) return width;
			width = x;
			return layout;
		};

		layout.height = function(x){
			if(x === undefined) return width;
			width = x;
			return layout;
		};

		layout.widthFirst = function(b){
			if(b === undefined) return widthFirst;
			widthFirst = b;
			return layout;
		};

		return layout;
	};

	var version = "0.0.1";

	exports.version = version;
	exports.iconArray = iconArray;

}));