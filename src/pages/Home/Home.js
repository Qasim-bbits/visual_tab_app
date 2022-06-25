import './Home.css';
import React from "react";
import Cards from "../../components/Cards/Cards";
import Asset from '../../resources/SVGs/asset-icon-01.svg';
import Workforce from '../../resources/SVGs/work-icon-01.svg';
import Delivery from '../../resources/SVGs/delivery-icon-01.svg';
import Visitor from '../../resources/SVGs/visitor-icon-01.svg';

const Home = () => {
  return (
    <>
      <Cards
        cardTextTop='Asset'
        cardTextBottom='Tracking System'
        cardSvg={Asset}
        cardColor='#62ceff'
      />
      <Cards
        cardTextTop='Workforce'
        cardTextBottom='Management System'
        cardSvg={Workforce}
        cardColor='#5f73ff'
      />
      <Cards
        cardTextTop='Delivery'
        cardTextBottom='Management System'
        cardSvg={Delivery}
        cardColor='#31bfaa'
      />
      <Cards
        cardTextTop='Visitor'
        cardTextBottom='Management System'
        cardSvg={Visitor}
        cardColor='#f27315'
      />
    </>
  );
};

export default Home;
