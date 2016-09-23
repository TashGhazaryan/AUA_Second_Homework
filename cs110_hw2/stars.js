
// Function that prints spaces

const space = function (n) {
	if (n <= 0) {
		return '';
	}

	return ' ' + space(n-1);
};

//Function that prints stars

const star = function (n) {
	if (n === 1) {
		return '*';
	}

	return '*' + star(n-1);
};


// Helper recursive function for printing triangle

const helper = function (spaceCount, starsCount, n) {
	if (n === 0) {
		return;
	}
	console.log(space(spaceCount) + star(starsCount));
	return helper(spaceCount-1, starsCount+2, n-1)
};

// Main function of printing triangle

const triangleStars = function (n) {
	helper(n-1 , 1 , n);
};

triangleStars(5);