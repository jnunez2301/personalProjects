

export const NoEquipmentSection = ({ beginner }) => {

  const filteredBeginner = beginner.filter(b => b.body_part !== 'Biceps')
  
  
  return (
    <section className="section-container">
            <h4
            style={{
              color: '#606c38',
              marginBottom: '1rem'
            }}
            >NO EQUIPMENT? Floor and Gravity is all you need!</h4>
        <div className="article-container">
            {
              beginner &&
              <>
              {filteredBeginner.map(exercise =>(
                <article 
                className="section-article"
                key={exercise.exercise_id}>
                    <h5>{exercise.exercise_name}</h5>
                    <iframe src={exercise.youtubeSrc} allowFullScreen/>
                </article>
              ))}
            </>}
        </div>
            <br />
            <hr />
            <h6>ADAPT ROUTINE AS NEEDED IF YOU CAN NOT DO AN EXERCISE DO AN EASIER VARIATION</h6>
    </section>
  )
}
