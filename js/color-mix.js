// set body to listen for change event
document.body.addEventListener("change",function(){

    var red,green,blue,convert;

    //query dom elements
    red = document.querySelectorAll("input")[0];
    green = document.querySelectorAll("input")[1];
    blue = document.querySelectorAll("input")[2];
    val = [red.value,green.value,blue.value];

    //component to hex
    function compToHex(c) {
        var hex = c.toString(16);
            return hex.length === 1 ? "0" + hex : hex;
        }

    //rgb to hex
    function rgbToHex(a,b,c) {
            return "#" + compToHex(a) + compToHex(b) + compToHex(c);
        }

        //update input fields and page background
        convert = rgbToHex(parseInt(val[0]),parseInt(val[1]),parseInt(val[2]));
        document.body.style.background = convert;
        var h = document.getElementById("hex");
        h.value = convert;
});
