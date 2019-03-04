/*
import React, { Component } from 'react';
import './app.scss';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = { authenticated: false };
  }

  componentDidMount() {
    fetch('http://localhost:3000/api/users', {
      method: 'GET',
      credentials: 'same-origin'
    })
      .then((res) => { if (res.ok) this.setState({ authenticated: true }); })
      .catch(err => err);
  }

  auth() {
    fetch('http://localhost:3000/api/users/login', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      credentials: 'include',
      body: JSON.stringify({
        user: {
          email: 'sipok@mail.ru',
          password: '7539aaa'
        }
      })
    })
      .then()
      .catch();
  }


  render() {
    return (
      <div />
    );
  }
}
*/
