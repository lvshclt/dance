import { Link } from 'react-router-dom';

export default function GNB() {
  function mouseOver(e) {
    const bar = e.target.parentNode.getElementsByClassName('bar')[0];
    bar.style.display = 'block';
    bar.style.animationName = 'aaa';
    bar.style.animationDuration = '0.2s';
  }
  function mouseOut(e) {
    const bar = e.target.parentNode.getElementsByClassName('bar')[0];
    bar.style.display = 'none';
  }

  return (
    <div className="gnb col-lg-12">
      <div className="left col-lg-1">
        <Link to="/">
          <div className="box" onMouseOver={mouseOver} onMouseOut={mouseOut}>
            <h3 className="home">HOME</h3>
            <div className="bar"></div>
          </div>
        </Link>
      </div>
      <div className="right col-lg-4">
        <Link to="/">
          <div className="box" onMouseOver={mouseOver} onMouseOut={mouseOut}>
            <h3 className="works">WORK</h3>
            <div className="bar"></div>
          </div>
        </Link>
        <Link to="/">
          <div className="box" onMouseOver={mouseOver} onMouseOut={mouseOut}>
            <h3 className="about">ABOUT</h3>
            <div className="bar"></div>
          </div>
        </Link>
        <Link to="/lyrics">
          <div className="box" onMouseOver={mouseOver} onMouseOut={mouseOut}>
            <h3 className="lyrics">LYRICS</h3>
            <div className="bar"></div>
          </div>
        </Link>
        <Link to="/">
          <div className="box" onMouseOver={mouseOver} onMouseOut={mouseOut}>
            <h3 className="contact">CONTACT</h3>
            <div className="bar"></div>
          </div>
        </Link>
      </div>
    </div>
  );
}
