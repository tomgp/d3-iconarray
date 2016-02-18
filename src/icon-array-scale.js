import * as d3 from 'd3-scale';

export default function(){

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