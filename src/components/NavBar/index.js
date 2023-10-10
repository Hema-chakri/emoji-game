// Write your code here.
import './index.css'

const NavBar = props => {
  const {score, topScore} = props
  return (
    <div className="navbar-container">
      <div className="logo">
        <img
          className="logo-image"
          src="https://assets.ccbp.in/frontend/react-js/game-logo-img.png"
          alt="emoji logo"
        />
        <h1 className="logo-heading">Emoji Game</h1>
      </div>
      <div className="scores-container">
        <p className="scores">Score: {score}</p>
        <p className="scores">Top score: {topScore}</p>
      </div>
    </div>
  )
}

export default NavBar
