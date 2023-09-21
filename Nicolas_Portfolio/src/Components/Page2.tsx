import { Cards } from './Cards'
import './page2.css'
// import { useState } from 'react'
// import bombilla from '../../img/bombilla.png'

export const Page2 = () => {
  //   const [project1, setProject1] = useState(true)
  //   const [project2, setProject2] = useState(true)
  //   const [project3, setProject3] = useState(true)

  return (
    <section className="page2">
      <h2>My projects</h2>
      <article className="projects">
        {/* <div onMouseEnter={() => setProject1(false)} onMouseLeave={() => setProject1(true)}>
          {project1 ? (
            <>
              <img src={bombilla} alt="bombilla" style={{ width: '160px' }} />
            </>
          ) : (
            <>
              <h3>A website where you can consult your technological doubts</h3>
              <a href="https://whatswrong.naviwarrior.es/">Go to website</a>
            </>
          )}
        </div>
        <div>{project2}</div>
        <div>{project3}</div> */}
        <Cards />
      </article>
    </section>
  )
}
