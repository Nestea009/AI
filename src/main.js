'use strict';

let click_var = false;

document.addEventListener('DOMContentLoaded', function () {
  const button = document.getElementById('example');
  button.addEventListener('click', clicked);
});

function clicked() {
  money += 1;
  click_var = true;
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


  //Run our prototype twice and compare the results
  //The best one survives and the cycle repeats

  for(let i = 0; i < 10; i++){

    let creativity = 1;
    let creativity_weight = 2;

    let [new_weights, new_biasses, new_weights2, new_biasses2, new_reward] = AI_prototype(weights, biasses, weights2, biasses2, money, creativity, creativity_weight);
    let [new_weightsN, new_biassesN, new_weights2N, new_biasses2N, new_rewardN] = AI_prototype(weights, biasses, weights2, biasses2, money, creativity, creativity_weight);
    if(new_reward > new_rewardN){
      weights = new_weights;
      biasses = new_biasses;
      weights2 = new_weights2;
      biasses2 = new_biasses2;
    }
    else{
      weights = new_weightsN;
      biasses = new_biassesN;
      weights2 = new_weights2N;
      biasses2 = new_biasses2N;
    }

    creativity = creativity / 1.5;
    creativity_weight = creativity_weight / 1.5;
  }

  function AI_prototype(weights, biasses, weights2, biasses2, money, creativity, creativity_weight){

    //Start off with the money input and the CanYouBuyAHouse input

    let node1 = 0;

    let inputLayer = [node1, money];

    //Creativity will determine how much we change the weights and biasses



    //We create new weights based on creativity and the default weights

    weights = [(weights[0] * (Math.random() * creativity_weight)), (weights[1] * (Math.random() * creativity_weight)), (weights[2] * (Math.random() * creativity_weight)), (weights[3] * (Math.random() * creativity_weight))]
    biasses = [(biasses[0] * (Math.random() * creativity)), (biasses[1] * (Math.random() * creativity)), (biasses[2] * (Math.random() * creativity)), (biasses[3] * (Math.random() * creativity))]

    //We make the hidden nodes

    let hidden1 = ((node1 * weights[0] + biasses[0]) + (money * weights[1] + biasses[1]));
    let hidden2 = ((node1 * weights[3] + biasses[3]) + (money * weights[2] + biasses[2]));

    //We create new weights based on creativity and the previous weights
    
    weights2 = [(weights2[0] * (Math.random() * creativity_weight)), (weights2[1] * (Math.random() * creativity_weight)), (weights2[2] * (Math.random() * creativity_weight)), (weights2[3] * (Math.random() * creativity_weight))]
    biasses2 = [(biasses2[0] * (Math.random() * creativity)), (biasses2[1] * (Math.random() * creativity)), (biasses2[2] * (Math.random() * creativity)), (biasses2[3] * (Math.random() * creativity))]
    
    //We make the output nodes

    let output1 = ((hidden1 * weights2[0] + biasses2[0]) + (hidden2 * weights2[1] + biasses2[1]));
    let output2 = ((hidden1 * weights2[2] + biasses2[2]) + (hidden2 * weights2[3] + biasses2[3]));
  
    let outputLayer = [output1, output2];
  
    console.log(outputLayer);

    //Reward the AI if it clicks the button or if it would buy the house when it needs to

    //if(output1 > 1){
      //console.log("Wins Money!")
      //reward += 1;
    //}
    //else{
      //console.log("Looses Money!")
      //reward -= 1;
    //}

    //if(output2 > 1){
      //console.log("Would buy the house!")
      //reward -= 1;
    //}
    //else{
      //console.log("Wouldn't buy the house")
      //reward += 1;
    //}

    reward = output1 + output2;

    //We return all of the values below, so that the new AI will take them as default

    return [weights, biasses, weights2, biasses2, reward]
  }
  

}