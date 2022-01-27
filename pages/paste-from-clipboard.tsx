/* eslint-disable import/no-unresolved */
/* eslint-disable import/extensions */
import React, { Component } from 'react'
import PasteContainer from '@/components/PasteContainer'
import Nav from '@/components/Nav'

const Sorry = ({ error, onClose }) => (
  <div>
    <h3>
      {error}
      <button type="button" onClose={onClose}>
        &times;
      </button>
    </h3>
  </div>
)

class pasteContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      errorState: '',
    }
  }

  render() {
    const { errorState } = this.state

    return (
      <div className="container home-div">
        <h1>Paste from Clipboard with Classes - No Dropzone</h1>
        <p>
          Does not use react-dropzone. Paste image from clipboard. Can select
          group of images. Uses React Classes.
        </p>
        <Nav />
        <PasteContainer
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
