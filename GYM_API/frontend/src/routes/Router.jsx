import { BrowserRouter, Routes, Route } from "react-router-dom"
import { MainPage, Exercises, Challenges, Routines } from '../components'
import { Login, Register } from '../auth'
import NavBar from "../components/Navigation/NavBar"
import { PageNotFound } from "../components/error/PageNotFound"
import { Routine } from "../components/home/RoutineSections/Routine"
import { SelectedRoutine } from "../components/home/RoutineSections/SelectedRoutine"

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
            
            <Route path='/routine/:type' element={<Routine />} />
            <Route path='/routine-name/:type/:name' element={<SelectedRoutine />} />

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