import React from 'react'
import _ from 'lodash'
import { GithubCounter, GithubSelector } from 'react-reactions'


export class GithubReaction extends React.Component {
  state = {
    counters: [{
      emoji: '👍',
      by: 'Mylen',
    }, {
      emoji: '👍',
      by: 'Shawn',
    },{
      emoji: '👎',
      by: 'VanMitG',
    },{
      emoji: '🎉',
      by: 'ThienHoang',
      },{
      emoji:'😕',
      by: 'Mai',
      },{
      emoji: '❤️',
      by: 'Amber',
    }],
    user: 'Mors',
    showSelector: false,
  }

  handleAdd = () => this.setState({ showSelector: true })

  handleSelect = (emoji) => {
    const index = _.findIndex(this.state.counters, { emoji, by: this.state.user })
    if (index > -1) {
      this.setState({
        counters: [...this.state.counters.slice(0, index), ...this.state.counters.slice(index + 1)],
        showSelector: false,
      })
    } else {
      this.setState({
        counters: [...this.state.counters, { emoji, by: this.state.user }],
        showSelector: false,
      })
    }
  }

  render() {
    return (
      <div style={{ position: 'relative' }}>
        <GithubCounter
          counters={ this.state.counters }
          user={ this.state.user }
          onAdd={ this.handleAdd }
          onSelect={ this.handleSelect }
        />

      { this.state.showSelector ? (
        <div style={{ position: 'absolute', bottom: '100%', marginBottom: '10px' }}>
          <GithubSelector onSelect={ this.handleSelect } />
        </div>
      ) : null }
      </div>
    )
  }
}

export default GithubReaction