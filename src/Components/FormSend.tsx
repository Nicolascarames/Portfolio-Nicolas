import './form.css'
import { createRef } from 'react'
import emailjs from 'emailjs-com'

export const Form = () => {
  // const [nombre, setNombre] = useState('')
  // const [email, setEmail] = useState('')
  // const [text, setText] = useState('')
  const form = createRef<HTMLFormElement>()

  const sendEmail = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    await emailjs.sendForm('service_04hqz4j', 'template_xo4j1zo', e.currentTarget, 'E1tmZ1daF97zo7GiL').then(
      result => {
        // setNombre('')
        // setEmail('')
        // setText('')
        if (form.current) {
          form.current.reset()
        }
        console.log(result.text)
        alert('Email send, thanks!!')
      },
      error => {
        console.log(error.text)
      }
    )
  }

  return (
    <form ref={form} className="form" onSubmit={sendEmail}>
      <label>Send me an email:</label>
      <input placeholder="Name" type="text" name="user_name" required />

      <input placeholder="Email" type="email" name="user_email" required />

      <textarea placeholder="Message" name="message" required />
      <input type="submit" value="Send" />
    </form>
  )
}
