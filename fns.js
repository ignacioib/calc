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

function pow(a, b) {
    
    if (b == 0){
        var result = 1; 
    }else{
        var result = a;
        for (i=1;i<b;i++){
           result = result * a;
        }
        
    }
    return result;


}

module.exports = fns;
