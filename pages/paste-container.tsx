/* eslint-disable import/no-unresolved */
/* eslint-disable import/extensions */
import React, { Component } from 'react'
// import { render } from 'react-dom'
import PasteContainer from '@/components/PasteContainer'

const styles = {
  fontFamily: 'sans-serif',
  textAlign: 'center',
  maxWidth: 528,
  margin: `1rem auto`,
}

const Sorry = ({ error, onClose }) => (
  <div>
    <h3>
      {error}{' '}
      <button type="button" onClose={onClose}>
        &times;
      </button>
    </h3>
  </div>
)

const Instructions = () => (
  <h1>Copy an image from your file system and paste it here</h1>
)

class pasteContainer extends Component {
  state = {
    errorState: '',
  }

  render() {
    const { errorState } = this.state

    return (
      <div style={styles}>
        <Instructions />
        <PasteContainer
          onPaste={(files) => console.log(files)}
          errorHandler={(err) => this.setState({ errorState: err })}
        >
          {(images) =>
            images.length > 0 &&
            images.map((image) => (
              <img src={image} key={image} alt={`Pasted: ${image}`} />
            ))
          }
        </PasteContainer>
        {errorState.length > 0 && (
          <Sorry
            error={errorState}
            onClose={() => this.setState({ errorState: '' })}
          />
        )}
      </div>
    )
  }
}

export default pasteContainer

// render(<App />, document.getElementById('root'))
