var img = null;
var image = null;
var image1 = null;

function upload() {
    var canvas = document.getElementById("c1");
    var input = document.getElementById("finput");

    img = new SimpleImage(input);
    img.drawTo(canvas);
}

function makegray() {
    var canvs = document.getElementById("c2");
    for (var pixel of img.values()) {
        var avg = (pixel.getGreen() + pixel.getBlue() + pixel.getRed()) / 3
        pixel.setRed(avg);
        pixel.setGreen(avg);
        pixel.setBlue(avg);

    }
    img.drawTo(canvs);

}