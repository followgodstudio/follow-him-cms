// import React, { Component } from 'react';
import React, { useState, useEffect } from 'react';
import { withFirebase } from '../../../components/Firebase';
import Header from "../../../components/Headers/Header";
import {AuthUserContext} from "../../../components/Session";
import {
  Button,
  Card,
  CardBody, CardFooter,
  CardHeader, CardImg, CardText, CardTitle,
  Col,
  Container, Pagination, PaginationItem, PaginationLink,
  Row
} from "reactstrap";
import {compose} from "recompose";
import {withRouter} from "react-router-dom";
import withAuthorization from "../../../components/Session/withAuthorization";
import * as ROUTES from "../../../routes";
import {Image} from "react-bootstrap";

const INITIAL_STATE = {
  inputTitle:"",
  inputDescription:"",
  inputAuthorName:"",
  inputAuthorIcon:"",
  inputImageUrl:"",

  email: '',
  password: '',
  isSignInSucceeded: false,
  error: null,
};

// const ArticleDetail = ({ match }) => {
class ArticleDetail extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      article: null,
      error: null,
      loading: true,
      articleId : props.match.params.articleId
    };
  }
  // const {
  //   params: { articleId, firebase },
  // } = match;
  // const [article, setArticle] = useState(null);
  // const [error, setError] = useState(false);
  // const [loading, setLoading] = useState(false);


  componentDidMount() {
    this.setState({ loading: true });
    this.fetchArticleContentById(this.state.articleId).then(doc => {
      // console.log("doc:", doc);
      this.setState({
        article: doc,
        loading: false
      });
      console.log("articleResult: ", this.state.article);
    });
  }

  fetchArticleContentById = async (articleId) => {
    let content = [];
    let article;
    let docRef = this.props.firebase.articles().doc(articleId);

    await docRef.collection("content")
      .get()
      .then(function(querySnapshot) {
        querySnapshot.forEach(doc => {
          content.push(doc.data());
        });
      });

    await docRef.get().then(function (doc) {
      if (doc.exists) {
        article = doc.data();
      } else {
        console.log("No such document!");
      }
    }).catch(function (error) {
      console.log("Error getting document:", error);
    });

    article.content = content;
    return article;
  }

  deleteArticle = e => {
    this.props.firebase.db.collection("articles").doc(this.state.articleId).delete().then(function() {
      alert("Document successfully deleted!");
    }).catch(function(error) {
      alert("Error removing document: " + error);
    });
    this.props.history.goBack();
    e.preventDefault();
  }

  goToEditDetail(articleId){
    this.props.history.push('/admin' + `/article-edit/${articleId}`);
  }

  render() {
    const { article, loading } = this.state;
    console.log("article In:", article);

    return (
        <>
          <Header />
          {/* Page content */}
          <AuthUserContext.Consumer>
            {authUser => (
                <Container className="mt--7" fluid>
                  {/* Table */}
                  <Row>
                    <div className="col">
                      <Card className="shadow">
                        <CardHeader className="border-0">
                          <Col>
                            <Row className="d-flex justify-content-center">
                              <Button className="btn-primary" onClick={e => {e.preventDefault(); this.props.history.goBack();}}> Back </Button>
                              <div style={{ marginLeft: "auto" }} >
                                <Button className="btn-primary" onClick={() => this.goToEditDetail(this.state.articleId)}> Edit </Button>
                                <Button className="btn-danger" onClick={this.deleteArticle}> Delete </Button>
                                <Button className="btn-success" onClick={e => {e.preventDefault(); this.props.history.push("/admin" + ROUTES.ARTICLE_ADD);}}> +Add article</Button>
                              </div>
                            </Row>
                          </Col>
                        </CardHeader>
                        <CardBody>
                          { loading && <div> Loading .. </div>}
                          { !loading &&
                          <Container>
                            <img style={{ objectFit: "cover" }} height="400" width="100%" src={article.image_url} alt="Card image cap" />
                            <hr />
                            <div>
                              <h1 className="mb-2">标题：{article.title}</h1>
                              <br />
                              <h3 className="mb-2">文章简介：{article.description}</h3>
                              <Col>
                              <Row>
                                <p className="mb-2">作者：
                                  {article.icon ? <Image style={{ objectFit: "cover" }} height="25" width="25" src={article.icon} roundedCircle /> : null }
                                  <span style={{marginRight: 20}} />
                                  {article.author_name}
                                </p>
                              </Row>
                              </Col>
                            </div>
                            <br />
                            <div>
                              <h3>正文:</h3>
                              {article.content.map(paragraph =>
                                  <div key = {paragraph.index}>
                                    <h4> {paragraph.subtitle} </h4>
                                    <p> {paragraph.body} </p>
                                    <hr />
                                  </div>
                              )}
                            </div>
                          </Container>}
                        </CardBody>
                        <CardFooter className="py-4">

                        </CardFooter>
                      </Card>
                    </div>
                  </Row>
                </Container>
            )}
          </AuthUserContext.Consumer>
        </>
        // <div>
        //   <h2>User ({this.props.match.params.id})</h2>
        //   {loading && <div>Loading ...</div>}
        //
        //   {user && (
        //       <div>
        //     <span>
        //       <strong>ID:</strong> {user.uid}
        //     </span>
        //         <span>
        //       <strong>E-Mail:</strong> {user.email}
        //     </span>
        //         <span>
        //       <strong>Username:</strong> {user.username}
        //     </span>
        //         <span>
        //       <button
        //           type="button"
        //           onClick={this.onSendPasswordResetEmail}
        //       >
        //         Send Password Reset
        //       </button>
        //     </span>
        //       </div>
        //   )}
        // </div>
    );
  }
}

const condition = authUser => !!authUser;

export default compose(
    withRouter,
    withFirebase,
    withAuthorization(condition),
)(ArticleDetail);

// export default withFirebase(ArticleDetail);