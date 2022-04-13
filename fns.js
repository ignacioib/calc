const fns = {
    sum,
    res,
    mul,
    div,
    pow,
};

function sum(a, b) {
    return a + b;
}

// Completar estas funciones

function res(a, b) {
	return a - b;
}

function mul(a, b) {
	return a * b;
}

function div(a, b) {
    let result = (b === 0) ? "Error: div by 0" : (a / b);
    return result;
}

function pow(a, b) {}

module.exports = fns;
