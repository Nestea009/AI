'use strict';


//document.addEventListener('DOMContentLoaded', function (){
  //const input = document.getElementById("inputfield");
  //input.addEventListener('change', consoleIt);
//})

let click_var = false;

document.addEventListener('DOMContentLoaded', function () {
  const button = document.getElementById('example');
  button.addEventListener('click', clicked);
});

function clicked() {
  money += 1;
  click_var = true;
  console.log(Math.random())
  Algorithm(money);
}

let money = 0;


function Algorithm(money){

  let reward = 0;

  //Generate some random weights
  
  let weights = [Math.random(), Math.random(), Math.random(), Math.random()]
  let biasses = [Math.random(), Math.random(), Math.random(), Math.random()]

  let weights2 = [Math.random(), Math.random(), Math.random(), Math.random()]
  let biasses2 = [Math.random(), Math.random(), Math.random(), Math.random()]

  //Start an AI protorype that gets set weights and mutates them a bit

  function AI_prototype(weights, biasses, weights2, biasses2, money){

    //Start off with the money input and the CanYouBuyAHouse input

    let node1 = 0;

    let inputLayer = [node1, money];

    //Creativity will determine how much we change the weights and biasses

    let creativity = 0.1;

    //We create new weights based on creativity and the default weights

    weights = [(weight[0] * (Math.random() * creativity)), (weight[1] * (Math.random() * creativity)), (weight[2] * (Math.random() * creativity)), (weight[3] * (Math.random() * creativity))]
    biasses = [(biasses[0] * (Math.random() * creativity)), (biasses[1] * (Math.random() * creativity)), (biasses[2] * (Math.random() * creativity)), (biasses[3] * (Math.random() * creativity))]

    //We make the hidden nodes

    let hidden1 = ((node1 * weights[0] + biasses[0]) + (money * weights[1] + biasses[1]));
    let hidden2 = ((node1 * weights[3] + biasses[3]) + (money * weights[2] + biasses[2]));

    //We create new weights based on creativity and the previous weights
    
    weights2 = [(weight2[0] * (Math.random() * creativity)), (weight2[1] * (Math.random() * creativity)), (weight2[2] * (Math.random() * creativity)), (weight2[3] * (Math.random() * creativity))]
    biasses2 = [(biasses2[0] * (Math.random() * creativity)), (biasses2[1] * (Math.random() * creativity)), (biasses2[2] * (Math.random() * creativity)), (biasses2[3] * (Math.random() * creativity))]
    
    //We make the output nodes

    let output1 = ((hidden1 * weights2[0] + biasses2[0]) + (hidden2 * weights2[1] + biasses2[1]));
    let output2 = ((hidden1 * weights2[2] + biasses2[2]) + (hidden2 * weights2[3] + biasses2[3]));
  
    let outputLayer = [output1, output2];
  
    console.log(outputLayer);

    //We return all of the values below, so that the new AI will take them as default

    //REWARD SYSTEM MISSING

    return [outputLayer, weights, biasses, weights2, biasses2]
  }
  

}