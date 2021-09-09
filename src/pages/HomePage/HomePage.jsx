import { Text, SimpleGrid, Box } from "@chakra-ui/react";
import React, { Fragment, useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { Dropdown } from "react-bootstrap";
import loadable from "@loadable/component";
import pMinDelay from "p-min-delay";
import { Card, CardBorder } from "./HomePage.styles";
import "./style.css";
// import ChartTimeline from "./Fasto/Home/ChartTimeline";
// import RadialChart from "./Fasto/Home/RadialChart";
// import WidgetChart1 from "./Fasto/Home/WidgetChart1";

const titleBlog = [
  {
    border: <CardBorder className="bg-secondary card-border" />,
    title: "78",
    subtitle: "Total Project Handled",
    icon: <Icon1 />,
  },
  {
    border: <CardBorder className="bg-warning card-border" />,
    title: "214",
    subtitle: "Contacts You Have",
    icon: <Icon2 />,
  },
  {
    border: <CardBorder className="bg-primary card-border" />,
    title: "93",
    subtitle: "Total Unfinished Task",
    icon: <Icon3 />,
  },
  {
    border: <CardBorder className="bg-info card-border" />,
    title: "12",
    subtitle: "Unread Messages",
    icon: <Icon4 />,
  },
];

function Icon1() {
  return (
    <>
      <svg
        width="36"
        height="36"
        viewBox="0 0 36 36"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M34.422 13.9831C34.3341 13.721 34.1756 13.4884 33.9638 13.3108C33.7521 13.1332 33.4954 13.0175 33.222 12.9766L23.649 11.5141L19.353 2.36408C19.2319 2.10638 19.0399 1.88849 18.7995 1.73587C18.5591 1.58325 18.2803 1.5022 17.9955 1.5022C17.7108 1.5022 17.4319 1.58325 17.1915 1.73587C16.9511 1.88849 16.7592 2.10638 16.638 2.36408L12.342 11.5141L2.76902 12.9766C2.49635 13.0181 2.24042 13.1341 2.02937 13.3117C1.81831 13.4892 1.6603 13.7215 1.57271 13.9831C1.48511 14.2446 1.47133 14.5253 1.53287 14.7941C1.59441 15.063 1.72889 15.3097 1.92152 15.5071L8.89802 22.6501L7.24802 32.7571C7.20299 33.0345 7.23679 33.3189 7.34555 33.578C7.45431 33.8371 7.63367 34.0605 7.86319 34.2226C8.09271 34.3847 8.36315 34.4791 8.64371 34.495C8.92426 34.5109 9.20365 34.4477 9.45002 34.3126L18 29.5906L26.55 34.3126C26.7964 34.4489 27.0761 34.5131 27.3573 34.4978C27.6384 34.4826 27.9096 34.3885 28.1398 34.2264C28.37 34.0643 28.5499 33.8406 28.659 33.5811C28.768 33.3215 28.8018 33.0365 28.7565 32.7586L27.1065 22.6516L34.0785 15.5071C34.2703 15.3091 34.4037 15.0622 34.4643 14.7933C34.5249 14.5245 34.5103 14.2441 34.422 13.9831Z"
          fill="#864AD1"
        />
      </svg>
    </>
  );
}

function Icon2() {
  return (
    <>
      <svg
        width="36"
        height="36"
        viewBox="0 0 36 36"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M17.8935 22.5C23.6925 22.5 28.3935 17.799 28.3935 12C28.3935 6.20101 23.6925 1.5 17.8935 1.5C12.0945 1.5 7.39351 6.20101 7.39351 12C7.39351 17.799 12.0945 22.5 17.8935 22.5Z"
          fill="#FFB930"
        />
        <path
          d="M29.5605 21.3344C29.217 20.9909 28.851 20.6699 28.476 20.3564C27.2159 21.96 25.6078 23.2562 23.7733 24.1472C21.9388 25.0382 19.9259 25.5007 17.8864 25.4996C15.847 25.4986 13.8345 25.0342 12.0009 24.1414C10.1673 23.2486 8.56051 21.9507 7.30199 20.3459C5.447 21.8906 3.95577 23.8256 2.9347 26.013C1.91364 28.2003 1.3879 30.586 1.39499 32.9999C1.39499 33.3978 1.55303 33.7793 1.83433 34.0606C2.11564 34.3419 2.49717 34.4999 2.89499 34.4999H32.895C33.2928 34.4999 33.6743 34.3419 33.9557 34.0606C34.237 33.7793 34.395 33.3978 34.395 32.9999C34.4004 30.8324 33.9759 28.6854 33.146 26.683C32.3162 24.6807 31.0975 22.8627 29.5605 21.3344Z"
          fill="#FFB930"
        />
      </svg>
    </>
  );
}

function Icon3() {
  return (
    <>
      <svg
        className="primary-icon"
        width="36"
        height="36"
        viewBox="0 0 36 36"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M11.9999 1.5H5.99994C3.51466 1.5 1.49994 3.51472 1.49994 6V29.8125C1.49994 32.2977 3.51466 34.3125 5.99994 34.3125H11.9999C14.4852 34.3125 16.4999 32.2977 16.4999 29.8125V6C16.4999 3.51472 14.4852 1.5 11.9999 1.5Z"
          fill="#20F174"
        />
        <path
          d="M30 1.5H24C21.5147 1.5 19.5 3.51472 19.5 6V12C19.5 14.4853 21.5147 16.5 24 16.5H30C32.4853 16.5 34.5 14.4853 34.5 12V6C34.5 3.51472 32.4853 1.5 30 1.5Z"
          fill="#20F174"
        />
        <path
          d="M30 19.5H24C21.5147 19.5 19.5 21.5147 19.5 24V30C19.5 32.4853 21.5147 34.5 24 34.5H30C32.4853 34.5 34.5 32.4853 34.5 30V24C34.5 21.5147 32.4853 19.5 30 19.5Z"
          fill="#20F174"
        />
      </svg>
    </>
  );
}

function Icon4() {
  return (
    <>
      <svg
        width="46"
        height="46"
        viewBox="0 0 46 46"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M34.4999 1.91663H11.4999C8.95917 1.91967 6.52338 2.93032 4.72682 4.72688C2.93026 6.52345 1.91961 8.95924 1.91656 11.5V26.8333C1.91935 29.0417 2.6834 31.1816 4.07994 32.8924C5.47648 34.6031 7.42011 35.7801 9.58323 36.225V42.1666C9.58318 42.5136 9.67733 42.8541 9.85564 43.1518C10.0339 43.4495 10.2897 43.6932 10.5957 43.8569C10.9016 44.0206 11.2463 44.0982 11.5929 44.0813C11.9395 44.0645 12.275 43.9539 12.5636 43.7613L23.5749 36.4166H34.4999C37.0406 36.4136 39.4764 35.4029 41.273 33.6064C43.0695 31.8098 44.0802 29.374 44.0832 26.8333V11.5C44.0802 8.95924 43.0695 6.52345 41.273 4.72688C39.4764 2.93032 37.0406 1.91967 34.4999 1.91663ZM30.6666 24.9166H15.3332C14.8249 24.9166 14.3374 24.7147 13.9779 24.3552C13.6185 23.9958 13.4166 23.5083 13.4166 23C13.4166 22.4916 13.6185 22.0041 13.9779 21.6447C14.3374 21.2852 14.8249 21.0833 15.3332 21.0833H30.6666C31.1749 21.0833 31.6624 21.2852 32.0219 21.6447C32.3813 22.0041 32.5832 22.4916 32.5832 23C32.5832 23.5083 32.3813 23.9958 32.0219 24.3552C31.6624 24.7147 31.1749 24.9166 30.6666 24.9166ZM34.4999 17.25H11.4999C10.9916 17.25 10.5041 17.048 10.1446 16.6886C9.78517 16.3291 9.58323 15.8416 9.58323 15.3333C9.58323 14.825 9.78517 14.3374 10.1446 13.978C10.5041 13.6186 10.9916 13.4166 11.4999 13.4166H34.4999C35.0082 13.4166 35.4957 13.6186 35.8552 13.978C36.2146 14.3374 36.4166 14.825 36.4166 15.3333C36.4166 15.8416 36.2146 16.3291 35.8552 16.6886C35.4957 17.048 35.0082 17.25 34.4999 17.25Z"
          fill="#3ECDFF"
        />
      </svg>
    </>
  );
}

const ChartTimeline = loadable(() =>
  pMinDelay(import("./Fasto/Home/ChartTimeline"), 1000)
);
const WidgetChart1 = loadable(() =>
  pMinDelay(import("./Fasto/Home/WidgetChart1"), 1000)
);
const RadialChart = loadable(() =>
  pMinDelay(import("./Fasto/Home/RadialChart"), 1000)
);
// const WidgetChart2 = loadable(() =>
//   pMinDelay(import("./Fasto/Home/WidgetChart2"), 1000)
// );

function HomePage() {
  return (
    <>
      <div className="row">
        {titleBlog.map((item, index) => (
          <div className="col-xl-3 col-xxl-6 col-lg-6 col-sm-6" key={1}>
            <div className="card card-bd">
              {item.border}
              <div className="card-body">
                <div className="media align-items-center">
                  <div className="media-body mr-3">
                    <h2 className="num-text text-black font-w700">
                      {item.title}
                    </h2>
                    <span className="fs-14">{item.subtitle}</span>
                  </div>
                  {item.icon}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="row">
        <div className="col-xl-6 col-xxl-12">
          <div className="card">
            <div className="card-header d-block border-0 pb-0">
              <div className="d-flex justify-content-between pb-3">
                <h4 className="mb-0 text-black fs-20">Project Created</h4>
                <Dropdown>
                  <Dropdown.Toggle className="i-false" as={Link}>
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M12 13C12.5523 13 13 12.5523 13 12C13 11.4477 12.5523 11 12 11C11.4477 11 11 11.4477 11 12C11 12.5523 11.4477 13 12 13Z"
                        stroke="#575757"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M12 6C12.5523 6 13 5.55228 13 5C13 4.44772 12.5523 4 12 4C11.4477 4 11 4.44772 11 5C11 5.55228 11.4477 6 12 6Z"
                        stroke="#575757"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M12 20C12.5523 20 13 19.5523 13 19C13 18.4477 12.5523 18 12 18C11.4477 18 11 18.4477 11 19C11 19.5523 11.4477 20 12 20Z"
                        stroke="#575757"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </Dropdown.Toggle>
                  <Dropdown.Menu className="dropdown-menu-left">
                    <Dropdown.Item>Edit</Dropdown.Item>
                    <Dropdown.Item>Delete</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </div>
              <div className="d-flex align-items-center">
                <span className="fs-36 text-black font-w600 mr-4">25%</span>
                <div>
                  <svg
                    className="mr-2"
                    width="27"
                    height="14"
                    viewBox="0 0 27 14"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M0 13.435L13.435 0L26.8701 13.435H0Z"
                      fill="#2FCA51"
                    />
                  </svg>
                  <span>last month $563,443</span>
                </div>
              </div>
            </div>
            <div className="card-body pb-0 px-2 pt-2">
              <div id="chartTimeline" className="timeline-chart">
                <ChartTimeline />
              </div>
            </div>
          </div>
        </div>
        <div className="col-xl-3 col-xxl-6 col-sm-6">
          <div className="card">
            <div className="card-header border-0 pb-0">
              <h4 className="fs-20 mb-0 text-black">New Clients</h4>
              <Dropdown>
                <Dropdown.Toggle className="i-false" as={Link}>
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12 13C12.5523 13 13 12.5523 13 12C13 11.4477 12.5523 11 12 11C11.4477 11 11 11.4477 11 12C11 12.5523 11.4477 13 12 13Z"
                      stroke="#575757"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M12 6C12.5523 6 13 5.55228 13 5C13 4.44772 12.5523 4 12 4C11.4477 4 11 4.44772 11 5C11 5.55228 11.4477 6 12 6Z"
                      stroke="#575757"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M12 20C12.5523 20 13 19.5523 13 19C13 18.4477 12.5523 18 12 18C11.4477 18 11 18.4477 11 19C11 19.5523 11.4477 20 12 20Z"
                      stroke="#575757"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </Dropdown.Toggle>
                <Dropdown.Menu className="dropdown-menu-left">
                  <Dropdown.Item>Edit</Dropdown.Item>
                  <Dropdown.Item>Delete</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </div>
            <div className="card-body text-center pb-0 px-2 pt-2">
              <div className="widgetChart1 dashboard-chart">
                <WidgetChart1 />
              </div>
            </div>
          </div>
        </div>
        <div className="col-xl-3 col-xxl-6 col-sm-6">
          <div className="card">
            <div className="card-header border-0 pb-0">
              <h4 className="fs-20 mb-0 text-black">Monthly Target</h4>
              <Dropdown>
                <Dropdown.Toggle className="i-false" as={Link}>
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12 13C12.5523 13 13 12.5523 13 12C13 11.4477 12.5523 11 12 11C11.4477 11 11 11.4477 11 12C11 12.5523 11.4477 13 12 13Z"
                      stroke="#575757"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M12 6C12.5523 6 13 5.55228 13 5C13 4.44772 12.5523 4 12 4C11.4477 4 11 4.44772 11 5C11 5.55228 11.4477 6 12 6Z"
                      stroke="#575757"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M12 20C12.5523 20 13 19.5523 13 19C13 18.4477 12.5523 18 12 18C11.4477 18 11 18.4477 11 19C11 19.5523 11.4477 20 12 20Z"
                      stroke="#575757"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </Dropdown.Toggle>
                <Dropdown.Menu className="dropdown-menu-left">
                  <Dropdown.Item>Edit</Dropdown.Item>
                  <Dropdown.Item>Delete</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </div>
            <div className="card-body text-center pt-0">
              <div id="radialChart" className="monthly-project-chart">
                <RadialChart />
              </div>
              <span className="fs-14 text-black d-block op5">
                100 Projects/ monthy
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default HomePage;
