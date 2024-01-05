
export const Contact = () => {
  return (
    <>
    <h2  style={{margin: '3rem', textAlign: 'center', borderBottom: '1px solid rgba(0,0,0,0.1)', paddingBottom: '1rem'}} className="gradient-text">Contact Me</h2>
    <section className="contact-container">
        <ul className="contact-info">
            <li>
                <a href="mailto:jmoises.n23@gmail.com"
                className="brand-logo-container brand-contact"
                ><img src="/icons/brand-gmail.svg" alt="" />
                <p>GMAIL</p></a>
                <a href="https://www.linkedin.com/in/jnunez99/"
                target="_blank"
                rel="noreferrer"
                className="brand-logo-container brand-contact"
                ><img src="/icons/brand-linkedin.svg" alt="" />
                <p>LinkedIn</p></a>
            </li>
        </ul>
    </section>
    </>
  )
}
