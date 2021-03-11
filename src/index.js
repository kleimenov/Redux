import "./styles.css";

const counter = document.getElementById("counter");

let state = 0;

//let's connect our representation whith state
function render() {
  counter.textContent = state.toString();
}

//invoke render function
render();
