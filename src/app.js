const React = require('react')
const ReactDOM = require('react-dom')

const Layout = React.createClass({
    render: function(){
        return <div className="overlay">
            <div className="box">
                <h2>{this.props.title}</h2>
               
            </div>
            <footer>By signing up, you are agreeing to our 
                <a href="/terms"> Terms of Service </a> 
                and to our
                <a href="/privacy"> Privacy Policy </a> 
            </footer>
        </div>
    }
})

ReactDOM.render(<Layout title="Login" />, document.getElementById('app'))