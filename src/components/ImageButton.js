import React, { useState, useEffect } from 'react';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faImage } from '@fortawesome/free-regular-svg-icons';

library.add(fab, faImage);

export default function ImageButton() {
    const [imageData, setImageData] = useState({imageData: []});
    const [imageIsLoading, setImageIsLoading] = useState(false);
    const [imageErr, setImageErr] = useState('');
  
    const handleImage = async () => {
      setImageIsLoading(true);
 
      try {
        const response = await fetch('https://cataas.com/cat', {
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
  
        setImageData(result);
      } catch (err) {
        setImageErr(err.message);
      } finally {
        setImageIsLoading(false);
      }

    // Selects elements with the ID 'random-cat-pic'.
    const fetchImage = document.getElementById('random-cat-pic');
    // Assigns the API URL to the image's source.
    fetchImage.src = 'https://cataas.com/cat';
    fetchImage.style.width = '100%';
    fetchImage.style.height = '300px';
    fetchImage.style.maxHeight = '400px';
    }

    return(
        <button id="cat-pic-button" className="btn-icon" type="button" onClick={handleImage} title="Get a New Cat Picture">
            <FontAwesomeIcon className="icon-button" icon="fa-regular fa-image" />
        </button>
    );
};