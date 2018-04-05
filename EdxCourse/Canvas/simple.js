var canvas, ctx;
var CANVAS_HEIGHT;
var REC_WIDTH = 10;
var REC_HEIGHT = 40;
var LETTER_HEIGHT = 20;
var COLORS = ["blue", "green", "black", "orange", "purple", "brown", "yellow", "grey", "pink", "red"];
var wrapper = /** @class */ (function () {
    function wrapper() {
    }
    wrapper.prototype.init = function (data) {
        canvas = document.querySelector("#myCanvas");
        ctx = canvas.getContext('2d');
        CANVAS_HEIGHT = canvas.height;
        this.histogram(data);
    };
    wrapper.prototype.histogram = function (data) {
        ctx.save();
        // horizontal layout
        var PADDING = 10;
        var BAR_W = 40;
        var BORDER_W = data.length * (PADDING + BAR_W) + PADDING;
        var BORDER_H = 400;
        var X_ORIGIN = (canvas.width - BORDER_W) / 2;
        ;
        var Y_ORIGIN = (canvas.height - BORDER_H) / 2;
        // TITLE
        var TITLE = "Histogram (" + data.length + " elements)";
        this.displayTitle(TITLE, CANVAS_HEIGHT - Y_ORIGIN - BORDER_H + 2 * LETTER_HEIGHT, "black");
        // spacing
        var BAR_Y = 3;
        var X_STEP = BAR_W + PADDING;
        ctx.save();
        // frame    
        ctx.lineWidth = 2;
        ctx.color = "black";
        this.flipStrokeRect(X_ORIGIN, Y_ORIGIN, BORDER_W, BORDER_H, "black");
        // bars
        var xBar = X_ORIGIN + PADDING;
        for (var i = 0, len = data.length; i < len; i++) {
            var element = data[i];
            this.flipFillRect(xBar, BAR_Y + Y_ORIGIN, BAR_W, element, COLORS[i % COLORS.length]);
            this.dataText(element, xBar, Y_ORIGIN, BAR_W, "green");
            xBar = xBar + X_STEP;
        }
        ctx.restore();
    };
    wrapper.prototype.flipFillRect = function (x, y, w, h, color) {
        ctx.fillStyle = color;
        ctx.fillRect(x, CANVAS_HEIGHT - y - h, w, h);
    };
    wrapper.prototype.flipStrokeRect = function (x, y, w, h, color) {
        ctx.fillStyle = color;
        ctx.strokeRect(x, CANVAS_HEIGHT - y - h, w, h);
    };
    wrapper.prototype.dataText = function (data, x, y, w, color) {
        ctx.fillStyle = color;
        ctx.fillText(data, x + w / 3, CANVAS_HEIGHT - y + LETTER_HEIGHT);
    };
    wrapper.prototype.displayTitle = function (title, y, color) {
        ctx.save();
        ctx.font = "30px Verdana";
        ctx.fillStyle = color;
        var textWidth = ctx.measureText(title).width;
        var text_x = (canvas.width - textWidth) / 2;
        ctx.fillText(title, text_x, y);
        ctx.restore();
    };
    /*     drawRectangle() {
            let startX = canvas.width - 199;
            let endX = startX + 1;
            let startY = canvas.height - 299;
            let endY = startY + 10;
            console.log(startX, endX, startY, endY);
            this.clearCanvas();
            ctx.fillRect(410, 100, REC_WIDTH, REC_HEIGHT);
        } */
    wrapper.prototype.clearCanvas = function () {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
    };
    return wrapper;
}());
window.onload = function () {
    var app = new wrapper();
    var data = [100, 50, 300, 200, 220, 260, 322, 33, 243, 143, 88, 99, 344, 135];
    app.init(data);
};
/*

drawRectangle() {
    var startX = MAX_WIDTH - 199;
    var endX = startX + 1;
    var startY = MAX_HEIGHT - 299;
    var endY = startY + 10;
    console.log(startX, endX, startY, endY);
    clearCanvas();
    ctx.fillRect(410, 100, REC_WIDTH, REC_HEIGHT);
}

drawSomething() {
   ctx.lineWidth=5;
   ctx.fillStyle='red';
   ctx.strokeStyle='blue'
   // font for all text drawing
   ctx.font = 'italic 20pt Calibri';
   // Draw the two filled red rectangles
   ctx.fillRect(10, 30, 70, 150);
   ctx.fillRect(110, 30, 70, 150);
   // Draw the two blue wireframe rectangles
   ctx.strokeRect(10, 30, 70, 150);
   ctx.strokeRect(110, 30, 70, 150);
   // Draw a message above the rectangles
   ctx.fillText("hello", 70, 22);
}



histogram() {
    ctx.save();
    var data = [100, 50, 300, 200, 220, 260];

    // origin
    var BORDER_W = 320;
    var BORDER_H = 400;
    var X_ORIGIN = (canvas.width - BORDER_W) / 2;;
    var Y_ORIGIN = (canvas.height - BORDER_H) / 2;

    // TITLE
    var TITLE = "Histogram";
    displayTitle(TITLE, CANVAS_HEIGHT  - Y_ORIGIN - BORDER_H + 2 * LETTER_HEIGHT);

    // spacing
    var BAR_Y = 3;
    var BAR_W = 40
    var PADDING = 10
    var X_STEP = BAR_W + PADDING;


    ctx.save();
    // frame
    ctx.lineWidth = 2;
    ctx.color = "black";
    flipStrokeRect(X_ORIGIN, Y_ORIGIN,  BORDER_W, BORDER_H, "black")

    // bars
    var xBar = X_ORIGIN + PADDING;
    for (var i=0, len=data.length; i<len; i++) {
        var element = data[i];
        flipFillRect(xBar, BAR_Y + Y_ORIGIN, BAR_W, element, COLORS[i]);
        dataText(element, xBar, Y_ORIGIN, BAR_W, "green");
        xBar = xBar + X_STEP;
    }
    ctx.restore();
}

flipFillRect(x, y, w, h, color) {
    ctx.fillStyle = color;
    ctx.fillRect(x, CANVAS_HEIGHT - y - h, w, h);
}

flipStrokeRect(x, y, w, h, color) {
    ctx.fillStyle = color;
    ctx.strokeRect(x, CANVAS_HEIGHT - y - h, w, h);
}

dataText(data, x, y, w, color) {
    ctx.fillStyle = color;
    ctx.fillText(data, x + w / 3, CANVAS_HEIGHT  - y + LETTER_HEIGHT);
}

displayTitle(title, y, color) {
    ctx.save();
    ctx.font="30px Verdana";
    ctx.fillStyle = color;
    var textWidth = ctx.measureText(title).width
    var text_x = (canvas.width - textWidth) / 2;
    ctx.fillText(title, text_x, y);
    ctx.restore();
}
 */ 
//# sourceMappingURL=simple.js.map