import React from 'react'
import './../styles/App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import About from '../pages/About'

const App = () => {
	return (
		<div>
			{/* Do not remove the main div */}
			<BrowserRouter>
				<Routes>
					<Route path='/' element={<Home />} />
					<Route path='/users/:id' element={<About />} />
				</Routes>
			</BrowserRouter>
		</div>
	)
}

export default App
