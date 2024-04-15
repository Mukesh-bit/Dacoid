import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import SignIn from './pages/SignIn'
import CreateAccount from './pages/CreateAccount'
import Goals from './pages/Goals'
import WorkoutTracker from './pages/WorkoutTracker'
import WorkoutSchedule from './pages/WorkoutSchedule'
import HeroPage2 from './pages/HeroPage2'

const App = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/createaccount' element={<CreateAccount/>}/>
        <Route path='/signin' element={<SignIn/>}/>
        <Route path='/goals' element={<Goals/>}/>
        <Route path='/workouttracker' element={<WorkoutTracker/>}/>
        <Route path='/workoutschedule' element={<WorkoutSchedule/>}/>
        <Route path='/heropage2' element={<HeroPage2/>}/>
      </Routes>
    </>
  )
}

export default App