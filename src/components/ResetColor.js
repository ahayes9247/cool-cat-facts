import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRotateRight } from '@fortawesome/free-solid-svg-icons';

library.add(fab, faRotateRight);

function ResetColor() {
    const resetColor = () => {
        const fetchElement = document.getElementById('para');
        fetchElement.classList.remove('highlight-me');
    }

    return(
        <button id="cat-fact-button" className="btn-icon" type="button" onClick={resetColor} title="Remove Text Highlighting">
            <FontAwesomeIcon className="icon-button" icon="fa-solid fa-rotate-right" />
        </button>
    );
}

export default ResetColor;