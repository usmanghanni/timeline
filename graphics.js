var elem = document.getElementById('canvas');
var params = { width: 800, height: 600 };
var two = new Two(params).appendTo(elem);

var sliderX = 50;
var sliderY = 500;

var line = two.makeLine(sliderX, sliderY, sliderX + 500, sliderY);
line.linewidth = 8;
line.stroke = "rgba(175,73,35, 1.0)";

var circles = [];
for (var i = 0; i <= 5; i++) {
    circles[i] = two.makeCircle(sliderX + i * 100, sliderY, 7);
    circles[i].fill = "rgba(175,73,35, 1.0)";
    circles[i].stroke = null;
}

two.update();

function circlehover(cir) {
    cir._renderer.elem.addEventListener('mouseover', function () {
        cir.fill = 'rgba(100,100,70, 1.0)';
        two.update();
    }, false);
    cir._renderer.elem.addEventListener('mouseout', function () {
        cir.fill = 'rgba(175,73,35, 1.0)';
        two.update();
    }, false);

}
for (var i = 0; i <= 5; i++) {
    circlehover(circles[i]);
}
