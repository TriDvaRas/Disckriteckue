//
function DrawTruthTable(params) {
    var table = document.getElementById('truthTable');
    var code = "";
    //head
    code += getHead();
    //body
    code += getBody();
    //add code to the table
    console.log(code);
    
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
        rows.push("<td contenteditable>0</td>");
    }
    for (let i = 0; i < window.SetNum; i++) {
        for (let j = 0; j < Math.pow(2, window.SetNum); j++) {
            rows[j] = `<td>${getNum(i, j)}</td>` + rows[j];
        }
    }
    var c = "";
    for (let i = 0; i < Math.pow(2, window.SetNum); i++) {
        c += `<tr>${rows[i]}</tr>`;
    }
    return c;
}

function getNum(i, j) {
    
    return Math.floor(j / Math.pow(2, i)) % 2;
}