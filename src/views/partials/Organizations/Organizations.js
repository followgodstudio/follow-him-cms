import React from "react";

// reactstrap components
import {
  Badge,
  Card,
  CardHeader,
  CardFooter,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  DropdownToggle,
  Media,
  Pagination,
  PaginationItem,
  PaginationLink,
  Progress,
  Table,
  Container,
  Row,
  UncontrolledTooltip
} from "reactstrap";
// core components
import Header from "components/Headers/Header.js";
import {compose} from "recompose";
import {withRouter} from "react-router-dom";
import {withFirebase} from "../../../components/Firebase";
import withAuthorization from "../../../components/Session/withAuthorization";

class Organizations extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      loading: true,
      organizations:[],
      organizationsPerPage: 8,
      organizations_count: 0,
      memberships:[],
      pageCount: 0,
      currentPage: 1
    };
  }

  componentDidMount() {
    this.setState({ loading: true });
    this.props.firebase.auth.currentUser.getIdTokenResult()
    .then((idTokenResult) => {
      console.log(idTokenResult)
      // Confirm the user is an Admin.
      if (idTokenResult.claims.admin) {
        this.fetchOrganizationsByAuthUser(this.props.authUser).then(docs => {
          console.log("orgs:", docs)
          this.setState({
            organizations: docs,
            loading: false,
          });
        });
      } else {
        // this.fetchMemberships().then(docs => {
        //   this.setState({
        //     articles: docs,
        //     loading: false
        //   })
        // })
      }

      // this.fetchTotalArticlesCount().then(pageCount => {
      //   console.log("pageCount:", pageCount)
      //   this.setState({
      //     pageCount: pageCount
      //   })
      // })
    })
    .catch((error) => {
      console.log(error);
    });
    console.log("organizations:", this.state.organizations)
  }

  goToDetail(organization){
    this.props.history.push(`/admin/organization/${organization.name}`);
  }

  fetchOrganizationsByAuthUser = async (authUser) => {
    let organizations = [];
    await this.props.firebase.db.collection("organizations").orderBy("name")
    .get()
    .then(function (querySnapshot) {
      querySnapshot.forEach(function (doc) {
        console.log("org", doc.data())
        let organization = doc.data();
        organization.id = doc.id;
        organizations.push(organization);
      });
      // console.log("articles:   " + articleList);
    })
    .catch(function (error) {
      console.log("Error getting documents: ", error);
    });
    return organizations;
  }

  fetchMemberships = async(authUser) => {

  }

  render() {
    const { organizations, loading, pageCount, currentPage } = this.state;
    return (
        <>
          <Header />
          {/* Page content */}
          <Container className="mt--7" fluid>
            <Row className="mt-5">
              <div className="col">
                <Card className="bg-default shadow">
                  <CardHeader className="bg-transparent border-0">
                    <h3 className="text-white mb-0">Organizations</h3>
                  </CardHeader>
                  <Table
                      className="align-items-center table-dark table-flush"
                      responsive
                  >
                    <thead className="thead-dark">
                    <tr>
                      <th scope="col">Organization Name</th>
                      <th scope="col">Articles Count</th>
                      <th scope="col">Memberships Count</th>
                      <th scope="col">Collaborators</th>
                      {/*<th scope="col">Completion</th>*/}
                      <th scope="col" />
                    </tr>
                    </thead>
                    <tbody>
                    {organizations.map(org =>
                        <tr>
                          <th scope="row">
                            <Media className="align-items-center" onClick={()=>this.goToDetail(org)}>
                              <a
                                  className="avatar rounded-circle mr-3"
                                  href="#pablo"
                                  onClick={e => e.preventDefault()}
                              >
                                <img
                                    alt="..."
                                    src={require("assets/img/theme/bootstrap.jpg")}
                                />
                              </a>
                              <Media>
                                <span className="mb-0 text-sm">
                                  {org.name}
                                </span>
                              </Media>
                            </Media>
                          </th>
                          <td>{org.articles_count}</td>
                          <td>
                            <Badge color="" className="badge-dot mr-4">
                              <i className="bg-warning" />
                              {org.memberships_count}
                            </Badge>
                          </td>
                          <td>
                            <div className="avatar-group">
                              <a
                                  className="avatar avatar-sm"
                                  href="#pablo"
                                  id="tooltip731399078"
                                  onClick={e => e.preventDefault()}
                              >
                                <img
                                    alt="..."
                                    className="rounded-circle"
                                    src={require("assets/img/theme/team-1-800x800.jpg")}
                                />
                              </a>
                              <UncontrolledTooltip
                                  delay={0}
                                  target="tooltip731399078"
                              >
                                Ryan Tompson
                              </UncontrolledTooltip>
                              <a
                                  className="avatar avatar-sm"
                                  href="#pablo"
                                  id="tooltip491083084"
                                  onClick={e => e.preventDefault()}
                              >
                                <img
                                    alt="..."
                                    className="rounded-circle"
                                    src={require("assets/img/theme/team-2-800x800.jpg")}
                                />
                              </a>
                              <UncontrolledTooltip
                                  delay={0}
                                  target="tooltip491083084"
                              >
                                Romina Hadid
                              </UncontrolledTooltip>
                              <a
                                  className="avatar avatar-sm"
                                  href="#pablo"
                                  id="tooltip528540780"
                                  onClick={e => e.preventDefault()}
                              >
                                <img
                                    alt="..."
                                    className="rounded-circle"
                                    src={require("assets/img/theme/team-3-800x800.jpg")}
                                />
                              </a>
                              <UncontrolledTooltip
                                  delay={0}
                                  target="tooltip528540780"
                              >
                                Alexander Smith
                              </UncontrolledTooltip>
                              <a
                                  className="avatar avatar-sm"
                                  href="#pablo"
                                  id="tooltip237898869"
                                  onClick={e => e.preventDefault()}
                              >
                                <img
                                    alt="..."
                                    className="rounded-circle"
                                    src={require("assets/img/theme/team-4-800x800.jpg")}
                                />
                              </a>
                              <UncontrolledTooltip
                                  delay={0}
                                  target="tooltip237898869"
                              >
                                Jessica Doe
                              </UncontrolledTooltip>
                            </div>
                          </td>
                          <td className="text-right">
                            <UncontrolledDropdown>
                              <DropdownToggle
                                  className="btn-icon-only text-light"
                                  href="#pablo"
                                  role="button"
                                  size="sm"
                                  color=""
                                  onClick={e => e.preventDefault()}
                              >
                                <i className="fas fa-ellipsis-v" />
                              </DropdownToggle>
                              <DropdownMenu className="dropdown-menu-arrow" right>
                                <DropdownItem
                                    href="#pablo"
                                    onClick={e => e.preventDefault()}
                                >
                                  Organization's Detail
                                </DropdownItem>
                                <DropdownItem
                                    href="#pablo"
                                    onClick={e => e.preventDefault()}
                                >
                                  Add/Remove Collaborators
                                </DropdownItem>
                                <DropdownItem
                                    href="#pablo"
                                    onClick={e => e.preventDefault()}
                                >
                                  Delete Organizations
                                </DropdownItem>
                              </DropdownMenu>
                            </UncontrolledDropdown>
                          </td>
                        </tr>
                    )}

                    </tbody>
                  </Table>
                </Card>
              </div>
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
)(Organizations);
