import { useState } from "react"
import "./App.css"
import { BrowserRouter, Switch, Route } from "react-router-dom"
import TopNav from "./components/TopNav"
import Main from "./components/Main"
import Sidebar from "./components/Sidebar"

function App() {
	return (
		<BrowserRouter>
			<Sidebar />
			<div className="right-section">
				<TopNav />

				<Switch>
					<Route path="/">
						<Main />
					</Route>
				</Switch>
			</div>
		</BrowserRouter>
	)
}

export default App
