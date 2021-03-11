import "./styles.css";

const counter = document.getElementById("counter");
const add = document.getElementById("add");
const sub = document.getElementById("sub");
const colorScheme = document.getElementById("theme");

let state = 0;

//let's connect our representation whith state (in this case, render function works like a simplified React model)
function render() {
  counter.textContent = state.toString();
}


add.addEventListener("click", () => {
    state++;
  render();
});

sub.addEventListener("click", () => {
    state--;
  render();
});

colorScheme.addEventListener('click', ()=>{
    document.body.classList.toggle('dark')
    colorScheme.classList.toggle('btn-info')
    colorScheme.classList.toggle('btn-custom')
})

//invoke render function
render();
