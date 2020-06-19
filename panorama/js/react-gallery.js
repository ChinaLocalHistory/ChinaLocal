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
      <img src="../img/front-gate/1.jpg" alt="Gate guardian god" onClick={this.on.bind(this)}></img>
      </div>
      <div className="gallery-column">
      <img src="https://raw.githubusercontent.com/jw4590/TangxiCityGodTemple/master/panorama/img/Gate%20guardian%20god2.jpg" alt="Gate guardian god" onClick={this.on.bind(this)}></img>
      </div>
      <div className="gallery-column">
      <img id="City God Temple<br>城隍廟" src="https://raw.githubusercontent.com/jw4590/TangxiCityGodTemple/master/panorama/img/City%20God%20Temple.jpg" alt="City God Temple" onClick={this.on.bind(this)}></img>
      </div>
      <div className="gallery-column">
      <img id="Protector of Tangxi<br>仙舟保障" src="https://raw.githubusercontent.com/jw4590/TangxiCityGodTemple/master/panorama/img/Protector%20of%20Tangxi.jpg" alt="Protector of Tangxi"  onClick={this.on.bind(this)}></img>
      </div>
      <div className="gallery-column">
      <img id="Defender of Our Precious Wu<br>寳婺屏藩" src="https://raw.githubusercontent.com/jw4590/TangxiCityGodTemple/master/panorama/img/Defender%20of%20our%20precious%20Wu.jpg" alt="Protector of Tangxi"  onClick={this.on.bind(this)}></img>
      </div>
    

      <div className="back-button">
      <p><b>&rarr;</b></p>
      </div>
   </div>
  );
    }
    else{
        return(
        <div className="gallery-row">
      <div className="gallery-column">
      <img src="https://raw.githubusercontent.com/jw4590/TangxiCityGodTemple/master/panorama/img/operaStage/Balcony.jpg" alt="Gate guardian god" onClick={this.on.bind(this)}></img>
      </div>
      <div className="gallery-column">
      <img src="https://raw.githubusercontent.com/jw4590/TangxiCityGodTemple/master/panorama/img/operaStage/Carved%20bracket%20and%20painted%20column.jpg" alt="Gate guardian god" onClick={this.on.bind(this)}></img>
      </div>
      <div className="gallery-column">
      <img id="City God Temple<br>城隍廟" src="https://raw.githubusercontent.com/jw4590/TangxiCityGodTemple/master/panorama/img/operaStage/Carved%20bracket%20and%20painted%20column1.jpg" alt="City God Temple" onClick={this.on.bind(this)}></img>
      </div>
      <div className="gallery-column">
      <img id="Protector of Tangxi<br>仙舟保障" src="https://raw.githubusercontent.com/jw4590/TangxiCityGodTemple/master/panorama/img/operaStage/Carved%2C%20painted%20beams%20and%20balcony%20around%20the%20stage.jpg" alt="Protector of Tangxi"  onClick={this.on.bind(this)}></img>
      </div>
      <div className="gallery-column">
      <img id="Protector of Tangxi<br>仙舟保障" src="https://raw.githubusercontent.com/jw4590/TangxiCityGodTemple/master/panorama/img/operaStage/Carved%2C%20painted%20beams%20and%20balcony%20around%20the%20stage1.jpg" alt="Protector of Tangxi"  onClick={this.on.bind(this)}></img>
      </div>
      <div className="back">
      <p>&rarr;</p>
      </div>
      
   </div>
        )
    }
  }
     on(image) {
      var expandImg = document.getElementById("expandedImg");
      console.log(image.target.src);
      expandImg.src = image.target.src;
      document.getElementById("overlay").style.display = "block";
    }
  }