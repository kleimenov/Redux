import "./styles.css";

const counter = document.getElementById("counter");
const add = document.getElementById('add')
const sub = document.getElementById('sub')
const colorScheme = document.getElementById('theme')

let state = 0;

//let's connect our representation whith state
function render() {
  counter.textContent = state.toString();
}

//invoke render function
render();
