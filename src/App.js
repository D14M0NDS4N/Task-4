import logo from './logo.svg';
import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import Home from './page/Home';
import Login from './page/Login';
import Register from './page/Register';
import Auth from './page/Auth';
import "./layout_content.css";
import { Layout, Menu, Breadcrumb, Button } from 'antd';
import { supabase } from './configs/supabaseClient';

const { Header, Content, Footer } = Layout;


function App() {

  const login = async() =>{
    await supabase.auth.signIn({
      provider:"github"
    })
  }
  return (
    <>
      <Router>
        <Layout className="layout">
          <Header>
            <div className="logo" />
            <Menu theme="dark" mode="horizontal" >
              <Menu.Item>
                <Link to="/">Home</Link>
              </Menu.Item>
              <Menu.Item>
                <Link to="/login">Login</Link>
              </Menu.Item>
              <Menu.Item>
                <Link to="/register">Register</Link>
              </Menu.Item>
            </Menu>
          </Header>
          <Content style={{ padding: '0 50px' }}>
            {/* <Breadcrumb style={{ margin: '16px 0' }}>
              <Breadcrumb.Item>Home</Breadcrumb.Item>
              <Breadcrumb.Item>List</Breadcrumb.Item>
              <Breadcrumb.Item>App</Breadcrumb.Item>
            </Breadcrumb> */}
            <div className="site-layout-content">
            <br/>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/login" component={Login} />
              <Route exact path="/register" component={Register} />
              <Route exact path="/auth" component={Auth} />
          </Switch>
            </div>
          </Content>
          <Footer style={{ textAlign: 'center' }}>Designed by Arsyandi</Footer>
        </Layout>

      
      </Router>
    </>
  );
}

export default App;
