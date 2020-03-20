//preload figures data into globals
function LoadFigures() {
    GetShapes(2).then((data) => {
        ShapeList2 = data;
        DrawCanvas();
    });
    GetShapes(3).then((data) => {
        ShapeList3 = data;
    });

    GetShapes(4).then((data) => {
        ShapeList4 = data;
    });
}

//get shapelist data
function GetShapes(num) {
    return new Promise(function (resolve, reject) {
        var request = new XMLHttpRequest();
        request.open('GET', `https://tridvaras.github.io/Disckriteckue/Shapes/${num}.json`);
        request.responseType = 'json';
        request.send();

        request.onload = function () {
            data = request.response;
            console.log(data);

            resolve(data);
        }
    });

}