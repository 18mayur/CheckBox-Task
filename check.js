// const checkboxes = document.querySelectorAll("input[type=checkbox]");
const selectAll = document.getElementById("selectAll-1");
const selectAll2 = document.getElementById("selectAll-2");
let checkboxes1 = document.querySelectorAll("#ul-1 input[type=checkbox]");
let checkboxes2 = document.querySelectorAll("#ul-2 input[type=checkbox]");
const nextBtn = document.querySelector(".btn-1");
const backBtn = document.querySelector(".btn-2");
let ul2 = document.querySelector("#ul-2");
let ul1 = document.querySelector("#ul-1");
let poke = document.querySelector(".poke");
const url = "https://pokeapi.co/api/v2/pokemon/";

let pokemonData = () => {
  let id = Math.floor(Math.random() * 150) + 1;
  const finalUrl = url + id;
  fetch(finalUrl)
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
    });
};
poke.addEventListener("click", pokemonData);
//select all checkbox
selectAll.addEventListener("click", () => {
  checkboxes1.forEach((checkbox) => {
    checkbox.checked = selectAll.checked;
    nextBtn.disabled = !selectAll.checked;
  });
});
selectAll2.addEventListener("click", () => {
  checkboxes2.forEach((checkbox) => {
    checkbox.checked = selectAll2.checked;
    backBtn.disabled = !selectAll2.checked;
  });
});

checkboxes1.forEach((checkbox) => {
  checkbox.addEventListener("click", () => {
    let allChecked = true;
    for (let checkbox of checkboxes1) {
      if (!checkbox.checked) {
        allChecked = false;
        break;
      }
    }
    selectAll2.checked = false;
    selectAll.checked = allChecked;

    let anyChecked = false;
    for (let checkbox of checkboxes1) {
      if (checkbox.checked) {
        anyChecked = true;
        break;
      }
    }
    nextBtn.disabled = !anyChecked;
  });
});
checkboxes2.forEach((checkbox) => {
  checkbox.addEventListener("click", () => {
    let allcheck = true;
    for (let checkbox of checkboxes2) {
      if (!checkbox.checked) {
        console.log(checkbox.checked);
        allcheck = false;
        break;
      }
    }
    selectAll.checked = false;
    selectAll2.checked = allcheck;

    let anyChecked = false;
    for (let checkbox of checkboxes2) {
      if (checkbox.checked) {
        anyChecked = true;
        break;
      }
    }
    backBtn.disabled = !anyChecked;
  });
});

nextBtn.addEventListener("click", () => {
  checkboxes1.forEach((item) => {
    console.log(item);
    if (item.checked) {
      let check = item.parentElement;
      check.remove();
      ul2.appendChild(check);
      item.checked = false;
    }
  });
  nextBtn.disabled = true;
  selectAll.checked = false;
  updateCheckboxListeners();
});
backBtn.addEventListener("click", () => {
  checkboxes2.forEach((item) => {
    console.log();
    if (item.checked) {
      let check = item.parentElement;
      console.log(check);
      check.remove();
      ul1.appendChild(check);
      item.checked = false;
    }
  });
  backBtn.disabled = true;
  selectAll2.checked = false;
  updateCheckboxListeners();
});

function updateCheckboxListeners() {
  checkboxes1 = document.querySelectorAll("#ul-1 input[type=checkbox]");
  checkboxes1.forEach((checkbox) => {
    checkbox.addEventListener("click", () => {
      let allChecked = true;
      for (let checkbox of checkboxes1) {
        if (!checkbox.checked) {
          allChecked = false;
          break;
        }
      }
      selectAll2.checked = false;
      selectAll.checked = allChecked;

      let anyChecked = false;
      for (let checkbox of checkboxes1) {
        if (checkbox.checked) {
          anyChecked = true;
          break;
        }
      }
      nextBtn.disabled = !anyChecked;
    });
  });

  checkboxes2 = document.querySelectorAll("#ul-2 input[type=checkbox]");
  checkboxes2.forEach((checkbox) => {
    checkbox.addEventListener("click", () => {
      let allChecked = true;
      for (let checkbox of checkboxes2) {
        if (!checkbox.checked) {
          allChecked = false;
          break;
        }
      }
      selectAll.checked = false;
      selectAll2.checked = allChecked;

      let anyChecked = false;
      for (let checkbox of checkboxes2) {
        if (checkbox.checked) {
          anyChecked = true;
          break;
        }
      }
      backBtn.disabled = !anyChecked;
    });
  });
}
updateCheckboxListeners();
