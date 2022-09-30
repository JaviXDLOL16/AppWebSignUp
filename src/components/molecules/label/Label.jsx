import Input from '../../atoms/Input/Input'
import './label.css'

function Label({ text, type, placeholder }) {
  return (
    <label>
      {text}
      <Input type={type} placeholder={placeholder} />
    </label>
  )
}

export default Label