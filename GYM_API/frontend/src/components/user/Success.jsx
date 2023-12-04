import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';

export const Success = () => {
  const navigate = useNavigate();
  const {alias, id} = useParams();
  const [seconds, setSeconds] = useState(10);


  
useEffect(() => {
  const redirectTimer = setInterval(() => {
    setSeconds(prevSeconds => prevSeconds - 1);
  }, 1000); // Update every second

  return () => {
    clearInterval(redirectTimer);
  };
}, []); // Empty dependency array to run only once on mount

useEffect(() => {
  // Redirect to the routine page after 10 seconds
  if (seconds === 0) {
    navigate(`/personal/routine/${alias}/${id}`);
  }
}, [seconds, navigate, alias, id]);

  return (
    <div className='success-page'>
      <p>
      Routine uploaded successfully. You will be redirected to your routine in <strong>{seconds}</strong> seconds. Alternatively, you can <Link to={`/personal/routine/${alias}/${id}`}>click here</Link> to go to your routine.
      </p>
      <img src="https://media.tenor.com/fTaivWK5Y3cAAAAC/thumbsup-narumi.gif" alt="thumbs-up-img" />
    </div>
  );
};

