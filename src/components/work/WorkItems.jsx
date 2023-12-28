export default function WorkItems({ item }) {
  return (
    <div className="work__card" key={item.id}>
      <img src={item.image} alt="" className="work__img" />
      <h3 className="work__title">{item.title}</h3>
      <a
        href="https://chatez-app.vercel.app/"
        className="work__button"
        target="_blank"
        rel="noreferrer"
      >
        Live <i className="bx bx-right-arrow-alt work__button-icon"></i>
      </a>
    </div>
  );
}
