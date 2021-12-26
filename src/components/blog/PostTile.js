import './PostTile.css'
import Tags from './Tags';
function PostTile(props) {
  const imageStyle = {
    backgroundImage: `url(${props.imageUrl})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    height: '150px',
    width: '250px',
    marginTop: '10px',
    borderRadius: '20px'

  }
  return (
    <div className="postTile">
      <div style={imageStyle}></div>
      <div className='postDate'>
        <p>{props.date}</p>
        </div>
      <h3>{props.title}</h3>
      <p>{props.excerpt}</p>
      <Tags tags={props.tags}/>
    </div>
  )
}

export default PostTile;