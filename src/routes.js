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
import Index from "views/Index.js";
import Profile from "views/partials/Profile.js";
import Maps from "views/partials/Maps.js";
import Register from "views/partials/Register.js";
import Login from "views/partials/Login.js";
import Tables from "views/partials/Tables.js";
import Icons from "views/partials/Icons.js";
import Articles from "./views/partials/Articles/Articles";
import PasswordForget from "./views/partials/PasswordForget";
import ArticleDetail from "./views/partials/Articles/ArticleDetail";
import ArticleAdd from "./views/partials/Articles/ArticleAdd";

export const LANDING = '/';
export const REGISTER = '/register';
export const LOGIN = '/login';
export const DASHBOARD = '/index';
export const ARTICLES = '/articles'
export const USERPROFILE = '/user-profile';
export const PASSWORDFORGET = '/password-forget';
export const ARTICLE_DETAIL = '/article/:articleId';
export const ARTICLE_ADD = '/article-add';


const routes = [
  {
    path: DASHBOARD,
    name: "Dashboard",
    icon: "ni ni-tv-2 text-primary",
    component: Index,
    layout: "/admin"
  },
  {
    path: ARTICLES,
    name: "Articles",
    icon: "ni ni-album-2 text-green",
    component: Articles,
    layout: "/admin"
  },
  {
    path: ARTICLE_DETAIL,
    name: "ArticleDetail",
    icon: "ni ni-album-2 text-green",
    component: ArticleDetail,
    layout: "/admin"
  },
  {
    path: ARTICLE_ADD,
    name: "AddArticle",
    icon: "ni ni-tv-2 text-primary",
    component: ArticleAdd,
    layout: "/admin"
  },
  {
    path: "/icons",
    name: "Icons",
    icon: "ni ni-planet text-blue",
    component: Icons,
    layout: "/admin"
  },
  {
    path: "/maps",
    name: "Maps",
    icon: "ni ni-pin-3 text-orange",
    component: Maps,
    layout: "/admin"
  },
  {
    path: USERPROFILE,
    name: "User Profile",
    icon: "ni ni-single-02 text-yellow",
    component: Profile,
    layout: "/admin"
  },
  {
    path: "/tables",
    name: "Tables",
    icon: "ni ni-bullet-list-67 text-red",
    component: Tables,
    layout: "/admin"
  },
  {
    path: LOGIN,
    name: "Login",
    icon: "ni ni-key-25 text-info",
    component: Login,
    layout: "/auth"
  },
  {
    path: REGISTER,
    name: "Register",
    icon: "ni ni-circle-08 text-pink",
    component: Register,
    layout: "/auth"
  },
  {
    path: PASSWORDFORGET,
    name: "PasswordForget",
    icon: "ni ni-key-25 text-info",
    component: PasswordForget,
    layout: "/auth"
  },
];

export default routes;
