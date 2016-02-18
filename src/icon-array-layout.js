export default function() {
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



function position(item, width, height, widthFirst){
	return i;
}