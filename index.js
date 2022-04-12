let lista = [];


const deleteIcon =
  "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHg9IjBweCIgeT0iMHB4Igp3aWR0aD0iMzAiIGhlaWdodD0iMzAiCnZpZXdCb3g9IjAgMCAzMCAzMCIKc3R5bGU9IiBmaWxsOiMwMDAwMDA7Ij4gICAgPHBhdGggZD0iTSAxNC45ODQzNzUgMi40ODYzMjgxIEEgMS4wMDAxIDEuMDAwMSAwIDAgMCAxNCAzLjUgTCAxNCA0IEwgOC41IDQgQSAxLjAwMDEgMS4wMDAxIDAgMCAwIDcuNDg2MzI4MSA1IEwgNiA1IEEgMS4wMDAxIDEuMDAwMSAwIDEgMCA2IDcgTCAyNCA3IEEgMS4wMDAxIDEuMDAwMSAwIDEgMCAyNCA1IEwgMjIuNTEzNjcyIDUgQSAxLjAwMDEgMS4wMDAxIDAgMCAwIDIxLjUgNCBMIDE2IDQgTCAxNiAzLjUgQSAxLjAwMDEgMS4wMDAxIDAgMCAwIDE0Ljk4NDM3NSAyLjQ4NjMyODEgeiBNIDYgOSBMIDcuNzkyOTY4OCAyNC4yMzQzNzUgQyA3LjkxMDk2ODcgMjUuMjQxMzc1IDguNzYzMzQzOCAyNiA5Ljc3NzM0MzggMjYgTCAyMC4yMjI2NTYgMjYgQyAyMS4yMzY2NTYgMjYgMjIuMDg4MDMxIDI1LjI0MTM3NSAyMi4yMDcwMzEgMjQuMjM0Mzc1IEwgMjQgOSBMIDYgOSB6Ij48L3BhdGg+PC9zdmc+";

document.querySelector("#todo").addEventListener("keypress", function (e) {
  if (e.key === "Enter") {
    dodajNoviTask();
  }
});

function dodajNoviTask() {
  let task = document.querySelector("#todo").value;
  let greska = document.querySelector('.prikazGreske');

  if(task){
    greska.innerHTML = '';
    lista.push(task);
    console.log(lista);
    document.querySelector("#todo").value = "";
  
    ucitajListu();
  }else{
    
    

    let textgreska = `
    <div class="alert">
                        Morate upisati zadatak!!!
          </div>
    `
    greska.innerHTML = textgreska;
  }


  
  
}

function izbrisiTask(task) {
  lista.splice(task, 1);
  ucitajListu();
}

function ucitajListu() {
  let zadatak = document.querySelector(".todoLista");

  if (lista.length == 0) {
    zadatak.innerHTML = "<br>Ne postoji nijedan zadatak";
  } else {
    let novaLista = "";

    for (let li of lista) {
      let index = lista.indexOf(li);
      novaLista += `
    <div class="zadatak">
            <div class="task">${li}</div>
            <div class="opcije"><img onclick="izbrisiTask(${index})" alt="svgImg" src="${deleteIcon}"/></div>
     </div>
    `;
    }

    zadatak.innerHTML = novaLista;
  }
}

ucitajListu();
