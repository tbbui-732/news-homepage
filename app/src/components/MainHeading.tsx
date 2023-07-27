import './stylesheet/MainHeading.css';

import headingImage from "./assets/images/image-web-3-desktop.jpg";

const MainHeading = () => {

  const title = "The Bright Future of Web 3.0?";
  const readmore = " \
    We dive into the next evolution of the web that claims to put \
    the power of the platforms back into the hands of the people. \
    But is it really fulfilling its promise?";

  return (
    <div className="MainHeading">
      <img className="HeadingImage" src={headingImage} alt="image-web-3-desktop" />
      <div className="HeadingTitle">{title}</div>
      <div className="HeadingReadMore">
        <div className="ReadMoreParagraph">{readmore}</div>
        <button className="ReadMoreButton">read more</button>
      </div>
    </div>
  )
};

export default MainHeading;
