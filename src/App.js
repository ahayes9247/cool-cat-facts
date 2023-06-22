import BrandNavbar from "./Navbar.js";
import React, { useState, useEffect } from 'react';
import './App.css';

export default function App() {
  // GETs a fact from the Cat Fact API.
  const [data, setData] = useState([]);
  useEffect(() => {
     fetch('https://catfact.ninja/fact')
        .then((response) => response.json())
        .then((data) => {
           console.log(data);
           setData(data);
        })
        .catch((err) => {
           console.log(err.message);
        });
  }, []);

  // Displays a cat fact when the user clicks a button.
  const handleClick = () => {

  // Assigns a fact from the API to a variable.
  const fetchFact = data.fact;
  // Assigns elements with the ID 'para' to the variable fetchElement.
  const fetchElement = document.getElementById('para');

  // Styles the cat facts container when the button is clicked.
  fetchElement.style.padding = '5%';
  fetchElement.style.margin = '20% 0% 0% 13%';
  fetchElement.style.textAlign = 'justify';
  fetchElement.style.width = '100%';
  fetchElement.style.maxWidth = '80%';
  fetchElement.style.backgroundColor = '#000';
  fetchElement.style.color = '#fff'; 
  fetchElement.style.borderRadius = '25px';
  fetchElement.style.border = 'dotted 1px #000';
  fetchElement.style.fontSize = '24px';
  fetchElement.style.fontWeight = 'bold';

  // Passes the cat fact to elements with the ID 'para'.
  fetchElement.innerHTML = fetchFact;
  }

  // Displays a random cat picture when the user clicks a button.
  const handleImage = () => {
  // Selects elements with the ID 'random-cat-pic'.
    const fetchImage = document.getElementById('random-cat-pic');
  // Assigns the API URL to the image's source.
    fetchImage.src = 'https://cataas.com/cat';
    fetchImage.style.width = '400px';
    fetchImage.style.height = '420px';
  }

  return (
    <main>
      <BrandNavbar />

      <div id="cat-fact-wrapper" className="container text-center">
        <div id="cat-fact-row" className="row">
          <div id="cat-fact-col-1" className="col">
            <h1>Did You Know?</h1>

            <p>
              Click the button below to get a super cool cat fact!
            </p>

            <div className="row" id="cat-fact-button-row">
                <div className="col" id="fact-button-col">
                  <button id="cat-fact-button" type="button" className="btn btn-dark" onClick={handleClick}>
                  Get a Cat Fact
                  </button>
                </div>
                <div className="col" id="picture-button-col">
                  <button id="cat-picture-button" type="button" className="btn btn-light" onClick={handleImage}>
                    Get New Cat Picture
                  </button>
                </div>

              <div id="cat-fact-text" className="row">
                <p id="para"></p>
              </div>

            </div>
          </div>

          <div id="cat-fact-col-2" className="col">
            <img id="random-cat-pic" src="" />
          </div>
        </div>
      </div>
    </main>
  );
}