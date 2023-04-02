import {Component} from 'react'

import {v4} from 'uuid'

import PasswordItem from '../PasswordItem'

import './index.css'

class Home extends Component {
  state = {
    usersList: [],
    websiteInput: '',
    usernameInput: '',
    passwordInput: '',
    searchInput: '',
    checkboxActive: false,
  }

  onChangeSearchInput = event => {
    this.setState({searchInput: event.target.value})
  }

  deleteUser = id => {
    const {usersList} = this.state
    this.setState({
      usersList: usersList.filter(user => user.id !== id),
    })
  }

  isToggleCheckBox = () => {
    this.setState(prevState => ({
      checkboxActive: !prevState.checkboxActive,
    }))
  }

  onAddUserList = event => {
    event.preventDefault()
    const {websiteInput, usernameInput, passwordInput} = this.state
    const newUser = {
      id: v4(),
      website: websiteInput,
      username: usernameInput,
      password: passwordInput,
    }
    this.setState(prevState => ({
      usersList: [...prevState.usersList, newUser],
      websiteInput: '',
      usernameInput: '',
      passwordInput: '',
    }))
  }

  onChangeWebsite = event => {
    this.setState({websiteInput: event.target.value})
  }

  onChangeUsername = event => {
    this.setState({usernameInput: event.target.value})
  }

  onChangePassword = event => {
    this.setState({passwordInput: event.target.value})
  }

  render() {
    const {
      usersList,
      websiteInput,
      usernameInput,
      searchInput,
      passwordInput,
      checkboxActive,
    } = this.state

    const searchResults = usersList.filter(eachList =>
      eachList.website.toLowerCase().includes(searchInput.toLowerCase()),
    )

    const isLengthGreaterthenZero = searchResults.length > 0

    return (
      <div className="bg-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/password-manager-logo-img.png"
          alt="app logo"
          className="app-logo"
        />
        <div className="top-card-container">
          <div className="inputs-card-container">
            <h1 className="card-new-password">Add New Password</h1>
            <form className="form-container" onSubmit={this.onAddUserList}>
              <div className="website-img-input">
                <img
                  src="https://assets.ccbp.in/frontend/react-js/password-manager-website-img.png"
                  alt="website"
                  className="web-site-img"
                />
                <input
                  onChange={this.onChangeWebsite}
                  placeholder="Enter Website"
                  className="input-text"
                  type="text"
                  value={websiteInput}
                />
              </div>
              <div className="website-img-input">
                <img
                  src="https://assets.ccbp.in/frontend/react-js/password-manager-username-img.png"
                  alt="username"
                  className="web-site-img"
                />
                <input
                  className="input-text"
                  onChange={this.onChangeUsername}
                  placeholder="Enter Username"
                  type="text"
                  value={usernameInput}
                />
              </div>

              <div className="website-img-input">
                <img
                  src="https://assets.ccbp.in/frontend/react-js/password-manager-password-img.png"
                  alt="password"
                  className="web-site-img"
                />
                <input
                  onChange={this.onChangePassword}
                  className="input-text"
                  placeholder="Enter Password"
                  type="password"
                  value={passwordInput}
                />
              </div>
              <button className="add-button" type="submit">
                Add
              </button>
            </form>
          </div>
          <img
            src="https://assets.ccbp.in/frontend/react-js/password-manager-sm-img.png"
            alt="password manager"
            className="password-manager-img"
          />
        </div>
        <div className="bottom-card-container">
          <div className="passwords-and-search">
            <div className="text-and-count">
              <h1 className="your-passwords">Your Passwords</h1>
              <p className="count">{searchResults.length}</p>
            </div>
            <div className="search-img-and-input">
              <img
                src="https://assets.ccbp.in/frontend/react-js/password-manager-search-img.png"
                alt="search"
                className="search-logo"
              />
              <input
                className="search-input"
                onChange={this.onChangeSearchInput}
                type="search"
                placeholder="Search"
              />
            </div>
          </div>
          <hr />
          <div className="hr-and-check-pass">
            <div className="checkbox-and-password">
              <input
                id="checkbox"
                className="checkbox-input"
                type="checkbox"
                onChange={this.isToggleCheckBox}
                value={checkboxActive}
              />
              <label htmlFor="checkbox" className="show-password">
                Show passwords
              </label>
            </div>
          </div>
          {isLengthGreaterthenZero ? (
            <ul className="password-list-items">
              {searchResults.map(eachItem => (
                <PasswordItem
                  deleteUser={this.deleteUser}
                  key={eachItem.id}
                  userDetails={eachItem}
                  checkboxActive={checkboxActive}
                />
              ))}
            </ul>
          ) : (
            <div className="no-passwords-and-img">
              <img
                src="https://assets.ccbp.in/frontend/react-js/no-passwords-img.png"
                alt="no passwords"
                className="no-passwords-img"
              />
              <p className="no-passwords">No Passwords</p>
            </div>
          )}
        </div>
      </div>
    )
  }
}

export default Home
