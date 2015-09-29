d3.layout.iconArray = function (){
	var blockWidth = 10, blockHeight,
		blockGap = 2, //if a block is filled make another block
		verticalFirst = false;

	function layout(data){
		if( !blockHeight ) blockHeight = blockWidth;
		var blockSize = blockWidth * blockHeight;

		return data.map(function(d,i){
			var blockNum = Math.floor( i / blockSize );
			console.log(blockNum);
			if(verticalFirst){
				return {
					x: Math.floor( i/blockHeight ) + (blockGap * blockNum), // - blockWidth * blockNum,
					y: i%blockHeight,// + (blockGap + blockHeight) * blockNum,
					data: d
				};
			}
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

	layout.verticalFirst = function(b){
		if(!b) return verticalFirst;
		verticalFirst = b;
		return layout;
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