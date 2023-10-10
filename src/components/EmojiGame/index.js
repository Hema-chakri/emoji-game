/* 
Quick Tip 

- Use the below function in the EmojiGame Component to shuffle the emojisList every time when an emoji is clicked.

const shuffledEmojisList = () => {
  const {emojisList} = this.props
  return emojisList.sort(() => Math.random() - 0.5)
}

*/

// Write your code here.
import {Component} from 'react'
import EmojiCard from '../EmojiCard'
import NavBar from '../NavBar'
import WinOrLoseCard from '../WinOrLoseCard'
import './index.css'

class EmojiGame extends Component {
  state = {
    score: 0,
    topScore: 0,
    clickedEmojisList: [],
    gameStatus: '',
    gameText: '',
    resultUrl: '',
  }

  finishGameAndSetTopScore = selectedEmojis => {
    const {emojisList} = this.props

    if (emojisList.length === selectedEmojis) {
      this.setState({gameStatus: 'You Won'})
      this.setState({gameText: 'Best Score'})
      this.setState({
        resultUrl: 'https://assets.ccbp.in/frontend/react-js/won-game-img.png',
      })
    } else {
      this.setState({gameStatus: 'You Lose'})
      this.setState({gameText: 'Score'})
      this.setState({
        resultUrl: 'https://assets.ccbp.in/frontend/react-js/lose-game-img.png',
      })
    }
  }

  clickEmoji = id => {
    const {emojisList} = this.props
    const {clickedEmojisList} = this.state
    emojisList.sort(() => Math.random() - 0.5)
    const isEmojiPresent = clickedEmojisList.includes(id)
    const clickedEmojisLength = clickedEmojisList.length
    if (isEmojiPresent) {
      this.finishGameAndSetTopScore(clickedEmojisLength)
    } else {
      if (emojisList.length - 1 === clickedEmojisLength) {
        this.finishGameAndSetTopScore(emojisList.length)
      }
      this.setState(prevState => ({
        clickedEmojisList: [...prevState.clickedEmojisList, id],
      }))
      this.setState(prevState => ({
        score: prevState.score + 1,
      }))
    }

    return emojisList
  }

  render() {
    const {emojisList} = this.props
    const {score, topScore, gameStatus, gameText, resultUrl} = this.state

    return (
      <div className="app-container">
        <NavBar score={score} topScore={topScore} />
        <ul className="emojis-container">
          {emojisList.map(eachEmoji => (
            <EmojiCard
              key={eachEmoji.id}
              emojiDetails={eachEmoji}
              clickEmoji={this.clickEmoji}
            />
          ))}
        </ul>
        <WinOrLoseCard
          score={score}
          gameStatus={gameStatus}
          gameText={gameText}
          resultUrl={resultUrl}
          topScore={topScore}
          finishGameAndSetTopScore={this.finishGameAndSetTopScore}
        />
      </div>
    )
  }
}

export default EmojiGame
