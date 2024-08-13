import React, { useState } from 'react'
import { HomeCard } from "../components/index";

function Home() {

  return (
    <>
      <div className='flex  h-lvh w-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 '>
        <div className='flex-1 justify-center self-center flex'>
          <HomeCard  name = {"Classes"} description={"Have information on timetable,Students and teachers in the class"}/>
        </div>
        <div className='flex-1 justify-center self-center flex'>
          <HomeCard  name={"Teachers"} description={"information on all the teachers"} />
        </div>
        <div className='flex-1 justify-center self-center flex'>
          <HomeCard  name={"Students"} description={"information on all the students"} />
        </div>
      </div>

    </>
  )
}

export default Home