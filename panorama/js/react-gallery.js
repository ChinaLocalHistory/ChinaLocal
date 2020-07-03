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
    if (pageScene== "operaStage") {
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
    if(pageScene="courtyardNearStage"){
      return(
        <div className="gallery-row">

        <div className="gallery-column">
        <img id='Bridge%20of%20Necessity.jpg' src="https://raw.githubusercontent.com/jw4590/TangxiCityGodTemple/master/panorama/img/courtyard-near-stage/Bridge%20of%20Necessity.jpg" alt='Bridge%20of%20Necessity.jpg'onClick={this.on.bind(this)}></img></div>
        <div className="gallery-column">
        <img id='Bridge%20of%20Necessity1.jpg' src="https://raw.githubusercontent.com/jw4590/TangxiCityGodTemple/master/panorama/img/courtyard-near-stage/Bridge%20of%20Necessity1.jpg" alt='Bridge%20of%20Necessity1.jpg'onClick={this.on.bind(this)}></img></div>
        <div className="gallery-column">
        <img id='Carved%20decorations%20on%20the%20front%20side%20of%20the%20stage,%20the%20left%20part.jpg' src="https://raw.githubusercontent.com/jw4590/TangxiCityGodTemple/master/panorama/img/courtyard-near-stage/Carved%20decorations%20on%20the%20front%20side%20of%20the%20stage,%20the%20left%20part.jpg" alt='Carved%20decorations%20on%20the%20front%20side%20of%20the%20stage,%20the%20left%20part.jpg'onClick={this.on.bind(this)}></img></div>
        <div className="gallery-column">
        <img id='Carved%20decorations%20on%20the%20front%20side%20of%20the%20stage,%20the%20left%20part1.jpg' src="https://raw.githubusercontent.com/jw4590/TangxiCityGodTemple/master/panorama/img/courtyard-near-stage/Carved%20decorations%20on%20the%20front%20side%20of%20the%20stage,%20the%20left%20part1.jpg" alt='Carved%20decorations%20on%20the%20front%20side%20of%20the%20stage,%20the%20left%20part1.jpg'onClick={this.on.bind(this)}></img></div>
        <div className="gallery-column">
        <img id='Carved%20decorations%20on%20the%20front%20side%20of%20the%20stage,%20the%20left%20part2.jpg' src="https://raw.githubusercontent.com/jw4590/TangxiCityGodTemple/master/panorama/img/courtyard-near-stage/Carved%20decorations%20on%20the%20front%20side%20of%20the%20stage,%20the%20left%20part2.jpg" alt='Carved%20decorations%20on%20the%20front%20side%20of%20the%20stage,%20the%20left%20part2.jpg'onClick={this.on.bind(this)}></img></div>
        <div className="gallery-column">
        <img id='Carved%20decorations%20on%20the%20front%20side%20of%20the%20stage,%20the%20middle%20part.jpg' src="https://raw.githubusercontent.com/jw4590/TangxiCityGodTemple/master/panorama/img/courtyard-near-stage/Carved%20decorations%20on%20the%20front%20side%20of%20the%20stage,%20the%20middle%20part.jpg" alt='Carved%20decorations%20on%20the%20front%20side%20of%20the%20stage,%20the%20middle%20part.jpg'onClick={this.on.bind(this)}></img></div>
        <div className="gallery-column">
        <img id='Carved%20decorations%20on%20the%20front%20side%20of%20the%20stage,%20the%20middle%20part1.jpg' src="https://raw.githubusercontent.com/jw4590/TangxiCityGodTemple/master/panorama/img/courtyard-near-stage/Carved%20decorations%20on%20the%20front%20side%20of%20the%20stage,%20the%20middle%20part1.jpg" alt='Carved%20decorations%20on%20the%20front%20side%20of%20the%20stage,%20the%20middle%20part1.jpg'onClick={this.on.bind(this)}></img></div>
        <div className="gallery-column">
        <img id='Carved%20decorations%20on%20the%20front%20side%20of%20the%20stage,%20the%20middle%20part2.jpg' src="https://raw.githubusercontent.com/jw4590/TangxiCityGodTemple/master/panorama/img/courtyard-near-stage/Carved%20decorations%20on%20the%20front%20side%20of%20the%20stage,%20the%20middle%20part2.jpg" alt='Carved%20decorations%20on%20the%20front%20side%20of%20the%20stage,%20the%20middle%20part2.jpg'onClick={this.on.bind(this)}></img></div>
        <div className="gallery-column">
        <img id='Carved%20decorations%20on%20the%20front%20side%20of%20the%20stage,%20the%20middle%20part3.jpg' src="https://raw.githubusercontent.com/jw4590/TangxiCityGodTemple/master/panorama/img/courtyard-near-stage/Carved%20decorations%20on%20the%20front%20side%20of%20the%20stage,%20the%20middle%20part3.jpg" alt='Carved%20decorations%20on%20the%20front%20side%20of%20the%20stage,%20the%20middle%20part3.jpg'onClick={this.on.bind(this)}></img></div>
        <div className="gallery-column">
        <img id='Carved%20decorations%20on%20the%20front%20side%20of%20the%20stage,%20the%20middle%20part4.jpg' src="https://raw.githubusercontent.com/jw4590/TangxiCityGodTemple/master/panorama/img/courtyard-near-stage/Carved%20decorations%20on%20the%20front%20side%20of%20the%20stage,%20the%20middle%20part4.jpg" alt='Carved%20decorations%20on%20the%20front%20side%20of%20the%20stage,%20the%20middle%20part4.jpg'onClick={this.on.bind(this)}></img></div>
        <div className="gallery-column">
        <img id='Carved%20decorations%20on%20the%20front%20side%20of%20the%20stage,%20the%20middle%20part5.jpg' src="https://raw.githubusercontent.com/jw4590/TangxiCityGodTemple/master/panorama/img/courtyard-near-stage/Carved%20decorations%20on%20the%20front%20side%20of%20the%20stage,%20the%20middle%20part5.jpg" alt='Carved%20decorations%20on%20the%20front%20side%20of%20the%20stage,%20the%20middle%20part5.jpg'onClick={this.on.bind(this)}></img></div>
        <div className="gallery-column">
        <img id='Carved%20decorations%20on%20the%20front%20side%20of%20the%20stage,%20the%20right%20part.jpg' src="https://raw.githubusercontent.com/jw4590/TangxiCityGodTemple/master/panorama/img/courtyard-near-stage/Carved%20decorations%20on%20the%20front%20side%20of%20the%20stage,%20the%20right%20part.jpg" alt='Carved%20decorations%20on%20the%20front%20side%20of%20the%20stage,%20the%20right%20part.jpg'onClick={this.on.bind(this)}></img></div>
        <div className="gallery-column">
        <img id='Carved%20decorations%20on%20the%20front%20side%20of%20the%20stage,%20the%20right%20part1.jpg' src="https://raw.githubusercontent.com/jw4590/TangxiCityGodTemple/master/panorama/img/courtyard-near-stage/Carved%20decorations%20on%20the%20front%20side%20of%20the%20stage,%20the%20right%20part1.jpg" alt='Carved%20decorations%20on%20the%20front%20side%20of%20the%20stage,%20the%20right%20part1.jpg'onClick={this.on.bind(this)}></img></div>
        <div className="gallery-column">
        <img id='Carved%20decorations%20on%20the%20front%20side%20of%20the%20stage,%20the%20right%20part2.jpg' src="https://raw.githubusercontent.com/jw4590/TangxiCityGodTemple/master/panorama/img/courtyard-near-stage/Carved%20decorations%20on%20the%20front%20side%20of%20the%20stage,%20the%20right%20part2.jpg" alt='Carved%20decorations%20on%20the%20front%20side%20of%20the%20stage,%20the%20right%20part2.jpg'onClick={this.on.bind(this)}></img></div>
        <div className="gallery-column">
        <img id='The%20remainder%20of%20an%20old%20tree,%20displayed%20in%20the%20courtyard..jpg' src="https://raw.githubusercontent.com/jw4590/TangxiCityGodTemple/master/panorama/img/courtyard-near-stage/The%20remainder%20of%20an%20old%20tree,%20displayed%20in%20the%20courtyard..jpg" alt='The%20remainder%20of%20an%20old%20tree,%20displayed%20in%20the%20courtyard..jpg'onClick={this.on.bind(this)}></img></div>

        <div className="back-button">
        <p><b>&rarr;</b></p>
        </div>
        </div>);
    }
    else{
      return(
    <div className="gallery-row">

 <div className="gallery-column">
 <img id='000066.jpg' src="https://raw.githubusercontent.com/jw4590/TangxiCityGodTemple/master/panorama/img/courtyard-near-main-hall/000066.jpg" alt='000066.jpg' onClick={this.on.bind(this)}></img></div>
 <div className="gallery-column">
 <img id='000072.jpg' src="https://raw.githubusercontent.com/jw4590/TangxiCityGodTemple/master/panorama/img/courtyard-near-main-hall/000072.jpg" alt='000072.jpg' onClick={this.on.bind(this)}></img></div>
 <div className="gallery-column">
 <img id='000073.jpg' src="https://raw.githubusercontent.com/jw4590/TangxiCityGodTemple/master/panorama/img/courtyard-near-main-hall/000073.jpg" alt='000073.jpg' onClick={this.on.bind(this)}></img></div>
 <div className="gallery-column">
 <img id='000074.jpg' src="https://raw.githubusercontent.com/jw4590/TangxiCityGodTemple/master/panorama/img/courtyard-near-main-hall/000074.jpg" alt='000074.jpg' onClick={this.on.bind(this)}></img></div>
 <div className="gallery-column">
 <img id='000075.jpg' src="https://raw.githubusercontent.com/jw4590/TangxiCityGodTemple/master/panorama/img/courtyard-near-main-hall/000075.jpg" alt='000075.jpg' onClick={this.on.bind(this)}></img></div>
 <div className="gallery-column">
 <img id='000106.jpg' src="https://raw.githubusercontent.com/jw4590/TangxiCityGodTemple/master/panorama/img/courtyard-near-main-hall/000106.jpg" alt='000106.jpg' onClick={this.on.bind(this)}></img></div>
 <div className="gallery-column">
 <img id='000107.jpg' src="https://raw.githubusercontent.com/jw4590/TangxiCityGodTemple/master/panorama/img/courtyard-near-main-hall/000107.jpg" alt='000107.jpg' onClick={this.on.bind(this)}></img></div>
 <div className="gallery-column">
 <img id='000137.jpg' src="https://raw.githubusercontent.com/jw4590/TangxiCityGodTemple/master/panorama/img/courtyard-near-main-hall/000137.jpg" alt='000137.jpg' onClick={this.on.bind(this)}></img></div>
 <div className="gallery-column">
 <img id='000142.jpg' src="https://raw.githubusercontent.com/jw4590/TangxiCityGodTemple/master/panorama/img/courtyard-near-main-hall/000142.jpg" alt='000142.jpg' onClick={this.on.bind(this)}></img></div>
 <div className="gallery-column">
 <img id='000143.jpg' src="https://raw.githubusercontent.com/jw4590/TangxiCityGodTemple/master/panorama/img/courtyard-near-main-hall/000143.jpg" alt='000143.jpg' onClick={this.on.bind(this)}></img></div>
 <div className="gallery-column">
 <img id='000144.jpg' src="https://raw.githubusercontent.com/jw4590/TangxiCityGodTemple/master/panorama/img/courtyard-near-main-hall/000144.jpg" alt='000144.jpg' onClick={this.on.bind(this)}></img></div>
 <div className="gallery-column">
 <img id='000145.jpg' src="https://raw.githubusercontent.com/jw4590/TangxiCityGodTemple/master/panorama/img/courtyard-near-main-hall/000145.jpg" alt='000145.jpg' onClick={this.on.bind(this)}></img></div>
 <div className="gallery-column">
 <img id='000146.jpg' src="https://raw.githubusercontent.com/jw4590/TangxiCityGodTemple/master/panorama/img/courtyard-near-main-hall/000146.jpg" alt='000146.jpg' onClick={this.on.bind(this)}></img></div>
 <div className="gallery-column">
 <img id='000147.jpg' src="https://raw.githubusercontent.com/jw4590/TangxiCityGodTemple/master/panorama/img/courtyard-near-main-hall/000147.jpg" alt='000147.jpg' onClick={this.on.bind(this)}></img></div>
 <div className="gallery-column">
 <img id='000149.jpg' src="https://raw.githubusercontent.com/jw4590/TangxiCityGodTemple/master/panorama/img/courtyard-near-main-hall/000149.jpg" alt='000149.jpg' onClick={this.on.bind(this)}></img></div>
 <div className="gallery-column">
 <img id='000150.jpg' src="https://raw.githubusercontent.com/jw4590/TangxiCityGodTemple/master/panorama/img/courtyard-near-main-hall/000150.jpg" alt='000150.jpg' onClick={this.on.bind(this)}></img></div>
 <div className="gallery-column">
 <img id='000154.jpg' src="https://raw.githubusercontent.com/jw4590/TangxiCityGodTemple/master/panorama/img/courtyard-near-main-hall/000154.jpg" alt='000154.jpg' onClick={this.on.bind(this)}></img></div>
 <div className="gallery-column">
 <img id='000172.jpg' src="https://raw.githubusercontent.com/jw4590/TangxiCityGodTemple/master/panorama/img/courtyard-near-main-hall/000172.jpg" alt='000172.jpg' onClick={this.on.bind(this)}></img></div>
 <div className="gallery-column">
 <img id='000318.jpg' src="https://raw.githubusercontent.com/jw4590/TangxiCityGodTemple/master/panorama/img/courtyard-near-main-hall/000318.jpg" alt='000318.jpg' onClick={this.on.bind(this)}></img></div>
 <div className="gallery-column">
 <img id='An%20old%20stele%20of%20donation,%20displayed.%20%202.jpg' src="https://raw.githubusercontent.com/jw4590/TangxiCityGodTemple/master/panorama/img/courtyard-near-main-hall/'An%20old%20stele%20of%20donation,%20displayed.%20%202.jpg" alt='An%20old%20stele%20of%20donation,%20displayed.%20%202.jpg' onClick={this.on.bind(this)}></img></div>
 <div className="gallery-column">
 <img id='An%20old%20stele%20of%20donors,%20displayed..jpg' src="https://raw.githubusercontent.com/jw4590/TangxiCityGodTemple/master/panorama/img/courtyard-near-main-hall/'An%20old%20stele%20of%20donors,%20displayed..jpg" alt='An%20old%20stele%20of%20donors,%20displayed..jpg' onClick={this.on.bind(this)}></img></div>
 <div className="gallery-column">
 <img id='Furnace%20for%20burning%20paper.jpg' src="https://raw.githubusercontent.com/jw4590/TangxiCityGodTemple/master/panorama/img/courtyard-near-main-hall/'Furnace%20for%20burning%20paper.jpg" alt='Furnace%20for%20burning%20paper.jpg'onClick={this.on.bind(this)}></img></div>
 <div className="gallery-column">
 <img id='Furnace%20for%20burning%20sutra.jpg' src="https://raw.githubusercontent.com/jw4590/TangxiCityGodTemple/master/panorama/img/courtyard-near-main-hall/'Furnace%20for%20burning%20sutra.jpg" alt='Furnace%20for%20burning%20sutra.jpg'onClick={this.on.bind(this)}></img></div>
 <div className="gallery-column">
 <img id='Gate%20of%20the%20main%20hall.jpg' src="https://raw.githubusercontent.com/jw4590/TangxiCityGodTemple/master/panorama/img/courtyard-near-main-hall/'Gate%20of%20the%20main%20hall.jpg" alt='Gate%20of%20the%20main%20hall.jpg'onClick={this.on.bind(this)}></img></div>
 <div className="gallery-column">
 <img id='Modern%20stele%20with%20the%20names%20of%20donors%20for%20the%20renovation%20of%20the%20City%20God%20Temple..jpg' src="https://raw.githubusercontent.com/jw4590/TangxiCityGodTemple/master/panorama/img/courtyard-near-main-hall/'Modern%20stele%20with%20the%20names%20of%20donors%20for%20the%20renovation%20of%20the%20City%20God%20Temple..jpg" alt='Modern%20stele%20with%20the%20names%20of%20donors%20for%20the%20renovation%20of%20the%20City%20God%20Temple..jpg'onClick={this.on.bind(this)}></img></div>
 <div className="gallery-column">
 <img id='Outline%20of%20the%20temple%20history.jpg' src="https://raw.githubusercontent.com/jw4590/TangxiCityGodTemple/master/panorama/img/courtyard-near-main-hall/'Outline%20of%20the%20temple%20history.jpg" alt='Outline%20of%20the%20temple%20history.jpg'onClick={this.on.bind(this)}></img></div>
 <div className="gallery-column">
 <img id='Overview%20of%20Dragon%20King%20Temple.jpg' src="https://raw.githubusercontent.com/jw4590/TangxiCityGodTemple/master/panorama/img/courtyard-near-main-hall/'Overview%20of%20Dragon%20King%20Temple.jpg" alt='Overview%20of%20Dragon%20King%20Temple.jpg'onClick={this.on.bind(this)}></img></div>
 <div className="gallery-column">
 <img id='Overview%20of%20Having%20Children%20Sanctuary.jpg' src="https://raw.githubusercontent.com/jw4590/TangxiCityGodTemple/master/panorama/img/courtyard-near-main-hall/'Overview%20of%20Having%20Children%20Sanctuary.jpg" alt='Overview%20of%20Having%20Children%20Sanctuary.jpg'onClick={this.on.bind(this)}></img></div>
 <div className="gallery-column">
 <img id='The%20administrative%20achievements%20of%20Song%20Yue.jpg' src="https://raw.githubusercontent.com/jw4590/TangxiCityGodTemple/master/panorama/img/courtyard-near-main-hall/'The%20administrative%20achievements%20of%20Song%20Yue.jpg" alt='The%20administrative%20achievements%20of%20Song%20Yue.jpg'onClick={this.on.bind(this)}></img></div>
 <div className="gallery-column">
 <img id='The%20city%20is%20secured.jpg' src="https://raw.githubusercontent.com/jw4590/TangxiCityGodTemple/master/panorama/img/courtyard-near-main-hall/'The%20city%20is%20secured.jpg" alt='The%20city%20is%20secured.jpg'onClick={this.on.bind(this)}></img></div>
 <div className="gallery-column">
 <img id='The%20customs%20are%20honest.jpg' src="https://raw.githubusercontent.com/jw4590/TangxiCityGodTemple/master/panorama/img/courtyard-near-main-hall/'The%20customs%20are%20honest.jpg" alt='The%20customs%20are%20honest.jpg'onClick={this.on.bind(this)}></img></div>

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