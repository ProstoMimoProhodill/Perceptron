// x, y - inputs ; return - guess

function perceptron(InputL) {
    var inputs = [];
    var weights = [];
    var sum = 0;

    for (let i=0;i<InputL;i++){
        inputs[i] = getRandomInt(0,500);  
        weights[i] = (Math.random() * 2) + (-1);  // from -1 to 1   
        sum = sum + (inputs[i]*weights[i]); 
    }

    var x = inputs[0];
    var y = inputs[1];
    var w = {x: Math.round(weights[0] * 100) / 100, y: Math.round(weights[1] * 100) / 100};
    var guess = signumActivationFunc(sum);

    let dataPerceptron = {x: x, y: y, w: w, guess: guess};
    return dataPerceptron;
}

function signumActivationFunc(x) {
    if(x>=0){
        return 1;        
    } else {
        return -1;        
    }
}

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}