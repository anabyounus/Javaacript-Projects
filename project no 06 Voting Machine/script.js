// =======nav bar start
// =======nav bar end






// ============voting system strat======
let submitBtn = document.getElementById("submit-btn");
let nameInput = document.getElementById("name-input");
let namesList = document.getElementById("names-list");

submitBtn.addEventListener("click", () => {
  const name = nameInput.value.trim();
  if (name) {
    addNameToList(name);
    nameInput.value = "";
  }
});

function addNameToList(name) {
  const nameItems = namesList.getElementsByClassName("name-item");
  for (let i = 0; i < nameItems.length; i++) {
    if (nameItems[i].textContent.startsWith(name)) {
      return;
    }
  }

  const nameItem = document.createElement("div");
  nameItem.className = "name-item";
  nameItem.textContent = name;
  nameItem.dataset.count = 0;

  nameItem.addEventListener("click", () => {
    nameItem.dataset.count++;
    nameItem.textContent = `${name} (${nameItem.dataset.count})`;
  });

  namesList.appendChild(nameItem);
}


// ============voting system End======
