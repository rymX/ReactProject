import React ,{Component} from 'react';
import axios  from 'axios'
import { Link } from 'react-router-dom';
class Signin extends Component {
    constructor(props){
       super(props);
       this.state = {
         error :'Or sign in with credentials'
       }

        this.handelSuccess = this.handelSuccess.bind(this);
    }
   

    handelSuccess(data){
        this.props.handelLogin(data);
        this.props.history.push('/profile');
      }


     handelvalue = event =>{
        event.preventDefault();
        const email =event.target.elements.email.value;
       const password =event.target.elements.password.value;

       axios.get(`http://localhost:3001/compts/email/${email}/password/${password}`)
  
       .then(response => {
         console.log(response);
        if (response.data.length >0)
          { this.handelSuccess(response.data[0])
          } 
            
      
    
  
  })
  .catch(function (error) {
    console.log(error);
  })
  

    }
    render() { 
        return (
            <div className="bg-default">
                  <div className="main-content">
        {/* Navbar */}
        <nav className="navbar navbar-top navbar-horizontal navbar-expand-md navbar-dark">
          <div className="container px-4">
            <a className="navbar-brand" href="../index.html">
              <h4 className="text-white" >App Logo</h4>
            </a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbar-collapse-main" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon" />
            </button>
            <div className="collapse navbar-collapse" id="navbar-collapse-main">
              {/* Collapse header */}
              <div className="navbar-collapse-header d-md-none">
                <div className="row">
                  <div className="col-6 collapse-brand">
                    <a href="../index.html">
                      <img src="../assets/img/brand/blue.png" />
                    </a>
                  </div>
                  <div className="col-6 collapse-close">
                    <button type="button" className="navbar-toggler" data-toggle="collapse" data-target="#navbar-collapse-main" aria-controls="sidenav-main" aria-expanded="false" aria-label="Toggle sidenav">
                      <span />
                      <span />
                    </button>
                  </div>
                </div>
              </div>
              {/* Navbar items */}
              <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                  <div className="nav-link nav-link-icon">
                    <i className="ni ni-planet" />
                    <span className="nav-link-inner--text">
                      <Link className="link" to="/">
                      Accueil
                      </Link>
                      </span>
                  </div>
                </li>
                <li className="nav-item">
                  <div className="nav-link nav-link-icon" >
                    <i className="ni ni-circle-08" />
                    <span className="nav-link-inner--text">
                      <Link className="link"  to="/Signup">
                      Register
                      </Link>
                      </span>
                  </div>
                </li>
                <li className="nav-item">
                  <div className="nav-link nav-link-icon" >
                    <i className="ni ni-key-25" />
                    <span className="nav-link-inner--text">
                      <Link className="link" to="/Signin" >
                      Login
                      </Link>
                      </span>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        {/* Header */}
        <div className="header bg-gradient-primary py-7 py-lg-8">
          <div className="container">
            <div className="header-body text-center mb-7">
              <div className="row justify-content-center">
                <div className="col-lg-5 col-md-6">
                  <h1 className="text-white">Welcome!</h1>
                  <p className="text-lead text-light">Use these awesome forms to login or create new account in your project for free.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="separator separator-bottom separator-skew zindex-100">
            <svg x={0} y={0} viewBox="0 0 2560 100" preserveAspectRatio="none" version="1.1" xmlns="http://www.w3.org/2000/svg">
              <polygon className="fill-default" points="2560 0 2560 100 0 100" />
            </svg>
          </div>
        </div>
        {/* Page content */}
        <div className="container mt--8 pb-5">
          <div className="row justify-content-center">
            <div className="col-lg-5 col-md-7">
              <div className="card bg-secondary shadow border-0">
                <div className="card-header bg-transparent pb-5">
                  <div className="text-muted text-center mt-2 mb-3"><small>Sign in with</small></div>
                  <div className="btn-wrapper text-center">
                    <a href="#" className="btn btn-neutral btn-icon">
                      <span className="btn-inner--icon"><img src="../assets/img/icons/common/github.svg" /></span>
                      <span className="btn-inner--text">Github</span>
                    </a>
                    <a href="#" className="btn btn-neutral btn-icon">
                      <span className="btn-inner--icon"><img src="../assets/img/icons/common/google.svg" /></span>
                      <span className="btn-inner--text">Google</span>
                    </a>
                  </div>
                </div>
                <div className="card-body px-lg-5 py-lg-5">
                  <div className="text-center text-muted mb-4">
                    <small> {this.state.error} </small>
     {/* { .length ==0 ?  <small> Or sign in with credentials</small> : <small> email not correct</small>  } */}
                  </div>


                  {/**forme */}


                  <form onSubmit={this.handelvalue}>
                    <div className="form-group mb-3">
                      <div className="input-group input-group-alternative">
                        <div className="input-group-prepend">
                          <span className="input-group-text"><i className="ni ni-email-83" /></span>
                        </div>
                        <input name="email" className="form-control" placeholder="email" />
                      </div>
                    </div>
                    <div className="form-group">
                      <div className="input-group input-group-alternative">
                        <div className="input-group-prepend">
                          <span className="input-group-text"><i className="ni ni-lock-circle-open" /></span>
                        </div>
                        <input name="password" className="form-control" placeholder="Password" type="password" />
                      </div>
                    </div>
                    <div className="custom-control custom-control-alternative custom-checkbox">
                      <input className="custom-control-input" id=" customCheckLogin" type="checkbox" />
                      <label className="custom-control-label" htmlFor=" customCheckLogin">
                        <span className="text-muted">Remember me</span>
                      </label>
                    </div>
                    <div className="text-center">
                      <button type="submit" className="btn btn-primary my-4">Sign in</button>
                    </div>
                  </form>



                </div>
              </div>
              <div className="row mt-3">
                <div className="col-6">
                  <a href="#" className="text-light"><small>Forgot password?</small></a>
                </div>
                <div className="col-6 text-right">
                  
                  <a href="#" className="text-light">
                    <small>
                     <Link to="/Signup" >Create new account </Link> 
                      </small>
                    </a>
                  
                </div>
              </div>
            </div>
          </div>
        </div>
        <footer className="py-5">
          <div className="container">
            <div className="row align-items-center justify-content-xl-between">
              <div className="col-xl-6">
                <div className="copyright text-center text-xl-left text-muted">
                  © 2018 <a href="https://www.creative-tim.com" className="font-weight-bold ml-1" target="_blank">Creative Tim</a>
                </div>
              </div>
              <div className="col-xl-6">
                <ul className="nav nav-footer justify-content-center justify-content-xl-end">
                  <li className="nav-item">
                    <a href="https://www.creative-tim.com" className="nav-link" target="_blank">Creative Tim</a>
                  </li>
                  <li className="nav-item">
                    <a href="https://www.creative-tim.com/presentation" className="nav-link" target="_blank">About Us</a>
                  </li>
                  <li className="nav-item">
                    <a href="http://blog.creative-tim.com" className="nav-link" target="_blank">Blog</a>
                  </li>
                  <li className="nav-item">
                    <a href="https://github.com/creativetimofficial/argon-dashboard/blob/master/LICENSE.md" className="nav-link" target="_blank">MIT License</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </footer>
      </div>
      {/*   Core   */}
      {/*   Optional JS   */}
      {/*   Argon JS   */}
    );
            </div>
          );
    }
}
 
export default Signin;