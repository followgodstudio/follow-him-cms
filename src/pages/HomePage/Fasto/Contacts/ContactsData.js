import React, { useState } from 'react';
import {Link} from 'react-router-dom';
import PerfectScrollbar from "react-perfect-scrollbar";
import {Dropdown} from 'react-bootstrap';

//Images
import contact12 from './../../../../images/contacts/Untitled-12.jpg';
import contact11 from './../../../../images/contacts/Untitled-11.jpg';
import contact10 from './../../../../images/contacts/Untitled-10.jpg';
import contact9 from './../../../../images/contacts/Untitled-9.jpg';
import contact8 from './../../../../images/contacts/Untitled-8.jpg';
import contact7 from './../../../../images/contacts/Untitled-7.jpg';

const ContactsData = () => {
	const [data, setData] = useState([
		{ image: contact12, username: 'Nindy Leeacovic', occupation: 'Zero Two Studios'  },
		{ image: contact11, username: 'Ivankov Shee', occupation: 'Beep Beep Inc'  },
		{ image: contact10, username: 'Henry Charlotte', occupation: 'UI Designer'  },
		{ image: contact9 , username: 'Geovanny', occupation: 'UI Designer'  },
		{ image: contact8 , username: 'Franklin Jr.', occupation: 'Zero Two Studios'  },
		{ image: contact7 , username: 'Engeline O’conner.', occupation: 'Beep Beep Inc'  }
	 ]);
  
    const [refresh, setRefresh] = useState(false);
    const onClick = () => {
		setRefresh(true);
		setTimeout(() => {
		  setData([
			...data,
			data[Math.floor(Math.random() * Math.floor(data.length - 1))],
		  ]);
		  setRefresh(false);
		}, 1000);
	};
	
	return(
		<>
			<PerfectScrollbar className="row dz-scroll loadmore-content" id="pendingListContent">
				<div className="items items-header-section">
				</div>
				{data.map((item,index)=>(	
					<div className="col-xl-3 col-xxl-4 col-lg-4 col-md-6 col-sm-6 items" key={index}>
						<div className="card contact-bx item-content">
							<div className="card-header border-0">
								<div className="action-dropdown">
									<Dropdown className="">
										<Dropdown.Toggle variant="" as="div" className="i-false">
											<Link to={"#"} data-toggle="dropdown" aria-expanded="false">
												<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
													<path d="M12 13C12.5523 13 13 12.5523 13 12C13 11.4477 12.5523 11 12 11C11.4477 11 11 11.4477 11 12C11 12.5523 11.4477 13 12 13Z" stroke="#575757" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
													<path d="M12 6C12.5523 6 13 5.55228 13 5C13 4.44772 12.5523 4 12 4C11.4477 4 11 4.44772 11 5C11 5.55228 11.4477 6 12 6Z" stroke="#575757" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
													<path d="M12 20C12.5523 20 13 19.5523 13 19C13 18.4477 12.5523 18 12 18C11.4477 18 11 18.4477 11 19C11 19.5523 11.4477 20 12 20Z" stroke="#575757" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
												</svg>
											</Link>
										</Dropdown.Toggle>	
										<Dropdown.Menu className="dropdown-menu-right" alignRight={true}>
											<Dropdown.Item className="edit">Edit</Dropdown.Item>
											<Dropdown.Item className="delete">Delete</Dropdown.Item>
										</Dropdown.Menu>
									</Dropdown>
								</div>
							</div>
							<div className="card-body user-profile">
								<div className="image-bx">
									<img src={item.image}  alt="" className="rounded-circle" />
									<span className="active"></span>
								</div>
								<div className="media-body user-meta-info">
									<h6 className="fs-20 font-w500 my-1"><Link to={"./app-profile"} className="text-black user-name" data-name="Engeline O’conner">{item.username}</Link></h6>
									<p className="fs-14 mb-3 user-work" data-occupation="UI Designer">{item.occupation}</p>
									<ul>
										<li><Link to={"#"}><i className="fa fa-phone" aria-hidden="true"></i></Link></li>
										<li><Link to={"./messages"}><i className="las la-sms"></i></Link></li>
										<li><Link to={"#"}><i className="fa fa-video-camera" aria-hidden="true"></i></Link></li>
									</ul>
								</div>
							</div>
						</div>
					</div>
				))}	
						
			</PerfectScrollbar>
			<div className="row">
				<div className="col-xl-12 d-flex justify-content-center">
					<Link to={"#"} className="btn btn-outline-primary dz-load-more"  onClick={() => onClick()}>
						Load More<span>&#187;</span>{" "}
						{refresh && <i className="fa fa-refresh"></i>}
					</Link>
				</div>
			</div>
		</>
	)
}	
export default ContactsData;	