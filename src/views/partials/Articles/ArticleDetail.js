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
                          <Row className="d-flex justify-content-center">
                            <div style={{ marginLeft: "auto" }} >
                              <Button className="btn-primary" onClick={e => e.preventDefault()}> Edit </Button>
                              <Button className="btn-danger" onClick={e => e.preventDefault()}> Delete </Button>
                              <Button className="btn-success" onClick={e => {e.preventDefault(); this.props.history.push("/admin" + ROUTES.ARTICLE_ADD);}}> +Add article</Button>
                            </div>
                            { loading && <div> Loading .. </div>}
                            { !loading &&
                            <div>
                              <div>
                                <h2 className="mb-2">{article.title}</h2>
                              </div>
                              {article.content.map(paragraph =>
                                  <div key = {paragraph.index}>
                                    <h4> {paragraph.subtitle} </h4>
                                    <p> {paragraph.body} </p>
                                  </div>
                              )}

                            </div>}


                            {/*{loading && (*/}
                            {/*    <div style={{ color: `green` }}>*/}
                            {/*      loading book detail for book ID: <strong>{articleId}</strong>*/}
                            {/*    </div>*/}
                            {/*)}*/}
                            {/*{error && (*/}
                            {/*    <div style={{ color: `red` }}>*/}
                            {/*      {error.toString()}*/}
                            {/*    </div>*/}
                            {/*)}*/}
                            {/*{article ? article.title : "article.id"}*/}

                            {/*<p>*/}

                            {/*</p>*/}
                            {/*<p>*/}

                            {/*</p>*/}
                            {/*<p>*/}

                            {/*</p>*/}
                            {/*<Button style={{ marginLeft: "auto" }} className="btn-success" onClick={this.goToDetail}> +Add article</Button>*/}
                          </Row>
                        </CardHeader>
                        <CardBody>
                          {/*{console.log(this.state.articles)}*/}
                          {/*<Row className=" icon-examples">*/}
                          {/*  {this.state.articles.map(article =>*/}
                          {/*      <Col key={article.id} lg="3" md="6" sm="12">*/}
                          {/*        <Card onClick={() => this.goToDetail(article)}>*/}
                          {/*          <CardImg top width="100%" src={article.image_url} alt="Card image cap" />*/}
                          {/*          <CardBody>*/}
                          {/*            <CardTitle className="list-group-heading">{article.title ?? "Title is Missing"}</CardTitle>*/}
                          {/*            /!*<CardSubtitle>{article.description ?? ""}</CardSubtitle>*!/*/}
                          {/*            <CardText className="text-sm">{article.description ?? ""}</CardText>*/}
                          {/*            <Button className="btn-primary" onClick={e => e.preventDefault()}>Edit</Button>*/}
                          {/*            <Button className="btn-outline-danger" onClick={e => e.preventDefault()}>Delete</Button>*/}
                          {/*          </CardBody>*/}
                          {/*        </Card>*/}
                          {/*      </Col>*/}
                          {/*  )}*/}

                          {/*  /!*<Col lg="3" md="6" sm="12">*!/*/}
                          {/*  /!*    <Card>*!/*/}
                          {/*  /!*      <CardImg top width="100%" src="/assets/318x180.svg" alt="Card image cap" />*!/*/}
                          {/*  /!*      <CardBody>*!/*/}
                          {/*  /!*        <CardTitle>Card title</CardTitle>*!/*/}
                          {/*  /!*        <CardSubtitle>Card subtitle</CardSubtitle>*!/*/}
                          {/*  /!*        <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>*!/*/}
                          {/*  /!*        <Button onClick={this.fetchArticlesByAuthUser(authUser)}>Button</Button>*!/*/}
                          {/*  /!*      </CardBody>*!/*/}
                          {/*  /!*    </Card>*!/*/}
                          {/*  /!*  </Col>*!/*/}
                          {/*  /!*  <Col lg="3" md="6" sm="12">*!/*/}
                          {/*  /!*    <Card>*!/*/}
                          {/*  /!*      <CardImg top width="100%" src="/assets/318x180.svg" alt="Card image cap" />*!/*/}
                          {/*  /!*      <CardBody>*!/*/}
                          {/*  /!*        <CardTitle>Card title</CardTitle>*!/*/}
                          {/*  /!*        <CardSubtitle>Card subtitle</CardSubtitle>*!/*/}
                          {/*  /!*        <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>*!/*/}
                          {/*  /!*        <Button>Button</Button>*!/*/}
                          {/*  /!*      </CardBody>*!/*/}
                          {/*  /!*    </Card>*!/*/}
                          {/*  /!*  </Col>*!/*/}
                          {/*  /!*  <Col lg="3" md="6" sm="12">*!/*/}
                          {/*  /!*    <Card>*!/*/}
                          {/*  /!*      <CardImg top width="100%" src="/assets/318x180.svg" alt="Card image cap" />*!/*/}
                          {/*  /!*      <CardBody>*!/*/}
                          {/*  /!*        <CardTitle>Card title</CardTitle>*!/*/}
                          {/*  /!*        <CardSubtitle>Card subtitle</CardSubtitle>*!/*/}
                          {/*  /!*        <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>*!/*/}
                          {/*  /!*        <Button>Button</Button>*!/*/}
                          {/*  /!*      </CardBody>*!/*/}
                          {/*  /!*    </Card>*!/*/}
                          {/*  /!*  </Col>*!/*/}
                          {/*  /!*</Row>*!/*/}
                          {/*  /!*<Row className=" icon-examples">*!/*/}
                          {/*  /!*  <Col lg="3" md="6" sm="12">*!/*/}
                          {/*  /!*    <Card>*!/*/}
                          {/*  /!*      <CardImg top width="100%" src="/assets/318x180.svg" alt="Card image cap" />*!/*/}
                          {/*  /!*      <CardBody>*!/*/}
                          {/*  /!*        <CardTitle>{authUser.displayName}</CardTitle>*!/*/}
                          {/*  /!*        <CardSubtitle>Card subtitle</CardSubtitle>*!/*/}
                          {/*  /!*        <CardText>Some quick example text to build on the card title and make up the bulk of the card's content. Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>*!/*/}
                          {/*  /!*        <Button onClick={this.fetchArticlesByAuthUser(authUser)}>Edit</Button>*!/*/}
                          {/*  /!*      </CardBody>*!/*/}
                          {/*  /!*    </Card>*!/*/}
                          {/*  /!*  </Col>*!/*/}
                          {/*  /!*  <Col lg="3" md="6" sm="12">*!/*/}
                          {/*  /!*    <Card>*!/*/}
                          {/*  /!*      <CardImg top width="100%" src="/assets/318x180.svg" alt="Card image cap" />*!/*/}
                          {/*  /!*      <CardBody>*!/*/}
                          {/*  /!*        <CardTitle>Card title</CardTitle>*!/*/}
                          {/*  /!*        <CardSubtitle>Card subtitle</CardSubtitle>*!/*/}
                          {/*  /!*        <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>*!/*/}
                          {/*  /!*        <Button onClick={this.fetchArticlesByAuthUser(authUser)}>Button</Button>*!/*/}
                          {/*  /!*      </CardBody>*!/*/}
                          {/*  /!*    </Card>*!/*/}
                          {/*  /!*  </Col>*!/*/}
                          {/*  /!*  <Col lg="3" md="6" sm="12">*!/*/}
                          {/*  /!*    <Card>*!/*/}
                          {/*  /!*      <CardImg top width="100%" src="/assets/318x180.svg" alt="Card image cap" />*!/*/}
                          {/*  /!*      <CardBody>*!/*/}
                          {/*  /!*        <CardTitle>Card title</CardTitle>*!/*/}
                          {/*  /!*        <CardSubtitle>Card subtitle</CardSubtitle>*!/*/}
                          {/*  /!*        <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>*!/*/}
                          {/*  /!*        <Button>Button</Button>*!/*/}
                          {/*  /!*      </CardBody>*!/*/}
                          {/*  /!*    </Card>*!/*/}
                          {/*  /!*  </Col>*!/*/}
                          {/*  /!*  <Col lg="3" md="6" sm="12">*!/*/}
                          {/*  /!*    <Card>*!/*/}
                          {/*  /!*      <CardImg top width="100%" src="/assets/318x180.svg" alt="Card image cap" />*!/*/}
                          {/*  /!*      <CardBody>*!/*/}
                          {/*  /!*        <CardTitle>Card title</CardTitle>*!/*/}
                          {/*  /!*        <CardSubtitle>Card subtitle</CardSubtitle>*!/*/}
                          {/*  /!*        <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>*!/*/}
                          {/*  /!*        <Button>Button</Button>*!/*/}
                          {/*  /!*      </CardBody>*!/*/}
                          {/*  /!*    </Card>*!/*/}
                          {/*  /!*  </Col>*!/*/}
                          {/*</Row>*/}
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