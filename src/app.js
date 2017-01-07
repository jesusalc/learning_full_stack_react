const React = require('react')
const ReactDOM = require('react-dom')

const Layout = React.createClass({
    propTypes:{
      chidren: React.PropTypes.element.isRequired
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

const Login = React.createClass({
    render: function(){
        return                 <form method="post" accept-charset="utf-8" action="/u/login">
                    <input type="hidden" name="_method" value="POST"  />
                    <input type="email" name="email" required="required" placeholder="Your email" id="email"  />
                    <input type="password" name="password" required="required" placeholder="Password" id="password"  />
                    <input type="hidden" name="remember_me" value="0" />
                    <p>
                        <label htmlFor="remember-me">
                            <input type="checkbox" name="remember-me" value="1" checked="checked" id="remember-me" />
                            Remember me
                        </label>
                    </p>
                    <a href="register.html" className="inlink" > Register </a>
                    <a href="#request-reset-password" className="inlink" > Reset Password </a>
                    <button type="submit" >Login</button>
                </form>

    }
})

const Register = React.createClass({
    render: function(){
        return                 <form method="post" accept-charset="utf-8" action="/u/register">
                    <input type="hidden" name="_method" value="POST"  />
                    <input type="email" name="email" required data-info="An active email account is needed to gain access" title="An active email account is needed to gain access" pattern="^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$" maxLength="255" placeholder="Your email" max id="email"  />
                    <input type="password" name="password" required="required" placeholder="Password" id="password"  />
                    <input type="password" name="password2" required="required" placeholder="Password Confirm" id="password2"  />
                    <span className="col-p100 info" ></span>
                    <button type="submit" >Register</button>
                </form>

    }
})


ReactDOM.render(<Layout title="Login" >
  <Register></Register>
</Layout> , document.getElementById('app'))