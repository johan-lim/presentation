module.exports.print_hello = function (callback) {
	return "Hello world!";
}
module.exports.count_to_ten = function (callback) {
	var i = 0;
	while (i<9) i++;
	return i;
}