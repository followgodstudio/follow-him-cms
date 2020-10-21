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
  Row,
  Label,
  Input,
  InputGroup,
  InputGroupText,
  InputGroupAddon,
  Form
} from "reactstrap";
import {compose} from "recompose";
import {withRouter} from "react-router-dom";
import withAuthorization from "../../../components/Session/withAuthorization";
import firebase from 'firebase';
import { AvForm, AvField, AvGroup, AvInput, AvFeedback, AvRadioGroup, AvRadio, AvCheckboxGroup, AvCheckbox } from 'availity-reactstrap-validation';

const INITIAL_STATE = {
  numParagraph: 1,
  title: "",
  description: "",
  image_url: "",
  author_name: "",
  author_icon: "",
  content:[],
}

class ArticleEdit extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      article: [],
      content:[],
      error: null,
      loading: true,
      articleId : props.match.params.articleId
    };
  }

  componentDidMount() {
    this.setState({ loading: true });
    this.fetchArticleContentById(this.state.articleId).then(doc => {
      // console.log("doc:", doc);
      this.setState({
        article: doc,
        loading: false,
        numParagraph: doc.content.length
      });
      // console.log("articleResult: ", this.state.article);
    });
  }

  fetchArticleContentById = async (articleId) => {
    let content = [];
    let article;
    let docRef = this.props.firebase.articles().doc(articleId);

    // Get Article Metadata
    await docRef.get().then(function (doc) {
      if (doc.exists) {
        article = doc.data();
      } else {
        console.log("No such document!");
      }
    }).catch(function (error) {
      console.log("Error getting document:", error);
    });

    // Get Article Content
    await docRef.collection("content")
    .get()
    .then(function(querySnapshot) {
      querySnapshot.forEach(doc => {
        content.push(doc.data());
      });
    });

    content.sort((a, b) => (a.index > b.index) ? 1 : -1);

    // console.log(content);

    this.setState({content:content});

    article.content = content;
    return article;
  }

  validateArticle =() => {
    let content=[];
    // console.log("validate content paragraph:", this.state.numParagraph);
    for (let i = 1; i <= this.state.numParagraph; i++) {
      // console.log("state ", this.state);
      // console.log("state ", this.state.article.content);
      // console.log("loading param: ", i);
      let body = "";
      let subtitle = "";
      if(this.state["inputParagraph" + i] == null){
        // console.log("content id: ", this.state.article.content[i - 1].id);
        body = this.state.article.content[i - 1].body;
      } else {
        body = this.state["inputParagraph" + i].trim();
      }

      if (this.state["inputSubtitle" + i] == null) {
        subtitle = this.state.article.content[i - 1].subtitle;
      } else {
        subtitle = this.state["inputSubtitle" + i].trim();
      }

      if (body){
        content.push({index: i - 1, subtitle: subtitle, body: body});
      }
    }

    this.setState({content: content});
    return true;
  }

  submitArticle = async e => {
    const {numParagraph} = this.state;

    if(!this.validateArticle()){
      return;
    }

    let data = {
      title: this.state.inputTitle ?? this.state.article.title,
      description: this.state.inputDescription ?? this.state.article.description,
      author_uid: this.props.firebase.auth.currentUser.uid,
      author_name: this.state.inputAuthorName ?? this.state.article.author_name,
      icon: this.state.inputAuthorIcon ?? this.state.article.author_icon,
      modified_date: firebase.firestore.Timestamp.now(),
      verified: false
    };

    // Author User data
    let user = await this.props.firebase.fetchCurrentUserProfile();
    if (!data.author_name && user["name"].trim() !== "") {
      data.author_name = user["name"];
    }
    if (data.icon && user["icon"].trim() !== "") {
      data.icon = user["icon"];
    } else {
      data.icon = "";
    }

    if (this.state.inputImageUrl && this.state.inputImageUrl.trim()) {
      data.image_url = this.state.inputImageUrl;
    }

    e.persist();
    await this.updateArticleInFirebase(data, this.state.content);
  }

  async updateArticleInFirebase(data, content) {
    console.log("final content:", content);
    try {
      let db = this.props.firebase.db;
      let docRef = await db.collection("articles").doc(this.state.articleId).update({
        ...data
      });

      await db.collection("articles").doc(this.state.articleId).collection('content').get().then(res => {
        res.forEach(e => {
          e.ref.delete();
        });
      });

      await content.forEach((doc) => {
        db.collection("articles").doc(this.state.articleId).collection('content').add({...doc});
      });

      alert("Article Updated!");
      console.log("Document written with ID: ", docRef.id);
    } catch (error) {
      if (error.code === "permission-denied") {
        alert(error.message + " Please sign in first.");
      } else {
        alert(error.message);
      }
    }
  }


  onChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  addParagraph =() =>{
    // alert(this.state.numParagraph);
    this.setState(state => ({
      numParagraph: state.numParagraph + 1,
      content: state.article.content.push({index: state.numParagraph + 1, subtitle: "", body: ""})
    }));
  }

  removeParagraph =() =>{
    // alert(this.state.numParagraph);
    this.setState(state => ({
      numParagraph: state.numParagraph - 1,
      content: state.article.content.pop()
    }));
  }

  articleSubmit =() => {
    console.log(this.state.article);
  }

  render() {
    const { article, loading } = this.state;
    const numParagraph  = this.state.article.content ? this.state.article.content.length : 0;
    // console.log("numParagraph", numParagraph);
    console.log("this.state.content", this.state.content);
    const paragraph = [];

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
                            <div style={{ marginRight: "auto" }} >
                              <Button className="btn-primary" onClick={e => {e.preventDefault(); this.props.history.goBack();}}> Back </Button>
                            </div>
                          </Row>
                        </CardHeader>
                        <CardBody>
                          <div role="main" className="container">
                            <AvForm className="needs-validation" id="formWriteArticle" noValidate onSubmit={this.submitArticle}>
                              <div className="mb-3">
                                <Label htmlFor="inputTitle">Title</Label>
                                <AvInput value={this.state.article.title ?? ""} type="text" className="form-control" name="inputTitle"
                                         placeholder="梵高逝世130年，他的书信仍旧对你我说话" required errorMessage="Title must NOT be empty!" onChange={this.onChange}/>
                                <div className="invalid-feedback">
                                  Title is required.
                                </div>
                              </div>

                              <div className="mb-3">
                                <Label htmlFor="inputDescription">Description</Label>
                                <AvInput value={this.state.article.description ?? ""} type="text" className="form-control" name="inputDescription"
                                         placeholder="梵高不仅是一位画家，还是一位传道人" required onChange={this.onChange}/>
                                <div className="invalid-feedback">
                                  Description is required.
                                </div>
                              </div>

                              <div className="row">
                                <div className="col-md-6 mb-3">
                                  <Label htmlFor="inputAuthorName">Author Name <span
                                      className="text-muted">(Optional)</span> </Label>
                                  <AvInput value={this.state.article.author_name ?? ""} type="text" className="form-control" name="inputAuthorName"
                                           placeholder="今日佳音" onChange={this.onChange} />
                                </div>
                                <div className="col-md-6 mb-3">
                                  <Label htmlFor="inputAuthorIcon">Author Icon
                                    <span
                                        className="text-muted">(Optional)
                                    </span>
                                  </Label>
                                  <AvInput value={this.state.article.author_icon ?? ""} type="text" className="form-control" name="inputAuthorIcon" placeholder="https://some-image-link.jpg" onChange={this.onChange}/>
                                </div>
                              </div>

                              <div className="mb-3">
                                <Label htmlFor="inputImageUrl">Image URL
                                  <span className="text-muted">(Optional)</span>
                                </Label>
                                <AvInput value={this.state.article.image_url ?? ""} type="text" className="form-control" name="inputImageUrl"
                                         placeholder="https://some-image-link.jpg" onChange={this.onChange} />
                              </div>

                              <div className="mb-3">
                                <Label style={{marginRight: '20px'}} htmlFor="inputContent"> Content </Label>
                                <Button type="button"
                                        className="btn-outline-secondary btn-sm paragraph-controll"
                                        onClick={this.addParagraph}> +
                                </Button>
                                <Button type="button"
                                        className="btn-outline-secondary btn-sm paragraph-controll"
                                        onClick={this.removeParagraph}> -
                                </Button>
                                <ul id="listParagraph" className="paragraph">
                                  {loading ? <div></div> :
                                      this.state.article.content.map((paragraph, i) =>
                                              <li key = {paragraph.index}>
                                                <AvInput
                                                    value={this.state.article.content[i].subtitle}
                                                    type="text"
                                                    className="form-control subtitle"
                                                    name={"inputSubtitle"
                                                    + (i + 1)}
                                                    placeholder={"Subtitle "
                                                    + (i + 1) + " (Optional)"}
                                                    onChange ={this.onChange}
                                                />
                                                <AvInput
                                                    value={this.state.article.content[i].body}
                                                    type="textarea"
                                                    className="form-control paragraph"
                                                    name={"inputParagraph"
                                                    + (i + 1)}
                                                    rows="3"
                                                    placeholder={`Paragraph ${i + 1}`}
                                                    required
                                                    onChange ={this.onChange}
                                                />
                                                <div className="invalid-feedback">
                                                  At least one paragraph is required.
                                                </div>
                                                <br/>
                                              </li>
                                        )
                                  }
                                </ul>
                              </div>

                              <hr className="mb-4" />
                              <Button className="btn-info btn-lg btn-block" type="submit"> Save </Button>
                            </AvForm>
                          </div>
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
    );
  }
}

const condition = authUser => !!authUser;

export default compose(
    withRouter,
    withFirebase,
    withAuthorization(condition),
)(ArticleEdit);
