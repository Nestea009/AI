'use strict';

function App(){
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
    console.log(money);
    click_var = true;
  }

  let money = 0;

  while(click_var){
    let reward = 0;

    let node1 = 0;
    let node2 = 0;

    let inputLayer = [node1, node2, money]

    let weights = [Math.random(), Math.random(), Math.random(), Math.random(), Math.random(), Math.random()]
    let biasses = [Math.random(), Math.random(), Math.random(), Math.random(), Math.random(), Math.random()]

    //console.log(weights);

    let hidden1 = ((node1 * weights[0] + biasses[0]) + (node2 * weights[1] + biasses[1]) + (money * weights[2] + biasses[3]))
    let hidden2 = ((node1 * weights[3] + biasses[3]) + (node2 * weights[4] + biasses[4]) + (money * weights[5] + biasses[5]))

    let hiddenLayer = [hidden1, hidden2]

    console.log(hiddenLayer);

    let weights2 = [Math.random(), Math.random(), Math.random(), Math.random()];
    let biasses2 = [Math.random(), Math.random(), Math.random(), Math.random()];

    let output1 = ((hidden1 * weights2[0] + biasses2[0]) + (hidden2 * weights2[1] + biasses2[1]));
    let output2 = ((hidden1 * weights2[2] + biasses2[2]) + (hidden2 * weights2[3] + biasses2[3]));

    if(money >= 100){
      break;
    }
    click_var = false;
  }
}

App();