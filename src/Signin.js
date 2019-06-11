import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import './Signin.css';

// function Signin() {
  // import React, { Component } from 'react';

class Signin extends Component {
    constructor (props){
        super(props);
        this.state={
            name:"Arun"
        }
        console.log("lifecycle A");
    }
    componentWillMount()
    {
        console.log("Will mount");
        alert("Will Mount")
    }
    componentDidMount(){
        console.log("Did mount");
      }
    render() {
        return (
          <div className="App">
          <header className="App-header">
            <form>
              <h2>SIGN IN</h2>
    
              <label>
                <input type="text" placeholder="Email AAddress" name="name" /><br></br>
                <input type="text" placeholder="Password" name="name" /><br></br>
              </label>
              <input id="button" type="submit" value="Submit" /><br></br>
              <a id="forgot" href="">Forgot password?</a>
            </form>
          </header>
        </div>
        );
    }
}

// export default LifecycleA;
//   class Signin extends Component {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <form>
//           <h2>SIGN IN</h2>

//           <label>
//             <input type="text" placeholder="Email AAddress" name="name" /><br></br>
//             <input type="text" placeholder="Password" name="name" /><br></br>
//           </label>
//           <input id="button" type="submit" value="Submit" /><br></br>
//           <a id="forgot" href="">Forgot password?</a>
//         </form>
//       </header>
//     </div>
//   );
// }

export default Signin;
