import React, { Component } from "react";
import {Link} from 'react-router-dom';
import profile1 from './../../../../images/profile/Untitled-1.jpg';
import profile2 from './../../../../images/profile/Untitled-2.jpg';
import profile3 from './../../../../images/profile/Untitled-3.jpg';
import { Dropdown} from 'react-bootstrap';
import PerfectScrollbar from "react-perfect-scrollbar";

// we are using class component here bcoz functional components cant use react life cycle hooks such as componentDidUpdate
export default class ChatWindow extends Component {
  // if this component received new props, move scroll chat window
  // to view latest message
  componentDidUpdate = (prevProps, prevState) => {
    // if component received new props
    if (this.props.messagesList !== prevProps.messagesList) {
      // call ref and scroll
      this.messageListEnd.scrollIntoView({ behavior: "smooth" });
    }
  };

  render() {
    // messagesList the got the messages stored in state
    // destructuring
    const { messagesList } = this.props;
    return (
      <div className="chat-window">
        <div className="box">
			<div className="inner" id="ChatWindowInner">	
				<div className="media mb-4  justify-content-start align-items-start">
					<div className="image-bx mr-sm-4 mr-2">
						<img src={profile3} alt="" className="rounded-circle img-1" />
						<span className="active"></span>
					</div>
					<div className="message-received">
						<p className="mb-1">
							Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptat
						</p>
					</div>
				</div>
				<div className="media mb-4 justify-content-end align-items-end">
					<div className="message-sent">
						<p className="mb-1">
							sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet
						</p>
					</div>
					<div className="image-bx ml-sm-4 ml-2 mb-4">
						<img src={profile2} alt="" className="rounded-circle img-1" />
						<span className="active"></span>
					</div>
				</div>	
				<div className="media mb-4  justify-content-end align-items-end">
					<div className="message-sent">
						<p className="mb-1">
							nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea
						</p>
					</div>
					<div className="image-bx ml-sm-4 ml-2 mb-4">
						<img src={profile2} alt="" className="rounded-circle img-1" />
						<span className="active"></span>
					</div>
				</div>
				<div className="media justify-content-start align-items-start">
					<div className="image-bx mr-sm-4 mr-2">
						<img src={profile1}alt="" className="rounded-circle img-1" />
						<span className="active"></span>
					</div>
					<div className="message-received">
						<p className="mb-1">
							Hey, check my design update last night. Tell me what you think and if that is OK. I hear client said they want to change the layout concept
						</p>
					</div>
				</div>
				{Array.isArray(messagesList) && messagesList.map((oneMessage, index) => (
					<div className="media mb-4  justify-content-end align-items-end">
						<div className="message-sent">
							<p className="mb-1 message" key={index} >
								{oneMessage.text}
							</p>
						</div>
						<div className="image-bx ml-sm-4 ml-2 mb-4">
							<img src={profile2} alt="" className="rounded-circle img-1" />
							<span className="active"></span>
						</div>
					</div>	
				))}
            {/* define ref and call it if component is updated */}
            <div
              className="reference"
              ref={node => (this.messageListEnd = node)}
            />
          </div>
        </div>
      </div>
    );
  }
}