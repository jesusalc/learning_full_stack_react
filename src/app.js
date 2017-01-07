const React = require('react')
const ReactDOM = require('react-dom')

const Layout = React.createClass({
    render: function(){
        return <div class="overlay">
            <div class="box">
                <h2>Title</h2>
               
            </div>
            <footer>By signing up, you are agreeing to our 
                <a href="/terms"> Terms of Service </a> 
                and to our
                <a href="/privacy"> Privacy Policy </a> 
            </footer>
        </div>
    }
})

ReactDOM.render(<Layout />, document.getElementById('app'))