// Define your Hamming class here.
// `npm test` to ensure the unit tests pass and
// your code meets all of the conditions.
// You may use ES6 or ES5 to solve.


module.exports = Hamming;

function Hamming()
{
	//compare the strings in the loop.  If the char in str1 is not the same as in str2, increment counter
	this.compute = function(str1, str2){
		if (str1.length !== str2.length) throw 'DNA strands must be of equal length.'
		var count = 0;
		for (i = 0; i < str1.length; i++) {
		  if (str1[i] != str2[i]) {
			count = count + 1;
		  }
		}
		return count;
	}
}