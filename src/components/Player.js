// src/components/Player.js

import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import PlusOneButton from './PlusOneButton'
import './Player.css'
import { connect } from 'react-redux'
import  update  from '../actions/players'
// import { connect } from 'react-redux'
// import addToScore from '../actions/players'

export const playerShape = PropTypes.shape({
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  score: PropTypes.number.isRequired
})

class Player extends PureComponent {
  static propTypes = {
    ...playerShape.isRequired,
    onChange: PropTypes.func.isRequired
  }

  increasePlayerScore = () => {
    const { id } = this.props
    this.props.update(id)
    // onChange(id, { score: score + 1 })
  }

  render() {
    const { name, score } = this.props

    return (
      <li className="Player">
        <p className="name">{name}</p>
        <p className="score">{score}</p>
        <PlusOneButton onClick={this.increasePlayerScore} />
      </li>
    )
  }
}
const mapDispatchToProps = { update }

export default connect(null, mapDispatchToProps)(Player)
