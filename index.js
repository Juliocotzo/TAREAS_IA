// MIT License
// Copyright (c) 2020 Luis Espino

let state1 = 0;
let state2 = 0;
let state3 = 0;
let state4 = 0;
let state5 = 0;
let state6 = 0;
let state7 = 0;
let state8 = 0;

function reflex_agent(location, state) {
  if (state == "DIRTY") return "CLEAN";
  else if (location == "A") return "RIGHT";
  else if (location == "B") return "LEFT";
}

function dirty(states) {
  let location = states[0];
  let sideA = states[1];
  let sideB = states[2];

  let numRandom = Math.random() * (10 - 1) + 1;
  if (sideA === "CLEAN" && numRandom > 6) {
    states[1] = "DIRTY";
    document.getElementById("log").innerHTML += "<br>Location: "
      .concat(location)
      .concat(" | Action: ")
      .concat("DIRTY");
  }
  numRandom = Math.random() * (10 - 1) + 1;
  if (sideB == "CLEAN" && numRandom > 6) {
    states[2] = "DIRTY";
    document.getElementById("log").innerHTML += "<br>Location: "
      .concat(location)
      .concat(" | Action: ")
      .concat("DIRTY");
  }
  return states;
}

function contador(states) {
  let location = states[0];
  let sideA = states[1];
  let sideB = states[2];
  let position = 1;
  if (sideA == "DIRTY" && sideB == "DIRTY") {
    position = 1;
  } else if (sideA == "DIRTY" && sideB == "CLEAN") {
    position = 3;
  } else if (sideA == "CLEAN" && sideB == "DIRTY") {
    position = 5;
  } else {
    position = 7;
  }
  if (location != "A") {
    position += 1;
  }

  if (position == 1) {
    state1++;
  } else if (position == 2) {
    state2++;
  } else if (position == 3) {
    state3++;
  } else if (position == 4) {
    state4++;
  } else if (position == 5) {
    state5++;
  } else if (position == 6) {
    state6++;
  } else if (position == 7) {
    state7++;
  } else if (position == 8) {
    state8++;
  }

  document.getElementById("log").innerHTML += "<br>Estado: ".concat(position);
  
}

function visited_states() {
  if (
    state1 < 2 ||
    state2 < 2 ||
    state3 < 2 ||
    state4 < 2 ||
    state5 < 2 ||
    state6 < 2 ||
    state7 < 2 ||
    state8 < 2
  ) {
    return true;
  }
  return false;
}

function test(states) {
  contador(states);
  var location = states[0];
  var state = states[0] == "A" ? states[1] : states[2];
  var action_result = reflex_agent(location, state);
  document.getElementById("log").innerHTML += "<br>Location: "
    .concat(location)
    .concat(" | Action: ")
    .concat(action_result);
  if (action_result == "CLEAN") {
    if (location == "A") states[1] = "CLEAN";
    else if (location == "B") states[2] = "CLEAN";
  } else if (action_result == "RIGHT") states[0] = "B";
  else if (action_result == "LEFT") states[0] = "A";

  states = dirty(states);

  if (visited_states()) {
    setTimeout(function () {
      test(states);
    }, 2000);
  }else{
    alert("Todos los estados visitados!!!");
  }
}

var states = ["A", "DIRTY", "DIRTY"];
test(states);
