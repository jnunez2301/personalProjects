import React, { useEffect, useRef, useState } from 'react';
import Chart from 'chart.js/auto';
import { getRelativePosition } from 'chart.js/helpers';
import { Line } from 'react-chartjs-2';

import { useAuth } from '../../../context/auth/AuthContext';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

export const WeightChart = () => {
  const { user, isAunthenticated } = useAuth();
  const [data, setData] = useState([]);
  const [ inputValue, setInputValue ] = useState('');
  const { userHandle } = useParams();
  const navigate = useNavigate();
  const chartRef = useRef(null);


  const onInputChange = (event) =>{
     const {name, value} = event.target;
    setInputValue({[name]: value});
  }
  const handleSubmit = (event) =>{
    event.preventDefault();
    const baseURL = `/api/gym/weight_progress/${user.user_id}`
    if(window.confirm('Are you sure?')){
        axios
        .post(baseURL, inputValue)
        .then(response => {
          console.log(response.data)
          window.location.reload();
        })
        .catch(error => console.log(error))
    }
  }
  useEffect(() => {
    const baseURL = `/api/gym/weight_progress/${user.user_id}`;
    if (user.user_handle !== userHandle) {
      alert('Private info sorry you must be logged in to see this info.');
      navigate('/');
    } else {
      axios
        .get(baseURL)
        .then((response) => setData(response.data))
        .catch((error) => console.log(error));
    }
  }, []);

  useEffect(() => {
    if (data.length === 0) return;

    const canvas = chartRef.current;
    const ctx = canvas.getContext('2d');

    const labels = data.map((progress) => {
        const date = new Date(progress.created_at);
        return date.toLocaleDateString(); 
      });
    
    const dataPoints = data.map((progress) => progress.weight_progress);

    const chartData = {
      labels: labels,
      datasets: [
        {
          label: 'Weight Progress',
          data: dataPoints,
          fill: false,
          backgroundColor: 'rgba(75,155,255)',
          borderColor: 'rgba(75,192,192,1)',
          borderWidth: 2,
        },
      ],
    };

    const myChart = new Chart(ctx, {
      type: 'line',
      data: chartData,
    });

    // Clean up the chart when the component unmounts
    return () => {
      myChart.destroy();
    };
  }, [data]);

  

  return (
    <div className='weight-chart'>
      {user.user_handle === userHandle && 
        <>
          <canvas ref={chartRef} />
          {data.length === 0 && <h5>Insert your first entry to see the Chart</h5>}
        </> 
          
          
        
      }
      <form onSubmit={handleSubmit}>
        <label htmlFor='weight_progress'>Todays Weight</label>
        <input type="number" name="weight_progress" id="weight_progress" 
        onChange={onInputChange}
         min={'25'}
         max={'300'}
         placeholder='kg'
         
         required/>
        <button type='submit'>Submit</button>
      </form>
    </div>
  );
};
