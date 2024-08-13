import React from 'react'
import { Table } from "../components/index";

function TimeTable() {
  return (
      <div className='flex  h-lvh w-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 '>
          <div className='flex-1 justify-center self-center'>
              <Table />
          </div>
      </div>
  )
}

export default TimeTable