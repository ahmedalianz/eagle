import React from "react";
import Fade from "react-reveal/Fade";

import service1 from "../../../Resources/img/service1.jpg";
import service2 from "../../../Resources/img/service2.jpg";
import service3 from "../../../Resources/img/service3.jpg";
import service4 from "../../../Resources/img/service4.jpg";
import service5 from "../../../Resources/img/service5.jpg";
import service6 from "../../../Resources/img/service6.jpg";

import Card from "../Card/Card";

import "./service.scss";

const Service = () => {
  return (
    <section className="service">
      <div>
        <Fade delay={500}>
          <h1 className="service__title">Our Service</h1>
        </Fade>
        <div className="service__container">
          <Card imgSrc={service1} cardName="Residential Design">
            <p>
              Interior design and layout for kitchens, apartments, offce
              buildings, etc.
            </p>
          </Card>

          <Card imgSrc={service2} cardName="Architectural Design">
            <p>
              Complete Architecture design services starting from, Concept deigh
              up to final IFC Package with perfect 3D Modeling and Animation
            </p>
          </Card>

          <Card
            imgSrc={service3}
            cardName="BIM Solutions
"
          >
            <p>
              Complete BIM services from LOD 100 up to LOD 500 with all Details
              and Blowup details, 4D, SD, 6D, 7D – We using CAD, Revit,
              Navisworks, Archicad, Tekla, et.
            </p>
          </Card>

          <Card imgSrc={service4} cardName="Industrial Design">
            <p>
              Lorem ipsum dolor amet tumeric skateboard cornhole +1, neutra
              kinfolk pug squid copper mug succulents. Gochujang celiac coloring
              book, you probably haven't heard of them farm-to-table fanny pack
              live-edge mixtape unicorn. Meditation vape seitan scenester
              mumblecore. Truffaut etsy keytar crucifix.
            </p>
          </Card>

          <Card imgSrc={service5} cardName="Hospitality Design">
            <p>
              Lorem ipsum dolor amet tumeric skateboard cornhole +1, neutra
              kinfolk pug squid copper mug succulents. Gochujang celiac coloring
              book, you probably haven't heard of them farm-to-table fanny pack
              live-edge mixtape unicorn. Meditation vape seitan scenester
              mumblecore. Truffaut etsy keytar crucifix.
            </p>
          </Card>

          <Card imgSrc={service6} cardName="Corporate Design">
            <p>
              Lorem ipsum dolor amet tumeric skateboard cornhole +1, neutra
              kinfolk pug squid copper mug succulents. Gochujang celiac coloring
              book, you probably haven't heard of them farm-to-table fanny pack
              live-edge mixtape unicorn. Meditation vape seitan scenester
              mumblecore. Truffaut etsy keytar crucifix.
            </p>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Service;
