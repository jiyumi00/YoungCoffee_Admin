import React, { Component } from "react";
import { BrowserRouter, Route, Routes, Navigate, Outlet } from "react-router-dom";

import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import LoginPage from "./pages/login_page";
import UserInfoPage from "./pages/user_info_page";
import TaxInfoPage from "./pages/tax_info_page";

import MyStorage from './util/redux_storage';

export default class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginPage />} />

          <Route path="/UserInfo" element={<ConditionRoute path={'/'} originPath={'/UserInfo'} />}>
            <Route path="/UserInfo" element={<UserInfoPage />} />
          </Route>

          <Route path="/TaxInfo" element={<ConditionRoute path={'/'} originPath={'/TaxInfo'} />}>
            <Route path="/TaxInfo" element={<TaxInfoPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    );
  }
}



class ConditionRoute extends Component {
  constructor(props) {
    super(props);

    this.state = {
      userID: '',
      passwd: '',
      path: ''
    }
  }

  componentDidMount() {
    this.unsubscribe = MyStorage.subscribe(this.onStorageChange); //리덕스에서 업데이트되면 알려줘, 여기 app.js만 씀, App.js에서도 값 업더ㅔ이트를 알아야함
    //this.setState({path:this.props.path});
    //this.setState({userID:MyStorage.getState().userID,passwd:MyStorage.getState().passwd})
  }

  componentWillUnmount() {
    console.log('라우터 언 마운트...');
    //this.unsubscribe();
  }

  onStorageChange = () => {
    console.log('라우터에서 리덕스에 변경된 값을 감지 = ', MyStorage.getState());
    console.log('상세값 : ', MyStorage.getState().userID);
    console.log('세션값 변경?? 라우터에서...', sessionStorage.getItem('userID'));
    console.log('세션값 변경?? 라우터에서...', sessionStorage.getItem('path'));
    this.setState({ userID: sessionStorage.getItem('userID'), passwd: sessionStorage.getItem('passwd'), path: this.props.path });
  }

  render() {
    console.log('라우터에서 렌더');
    return (
      this.state.userID == 0 ? <Navigate to={this.state.path} /> : <Outlet />
    );
  }
}


