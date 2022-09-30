import './radio.css'

function Radio({text, id, name, value}) {
  return (
    <div className='radio'>
      <input type="radio" id={id} name={name} value={value}/>
      <label for={value}>{text}</label>
    </div>
  )
}

export default Radio