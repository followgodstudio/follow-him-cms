import profile1 from './../../../../images/profile/Untitled-1.jpg';
import profile2 from './../../../../images/profile/Untitled-2.jpg';
import profile3 from './../../../../images/profile/Untitled-3.jpg';

const MediaBlog1 = ({mediaImage1}) => {
	return(
		<>
			<div className="image-bx">
				<img src={mediaImage1} alt="" className="rounded-circle mr-sm-4 mr-2 img-1" />
			</div>
		</>	
	)
}
const MediaBlog2 = ({mediaImage2}) => {
	return(
		<>
			<div className="image-bx mr-sm-4 mr-2">
				<img src={mediaImage2} alt="" className="rounded-circle img-1" />
				<span className="active"></span>
			</div>
		</>	
	)
}

const chatlistBlog = [
	{image1: <MediaBlog1  mediaImage1={profile1}  />, title: 'Olivia Rellaq', time: '25m ago',  },
	{image2: <MediaBlog2 mediaImage2={profile2} />, title: 'Roberto Charloz', time: '10m ago',  },
	{image2: <MediaBlog2 mediaImage2={profile3} />, title: 'Laura Chyan', time: '16m ago',  },
	{image2: <MediaBlog2 mediaImage2={profile1} />, title: 'Keanu Tipes', time: '27m ago',  },
	{image1: <MediaBlog1  mediaImage1={profile3}  />, title: 'Laura Rellaq', time: '18m ago',  },
	{image1: <MediaBlog1  mediaImage1={profile2}  />, title: 'thorem Belly', time: '27m ago',  },
	
];
const chatlistBlog2 = [
	{image1: <MediaBlog1  mediaImage1={profile2}  />, title: 'Olivia Rellaq', time: '25m ago',  },
	{image1: <MediaBlog1  mediaImage1={profile1}  />, title: 'Laura Rellaq', time: '18m ago',  },
	{image1: <MediaBlog1  mediaImage1={profile3}  />, title: 'thorem Belly', time: '27m ago',  },
	
];
const chatlistBlog3 = [
	{image2: <MediaBlog2 mediaImage2={profile3} />, title: 'Roberto Charloz', time: '10m ago',  },
	{image2: <MediaBlog2 mediaImage2={profile2} />, title: 'Laura Chyan', time: '16m ago',  },
	{image2: <MediaBlog2 mediaImage2={profile1} />, title: 'Keanu Tipes', time: '27m ago',  },	
];

const MessagesTabData = () => {
	return(
		<>
			
		</>
	)
}

export {chatlistBlog, chatlistBlog2, chatlistBlog3};
export default MessagesTabData;