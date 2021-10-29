//declaration of var important
var screenWith = document.getElementsByTagName("body")[0].clientWidth;
window.activeOne = 1;
window.activeTwo = 2;

//section for logica
window.addEventListener("resize", function () {
  let screenWidthEvent = document.getElementsByTagName("body")[0].clientWidth;
  if (screenWidthEvent < 768) {
    hiddenColForResponsive();
  } else if (screenWidthEvent > 768) {
    clearStyleNone();
  }
});

if (screenWith < "768") {
  hiddenColForResponsive();
}

function viewNext() {
  if (window.activeTwo != 7) {
    window.activeOne++;
    window.activeTwo++;
    hiddenColForResponsive();
  }
}

function viewLast() {
  if (window.activeOne != 1) {
    window.activeOne--;
    window.activeTwo--;
    hiddenColForResponsive();
  }
}

function hiddenControler(btnOne, btnSecond) {
  if (btnOne == 1) {
    document.getElementById("btnResponsiveButtom1").style =
      "visibility:hidden;";
  } else {
    document.getElementById("btnResponsiveButtom1").style =
      "visibility:visible;";
  }

  if (btnSecond == 7) {
    document.getElementById("btnResponsiveButtom2").style =
      "visibility:hidden;";
  } else {
    document.getElementById("btnResponsiveButtom2").style =
      "visibility:visible;";
  }
}

function clearStyleNone() {
  for (y = 1; y <= 7; y++) {
    let cellTable = document.querySelectorAll(`.col${y}`);
    cellTable.forEach((element) => {
      element.style = "display:table-cell;";
    });
  }
}

function hiddenColForResponsive() {
  hiddenControler(window.activeOne, window.activeTwo);
  clearStyleNone();
  for (y = 1; y <= 7; y++) {
    if (y == window.activeOne) {
      continue;
    } else if (y == window.activeTwo) {
      continue;
    }
    let cellTable = document.querySelectorAll(`.col${y}`);
    cellTable.forEach((element) => {
      element.style = "display:none;";
    });
  }
}
