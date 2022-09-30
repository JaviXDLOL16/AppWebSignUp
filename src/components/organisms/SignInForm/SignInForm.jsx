
import './signinform.css'
import Title from '../../atoms/Title/Title'
import Radio from '../../atoms/Radio/Radio'
import Label from '../../molecules/label/Label'
import Date from '../../atoms/date/Date'
import Input from '../../atoms/Input/Input'


function SignInForm() {
  return (
    <div className="form-container">
      <div className='body'>
        <div className='head'>
          <Title level={"h1"} text={"Register"} />
        </div>
        <form action="" id='form'>
          <div className='container-left'>
            <Title level={"h3"} text={"Name(s)"} />
            <Label type={"text"} id={"name"} placeholder={"Name"} />
            <Title level={"h3"} text={"Birthday"} />
            <Date type={"date"} id={"date"} placeholder={"Date"} />
            <Title level={"h3"} text={"Enter your email"} />
            <Label type={"email"} id={"email"} placeholder={"Example@gmail.com"} />
            <Title level={"h3"} text={"Password"} />
            <Label type={"password"} id={"Password"} placeholder={"password"} />
          </div>



          <div className='container-right'>
            <Title level={"h3"} text={"Last name(s)"} />
            <Label type={"text"} id={"lastname"} placeholder={"Last name"} />
            <Title level={"h3"} text={"Gender"} />

            <div className='content-radio'>
              <p className='p'>Female</p>
              <Radio id={"female"} name={"gender"} value={"female"} />
              <p className='p'>Male</p>
              <Radio id={"male"} name={"gender"} value={"male"} />
              <p className='p'>Other</p>
              <Radio id={"other"} name={"gender"} value={"other"} />
            </div>
            <Title level={"h3"} text={"Enter your age"} />
            <Label type={"number"} id={"lastname"} placeholder={"how old are you?"} />

          </div>

        </form>
        <div className='container-input'>
          <Input id="button" type={"submit"} value={"Send"} />
          <Title level={"h3"} text={"I am not a robot"} />
          <Label type={"checkbox"} id={"userName"} placeholder={"Write a username"} />
        </div>
      </div>
    </div>
  )
}

export default SignInForm