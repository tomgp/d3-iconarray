d3.layout.iconArray = function (){
	var blockWidth = 10, blockHeight,
		blockGap = 2; //if a block is filled make another block

	function layout(data){
		if( !blockHeight ) blockHeight = blockWidth;
		var blockSize = blockWidth * blockHeight;

		return data.map(function(d,i){
			var blockNum = Math.floor( i / blockSize );
			return {
				x: i%blockWidth + (blockGap + blockWidth) * blockNum,
				y: Math.floor( i/blockWidth ) - blockHeight * blockNum,
				data: d
			};
		});
	}

	layout.maxDimensions = function(numItems){ //find out how big the layout will be for a given array size
		if(!blockHeight) blockHeight = blockWidth;
		var blockSize = blockWidth * blockHeight;
		var blockNum = Math.ceil( numItems / blockSize );
		if(blockNum == 0) blockNum = 1;
		var dim = {
			x: numItems%blockWidth + (blockGap + blockWidth) * blockNum,
			y: Math.floor( numItems/blockWidth ) - blockHeight * blockNum
		};

		dim.max = Math.max(dim.x, dim.y);
		return dim;
	}

	layout.blockWidth = function(w){
		if(!w) return blockWidth;
		blockWidth = w;
		return layout;
	}

	layout.blockHeight = function(h){
		if(!h) return blockHeight;
		blockHeight = h;
		return layout;
	}

	layout.blockGap = function(g){
		if(!g) return blockGap;
		blockGap = g;
		return layout;
	}

	return layout;
}