factorial = function(input) {
    if (input==0){return 1;}
    var output = 1;
    for (var i = 1; i <= input; i++) {
        output = output * i;
    }
    return output;
}

exp = function(input) {
    var output = 1;
    for (var i = 1; i <= 100; i++) {
        output = (Math.pow(input, i) / factorial(i)) + output;
    }
    return output;
}

cos = function(input){
    var temp = 0;
    var output = 0;
    while (temp <= 20) {
        output = (Math.pow(-1, temp)*Math.pow(input, 2*temp) / factorial(2*temp)) + output;
        temp = temp + 1;
    }
    return output;
}

sin = function(input){
    var temp = 0;
    var output = 0;
    while (temp <= 20) {
        output = (Math.pow(-1, temp)*Math.pow(input, 2*temp+1) / factorial(2*temp+1)) + output;
        temp = temp + 1;
    }
    return output;
}

eta = function(input){
    var temp = 1;
    var output = 0;
    while (temp <= 20) {
        output = output + Math.pow(-1, temp-1)/Math.pow(temp, input);
        temp = temp + 1;
    }
    return output
}

zeta = function(input){
    return eta(input)/(1-Math.pow(2, 1-input));
}
