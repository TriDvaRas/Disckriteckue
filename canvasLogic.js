//redraw canvas
function DrawCanvas() {
    //get canvas context
    var drawingCanvas = document.getElementById('mainCanvas');
    var context = drawingCanvas.getContext('2d');
    //draw sets into context
    if (drawingCanvas && drawingCanvas.getContext) {
        context.clear();
        if (window.SetNum == 2) {
            DrawShapes(context, window.ShapeList2);
        } else if (window.SetNum == 3) {
            DrawShapes(context, window.ShapeList3);
        } else if (window.SetNum == 4) {
            DrawShapes(context, window.ShapeList4);
        }


    }
}
//DrawShapes
function DrawShapes(canvas, ShapeList) {
    for (let i = 0; i < ShapeList.Objects.length; i++) {
        const A = ShapeList.Objects[i];
        canvas.strokeStyle = "black";
        canvas.lineWidth = A.strokeWidth;
        canvas.beginPath();
        canvas.lineCap = "round";
        // if (A.name == "U") continue;
        if (A.fill) {
            canvas.fillStyle = "rgb(220,220,220)";
        } else {
            canvas.fillStyle = "rgb(255,255,255)";
        }

        for (let index = 0; index < A.path.length; index++) {
            const P = A.path[index];

            if (P.type == "arc") {
                canvas.arc(P.params[0], P.params[1], P.params[2], P.params[3], P.params[4], P.params[5]);
            }
            else if (P.type == "line") {
                if (P.params[2]) {
                    canvas.moveTo(P.params[0], P.params[1]);
                    canvas.lineTo(P.params[2], P.params[3]);
                }
                else {
                    canvas.lineTo(P.params[0], P.params[1]);
                }
            }
            else if (P.type == "rect") {
                canvas.fillRect(P.params[0], P.params[1], P.params[2], P.params[3]);
                canvas.strokeRect(P.params[0], P.params[1], P.params[2], P.params[3]);

            }
        }
        canvas.fill();
        canvas.stroke();
        if (A.labelPos) {
            canvas.font = "42px serif";
            canvas.fillStyle = "rgb(0,0,0)";
            canvas.fillText(A.name, A.labelPos[0], A.labelPos[1])
        }
    }
}
//canvas clearing method
CanvasRenderingContext2D.prototype.clear =
    CanvasRenderingContext2D.prototype.clear || function (preserveTransform) {
        if (preserveTransform) {
            this.save();
            this.setTransform(1, 0, 0, 1, 0, 0);
        }

        this.clearRect(0, 0, this.canvas.width, this.canvas.height);

        if (preserveTransform) {
            this.restore();
        }
    };
//change fill value of set
function fillSet(set, state) {
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
    for (let i = 0; i < arr.Objects.length; i++) {
        const A = arr.Objects[i];
        if (A.name == set)
            A.fill = state;
    }
}