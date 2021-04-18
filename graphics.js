var elem = document.getElementById('canvas');
var params = { width: 800, height: 600 };
var two = new Two(params).appendTo(elem);

var sliderX = 50;
var sliderY = 500;
var sliderStroke = "rgba(175,73,35, 1.0)";
var sliderStrokeHover = "rgba(64, 48, 53, 1.0)";

var line = two.makeLine(sliderX, sliderY, sliderX + 700, sliderY);
line.linewidth = 8;
line.stroke = sliderStroke;

var circles = [];
for (var i = 0; i <= 7; i++) {
    circles[i] = two.makeCircle(sliderX + i * 100, sliderY, 6.5);
    circles[i].fill = sliderStroke;
    circles[i].stroke = null;
}

two.update();

function circlehover(cir) {
    cir._renderer.elem.addEventListener('mouseover', function () {
        cir.fill = sliderStrokeHover;
        two.update();
    }, false);
    cir._renderer.elem.addEventListener('mouseout', function () {
        cir.fill = sliderStroke;
        two.update();
    }, false);

}
for (var i = 0; i <= 7; i++) {
    circlehover(circles[i]);
}
