import './Tags.css'

function Tags(props) {
  const tagValues = () => {
    return props.tags.map((tag) => {
      return <p key={tag}>{tag}</p>
    })
  }

  return (
    <div className="tags">
      {tagValues()}
    </div>
  )
}

export default Tags;