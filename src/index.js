import { createStore } from "./createStore";
import { rootReducer } from "./redux/rootReducer";
import {increment, decrement} from './redux/actions'
import "./styles.css";

const counter = document.getElementById("counter");
const add = document.getElementById("add");
const sub = document.getElementById("sub");
const colorScheme = document.getElementById("theme");

const store = createStore(rootReducer, 0);

window.store = store;

add.addEventListener("click", () => {
  store.dispatch(increment());
});

sub.addEventListener("click", () => {
  store.dispatch(decrement());
});

store.subscribe(() => {
  const state = store.getState();
  counter.textContent = state;
});

store.dispatch({ type: "INIT_APPLICATION" });

colorScheme.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  colorScheme.classList.toggle("btn-info");
  colorScheme.classList.toggle("btn-custom");
});
