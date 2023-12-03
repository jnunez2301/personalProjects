import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export const Success = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const redirectTimer = setTimeout(() => {
      // Redirect to the routine page after 10 seconds
      navigate('/');
    }, 10000);

    // Clear the timer if the component unmounts
    return () => clearTimeout(redirectTimer);
  }, [navigate]);

  return (
    <div>
      Routine uploaded successfully. You will be redirected to your routine in 10 seconds. Alternatively, you can <a href="/">click here</a>.
    </div>
  );
};

