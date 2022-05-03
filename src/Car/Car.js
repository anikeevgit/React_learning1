import './Car.css'
const Car = (props) => {
  return (
    <div className='Car'>
      <h3>Car name: {props.name}</h3>
      <p>
        Year: <strong>{props.year}</strong>
      </p>
      <input
        type='text'
        onChange={props.onChangeName}
        value={props.name}
      ></input>
      <button onClick={props.onDelete}>Delete</button>
    </div>
  )
}

export default Car
