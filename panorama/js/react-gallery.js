class ReactGallery extends React.Component {
    constructor(...args) {
      super(...args);
    }
    render() {
      if (pageScene== "frontGate") {
      return (
    
    
    //still images in the gallery
     <div className="gallery-row">
      <div className="gallery-column">
      <img id="Gate guardian god2" src="https://raw.githubusercontent.com/jw4590/TangxiCityGodTemple/master/panorama/img/front-gate/Gate%20guardian%20god .jpg" alt="Gate guardian god" onClick={this.on.bind(this)}></img>
      </div>
      <div className="gallery-column">
      <img id="Gate guardian god1" src="https://raw.githubusercontent.com/jw4590/TangxiCityGodTemple/master/panorama/img/front-gate/Gate%20guardian%20god.jpg" alt="Gate guardian god" onClick={this.on.bind(this)}></img>
      </div>
      <div className="gallery-column">
      <img id="City God Temple<br>城隍廟" src="https://raw.githubusercontent.com/jw4590/TangxiCityGodTemple/master/panorama/img/front-gate/City%20God%20Temple.jpg" alt="City God Temple" onClick={this.on.bind(this)}></img>
      </div>
      <div className="gallery-column">
      <img id="Protector of Tangxi<br>仙舟保障" src="https://raw.githubusercontent.com/jw4590/TangxiCityGodTemple/master/panorama/img/front-gate/Protector%20of%20Tangxi.jpg" alt="Protector of Tangxi"  onClick={this.on.bind(this)}></img>
      </div>
      <div className="gallery-column">
      <img id="Defender of Our Precious Wu<br>寳婺屏藩" src="https://raw.githubusercontent.com/jw4590/TangxiCityGodTemple/master/panorama/img/front-gate/Defender%20of%20our%20precious%20Wu.jpg" alt="Defender of our precious Wu"  onClick={this.on.bind(this)}></img>
      </div>
    

      <div className="back-button">
      <p><b>&rarr;</b></p>
      </div>
   </div>
  );
    }
    if (pageScene== "OperaStage") {
        return(
          <div className="gallery-row">

          <div className="gallery-column">
          <img id='Balcony.jpg' src="https://raw.githubusercontent.com/jw4590/TangxiCityGodTemple/master/panorama/img/opera-stage/Balcony.jpg" alt='Balcony.jpg'onClick={this.on.bind(this)}></img></div>
          <div className="gallery-column">
          <img id='Carved%20bracket%20and%20painted%20column.jpg' src="https://raw.githubusercontent.com/jw4590/TangxiCityGodTemple/master/panorama/img/opera-stage/Carved%20bracket%20and%20painted%20column.jpg" alt='Carved%20bracket%20and%20painted%20column.jpg'onClick={this.on.bind(this)}></img></div>
          <div className="gallery-column">
          <img id='Carved%20bracket%20and%20painted%20column1.jpg' src="https://raw.githubusercontent.com/jw4590/TangxiCityGodTemple/master/panorama/img/opera-stage/Carved%20bracket%20and%20painted%20column1.jpg" alt='Carved%20bracket%20and%20painted%20column1.jpg'onClick={this.on.bind(this)}></img></div>
          <div className="gallery-column">
          <img id='Carved,%20painted%20beams%20and%20balcony%20around%20the%20stage.jpg' src="https://raw.githubusercontent.com/jw4590/TangxiCityGodTemple/master/panorama/img/opera-stage/Carved,%20painted%20beams%20and%20balcony%20around%20the%20stage.jpg" alt='Carved,%20painted%20beams%20and%20balcony%20around%20the%20stage.jpg'onClick={this.on.bind(this)}></img></div>
          <div className="gallery-column">
          <img id='Carved,%20painted%20beams%20and%20balcony%20around%20the%20stage1.jpg' src="https://raw.githubusercontent.com/jw4590/TangxiCityGodTemple/master/panorama/img/opera-stage/Carved,%20painted%20beams%20and%20balcony%20around%20the%20stage1.jpg" alt='Carved,%20painted%20beams%20and%20balcony%20around%20the%20stage1.jpg'onClick={this.on.bind(this)}></img></div>
          <div className="gallery-column">
          <img id='Carved,%20painted%20beams%20and%20balcony%20around%20the%20stage2.jpg' src="https://raw.githubusercontent.com/jw4590/TangxiCityGodTemple/master/panorama/img/opera-stage/Carved,%20painted%20beams%20and%20balcony%20around%20the%20stage2.jpg" alt='Carved,%20painted%20beams%20and%20balcony%20around%20the%20stage2.jpg'onClick={this.on.bind(this)}></img></div>
          <div className="gallery-column">
          <img id='Ceiling%20and%20carved%20beams1.jpg' src="https://raw.githubusercontent.com/jw4590/TangxiCityGodTemple/master/panorama/img/opera-stage/Ceiling%20and%20carved%20beams1.jpg" alt='Ceiling%20and%20carved%20beams1.jpg'onClick={this.on.bind(this)}></img></div>
          <div className="gallery-column">
          <img id='Day%20Patrol.jpg' src="https://raw.githubusercontent.com/jw4590/TangxiCityGodTemple/master/panorama/img/opera-stage/Day%20Patrol.jpg" alt='Day%20Patrol.jpg'onClick={this.on.bind(this)}></img></div>
          <div className="gallery-column">
          <img id='Decorated%20ceiling.jpg' src="https://raw.githubusercontent.com/jw4590/TangxiCityGodTemple/master/panorama/img/opera-stage/Decorated%20ceiling.jpg" alt='Decorated%20ceiling.jpg'onClick={this.on.bind(this)}></img></div>
          <div className="gallery-column">
          <img id='Details%20of%20Day%20Patrol.jpg' src="https://raw.githubusercontent.com/jw4590/TangxiCityGodTemple/master/panorama/img/opera-stage/Details%20of%20Day%20Patrol.jpg" alt='Details%20of%20Day%20Patrol.jpg'onClick={this.on.bind(this)}></img></div>
          <div className="gallery-column">
          <img id='Entrance%20to%20the%20stage%20with%20curtain.jpg' src="https://raw.githubusercontent.com/jw4590/TangxiCityGodTemple/master/panorama/img/opera-stage/Entrance%20to%20the%20stage%20with%20curtain.jpg" alt='Entrance%20to%20the%20stage%20with%20curtain.jpg'onClick={this.on.bind(this)}></img></div>
          <div className="gallery-column">
          <img id='Entrance_exit%20to%20the%20stage%20with%20curtain.jpg' src="https://raw.githubusercontent.com/jw4590/TangxiCityGodTemple/master/panorama/img/opera-stage/Entrance_exit%20to%20the%20stage%20with%20curtain.jpg" alt='Entrance_exit%20to%20the%20stage%20with%20curtain.jpg'onClick={this.on.bind(this)}></img></div>
          <div className="gallery-column">
          <img id='Night%20Patrol.jpg' src="https://raw.githubusercontent.com/jw4590/TangxiCityGodTemple/master/panorama/img/opera-stage/Night%20Patrol.jpg" alt='Night%20Patrol.jpg'onClick={this.on.bind(this)}></img></div>
          <div className="gallery-column">
          <img id='Night%20Patrol1.jpg' src="https://raw.githubusercontent.com/jw4590/TangxiCityGodTemple/master/panorama/img/opera-stage/Night%20Patrol1.jpg" alt='Night%20Patrol1.jpg'onClick={this.on.bind(this)}></img></div>
          <div className="gallery-column">
          <img id='Night%20Patrol2.jpg' src="https://raw.githubusercontent.com/jw4590/TangxiCityGodTemple/master/panorama/img/opera-stage/Night%20Patrol2.jpg" alt='Night%20Patrol2.jpg'onClick={this.on.bind(this)}></img></div>
          <div className="gallery-column">
          <img id='Painted%20beams%20and%20column.jpg' src="https://raw.githubusercontent.com/jw4590/TangxiCityGodTemple/master/panorama/img/opera-stage/Painted%20beams%20and%20column.jpg" alt='Painted%20beams%20and%20column.jpg'onClick={this.on.bind(this)}></img></div>
          <div className="gallery-column">
          <img id='Painted%20beams%20and%20column1.jpg' src="https://raw.githubusercontent.com/jw4590/TangxiCityGodTemple/master/panorama/img/opera-stage/Painted%20beams%20and%20column1.jpg" alt='Painted%20beams%20and%20column1.jpg'onClick={this.on.bind(this)}></img></div>
          <div className="gallery-column">
          <img id='Painted%20beams%20and%20column2.jpg' src="https://raw.githubusercontent.com/jw4590/TangxiCityGodTemple/master/panorama/img/opera-stage/Painted%20beams%20and%20column2.jpg" alt='Painted%20beams%20and%20column2.jpg'onClick={this.on.bind(this)}></img></div>
          <div className="gallery-column">
          <img id='Painted%20beams%20and%20column3.jpg' src="https://raw.githubusercontent.com/jw4590/TangxiCityGodTemple/master/panorama/img/opera-stage/Painted%20beams%20and%20column3.jpg" alt='Painted%20beams%20and%20column3.jpg'onClick={this.on.bind(this)}></img></div>
          <div className="gallery-column">
          <img id='Painted%20beams%20and%20column4.jpg' src="https://raw.githubusercontent.com/jw4590/TangxiCityGodTemple/master/panorama/img/opera-stage/Painted%20beams%20and%20column4.jpg" alt='Painted%20beams%20and%20column4.jpg'onClick={this.on.bind(this)}></img></div>
          <div className="gallery-column">
          <img id='Painted%20beams%20and%20column5.jpg' src="https://raw.githubusercontent.com/jw4590/TangxiCityGodTemple/master/panorama/img/opera-stage/Painted%20beams%20and%20column5.jpg" alt='Painted%20beams%20and%20column5.jpg'onClick={this.on.bind(this)}></img></div>
          <div className="gallery-column">
          <img id='Panels%20with%20carvings%20on%20the%20stage.jpg' src="https://raw.githubusercontent.com/jw4590/TangxiCityGodTemple/master/panorama/img/opera-stage/Panels%20with%20carvings%20on%20the%20stage.jpg" alt='Panels%20with%20carvings%20on%20the%20stage.jpg'onClick={this.on.bind(this)}></img></div>
          <div className="gallery-column">
          <img id='Panels%20with%20carvings%20on%20the%20stage1.jpg' src="https://raw.githubusercontent.com/jw4590/TangxiCityGodTemple/master/panorama/img/opera-stage/Panels%20with%20carvings%20on%20the%20stage1.jpg" alt='Panels%20with%20carvings%20on%20the%20stage1.jpg'onClick={this.on.bind(this)}></img></div>
          <div className="gallery-column">
          <img id='Panels%20with%20carvings%20on%20the%20stage2.jpg' src="https://raw.githubusercontent.com/jw4590/TangxiCityGodTemple/master/panorama/img/opera-stage/Panels%20with%20carvings%20on%20the%20stage2.jpg" alt='Panels%20with%20carvings%20on%20the%20stage2.jpg'onClick={this.on.bind(this)}></img></div>
          <div className="gallery-column">
          <img id='Panels%20with%20carvings%20on%20the%20stage3.jpg' src="https://raw.githubusercontent.com/jw4590/TangxiCityGodTemple/master/panorama/img/opera-stage/Panels%20with%20carvings%20on%20the%20stage3.jpg" alt='Panels%20with%20carvings%20on%20the%20stage3.jpg'onClick={this.on.bind(this)}></img></div>
          <div className="gallery-column">
          <img id='The%20temple%20shines%20again.jpg' src="https://raw.githubusercontent.com/jw4590/TangxiCityGodTemple/master/panorama/img/opera-stage/The%20temple%20shines%20again.jpg" alt='The%20temple%20shines%20again.jpg'onClick={this.on.bind(this)}></img></div>
         
         
         <div className="back-button">
         <p><b>&rarr;</b></p>
         </div>
         </div>);
    }
    else{
      return(
        <div className="gallery-row">

        <div className="gallery-column">
        <img id='Bridge%20of%20Necessity.jpg' src="https://raw.githubusercontent.com/jw4590/TangxiCityGodTemple/master/panorama/img/opera-stage/'Bridge%20of%20Necessity.jpg'" alt='Bridge%20of%20Necessity.jpg'onClick={this.on.bind(this)}></img></div>
        <div className="gallery-column">
        <img id='Bridge%20of%20Necessity1.jpg' src="https://raw.githubusercontent.com/jw4590/TangxiCityGodTemple/master/panorama/img/opera-stage/'Bridge%20of%20Necessity1.jpg'" alt='Bridge%20of%20Necessity1.jpg'onClick={this.on.bind(this)}></img></div>
        <div className="gallery-column">
        <img id='Carved%20decorations%20on%20the%20front%20side%20of%20the%20stage,%20the%20left%20part.jpg' src="https://raw.githubusercontent.com/jw4590/TangxiCityGodTemple/master/panorama/img/opera-stage/Carved%20decorations%20on%20the%20front%20side%20of%20the%20stage,%20the%20left%20part.jpg" alt='Carved%20decorations%20on%20the%20front%20side%20of%20the%20stage,%20the%20left%20part.jpg'onClick={this.on.bind(this)}></img></div>
        <div className="gallery-column">
        <img id='Carved%20decorations%20on%20the%20front%20side%20of%20the%20stage,%20the%20left%20part1.jpg' src="https://raw.githubusercontent.com/jw4590/TangxiCityGodTemple/master/panorama/img/opera-stage/Carved%20decorations%20on%20the%20front%20side%20of%20the%20stage,%20the%20left%20part1.jpg" alt='Carved%20decorations%20on%20the%20front%20side%20of%20the%20stage,%20the%20left%20part1.jpg'onClick={this.on.bind(this)}></img></div>
        <div className="gallery-column">
        <img id='Carved%20decorations%20on%20the%20front%20side%20of%20the%20stage,%20the%20left%20part2.jpg' src="https://raw.githubusercontent.com/jw4590/TangxiCityGodTemple/master/panorama/img/opera-stage/Carved%20decorations%20on%20the%20front%20side%20of%20the%20stage,%20the%20left%20part2.jpg" alt='Carved%20decorations%20on%20the%20front%20side%20of%20the%20stage,%20the%20left%20part2.jpg'onClick={this.on.bind(this)}></img></div>
        <div className="gallery-column">
        <img id='Carved%20decorations%20on%20the%20front%20side%20of%20the%20stage,%20the%20middle%20part.jpg' src="https://raw.githubusercontent.com/jw4590/TangxiCityGodTemple/master/panorama/img/opera-stage/Carved%20decorations%20on%20the%20front%20side%20of%20the%20stage,%20the%20middle%20part.jpg" alt='Carved%20decorations%20on%20the%20front%20side%20of%20the%20stage,%20the%20middle%20part.jpg'onClick={this.on.bind(this)}></img></div>
        <div className="gallery-column">
        <img id='Carved%20decorations%20on%20the%20front%20side%20of%20the%20stage,%20the%20middle%20part1.jpg' src="https://raw.githubusercontent.com/jw4590/TangxiCityGodTemple/master/panorama/img/opera-stage/Carved%20decorations%20on%20the%20front%20side%20of%20the%20stage,%20the%20middle%20part1.jpg" alt='Carved%20decorations%20on%20the%20front%20side%20of%20the%20stage,%20the%20middle%20part1.jpg'onClick={this.on.bind(this)}></img></div>
        <div className="gallery-column">
        <img id='Carved%20decorations%20on%20the%20front%20side%20of%20the%20stage,%20the%20middle%20part2.jpg' src="https://raw.githubusercontent.com/jw4590/TangxiCityGodTemple/master/panorama/img/opera-stage/Carved%20decorations%20on%20the%20front%20side%20of%20the%20stage,%20the%20middle%20part2.jpg" alt='Carved%20decorations%20on%20the%20front%20side%20of%20the%20stage,%20the%20middle%20part2.jpg'onClick={this.on.bind(this)}></img></div>
        <div className="gallery-column">
        <img id='Carved%20decorations%20on%20the%20front%20side%20of%20the%20stage,%20the%20middle%20part3.jpg' src="https://raw.githubusercontent.com/jw4590/TangxiCityGodTemple/master/panorama/img/opera-stage/Carved%20decorations%20on%20the%20front%20side%20of%20the%20stage,%20the%20middle%20part3.jpg" alt='Carved%20decorations%20on%20the%20front%20side%20of%20the%20stage,%20the%20middle%20part3.jpg'onClick={this.on.bind(this)}></img></div>
        <div className="gallery-column">
        <img id='Carved%20decorations%20on%20the%20front%20side%20of%20the%20stage,%20the%20middle%20part4.jpg' src="https://raw.githubusercontent.com/jw4590/TangxiCityGodTemple/master/panorama/img/opera-stage/Carved%20decorations%20on%20the%20front%20side%20of%20the%20stage,%20the%20middle%20part4.jpg" alt='Carved%20decorations%20on%20the%20front%20side%20of%20the%20stage,%20the%20middle%20part4.jpg'onClick={this.on.bind(this)}></img></div>
        <div className="gallery-column">
        <img id='Carved%20decorations%20on%20the%20front%20side%20of%20the%20stage,%20the%20middle%20part5.jpg' src="https://raw.githubusercontent.com/jw4590/TangxiCityGodTemple/master/panorama/img/opera-stage/Carved%20decorations%20on%20the%20front%20side%20of%20the%20stage,%20the%20middle%20part5.jpg" alt='Carved%20decorations%20on%20the%20front%20side%20of%20the%20stage,%20the%20middle%20part5.jpg'onClick={this.on.bind(this)}></img></div>
        <div className="gallery-column">
        <img id='Carved%20decorations%20on%20the%20front%20side%20of%20the%20stage,%20the%20right%20part.jpg' src="https://raw.githubusercontent.com/jw4590/TangxiCityGodTemple/master/panorama/img/opera-stage/Carved%20decorations%20on%20the%20front%20side%20of%20the%20stage,%20the%20right%20part.jpg" alt='Carved%20decorations%20on%20the%20front%20side%20of%20the%20stage,%20the%20right%20part.jpg'onClick={this.on.bind(this)}></img></div>
        <div className="gallery-column">
        <img id='Carved%20decorations%20on%20the%20front%20side%20of%20the%20stage,%20the%20right%20part1.jpg' src="https://raw.githubusercontent.com/jw4590/TangxiCityGodTemple/master/panorama/img/opera-stage/Carved%20decorations%20on%20the%20front%20side%20of%20the%20stage,%20the%20right%20part1.jpg" alt='Carved%20decorations%20on%20the%20front%20side%20of%20the%20stage,%20the%20right%20part1.jpg'onClick={this.on.bind(this)}></img></div>
        <div className="gallery-column">
        <img id='Carved%20decorations%20on%20the%20front%20side%20of%20the%20stage,%20the%20right%20part2.jpg' src="https://raw.githubusercontent.com/jw4590/TangxiCityGodTemple/master/panorama/img/opera-stage/Carved%20decorations%20on%20the%20front%20side%20of%20the%20stage,%20the%20right%20part2.jpg" alt='Carved%20decorations%20on%20the%20front%20side%20of%20the%20stage,%20the%20right%20part2.jpg'onClick={this.on.bind(this)}></img></div>
        <div className="gallery-column">
        <img id='The%20remainder%20of%20an%20old%20tree,%20displayed%20in%20the%20courtyard..jpg' src="https://raw.githubusercontent.com/jw4590/TangxiCityGodTemple/master/panorama/img/opera-stage/The%20remainder%20of%20an%20old%20tree,%20displayed%20in%20the%20courtyard..jpg" alt='The%20remainder%20of%20an%20old%20tree,%20displayed%20in%20the%20courtyard..jpg'onClick={this.on.bind(this)}></img></div>

        <div className="back-button">
        <p><b>&rarr;</b></p>
        </div>
        </div>);
    }
  }
     on(image) {
      var expandImg = document.getElementById("expandedImg");
      console.log(image.target.src);
      expandImg.src = image.target.src;
      document.getElementById("overlay").style.display = "block";
    }
  }