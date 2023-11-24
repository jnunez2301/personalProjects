import { Link } from 'react-router-dom'

export const Routines = () => {
  return (
    <section className="routine-section">
      <Link to='/routine/weights'>
        <article>
          <header>
            <h3>WITH WEIGHTS</h3>
          </header>
          <picture>
            <img src={'https://www.workoutforless.co.uk/cdn/shop/articles/luis-reyes-mTorQ9gFfOg-unsplash_2_640x.jpg?v=1657122621'} alt="sample-img" />
          </picture>
        </article>
      </Link>

      <Link to='/routine/calisthenics'>
        <article>
          <header>
            <h3>NO GYM? NO WEIGHTS? YOUR BODY IS YOUR BEST FRIEND</h3>
          </header>
          <picture>
            <img src={'https://gravity.fitness/cdn/shop/articles/Get_your_kids_into_calisthenics_to_avoid_child_obesity_-_Gravity_Fitness_1600x.jpg?v=1677067732'} alt="sample-img" />
          </picture>
        </article>
      </Link>
    </section>
  )
}
