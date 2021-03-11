import {createStore} from './createStore'
import "./styles.css";

const counter = document.getElementById("counter");
const add = document.getElementById("add");
const sub = document.getElementById("sub");
const colorScheme = document.getElementById("theme");

const store = createStore();

add.addEventListener("click", () => {});

sub.addEventListener("click", () => {});

colorScheme.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  colorScheme.classList.toggle("btn-info");
  colorScheme.classList.toggle("btn-custom");
});
