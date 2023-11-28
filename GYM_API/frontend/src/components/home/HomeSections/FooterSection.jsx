

export const FooterSection = () => {
  return (
    <footer className="footer-section">
        
        <article>
            <header>
                <h3>Contact</h3>
            </header>
            <ul>
                <li >
                <a 
                className="brand-container"
                href="https://www.linkedin.com/in/jnunez99/" target="_blank"
                rel="noreferrer">
                    <img
                    className="brand-logo" 
                    src="/assets/logos/linkedin.svg" alt="linkedin-logo"
                     />
                    LinkedIn
                </a>
                </li>
                <li>
                {/* https://github.com/jnunez2301 */}
                <a 
                className="brand-container"
                href="https://github.com/jnunez2301" target="_blank"
                rel="noreferrer">
                    <img
                    className="brand-logo" 
                    src="/assets/logos/github.svg" alt="github-logo"
                     />
                    Github </a>
                </li>
                <li>
                <a 
                className="brand-container"
                href="mailto:jmoises.n23@gmail.com" target="_blank"
                rel="noreferrer">
                    <img
                    className="brand-logo" 
                    src="/assets/logos/gmail.svg" alt="gmail-logo"
                     />
                    Gmail </a>
                </li>
            </ul>
        </article>
        <article>
            <header>
                {/* https://tdeecalculator.net/ */}
                <h3>Recommended resources</h3>
                <li>
                    <a href="https://tdeecalculator.net/" target="_blank" rel="noreferrer">TDEE Calculator</a>
                </li>
                <li>
                    <a href="https://www.muscleandstrength.com/"
                    rel='noreferrer'
                    target="_blank">Muscle & Strength</a>
                </li>
                <li>
                    <a href="https://darebee.com/"
                    rel="noreferrer"
                    target="_blank">Darebee</a>
                </li>
            </header>
        </article>
        
    </footer>
  )
}
