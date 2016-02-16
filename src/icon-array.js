export default function() {
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
