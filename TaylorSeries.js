factorial = function(input) {
    var temp = 1;
    var output = 1;
    while (temp <= input) {
        output = output * temp;
        temp = temp + 1;
    }
    return output;
}

exp = function(input) {
    var temp = 0;
    var output = 0;
    while (temp <= 20) {
        output = (java.lang.Math.pow(input, temp) / factorial(temp)) + output;
        temp = temp + 1;
    }
    return output;
}

cos = function(input){
    var temp = 0;
    var output = 0;
    while (temp <= 20) {
        output = (java.lang.Math.pow(-1, temp)*java.lang.Math.pow(input, 2*temp) / factorial(2*temp)) + output;
        temp = temp + 1;
    }
    return output;
}

sin = function(input){
    var temp = 0;
    var output = 0;
    while (temp <= 20) {
        output = (java.lang.Math.pow(-1, temp)*java.lang.Math.pow(input, 2*temp+1) / factorial(2*temp+1)) + output;
        temp = temp + 1;
    }
    return output;
}

eta = function(input){
    var temp = 1;
    var output = 0;
    while (temp <= 20) {
        output = output + java.lang.Math.pow(-1, temp-1)/java.lang.Math.pow(temp, input);
        temp = temp + 1;
    }
    return output
}

zeta = function(input){
    return eta(input)/(1-java.lang.Math.pow(2, 1-input));
}
