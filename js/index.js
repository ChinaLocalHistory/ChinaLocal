//a great pannellum tutorial but in Chinese: https://www.jianshu.com/p/fdbcb551d75b 

//generating the panorama
var v = pannellum.viewer('panorama', {
"type": "equirectangular",
"panorama": "https://raw.githubusercontent.com/jw4590/TangxiCityGodTemple/master/FrontGate.jpg",
//angle range of horizontal view
"haov": 360,
//angle range of vertical view
"vaov": 75.9,
//vertical angle of the whole panorama
"vOffset": 0,
//default zoom-in control
"hfov": 90,
//"hotSpotDebug":true,
"autoLoad":true,
"hotSpots": [
    {
        "pitch":20.905364366865633,
        "yaw":-4.361632086533733,
        "type": "info",
        "text": "City God Temple<br>城隍廟",
        "clickHandlerFunc" : expandImg,
        "clickHandlerArgs" : {"text":"City God Temple<br>城隍廟"},
        //"cssClass": "custom-hotspot",
    },
    {
        "pitch": 17.077460768584032,
        "yaw": 27.014870099148276,
        "type": "info",
        "text": "Defender of Our Precious Wu<br>寳婺屏藩",
        "clickHandlerFunc" : expandImg,
        "clickHandlerArgs" : {"text":"Defender of Our Precious Wu<br>寳婺屏藩"},
        //"cssClass": "custom-hotspot",
    },
    {
        "pitch": 17.485817327539637,
        "yaw": -34.36496946053846,
        "type": "info",
        "text": "Protector of Tangxi<br>仙舟保障",
        "clickHandlerFunc" : expandImg,
        "clickHandlerArgs" : {"text":"Protector of Tangxi<br>仙舟保障"},
        //"cssClass": "custom-hotspot",
    }
]
});

//set the vertical bounds for the moving range of the view
var bounds = [-30,30];
v.setPitchBounds(bounds);
//to set horizontal bounds for the moving range of the view, use v.setYawBounds()

//generate the hotspots
function hotspot(hotSpotDiv, args) {
hotSpotDiv.classList.add('custom-tooltip');
var span = document.createElement('span');
span.innerHTML = args;
hotSpotDiv.appendChild(span);

span.style.width = span.scrollWidth - 20 + 'px';
span.style.marginLeft = -(span.scrollWidth - hotSpotDiv.offsetWidth) / 2 + 'px';
span.style.marginTop = -span.scrollHeight - 12 + 'px';
}

//turn on/off the overlay effect
function on(image) {
    var expandImg = document.getElementById("expandedImg");
    expandImg.src = image.src;
    document.getElementById("overlay").style.display = "block";
    
  }

function off() {
    document.getElementById("overlay").style.display = "none";
}

//expand img when hotspots onclick, using clickHandlerFunc and clickHandlerArgs
function expandImg(hotspot,txt){
    //console.log(txt.text);
    document.title = "index.html";
    img = document.getElementById(txt.text);
    img.onclick();
};

function myfunc(){
    var myCircle = document.getElementById('tangxi-A');
    myCircle.style.fill = "red";
}