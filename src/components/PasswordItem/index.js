import './index.css'

const PasswordItem = props => {
  const {userDetails, deleteUser, checkboxActive} = props
  const {website, id, username, password} = userDetails

  console.log(checkboxActive)

  const onDeleteUser = () => {
    deleteUser(id)
  }
  return (
    <li>
      <div className="text-and-delete">
        <div className="password-item">
          <div>
            <p className="caption-item">{website[0].toUpperCase()}</p>
          </div>
          <div className="password-item-text">
            <p>{website}</p>
            <p>{username}</p>
            {checkboxActive ? (
              <p>{password}</p>
            ) : (
              <img
                src="https://assets.ccbp.in/frontend/react-js/password-manager-stars-img.png"
                alt="stars"
                className="stars-img"
              />
            )}
          </div>
        </div>

        <button
          data-testid="delete"
          className="delete-button"
          onClick={onDeleteUser}
          type="button"
        >
          <img
            src="https://assets.ccbp.in/frontend/react-js/password-manager-delete-img.png"
            alt="delete"
            className="delete-button"
          />
        </button>
      </div>
    </li>
  )
}

export default PasswordItem
