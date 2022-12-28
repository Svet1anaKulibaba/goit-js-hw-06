const ingredients = 
[
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
  ];

const list = document.getElementById("ingredients");

ingredients.forEach((ingredient) => {
  const item = document.createElement("li");
  item.innerText = ingredient;
  item.classList.add("itemEl");
  list.append(item)
})









