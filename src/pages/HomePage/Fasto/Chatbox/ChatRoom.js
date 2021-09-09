import React, { Component } from "react";
import ChatWindow from "./ChatWindow";
import ChatComposer from "./ChatComposer";
import {Link} from 'react-router-dom';
import {Dropdown} from 'react-bootstrap';
import PerfectScrollbar from "react-perfect-scrollbar";
import pic1 from './../../../../images/profile/Untitled-2.jpg';

class ChatRoom extends Component {
	constructor(props) {
		super(props);
		this.state = {
			messages: [
				//{ text: "Ok, thank you have a good day" },
				//{ text: "Ok, thank you have a good day" },
				{ text: "Ok, thank you have a good day" },
			]
		};
	}

  // if new message was submitted from child component // process
	submitted = getNewMessage => {
		
		
		
		if (getNewMessage != "") {
		  // match the state format
			const newMessage = { text: getNewMessage };
			// merge new message in copy of state stored messages
			let updatedMessages = [...this.state.messages, newMessage];
			// update state
			this.setState({
			  messages: updatedMessages
			});
			
			setTimeout(function(){
				var element = document.getElementById("chartBox");
				element.scrollTop = element.scrollHeight - 100;	
			}, 50);
			
		}
		
		
	};

	render() {
		
		
		return (
			
				<>
					<div className="card custom-chatbox message-bx chat-box">
						<div className="card-header">
							<div><h5 className="text-black font-w500 mb-sm-1 mb-0 title-nm">Roberto Charloz</h5></div>
							<div className="d-flex align-items-center">	
								<span className="mr-2">Last seen 4:23 AM</span>
								<Dropdown className="ml-2">
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
										<Dropdown.Item>Edit</Dropdown.Item>
										<Dropdown.Item>Delete</Dropdown.Item>
									</Dropdown.Menu>
								</Dropdown>
							</div>
						</div>
						<PerfectScrollbar className="card-body chat-box-area dz-scroll" id="chartBox" >
						{/* send stored messages as props to chat window */}
							<ChatWindow messagesList={this.state.messages} />
							{/* send submitted props to chat composer */}
						</PerfectScrollbar>
						<div className="card-footer border-0">
							<ChatComposer submitted={this.submitted} />
						</div>
					</div>	
										
				</>
				
		);
	}
}

export default  ChatRoom;