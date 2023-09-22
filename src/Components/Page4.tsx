import { useEffect, useState } from 'react'
import './page4.css'
import titulohack from '../../img/titulo_hackaboss.png'

export const Page4 = () => {
  const [open1, setOpen1] = useState(false)
  const [open2, setOpen2] = useState(false)
  const [open3, setOpen3] = useState(false)

  const [setSet, setSetSet] = useState('abierto0')
  useEffect(() => {
    if (open1) {
      setSetSet('abierto1')
    } else if (open2) {
      setSetSet('abierto2')
    } else if (open3) {
      setSetSet('abierto3')
    } else {
      setSetSet('abierto0')
    }
  }, [open1, open2, open3])

  const handleOpen1 = () => {
    setOpen1(!open1)
    if (open2) setOpen2(!open2)
    if (open3) setOpen3(!open3)
  }
  const handleOpen2 = () => {
    setOpen2(!open2)
    if (open1) setOpen1(!open1)
    if (open3) setOpen3(!open3)
  }
  const handleOpen3 = () => {
    setOpen3(!open3)
    if (open1) setOpen1(!open1)
    if (open2) setOpen2(!open2)
  }

  return (
    <section className={`page4 ${setSet}`}>
      <h2 className="carT">Formation and studies</h2>

      <article onClick={handleOpen1} className={open1 ? 'car1 abierto' : 'car1 cerrado'}>
        <h4 style={{ color: '#00a013' }}>Technician in microcomputer systems and networks</h4>
        {!open1 && <span>Flip</span>}
        {open1 && (
          <div className="open1">
            <p>School: Liceo la paz</p>
            <p>Grade fp</p>
            <p>
              Subjects: computer security, web programming, command console, operating systems, hardware and software
            </p>
            {open1 && <span>Flip</span>}
          </div>
        )}
      </article>

      <article onClick={handleOpen2} className={open2 ? 'car2 abierto' : 'car2 cerrado'}>
        <h4 style={{ color: '#ffd500' }}>Full stack web developer</h4>
        {!open2 && <span>Flip</span>}
        {open2 && (
          <div className="open2">
            <p>School: Hack a Boss</p>
            <img src={titulohack} alt="diploma" style={{ width: '100%' }} />
            <p>
              React, JS, Node, SQL. API creation (express, with tests in postman) database development (workbench and
              console) front-end design (pure JS, DOM and react). Also many NPM libraries.
            </p>
            {open2 && <span>Flip</span>}
          </div>
        )}
      </article>

      <article onClick={handleOpen3} className={open3 ? 'car3 abierto' : 'car3 cerrado'}>
        <h4 style={{ color: '#00b9a9' }}>Certified QA tester</h4>
        {!open3 && <span>Flip</span>}
        {open3 && (
          <div className="open3">
            <p>School: Hack a Boss</p>
            <p>Academic certificate</p>
            <p>
              Design of functional tests, white box, gray box and black box test cases. Manual and automatic tests. Bug
              report..
            </p>
            {open3 && <span>Flip</span>}
          </div>
        )}
      </article>
    </section>
  )
}
