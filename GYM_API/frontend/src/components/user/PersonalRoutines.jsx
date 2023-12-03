import { useParams } from 'react-router-dom';
export const PersonalRoutines = () => {
    const params = useParams();
    console.log(params);
  return (
    <div>PersonalRoutines</div>
  )
}
