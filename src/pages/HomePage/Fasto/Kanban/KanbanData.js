import React from 'react';
import {Link} from 'react-router-dom';
import {Dropdown} from 'react-bootstrap';

import profile4 from './../../../../images/profile/Untitled-4.jpg';
import profile5 from './../../../../images/profile/Untitled-5.jpg';
import profile6 from './../../../../images/profile/Untitled-6.jpg';

function ColumnHeader1(){
	return(
		<>
			<div className="sub-card bg-secondary align-items-center d-flex text-white">
				<div className="mr-auto pr-2">
					<h4 className="fs-20 mb-0 font-w600 text-white">To-Do List</h4>
					<span className="fs-14 font-w200 op6">Lorem ipsum dolor sit amet</span>
				</div>
				<DropdownBox />
			</div>
		</>
	)
}
function ColumnHeader2(){
	return(
		<>
			<div className="sub-card bg-warning align-items-center d-flex text-white">
				<div className="mr-auto pr-2">
					<h4 className="fs-20 mb-0 font-w600 text-white">On Progress </h4>
					<span className="fs-14 font-w200 op6">Lorem ipsum dolor sit amet</span>
				</div>
				<DropdownBox />
			</div>
		</>		
	)
}
function ColumnHeader3(){
	return(
		<>
			<div className="sub-card bg-info align-items-center d-flex text-white">
				<div className="mr-auto pr-2">
					<h4 className="fs-20 mb-0 font-w600 text-white">Done</h4>
					<span className="fs-14 font-w200 op6">Lorem ipsum dolor sit amet</span>
				</div>
				<DropdownBox />
			</div>
		</>		
	)
}
function ColumnHeader4(){
	return(
		<>
			<div className="sub-card bg-primary align-items-center d-flex text-white">
				<div className="mr-auto pr-2">
					<h4 className="fs-20 mb-0 font-w600 text-white">Revised </h4>
					<span className="fs-14 font-w200 op6">Lorem ipsum dolor sit amet</span>
				</div>
				<DropdownBox />
			</div>
		</>		
	)
}


function SubCard1(){
	return(
		<>
			<div className="sub-card draggable-handle draggable">
				<span className="text-warning sub-title">Graphic Deisgner</span>
				<p className="font-w600"><Link to={"./post-details"} className="text-black">Build Database Design for Fasto Admin v2</Link></p>
				<div className="row justify-content-between align-items-center">
					<div className="col-6">
						<span className="fs-14">Aug 4, 2021</span>
					</div>
					<ul className="users col-6">
						<li><img src={profile4} alt="" /></li>
						<li><img src={profile5} alt="" /></li>
						<li><img src={profile6} alt="" /></li>
					</ul>
				</div>
			</div>
		</>
	)
}

function SubCard2(){
	return(
		<>
			<div className="sub-card draggable-handle draggable">
				<span className="text-info sub-title">Software Engineer</span>
				<p className="font-w600"><Link to={"./post-details"} className="text-black">Annual Meeting With Marketing Team</Link></p>
				<div className="row justify-content-between align-items-center">
					<div className="col-6">
						<span className="fs-14">Aug 4, 2021</span>
					</div>
					<div className="add-people">
						<Link to={"#"}>+Assign People</Link>
					</div>
				</div>
			</div>
		</>
	)
}
function SubCard3(){
	return(
		<>
			<div className="sub-card draggable-handle draggable">
				<span className="text-primary sub-title">Digital Marketing</span>
				<p className="font-w600"><Link to={"./post-details"} className="text-black">Visual Graphic for Presentation to Client</Link></p>
				<div className="row justify-content-between align-items-center mb-2">
					<div className="col-6">
						<span className="fs-14">Aug 4, 2021</span>
					</div>
					<ul className="users col-6">
						<li><img src={profile4} alt="" /></li>
						<li><img src={profile5} alt="" /></li>
						<li><img src={profile6} alt="" /></li>
					</ul>
				</div>
				<span className="text-black font-w500 fs-14"><i className="fa fa-comment-o mr-2"></i>2 Comment</span>
			</div>
		</>
	)
}
function SubCard4(){
	return(
		<>
			<div className="sub-card draggable-handle draggable">
				<span className="text-primary sub-title">Database Engineer</span>
				<p className="font-w600"><Link to={"./post-details"} className="text-black">Visual Graphic for Presentation to Client</Link></p>
				<div className="row justify-content-between align-items-center mb-2">
					<div className="col-6">
						<span className="fs-14">Aug 4, 2021</span>
					</div>
					<ul className="users col-6">
						<li><img src={profile4} alt="" /></li>
						<li><img src={profile5} alt="" /></li>
						<li><img src={profile6} alt="" /></li>
						
					</ul>
				</div>
				<span className="text-black font-w500 fs-14"><i className="fa fa-comment-o mr-2"></i>2 Comment</span>
				<span className="ml-2 text-black font-w500 fs-14"><i className="fa fa-paperclip mr-2"></i>1 Attached file</span>
			</div>
		</>
	)
}
function DropdownBox(){
	return(
		<Dropdown>
			<Dropdown.Toggle variant="" as="div" className="i-false" >	
				<Link to={"#"} data-toggle="dropdown" aria-expanded="false">
					<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path d="M12 13C12.5523 13 13 12.5523 13 12C13 11.4477 12.5523 11 12 11C11.4477 11 11 11.4477 11 12C11 12.5523 11.4477 13 12 13Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
						<path d="M12 6C12.5523 6 13 5.55228 13 5C13 4.44772 12.5523 4 12 4C11.4477 4 11 4.44772 11 5C11 5.55228 11.4477 6 12 6Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
						<path d="M12 20C12.5523 20 13 19.5523 13 19C13 18.4477 12.5523 18 12 18C11.4477 18 11 18.4477 11 19C11 19.5523 11.4477 20 12 20Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
					</svg>
				</Link>
			</Dropdown.Toggle>	
			<Dropdown.Menu  className="dropdown-menu-right"  menuAlign="right">
				<Dropdown.Item >Edit </Dropdown.Item>		
				<Dropdown.Item >Delete </Dropdown.Item>
			</Dropdown.Menu>	
		</Dropdown>
	)
}
const board = {
  columns: [
    {
      id: 1,
	//title: "Q&A",	
      title: <ColumnHeader1/>,
      cards: [
        {
          id: 1,
          title: <SubCard1 />,
		  //description: "Card content"
        },
        {
          id: 2,
          title: <SubCard2 />,
          
        },
        {
          id: 3,
          title: <SubCard2 />,
          
        },
		{
          id: 4,
          title: <SubCard1 />,
          
        },
		{
          id: 5,
          title: <SubCard1 />,
          
        },
      ]
    },
    {
      id: 2,
      title: <ColumnHeader2 />,
      cards: [
        {
          id: 6,
          title: <SubCard3/>,
        },
		{
          id: 7,
          title: <SubCard3/>,
        },
      ]
    },
    {
      id: 3,
      
      title: <ColumnHeader3 />,
      cards: [
        {
          id: 8,
          title: <SubCard1 />,
        },
        {
          id: 9,
          title: <SubCard4 />,
          
        },
		{
          id: 10,
          title: <SubCard1 />,
        },
      ]
    },
    /* {
      id: 4,
      title: <ColumnHeader4 />,
      cards: [
        
        
      ]
    }, */
	{
      id: 4,
      //title: "Q&A",
      title: <ColumnHeader1 />,
      cards: [
        {
          id: 14,
          title: <SubCard3 />,
        },
        {
          id: 15,
          title: <SubCard3 />,
          
        }
      ]
    },	
  ]
};

const KanbanData = () =>{
	return(
		<>
		</>
	)
} 

export { ColumnHeader1, ColumnHeader2, ColumnHeader3, ColumnHeader4,
	SubCard1, SubCard2, SubCard3, SubCard4, board };
export default  KanbanData;