import { Link } from 'react-router-dom'

export const Routines = () => {
  const sampleImg = 'https://st.depositphotos.com/2274151/4841/i/450/depositphotos_48410095-stock-photo-sample-blue-square-grungy-stamp.jpg'
  return (
    <section className="routine-section">
      <Link to='/routine/weights'>
        <article>
          <header>
            <h3>WITH WEIGHTS</h3>
          </header>
          <picture>
            <img src={sampleImg} alt="sample-img" />
          </picture>
        </article>
      </Link>

      <Link to='/routine/calisthenics'>
        <article>
          <header>
            <h3>NO GYM? NO WEIGHTS? YOUR BODY IS YOUR BEST FRIEND</h3>
          </header>
          <picture>
            <img src={sampleImg} alt="sample-img" />
          </picture>
        </article>
      </Link>
    </section>
  )
}
