import "./App.css";
import Header from "./components/header/Header";
import Home from "./components/home/Home";

export default function App() {
  return (
    <>
      <Header />
      <main className="main">
        <Home />
      </main>
    </>
  );
}
