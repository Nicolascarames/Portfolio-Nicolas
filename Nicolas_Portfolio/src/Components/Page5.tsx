import './page5.css'
import linkedinAlien from '../../img/linkedinAlien.png'
import github from '../../img/github (1).png'
import { Form } from './FormSend'

export const Page5 = () => {
  return (
    <section className="page5">
      <h2>Contact, links</h2>
      <Form />
      <nav>
        <a
          href="https://github.com/Nicolascarames"
          target="_blank"
          style={{ width: '30%', height: '30%', maxWidth: '200px' }}>
          <img src={github} alt="github" style={{ width: '100%', height: '100%' }} />
        </a>
        <a
          href="https://www.linkedin.com/in/nicolas-carames-garcia/"
          target="_blank"
          style={{ width: '30%', height: '30%', maxWidth: '200px' }}>
          <img src={linkedinAlien} alt="linkedin" style={{ width: '100%', height: '100%' }} />
        </a>
      </nav>
    </section>
  )
}
