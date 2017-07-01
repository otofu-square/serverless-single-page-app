import * as React from 'react';

const Index = () =>
  <div className="container">
    <div className="row">
      <div className="one-half column">
        <h3>Learn JavaScript, one puzzle at a time.</h3>
        <a href="" className="button button-primary">
          Start Now!
        </a>
      </div>
      <div className="one-half column">
        <img src={require('./assets/HeroImage.jpg')} />
      </div>
    </div>
  </div>;

export default Index;
