window.onload = function() {
    var init = document.getElementsByClassName("webvUI-slider2");
    for (var i = init.length - 1; i >= 0; i--) {
        webvUISliderUpdate(init[i]);
    }
}

function webvUISliderUpdate(e) {
    e.parentNode.parentNode.getElementsByClassName("webvUI-sliderValue")[0].innerHTML = e.value;
    var val = (e.value - e.getAttribute('min')) / (e.getAttribute('max') - e.getAttribute('min'));
    e.style.backgroundImage = '-webkit-gradient(linear, left top, right top, color-stop(' + val + ', #0183ff), color-stop(' + val + ', #e9e9e9))';
}

$(document).ready(function() {
    if (document.getElementById("maxRange") !== null) {
        document.getElementById("maxRange").oninput = function() {
            webvUISliderUpdate(this);
            if (this.value < document.getElementById("minRange").value)
                document.getElementById("RangeWarning").style.visibility = "visible";
            else
                document.getElementById("RangeWarning").style.visibility = "hidden";
        }
    }

    if (document.getElementById("minRange") !== null) {
        document.getElementById("minRange").oninput = function() {
            webvUISliderUpdate(this);
            if (this.value > document.getElementById("maxRange").value)
                document.getElementById("RangeWarning").style.visibility = "visible";
            else
                document.getElementById("RangeWarning").style.visibility = "hidden";
        }
    }
});