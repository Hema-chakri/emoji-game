// Write your code here.
import './index.css'

const WinOrLoseCard = props => {
  const {score, gameStatus, gameText, resultUrl} = props

  return (
    <div className="score-details-container">
      <div className="score-details">
        <h1>{gameStatus}</h1>
        <p>{gameText}</p>
        <p>{score}/12</p>
        <button type="submit">Play Again</button>
      </div>
      <img src={resultUrl} alt="win or Lose" />
    </div>
  )
}

export default WinOrLoseCard
