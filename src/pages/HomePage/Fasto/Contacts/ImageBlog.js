import React,{Component} from 'react';

import user1 from './../../../../images/contacts/user.jpg';


class ImageBlog extends Component{
	state={
		profileImg: user1,
	}
	imageHandler = (e) =>{
		const reader =  new FileReader();
		
		console.log(e.target.files[0]);
		reader.onload = () =>{
			if(reader.readyState === 2){
				this.setState({profileImg: reader.result})
			}
			console.log(reader);		
		}
		
		reader.readAsDataURL(e.target.files[0])
		
	}
	render(){
		const {profileImg} = this.state
		return(
			<>
				<div className="avatar-edit">
				{/* <img src={profileImg} alt="" id="img" className="" />  */}
					{/*<input type="file" id="imageUpload" accept=".png, .jpg, .jpeg"  />  */}
					<input type="file" name="image-upload" id="imageUpload" accept=".png, .jpg, .jpeg"  onChange={this.imageHandler}/>  					
					<label htmlFor="imageUpload" name=""  ></label>
				</div>
				<div className="avatar-preview">
					<div id="imagePreview">
						<img src={profileImg} alt="" id="img" className="" />
					</div>
				</div>
			</>
		)
	}
}
export default ImageBlog;