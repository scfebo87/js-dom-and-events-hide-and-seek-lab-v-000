function getFirstSelector(selector) {
  return document.querySelector(selector); 
}

function nestedTarget() { 
  return document.getElementById(`nested`).querySelector(`.target`);
}

function increaseRankBy(n) { 
  const listItems = document.getElementById(`app`).querySelectorAll(`.ranked-list li`);
  for (let i = 0; i < listItems.length; i++) {
    listItems[i].innerHTML = parseInt(listItems[i].innerHTML) + n; 
  }
}
  
function deepestChild() { 
  