var perceptron;

var wid = 500;
var hei = 500;

var points;
var numberPoints = 300;
var numberInputs = 2; // for this task numberInputs is const

var training;

function setup() {
    createCanvas(wid, hei);
    perceptron = new perceptron(numberInputs);
    points = createTrainingPoints(wid,hei,numberPoints);
    training = trainingPerceptron(perceptron, points, numberInputs); 
}

function draw() {
    background(200);
    line(0,0,wid,hei);

    for(let i=0;i<numberPoints;i++){
        if(points[i].x<points[i].y){
            fill(0);
        }else{
            fill(255);
        }
        ellipse(points[i].x,points[i].y,15,15);
    }
    
    for(let g=0;g<training.truePoints.length;g++){
        fill(0,255,0);
        ellipse(training.truePoints[g].x, training.truePoints[g].y,7,7);
    }

    for(let g=0;g<training.falsePoints.length;g++){
        fill(255,0,0);
        ellipse(training.falsePoints[g].x, training.falsePoints[g].y,7,7);
    } 
}

function mousePressed() {
    training = trainingPerceptron(perceptron, points, numberInputs); 
  }