(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('d3-scale')) :
	typeof define === 'function' && define.amd ? define(['exports', 'd3-scale'], factory) :
	(factory((global.d3_iconarray = global.d3_iconarray || {}),global.d3));
}(this, function (exports,d3) { 'use strict';

	function iconArrayLayout() {
		var width = undefined;
		var height = undefined;
		var widthFirst = true;
		var maxDimension = undefined;

		function layout(data){
			//work our missing height, width stuff

			setDimensions(data.length);

			return data.map(function(d,i){
				return {
					data:d,
					position:position(i)
				};
			});
		}

		function position(i){
			if(isNaN(width) || isNaN(height)){ 
				console.log('Warning: width/height undefined') 
				return 0;
			}
			if(widthFirst){
				return {
					x: i % width,
					y: Math.floor( i/width )
				};
			}else{
				return {
					x: Math.floor( i/height ),
					y: i % height
				};
			}
		}

		function setDimensions(l){
			//neither width or height is defined
			if(isNaN(width) && isNaN(height)){
				console.log('no width or height');
				if(widthFirst){ 
					width = Math.ceil( Math.sqrt(l) );
					height = Math.ceil( l / width );
				}else{
					height = Math.ceil( Math.sqrt(l) );
					width = Math.ceil( l / height );
				}
			}else if(isNaN(width)){	//width undefined
				width = Math.ceil( l / height );
			}else if(isNaN(height)){ //height undefined
				height = Math.ceil( l / width );
			}
		}

		layout.maxDimension = function(x){
			var itemPosition = position(x); 
			if(widthFirst){
				var x = Math.max(itemPosition.x, width);
				return Math.max(x, itemPosition.y);
			}
			var y = Math.max(itemPosition.y, height);
			return Math.max(y, itemPosition.x);

		}

		layout.position = function(x){
			return position(x);
		}

		layout.width = function(x){
			if(x === undefined) return width;
			width = x;
			return layout;
		};

		layout.height = function(x){
			if(x === undefined) return height;
			height = x;
			return layout;
		};

		layout.widthFirst = function(b){
			if(b === undefined) return widthFirst;
			widthFirst = b;
			return layout;
		};

		return layout;
	};

	function iconArrayScale(){

		var domain = [0,100];
		var range = [0,100];
		var gapInterval = 10;
		var gapSize = 0; //default no change
		var notionalScale = d3.scaleLinear()
								.domain(domain)
								.range(range);

		function scale(domainValue){
			var rangeValue = 20;
			var adjustedDomainValue = domainValue + Math.floor(domainValue/gapInterval)*gapSize;
			//console.log(notionalScale.domain());
			return rangeValue = notionalScale(adjustedDomainValue);		
		}

		function rescale(){
			//calculate an adjusted domain
			var domainLength = (domain[1] - domain[0]) * gapSize;
			var gaps = Math.ceil( domainLength/ gapInterval );
			var adjustedDomain = [ domain[0], domain[1] + gaps ];

			//calculate an adjusted range

			notionalScale.domain(adjustedDomain)
					.range(range);
		}

		scale.gapInterval = function(x){
			if(!x) return gapInterval;
			gapInterval = x;
			rescale();
			return scale;
		};

		scale.gapSize = function(x){
			if(isNaN(x)) return gapSize;
			gapSize = x;
			rescale();
			return scale;
		}

		scale.domain = function(array){
			if(!array) return domain;
			domain = array;
			rescale();
			return scale;
		};

		scale.range = function(array){
			if(!array) return range;
			range = array;
			rescale();
			return scale;
		};

		rescale();
		return scale; 
	}

	var version = "0.0.2";

	exports.version = version;
	exports.layout = iconArrayLayout;
	exports.scale = iconArrayScale;

}));