import React, { Component, useState, FormEvent } from 'react';
import { IonHeader, IonToolbar, IonButtons, IonButton, IonTitle, IonContent, IonList, IonItem, IonLabel, IonInput, IonRow, IonCol, IonMenuButton } from '@ionic/react';
import './Login.css';
import axios from 'axios';
import { actions } from '../store';
import { RouteComponentProps } from 'react-router';
type State = {
  username: string | null
  password: string | null
}

type Props = RouteComponentProps<{}>

export default class Login extends Component<Props, State> {

  constructor(props: Props) {
    super(props);
    this.state = {
      username:'',
      password:''
    }
    // this.handlePasswordChange = this.handlePasswordChange.bind(this)
    // this.handleUsernameChange = this.handleUsernameChange.bind(this)
  }

  logInUser() {

    
  }
  submit = e => {
    e.preventDefault()
    console.log(this.state)
    axios.get('https://google.com')
    .then(response=> {
      localStorage.setItem('token', response.data)
    })
    .catch(err=>{
      localStorage.setItem('token', err)
      this.props.history.push("/schedule");
    })
  }
  handlePasswordChange = event => { this.setState({
      username : this.state.username,
      password : event.target.value
    })
  }
  handleUsernameChange = event => { this.setState({
    username : event.target.value,
    password : this.state.password
    })
  }

  render() {
    return (
      <>
        <IonHeader>
          <IonToolbar>
            <IonButtons slot="start">
              <IonMenuButton></IonMenuButton>
            </IonButtons>
            <IonTitle>Login</IonTitle>
          </IonToolbar>
        </IonHeader>

        <IonContent>
          {/* <div className="logo">
            <img src="assets/img/appicon.svg" alt="Ionic logo"/>
          </div> */}
            <form onSubmit={this.submit}>
            <IonList no-lines>
              <IonItem>
                <IonLabel color="primary">Username</IonLabel>
                <IonInput
                  onIonChange = {this.handleUsernameChange}
                  name="username"
                  type="text"
                  autocapitalize="off"
                  value={this.state.username}
                  required>
                </IonInput>
              </IonItem>
              <IonItem>
                <IonLabel color="primary">Password</IonLabel>
                <IonInput 
                onIonChange = {this.handlePasswordChange}
                value={this.state.password} 
                name="password" 
                type="password"
                required></IonInput>
              </IonItem>
            </IonList>

            <IonRow responsive-sm>
              <IonCol>
                <IonButton type="submit">
                  Login
                </IonButton>
              </IonCol>
        
            </IonRow>
            </form>
            {/* <IonRow>
            <IonCol>
                <IonButton onClick={this.signUpUser} color="light">
                  Signup
                </IonButton>
            </IonCol>
            </IonRow> */}
        </IonContent>
      </>
    );
  }
}
