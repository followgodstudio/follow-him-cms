import React from 'react';
import {Link} from 'react-router-dom';
import {Dropdown} from 'react-bootstrap';
import project1 from './../../../../images/projects/Untitled-1.jpg';
import project2 from './../../../../images/projects/Untitled-2.jpg';
import project3 from './../../../../images/projects/Untitled-3.jpg';
import project4 from './../../../../images/projects/Untitled-4.jpg';
import project5 from './../../../../images/projects/Untitled-5.jpg';
import project6 from './../../../../images/projects/Untitled-6.jpg';
import project7 from './../../../../images/projects/Untitled-7.jpg';
import project8 from './../../../../images/projects/Untitled-8.jpg';
import project9 from './../../../../images/projects/Untitled-9.jpg';
import project10 from './../../../../images/projects/Untitled-10.jpg';

//Grid  

import img1 from './../../../../images/big/img1.jpg';
import img2 from './../../../../images/big/img2.jpg';
import img3 from './../../../../images/big/img3.jpg';
import img4 from './../../../../images/big/img4.jpg';
import img5 from './../../../../images/big/img5.jpg';
import img6 from './../../../../images/big/img6.jpg';
import img7 from './../../../../images/big/img7.jpg';
import img8 from './../../../../images/big/img8.jpg';

const PendingBlog = () =>{
	return(
		<Link to={"#"} className="btn btn-warning light status-btn">PENDING</Link>
	)
}
const ProgresBlog = () =>{
	return(
		<Link to={"#"} className="btn btn-info light status-btn">ON PROGRESS</Link>
	)
}
const CloseBlog = () =>{
	return(
		<Link to={"#"} className="btn btn-danger light status-btn">CLOSED</Link>
	)
}

const GridProcess = () =>{
	return(
		<span className="badge badge-info">Progress</span>
	)
}
const GridPending = () =>{
	return(
		<span className="badge badge-warning">Pending</span>
	)
}
const GridClosed = () =>{
	return(
		<span className="badge badge-danger">Closed</span>
	)
}

const projectInfo = [
	{
		id: '#P-000441426', title1: 'Build Branding Persona for Etza.id', title2: 'Kevin Sigh', 
		title3: 'Yuri Hanako', image1: project3 , image2: project4 , status:  <ProgresBlog />,
	},
	{
		id: '#P-000441427', title1: 'Reduce Website Page Size Omah', title2: 'Endge Aes', 
		title3: 'Peter Parkur', image1: project5, image2:project6 , status:  <CloseBlog />,
	},
	{	
		id: '#P-000441428', title1: 'Manage SEO for Eclan Company P..', title2: 'Angela Moss', 
		title3: 'Olivia Jonson', image1: project7, image2: project8 , status:  <ProgresBlog />,
	},
	{	
		id: '#P-000441429', title1: 'Redesign Fasto Mobile App', title2: 'Tiffany', 
		title3: 'Bella Sirait', image1: project9, image2: project10 , status:  <PendingBlog />,
	},
	{	
		id: '#P-000441430', title1: 'Redesign Kripton Mobile App', title2: 'Alex Noer', 
		title3: 'Yoast Esec', image1: project1, image2: project2, status:  <PendingBlog />,
	},
	{
		id: '#P-000441431', title1: 'Build Branding Persona for Etza.id', title2: 'Kevin Sigh', 
		title3: 'Yuri Hanako', image1: project3 , image2: project4 , status:  <ProgresBlog />,
	},
	{
		id: '#P-000441432', title1: 'Reduce Website Page Size Omah', title2: 'Endge Aes', 
		title3: 'Peter Parkur', image1: project5, image2:project6 , status:  <CloseBlog />,
	},
	{	
		id: '#P-000441433', title1: 'Manage SEO for Eclan Company P..', title2: 'Angela Moss', 
		title3: 'Olivia Jonson', image1: project7, image2: project8 , status:  <ProgresBlog />,
	},
];
const projectInfo2 = [
	{
		id: '#P-000441426', title1: 'Build Branding Persona for Etza.id', title2: 'Kevin Sigh', 
		title3: 'Yuri Hanako', image1: project3 , image2: project4 , status:  <ProgresBlog />,
	},
	{
		id: '#P-000441428', title1: 'Manage SEO for Eclan Company P..', title2: 'Angela Moss', 
		title3: 'Olivia Jonson', image1: project7, image2: project8 , status:  <ProgresBlog />,
	},
	{
		id: '#P-000441431', title1: 'Build Branding Persona for Etza.id', title2: 'Kevin Sigh', 
		title3: 'Yuri Hanako', image1: project3 , image2: project4 , status:  <ProgresBlog />,
	},
	{	
		id: '#P-000441433', title1: 'Manage SEO for Eclan Company P..', title2: 'Angela Moss', 
		title3: 'Olivia Jonson', image1: project7, image2: project8 , status:  <ProgresBlog />,
	},
	
];
const projectInfo3 = [
	{	
		id: '#P-000441429', title1: 'Redesign Kripton Mobile App', title2: 'Alex Noer', 
		title3: 'Yoast Esec', image1: project1, image2: project2, status:  <PendingBlog />,
	},
	{	
		id: '#P-000441430', title1: 'Redesign Fasto Mobile App', title2: 'Tiffany', 
		title3: 'Bella Sirait', image1: project9, image2: project10 , status:  <PendingBlog />,
	},
];
const projectInfo4 = [
	{id: '#P-000441427', title1: 'Reduce Website Page Size Omah', title2: 'Endge Aes', title3: 'Peter Parkur', image1: project5, image2: project6 , status:  <CloseBlog />,},
	{id: '#P-000441432', title1: 'Reduce Website Page Size Omah', title2: 'Endge Aes', title3: 'Peter Parkur', image1: project5, image2: project6 , status:  <CloseBlog />,},
	
];


const projectInfo5 = [
	{id: '#P-000441425', title: 'Redesign Kripton Mobile App', imageblog: img1, result: <GridProcess />},
	{id: '#P-000441426', title: 'Build Branding Persona for Etza.id', imageblog: img2, result: <GridClosed />},
	{id: '#P-000441427', title: 'Reduce Website Page Size Fasto', imageblog: img3, result: <GridProcess />},
	{id: '#P-000441428', title: 'Manage SEO for Eclan Company P..', imageblog: img4, result: <GridPending />},
	{id: '#P-000441429', title: 'Redesign Fasto Mobile App', imageblog: img5, result: <GridClosed />},
	{id: '#P-000441430', title: 'Build Branding Persona for Etza.id', imageblog: img6, result: <GridProcess />},
	{id: '#P-000441431', title: 'Redesign Mophy Mobile App', imageblog: img7, result: <GridPending />},
	{id: '#P-000441432', title: 'Reduce Website Page Size Zenix', imageblog: img8, result: <GridProcess />},
];
const projectInfo6 = [
	{id: '#P-000441425', title: 'Redesign Kripton Mobile App', imageblog: img1, result: <GridProcess />},
	{id: '#P-000441427', title: 'Reduce Website Page Size Fasto', imageblog: img3, result: <GridProcess />},
	{id: '#P-000441430', title: 'Build Branding Persona for Etza.id', imageblog: img6, result: <GridProcess />},
	{id: '#P-000441432', title: 'Reduce Website Page Size Zenix', imageblog: img8, result: <GridProcess />},
];
const projectInfo7 = [
	{id: '#P-000441426', title: 'Build Branding Persona for Etza.id', imageblog: img2, result: <GridPending />},
	{id: '#P-000441431', title: 'Redesign Mophy Mobile App', imageblog: img7, result: <GridPending />},
];
const projectInfo8 = [
	{id: '#P-000441426', title: 'Build Branding Persona for Etza.id', imageblog: img2, result: <GridClosed />},
	{id: '#P-000441429', title: 'Redesign Fasto Mobile App', imageblog: img5, result: <GridClosed />},
];

const TabData = () =>{
	return(
		<>
		</>
	)
}



  
function DropdownBlog(){
	return(
		<>
			<Dropdown>
				<Dropdown.Toggle variant="" as="div" className="i-false">	
					<Link to={"#"} data-toggle="dropdown" aria-expanded="false">
						<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path d="M12 13C12.5523 13 13 12.5523 13 12C13 11.4477 12.5523 11 12 11C11.4477 11 11 11.4477 11 12C11 12.5523 11.4477 13 12 13Z" stroke="#575757" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
							<path d="M12 6C12.5523 6 13 5.55228 13 5C13 4.44772 12.5523 4 12 4C11.4477 4 11 4.44772 11 5C11 5.55228 11.4477 6 12 6Z" stroke="#575757" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
							<path d="M12 20C12.5523 20 13 19.5523 13 19C13 18.4477 12.5523 18 12 18C11.4477 18 11 18.4477 11 19C11 19.5523 11.4477 20 12 20Z" stroke="#575757" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
						</svg>
					</Link>
				</Dropdown.Toggle>	
				<Dropdown.Menu  className="dropdown-menu-left">
					<Dropdown.Item >Edit </Dropdown.Item>		
					<Dropdown.Item >Delete </Dropdown.Item>
				</Dropdown.Menu>
			</Dropdown>
		</>
	)
}
export {projectInfo, projectInfo2, projectInfo3, projectInfo4, 
projectInfo5, projectInfo6, projectInfo7, projectInfo8, DropdownBlog};
export default TabData;