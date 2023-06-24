import FactButton from './FactButton.js';
import ImageButton from './ImageButton.js';
import isLoading from './FactButton.js';
import err from './FactButton.js';

function CatFactCard() {
    return(
        <div className="card" style={{width: '23rem', backgroundColor: '#fff'}}>
        <img className="card-img-top" id="random-cat-pic" src="https://cataas.com/cat" alt="Click the image icon for a cat!" />
            <div className="card-body">
                <h5 className="card-title">Did You Know?</h5>
                
                {/* Contains the text of a cat fact. */}
                <p id="para" className="card-text">
                  {isLoading && 'Click an icon to get a fact or a picture...'}
                  {err && <h2>{err}</h2>}
                </p>

                {/* Displays a cat fact in the element with the ID 'para' onClick. */}
                  <FactButton />

                {/* Displays a cat picture in the element with the ID 'random-cat-pic' onClick. */}
                <ImageButton />
            </div>
        </div>
    );
};

export default CatFactCard;