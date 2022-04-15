const deleteIcon =
  "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHg9IjBweCIgeT0iMHB4Igp3aWR0aD0iMzAiIGhlaWdodD0iMzAiCnZpZXdCb3g9IjAgMCAzMCAzMCIKc3R5bGU9IiBmaWxsOiMwMDAwMDA7Ij4gICAgPHBhdGggZD0iTSAxNC45ODQzNzUgMi40ODYzMjgxIEEgMS4wMDAxIDEuMDAwMSAwIDAgMCAxNCAzLjUgTCAxNCA0IEwgOC41IDQgQSAxLjAwMDEgMS4wMDAxIDAgMCAwIDcuNDg2MzI4MSA1IEwgNiA1IEEgMS4wMDAxIDEuMDAwMSAwIDEgMCA2IDcgTCAyNCA3IEEgMS4wMDAxIDEuMDAwMSAwIDEgMCAyNCA1IEwgMjIuNTEzNjcyIDUgQSAxLjAwMDEgMS4wMDAxIDAgMCAwIDIxLjUgNCBMIDE2IDQgTCAxNiAzLjUgQSAxLjAwMDEgMS4wMDAxIDAgMCAwIDE0Ljk4NDM3NSAyLjQ4NjMyODEgeiBNIDYgOSBMIDcuNzkyOTY4OCAyNC4yMzQzNzUgQyA3LjkxMDk2ODcgMjUuMjQxMzc1IDguNzYzMzQzOCAyNiA5Ljc3NzM0MzggMjYgTCAyMC4yMjI2NTYgMjYgQyAyMS4yMzY2NTYgMjYgMjIuMDg4MDMxIDI1LjI0MTM3NSAyMi4yMDcwMzEgMjQuMjM0Mzc1IEwgMjQgOSBMIDYgOSB6Ij48L3BhdGg+PC9zdmc+";

document.querySelector("#todo").addEventListener("keypress", function (e) {
  if (e.key === "Enter") {
    dodajNoviTask();
  }
});

let lista = [];
let zadatak = document.querySelector(".todoLista");
let greska = document.querySelector(".prikazGreske");

function init() {
    
  let data = JSON.parse(localStorage.getItem("data"));
  if (data === null || data < 1) {
    zadatak.innerHTML = "<br>Ne postoji nijedan zadatak";
    localStorage.clear();
  } else {
    lista = data;
    ucitajListu(lista);
  }
}

function ucitajListu(lista) {
  let novaLista = "";
  for (let i in lista) {
    novaLista += `
        <div class="zadatak">
            <div class="task">${lista[i]}</div>
            <div class="opcije"><img onclick="izbrisiTask(${i})" alt="svgImg" src="${deleteIcon}"/></div>
        </div>
            `;
  }
  zadatak.innerHTML = novaLista;
}

function dodajNoviTask() {
  let task = document.querySelector("#todo").value;

  if (task.length > 0) {
    greska.innerHTML = "";
    lista.push(task);
    ucitajListu(lista);
    updateStorege(lista);
    document.querySelector("#todo").value = "";
  } else {
    let textgreska = `
        <div class="alert">
            Morate upisati zadatak!!!
        </div>
        `;

    greska.innerHTML = textgreska;
  }
}

function updateStorege(lista) {
  let data = JSON.stringify(lista);
  localStorage.setItem("data", data);
  init();
}

function izbrisiTask(i) {
  lista.splice(i, 1);
  updateStorege(lista);
}

window.addEventListener("load", init);
