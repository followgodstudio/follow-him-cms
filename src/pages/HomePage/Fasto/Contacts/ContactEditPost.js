import { useEffect, useState } from 'react';
import { connect, useDispatch } from 'react-redux';
import { updatePostAction } from '../../../store/actions/PostActions';
import { getPost } from '../../../store/selectors/PostSelectors';
import { Row, Col, Card, Table, Badge, } from "react-bootstrap";

function ContactEditPost(props) {
    const [post, setPost] = useState(props.post);
	
    const dispatch = useDispatch();
	console.log(post);
    useEffect(() => {
        setPost(props.post);
    }, [props.post]);

    function onUpdatePost(e) {
        e.preventDefault();
        dispatch(updatePostAction(post, props.history));
    }

    return (
        <>
            
			<form onSubmit={onUpdatePost}>
				<Row>
					<Col lg={12}>
						<Card>
							<Card.Header>
								<Card.Title>Edit Post</Card.Title>
							</Card.Header>
							<Card.Body>
								<Table responsive>
									<thead>
										<tr>
											<th>#</th>
											<th>Name</th>
											<th>Last Name</th>
											<th>Designation</th>
											<th>Location</th>
										</tr>
									</thead>
									<tbody>	
										<tr>
											<td>
												<input
													type='text'
													className='border border-gray-500 form-control-lg '
													value={post.number}
													onChange={(e) => setPost({ ...post, number: e.target.value,})}
												/>
											</td>
											<td>
												<input
													type='text'
													className='border border-gray-500 form-control-lg '
													value={post.title}
													onChange={(e) => setPost({ ...post, title: e.target.value,})}
												/>
											</td>
											<td>
												<input
													type='text'
													className='border border-gray-500 form-control-lg '
													value={post.lastname}
													onChange={(e) => setPost({ ...post, lastname: e.target.value,})}
												/>
											</td>
											<td>
												<input
													type='text'
													className='border border-gray-500 form-control-lg '
													value={post.description}
													onChange={(e) => setPost({ ...post, description: e.target.value,})}
												/>
											</td>
											<td>
												<input
													type='text'
													className='border border-gray-500 form-control-lg '
													value={post.location}
													onChange={(e) => setPost({ ...post, location: e.target.value,})}
												/>
											</td>
											<td>
												<button type='submit' className='btn btn-dark light btn-md'>Edit Post</button>
											</td>
										</tr>	
									</tbody>	
								</Table>
							</Card.Body>
						</Card>		
					</Col>
				</Row>
			</form>
           
        </>
    );
}

const makeStateToProps = () => {
    const post = getPost();
	
    return (state, props) => {
        return {
            post: post(state, props.match.params.id),
        };
    };
};

export default connect(makeStateToProps)(ContactEditPost);
