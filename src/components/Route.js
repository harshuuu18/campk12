import React, { useState, useEffect } from "react"
import { Link } from "react-router-dom"

function Route(props) {
	const [routeStyle, setRouteStyle] = useState({ height: "70px" })
	const [routeTitleStyle, setRouteTitleStyle] = useState({})
	useEffect(() => {
		routeStyle.height === "170px"
			? setRouteTitleStyle({
					backgroundColor: "rgb(0, 83, 191)",
					borderLeft: "10px solid white",
			  })
			: setRouteTitleStyle({})
	}, [routeStyle.height])

	return (
		<>
			<div style={routeStyle}>
				<div
					onClick={(e) => {
						routeStyle.height === "70px"
							? setRouteStyle({
									height: "170px",
							  })
							: setRouteStyle({
									height: "70px",
							  })
					}}
					style={routeTitleStyle}>
					<Link to={props.firstRoute}>
						<h3>{props.firstRouteName}</h3>
					</Link>
				</div>
				<div className="route-title-in">
					<Link to={props.firstChildRoute}>{props.firstChildRouteName}</Link>
				</div>
				<div className="route-title-in" style={props.RouteStyles}>
					<Link to={props.secChildRoute}>{props.secChildRouteName}</Link>
				</div>
			</div>
			<hr />
		</>
	)
}

export default Route
