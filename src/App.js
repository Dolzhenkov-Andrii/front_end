import './css/style.css';
import React, { useState } from 'react';
import Footer from './components/Footer';
import Header from './components/Header';

function App() {

  let [color, setColor] = useState('lorem ipsum');
  let [bodyClass, setBodyClass] = useState(true);

  return (
    <html lang="en">
    <head>
        <meta charSet="UTF-8" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
        <link href="https://fonts.googleapis.com/css2?family=Lato:wght@300;400;900&family=Open+Sans&display=swap" rel="stylesheet" />
        <title>Title</title>
    </head>
    <body className={bodyClass ? '' : 'the_night'}>
      <Header bodyClass={bodyClass} setBodyClass={setBodyClass} />
      <div className="intro">
          <div className="container">
              <div className="container_intro">
                  <div className="intro_inner">
                      <div className="intro_UP">
                          <p className="intro_dot">●</p>
                          <p className="intro_subtitle">{color}</p>
                          <p className="intro_dot">●</p>
                      </div>
                      <div className="intro_center">
                          <h1 className="intro_title">creative interior design studio</h1>
                      </div>
                      <div className="intro_down">
                          <div className="intro_dow_line"></div>
                          <p className="intro_subtitle">libero leo,   interdum sed vehicula id</p>
                          <div className="intro_dow_line"></div>
                      </div>
                  </div>
              </div>
              <div className="container_button">
                  <a className="button button--start" href="/connect">check out our work</a>
              </div>
          </div>
      </div>
      <div className="intro_features_background">
          <div className="container">
              <div className="container_features">
                  <div className="intro_features_text">
                      <div className="intro_features_title">
                          <p>Phasellus sit amet justo egestas</p>
                      </div>
                      <hr className="intro_features_line" />
                      <div className="intro_features_subtitle">
                          <p>Nunc ac lorem vel arcu ultricies volutpat at nec arcu. Ut tempus dignissim est, at iaculis massa blandit commodo. In vitae nunc eget arcu aliquam hendrerit a vel dui. Aliquam a sagittis neque, nec congue eros.</p>
                      </div>
                  </div>
                  <ul className="features_item" >
                      <li><a href="#" className="fi_link"><i className="fi_img_1"></i>Ullamcorper</a></li>
                      <li><a href="#" className="fi_link"><i className="fi_img_2"></i>Elementum</a></li>
                      <li><a href="#" className="fi_link"><i className="fi_img_3"></i>Vitae nunc</a></li>
                      <li><a href="#" className="fi_link"><i className="fi_img_4"></i>Sollicitudin</a></li>
                      <li><a href="#" className="fi_link"><i className="fi_img_5"></i>Vestibulum non</a></li>
                  </ul>
              </div>
          </div>
      </div>
      <div className="container">
          <div className="container_clients">
              <div className="intro_features_text">
                  <div className="intro_features_title">
                      <p>Our clients love us</p>
                  </div>
                  <hr className="intro_features_line" />
                  <div className="intro_features_subtitle">
                      <p>Duis posuere sollicitudin felis, sit amet tempus orci iaculis eu. Donec quis laoreet dolor. Nam sed mi nisl. Duis ultricies lacus nec auctor rhoncus. Praesent quis tincidunt orci.</p>
                  </div>
              </div>
              <div className="clients_list">
                  <a href="#" className="slc_list slc_rl"><i className="slc_left"></i></a>
                  <ul className="scrol_list"> 
                      <li><a href="#" className="slc_list"><i className="ic_img_1"></i></a></li>
                      <li><a href="#" className="slc_list"><i className="ic_img_2"></i></a></li>
                      <li><a href="#" className="slc_list"><i className="ic_img_3"></i></a></li>
                      <li><a href="#" className="slc_list"><i className="ic_img_4"></i></a></li>
                      <li>
                        <a href="#" className="slc_list">
                          <i className="ic_img_5"></i></a></li>
                  </ul>
                  <a href="#" className="slc_list slc_rl">
                    <i className="slc_right"></i>
                  </a>
              </div>
          </div>
      </div>
      <Footer />
      <script src="/style.js"></script>
      </body>
    </html>
  );
}

export default App;
