import './index.css'

const TabItems = props => {
  const {tabItem, changeCategory, isActive} = props
  const {displayText, tabId} = tabItem
  const onClickTabItem = () => {
    changeCategory(tabId)
  }
  const activeIdClassName = isActive ? 'active-tab' : ''

  return (
    <li className="display-text">
      <button
        onClick={onClickTabItem}
        className={`tab-button ${activeIdClassName}`}
        type="button"
      >
        {displayText}
      </button>
    </li>
  )
}

export default TabItems
