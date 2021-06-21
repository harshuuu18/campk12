import React from "react"
import * as FaIcons from "react-icons/fa"
import * as IoIcons from "react-icons/io"
import * as RiIcons from "react-icons/ri"

export const SidebarData = [
	{
		title: "1:1",
		path: "/1-1",
		icon: <FaIcons.FaUserAlt />,
		iconClosed: <RiIcons.RiArrowDownSFill />,
		iconOpened: <RiIcons.RiArrowUpSFill />,

		subNav: [
			{
				title: "India",
				path: "/1-1/India",
				icon: <IoIcons.IoIosPaper />,
			},
			{
				title: "USA",
				path: "/1-1/USA",
				icon: <IoIcons.IoIosPaper />,
			},
		],
	},
	{
		title: "1:N",
		path: "/1-N",
		icon: <FaIcons.FaUserFriends />,
		iconClosed: <RiIcons.RiArrowDownSFill />,
		iconOpened: <RiIcons.RiArrowUpSFill />,

		subNav: [
			{
				title: "India",
				path: "/1-N/India",
				icon: <IoIcons.IoIosPaper />,
				cName: "sub-nav",
			},
		],
	},
	{
		title: "School",
		path: "/School",
		icon: <FaIcons.FaSchool />,

		iconClosed: <RiIcons.RiArrowDownSFill />,
		iconOpened: <RiIcons.RiArrowUpSFill />,

		subNav: [
			{
				title: "Bootcamps",
				path: "/School/Bootcamp",
				icon: <IoIcons.IoIosPaper />,
			},
			{
				title: "Webinar",
				path: "/School/Webinar",
				icon: <IoIcons.IoIosPaper />,
			},
			// {
			//   title: 'Middle',
			//   path: '/school/middleeast',
			//   icon: <IoIcons.IoIosPaper />
			// }
		],
	},
]
