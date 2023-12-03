import { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';

export const Success = () => {
  const navigate = useNavigate();
  const {alias, id} = useParams();


  useEffect(() => {
    const redirectTimer = setTimeout(() => {
      // Redirect to the routine page after 10 seconds
      navigate(`/personal/routine/${alias}/${id}`);
    }, 10000);

    // Clear the timer if the component unmounts
    return () => clearTimeout(redirectTimer);
  }, [navigate]);

  return (
    <div>
      Routine uploaded successfully. You will be redirected to your routine in 10 seconds. Alternatively, you can <Link to={`/personal/routine/${alias}/${id}`}>click here</Link>.
    </div>
  );
};

