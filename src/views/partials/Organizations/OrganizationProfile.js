import React from "react";

// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  FormGroup,
  Form,
  Input,
  Container,
  Row,
  Col
} from "reactstrap";
// core components
import {compose} from "recompose";
import {withRouter} from "react-router-dom";
import {withFirebase} from "../../../components/Firebase";
import withAuthorization from "../../../components/Session/withAuthorization";

class OrganizationProfile extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      loading: true,
      organization: "",
      memberships:[],
    };
  }

  componentDidMount() {
    this.setState({ loading: true });
    console.log(console.log(this.props))
    this.props.firebase.auth.currentUser.getIdTokenResult()
    .then((idTokenResult) => {
      // Confirm the user is an Admin.
      if (idTokenResult.claims.admin) {
        this.fetchOrganizationsByAuthUser(this.props.authUser).then(docs => {
          console.log("orgs:", docs)
          this.setState({
            organizations: docs,
            loading: false,
          });
        });
      }
      else {
        this.fetchOrganizationProfile(this.org)
      }
    })
    .catch((error) => {
      console.log(error);
    });
    console.log("organizations:", this.state.organizations)
  }

  // fetchOrganizationProfile = async (org) => {
  //   let content = [];
  //   let content_html = [];
  //   let article;
  //   let docRef = this.props.firebase.articles().doc(articleId);
  //
  //   await docRef.collection("content")
  //   .get()
  //   .then(function(querySnapshot) {
  //     querySnapshot.forEach(doc => {
  //       content.push(doc.data());
  //     });
  //   });
  //
  //   await docRef.collection("content_html")
  //   .get()
  //   .then(function(querySnapshot) {
  //     querySnapshot.forEach(doc => {
  //       content_html.push(doc.data());
  //     });
  //   });
  //
  //   await docRef.get().then(function (doc) {
  //     if (doc.exists) {
  //       article = doc.data();
  //     } else {
  //       console.log("No such document!");
  //     }
  //   }).catch(function (error) {
  //     console.log("Error getting document:", error);
  //   });
  //
  //   content.sort((a, b) => (a.index > b.index) ? 1 : -1);
  //
  //   article.content = content;
  //   article.content_html = content_html;
  //   return article;
  // }

  render() {
    return (
        <>
          <div
              className="header pb-8 pt-5 pt-lg-8 d-flex align-items-center"
              style={{
                minHeight: "600px",
                backgroundImage:
                    "url(" + require("assets/img/theme/profile-cover.jpg") + ")",
                backgroundSize: "cover",
                backgroundPosition: "center top"
              }}
          >
            {/* Mask */}
            <span className="mask bg-gradient-default opacity-8" />
            {/* Header container */}
            <Container className="d-flex align-items-center" fluid>
              <Row>
                <Col lg="7" md="10">
                  <h1 className="display-2 text-white">Organization Detail</h1>
                  <p className="text-white mt-0 mb-5">
                    This is your profile page. You can see the progress you've
                    made with your work and manage your projects or assigned tasks
                  </p>
                  <Button
                      color="info"
                      href="#pablo"
                      onClick={e => e.preventDefault()}
                  >
                    Edit profile
                  </Button>
                </Col>
              </Row>
            </Container>
          </div>
          {/* Page content */}
          <Container className="mt--7" fluid>
            <Row>
              <Col className="order-xl-2 mb-5 mb-xl-0" xl="12">
                <Card className="card-profile shadow">
                  <Row className="justify-content-center">
                    <Col className="order-lg-2" lg="3">
                      <div className="card-profile-image">
                        <a href="#pablo" onClick={e => e.preventDefault()}>
                          <img
                              alt="..."
                              className="rounded-circle"
                              src={require("assets/img/theme/team-4-800x800.jpg")}
                          />
                        </a>
                      </div>
                    </Col>
                  </Row>
                  <CardHeader className="text-center border-0 pt-8 pt-md-4 pb-0 pb-md-4">
                    <div className="d-flex justify-content-between">
                      <Button
                          className="mr-4"
                          color="info"
                          href="#pablo"
                          onClick={e => e.preventDefault()}
                          size="sm"
                      >
                        Connect
                      </Button>
                      <Button
                          className="float-right"
                          color="default"
                          href="#pablo"
                          onClick={e => e.preventDefault()}
                          size="sm"
                      >
                        Message
                      </Button>
                    </div>
                  </CardHeader>
                  <CardBody className="pt-0 pt-md-4">
                    <Row>
                      <div className="col">
                        <div className="card-profile-stats d-flex justify-content-center mt-md-5">
                          <div>
                            <span className="heading">22</span>
                            <span className="description">Friends</span>
                          </div>
                          <div>
                            <span className="heading">10</span>
                            <span className="description">Photos</span>
                          </div>
                          <div>
                            <span className="heading">89</span>
                            <span className="description">Comments</span>
                          </div>
                        </div>
                      </div>
                    </Row>
                    <div className="text-center">
                      <h3>
                        Jessica Jones
                        <span className="font-weight-light">, 27</span>
                      </h3>
                      <div className="h5 font-weight-300">
                        <i className="ni location_pin mr-2" />
                        Bucharest, Romania
                      </div>
                      <div className="h5 mt-4">
                        <i className="ni business_briefcase-24 mr-2" />
                        Solution Manager - Creative Tim Officer
                      </div>
                      <div>
                        <i className="ni education_hat mr-2" />
                        University of Computer Science
                      </div>
                      <hr className="my-4" />
                      <p>
                        Ryan — the name taken by Melbourne-raised, Brooklyn-based
                        Nick Murphy — writes, performs and records all of his own
                        music.
                      </p>
                      <a href="#pablo" onClick={e => e.preventDefault()}>
                        Show more
                      </a>
                    </div>
                  </CardBody>
                </Card>
              </Col>

            </Row>
          </Container>
        </>
    );
  }
}

const condition = authUser => !!authUser;

export default compose(
    withRouter,
    withFirebase,
    withAuthorization(condition),
)(OrganizationProfile);
