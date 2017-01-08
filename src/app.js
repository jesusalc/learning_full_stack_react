import React from 'react'
import ReactDOM from 'react-dom'
import injectTapEventPlugin from 'react-tap-event-plugin';

// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import TextField from 'material-ui/TextField'
import { orange500, blue500 } from 'material-ui/styles/colors'
import RaisedButton from 'material-ui/RaisedButton'

const style = {
  margin: 12,
}

const styles = {
  errorStyle: {
    color: orange500,
  },
  underlineStyle: {
    borderColor: orange500,
  },
  floatingLabelStyle: {
    color: orange500,
  },
  floatingLabelFocusStyle: {
    color: blue500,
  },
}

class Layout extends React.Component {
  render() {
    return <div className="overlay">
      <div className="box">
        <h2>{this.props.title}</h2>
        {this.props.children}
      </div>
      <footer>By signing up, you are agreeing to our
                <a href="/terms"> Terms of Service </a>
        and to our
                <a href="/privacy"> Privacy Policy </a>
      </footer>
    </div>
  }
}


class Email extends React.Component {
  render() {
    return <TextField
      type="email"
      name="email"
      key="email"
      required
      floatingLabelText="Your email"
      pattern="^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
      maxLength="255"
      floatingLabelStyle={styles.floatingLabelStyle}
      floatingLabelFocusStyle={styles.floatingLabelFocusStyle}
      id="email" />
  }
}


class PasswordConfirm extends React.Component {
  render() {
    return <TextField
      key="password2"
      type="password"
      name="password2"
      required
      id="password2"
      floatingLabelText="Password Confirm"
      pattern="^[a-z0-9._%+-]$"
      maxLength="255"
      floatingLabelStyle={styles.floatingLabelStyle}
      floatingLabelFocusStyle={styles.floatingLabelFocusStyle} />
  }
}

class Password extends React.Component {
  constructor(props) {
    super(props)
    this.state = {password1: '', password2: ''}
    this.onChange = this.onChange.bind(this)
  }
  onChange({target}){
    this.setState({[target.name]: target.value})
  }
  render() {
    let msg = ""
    let ret = [<TextField
      key="password"
      type="password"
      name="password"
      required
      id="password"
      floatingLabelText="Password"
      pattern="^[a-z0-9._%+-]$"
      maxLength="255"
      onChange={this.onChange}
      floatingLabelStyle={styles.floatingLabelStyle}
      floatingLabelFocusStyle={styles.floatingLabelFocusStyle} />]
    if (this.props.confirm) {
      ret[1] = <TextField
      key="password2"
      type="password"
      name="password2"
      required
      id="password2"
      floatingLabelText="Password Confirm"
      pattern="^[a-z0-9._%+-]$"
      maxLength="255"
      onChange={this.onChange}
      floatingLabelStyle={styles.floatingLabelStyle}
      floatingLabelFocusStyle={styles.floatingLabelFocusStyle} />
    }
    if (this.state.password2.length && this.state.password1 != this.state.password2) {
      msg = <div className="error-message">Both passwords must be the same</div>
    }
    return <div>{ret}{msg}</div>
  }
}


class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = { remmber: true }
    this.onChange = this.OnChangeRemmber.bind(this)
  }
  OnChangeRemmber(e) {

  }
  render() {
    return <form method="post" acceptCharset="utf-8" action="/u/login">
      <input type="hidden" name="_method" value="POST" />
      <Email />
      <Password />
      <input type="hidden" name="remember_me" value="0" />
      <p>
        <label htmlFor="remember-me">
          <input
            type="checkbox"
            name="remember-me"
            value="1"
            defaultChecked
            onChange={this.OnChangeRemmber}
            id="remember-me" />
          Remember me
              </label>
      </p>
      <p>
        <a href="register.html" className="inlink" > Register </a>
        | <a href="#request-reset-password" className="inlink" > Reset Password </a>
      </p>
      <RaisedButton label="Login" type="submit" primary style={style} />
    </form>

  }
}

class Register extends React.Component {
  render() {
    return <form method="post" acceptCharset="utf-8" action="/u/register">
      <input type="hidden" name="_method" value="POST" />
      <Email />
      <Password confirm="1" />
      <span className="col-p100 info" ></span>
      <RaisedButton label="Register" type="submit" primary style={style} />
    </form>

  }
}


ReactDOM.render(<MuiThemeProvider>
  <Layout title="Login" >
    <Register></Register>
    <Login></Login>
  </Layout>
</MuiThemeProvider>, document.getElementById('app'))