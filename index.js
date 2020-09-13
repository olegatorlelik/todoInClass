const titleInput = document.querySelector("#title");
const discriptionInput = document.querySelector("#discription");
const btnAdd = document.querySelector("#add");
const board = document.querySelector("#board");
const modalWindow = document.querySelector("#modal");
const reTitle = document.querySelector("#reTitle");
const reDick = document.querySelector("#reDick");
const saveRe = document.querySelector("#saveRe");

const arr = [];
btnAdd.addEventListener("click", (event) => {
  event.preventDefault();
  board.innerHTML = "";
  const elemState = createElem(titleInput.value, discriptionInput.value);
  titleInput.value = "";
  discriptionInput.value = "";
  arr.push(elemState);
  arr.forEach((elem) => {
    board.innerHTML += createElemInBoard(elem.title, elem.dickription);
  });
});
const createElem = (title, dickription) => {
  let elemArr = {
    title: title,
    dickription: dickription,
  };
  return elemArr;
};
const createElemInBoard = (titleTasck, disckriptionTasck) => {
  return (board.innerHTML = `<div id='card'><p class='titleCardTasck'>${titleTasck}</p><p class='cardDisckTasck'>${disckriptionTasck}</p><button id="btnDelet">Удалить</button><button id="btnRe">Редактировать</button></div>`);
};

board.addEventListener("click", (event) => {
  if (event.target.closest("#btnDelet")) {
    const card = event.target.closest("#card");
    const titleTasck = card.querySelector(".titleCardTasck");
    const dickTack = card.querySelector(".cardDisckTasck");
    arr.forEach((elem, index) => {
      if (
        elem.title === titleTasck.innerHTML &&
        dickTack.innerHTML === elem.dickription
      ) {
        arr.splice(index, 1);
        card.innerHTML = "";
        console.log(arr);
      }
    });
  } else if (event.target.closest("#btnRe")) {
    const cardRe = event.target.closest("#card");
    const titleTasckRe = cardRe.querySelector(".titleCardTasck");
    const dickTackRe = cardRe.querySelector(".cardDisckTasck");

    arr.forEach((elem, index) => {
      if (
        elem.title === titleTasckRe.innerHTML &&
        dickTackRe.innerHTML === elem.dickription
      ) {
        arr.splice(index, 1);
        modalWindow.style.visibility = "visible";
        cardRe.remove();
        reTitle.value = elem.title;
        reDick.value = elem.dickription;
      }
    });
  }
});
saveRe.addEventListener("click", (event) => {
  const reElem = createElem(reTitle.value, reDick.value);
  arr.push(reElem);
  console.log(arr);
  modalWindow.style.visibility = "hidden";
  board.innerHTML += createElemInBoard(reElem.title, reElem.dickription);
});

