import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import { Main } from './components/main'
import { Box } from '@mui/material'
import { Tickets } from './components/tickets'

function App() {

  return (
    <div className="App">
      <Box>

        <Main />
        <Tickets/>
      </Box>
    </div>
  )
}

export default App
