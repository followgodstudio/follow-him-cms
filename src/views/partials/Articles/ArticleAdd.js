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
  author_id_global: '',
  author_name_global: '',
  author_icon_global: '',
  numParagraph: 1,
  title: "",
  description: "",
  image_url: "",
  author_name: "",
  author_icon: "",
  content:[],
}

class ArticleAdd extends React.Component {
  constructor(props) {
    super(props);
    this.state = { ...INITIAL_STATE };
    // this.addParagraph = this.addParagraph.bind(this);
  }

  componentDidMount() {
    // this.setState({ loading: true });
    // this.fetchArticleContentById(this.state.articleId).then(doc => {
    //   // console.log("doc:", doc);
    //   this.setState({
    //     article: doc,
    //     loading: false
    //   });
    //   console.log("articleResult: ", this.state.article);
    // });
  }

  //
  // validateArticle() {
  //   window.addEventListener('load', function () {
  //     // Fetch all the forms we want to apply custom Bootstrap validation styles to
  //     var forms = document.getElementsByClassName('needs-validation');
  //     // Loop over them and prevent submission
  //     Array.prototype.filter.call(forms, function (form) {
  //       form.addEventListener('submit', function (event) {
  //         if (form.checkValidity() === false) {
  //           event.preventDefault();
  //           event.stopPropagation();
  //         } else {
  //           submitArticle();
  //           event.preventDefault();
  //         }
  //         form.classList.add('was-validated');
  //       }, false);
  //     });
  //   }, false);
  // }
  //
  validateArticle =() => {
    let content=[];
    for (let i = 1; i <= this.state.numParagraph; i++) {
      if(this.state["inputParagraph" + i] == null){
        return false;
      }
      let subtitle = this.state["inputSubtitle" + i] == null ? "" : this.state["inputSubtitle" + i].trim();
      let body = this.state["inputParagraph" + i].trim();
      if (body !== ""){
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
      title: this.state.inputTitle,
      description: this.state.inputDescription,
      author_uid: this.props.firebase.auth.currentUser.uid,
      author_name: this.state.inputAuthorName,
      icon: this.state.inputAuthorIcon,
      created_date: firebase.firestore.Timestamp.now(),
      verified: false
    };

    // Author User data
    let user = await this.props.firebase.fetchCurrentUserProfile();
    if (!data.author_name && user["name"].trim() !== "") {
      data.author_name = user["name"];
    }
    // else {
    //   if (author_name_global)
    //     data.author_name = author_name_global;
    // }
    if (data.icon && user["icon"].trim() !== "") {
      data.icon = user["icon"];
    } else {
      data.icon = "";
    }
    // else {
    //   if (author_icon_global)
    //     data.icon = author_icon_global;
    // }
    if (this.state.inputImageUrl && this.state.inputImageUrl.trim()) {
      data.image_url = this.state.inputImageUrl;
    }


    // console.log(data);
    console.log("content", this.state.content);
    e.persist();
    await this.addArticleInFirebase(data, this.state.content);
  }

  //
  async addArticleInFirebase(data, content) {
    console.log("data:", data);
    try {
      let db = this.props.firebase.db;
      let docRef = await db.collection("articles").add(data);
      let batch = db.batch();
      content.forEach((doc) => {
        batch.set(db.collection("articles").doc(docRef.id).collection('content').doc(), doc);
      });
      await batch.commit();
      alert("Article Saved!");
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
      numParagraph: state.numParagraph + 1
    }));
  }

  removeParagraph =() =>{
    // alert(this.state.numParagraph);
    this.setState(state => ({
      numParagraph: state.numParagraph - 1
    }));
  }

  articleSubmit =() => {
    console.log(this.state.article);
  }


  render() {
    const { numParagraph } = this.state;
    console.log("numParagraph", numParagraph);
    const paragraph = [];
    //
    for (let i=0; i<numParagraph; i+=1) {
      paragraph.push(<Paragraph key={i} numParagraph={i+1} onChange={this.onChange}/>);
    }

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
                                <AvInput type="text" className="form-control" name="inputTitle"
                                       placeholder="梵高逝世130年，他的书信仍旧对你我说话" required errorMessage="Title must NOT be empty!" onChange={this.onChange}/>
                                  <div className="invalid-feedback">
                                    Title is required.
                                  </div>
                              </div>

                              <div className="mb-3">
                                <Label htmlFor="inputDescription">Description</Label>
                                <AvInput type="text" className="form-control" name="inputDescription"
                                       placeholder="梵高不仅是一位画家，还是一位传道人" required onChange={this.onChange}/>
                                  <div className="invalid-feedback">
                                    Description is required.
                                  </div>
                              </div>

                              <div className="row">
                                <div className="col-md-6 mb-3">
                                  <Label htmlFor="inputAuthorName">Author Name <span
                                      className="text-muted">(Optional)</span> </Label>
                                  <AvInput type="text" className="form-control" name="inputAuthorName"
                                         placeholder="今日佳音" onChange={this.onChange} />
                                </div>
                                <div className="col-md-6 mb-3">
                                  <Label htmlFor="inputAuthorIcon">Author Icon
                                    <span
                                      className="text-muted">(Optional)
                                    </span>
                                  </Label>
                                  <AvInput type="text" className="form-control" name="inputAuthorIcon" placeholder="https://some-image-link.jpg" onChange={this.onChange}/>
                                </div>
                              </div>

                              <div className="mb-3">
                                <Label htmlFor="inputImageUrl">Image URL
                                  <span className="text-muted">(Optional)</span>
                                </Label>
                                <AvInput type="text" className="form-control" name="inputImageUrl"
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
                                  {paragraph}
                                </ul>
                              </div>

                              <hr className="mb-4" />
                                <Button className="btn-info btn-lg btn-block" type="submit"> Submit </Button>
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

function Paragraph({numParagraph, onChange}){
  // const { numParagraph } = this.state;
  return (
      <li>
        <AvInput type="text" className="form-control subtitle"
               name={"inputSubtitle" + numParagraph} placeholder={"Subtitle " + numParagraph + " (Optional)"} onChange={onChange}/>
        <AvInput type="textarea" className="form-control paragraph" name={"inputParagraph" + numParagraph}
                  rows="3" placeholder={`Paragraph ${numParagraph}`}
                  required onChange={onChange}/>
        <div className="invalid-feedback">
          At least one paragraph is required.
        </div>
        <br/>
      </li>
  );
}

const condition = authUser => !!authUser;

export default compose(
    withRouter,
    withFirebase,
    withAuthorization(condition),
)(ArticleAdd);

// export default withFirebase(ArticleAdd);

// <main role="main" className="container">
//   <form className="needs-validation" id="formWriteArticle" noValidate>
//     <div className="mb-3">
//       <label htmlFor="inputTitle">Title</label>
//       <input type="text" className="form-control" id="inputTitle"
//              placeholder="梵高逝世130年，他的书信仍旧对你我说话" required>
//         <div className="invalid-feedback">
//           Title is required.
//         </div>
//     </div>
//
//     <div className="mb-3">
//       <label htmlFor="inputDescription">Description</label>
//       <input type="text" className="form-control" id="inputDescription"
//              placeholder="梵高不仅是一位画家，还是一位传道人" required>
//         <div className="invalid-feedback">
//           Description is required.
//         </div>
//     </div>
//
//     <div className="row">
//       <div className="col-md-6 mb-3">
//         <label htmlFor="inputAuthorName">Author Name <span
//             className="text-muted">(Optional)</span> </label>
//         <input type="text" className="form-control" id="inputAuthorName"
//                placeholder="今日佳音">
//       </div>
//       <div className="col-md-6 mb-3">
//         <label htmlFor="inputAuthorIcon">Author Icon <span
//             className="text-muted">(Optional)</span> </label>
//         <input type="text" className="form-control" id="inputAuthorIcon"
//                placeholder="https://some-image-link.jpg">
//       </div>
//     </div>
//
//     <div className="mb-3">
//       <label htmlFor="inputImageUrl">Image URL <span
//           className="text-muted">(Optional)</span></label>
//       <input type="text" className="form-control" id="inputImageUrl"
//              placeholder="https://some-image-link.jpg">
//     </div>
//
//     <div className="mb-3">
//       <label htmlFor="inputContent">Content </label>
//       <button type="button"
//               className="btn btn-outline-secondary btn-sm paragraph-controll"
//               onClick="return addParagraph()">+
//       </button>
//       <button type="button"
//               className="btn btn-outline-secondary btn-sm paragraph-controll"
//               onClick="return removeParagraph()">-
//       </button>
//       <ul id="listParagraph" className="paragraph">
//         <li>
//           <input type="text" className="form-control subtitle"
//                  id="inputSubtitle1" placeholder="Subtitle 1 (Optional)">
//             <textarea className="form-control paragraph" id="inputParagraph1"
//                       rows="3" placeholder="Paragraph 1"
//                       required></textarea>
//             <div className="invalid-feedback">
//               At least one paragraph is required.
//             </div>
//         </li>
//       </ul>
//     </div>
//
//     <hr className="mb-4">
//       <button className="btn btn-primary btn-lg btn-block"
//               type="submit">Submit
//       </button>
//   </form>
// </main>image_url