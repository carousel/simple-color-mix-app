// written by Miroslav Trninic
// miroslav.trninic@gmail.com

// app is structured in object literal
var slider = {
//ball rolling init method
    init:function () {
        this.cacheElements();
        this.events()
    },
//DOM elements are cached in the spirit of good practice
    cacheElements:function () {
        this.redSlider = document.querySelectorAll("input[type=range]")[0];
        this.greenSlider = document.querySelectorAll("input[type=range]")[1];
        this.blueSlider = document.querySelectorAll("input[type=range]")[2];
        this.hexInput = document.querySelectorAll("input[type=text]")[0];

    },
    //events attached to elements
    events: function () {
        this.redSlider.addEventListener("change",slider.addBgColor)
        this.greenSlider.addEventListener("change",slider.addBgColor)
        this.blueSlider.addEventListener("change",slider.addBgColor)
        this.hexInput.addEventListener("keydown",slider.addInputColor)

    },
    //conversion1
    compToHex: function(c) {
        var hex = c.toString(16);
            return hex.length === 1 ? "0" + hex : hex;
    },
    //conversion2
    rgbToHex: function (r,g,b) {
        return "#" + this.compToHex(r) + this.compToHex(g) + this.compToHex(b);

    },
    //user input handler
    addInputColor: function (e) {
        if (e.which === 13){
            document.body.style.backgroundColor = this.value;
        }
    },
    //slider handler
    addBgColor: function () {
        var val = [slider.redSlider.value,slider.greenSlider.value,slider.blueSlider.value];

        var convert = slider.rgbToHex(parseInt(val[0]),parseInt(val[1]),parseInt(val[2]));
        document.body.style.background = convert;
        var hex = document.getElementById("hex");
        hex.value = convert;
    }
};

//start app
slider.init()
