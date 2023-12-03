import { Link, useParams } from 'react-router-dom'
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useAuth } from '../../context/auth/AuthContext';
export const UserPage = () => {
    const { user_handle } = useParams();
    const baseURL = `/api/gym/user/${user_handle}`;

    const [data, setData] = useState([]);
    let userInfo = [];
    const [inputValue, setInputValue] = useState({ user_img: '', user_background_img: '' });

    if (data) {
        userInfo = data[0];
    }
    const [infoError, setInfoError] = useState('');
    const { isAuthenticated, user } = useAuth();
    const [showSettings, setShowSettings] = useState(false);
    const [userRoutines, setUserRoutines] = useState([]);
    const personalRoutinesURL = `/api/gym/personalRoutines/${user.user_id}`

    const handleDeleteRoutine = (alias, user_id) => {
        const deleteURL = `/api/gym/deleteRoutine/${alias}/${user_id}`
        if (window.confirm("Do you really want to delete this routine?") && isAuthenticated && user_handle === user.user_handle) {
            axios
                .put(deleteURL)
                .then(response => {
                    console.log(response.data.msg);  
                })
                .catch(error => {
                    console.error(error.message);
                    
                });
        }
    }

    useEffect(() => {
        axios
            .get(baseURL)
            .then(response => setData(response.data))
            .catch(error => {
                console.log(error)
                if (error.response.status === 403) {
                    setInfoError('User not found');
                }
            })
        axios
            .get(personalRoutinesURL)
            .then(response => setUserRoutines(response.data))
            .catch(error => console.log(error))

    }, [handleDeleteRoutine])

    const openSettings = () => {
        if (isAuthenticated && user_handle === user.user_handle) {
            setShowSettings(true)
        }
    }
    const hideSettings = () => {
        setShowSettings(false);
    }

    const onInputChange = (event) => {
        const { name, value } = event.target;
        setInputValue({ ...inputValue, [name]: value.trim() })
    }
    const updateSettings = (event) => {
        event.preventDefault();
        const updatedPhotoURL = `/api/gym/user/photo/${user.user_handle}`;

        if (isAuthenticated && user_handle === user.user_handle) {
            axios
                .put(updatedPhotoURL, inputValue)
                .then(response => {
                    if (response.status === 203) {
                        window.location.reload();
                    }
                })
                .catch(error => {
                    console.log(error)
                    setInfoError('Please try choosing another URL')
                })
        }
    }
    
   
    
    return (
        <section>
            {infoError.length > 0 &&
                <h3 style={{ textAlign: 'center', backgroundColor: 'orangered', color: '#f2f2f2', padding: '1rem' }}>{infoError}</h3>}
            {
                data.length > 0 ?
                    <>
                        <div className='user-info'>
                            <picture>
                                <img
                                    className='user-photo'
                                    onError={({ currentTarget }) => {
                                        currentTarget.onerror = null; // prevents looping
                                        currentTarget.src = "https://media.tenor.com/StMx6F8h5RQAAAAC/psyduck-confused.gif";
                                    }}
                                    src={userInfo.user_img} alt={`user: ${userInfo.user_handle} profile photo`} />
                                <img
                                    src={userInfo.user_background_img}
                                    className='user-background' />
                                {
                                    isAuthenticated && user_handle === user.user_handle ?
                                        <>
                                            <img src="/assets/logos/settings.svg" alt="settings svg"
                                                onClick={openSettings}
                                                className='btn-settings'
                                            />
                                            <div className='user-settings'
                                                style={{ display: showSettings ? 'flex' : 'none' }}
                                            >
                                                <form onSubmit={updateSettings}>
                                                    <button
                                                        type='button'
                                                        className='btn'
                                                        onClick={hideSettings}>CLOSE</button>

                                                    <label htmlFor="user_img">Profile Pic</label>
                                                    <input
                                                        type="url" name="user_img"
                                                        onChange={onInputChange} id="user_img" placeholder='Place your new profile pic URL' />

                                                    <label htmlFor="user_background-img">Background IMG</label>
                                                    <input
                                                        onChange={onInputChange}
                                                        type="url" name="user_background_img" id="user_background_img" placeholder='Place your new background img URL/LINK' />
                                                    <button type="submit">Submit</button>
                                                </form>

                                            </div>
                                        </> : ''}
                            </picture>
                            <div className='user-name'>
                                <h3>
                                    {userInfo.first_name} {userInfo.last_name}
                                </h3>
                                <Link to={`/user/${user_handle}`}>@{userInfo.user_handle}</Link>
                            </div>
                            {
                                isAuthenticated && user.user_handle === user_handle ?
                                    <div >
                                        <Link
                                            className='routine-builder-icon'
                                            to={'/user/routine-builder'}>
                                            <p>Got a routine in mind? Build it!</p>
                                            <img
                                                onError={({ currentTarget }) => {
                                                    currentTarget.onerror = null; // prevents looping
                                                    currentTarget.src = "https://media.tenor.com/StMx6F8h5RQAAAAC/psyduck-confused.gif";
                                                }}
                                                src="/gym-logo.svg" alt="builder-logo" />
                                        </Link>
                                    </div> : ''}
                            
                            <h3 className='user-routines-title'>My <strong>APPROVED</strong> Routines ({data.length})</h3>
                            <div className='user-routines-container'>
                                {
                                    data.map(info => (
                                        <Link
                                            target='_blank'
                                            rel='noreferrer'
                                            to={`/routine-name/${info.uses_weights === 0 ? 'calisthenics' : 'weights'}/${info.routine_alias}`}
                                            key={info.routine_id}>
                                            <h2>{info.routine_name}</h2>
                                            <img
                                                onError={({ currentTarget }) => {
                                                    currentTarget.onerror = null; // prevents looping
                                                    currentTarget.src = "https://media.tenor.com/StMx6F8h5RQAAAAC/psyduck-confused.gif";
                                                }}
                                                className='user-routine-img'
                                                src={info.routine_img}
                                                alt={info.routine_name} />
                                            <p>{info.routine_description}</p>
                                        </Link>
                                    ))
                                }
                            </div>
                            
                            <h3 className='user-routines-title'>My Personal Routines</h3>
                            <div className='user-routines-container'>
                                {
                                    userRoutines.length > 0 && userRoutines.map(info => (
                                        <div
                                        className='personal-routine'
                                        key={info.routine_alias}
                                        style={{ display: info.deleted_routine === 0 ? 'none' : 'block' }}
                                        >
                                        
                                        <button 
                                        className='btn-delete'
                                        onClick={() => handleDeleteRoutine(info.routine_alias, info.user_id)}>DELETE</button>
                                        <Link
                                            target='_blank'
                                            rel='noreferrer'
                                            to={`/personal/routine/${info.routine_alias}/${info.user_id}`}
                                            
                                            >
                                            <h2>{info.routine_name}</h2>
                                            <img
                                                className='user-routine-img'
                                                src={info.routine_img}
                                                alt={info.routine_name}
                                                /* IN CASE IMG IS NOT FOUND */
                                                onError={({ currentTarget }) => {
                                                    currentTarget.onerror = null; // prevents looping
                                                    currentTarget.src = "https://media.tenor.com/StMx6F8h5RQAAAAC/psyduck-confused.gif";
                                                }}
                                            />
                                            <p>{info.routine_description}</p>
                                        </Link>
                                    </div>

                                    ))
                                }
                                
                            </div>
                        </div>
                    </> :
                    <>
                        <div className='user-error'>
                            <img
                                className='user-error-photo'
                                src='https://cdn.dribbble.com/users/5699122/screenshots/13201552/media/38620854f8f4d9ba661d082e7c4652cb.gif'></img>
                        </div>
                    </>
            }
        </section>
    )
}
