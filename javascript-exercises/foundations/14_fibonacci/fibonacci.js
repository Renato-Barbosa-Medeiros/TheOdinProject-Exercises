const fibonacci = function(num) {
    let num1 = 0, num2 = 0, numNovo = 1
    if (typeof num !== 'number') {
        num = parseInt(num)
    }
    if (num < 0) return "OOPS";
    if (num == 0) return 0;

    for (let i = 0; i < num - 1; i++) {
        num2 = num1;
		num1 = numNovo;
		numNovo = num1 + num2;
    }

    return numNovo;
};

// Do not edit below this line
module.exports = fibonacci;
