let table = document.getElementById("myTable");
let cells = document.querySelectorAll('td'); //table cells
let display = document.getElementById("display");
let turn = 0;
let yellow = 0;
let red = 0;
cells.forEach(cell => {
    cell.addEventListener('click', function() {
        clearDisplay();
        if(turn === 0 && cell.getAttribute('value') == "") {
          cell.style.backgroundColor = 'yellow';
          cell.setAttribute('value','yellow');
           turn = 1;
        } else if (turn === 1 && cell.getAttribute('value') == "") {
            cell.style.backgroundColor = 'red';
            cell.setAttribute('value','red');
            turn = 0;
        }
        checkVertically();
        checkHorizontally();
        checkDiagonal();
    });
});

function checkVertically() {
    yellow = 0;
    red = 0;
    for(let j = 0; j <= 6; ++j) {
        for(let i = 5; i >= 0; --i) {
            if(table.rows[i].cells[j].getAttribute('value') === "yellow") {
                red = 0;
                ++yellow;
                if(yellow === 4) {
                    display.innerHTML = "Yellow is our winner";
                    clearCells();
                    turn = 0;
                    break;
                }
            } else if (table.rows[i].cells[j].getAttribute('value') === "red") {
                yellow = 0;
                ++red;
                if(red === 4) {
                    display.innerHTML = "Red is our winner";
                    clearCells();
                    turn = 0;
                    break;
                }
            } else if(table.rows[i].cells[j].getAttribute('value') === "") {
                yellow = 0;
                red = 0;
            }
        }
    }
}

function checkHorizontally() {
    yellow = 0;
    red = 0;
    for(let i = 5; i >= 0; --i) {
        for(let j = 0; j <= 6; ++j) {
            if(table.rows[i].cells[j].getAttribute('value') === "yellow") {
                red = 0;
                ++yellow;
                if(yellow === 4) {
                    display.innerHTML = "Yellow is our winner";
                    clearCells();
                    turn = 0;
                    break;
                }
            } else if (table.rows[i].cells[j].getAttribute('value') === "red") {
                yellow = 0;
                ++red;
                if(red === 4) {
                    display.innerHTML = "Red is our winner";
                    clearCells();
                    turn = 0;
                    break;
                }
            } else if(table.rows[i].cells[j].getAttribute('value') === "") {
                yellow = 0;
                red = 0;
            }
        }
    }
}

function clearCells() {
    for(let j = 0; j <= 6; ++j) {
        for(let i = 5; i >= 0; --i) {
            table.rows[i].cells[j].setAttribute('value',"");
            table.rows[i].cells[j].style.backgroundColor = "white";
        }
    }
}

function clearDisplay() {
    display.innerHTML = "";
}

function checkDiagonal() {
    yellow = 0;
    red = 0;
    for(let i = 0; i <= 2; ++i) {
        let linie = i;
        let coloana = 0;
        while(linie <= 5 && coloana <= 6) {
            if(table.rows[linie].cells[coloana].getAttribute('value') === "yellow") {
                red = 0;
                ++yellow;
                if(yellow === 4) {
                    display.innerHTML = "Yellow is our winner";
                    clearCells();
                    turn = 0;
                    break;
                }
            } else if (table.rows[linie].cells[coloana].getAttribute('value') === "red") {
                yellow = 0;
                ++red;
                if(red === 4) {
                    display.innerHTML = "Red is our winner";
                    clearCells();
                    turn = 0;
                    break;
                }
            } else if(table.rows[linie].cells[coloana].getAttribute('value') === "") {
                yellow = 0;
                red = 0;
            }
            ++linie;
            ++coloana;
        }
    }
    yellow = 0;
    red = 0;
    for(let j = 0; j <= 3; ++j) {
        let linie = 0;
        let coloana = j;
        while(linie <= 5 && coloana <= 6) {
            if(table.rows[linie].cells[coloana].getAttribute('value') === "yellow") {
                red = 0;
                ++yellow;
                if(yellow === 4) {
                    display.innerHTML = "Yellow is our winner";
                    clearCells();
                    turn = 0;
                    break;
                }
            } else if (table.rows[linie].cells[coloana].getAttribute('value') === "red") {
                yellow = 0;
                ++red;
                if(red === 4) {
                    display.innerHTML = "Red is our winner";
                    clearCells();
                    turn = 0;
                    break;
                }
            } else if(table.rows[linie].cells[coloana].getAttribute('value') === "") {
                yellow = 0;
                red = 0;
            }
            ++linie;
            ++coloana;
        }
    }
    yellow = 0;
    red = 0;
    for(let j = 6; j >= 3; --j) {
        let linie = 0;
        let coloana = j;
        while(linie <= 5 && coloana >= 0) {
            if(table.rows[linie].cells[coloana].getAttribute('value') === "yellow") {
                red = 0;
                ++yellow;
                if(yellow === 4) {
                    display.innerHTML = "Yellow is our winner";
                    clearCells();
                    turn = 0;
                    break;
                }
            } else if (table.rows[linie].cells[coloana].getAttribute('value') === "red") {
                yellow = 0;
                ++red;
                if(red === 4) {
                    display.innerHTML = "Red is our winner";
                    clearCells();
                    turn = 0;
                    break;
                }
            } else if(table.rows[linie].cells[coloana].getAttribute('value') === "") {
                yellow = 0;
                red = 0;
            }
            ++linie;
            --coloana;
        }
    }
    yellow = 0;
    red = 0;
    for(let i = 0; i <= 2; ++i) {
        let linie = i;
        let coloana = 6;
        while(linie <= 5 && coloana >= 0) {
            if(table.rows[linie].cells[coloana].getAttribute('value') === "yellow") {
                red = 0;
                ++yellow;
                if(yellow === 4) {
                    display.innerHTML = "Yellow is our winner";
                    clearCells();
                    turn = 0;
                    break;
                }
            } else if (table.rows[linie].cells[coloana].getAttribute('value') === "red") {
                yellow = 0;
                ++red;
                if(red === 4) {
                    display.innerHTML = "Red is our winner";
                    clearCells();
                    turn = 0;
                    break;
                }
            } else if(table.rows[linie].cells[coloana].getAttribute('value') === "") {
                yellow = 0;
                red = 0;
            }
            ++linie;
            --coloana;
        }
    }
}
