import Works from "./Works";
import "./work.css";

export default function Work() {
  return (
    <section className="work section" id="portfolio">
      <h2 className="section__title">Portfolio</h2>
      <span className="section__subtitle">Most recent works</span>

      <Works />
    </section>
  );
}
