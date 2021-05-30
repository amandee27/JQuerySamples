var output = $("div.output");
var start = $("div.rowBottom button.start");
var reset = $("div.rowBottom button.reset");
output.html(val);
var val = 0;

console.log();
var interval = null;
var isRunning = false;

function display(val) {
    var displayText = "";
    var mili = val % 100;
    var seconds = Math.floor(val / 100);
    var minutes = Math.floor(seconds / 60);
    var hour = Math.floor(minutes / 60);

    if (hour > 0) {
        displayText = hour + "<span class= \"sample\">h</span> ";
    }
    if (minutes > 0) {
        displayText = displayText + (minutes % 60) + "<span class= \"sample\">m</span> ";
    }

    if (seconds > 0) {
        displayText = displayText + (seconds % 60) + "<span class= \"sample\">s</span> ";
    }

    displayText = displayText + mili;

    return displayText;
}


start.click(function () {
    if (isRunning) {
        clearInterval(interval);
        isRunning = false;
        start.html("Start");
    } else {
        interval = setInterval(function () {
            val = val + 1;
            output.html(display(val));
        }, 1000 / 100);
        isRunning = true;
        start.html("Stop");
    }
});

reset.click(function () {
    val = 0;
    clearInterval(interval);
    output.html(val);
    start.html("Start");
});
