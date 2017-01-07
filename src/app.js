const React = require('react')
const ReactDOM = require('react-dom')
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import TextField from 'material-ui/TextField';
import {orange500, blue500} from 'material-ui/styles/colors';
import RaisedButton from 'material-ui/RaisedButton';

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

const Layout = React.createClass({
    propTypes:{
      children: React.PropTypes.element.isRequired
    },
    render: function(){
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
})


const Email = React.createClass({
    render: function(){
        return <TextField 
          type="email" 
          name="email" 
          required 
          floatingLabelText="Your email" 
          pattern="^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$" 
          maxLength="255" 
          floatingLabelStyle={styles.floatingLabelStyle}
          floatingLabelFocusStyle={styles.floatingLabelFocusStyle}
          id="email"  />
    }
})

const Password = React.createClass({
    render: function(){
        return <TextField 
          type="password" 
          name="password" 
          required 
          id="password" 
          floatingLabelText="Password" 
          pattern="^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$" 
          maxLength="255" 
          floatingLabelStyle={styles.floatingLabelStyle}
          floatingLabelFocusStyle={styles.floatingLabelFocusStyle} />
    }
})

const PasswordConfirm = React.createClass({
    render: function(){
        return <TextField 
          type="password" 
          name="password2" 
          required 
          id="password2" 
          floatingLabelText="Password Confirm" 
          pattern="^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$" 
          maxLength="255" 
          floatingLabelStyle={styles.floatingLabelStyle}
          floatingLabelFocusStyle={styles.floatingLabelFocusStyle} />
    }
})

const Login = React.createClass({
    getInitialState: function() {
      return {remmber:true}
    },
    OnChangeRemmber: function(e){

    },
    render: function(){
        return <form method="post" acceptCharset="utf-8" action="/u/login">
            <input type="hidden" name="_method" value="POST"  />
            <Email />
            <Password />
            
            <input type="hidden" name="remember_me" value="0" />
            <p>
                <label htmlFor="remember-me">
                    <input type="checkbox" name="remember-me" value="1" defaultChecked onChange={this.OnChangeRemmber} id="remember-me" />
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
})

const Register = React.createClass({
    render: function(){
        return <form method="post" acceptCharset="utf-8" action="/u/register">
            <input type="hidden" name="_method" value="POST"  />
            <Email />
            <Password />
            <PasswordConfirm />
            <span className="col-p100 info" ></span>
            <RaisedButton label="Register" type="submit" primary style={style} /> 
        </form>

    }
})


ReactDOM.render(<MuiThemeProvider>
    <Layout title="Login" >
      <Register></Register>
      <Login></Login>
    </Layout>
  </MuiThemeProvider>, document.getElementById('app'))