/*!

=========================================================
* Argon Dashboard React - v1.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/argon-dashboard-react
* Copyright 2019 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/argon-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";

import {
  Button,
  Card,
  CardHeader,
  CardBody,
  // CardDeck,
  CardText,
  CardTitle,
  // CardSubtitle,
  // CardImg,
  // NavItem,
  // NavLink,
  // Nav,
  // Progress,
  // Table,
  Container,
  Row,
  Col,
  // Media,
  // Badge,
  // UncontrolledTooltip,
  // UncontrolledDropdown,
  // DropdownToggle,
  // DropdownMenu,
  // DropdownItem,
  CardFooter,
  Pagination,
  PaginationItem,
  PaginationLink
} from "reactstrap";

import Header from "components/Headers/Header.js";
import {AuthUserContext} from "../../../components/Session";
import { withFirebase } from '../../../components/Firebase';
import {compose} from "recompose";
import withAuthorization from "../../../components/Session/withAuthorization";
import {SplitButton} from "react-bootstrap";
import * as ROUTES from "../../../routes";
import { withRouter } from "react-router-dom";
import draftToHtml from 'draftjs-to-html';

class Articles extends React.Component {
  constructor(props){
    super(props);
    this.state = { loading: true, articles:[], articlePerPage: 8};
  }

  componentDidMount() {
    this.setState({ loading: true });
    this.props.firebase.auth.currentUser.getIdTokenResult()
    .then((idTokenResult) => {
      console.log(idTokenResult)
      // Confirm the user is an Admin.
      if (!idTokenResult.claims.admin) {
        this.fetchArticlesByAuthUser(this.props.authUser).then(docs => {
          this.setState({
            articles: docs,
            loading: false,
          });
        });
      } else {
        this.fetchAllArticles().then(docs => {
          this.setState({
            articles: docs,
            loading: false
          })
        })

      }
    })
    .catch((error) => {
      console.log(error);
    });


  }

  fetchArticlesByAuthUser = async (authUser) => {
    let articleList = [];
    await this.props.firebase.db.collection("articles").where("author_uid",
        "==", authUser.uid).orderBy("created_date", "desc")
    .get()
    .then(function (querySnapshot) {
      querySnapshot.forEach(function (doc) {
        let article = doc.data();
        article.id = doc.id;
        articleList.push(article);
      });
      // console.log("articles:   " + articleList);
    })
    .catch(function (error) {
      console.log("Error getting documents: ", error);
    });
    return articleList;
  }

  fetchAllArticles = async e => {
    let articleList = [];
    await this.props.firebase.db.collection("articles").orderBy("created_date", "desc")
    .get()
    .then(function (querySnapshot) {
      querySnapshot.forEach(function (doc) {
        let article = doc.data();
        article.id = doc.id;
        articleList.push(article);
      });
      // console.log("articles:   " + articleList);
    })
    .catch(function (error) {
      console.log("Error getting documents: ", error);
    });
    return articleList;
  }

  fetchAllArticlesCount = async e => {
    let count = 0;
    await this.props.firebase.db.collection("articles")
  }

  fetchArticlesByAuthUserAndPageNum = async (authUser, pageNum) => {
    let articleList = [];
    await this.props.firebase.db.collection("articles").where("author_uid",
        "==", authUser.uid).orderBy("created_date", "desc")
    .get()
    .then(function (querySnapshot) {
      querySnapshot.forEach(function (doc) {
        let article = doc.data();
        article.id = doc.id;
        articleList.push(article);
      });
      // console.log("articles:   " + articleList);
    })
    .catch(function (error) {
      console.log("Error getting documents: ", error);
    });
    return articleList;
  }

  goToDetail(article){
    this.props.history.push('/admin' + `/article/${article.id}`);
  }

  goToEditDetail(article){
    this.props.history.push('/admin' + `/article-edit/${article.id}`);
  }

  deleteArticle=(article)=>{
    let articles = this.state.articles;
    let filtered = articles.filter(function(e, index, arr){ return e.id != article.id;});
    this.setState({articles:filtered});

    this.props.firebase.db.collection("articles").doc(article.id).delete().then(function() {
      alert("Document successfully deleted!");
    }).catch(function(error) {
      alert("Error removing document: " + error);
    });
  }

  render() {
    const { articles, loading } = this.state;

    return (
        <>
          <Header />
          {/* Page content */}
          <AuthUserContext.Consumer>
            {authUser => (
            <Container className="mt--7" fluid>
              {/* Table */}
              <Row>
                { loading && <div> Loading .. </div>}
                <div className="col">
                  <Card className="shadow">
                    <CardHeader className="border-0">
                      <Col>
                        <Row style={{ display: "flex" }}>
                          <h3 className="mb-0">Your Articles</h3>
                          <Button style={{ marginLeft: "auto" }} className="btn-success" onClick={e => {e.preventDefault(); this.props.history.push("/admin" + ROUTES.ARTICLE_ADD);}}> +Add article</Button>
                        </Row>
                      </Col>
                    </CardHeader>
                    <CardBody>
                      <Row className=" icon-examples">
                        {articles.map(article =>
                            <Col key={article.id} lg="3" sm="6">
                              <Card>
                                <div>
                                {article.image_url ? <img style={{ objectFit: "cover" }} height="300px" width="100%" src={article.image_url} alt="Card image cap" onClick={() => this.goToDetail(article)} /> : null}
                                </div>
                                <CardBody>
                                  <CardTitle className="list-group-heading" onClick={() => this.goToDetail(article)} >{article.title ?? "Title is Missing"}</CardTitle>
                                  <CardText className="text-sm" style={{lineClamp: 3}} onClick={() => this.goToDetail(article)} >{article.description ?? ""}</CardText>
                                  <Button className="btn-primary" onClick={() => this.goToEditDetail(article)}>Edit</Button>
                                  <Button className="btn-outline-danger" onClick={() => this.deleteArticle(article)}>Delete</Button>
                                </CardBody>
                              </Card>
                            </Col>
                        )}
                      </Row>
                    </CardBody>
                    <CardFooter className="py-4">
                      <nav aria-label="...">
                        <Pagination
                            className="pagination justify-content-end mb-0"
                            listClassName="justify-content-end mb-0"
                        >
                          <PaginationItem className="disabled">
                            <PaginationLink
                                href="#pablo"
                                onClick={e => e.preventDefault()}
                                tabIndex="-1"
                            >
                              <i className="fas fa-angle-left" />
                              <span className="sr-only">Previous</span>
                            </PaginationLink>
                          </PaginationItem>
                          <PaginationItem className="active">
                            <PaginationLink
                                href="#pablo"
                                onClick={e => e.preventDefault()}
                            >
                              1
                            </PaginationLink>
                          </PaginationItem>
                          <PaginationItem>
                            <PaginationLink
                                href="#pablo"
                                onClick={e => e.preventDefault()}
                            >
                              2 <span className="sr-only">(current)</span>
                            </PaginationLink>
                          </PaginationItem>
                          <PaginationItem>
                            <PaginationLink
                                href="#pablo"
                                onClick={e => e.preventDefault()}
                            >
                              3
                            </PaginationLink>
                          </PaginationItem>
                          <PaginationItem>
                            <PaginationLink
                                href="#pablo"
                                onClick={e => e.preventDefault()}
                            >
                              <i className="fas fa-angle-right" />
                              <span className="sr-only">Next</span>
                            </PaginationLink>
                          </PaginationItem>
                        </Pagination>
                      </nav>
                    </CardFooter>
                  </Card>
                </div>
              </Row>
            </Container>
                )}
          </AuthUserContext.Consumer>
        </>
    );
  }
}

const condition = authUser => !!authUser;

export default compose(
    withRouter,
    withFirebase,
    withAuthorization(condition),
)(Articles);
//
// export default withFirebase(Articles);
