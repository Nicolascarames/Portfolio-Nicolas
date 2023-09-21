import './page1.css'
import hi from '../../img/hi.png'

export const Page1 = () => {
  // const handleClickScroll = () => {
  //   const element = document.getElementById('pagina5')
  //   if (element) {
  //     // 👇 Will scroll smoothly to the top of the next section
  //     element.scrollIntoView({ behavior: 'smooth' })
  //   }
  // }

  return (
    <div className="page1">
      {/* <h1>Hi, I'm Nico</h1> */}
      {/* <Link activeClass="active" to="" spy={true} smooth={true} offset={-70} duration={500}></Link> */}
      {/* <h1>Full stack developer</h1> */}
      <img src={hi} alt="hi" />
    </div>
  )
}
