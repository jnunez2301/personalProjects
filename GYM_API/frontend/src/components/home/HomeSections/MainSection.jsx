import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'
import axios from 'axios';
import { NoEquipmentSection } from './NoEquipmentSection';

export const MainSection = () => {
    // /exercises/:id
    // /api/gym/routine/${type}/${name}
    // /api/gym/routine/calisthenics/FBB
    // /api/gym/influencer
    const [data, setData] = useState([]);
    const [beginner, setBeginner] = useState([]);
    const [influencer, setInfluencer] = useState([]);

    const baseURL = `/api/gym/exercises/`
    const beginnerURL = `/api/gym/routine/calisthenics/FBB`
    const influencerURL = `/api/gym/influencer`
    // ${Math.floor(Math.random() * 60)}
    // to={`/routine-name/calisthenics/${routine.routine_alias}`}
    

    //TODO: AÑADIR CONDICIONAL EN BASE A LOADING...
    useEffect(() => {
        axios
            .get(baseURL)
            .then(response => {
                setData(response.data);
            })
            .catch(error => {
                console.log(error);
            })
        axios
            .get(beginnerURL)
            .then(response => setBeginner(response.data))
            .catch(error => console.log(error))
        axios
            .get(influencerURL)
            .then(response => setInfluencer(response.data))
            .catch(error => console.log(error))
    }, [])
    let currentInfluencer = [];
    if(influencer.length > 0){
        currentInfluencer = influencer[Math.floor(Math.random() * influencer.length)];
    }
    
    return (
        <>
        <section className="main-section">
            <article className="main-article">
                <div>
                    <h3>Most recommended routine for beginners!</h3>
                    {beginner.length > 0 && <Link
                        className='routine-link'
                        to={`/routine-name/calisthenics/FBB`}>
                        <h2>{beginner[0].routine_name}</h2>
                        <img
                            src={beginner[0].routine_img} alt={`${beginner[0].routine_name}`} />
                        <p>{beginner[0].routine_description}</p>
                    </Link>}
                </div>
            </article>
            <div className="second-container">
                <article className="variation-exercise">
                    <iframe
                        className="home-push-ups"
                        src="https://www.youtube.com/embed/zkU6Ok44_CI" title="You CAN do pushups, my friend! (2022 Version)" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen />
                </article>
                <article>
                    <div
                    className='influencer-container'>
                        <h3>Recommended Influencer</h3>
                        {
                            influencer.length > 0 && 
                            <>
                            <h5>{currentInfluencer.influencer_name}</h5>
                            {                          
                             <a 
                             className='influencer-container'
                        target='_blank'
                        rel='noreferrer'
                        href={currentInfluencer.influencer_url}>
                            <img 
                            className='influencer-img'
                            src={currentInfluencer.influencer_img} alt={currentInfluencer.influencer_name} />
                        </a>
                            }
                        
                            </>
                        }
                    </div>
                </article>
                <div className="third-container">
                    <article>
                        <div>
                            <h3>Random Exercise of the Day!</h3>
                            {
                                data.length > 0 &&
                                (
                                    <iframe src={data[Math.floor(Math.random() * data.length)].youtubeSrc} allowFullScreen/>
                                )
                            }
                        </div>
                    </article>
                </div>
            </div>
        </section>
        <NoEquipmentSection 
        beginner={beginner}/>
        </>
    )
}
