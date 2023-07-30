import './stylesheet/BottomSubHeading.css';

import image1 from './assets/images/image-retro-pcs.jpg';
import image2 from './assets/images/image-top-laptops.jpg';
import image3 from './assets/images/image-gaming-growth.jpg';

/*
Props:
  img: string = Image link
  no: string = Article number
  title: string = Title
  desc: string = Description
*/

const Article = (props: any) => {
  return (
    <a href="#" className="Article">
      <div className="ArticleLeftSide">
        <img className="ArticleImage" src={props.img} alt="article image" />
      </div>
      <div className="ArticleRightSide">
        <div className="ArticleNumber">{props.no}</div>
        <div className="ArticleTitle">{props.title}</div>
        <div className="ArticleDescription">{props.desc}</div>
      </div>
    </a>
  );
};

const BottomSubHeading = () => {
  return (
    <div className="BottomSubHeading">
      <Article 
        img={image1}
        no="01" 
        title="Reviving Retro PCs" 
        desc="What happens when old PCs are given modern upgrades?"
      />

      <Article 
        img={image2}
        no="02" 
        title="Top 10 Laptops of 2022" 
        desc="Our best picks for various needs and budgets"
      />

      <Article 
        img={image3}
        no="03" 
        title="The Growth of Gaming" 
        desc="How the pandemic has sparked fresh opportunities"
      />
    </div>
  );
};

export default BottomSubHeading;
