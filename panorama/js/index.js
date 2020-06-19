var pageScene="frontGate"; 
const gallery = <ReactGallery/>;
//const domContainer = document.querySelector('#react-gallery');
ReactDOM.render(gallery, document.getElementById('react-gallery'));


//a great pannellum tutorial but in Chinese: https://www.jianshu.com/p/fdbcb551d75b 

//generating the panorama
pannellum.viewer('panorama', {
    "default":{
        "firstScene":"front-gate",
        "author": "JENNY CHANGE THIS",
        "sceneFadeDuration": 1000
    },

    "scenes":{
        "front-gate":{
            "title":"Front Gate",
            "type": "equirectangular",
            "panorama": "https://raw.githubusercontent.com/jw4590/TangxiCityGodTemple/master/panorama/panorama-pictures/FrontGate.jpg",
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
            "minPitch":-30,
            "maxPitch":30,
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
                },
                {
                    "pitch": -18.285253674622176,
                    "yaw": 177.2863097277794,
                    "type": "scene",
                    "text": "B. Opera Stage",
                    "sceneId": "opera-stage",
                    "clickHandlerFunc" : toOperaStage,
                }
            ]
        },

        "opera-stage":{
            "title":"Opera Stage",
            "author": "JENNY CHANGE THIS",
            "type": "equirectangular",
            "panorama": "https://raw.githubusercontent.com/jw4590/TangxiCityGodTemple/master/panorama/panorama-pictures/OperaStage.jpg",
            //angle range of horizontal view
            "haov": 360,
            //angle range of vertical view
            "vaov": 75.9,
            //vertical angle of the whole panorama
            "vOffset": 0,
            //default zoom-in control
            "hfov": 90,
            "minPitch":-30,
            "maxPitch":30,
            //"hotSpotDebug":true,
            "autoLoad":true,
            "hotSpots": [
                {
                    "pitch": -22.056335177232825,
                    "yaw": 106.1616076075473,
                    "type": "scene",
                    "text": "A. Front Gate",
                    "sceneId": "front-gate",
                    "clickHandlerFunc" : toOperaStage,
                },
                {
                    "pitch": -12.733579062821594,
                    "yaw": 106.09878828500743,
                    "type": "scene",
                    "text": "C. Courtyard Near Stage",
                    "sceneId": "front-gate",
                }
            ]
        }
    }
});

//set the vertical bounds for the moving range of the view
//var bounds = [-30,30];
//v.setPitchBounds(bounds);

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
    //document.title = "index.html";
    var img = document.getElementById(txt.text);
    on(img);
};

function toFrontGate(){
    var i;
    var currentSceneTxt = document.getElementById('currentScene');
    currentSceneTxt.innerText="A. Front Gate";
    var myCircles = document.getElementsByClassName('cls-1');
    for(i=0;i<myCircles.length;i++){
        myCircles[i].style.fill="#023859";
    }
    var myCircle = document.getElementById('tangxi-A');
    myCircle.style.fill = "#F26E22";
    v.loadScene("front-gate");
    pageScene="frontGate";
    const frontgallery = <ReactGallery/>;
    ReactDOM.render(frontgallery, document.getElementById('react-gallery'));
}

function toOperaStage(){
    var currentSceneTxt = document.getElementById('currentScene');
    currentSceneTxt.innerText="B. Opera Stage";
    var myCircles = document.getElementsByClassName('cls-1');
    var i;
    for(i=0;i<myCircles.length;i++){
        myCircles[i].style.fill="#023859";
    }
    var myCircle = document.getElementById('tangxi-B');
    myCircle.style.fill = "#F26E22";
    v.loadScene("opera-stage");
    pageScene="operaStage";
    console.log(pageScene);
    const operagallery = <ReactGallery/>;
    ReactDOM.render(operagallery, document.getElementById('react-gallery'));
}









