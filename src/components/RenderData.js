import React, { useState } from "react"
import { useLocation } from "react-router-dom"
// import { useEffect } from "react/cjs/react.development";
import { useEffect } from "react"
import jsonData from "../A2PI.json"
import { makeStyles } from "@material-ui/core/styles"
import Accordion from "@material-ui/core/Accordion"
import AccordionSummary from "@material-ui/core/AccordionSummary"
import AccordionDetails from "@material-ui/core/AccordionDetails"
import Typography from "@material-ui/core/Typography"
import ExpandMoreIcon from "@material-ui/icons/ExpandMore"
import Button from "@material-ui/core/Button"

const useStyles = makeStyles((theme) => ({
	root: {
		width: "100%",
	},
	heading: {
		fontSize: theme.typography.pxToRem(15),
		fontWeight: theme.typography.fontWeightRegular,
	},
	main: {
		width: "85%",
		margin: "0 auto",
		marginBottom: "2rem",
	},
	details: {
		display: "flex",
		flexWrap: "wrap",
	},
	btnStyle: {
		margin: "1rem",
		backgroundColor: "#056EF2",
	},
}))

function RenderData(props) {
	const classes = useStyles()
	const location = useLocation()
	const path = location.pathname
	const [grade, setGrade] = useState("")
	const [tech, setTech] = useState("")
	const [newData, setNewData] = useState([])
	const [newLinks, setNewLinks] = useState(["1", "2", "3"])
	const newpath = `${path}`.split("/")
	const [m1Style, setM1Style] = useState({})
	const [m2Style, setM2Style] = useState({ display: "none" })

	useEffect(() => {
		const data = jsonData.filter((f) => {
			return path === "/1-1"
				? f.type === "1-1"
				: path === "/1-N"
				? f.type === "1-N"
				: path === "/School"
				? f.type === "School"
				: path
				? f.path === path
				: f.country
		})
		setNewData(data)
	}, [path])

	const Drops1 = [
		...new Set(
			newData.map((ln) => {
				return ln.grade
			}),
		),
	]

	const secondData = newData.filter((i) => {
		return i.grade === grade && i.tech === tech
	})

	const thirdData = newData.filter((t) => {
		return t.grade === grade
	})

	return (
		<>
			<div
				className="filter-breadcrumb"
				style={path === "/" ? { display: "none" } : {}}>
				<div className="breadcrumb">
					<h2>{newpath[1]}</h2>

					{newpath[2] ? <h2>{">"}</h2> : <></>}
					<h2>{newpath[2]}</h2>

					{grade ? <h2>{">"}</h2> : <></>}
					<h2>{grade}</h2>
					{tech ? <h2>{">"}</h2> : <></>}

					<h2>{tech}</h2>
				</div>
				<div className="filters">
					<select
						name="grade"
						id="grade"
						placeholder="Grade"
						onChange={(e) => {
							setGrade(e.target.value)
						}}
						onClick={(e) => setGrade(e.target.value)}>
						<option value="">Select Grade</option>
						{Drops1.map((d, i) => {
							return (
								<option key={i} value={d}>
									{" "}
									{d}{" "}
								</option>
							)
						})}
					</select>

					<select
						name="tech"
						id="tech"
						onChange={(e) => {
							setTech(e.target.value)
						}}
						onClick={(e) => setTech(e.target.value)}>
						<option value="">Select Tech</option>
						{thirdData.map((d, i) => {
							return (
								<option key={i} value={d.tech}>
									{" "}
									{d.tech}{" "}
								</option>
							)
						})}
					</select>
				</div>
			</div>

			<div className="main">
				{!grade || !tech ? (
					<>{<h4>Please select the right Grade and Technology</h4>}</>
				) : (
					<>
						{secondData.map((i, len) => {
							return (
								<div className="main-1" style={m1Style} key={len}>
									<Accordion className={classes.main}>
										<AccordionSummary
											expandIcon={<ExpandMoreIcon />}
											aria-controls="panel1a-content"
											id="panel1a-header">
											<Typography className={classes.heading}>
												Demo - {` ( ${i.country} - ${i.grade} - ${i.tech} ) `}
											</Typography>
										</AccordionSummary>
										<AccordionDetails className={classes.details}>
											{i.demo
												? i.demo.map((l1, index) => {
														return (
															<React.Fragment key={index}>
																<Button
																	variant="contained"
																	key={index}
																	onClick={(e) => {}}
																	className={classes.btnStyle}
																	color="primary"
																	target="_blank"
																	rel="noopener noreferrer"
																	href={l1}>
																	{index === 0
																		? "Project"
																		: index === 1
																		? "Project Template"
																		: index === 2
																		? "One Pager"
																		: index === 3
																		? "Slides"
																		: "Explainer Video"}
																</Button>
															</React.Fragment>
														)
												  })
												: "Not available"}
										</AccordionDetails>
									</Accordion>
									<Accordion className={classes.main}>
										<AccordionSummary
											expandIcon={<ExpandMoreIcon />}
											aria-controls="panel1a-content"
											id="panel1a-header">
											<Typography className={classes.heading}>
												Level-1 -{" "}
												{` ( ${i.country} - ${i.grade} - ${i.tech} ) `}
											</Typography>
										</AccordionSummary>
										<AccordionDetails className={classes.details}>
											{i.links1
												? i.links1.map((l1, index) => {
														return (
															<React.Fragment key={index}>
																<Button
																	variant="contained"
																	onClick={(e) => {
																		setNewLinks([...l1.link])
																		setM1Style({ display: "none" })
																		setM2Style({ display: "flex" })
																	}}
																	className={classes.btnStyle}
																	color="primary">
																	Session-{index + 1}
																</Button>
															</React.Fragment>
														)
												  })
												: "Not available"}
										</AccordionDetails>
									</Accordion>
									<Accordion className={classes.main}>
										<AccordionSummary
											expandIcon={<ExpandMoreIcon />}
											aria-controls="panel1a-content"
											id="panel1a-header">
											<Typography className={classes.heading}>
												Level 2- {` ( ${i.country} - ${i.grade} - ${i.tech} ) `}
											</Typography>
										</AccordionSummary>
										<AccordionDetails className={classes.details}>
											{i.links2
												? i.links2.map((l1, index) => {
														return (
															<React.Fragment key={index}>
																<Button
																	variant="contained"
																	onClick={(e) => {
																		setNewLinks([...l1.link])
																		setM1Style({ display: "none" })
																		setM2Style({ display: "flex" })
																	}}
																	className={classes.btnStyle}
																	color="primary">
																	Session-{index + 1}
																</Button>
															</React.Fragment>
														)
												  })
												: "Not available"}
										</AccordionDetails>
									</Accordion>
									<Accordion className={classes.main}>
										<AccordionSummary
											expandIcon={<ExpandMoreIcon />}
											aria-controls="panel1a-content"
											id="panel1a-header">
											<Typography className={classes.heading}>
												Level 3 -{" "}
												{` ( ${i.country} - ${i.grade} - ${i.tech} ) `}
											</Typography>
										</AccordionSummary>
										<AccordionDetails className={classes.details}>
											{i.links3
												? i.links3.map((l1, index) => {
														return (
															<React.Fragment key={index}>
																<Button
																	variant="contained"
																	onClick={(e) => {
																		setNewLinks([...l1.link])
																		setM1Style({ display: "none" })
																		setM2Style({ display: "flex" })
																	}}
																	className={classes.btnStyle}
																	color="primary">
																	Session-{index + 1}
																</Button>
															</React.Fragment>
														)
												  })
												: "Not available"}
										</AccordionDetails>
									</Accordion>

									<br />
									<br />
								</div>
							)
						})}
					</>
				)}
				{
					<div className="main-2" style={m2Style}>
						<div
							className="back-btn"
							onClick={() => {
								setM2Style({ display: "none" })
								setM1Style({ display: "flex" })
							}}>
							<i className="ri-arrow-left-circle-line"></i>
						</div>

						{newLinks.map((n, i) => {
							return (
								<React.Fragment key={i}>
									<div className="box">
										<a href={n} target="_blank" rel="noopener noreferrer">
											<div className="arrow">
												{i === 0 ? "Project" : i === 1 ? "One Pager" : "Slides"}
											</div>
										</a>
									</div>
								</React.Fragment>
							)
						})}
					</div>
				}
			</div>
		</>
	)
}

//Iske div ne bht takleef diya hai
//😂

export default RenderData
