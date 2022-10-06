import {Component} from 'react'

import './index.css'

class EditableText extends Component {
  state = {
    inputText: '',
    isClicked: false,
  }

  onChangeSearchInput = event => {
    this.setState({inputText: event.target.value})
  }

  onClickSave = () => {
    this.setState({isClicked: true})
  }

  onEditButton = () => {
    this.setState({isClicked: false})
  }

  render() {
    const {inputText, isClicked} = this.state
    const buttonText = isClicked ? 'Edit' : 'Save'

    return (
      <div className="app-container">
        <div className="resp-container">
          <h1 className="edit">Editable Text Input</h1>
          <div className="edit-container">
            {isClicked ? (
              <p className="para">{inputText}</p>
            ) : (
              <input
                type="text"
                className="input"
                onChange={this.onChangeSearchInput}
                value={inputText}
              />
            )}

            {isClicked ? (
              <button
                type="button"
                onClick={this.onEditButton}
                className="button"
              >
                {buttonText}
              </button>
            ) : (
              <button
                type="button"
                onClick={this.onClickSave}
                className="button"
              >
                {buttonText}
              </button>
            )}
          </div>
        </div>
      </div>
    )
  }
}
export default EditableText
