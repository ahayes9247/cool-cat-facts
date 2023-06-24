import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenToSquare } from '@fortawesome/free-regular-svg-icons';
import React, { useState, useEffect } from 'react';

library.add(fab, faPenToSquare);

function FactButton() {
    const [data, setData] = useState({data: []});
    const [isLoading, setIsLoading] = useState(false);
    const [err, setErr] = useState('');
  
    const handleClick = async () => {
      setIsLoading(true);
  
      try {
        const response = await fetch('https://catfact.ninja/fact', {
          method: 'GET',
          headers: {
            Accept: 'application/json',
          },
        });
  
        if (!response.ok) {
          throw new Error(`Error! status: ${response.status}`);
        }
  
        const result = await response.json();
  
        console.log('result is: ', JSON.stringify(result, null, 4));
  
        setData(result);
      } catch (err) {
        setErr(err.message);
      } finally {
        setIsLoading(false);
      }

    // Assigns elements with the ID 'para' to the variable fetchElement.
    const fetchElement = document.getElementById('para');

    // Assigns a fact from the API to a variable.
    const fetchFact = data.fact;

    // Passes the cat fact to elements with the ID 'para'.
    fetchElement.innerHTML = fetchFact;
    };

    return(
        <button id="cat-fact-button" className="btn-icon" type="button" onClick={handleClick}>
            <FontAwesomeIcon className="icon-button" icon="fa-regular fa-pen-to-square" />
        </button>
    );
};

export default FactButton;