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
                    "pitch":22.494174945326723,
                    "yaw":-4.361632086533733,
                    "type": "info",
                    "text": "City God Temple<br>城隍廟",
                    "clickHandlerFunc" : expandImg,
                    "clickHandlerArgs" : {"text":"City God Temple<br>城隍廟"},
                    //"cssClass": "custom-hotspot",
                },
                {
                    "pitch": 19.494174945326723,
                    "yaw": 26.90945113444174,
                    "type": "info",
                    "text": "Defender of Our Precious Wu<br>寳婺屏藩",
                    "clickHandlerFunc" : expandImg,
                    "clickHandlerArgs" : {"text":"Defender of Our Precious Wu<br>寳婺屏藩"},
                    //"cssClass": "custom-hotspot",
                },
                {
                    "pitch": 19.494174945326723,
                    "yaw": -34.442750848944804,
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
                "pitch": 35.58785801838995, 
                "yaw": 31.503575979756686, 
                "type": "info",
                "clickHandlerFunc" : expandImg,
                "clickHandlerArgs" : {"text":'Ceiling%20and%20carved%20beams1.jpg'}
                },
                {
                "pitch": -4.7338007227490767, 
                "yaw": -130.79219153044818, 
                "type": "info",
                "clickHandlerFunc" : expandImg,
                "clickHandlerArgs" : {"text":'Day%20Patrol.jpg'}
                },
                {
                "pitch": -4.323439134449426, 
                "yaw": -117.64825797693533, 
                "type": "info",
                "clickHandlerFunc" : expandImg,
                "clickHandlerArgs" : {"text":'Details%20of%20Day%20Patrol.jpg'}
                },
                {
                "pitch": 33.80892369570187, 
                "yaw": -13.439506576574727, 
                "type": "info",
                "clickHandlerFunc" : expandImg,
                "clickHandlerArgs" : {"text":'Decorated%20ceiling.jpg'}
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
                "pitch": -3.125153680300521, 
                "yaw": -20.294519499776477, 
                "type": "info",
                "clickHandlerFunc" : expandImg,
                "clickHandlerArgs" : {"text":'Night%20Patrol.jpg'}
                },
                {
                "pitch": -2.82274273368337, 
                "yaw": -32.112330571243625, 
                "type": "info",
                "clickHandlerFunc" : expandImg,
                "clickHandlerArgs" : {"text":'Night%20Patrol1.jpg'}
                },
                {
                "pitch": -11.0907082413663, 
                "yaw": -24.95899178914949, 
                "type": "info",
                "clickHandlerFunc" : expandImg,
                "clickHandlerArgs" : {"text":'Night%20Patrol2.jpg'}
                },
                {
                "pitch": 21.22700240825661, 
                "yaw": -76.27342382517517, 
                "type": "info",
                "text": "The temple shines again<br>廟貌重光",
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
                "sceneId": "courtyard-near-stage",
                "clickHandlerFunc" : toCourtyardNearStage,
            }
            ]
        },
        "courtyard-near-stage":{
            "title":"Courtyard Near Stage",
            "type": "equirectangular",
            "panorama": "https://raw.githubusercontent.com/jw4590/TangxiCityGodTemple/master/panorama/panorama-pictures/CourtyardNearStage.jpg",
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
                    "pitch": 16.678639792930042, 
                    "yaw": 179.63427516163063, 
                    "type": "info",
                    "clickHandlerFunc" : expandImg,
                    "clickHandlerArgs" : {"text":'Bridge%20of%20Necessity.jpg'}
                    },
                    {
                    "pitch": 32.76363490515169, 
                    "yaw": 0.12299178670645272, 
                    "type": "info",
                    "clickHandlerFunc" : expandImg,
                    "clickHandlerArgs" : {"text":'Bridge%20of%20Necessity1.jpg'}
                    },
                    {
                    "pitch": 1.898677912753009, 
                    "yaw": -3.9700842297310146, 
                    "type": "info",
                    "clickHandlerFunc" : expandImg,
                    "clickHandlerArgs" : {"text":'Carved%20decorations%20on%20the%20front%20side%20of%20the%20stage,%20the%20left%20part.jpg'}
                    },
                    {
                    "pitch": 1.8866181478692823, 
                    "yaw": 0.1179852912494539, 
                    "type": "info",
                    "clickHandlerFunc" : expandImg,
                    "clickHandlerArgs" : {"text":'Carved%20decorations%20on%20the%20front%20side%20of%20the%20stage,%20the%20middle%20part.jpg'}
                    },
                    {
                    "pitch": 1.846492396525223, 
                    "yaw": 4.220761544688607, 
                    "type": "info",
                    "clickHandlerFunc" : expandImg,
                    "clickHandlerArgs" : {"text":'Carved%20decorations%20on%20the%20front%20side%20of%20the%20stage,%20the%20right%20part.jpg'}
                    },
                    {
                    "pitch": 6.587449862765451, 
                    "yaw": 117.93617578677919, 
                    "type": "info",
                    "clickHandlerFunc" : expandImg,
                    "clickHandlerArgs" : {"text":'The%20remainder%20of%20an%20old%20tree,%20displayed%20in%20the%20courtyard..jpg'}
                    },
                    {
                        "pitch": -11.975436433248024,
                        "yaw": -21.95271389657835,
                        "type": "scene",
                        "text": "B. Opera Stage",
                        "sceneId": "opera-stage",
                        "clickHandlerFunc" : toOperaStage,
                    },
                    {
                        "pitch": -11.597696782329445,
                        "yaw": 0.4913498891597825,
                        "type": "scene",
                        "text": "D. Courtyard Near Main Stage",
                        "sceneId": "courtyard near-mainstage",
                        "clickHandlerFunc" : toCourtyardNearMainStage,
                    }
            ]
        },

        "courtyard-near-main-hall":{
            "title":"Courtyard Near Stage",
            "type": "equirectangular",
            "panorama": "https://raw.githubusercontent.com/jw4590/TangxiCityGodTemple/master/panorama/panorama-pictures/CourtyardNearMainHall.jpg",
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
                    "pitch": 1, 
                    "yaw": 1, 
                    "type": "info",
                    "clickHandlerFunc" : expandImg,
                    "clickHandlerArgs" : {"text":'000066.jpg'}
                    },
                    {
                    "pitch": 1, 
                    "yaw": 1, 
                    "type": "info",
                    "clickHandlerFunc" : expandImg,
                    "clickHandlerArgs" : {"text":'000072.jpg'}
                    },
                    {
                    "pitch": 1, 
                    "yaw": 1, 
                    "type": "info",
                    "clickHandlerFunc" : expandImg,
                    "clickHandlerArgs" : {"text":'000073.jpg'}
                    },
                    {
                    "pitch": 1, 
                    "yaw": 1, 
                    "type": "info",
                    "clickHandlerFunc" : expandImg,
                    "clickHandlerArgs" : {"text":'000074.jpg'}
                    },
                    {
                    "pitch": 1, 
                    "yaw": 1, 
                    "type": "info",
                    "clickHandlerFunc" : expandImg,
                    "clickHandlerArgs" : {"text":'000075.jpg'}
                    },
                    {
                    "pitch": 1, 
                    "yaw": 1, 
                    "type": "info",
                    "clickHandlerFunc" : expandImg,
                    "clickHandlerArgs" : {"text":'000106.jpg'}
                    },
                    {
                    "pitch": 1, 
                    "yaw": 1, 
                    "type": "info",
                    "clickHandlerFunc" : expandImg,
                    "clickHandlerArgs" : {"text":'000107.jpg'}
                    },
                    {
                    "pitch": 1, 
                    "yaw": 1, 
                    "type": "info",
                    "clickHandlerFunc" : expandImg,
                    "clickHandlerArgs" : {"text":'000137.jpg'}
                    },
                    {
                    "pitch": 1, 
                    "yaw": 1, 
                    "type": "info",
                    "clickHandlerFunc" : expandImg,
                    "clickHandlerArgs" : {"text":'000142.jpg'}
                    },
                    {
                    "pitch": 1, 
                    "yaw": 1, 
                    "type": "info",
                    "clickHandlerFunc" : expandImg,
                    "clickHandlerArgs" : {"text":'000143.jpg'}
                    },
                    {
                    "pitch": 1, 
                    "yaw": 1, 
                    "type": "info",
                    "clickHandlerFunc" : expandImg,
                    "clickHandlerArgs" : {"text":'000144.jpg'}
                    },
                    {
                    "pitch": 1, 
                    "yaw": 1, 
                    "type": "info",
                    "clickHandlerFunc" : expandImg,
                    "clickHandlerArgs" : {"text":'000145.jpg'}
                    },
                    {
                    "pitch": 1, 
                    "yaw": 1, 
                    "type": "info",
                    "clickHandlerFunc" : expandImg,
                    "clickHandlerArgs" : {"text":'000146.jpg'}
                    },
                    {
                    "pitch": 1, 
                    "yaw": 1, 
                    "type": "info",
                    "clickHandlerFunc" : expandImg,
                    "clickHandlerArgs" : {"text":'000147.jpg'}
                    },
                    {
                    "pitch": 1, 
                    "yaw": 1, 
                    "type": "info",
                    "clickHandlerFunc" : expandImg,
                    "clickHandlerArgs" : {"text":'000149.jpg'}
                    },
                    {
                    "pitch": 1, 
                    "yaw": 1, 
                    "type": "info",
                    "clickHandlerFunc" : expandImg,
                    "clickHandlerArgs" : {"text":'000150.jpg'}
                    },
                    {
                    "pitch": 1, 
                    "yaw": 1, 
                    "type": "info",
                    "clickHandlerFunc" : expandImg,
                    "clickHandlerArgs" : {"text":'000154.jpg'}
                    },
                    {
                    "pitch": 1, 
                    "yaw": 1, 
                    "type": "info",
                    "clickHandlerFunc" : expandImg,
                    "clickHandlerArgs" : {"text":'000172.jpg'}
                    },
                    {
                    "pitch": 1, 
                    "yaw": 1, 
                    "type": "info",
                    "clickHandlerFunc" : expandImg,
                    "clickHandlerArgs" : {"text":'000318.jpg'}
                    },
                    {
                    "pitch": 1, 
                    "yaw": 1, 
                    "type": "info",
                    "clickHandlerFunc" : expandImg,
                    "clickHandlerArgs" : {"text":'An%20old%20stele%20of%20donation,%20displayed.%20%202.jpg'}
                    },
                    {
                    "pitch": 1, 
                    "yaw": 1, 
                    "type": "info",
                    "clickHandlerFunc" : expandImg,
                    "clickHandlerArgs" : {"text":'An%20old%20stele%20of%20donors,%20displayed..jpg'}
                    },
                    {
                    "pitch": 1, 
                    "yaw": 1, 
                    "type": "info",
                    "clickHandlerFunc" : expandImg,
                    "clickHandlerArgs" : {"text":'Furnace%20for%20burning%20paper.jpg'}
                    },
                    {
                    "pitch": 1, 
                    "yaw": 1, 
                    "type": "info",
                    "clickHandlerFunc" : expandImg,
                    "clickHandlerArgs" : {"text":'Furnace%20for%20burning%20sutra.jpg'}
                    },
                    {
                    "pitch": 1, 
                    "yaw": 1, 
                    "type": "info",
                    "clickHandlerFunc" : expandImg,
                    "clickHandlerArgs" : {"text":'Gate%20of%20the%20main%20hall.jpg'}
                    },
                    {
                    "pitch": 1, 
                    "yaw": 1, 
                    "type": "info",
                    "clickHandlerFunc" : expandImg,
                    "clickHandlerArgs" : {"text":'Modern%20stele%20with%20the%20names%20of%20donors%20for%20the%20renovation%20of%20the%20City%20God%20Temple..jpg'}
                    },
                    {
                    "pitch": 1, 
                    "yaw": 1, 
                    "type": "info",
                    "clickHandlerFunc" : expandImg,
                    "clickHandlerArgs" : {"text":'Outline%20of%20the%20temple%20history.jpg'}
                    },
                    {
                    "pitch": 1, 
                    "yaw": 1, 
                    "type": "info",
                    "clickHandlerFunc" : expandImg,
                    "clickHandlerArgs" : {"text":'Overview%20of%20Dragon%20King%20Temple.jpg'}
                    },
                    {
                    "pitch": 1, 
                    "yaw": 1, 
                    "type": "info",
                    "clickHandlerFunc" : expandImg,
                    "clickHandlerArgs" : {"text":'Overview%20of%20Having%20Children%20Sanctuary.jpg'}
                    },
                    {
                    "pitch": 1, 
                    "yaw": 1, 
                    "type": "info",
                    "clickHandlerFunc" : expandImg,
                    "clickHandlerArgs" : {"text":'The%20administrative%20achievements%20of%20Song%20Yue.jpg'}
                    },
                    {
                    "pitch": 1, 
                    "yaw": 1, 
                    "type": "info",
                    "clickHandlerFunc" : expandImg,
                    "clickHandlerArgs" : {"text":'The%20city%20is%20secured.jpg'}
                    },
                    {
                    "pitch": 1, 
                    "yaw": 1, 
                    "type": "info",
                    "clickHandlerFunc" : expandImg,
                    "clickHandlerArgs" : {"text":'The%20customs%20are%20honest.jpg'}
                    },
                    {
                        "pitch": -12.733579062821594,
                        "yaw": 106.09878828500743,
                        "type": "scene",
                        "text": "C. Courtyard Near Stage",
                        "sceneId": "courtyard-near-stage",
                        "clickHandlerFunc" : toCourtyardNearStage,
                    }
                ]
        },
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

function toCourtyardNearStage(){
    var currentSceneTxt = document.getElementById('currentScene');
    currentSceneTxt.innerText="C. Courtyard Near Stage";
    var myCircles = document.getElementsByClassName('cls-1');
    var i;
    for(i=0;i<myCircles.length;i++){
        myCircles[i].style.fill="#023859";
    }
    var myCircle = document.getElementById('tangxi-C');
    myCircle.style.fill = "#F26E22";
    v.loadScene("courtyard-near-stage");
    pageScene="courtyardNearStage";
    console.log(pageScene);
    const operagallery = <ReactGallery/>;
    ReactDOM.render(operagallery, document.getElementById('react-gallery'));
}

function toCourtyardNearMainStage(){
    var currentSceneTxt = document.getElementById('currentScene');
    currentSceneTxt.innerText="C. Courtyard Near Main Hall";
    var myCircles = document.getElementsByClassName('cls-1');
    var i;
    for(i=0;i<myCircles.length;i++){
        myCircles[i].style.fill="#023859";
    }
    var myCircle = document.getElementById('tangxi-D');
    myCircle.style.fill = "#F26E22";
    v.loadScene("courtyard-near-main-hall");
    pageScene="courtyardNearMainHall";
    console.log(pageScene);
    const operagallery = <ReactGallery/>;
    ReactDOM.render(operagallery, document.getElementById('react-gallery'));
}








