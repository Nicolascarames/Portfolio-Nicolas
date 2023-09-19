import './page1.css'

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
      <p>Hi, I'm Nico</p>
      {/* <Link activeClass="active" to="" spy={true} smooth={true} offset={-70} duration={500}></Link> */}
      <p>Full stack developer</p>
    </div>
  )
}
