const titleInput = document.querySelector("#title");
const discriptionInput = document.querySelector("#discription");
const btnAdd = document.querySelector("#add");
const board = document.querySelector("#board");
const modalWindow = document.querySelector("#modal");
const reTitle = document.querySelector("#reTitle");
const reDick = document.querySelector("#reDick");
const saveRe = document.querySelector("#saveRe");
const textErrorValue = document.querySelector("#errorText");
const dataValue = document.querySelector("#dataTasck");
const arr = [];

btnAdd.addEventListener("click", (event) => {
  if (titleInput.value === "" && discriptionInput.value === "") {
    textErrorValue.style.visibility = "visible";
    event.preventDefault();
  } else {
    event.preventDefault();
    textErrorValue.style.visibility = "hidden";
    board.style.visibility = "visible";
    board.innerHTML = "";
    const elemState = createElem(
      titleInput.value,
      discriptionInput.value,
      dataValue.value
    );

    titleInput.value = "";
    discriptionInput.value = "";
    arr.push(elemState);
    arr.forEach((elem) => {
      board.innerHTML += createElemInBoard(
        elem.title,
        elem.dickription,
        elem.data
      );
    });
  }
});

board.addEventListener("click", (event) => {
  switch (event.target) {
    case event.target.closest("#btnDelet"):
      deletElem("#card", ".titleCardTasck", ".cardDisckTasck");
      break;
    case event.target.closest("#btnRe"):
      editElem("#card", ".titleCardTasck", ".cardDisckTasck");
      break;
  }
});

saveRe.addEventListener("click", (event) => {
  const reElem = createElem(reTitle.value, reDick.value, dataValue.value);
  dataValue.value = "";
  arr.push(reElem);
  console.log(arr);
  modalWindow.style.visibility = "hidden";
  return (board.innerHTML += createElemInBoard(
    reElem.title,
    reElem.dickription,
    reElem.data
  ));
});

// >>>FUNCTINO<<<<<

const deletElem = (elemCard, elemTitle, elemDiscription) => {
  const card = event.target.closest(elemCard);
  const titleTasck = card.querySelector(elemTitle);
  const dickTack = card.querySelector(elemDiscription);
  arr.forEach((elem, index) => {
    if (
      elem.title === titleTasck.innerHTML &&
      dickTack.innerHTML === elem.dickription
    ) {
      arr.splice(index, 1);
      card.innerHTML = "";
      console.log(arr);
      card.remove();
    }
  });
  if (board.innerHTML === "") {
    board.style.visibility = "hidden";
  }
};

const editElem = (elemCard, elemTitle, elemDiscription) => {
  const card = event.target.closest(elemCard);
  const titleTasck = card.querySelector(elemTitle);
  const dickTack = card.querySelector(elemDiscription);
  arr.forEach((elem, index) => {
    if (
      elem.title === titleTasck.innerHTML &&
      dickTack.innerHTML === elem.dickription
    ) {
      arr.splice(index, 1);
      modalWindow.style.visibility = "visible";
      card.remove();
      reTitle.value = elem.title;
      reDick.value = elem.dickription;
    }
  });
};

const hiddenBoard = () => {
  if (board.innerHTML === "") {
    board.style.visibility = "hidden";
  }
};
const createElem = (title, dickription, data) => {
  let elemArr = {
    title: title,
    dickription: dickription,
    data: data,
  };
  return elemArr;
};

const createElemInBoard = (titleTasck, disckriptionTasck, dataTasck) => {
  return (board.innerHTML = `<div id='card'><p class='titleCardTasck'>${titleTasck}</p><p class='cardDisckTasck'>${disckriptionTasck}</p><p class="date">${dataTasck}</p><button id="btnDelet">Удалить</button><button id="btnRe">Редактировать</button></div>`);
};

board.addEventListener("mouseover", (event) => {
  const card = event.target.closest("#card");
  if (event.target.id === "card") {
    card.classList.add("shawod");
  }
});

board.addEventListener("mouseout", (event) => {
  const card = event.target.closest("#card");
  if (event.target.id === "card") {
    card.classList.remove("shawod");
  }
});
