import './date.css'

function Date({ type, value, placeholder = "" }) {
  return (
    <>
      <input className="date" type={type} value={value} placeholder={placeholder} required />
    </>
  )
}

export default Date