//
function DrawTruthTable(params) {
    var table = document.getElementById('truthTable');
    var code = "";
    //head
    code += getHead();
    //body
    code += getBody();
    //add code to the table
    table.innerHTML = code;
}

function getHead() {
    const SetNames = ["A", "B", "C", "D"];
    var c = "<tr>";
    for (let i = 0; i < window.SetNum; i++) {
        c += `<th>${SetNames[i]}</th>`;
    }
    return c + "<th>ans</th></tr>";
}

function getBody() {
    var rows = [];
    for (let i = 0; i < Math.pow(2, window.SetNum); i++) {
        rows.push(`<td id="tt${i}" contenteditable maxlength="1">${getSetState(ttIdToSetName(i))}</td>`);
    }
    for (let i = 0; i < window.SetNum; i++) {
        for (let j = 0; j < Math.pow(2, window.SetNum); j++) {
            rows[j] = `<td>${getTTNum(i, j)}</td>` + rows[j];
        }
    }
    var c = "";
    for (let i = 0; i < Math.pow(2, window.SetNum); i++) {
        c += `<tr>${rows[i]}</tr>`;
    }
    return c;
}
//get nember for tt filling
function getTTNum(i, j) {

    return Math.floor(j / Math.pow(2, i)) % 2;
}
//get set name by tt id
function ttIdToSetName(j) {
    s = "";
    setNames = ["A", "B", "C", "D"];
    b2 = Base10ToRBase2(j).split('');
    for (let i = 0; i < b2.length; i++) {
        if (b2[i] == 1) {
            s += setNames[i];
        }
    }
    if (s == "")
        s = "U";
    console.log(s);

    return s;
}

function Base10ToRBase2(j) {
    str = "";
    for (let i = 0; i < window.SetNum; i++) {

        str = j % 2 + str;
        
        j = Math.floor(j / 2);
    }

    return str;
}
//keyDownHandler
function keyHandle(e) {
    let eId = document.activeElement.id;
    if (eId.startsWith("tt")) {
        e.preventDefault();
        let oldValue = document.activeElement.innerHTML.charAt(0);
        eId = eId.substring(2);
        if (e.code == "Digit0" || e.code == "Numpad0") {

            fillSet(ttIdToSetName(eId), false);
            DrawCanvas();
            document.activeElement.innerHTML = "0";
            moveToNext(eId);
        }
        else if (e.code == "Digit1" || e.code == "Numpad1") {
            fillSet(ttIdToSetName(eId), true);
            DrawCanvas();
            document.activeElement.innerHTML = "1";
            moveToNext(eId);
        }
        else {
            document.activeElement.innerHTML = oldValue;
        }
    }
}
function dblClHandle(e) {
    let eId = document.activeElement.id.substring(2);
    let oldValue = document.activeElement.innerHTML.charAt(0);
    e.preventDefault();
    if (oldValue == "1") {
        fillSet(ttIdToSetName(eId), false);
        DrawCanvas();
        document.activeElement.innerHTML = "0";
    }
    else if (oldValue == "0") {
        fillSet(ttIdToSetName(eId), true);
        DrawCanvas();
        document.activeElement.innerHTML = "1";
    }
}
function moveToNext(id) {
    id++;
    var el = document.getElementById(`tt${id}`)

    if (el)
        el.focus();
    else {
        el = document.getElementById(`tt0`);
        el.focus();
    }
}
function getSetState(setCode) {
    let arr;
    switch (SetNum) {
        case 2:
            arr = window.ShapeList2;
            break;
        case 3:
            arr = window.ShapeList3;
            break;
        case 4:
            arr = window.ShapeList4;
            break;
        default:
            break;
    }
    if (!arr)
        return 0;
    for (let i = 0; i < arr.Objects.length; i++) {
        const A = arr.Objects[i];
        if (A.name == setCode)
            if (A.fill)
                return 1;
            else
                return 0;
    }
    return 0;
}