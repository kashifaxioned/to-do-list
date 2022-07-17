let form = document.querySelector(".home__form");
let list = document.querySelector(".home__todo__list");
let noItem = document.querySelector(".home__todo__no-item");
let clearAll = document.querySelector(".home__todo__clear__all");
let items, clear, edit;

// event listener added for claear all btn
clearAll.addEventListener("click", clearAllItems);

// event listener added for submitting the form
form.addEventListener("submit", function(e) { formSubmit(e) });

// function for submit form
function formSubmit(e) {
  e.preventDefault();
  let item = form.elements[0].value;
  addItem(item)
  checkItems()
  form.reset()
}

// function for checking if the items is present or not
function checkItems () {
  if (list.hasChildNodes()) {
    noItem.classList.add("hide")
    clearAll.classList.remove("hide")
  } else {
    noItem.classList.remove("hide")
    clearAll.classList.add("hide")
  }
}

// funtion for adding todo list item 
function addItem(item) {
  let listItem = document.createElement("li");
  listItem.classList.add("home__todo__list__item")
  listItem.innerHTML = `
  <span class="home__todo__list__item__text">${item}</span>
  <span class="home__todo__list__item__edit">edit</span> 
  <span class="home__todo__list__item__clear">clear</span>
  `
  list.appendChild(listItem)

  items = document.querySelectorAll(".home__todo__list__item")

  clear = document.querySelectorAll(".home__todo__list__item__clear");
  clear.forEach (x => x.addEventListener("click", function (e) { handleClear (e); }))

  edit = document.querySelectorAll(".home__todo__list__item__edit");
  edit.forEach (x => x.addEventListener("click", function (e) { handleEdit (e); }))
}

// function for clear the item
function handleClear(e) {
  let clearEle = e.target.parentElement
  checkItems()
}

// function for edit the item
function handleEdit(e) {
  let editText = e.target.previousElementSibling.innerHTML;
  form.elements[0].value = editText;
  handleClear(e)
}

// function for clear all the items
function clearAllItems () {
  items.forEach(x => x.remove())
  checkItems()
}

checkItems()



