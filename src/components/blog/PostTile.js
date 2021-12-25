import './PostTile.css'
function PostTile(props) {
  console.log(props)
  const imageStyle = {
    backgroundImage: `url(${props.imageUrl})`,
    backgroundSize: 'contain',
    backgroundRepeat: 'no-repeat',
    height: '150px',
    width: '200px',
  }
  return (
    <div className="postTile">
      <div style={imageStyle}></div>
      <h3>{props.title}</h3>
      <p>{props.excerpt}</p>
    </div>
  )
}

export default PostTile;