import { BrowserRouter, Routes, Route } from "react-router-dom"
import { MainPage, Exercises, Challenges, Routines } from '../components'
import { Login, Register } from '../auth'
import NavBar from "../components/Navigation/NavBar"
import { PageNotFound } from "../components/error/PageNotFound"

const Router = () => {
  return (
    <>
    <BrowserRouter>
        <NavBar />
        <Routes>
            <Route path='/' element={<MainPage />} />
            <Route path='/exercises' element={<Exercises />} />
            <Route path='/challenges' 
            element={<Challenges />} />
            <Route path='/routines'
            element={<Routines />} />
            <Route path='/login' 
            element={<Login />}/>
            <Route path='/register'
            element={<Register />}/>

            <Route path='/*' element={<PageNotFound />} />
        </Routes>
    </BrowserRouter>
    </>
  )
}

export default Router