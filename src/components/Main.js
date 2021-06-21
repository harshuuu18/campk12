import React from "react"
import RenderData from "./RenderData"

function Main(props) {
	const grade = props.grade
	const tech = props.tech
	
	return (
		<>
			<RenderData grade={grade} tech={tech} />
		</>
	)
}

export default Main
