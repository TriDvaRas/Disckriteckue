function okPressed() {
    text = document.getElementById("Form").value;
    console.log(text);
}
function DrawCircles(num) {
    var drawingCanvas = document.getElementById('mainCanvas');
    var context = drawingCanvas.getContext('2d');
    if (drawingCanvas && drawingCanvas.getContext) {
        context.clear();
        if (num == 2) {
            context.strokeStyle = "#000";
            context.lineWidth = 2;
            // 1 
            context.beginPath();
            context.arc(225, 300, 200, 0, Math.PI * 2, true);
            context.closePath();
            context.stroke();
            //2
            context.beginPath();
            context.arc(375, 300, 200, 0, Math.PI * 2, true);
            context.closePath();
            context.stroke();
        } else if (num == 3) {
            context.strokeStyle = "#000";
            context.lineWidth = 2;
            // 1 
            context.beginPath();
            context.arc(225, 225, 200, 0, Math.PI * 2, true);
            context.closePath();
            context.stroke();
            //2
            context.beginPath();
            context.arc(375, 225, 200, 0, Math.PI * 2, true);
            context.closePath();
            context.stroke();
            //3
            context.beginPath();
            context.arc(300, 375, 200, 0, Math.PI * 2, true);
            context.closePath();
            context.stroke();

        } else if (num == 4) {

        }


    }
}
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
