import { useParams } from 'react-router-dom';
import { Weights } from './Weights';
import { Calisthenics } from './Calisthenics';

export const Routine = () => {
  const { type } = useParams();

  const isValidRoutine = ['calisthenics', 'weights'].includes(type);

  return (
    <>
      {isValidRoutine ? (
        type === 'calisthenics' ? (
          <Calisthenics />
        ) : (
          <Weights />
        )
      ) : (
        <div>
          <h2>Error: Invalid routine type</h2>
          <p>Please select a valid routine type.</p>
        </div>
      )}
    </>
  );
};
