// Write your code here.
import './index.css'

const EmojiCard = props => {
  const {emojiDetails, clickEmoji} = props
  const {id, emojiName, emojiUrl} = emojiDetails

  const onGetScore = () => {
    clickEmoji(id)
  }
  return (
    <div>
      <li className="emoji-item">
        <button type="submit" className="button-style">
          <img
            src={emojiUrl}
            alt={emojiName}
            className="emoji-image"
            onClick={onGetScore}
          />
        </button>
      </li>
    </div>
  )
}

export default EmojiCard
