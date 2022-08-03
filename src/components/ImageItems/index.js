import './index.css'

const ImageItems = props => {
  const {imageItem, getActiveImage} = props
  const {thumbnailUrl, id} = imageItem
  const onClickImage = () => {
    getActiveImage(id)
  }

  return (
    <li>
      <button onClick={onClickImage} type="button" className="image-button">
        <img className="thumbnail-images" alt="thumbnail" src={thumbnailUrl} />
      </button>
    </li>
  )
}

export default ImageItems
