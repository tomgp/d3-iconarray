var tape = require("tape"),
    iconArray = require("../").iconArray;

tape("check empty layout", function(test) {
	var myArray = iconArray();
	test.equal( myArray([]).length, 0 );
	test.end();
});

tape("check 100 layout", function(test) {
	var myArray = iconArray();
	test.equal( myArray(getTestData(100)).length, 100 );
	test.end();
});


function getTestData(n){
	var a = [];
	for(var i=0; i<n; i++){
		a.push(i);
	}
	return a;
}