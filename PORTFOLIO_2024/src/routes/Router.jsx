import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home } from '../components';
import { About, Projects, Resume } from '../pages';
import { NavBar } from '../components/';

export const Router = () => {
    return (
        <BrowserRouter>
            <NavBar />
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/about' element={<About/>} />
                <Route path='/resume' element={<Resume />} />
                <Route path='/projects' element={<Projects />} />
                <Route path='/*' element={<Home/>} />
            </Routes>
        </BrowserRouter>
    )
}

