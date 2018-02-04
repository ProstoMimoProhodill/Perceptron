//white - 1
//black - (-1)
//green - correct definition of position(true)
//red - false

var flag = 0;

function createTrainingPoints(widWindow,heiWindow,numberPoints) {
    var point = [];
    var x,y,answer;
    
    for (let i=0;i<numberPoints;i++){
        x = getRandomInt(0,widWindow);
        y = getRandomInt(0,heiWindow);

        if(x>=y){
            answer = 1;
        }else{
            answer = -1;
        }
        point[i] = {x: x , y: y, answer: answer};
    }

    return point;
}


function trainingPerceptron(perceptrone, points, numberPoints) {
    var truePoints = [];    
    var falsePoints = [];
    var trNum = 0, fsNum = 0;

    var learningRate = 0.1;

    for(let p=0;p<points.length;p++){
    
        var guess = signumActivationFunc((points[p].x*perceptron.w.x) + (points[p].y*perceptron.w.y));
        let currPoint = {x: points[p].x, y: points[p].y, guess: guess};

        if(currPoint.guess == points[p].answer){
            truePoints[trNum] = points[p];
            trNum++;
        } else {
            falsePoints[fsNum] = points[p];
    
            if(flag!=0){   
                perceptron.w.x = perceptron.w.x + (points[p].x*(points[p].answer - guess)*learningRate);
                perceptron.w.y = perceptron.w.y + (points[p].y*(points[p].answer - guess)*learningRate);
            }
            fsNum++;
        }

        if(p==0 && flag==0){
            console.log("First weight (click to start training): ");
            let start = {WeightX: Math.round(perceptron.w.x*100)/100, WeightY: Math.round(perceptron.w.y*100)/100, Precision_procent_: (trNum/points.length)*100};
            console.table(start);
        }

        if(p==points.length-1){
            console.log("New weight after training: ");
            let end = {WeightX: Math.round(perceptron.w.x*100)/100, WeightY: Math.round(perceptron.w.y*100)/100, Precision_procent_: (trNum/points.length)*100};
            console.table(end);  
        }
    }

    if(((trNum/points.length)*100)==100){
        console.log("%cSuccessful!","color: red; background-color: white;");
    }

    flag++;
    var training = {active: true,truePoints: truePoints, falsePoints: falsePoints};    
    return training;
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