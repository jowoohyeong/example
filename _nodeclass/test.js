var sum = 0;
$.each([5, 6, 7, 8, 9, 10], function(index, value) {
	alert(index + " : " + value);
	sum += value;
});
alert("sum : " + sum);