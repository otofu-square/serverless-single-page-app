import * as React from 'react';
import { Link } from 'react-router-dom';

const Index = () =>
  <div className="row">
    <div className="one-half column">
      <h3>Learn JavaScript, one puzzle at a time.</h3>
      <Link to="/problem/1" className="button button-primary">
        Start Now!
      </Link>
    </div>
    <div className="one-half column">
      <img src={require('../assets/HeroImage.jpg')} />
    </div>
  </div>;

export default Index;
