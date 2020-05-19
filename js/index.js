
var panorama, viewer, container, infospot;

container = document.querySelector( '#container' );

panorama = new PANOLENS.ImagePanorama('https://raw.githubusercontent.com/jw4590/TangxiCityGodTemple/master/P.jpg');

infospot = new PANOLENS.Infospot( 350, PANOLENS.DataImage.Info );
infospot.position.set( 5000.00, 3641.87, 108.69 );
//infospot.addHoverText( 'City God Temple', -50 );
infospot.addHoverElement(document.getElementById( 'desc-container' ), -100);
panorama.add( infospot );

viewer = new PANOLENS.Viewer( { container: container } );
viewer.add( panorama );


/* this is used for testing positions
const panorama = new PANOLENS.ImagePanorama( 'https://raw.githubusercontent.com/jw4590/Twinkling/master/P.jpg' );
      const viewer = new PANOLENS.Viewer( { output: 'console' } );
      viewer.add( panorama );
*/


function myFunction(imgs) {
    var expandImg = document.getElementById("expandedImg");
    var imgText = document.getElementById("imgtext");
    expandImg.src = imgs.src;
    imgText.innerHTML = imgs.alt;
    expandImg.parentElement.style.display = "block";
  }