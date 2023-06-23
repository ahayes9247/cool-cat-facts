import React, { useState, useEffect } from 'react';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faImage, faClipboard } from '@fortawesome/free-regular-svg-icons';

library.add(fab, faImage, faClipboard);

function CatFactCard() {
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
  // Passes the cat fact to elements with the ID 'para'.
  fetchElement.innerHTML = fetchFact;
  }

  // Displays a random cat picture when the user clicks a button.
  const handleImage = () => {
    // Selects elements with the ID 'random-cat-pic'.
      const fetchImage = document.getElementById('random-cat-pic');
    // Assigns the API URL to the image's source.
      fetchImage.src = 'https://cataas.com/cat';
      fetchImage.style.width = '100%';
      fetchImage.style.height = '200px';
      fetchImage.style.maxHeight = '300px';
    }

    return(
        <div className="card" style={{width: '23rem', backgroundColor: '#fff'}}>
        <img className="card-img-top" id="random-cat-pic" src="..." alt="Click the image icon for a cat!" style={{maxHeight: '200px', height: '200px', backgroundImage: 'url(https://placehold.co/200)', backgroundRepeat: 'no-repeat', backgroundSize: 'cover', border: '0px'}} />
            <div className="card-body">
                <h5 className="card-title">Did You Know?</h5>
                
                <p className="card-text" id="para">Click the icons below to get a fact or a picture!</p>

                <button class="btn-icon" onClick={handleClick}>
                    <FontAwesomeIcon icon="fa-regular fa-clipboard" />
                </button>
                <button class="btn-icon" onClick={handleImage}>
                    <FontAwesomeIcon icon="fa-regular fa-image" />
                </button>
            </div>
        </div>
    );
};

export default CatFactCard;