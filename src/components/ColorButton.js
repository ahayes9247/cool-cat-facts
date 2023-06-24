import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaintRoller } from '@fortawesome/free-solid-svg-icons';
import '../App.css';

library.add(fab, faPaintRoller);

function ColorButton() {
    const changeColor = () => {
        const fetchElement = document.getElementById('para');
        fetchElement.classList.add('highlight-me');
    }

    return (
        <button id="text-color-button" className="btn-icon" type="button" onClick={changeColor}>
            <FontAwesomeIcon icon="fa-solid fa-paint-roller" />
        </button>
    );
}

export default ColorButton;