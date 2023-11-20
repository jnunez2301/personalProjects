

export const FooterSection = () => {
  return (
    <section className="footer-section">
        
        <article>
            <header>
                <h3>Contact</h3>
            </header>
            <ul>
                <li>LinkedIn</li>
                <li>GitHub</li>
                <li>Gmail</li>
            </ul>
        </article>
        <article>
            <header>
                <h3>Bibliography</h3>
            </header>
            <ul>
                <li>Source 1</li>
                <li>Source n</li>
                <li>Source n</li>
            </ul>
        </article>
        <article>
            <header>
                {/* https://tdeecalculator.net/ */}
                <h3>Recommended resources</h3>
                <li>
                    <a href="https://tdeecalculator.net/" target="_blank" rel="noreferrer">TDEE Calculator</a>
                </li>
                <li>source n</li>
                <li>source n</li>
                <li>source n</li>
            </header>
        </article>
        
    </section>
  )
}
