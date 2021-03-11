import {createStore} from './createStore'
import { rootReducer } from './redux/rootReducer';
import "./styles.css";

const counter = document.getElementById("counter");
const add = document.getElementById("add");
const sub = document.getElementById("sub");
const colorScheme = document.getElementById("theme");

const store = createStore(rootReducer, 0);

window.store = store

add.addEventListener("click", () => {
    store.dispatch({type: 'INCREMENT'})
});

sub.addEventListener("click", () => {
    store.dispatch({type: 'DECREMENT'})
});


store.subscribe(()=> {
    const state = store.getState()
    counter.textContent = state
})

colorScheme.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  colorScheme.classList.toggle("btn-info");
  colorScheme.classList.toggle("btn-custom");
});
