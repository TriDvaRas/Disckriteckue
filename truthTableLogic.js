//
function DrawTruthTable(params) {
    var table = document.getElementById('truthTable');
    //head
    var code = "<tr>";
    var SetNames = ["A", "B", "C", "D"];
    for (let i = 0; i < window.SetNum; i++) {
        code += `<th>${SetNames[i]}</th>`;
    }
    code += "<th>ans</th></tr>";
    //body
    
    //add code to the table
    table.innerHTML = code;
}