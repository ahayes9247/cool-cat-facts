import BrandNavbar from "./Navbar.js";
import './App.css';
import CatFactCard from "./CatFactCard.js";

export default function App() {
  return (
    <main>
      <BrandNavbar />

      <div id="cat-fact-wrapper" className="container text-center">
        <div id="cat-fact-row" className="row">
          <center>
            <div>
              <CatFactCard />
            </div>
            </center>
        </div>
      </div>
    </main>
  );
}