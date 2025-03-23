import './MainContainer.css'

import Card from "../Card/Card";

export default function MainContainer() {
  return (
    <section className="main-container">
      <Card
        id="sedans"
        image="/images/icon-sedans.svg"
        title="Sedans"
        description="Choose a sedan for its affordability and excellent fuel economy. Ideal for cruising in the city or on your next road trip."
        buttonClass="card__button--sedans"
      />
      <Card
        id="suvs"
        image="/images/icon-suvs.svg"
        title="SUVs"
        description="Take an SUV for its spacious interior, power, and versatility. Perfect for your next family vacation and off-road adventures."
        buttonClass="card__button--suvs"
      />
      <Card
        id="luxury"
        image="/images/icon-luxury.svg"
        title="Luxury"
        description="Cruise in the best car brands without the bloated prices. Enjoy the enhanced comfort of a luxury rental and arrive in style."
        buttonClass="card__button--luxury"
      />
    </section>
  );
}
