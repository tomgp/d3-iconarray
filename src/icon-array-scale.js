export default function(){

	var domain = [0,100];
	var range = [0,100];
	var gapInterval = 10;

	function scale(domainValue){
		var rangeValue = 20;
		return rangeValue;
	}

	scale.inverse = function(rangeValue){

	};

	scale.gapInterval = function(x){
		if(!x) return gapInterval;
		gapInterval = x;
		return scale;
	};

	scale.domain = function(array){
		if(!array) return domain;
		domain = array;
		return scale;
	};

	scale.range = function(array){
		if(!array) return range;
		range = array;
		return scale;
	};

	return scale; 
}