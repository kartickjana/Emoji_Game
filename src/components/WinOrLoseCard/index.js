// Write your code here.
import './index.css'

const LOSE_IMAGE = 'https://assets.ccbp.in/frontend/react-js/lose-game-img.png'
const WON_IMAGE = 'https://assets.ccbp.in/frontend/react-js/won-game-img.png'

const WinOrLoseCard = props => {
  const {isWon, onClickPlayAgain, score} = props
  const imageUrl = isWon ? WON_IMAGE : LOSE_IMAGE
  const gameStatus = isWon ? 'You Won' : 'You Lose'
  const scoreLabel = isWon ? 'Best Score' : 'Score'

  return (
    <div className="winOrLoseCard">
      <div className="detailsSection">
        <h1 className="gameStatus">{gameStatus}</h1>
        <p className="currentScoreLabel">{scoreLabel}</p>
        <p className="currentScoreValue">{score}/12</p>
        <button
          type="button"
          className="playAgainButton"
          onClick={onClickPlayAgain}
        >
          Play Again
        </button>
      </div>
      <div className="imageSection">
        <img className="winOrLoseImage" src={imageUrl} alt="win or lose" />
      </div>
    </div>
  )
}

export default WinOrLoseCard
