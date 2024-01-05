import { logos } from "../helpers"

export const Info = () => {
  return (
    <section className="home-container">
      <header>
        <h2>Hi, I'm Jonathan, a <span className="gradient-text">Full Stack Developer</span> with a passion for Web Development</h2>
        <p>Passionate about web development with deep knowledge on <strong>React / Angular</strong> and <strong>Java / JavaScript</strong> Always looking to improve my knowledge and looking for the best technologies for best performance</p>
        <ul  className="brand-list">
          {
            logos && logos.map(logo => {
              return (
                <li key={logo.id} className="brand-li">
                  <a href={logo.url}  className="brand-logo-container" target="_blank" rel="noreferrer">
                  <picture>
                    <img className="brand-logo" src={logo.localUrl} alt={`${logo.name} logo`}/>
                  </picture>
                  <p>
                    {logo.name}
                  </p>
                  </a>
                </li>
              )
            })
          }
        </ul>
      </header>
      <picture>
        <img className="profile-pic" src="/photos/sport-pic.jpeg" alt="about photo" />
      </picture>
    </section>
  )
}
