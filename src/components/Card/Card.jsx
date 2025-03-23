import './Card.css'

export default function Card({ id, image, title, description, buttonClass }) {
  return (
    <article className={`card card--${id}`}>
      <img className="card__title" src={image} alt={`${title} icon`} />
      <h2 className="card__title">{title}</h2>
      <p className="card__description">{description}</p>
      <button className={`card__button ${buttonClass}`}>Learn More</button>
    </article>
  );
}
