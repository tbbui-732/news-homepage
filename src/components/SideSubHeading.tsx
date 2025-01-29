import './stylesheet/SideSubHeading.css';

const SideSubHeading = () => {
  return (
    <div className="SideSubHeading">
      <div className="Title">New</div>
      <a href="#" className="NewsBlock">
        <div className="BlockHeading">Hydrogen VS Electric Cars</div>
        <div className="BlockSubHeading">
          Will hydrogen-fueled cars ever catch up to EVs?
        </div>
      </a>
      <div className="LineBreak"></div>
      <a href="#" className="NewsBlock">
        <div className="BlockHeading">The Downsides of AI Artistry</div>
        <div className="BlockSubHeading">
          What are the possible adverse effects of on-demand
          AI image generation?
        </div>
      </a>
      <div className="LineBreak"></div>
      <a href="#" className="NewsBlock">
        <div className="BlockHeading">Is VC Funding Drying Up?</div>
        <div className="BlockSubHeading">
          Private funding by VC firms is down 50% YOY.
          We take a look at what that means.
        </div>
      </a>
    </div> 
  );
};

export default SideSubHeading;
