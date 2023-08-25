'use strict';

let click_var = false;

document.addEventListener('DOMContentLoaded', function () {
  const button = document.getElementById('example');
  button.addEventListener('click', clicked);
});

document.addEventListener('DOMContentLoaded', function () {
  const button = document.getElementById('AI_button');
  button.addEventListener('click', ConsoleIt);
});

document.addEventListener('DOMContentLoaded', function () {
  const button = document.getElementById('BuyHouse');
  button.addEventListener('click', ConsoleIt2);
});

function ConsoleIt(){
  console.log("Clicked!");
}

function ConsoleIt2(){
  console.log("Bought the House");
}

function clicked() {
  money += 1;
  click_var = true;
  Algorithm(money);
}

let money = 0;


function Algorithm(money){

  function ButtonClick(Reward){
    const button = document.getElementById('AI_button');
    var clickEvent = new MouseEvent("click", {
      "view": window,
      "bubbles": true,
      "cancelable": false
    });
    button.dispatchEvent(clickEvent);
    Reward += 100;
    return Reward;
  }

  function ButtonClick2(Reward){
    const button = document.getElementById('BuyHouse');
    var clickEvent = new MouseEvent("click", {
      "view": window,
      "bubbles": true,
      "cancelable": false
    });
    button.dispatchEvent(clickEvent);
    Reward -= 10;
    return Reward;
  }

  //Generate some random weights
  
  let weights = [Math.random(), Math.random(), Math.random(), Math.random()]
  let biasses = [Math.random(), Math.random(), Math.random(), Math.random()]

  let weights2 = [Math.random(), Math.random(), Math.random(), Math.random()]
  let biasses2 = [Math.random(), Math.random(), Math.random(), Math.random()]

  //Start an AI protorype that gets set weights and mutates them a bit

  //We create 2 different creativities, one for biasses and the other one for weights

  let creativity = 2.5;
  let creativity_weight = 2.5;

  //Run our prototype twice and compare the results
  //The best one survives and the cycle repeats

  for(let i = 0; i < 10; i++){

    let [new_weights, new_biasses, new_weights2, new_biasses2, new_reward] = AI_prototype(weights, biasses, weights2, biasses2, money, creativity, creativity_weight);
    let [new_weightsN, new_biassesN, new_weights2N, new_biasses2N, new_rewardN] = AI_prototype(weights, biasses, weights2, biasses2, money, creativity, creativity_weight);
    let [new_weightsM, new_biassesM, new_weights2M, new_biasses2M, new_rewardM] = AI_prototype(weights, biasses, weights2, biasses2, money, creativity, creativity_weight);
    
    if((new_reward > new_rewardN) && (new_reward > new_rewardM)){
      weights = new_weights;
      biasses = new_biasses;
      weights2 = new_weights2;
      biasses2 = new_biasses2;
      console.log("First one is better")
    }
    else if((new_rewardN > new_reward) && (new_rewardN > new_rewardM)){
      weights = new_weightsN;
      biasses = new_biassesN;
      weights2 = new_weights2N;
      biasses2 = new_biasses2N;
      console.log("Second one is better")
    }
    else if((new_rewardM > new_reward) && (new_rewardM > new_rewardN)){
      weights = new_weightsM;
      biasses = new_biassesM;
      weights2 = new_weights2M;
      biasses2 = new_biasses2M;
      console.log("Third one is better")
    }
    else {
      console.log("Rewards are the same, should choose randomly")
    }
    if(creativity > 1.1){
      creativity -= 0.0002;
    }
  }

  function AI_prototype(weights, biasses, weights2, biasses2, money, creativity, creativity_weight){

    //Start off with the money input and the CanYouBuyAHouse input

    let node1 = 1;
    let node2 = 1;

    let inputLayer = [node1, node2];

    let reward = 0;

    //Creativity will determine how much we change the weights and biasses

    //We create new weights based on creativity and the default weights

    weights = [(weights[0] * (Math.random() * creativity_weight)), (weights[1] * (Math.random() * creativity_weight)), (weights[2] * (Math.random() * creativity_weight)), (weights[3] * (Math.random() * creativity_weight))]
    biasses = [(biasses[0] * (Math.random() * creativity)), (biasses[1] * (Math.random() * creativity)), (biasses[2] * (Math.random() * creativity)), (biasses[3] * (Math.random() * creativity))]

    //We make the hidden nodes

    let hidden1 = ((node1 * weights[0] + biasses[0]) + (node2 * weights[1] + biasses[1]));
    let hidden2 = ((node1 * weights[3] + biasses[3]) + (node2 * weights[2] + biasses[2]));

    //We create new weights based on creativity and the previous weights
    
    weights2 = [(weights2[0] * (Math.random() * creativity_weight)), (weights2[1] * (Math.random() * creativity_weight)), (weights2[2] * (Math.random() * creativity_weight)), (weights2[3] * (Math.random() * creativity_weight))]
    biasses2 = [(biasses2[0] * (Math.random() * creativity)), (biasses2[1] * (Math.random() * creativity)), (biasses2[2] * (Math.random() * creativity)), (biasses2[3] * (Math.random() * creativity))]
    
    //We make the output nodes

    let output1 = ((hidden1 * weights2[0] + biasses2[0]) + (hidden2 * weights2[1] + biasses2[1]));
    let output2 = ((hidden1 * weights2[2] + biasses2[2]) + (hidden2 * weights2[3] + biasses2[3]));
  
    let outputLayer = [output1, output2];
  
    console.log(outputLayer);

    //Reward the AI if it clicks the button or if it would buy the house when it needs to

    //If clicks the button:
    if(output1 > 3){
      if(output1 < 5){
        reward = ButtonClick(reward);
      }
    }
    else {
      //reward += (1 / (3 - output1))
    }

    //If buys the house
    if(output2 > 10){
      reward = ButtonClick2(reward);
    }

    //We return all of the values below, so that the new AI will take them as default

    return [weights, biasses, weights2, biasses2, reward]
  }
  

}