var pageScene="frontGate"; 
const gallery = <ReactGallery/>;
//const domContainer = document.querySelector('#react-gallery');
ReactDOM.render(gallery, document.getElementById('react-gallery'));


//a great pannellum tutorial but in Chinese: https://www.jianshu.com/p/fdbcb551d75b 

//generating the panorama
var v=pannellum.viewer('panorama', {
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
            "hotSpotDebug":true,
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
                    "pitch": 5.7657145086227395,
                    "yaw": -11.22551496208543,
                    "type": "info",
                    "clickHandlerFunc" : expandImg,
                    "clickHandlerArgs" : {"text":"Gate guardian god2"},
                    //"cssClass": "custom-hotspot",
                },
                {
                    "pitch": 5.7657145086227395,
                    "yaw": 2.389447852098916,
                    "type": "info",
                    "clickHandlerFunc" : expandImg,
                    "clickHandlerArgs" : {"text":"Gate guardian god1"},
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
            "hotSpotDebug":true,
            "autoLoad":true,
            "hotSpots": [
                {
                "pitch": 8.249622428606415,
                "yaw":  36.55636945188646,
                "type": "info",
                "clickHandlerFunc" : expandImg,
                "clickHandlerArgs" : {"text":"Balcony.jpg"}
                },
                {
                "pitch": 19.674653911671037, 
                "yaw": 41.653090105395634, 
                "type": "info",
                "clickHandlerFunc" : expandImg,
                "clickHandlerArgs" : {"text":'Carved%20bracket%20and%20painted%20column.jpg'}
                },
                {
                "pitch": 15.680262694075871, 
                "yaw": 35.075639568415845, 
                "type": "info",
                "clickHandlerFunc" : expandImg,
                "clickHandlerArgs" : {"text":'Carved%20bracket%20and%20painted%20column1.jpg'}
                },
                {
                "pitch": 27.77400627497553, 
                "yaw": -47.000391805545576, 
                "type": "info",
                "clickHandlerFunc" : expandImg,
                "clickHandlerArgs" : {"text":'Carved,%20painted%20beams%20and%20balcony%20around%20the%20stage.jpg'}
                },
                {
                "pitch": 1, 
                "yaw": 1, 
                "type": "info",
                "clickHandlerFunc" : expandImg,
                "clickHandlerArgs" : {"text":'Carved,%20painted%20beams%20and%20balcony%20around%20the%20stage1.jpg'}
                },
                {
                "pitch": 1, 
                "yaw": 1, 
                "type": "info",
                "clickHandlerFunc" : expandImg,
                "clickHandlerArgs" : {"text":'Carved,%20painted%20beams%20and%20balcony%20around%20the%20stage2.jpg'}
                },
                {
                "pitch": 35.58785801838995, 
                "yaw": 31.503575979756686, 
                "type": "info",
                "clickHandlerFunc" : expandImg,
                "clickHandlerArgs" : {"text":'Ceiling%20and%20carved%20beams1.jpg'}
                },
                {
                "pitch": -3.713967107190457, 
                "yaw": -127.32325847857254, 
                "type": "info",
                "clickHandlerFunc" : expandImg,
                "clickHandlerArgs" : {"text":'Day%20Patrol.jpg'}
                },
                {
                "pitch": 33.80892369570187, 
                "yaw": -13.439506576574727, 
                "type": "info",
                "clickHandlerFunc" : expandImg,
                "clickHandlerArgs" : {"text":'Decorated%20ceiling.jpg'}
                },
                {
                "pitch": -4.289217461455887, 
                "yaw": -123.57377460257943, 
                "type": "info",
                "clickHandlerFunc" : expandImg,
                "clickHandlerArgs" : {"text":'Details%20of%20Day%20Patrol.jpg'}
                },
                {
                "pitch": 5.917672508033212, 
                "yaw": -56.55578204105773, 
                "type": "info",
                "clickHandlerFunc" : expandImg,
                "clickHandlerArgs" : {"text":'Entrance%20to%20the%20stage%20with%20curtain.jpg'}
                },
                {
                "pitch": 5.917672508033212, 
                "yaw": -92.80806459633261, 
                "type": "info",
                "clickHandlerFunc" : expandImg,
                "clickHandlerArgs" : {"text":'Entrance_exit%20to%20the%20stage%20with%20curtain.jpg'}
                },
                {
                "pitch": -5.417101566026343, 
                "yaw": -21.859670741185425, 
                "type": "info",
                "clickHandlerFunc" : expandImg,
                "clickHandlerArgs" : {"text":'Night%20Patrol.jpg'}
                },
                {
                "pitch": -4.180236074651212, 
                "yaw": -26.942914421230967, 
                "type": "info",
                "clickHandlerFunc" : expandImg,
                "clickHandlerArgs" : {"text":'Night%20Patrol1.jpg'}
                },
                {
                "pitch": -3.855919253405619, 
                "yaw": -29.294624376234125, 
                "type": "info",
                "clickHandlerFunc" : expandImg,
                "clickHandlerArgs" : {"text":'Night%20Patrol2.jpg'}
                },
                {
                "pitch": 1, 
                "yaw": 1, 
                "type": "info",
                "clickHandlerFunc" : expandImg,
                "clickHandlerArgs" : {"text":'Painted%20beams%20and%20column.jpg'}
                },
                {
                "pitch": 1, 
                "yaw": 1, 
                "type": "info",
                "clickHandlerFunc" : expandImg,
                "clickHandlerArgs" : {"text":'Painted%20beams%20and%20column1.jpg'}
                },
                {
                "pitch": 1, 
                "yaw": 1, 
                "type": "info",
                "clickHandlerFunc" : expandImg,
                "clickHandlerArgs" : {"text":'Painted%20beams%20and%20column2.jpg'}
                },
                {
                "pitch": 1, 
                "yaw": 1, 
                "type": "info",
                "clickHandlerFunc" : expandImg,
                "clickHandlerArgs" : {"text":'Painted%20beams%20and%20column3.jpg'}
                },
                {
                "pitch": 1, 
                "yaw": 1, 
                "type": "info",
                "clickHandlerFunc" : expandImg,
                "clickHandlerArgs" : {"text":'Painted%20beams%20and%20column4.jpg'}
                },
                {
                "pitch": 1, 
                "yaw": 1, 
                "type": "info",
                "clickHandlerFunc" : expandImg,
                "clickHandlerArgs" : {"text":'Painted%20beams%20and%20column5.jpg'}
                },
                {
                "pitch": 1, 
                "yaw": 1, 
                "type": "info",
                "clickHandlerFunc" : expandImg,
                "clickHandlerArgs" : {"text":'Panels%20with%20carvings%20on%20the%20stage.jpg'}
                },
                {
                "pitch": 1, 
                "yaw": 1, 
                "type": "info",
                "clickHandlerFunc" : expandImg,
                "clickHandlerArgs" : {"text":'Panels%20with%20carvings%20on%20the%20stage1.jpg'}
                },
                {
                "pitch": 1, 
                "yaw": 1, 
                "type": "info",
                "clickHandlerFunc" : expandImg,
                "clickHandlerArgs" : {"text":'Panels%20with%20carvings%20on%20the%20stage2.jpg'}
                },
                {
                "pitch": 1, 
                "yaw": 1, 
                "type": "info",
                "clickHandlerFunc" : expandImg,
                "clickHandlerArgs" : {"text":'Panels%20with%20carvings%20on%20the%20stage3.jpg'}
                },
                {
                "pitch": 30.309227183512363, 
                "yaw": -76.9382929280992, 
                "type": "info",
                "clickHandlerFunc" : expandImg,
                "clickHandlerArgs" : {"text":'The%20temple%20shines%20again.jpg'}
                },
            {
                "pitch": -22.056335177232825,
                "yaw": 106.1616076075473,
                "type": "scene",
                "text": "A. Front Gate",
                "sceneId": "front-gate",
                "clickHandlerFunc" : toFrontGate,
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









