import "../styles/banner.scss";

function Banner({ image, text }) {
  return (
    <section
      className="banner"
      style={{ backgroundImage: `url(${image})` }}
    >
      <div className="banner__overlay" />
      {text && <h1 className="banner__text">{text}</h1>}
    </section>
  );
}

export default Banner;
