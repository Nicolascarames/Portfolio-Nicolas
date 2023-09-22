import './form.css'
import { useRef, useState } from 'react'
import emailjs from 'emailjs-com'

export const Form = () => {
  const form = useRef()
  const [nombre, setNombre] = useState()
  const [email, setEmail] = useState()
  const [text, setText] = useState()

  const sendEmail = e => {
    e.preventDefault()

    emailjs.sendForm('service_04hqz4j', 'template_xo4j1zo', form.current, 'E1tmZ1daF97zo7GiL').then(
      result => {
        setNombre('')
        setEmail('')
        setText('')
        console.log(result.text)
        alert('Email send, thanks!!')
      },
      error => {
        console.log(error.text)
      }
    )
  }

  return (
    <form className="form" ref={form} onSubmit={sendEmail}>
      <label>Send me an email:</label>
      <input value={nombre} placeholder="Name" type="text" name="user_name" />

      <input value={email} placeholder="Email" type="email" name="user_email" />

      <textarea value={text} placeholder="Message" name="message" />
      <input type="submit" value="Send" />
    </form>
  )
}
