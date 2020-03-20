//globals
SetNum = 2;
function PageLoaded(params) {
    ChangeSetNum(2);
    LoadFigures();
    DrawTruthTable();
    truthTable.onkeypress = keyHandle;
    truthTable.ondblclick = dblClHandle;
}


//write input into global
function okPressed() {
    text = document.getElementById("Form").value;
    console.log(text);
}

//radio button change
function ChangeSetNum(num) {
    if (SetNum != num) {
        SetNum = num;
        DrawCanvas();
        DrawTruthTable();
    }
}






