function multiplyByTwo(number) {
	return number*2;
}

function incrementByTen(number) {
	return number+10;
}

function numberSquared(number) {
	return number*number;
}

var result = numberSquared(incrementByTen(multiplyByTwo(3)));

alert(result);