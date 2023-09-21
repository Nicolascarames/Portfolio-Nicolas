import { useState } from 'react'
import './cards.css'
import bombilla from '../../img/bombilla.png'
import emoji from '../../img/emoji.png'
import api from '../../img/api.png'
import banana from '../../img/banana1.png'

export const Cards = () => {
  const [vuelta1, setVuelta1] = useState(true)
  const [vuelta2, setVuelta2] = useState(true)
  const [vuelta3, setVuelta3] = useState(true)
  const [vuelta4, setVuelta4] = useState(true)

  return (
    <div className="boxesContainer">
      <div className="cardBox" onClick={() => setVuelta3(!vuelta3)}>
        <div className={vuelta3 ? 'card' : 'card flip'}>
          <div className="front">
            <img src={api} alt="apiNode" style={{ width: '80%' }} />
            <p style={{ color: '#00a013', fontWeight: 'bold' }}>API basic in server</p>
            <strong>Flip</strong>
          </div>
          <div className="back">
            <h4>API with NodeJS</h4>
            <p>Can make the calls you want to save users, comments, or photos</p>
            <a href="#">Visit web</a>
          </div>
        </div>
      </div>

      <div className="cardBox" onClick={() => setVuelta1(!vuelta1)}>
        <div className={vuelta1 ? 'card' : 'card flip'}>
          <div className="front">
            <img src={bombilla} alt="logo" style={{ width: '80%' }} />
            <strong>Flip</strong>
          </div>
          <div className="back">
            <h4>Forum on technological questions</h4>
            <p>Front with React and CSS, where you can resolve your doubts</p>
            <a href="#">Visit web</a>
          </div>
        </div>
      </div>

      <div className="cardBox" onClick={() => setVuelta2(!vuelta2)}>
        <div className={vuelta2 ? 'card' : 'card flip'}>
          <div className="front">
            <img src={emoji} alt="emoji" style={{ width: '40%' }} />
            <p style={{ fontFamily: 'nabla' }}>Em😁ji Card Game</p>
            <strong>Flip</strong>
          </div>
          <div className="back">
            <h4>Exercise your mind</h4>
            <p>Mythical couples game to develop your mind, with pure JS</p>
            <a href="#">Visit web</a>
          </div>
        </div>
      </div>

      <div className="cardBox" onClick={() => setVuelta4(!vuelta4)}>
        <div className={vuelta4 ? 'card' : 'card flip'}>
          <div className="front">
            <img src={banana} alt="banana" style={{ width: '50%' }} />
            <p style={{ color: 'orangered', fontWeight: 'bold' }}>Banana web</p>
            <strong>Flip</strong>
          </div>
          <div className="back">
            <h4>Social network, Banana</h4>
            <p>Share your life on this private social network</p>
            <a href="#">Visit web</a>
          </div>
        </div>
      </div>
    </div>
  )
}
