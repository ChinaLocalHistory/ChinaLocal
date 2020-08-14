var pageScene="A"; 
const gallery = <ReactGallery/>;
//const domContainer = document.querySelector('#react-gallery');
ReactDOM.render(gallery, document.getElementById('react-gallery'));


//a great pannellum tutorial but in Chinese: https://www.jianshu.com/p/fdbcb551d75b 

//generating the panorama
var v=pannellum.viewer('panorama', {
    "default":{
        "firstScene":"A",
        "sceneFadeDuration": 1000
    },

    "scenes":{
        "A":{
            "title":"A. West Gate, Ximen",
            "type": "equirectangular",
            "panorama": "https://raw.githubusercontent.com/jw4590/TangxiCityGodTemple/master/panorama%20-%20Guodong/panorama-pictures/A.jpg",
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
                    "pitch": 0.7695716407371126, 
                    "yaw": -95.54280748056317, 
                    "type": "info",
                    "clickHandlerFunc" : expandImg,
                    "clickHandlerArgs" : {"text":'Overview%20of%20the%20West%20Gate.JPG'}
                },
                {
                    "pitch": -6.224028266500834,
                    "yaw": 85.91131837122502,
                    "type": "scene",
                    "text": "B. Water Mouth (reservoir), Shuikou",
                    "sceneId": "B",
                    "clickHandlerFunc" : toB,
                }
            ]
        },

        "B":{
            "title":"B. Water Mouth (reservoir), Shuikou",
            "type": "equirectangular",
            "panorama": "https://raw.githubusercontent.com/jw4590/TangxiCityGodTemple/master/panorama%20-%20Guodong/panorama-pictures/B.jpg",
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
            "pitch":  7.171152625819008, 
            "yaw": -4.245616451134026, 
            "type": "info",
            "clickHandlerFunc" : expandImg,
            "clickHandlerArgs" : {"text":'Overview%20of%20the%20Watermouth.JPG'}
            },
            {
                "pitch": -4.845269962047471, 
                "yaw": -52.80660848248078,
                "type": "scene",
                "text":"C. Returning Dragon Bridge, Huilong Qiao",
                "sceneId": "C",
                "clickHandlerFunc" : toC,
            },
            {
                "pitch": -14.233784317065176, 
                "yaw":  126.65324634098477,
                "type": "scene",
                "text": "A. West Gate, Ximen",
                "sceneId": "A",
                "clickHandlerFunc" : toA,
            }
            ]
        },
        "C":{
            "title":"C. Returning Dragon Bridge, Huilong Qiao",
            "type": "equirectangular",
            "panorama": "https://raw.githubusercontent.com/jw4590/TangxiCityGodTemple/master/panorama%20-%20Guodong/panorama-pictures/C.jpg",
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
                "pitch":  -24.90504120976177, 
                "yaw": 140.9004422127586,
                "type": "scene",
                "text": "D1 Hailin Court--exterior",
                "sceneId": "D1",
                "clickHandlerFunc" : toD1,
            },
            {
                "pitch":-22.29490993983829, 
                "yaw": -45.40962870380243,
                "type": "scene",
                "text": "B. Water Mouth (reservoir), Shuikou",
                "sceneId": "B",
                "clickHandlerFunc" : toB,
            }
            ]
        },
        "D1":{
            "title":"D. Hailin Court, Hailin Ge",
            "type": "equirectangular",
            "panorama": "https://raw.githubusercontent.com/jw4590/TangxiCityGodTemple/master/panorama%20-%20Guodong/panorama-pictures/D1.jpg",
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
                "pitch": -17.865535605353674, 
                "yaw": -143.25477114574946,
                "type": "scene",
                "text": "D2. Hailin Court -- Shrine of Lord Guan, Guan Sheng Ci",
                "sceneId": "D2",
                "clickHandlerFunc" : toD2,
            },
            {
                "pitch": -5.707430733660536, 
                "yaw": 142.53051082553577,
                "type": "scene",
                "text":"C. Returning Dragon Bridge, Huilong Qiao",
                "sceneId": "C",
                "clickHandlerFunc" : toC,
            },
            
            {
                "pitch": -15.215655784527485,
                "yaw": 0.7533702205573594,
                "type": "scene",
                "text":"E. Path between Sea and Unicorn Chamber and Guodong Primary School",
                "sceneId": "E",
                "clickHandlerFunc" : toE,
                },
              
                {
                "pitch":11.485475461189928, 
                "yaw": 145.9436513290398, 
                "type": "info",
                "clickHandlerFunc" : expandImg,
                "clickHandlerArgs" : {"text":'Overview%20of%20Hailin%20Court.JPG'}
                },
              
            ]
        },
    
        "D2":{
            "title":"D2. Hailin Court -- Shrine of Lord Guan, Guan Sheng Ci",
            "type": "equirectangular",
            "panorama": "https://raw.githubusercontent.com/jw4590/TangxiCityGodTemple/master/panorama%20-%20Guodong/panorama-pictures/D2.jpg",
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
                    "pitch": -11.868629019937973, 
                    "yaw": 88.31877844670032, 
                    "type": "info",
                    "clickHandlerFunc" : expandImg,
                    "clickHandlerArgs" : {"text":'DSCN1553.JPG'}
                    },
                    {
                    "pitch": 17.34877089516667,
                    "yaw": 14.20576797764312, 
                    "type": "info",
                    "clickHandlerFunc" : expandImg,
                    "clickHandlerArgs" : {"text":'DSCN1556.JPG'}
                    },
                    {
                    "pitch": -12.462074996692106,  
                    "yaw": 136.61035562271317,
                    "type": "info",
                    "clickHandlerFunc" : expandImg,
                    "clickHandlerArgs" : {"text":'Introduction%20to%20Hailin%20Court%20in%20Chinese%20and%20English%20.JPG'}
                    },
                    {
                    "pitch":27.416541860389085,
                    "yaw": -142.75631508325478, 
                    "type": "info",
                    "clickHandlerFunc" : expandImg,
                    "clickHandlerArgs" : {"text":'Looking%20out%20from%20the%20court%20.JPG'}
                    },
                    {
                    "pitch": 2.394160340994728, 
                    "yaw": 13.0273653855892, 
                    "type": "info",
                    "clickHandlerFunc" : expandImg,
                    "clickHandlerArgs" : {"text":'P0002790.JPG'}
                    },
                    {
                    "pitch": 17.43026419788107, 
                    "yaw": -2.094543035674941,
                    "type": "info",
                    "clickHandlerFunc" : expandImg,
                    "clickHandlerArgs" : {"text":'P0002791.JPG'}
                    },
                    {
                    "pitch": -10.201650585528876, 
                    "yaw": -59.130149637151526, 
                    "type": "info",
                    "clickHandlerFunc" : expandImg,
                    "clickHandlerArgs" : {"text":'P0002793.JPG'}
                    },
                    {
                    "pitch": -8.44607110224642,
                    "yaw":  -39.05361049140934, 
                    "type": "info",
                    "clickHandlerFunc" : expandImg,
                    "clickHandlerArgs" : {"text":'P0002794.JPG'}
                    },
                    {
                    "pitch": -6.725361249449086, 
                    "yaw":  53.43691376951663,
                    "type": "info",
                    "clickHandlerFunc" : expandImg,
                    "clickHandlerArgs" : {"text":'P0002795.JPG'}
                    },
                    {
                    "pitch": -7.810267986283563, 
                    "yaw": 74.47906207967947, 
                    "type": "info",
                    "clickHandlerFunc" : expandImg,
                    "clickHandlerArgs" : {"text":'P0002796.JPG'}
                    },
                    {
                    "pitch":23.84237039264124,
                    "yaw": 114.25803091291996,
                    "type": "info",
                    "clickHandlerFunc" : expandImg,
                    "clickHandlerArgs" : {"text":'Record%20of%20the%20renovation%20of%20Hailin%20Court%20in%201994%20.JPG'}
                    },   
            {
                "pitch": -20.74250591486505,
                "yaw":  115.6584025415313,
                "type": "scene",
                "text": "D1 Hailin Court--exterior",
                "sceneId": "D1",
                "clickHandlerFunc" : toD1,
            },
            {
                "pitch": -23.55951094876721, 
                "yaw": -77.25226339342346,
                "type": "scene",
                "text":"D3 Hailin Court -- Chamber of Guanyin of the Southern Ocean Nanhai Guanyin Ge",
                "sceneId": "D3",
                "clickHandlerFunc" : toD3,
            }
            ]
        },

        "D3":{
            "title":"D3. Hailin Court -- Chamber of Guanyin of the Southern Ocean Nanhai Guanyin Ge",
            "type": "equirectangular",
            "panorama": "https://raw.githubusercontent.com/jw4590/TangxiCityGodTemple/master/panorama%20-%20Guodong/panorama-pictures/D3.jpg",
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
                    "pitch": 1, 
                    "yaw": 1, 
                    "type": "info",
                    "clickHandlerFunc" : expandImg,
                    "clickHandlerArgs" : {"text":'P0002798.JPG'}
                    },
                    {
                    "pitch":  5.151257690414573,
                    "yaw": -98.2509217745344, 
                    "type": "info",
                    "clickHandlerFunc" : expandImg,
                    "clickHandlerArgs" : {"text":'P0002799.JPG'}
                    },   
            {
                "pitch": -21.391706106077184,
                "yaw": 40.0319196510468,
                "type": "scene",
                "text": "D2. Hailin Court -- Shrine of Lord Guan, Guan Sheng Ci",
                "sceneId": "D2",
                "clickHandlerFunc" : toD2,
            },
            ]
        },

        "E":{
            "title":"E. Path between Sea and Unicorn Chamber and Guodong Primary School",
            "type": "equirectangular",
            "panorama": "https://raw.githubusercontent.com/jw4590/TangxiCityGodTemple/master/panorama%20-%20Guodong/panorama-pictures/E.jpg",
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
                    "pitch": 9.067050007264166,
                    "yaw": 53.024768243799144,
                    "type": "info",
                    "clickHandlerFunc" : expandImg,
                    "clickHandlerArgs" : {"text":'Overview%20of%20the%20path%20.JPG'}
                    },  
            {
                "pitch": -2.028715927162636, 
                "yaw":-158.85376649216724,
                "type": "scene",
                "text": "D1. Hailin Court, Hailin Ge",
                "sceneId": "D1",
                "clickHandlerFunc" : toD1,
            },
            {
                "pitch":  -9.587148439340654, 
                "yaw": -3.018323992792432,
                "type": "scene",
                "text": "F1. He Lineage Ancestral Hall--exterior",
                "sceneId": "F1",
                "clickHandlerFunc" : toF1,
            }
            ]
        },
        "F1":{
            "title":"F. He Lineage Ancestral Hall, He Shi Zong Ci",
            "type": "equirectangular",
            "panorama": "https://raw.githubusercontent.com/jw4590/TangxiCityGodTemple/master/panorama%20-%20Guodong/panorama-pictures/F1.jpg",
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
                    "pitch": 28.5808346408227, 
                    "yaw": -74.33006435260864, 
                    "type": "info",
                    "clickHandlerFunc" : expandImg,
                    "clickHandlerArgs" : {"text":'Entrance%20door%20of%20the%20ancestral%20hall%20.JPG'}
                    },
                    {
                    "pitch": 28.5808346408227,
                    "yaw": -74.90517549884206, 
                    "type": "info",
                    "clickHandlerFunc" : expandImg,
                    "clickHandlerArgs" : {"text":'Front%20view%20of%20the%20ancestral%20hall%20.JPG'}
                    },
                    {
                    "pitch": 13.32160815069342,   
                    "yaw": -114.1125206287426, 
                    "type": "info",
                    "clickHandlerFunc" : expandImg,
                    "clickHandlerArgs" : {"text":'Overview%20of%20the%20ancestral%20hall.JPG'}
                    },
                    
            {
                "pitch": -17.76186196324729, 
                "yaw": -74.57667956621412,
                "type": "scene",
                "text": "F2. He Lineage Ancestral Hall, Opera Stage",
                "sceneId": "F2",
                "clickHandlerFunc" : toF2,
            },
            {
                "pitch": -15.707156225746818,
                "yaw": 11.364505315070433,
                "type": "scene",
                "text":"E. Path between Sea and Unicorn Chamber and Guodong Primary School",
                "sceneId": "E",
                "clickHandlerFunc" : toE,
            }
            ]
        },

        "F2":{
            "title":"F. He Lineage Ancestral Hall, He Shi Zong Ci",
            "type": "equirectangular",
            "panorama": "https://raw.githubusercontent.com/jw4590/TangxiCityGodTemple/master/panorama%20-%20Guodong/panorama-pictures/F2.jpg",
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
                    "pitch": 0.45411403522772253,
                    "yaw":107.68797592083968, 
                    "type": "info",
                    "clickHandlerFunc" : expandImg,
                    "clickHandlerArgs" : {"text":'Chinese%20introduction%20to%20the%20ancestral%20hall%20.JPG'}
                    },
                    {
                    "pitch": 10.209528328342728, 
                    "yaw": -37.76764220347279, 
                    "type": "info",
                    "clickHandlerFunc" : expandImg,
                    "clickHandlerArgs" : {"text":'Looking%20to%20the%20east%20.JPG'}
                    },
                    {
                    "pitch": 21.31376442964729, 
                    "yaw": -118.21799782865668, 
                    "type": "info",
                    "clickHandlerFunc" : expandImg,
                    "clickHandlerArgs" : {"text":'Looking%20to%20the%20north%20.JPG'}
                    },
                    {
                    "pitch": 20.443669624719085, 
                    "yaw": -92.50129204786818, 
                    "type": "info",
                    "clickHandlerFunc" : expandImg,
                    "clickHandlerArgs" : {"text":'Looking%20to%20the%20northeast%20.JPG'}
                    },
                    
                    {
                    "pitch":  11.454181631826536, 
                    "yaw":  -156.08682997630933, 
                    "type": "info",
                    "clickHandlerFunc" : expandImg,
                    "clickHandlerArgs" : {"text":'Looking%20to%20the%20northwest%20.JPG'}
                    },
                    {
                    "pitch":1.435191064141773, 
                    "yaw": 141.54844730157495, 
                    "type": "info",
                    "clickHandlerFunc" : expandImg,
                    "clickHandlerArgs" : {"text":'Looking%20to%20the%20west%20.JPG'}
                    },
                    {
                    "pitch":23.664210244194347, 
                    "yaw": 83.98997574513362, 
                    "type": "info",
                    "clickHandlerFunc" : expandImg,
                    "clickHandlerArgs" : {"text":'Overview%20of%20the%20opera%20stage%20.JPG'}
                    },
                    {
                    "pitch":32.59231945105343, 
                    "yaw": 43.646313840880794,  
                    "type": "info",
                    "clickHandlerFunc" : expandImg,
                    "clickHandlerArgs" : {"text":'Painted%20ceiling%20of%20the%20opera%20stage%20.JPG'}
                    },
                    
            {
                "pitch": -26.2051980096906, 
                "yaw": -132.94214838327753,
                "type": "scene",
                "text": "F1. He Lineage Ancestral Hall--exterior",
                "sceneId": "F1",
                "clickHandlerFunc" : toF1,
            },
            {
                "pitch": -25.35756402588391, 
                "yaw": -103.29893404842,
                "type": "scene",
                "text": "F3. He Lineage Ancestral Hall, Main Hall",
                "sceneId": "F3",
                "clickHandlerFunc" : toF3,
            }
            ]
        },

        "F3":{
            "title":"F. He Lineage Ancestral Hall, He Shi Zong Ci",
            "type": "equirectangular",
            "panorama": "https://raw.githubusercontent.com/jw4590/TangxiCityGodTemple/master/panorama%20-%20Guodong/panorama-pictures/F3.jpg",
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
                    "pitch":10.72038659632975, 
                    "yaw": -104.28443858104609 , 
                    "type": "info",
                    "clickHandlerFunc" : expandImg,
                    "clickHandlerArgs" : {"text":'001527.jpg'}
                    },
                 
                    {
                    "pitch": 9.340544796712408, 
                    "yaw":  -91.7870496094317,
                    "type": "info",
                    "clickHandlerFunc" : expandImg,
                    "clickHandlerArgs" : {"text":'001876.jpg'}
                    },
                    
                    {
                    "pitch": 19.84322069888327, 
                    "yaw":169.17187024166958, 
                    "type": "info",
                    "clickHandlerFunc" : expandImg,
                    "clickHandlerArgs" : {"text":'DSCN6921.JPG'}
                    },
                    {
                    "pitch": -4.175119265234489, 
                    "yaw": 47.42869458035628, 
                    "type": "info",
                    "clickHandlerFunc" : expandImg,
                    "clickHandlerArgs" : {"text":'DSCN7085.JPG'}
                    },
                    {
                    "pitch": 24.33505023338629, 
                    "yaw":  47.33088094387093, 
                    "type": "info",
                    "clickHandlerFunc" : expandImg,
                    "clickHandlerArgs" : {"text":'DSCN7086.JPG'}
                    },
                    {
                    "pitch": 8.306790371128777, 
                    "yaw": -158.9533518885067, 
                    "type": "info",
                    "clickHandlerFunc" : expandImg,
                    "clickHandlerArgs" : {"text":'DSCN7149.JPG'}
                    },
                    {
                    "pitch": 0.5713935321657473, 
                    "yaw": -130.01762010202413, 
                    "type": "info",
                    "clickHandlerFunc" : expandImg,
                    "clickHandlerArgs" : {"text":'Excert%20of%20the%20words%20of%20Chairman%20Mao%20.JPG'}
                    },
                    
               
                    {
                    "pitch": 33.44249146085183,  
                    "yaw": -81.93558110489926, 
                    "type": "info",
                    "clickHandlerFunc" : expandImg,
                    "clickHandlerArgs" : {"text":'originally%20erected%20for%20He%20Chengqin.jpg'}
                    },
                
                    {
                    "pitch": 24.280929354175832, 
                    "yaw": 164.8899677078311, 
                    "type": "info",
                    "clickHandlerFunc" : expandImg,
                    "clickHandlerArgs" : {"text":'Plaque%20`Descendants%20of%20the%20people%20of%20Huai%20and%20Ge`..jpg'}
                    },
                    {
                    "pitch": 24.03288140752773, 
                    "yaw": -90.31180112339801, 
                    "type": "info",
                    "clickHandlerFunc" : expandImg,
                    "clickHandlerArgs" : {"text":'Plaque%20`First%20Ranking%20Provincial%20Graduate`,.jpg'}
                    },
                    {
                    "pitch": 9.129385236785462, 
                    "yaw": -156.6161470527449 , 
                    "type": "info",
                    "clickHandlerFunc" : expandImg,
                    "clickHandlerArgs" : {"text":'Plaque%20`One%20whose%20Virtue%20Is%20Highly%20Respected%20,.jpg'}
                    },
                    {
                    "pitch": 30.869224999247656, 
                    "yaw": -153.34577517237898 , 
                    "type": "info",
                    "clickHandlerFunc" : expandImg,
                    "clickHandlerArgs" : {"text":'Plaque%20`Provincial%20Graduate`,.jpg'}
                    },
                    
                   
            {
                "pitch": -24.899794024046393,
                "yaw":23.40475318491977,
                "type": "scene",
                "text": "F2. He Lineage Ancestral Hall, Opera Stage",
                "sceneId": "F2",
                "clickHandlerFunc" : toF2,
            },
            {
                "pitch":-19.17656697778071, 
                "yaw": 79.05658262239902,
                "type": "scene",
                "text": "F4. He Lineage Ancestral Shrine, Back Hall",
                "sceneId": "F4",
                "clickHandlerFunc" : toF4,
            }
            ]
        },

        "F4":{
            "title":"F. He Lineage Ancestral Hall, He Shi Zong Ci",
            "type": "equirectangular",
            "panorama": "https://raw.githubusercontent.com/jw4590/TangxiCityGodTemple/master/panorama%20-%20Guodong/panorama-pictures/F4.jpg",
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
                    "pitch": -16.472856879321238, 
                    "yaw": -147.70793293395835, 
                    "type": "info",
                    "clickHandlerFunc" : expandImg,
                    "clickHandlerArgs" : {"text":'001972.jpg'}
                    },
                    
                    {
                    "pitch": -17.688803407455232,
                    "yaw": 6.811574338124785,
                    "type": "info",
                    "clickHandlerFunc" : expandImg,
                    "clickHandlerArgs" : {"text":'Closeup%20of%20the%20altar.jpg'}
                    },
                    {
                    "pitch": -6.10267627070044, 
                    "yaw": -41.13113144671718, 
                    "type": "info",
                    "clickHandlerFunc" : expandImg,
                    "clickHandlerArgs" : {"text":'Closeup%20of%20the%20banners.jpg'}
                    },
                    
                    {
                    "pitch": 9.618376032057384,
                    "yaw":  -76.12184226982265 , 
                    "type": "info",
                    "clickHandlerFunc" : expandImg,
                    "clickHandlerArgs" : {"text":'Coffins%20stored%20in%20the%20western%20wing.jpg'}
                    },
                    {
                    "pitch": 21.228972934397184, 
                    "yaw":  8.495363191630474, 
                    "type": "info",
                    "clickHandlerFunc" : expandImg,
                    "clickHandlerArgs" : {"text":'DSCN7129.JPG'}
                    },
                   
                    {
                    "pitch": 13.41531164612507, 
                    "yaw": 94.59767546364321, 
                    "type": "info",
                    "clickHandlerFunc" : expandImg,
                    "clickHandlerArgs" : {"text":'Overview%20of%20the%20eastern%20wing.jpg'}
                    },
                    {
                    "pitch": 14.606631953322964, 
                    "yaw": -175.2253225654768, 
                    "type": "info",
                    "clickHandlerFunc" : expandImg,
                    "clickHandlerArgs" : {"text":'Overview%20of%20the%20south%20wall%20panel.jpg'}
                    },
                    {
                    "pitch":  33.53563544826533,   
                    "yaw": -3.6301478190149723, 
                    "type": "info",
                    "clickHandlerFunc" : expandImg,
                    "clickHandlerArgs" : {"text":'Plaque,.jpg'}
                    },
                   
                    {
                    "pitch": 5.888581831167441,  
                    "yaw": 129.33944415801452, 
                    "type": "info",
                    "clickHandlerFunc" : expandImg,
                    "clickHandlerArgs" : {"text":'The%20estern%20wing,%20facing%20south.jpg'}
                    },
            {
                "pitch": -21.876063489256474,
                "yaw": 147.2486951668639,
                "type": "scene",
                "text": "F3. He Lineage Ancestral Hall, Main Hall",
                "sceneId": "F3",
                "clickHandlerFunc" : toF3,
            },
            {
                "pitch": -18.395649193030938,
                "yaw": -178.7425554122671,
                "type": "scene",
                "text": "G. Between He Lineage Ancestral Hall and Xinwu Li",
                "sceneId": "G",
                "clickHandlerFunc" : toG,
            }
            ]
        },


        "G":{
            "title":"G. Between He Lineage Ancestral Hall and Xinwu Li",
            "type": "equirectangular",
            "panorama": "https://raw.githubusercontent.com/jw4590/TangxiCityGodTemple/master/panorama%20-%20Guodong/panorama-pictures/G.jpg",
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
                    "pitch": 9.99497106530154,  
                    "yaw": -41.54862154881994, 
                    "type": "info",
                    "clickHandlerFunc" : expandImg,
                    "clickHandlerArgs" : {"text":'Closeup%20of%20the%20hall.jpg'}
                    },
                   
            {
                "pitch":-19.77574221825997,
                "yaw":  -21.958199019956936,
                "type": "scene",
                "text": "H1 Xinwu Li, Front Courtyard",
                "sceneId": "H1",
                "clickHandlerFunc" : toH1,
            },
            {
                "pitch": -26.58528794474873, 
                "yaw": 130.91757761892572,
                "type": "scene",
                "text": "F4. He Lineage Ancestral Shrine, Back Hall",
                "sceneId": "F4",
                "clickHandlerFunc" : toF4,
            }
            ]
        },
        "H1":{
            "title":"H. Xinwu Li",
            "type": "equirectangular",
            "panorama": "https://raw.githubusercontent.com/jw4590/TangxiCityGodTemple/master/panorama%20-%20Guodong/panorama-pictures/H1.jpg",
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
                    "pitch": 9.447322417706294, 
                    "yaw": 151.410527094575, 
                    "type": "info",
                    "clickHandlerFunc" : expandImg,
                    "clickHandlerArgs" : {"text":'Left-hand%20side%20window%20of%20the%20eastern%20wing.jpg'}
                    },
                   
                    {
                    "pitch": 8.249928268271615,
                    "yaw":166.93897528139317 , 
                    "type": "info",
                    "clickHandlerFunc" : expandImg,
                    "clickHandlerArgs" : {"text":'Right-hand%20side%20window%20of%20the%20eastern%20wing.jpg'}
                    },
            {
                "pitch": -31.33414675067754,
                "yaw": -106.23040330298603,
                "type": "scene",
                "text": "G. Between He Lineage Ancestral Hall and Xinwu Li",
                "sceneId": "G",
                "clickHandlerFunc" : toG,
            },
            {
                "pitch": -23.66886437445998,
                "yaw": 65.92947151229332,
                "type": "scene",
                "text": "H2. Xinwu Li, Back Courtyard",
                "sceneId": "H2",
                "clickHandlerFunc" : toH2,
            }
            ]
        },
        "H2":{
            "title":"H. Xinwu Li",
            "type": "equirectangular",
            "panorama": "https://raw.githubusercontent.com/jw4590/TangxiCityGodTemple/master/panorama%20-%20Guodong/panorama-pictures/H2.jpg",
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
                "pitch": -22.056335177232825,
                "yaw": 106.1616076075473,
                "type": "scene",
                "text": "I. Arch of Chastity and Filial Piety, Jie Xiao Fang",
                "sceneId": "I",
                "clickHandlerFunc" : toI,
            },
            {
                "pitch": -6.224028266500834,
                "yaw": 85.91131837122502,
                "type": "scene",
                "text": "H1 Xinwu Li, Front Courtyard",
                "sceneId": "H1",
                "clickHandlerFunc" : toH1,
            }
            ]
        },
        "I":{
            "title":"I. Arch of Chastity and Filial Piety, Jie Xiao Fang",
            "type": "equirectangular",
            "panorama": "https://raw.githubusercontent.com/jw4590/TangxiCityGodTemple/master/panorama%20-%20Guodong/panorama-pictures/I.jpg",
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
                    "pitch":  1.362592920052081, 
                    "yaw": -140.32874629899163 , 
                    "type": "info",
                    "clickHandlerFunc" : expandImg,
                    "clickHandlerArgs" : {"text":'Closeup%20of%20the%20base%20of%20the%20arch.jpg'}
                    },
                    
                    {
                    "pitch": 26.03336914902445,   
                    "yaw": -118.67324038144245, 
                    "type": "info",
                    "clickHandlerFunc" : expandImg,
                    "clickHandlerArgs" : {"text":'Middle%20part%20of%20the%20arch%20with%20inscriptions%20on%20the%20frame.jpg'}
                    },
                    {
                    "pitch": 11.85512515290337, 
                    "yaw":  -119.19560127908154, 
                    "type": "info",
                    "clickHandlerFunc" : expandImg,
                    "clickHandlerArgs" : {"text":'Overview%20of%20the%20arch.jpg'}
                    },
                   
                       
            {
                "pitch": -8.13620081011064, 
                "yaw": -169.5265184682008,
                "type": "scene",
                "text": "G. Between He Lineage Ancestral Hall and Xinwu Li",
                "sceneId": "G",
                "clickHandlerFunc" : toG,
            },
            {
                "pitch": -21.18961775597519, 
                "yaw": -16.67966916590732,
                "type": "scene",
                "text": "J. Temple of God of Literature, Wenchang Ge",
                "sceneId": "J",
                "clickHandlerFunc" : toJ,
            }
            ]
        },
        "J":{
            "title":"J. Temple of God of Literature, Wenchang Ge",
            "type": "equirectangular",
            "panorama": "https://raw.githubusercontent.com/jw4590/TangxiCityGodTemple/master/panorama%20-%20Guodong/panorama-pictures/I.jpg",
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
                    "pitch":  1.362592920052081, 
                    "yaw": -140.32874629899163 , 
                    "type": "info",
                    "clickHandlerFunc" : expandImg,
                    "clickHandlerArgs" : {"text":'Closeup%20of%20the%20base%20of%20the%20arch.jpg'}
                    },
                    
                    {
                    "pitch": 26.03336914902445,   
                    "yaw": -118.67324038144245, 
                    "type": "info",
                    "clickHandlerFunc" : expandImg,
                    "clickHandlerArgs" : {"text":'Middle%20part%20of%20the%20arch%20with%20inscriptions%20on%20the%20frame.jpg'}
                    },
                    {
                    "pitch": 11.85512515290337, 
                    "yaw":  -119.19560127908154, 
                    "type": "info",
                    "clickHandlerFunc" : expandImg,
                    "clickHandlerArgs" : {"text":'Overview%20of%20the%20arch.jpg'}
                    },
                   
                       
            {
                "pitch": -8.13620081011064, 
                "yaw": -169.5265184682008,
                "type": "scene",
                "text": "G. Between He Lineage Ancestral Hall and Xinwu Li",
                "sceneId": "G",
                "clickHandlerFunc" : toG,
            },
            {
                "pitch": -21.18961775597519, 
                "yaw": -16.67966916590732,
                "type": "scene",
                "text": "J. Temple of God of Literature, Wenchang Ge",
                "sceneId": "J",
                "clickHandlerFunc" : toJ,
            }
            ]
        },
        "I":{
            "title":"I. Arch of Chastity and Filial Piety, Jie Xiao Fang",
            "type": "equirectangular",
            "panorama": "https://raw.githubusercontent.com/jw4590/TangxiCityGodTemple/master/panorama%20-%20Guodong/panorama-pictures/I.jpg",
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
                    "pitch":  1.362592920052081, 
                    "yaw": -140.32874629899163 , 
                    "type": "info",
                    "clickHandlerFunc" : expandImg,
                    "clickHandlerArgs" : {"text":'Closeup%20of%20the%20base%20of%20the%20arch.jpg'}
                    },
                    
                    {
                    "pitch": 26.03336914902445,   
                    "yaw": -118.67324038144245, 
                    "type": "info",
                    "clickHandlerFunc" : expandImg,
                    "clickHandlerArgs" : {"text":'Middle%20part%20of%20the%20arch%20with%20inscriptions%20on%20the%20frame.jpg'}
                    },
                    {
                    "pitch": 11.85512515290337, 
                    "yaw":  -119.19560127908154, 
                    "type": "info",
                    "clickHandlerFunc" : expandImg,
                    "clickHandlerArgs" : {"text":'Overview%20of%20the%20arch.jpg'}
                    },
                   
                       
            {
                "pitch": -8.13620081011064, 
                "yaw": -169.5265184682008,
                "type": "scene",
                "text": "G. Between He Lineage Ancestral Hall and Xinwu Li",
                "sceneId": "G",
                "clickHandlerFunc" : toG,
            },
            {
                "pitch": -21.18961775597519, 
                "yaw": -16.67966916590732,
                "type": "scene",
                "text": "J. Temple of God of Literature, Wenchang Ge",
                "sceneId": "J",
                "clickHandlerFunc" : toJ,
            }
            ]
        },
        "I":{
            "title":"I. Arch of Chastity and Filial Piety, Jie Xiao Fang",
            "type": "equirectangular",
            "panorama": "https://raw.githubusercontent.com/jw4590/TangxiCityGodTemple/master/panorama%20-%20Guodong/panorama-pictures/I.jpg",
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
                    "pitch":  1.362592920052081, 
                    "yaw": -140.32874629899163 , 
                    "type": "info",
                    "clickHandlerFunc" : expandImg,
                    "clickHandlerArgs" : {"text":'Closeup%20of%20the%20base%20of%20the%20arch.jpg'}
                    },
                    
                    {
                    "pitch": 26.03336914902445,   
                    "yaw": -118.67324038144245, 
                    "type": "info",
                    "clickHandlerFunc" : expandImg,
                    "clickHandlerArgs" : {"text":'Middle%20part%20of%20the%20arch%20with%20inscriptions%20on%20the%20frame.jpg'}
                    },
                    {
                    "pitch": 11.85512515290337, 
                    "yaw":  -119.19560127908154, 
                    "type": "info",
                    "clickHandlerFunc" : expandImg,
                    "clickHandlerArgs" : {"text":'Overview%20of%20the%20arch.jpg'}
                    },
                   
                       
            {
                "pitch": -8.13620081011064, 
                "yaw": -169.5265184682008,
                "type": "scene",
                "text": "G. Between He Lineage Ancestral Hall and Xinwu Li",
                "sceneId": "G",
                "clickHandlerFunc" : toG,
            },
            {
                "pitch": -21.18961775597519, 
                "yaw": -16.67966916590732,
                "type": "scene",
                "text": "J. Temple of God of Literature, Wenchang Ge",
                "sceneId": "J",
                "clickHandlerFunc" : toJ,
            }
            ]
        },
},

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

function toA(){
    var i;
    var currentSceneTxt = document.getElementById('currentScene');
    currentSceneTxt.innerText="A. West Gate, Ximen";
    var myCircles = document.getElementsByClassName('cls-1');
    for(i=0;i<myCircles.length;i++){
        myCircles[i].style.fill="#023859";
    }
    var myCircle = document.getElementById('guodong-A');
    myCircle.style.fill = "#F26E22";
    v.loadScene("A");
    pageScene="A";
    const agallery = <ReactGallery/>;
    ReactDOM.render(agallery, document.getElementById('react-gallery'));
}

function toB(){
    var currentSceneTxt = document.getElementById('currentScene');
    currentSceneTxt.innerText="B. Water Mouth (reservoir), Shuikou";
    var myCircles = document.getElementsByClassName('cls-1');
    var i;
    for(i=0;i<myCircles.length;i++){
        myCircles[i].style.fill="#023859";
    }
    var myCircle = document.getElementById('guodong-B');
    myCircle.style.fill = "#F26E22";
    v.loadScene("B");
    pageScene="B";
    console.log(pageScene);
    const bgallery = <ReactGallery/>;
    ReactDOM.render(bgallery, document.getElementById('react-gallery'));
}

function toC(){
    var currentSceneTxt = document.getElementById('currentScene');
    currentSceneTxt.innerText="C. Returning Dragon Bridge, Huilong Qiao";
    var myCircles = document.getElementsByClassName('cls-1');
    var i;
    for(i=0;i<myCircles.length;i++){
        myCircles[i].style.fill="#023859";
    }
    var myCircle = document.getElementById('guodong-C');
    myCircle.style.fill = "#F26E22";
    v.loadScene("C");
    pageScene="C";
    console.log(pageScene);
    const cgallery = <ReactGallery/>;
    ReactDOM.render(cgallery, document.getElementById('react-gallery'));
}

function toD1(){
    var currentSceneTxt = document.getElementById('currentScene');
    currentSceneTxt.innerText="D1. Hailin Court--exterior";
    var myCircles = document.getElementsByClassName('cls-1');
    var i;
    for(i=0;i<myCircles.length;i++){
        myCircles[i].style.fill="#023859";
    }
    var myCircle = document.getElementById('guodong-D');
    myCircle.style.fill = "#F26E22";
    v.loadScene("D1");
    pageScene="D1";
    console.log(pageScene);
    const dgallery = <ReactGallery/>;
    ReactDOM.render(dgallery, document.getElementById('react-gallery'));  
}

function toD2(){
    var currentSceneTxt = document.getElementById('currentScene');
    currentSceneTxt.innerText="D2. Hailin Court -- Shrine of Lord Guan, Guan Sheng Ci";
    var myCircles = document.getElementsByClassName('cls-1');
    var i;
    for(i=0;i<myCircles.length;i++){
        myCircles[i].style.fill="#023859";
    }
    var myCircle = document.getElementById('guodong-D');
    myCircle.style.fill = "#F26E22";
    v.loadScene("D2");
    pageScene="D2";
    console.log(pageScene);
    const dgallery = <ReactGallery/>;
    ReactDOM.render(dgallery, document.getElementById('react-gallery'));  
}

function toD3(){
    var currentSceneTxt = document.getElementById('currentScene');
    currentSceneTxt.innerText="D3  Hailin Court -- Chamber of Guanyin of the Southern Ocean Nanhai Guanyin Ge";
    var myCircles = document.getElementsByClassName('cls-1');
    var i;
    for(i=0;i<myCircles.length;i++){
        myCircles[i].style.fill="#023859";
    }
    var myCircle = document.getElementById('guodong-D');
    myCircle.style.fill = "#F26E22";
    v.loadScene("D3");
    pageScene="D3";
    console.log(pageScene);
    const dgallery = <ReactGallery/>;
    ReactDOM.render(dgallery, document.getElementById('react-gallery'));  
}

function toE(){
    var currentSceneTxt = document.getElementById('currentScene');
    currentSceneTxt.innerText="E. Path between Sea and Unicorn Chamber and Guodong Primary School";
    var myCircles = document.getElementsByClassName('cls-1');
    var i;
    for(i=0;i<myCircles.length;i++){
        myCircles[i].style.fill="#023859";
    }
    var myCircle = document.getElementById('guodong-E');
    myCircle.style.fill = "#F26E22";
    v.loadScene("E");
    pageScene="E";
    console.log(pageScene);
    const dgallery = <ReactGallery/>;
    ReactDOM.render(dgallery, document.getElementById('react-gallery'));  
}
function toF1(){
    var currentSceneTxt = document.getElementById('currentScene');
    currentSceneTxt.innerText="F1. He Lineage Ancestral Hall--exterior";
    var myCircles = document.getElementsByClassName('cls-1');
    var i;
    for(i=0;i<myCircles.length;i++){
        myCircles[i].style.fill="#023859";
    }
    var myCircle = document.getElementById('guodong-F');
    myCircle.style.fill = "#F26E22";
    v.loadScene("F1");
    pageScene="F1";
    console.log(pageScene);
    const dgallery = <ReactGallery/>;
    ReactDOM.render(dgallery, document.getElementById('react-gallery'));  
}

function toF2(){
    var currentSceneTxt = document.getElementById('currentScene');
    currentSceneTxt.innerText="F2. He Lineage Ancestral Hall, Opera Stage";
    var myCircles = document.getElementsByClassName('cls-1');
    var i;
    for(i=0;i<myCircles.length;i++){
        myCircles[i].style.fill="#023859";
    }
    var myCircle = document.getElementById('guodong-F');
    myCircle.style.fill = "#F26E22";
    v.loadScene("F2");
    pageScene="F2";
    console.log(pageScene);
    const dgallery = <ReactGallery/>;
    ReactDOM.render(dgallery, document.getElementById('react-gallery'));  
}

function toF3(){
    var currentSceneTxt = document.getElementById('currentScene');
    currentSceneTxt.innerText="F3 He Lineage Ancestral Hall, Main Hall";
    var myCircles = document.getElementsByClassName('cls-1');
    var i;
    for(i=0;i<myCircles.length;i++){
        myCircles[i].style.fill="#023859";
    }
    var myCircle = document.getElementById('guodong-F');
    myCircle.style.fill = "#F26E22";
    v.loadScene("F3");
    pageScene="F3";
    console.log(pageScene);
    const dgallery = <ReactGallery/>;
    ReactDOM.render(dgallery, document.getElementById('react-gallery'));  
}

function toF4(){
    var currentSceneTxt = document.getElementById('currentScene');
    currentSceneTxt.innerText="F4. He Lineage Ancestral Shrine, Back Hall";
    var myCircles = document.getElementsByClassName('cls-1');
    var i;
    for(i=0;i<myCircles.length;i++){
        myCircles[i].style.fill="#023859";
    }
    var myCircle = document.getElementById('guodong-F');
    myCircle.style.fill = "#F26E22";
    v.loadScene("F4");
    pageScene="F4";
    console.log(pageScene);
    const dgallery = <ReactGallery/>;
    ReactDOM.render(dgallery, document.getElementById('react-gallery'));  
}

function toG(){
    var currentSceneTxt = document.getElementById('currentScene');
    currentSceneTxt.innerText="G. Between He Lineage Ancestral Hall and Xinwu Li";
    var myCircles = document.getElementsByClassName('cls-1');
    var i;
    for(i=0;i<myCircles.length;i++){
        myCircles[i].style.fill="#023859";
    }
    var myCircle = document.getElementById('guodong-G');
    myCircle.style.fill = "#F26E22";
    v.loadScene("G");
    pageScene="G";
    console.log(pageScene);
    const dgallery = <ReactGallery/>;
    ReactDOM.render(dgallery, document.getElementById('react-gallery'));  
}

function toH1(){
    var currentSceneTxt = document.getElementById('currentScene');
    currentSceneTxt.innerText="H1. Xinwu Li, Front Courtyard";
    var myCircles = document.getElementsByClassName('cls-1');
    var i;
    for(i=0;i<myCircles.length;i++){
        myCircles[i].style.fill="#023859";
    }
    var myCircle = document.getElementById('guodong-H');
    myCircle.style.fill = "#F26E22";
    v.loadScene("H1");
    pageScene="H1";
    console.log(pageScene);
    const dgallery = <ReactGallery/>;
    ReactDOM.render(dgallery, document.getElementById('react-gallery'));  
}

function toH2(){
    var currentSceneTxt = document.getElementById('currentScene');
    currentSceneTxt.innerText="H2. Xinwu Li, Back Courtyard";
    var myCircles = document.getElementsByClassName('cls-1');
    var i;
    for(i=0;i<myCircles.length;i++){
        myCircles[i].style.fill="#023859";
    }
    var myCircle = document.getElementById('guodong-H');
    myCircle.style.fill = "#F26E22";
    v.loadScene("H2");
    pageScene="H2";
    console.log(pageScene);
    const dgallery = <ReactGallery/>;
    ReactDOM.render(dgallery, document.getElementById('react-gallery'));  
}

function toI(){
    var currentSceneTxt = document.getElementById('currentScene');
    currentSceneTxt.innerText="I. Arch of Chastity and Filial Piety, Jie Xiao Fang";
    var myCircles = document.getElementsByClassName('cls-1');
    var i;
    for(i=0;i<myCircles.length;i++){
        myCircles[i].style.fill="#023859";
    }
    var myCircle = document.getElementById('guodong-I');
    myCircle.style.fill = "#F26E22";
    v.loadScene("I");
    pageScene="I";
    console.log(pageScene);
    const dgallery = <ReactGallery/>;
    ReactDOM.render(dgallery, document.getElementById('react-gallery'));  
}

function toJ(){
    var currentSceneTxt = document.getElementById('currentScene');
    currentSceneTxt.innerText="J. Temple of God of Literature, Wenchang Ge";
    var myCircles = document.getElementsByClassName('cls-1');
    var i;
    for(i=0;i<myCircles.length;i++){
        myCircles[i].style.fill="#023859";
    }
    var myCircle = document.getElementById('guodong-J');
    myCircle.style.fill = "#F26E22";
    v.loadScene("J");
    pageScene="J";
    console.log(pageScene);
    const dgallery = <ReactGallery/>;
    ReactDOM.render(dgallery, document.getElementById('react-gallery'));  
}

function toK(){
    var currentSceneTxt = document.getElementById('currentScene');
    currentSceneTxt.innerText="K. Precious Spring Inn, Baoquan Shanzhuang";
    var myCircles = document.getElementsByClassName('cls-1');
    var i;
    for(i=0;i<myCircles.length;i++){
        myCircles[i].style.fill="#023859";
    }
    var myCircle = document.getElementById('guodong-K');
    myCircle.style.fill = "#F26E22";
    v.loadScene("K");
    pageScene="K";
    console.log(pageScene);
    const dgallery = <ReactGallery/>;
    ReactDOM.render(dgallery, document.getElementById('react-gallery'));  
}

function toL(){
    var currentSceneTxt = document.getElementById('currentScene');
    currentSceneTxt.innerText="L. Upper Guodong, Community Hall Square";
    var myCircles = document.getElementsByClassName('cls-1');
    var i;
    for(i=0;i<myCircles.length;i++){
        myCircles[i].style.fill="#023859";
    }
    var myCircle = document.getElementById('guodong-L');
    myCircle.style.fill = "#F26E22";
    v.loadScene("L");
    pageScene="L";
    console.log(pageScene);
    const dgallery = <ReactGallery/>;
    ReactDOM.render(dgallery, document.getElementById('react-gallery'));  
}

function toM(){
    var currentSceneTxt = document.getElementById('currentScene');
    currentSceneTxt.innerText="M. Overview of Upper Guodong";
    var myCircles = document.getElementsByClassName('cls-1');
    var i;
    for(i=0;i<myCircles.length;i++){
        myCircles[i].style.fill="#023859";
    }
    var myCircle = document.getElementById('guodong-M');
    myCircle.style.fill = "#F26E22";
    v.loadScene("M");
    pageScene="M";
    console.log(pageScene);
    const dgallery = <ReactGallery/>;
    ReactDOM.render(dgallery, document.getElementById('react-gallery'));  
}

function toN(){
    var currentSceneTxt = document.getElementById('currentScene');
    currentSceneTxt.innerText="N. Precious Spring Peak Area, Baoquan Yan";
    var myCircles = document.getElementsByClassName('cls-1');
    var i;
    for(i=0;i<myCircles.length;i++){
        myCircles[i].style.fill="#023859";
    }
    var myCircle = document.getElementById('guodong-N');
    myCircle.style.fill = "#F26E22";
    v.loadScene("N");
    pageScene="N";
    console.log(pageScene);
    const dgallery = <ReactGallery/>;
    ReactDOM.render(dgallery, document.getElementById('react-gallery'));  
}

function toO(){
    var currentSceneTxt = document.getElementById('currentScene');
    currentSceneTxt.innerText="O. Lake Dawan, Dawan Hu";
    var myCircles = document.getElementsByClassName('cls-1');
    var i;
    for(i=0;i<myCircles.length;i++){
        myCircles[i].style.fill="#023859";
    }
    var myCircle = document.getElementById('guodong-O');
    myCircle.style.fill = "#F26E22";
    v.loadScene("O");
    pageScene="O";
    console.log(pageScene);
    const dgallery = <ReactGallery/>;
    ReactDOM.render(dgallery, document.getElementById('react-gallery'));  
}






