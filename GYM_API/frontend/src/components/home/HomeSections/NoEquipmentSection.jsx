

export const NoEquipmentSection = ({ beginner }) => {

  const filteredBeginner = beginner.filter(b => b.body_part !== 'Biceps')
  
  
  return (
    <section className="section-container">
        <div>
            <h4>NO EQUIPMENT? Floor and Gravity is all you need!</h4>
        </div>
        <div className="article-container">
            {
              beginner &&
              <>
              {/* <article className="section-article">Exercise</article> */}
              {filteredBeginner.map(exercise =>(
                <article 
                className="section-article"
                key={exercise.exercise_id}>
                  <div>
                    <h5>{exercise.exercise_name}</h5>
                    <iframe src={exercise.youtubeSrc} allowFullScreen/>
                  </div>
                </article>
              ))}
            </>}
        </div>
        <div>
            <h6>ADAPT AS NEEDED IF YOU CAN NOT DO AN EXERCISE DO AN EASIER VARIATION I BELIEVE IN YOU!</h6>
        </div>
    </section>
  )
}
