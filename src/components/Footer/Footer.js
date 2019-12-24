import React from 'react';
import classes from './Footer.module.css';
import lazuLogo from '../../assets/img/lazulilogo7.jpg';
import { Container, Grid } from '@material-ui/core';
import NavLink from '../NavLink/NavLink';

const myFooter = () => {
    return(
//         <div>
//             <footer className={`page-footer ${classes.blueBackground} ${classes.footerStyle}`}>

// <div className="container-fluid text-center text-md-left">

// <div className="row">

// <div className="col-md-6 mt-md-0 mt-3">

//         <div class="view overlay z-depth-1-half">
//           <img src={lazuLogo} class="img-fluid"
//             alt="" />
//         </div>

// </div>


// <hr className="clearfix w-100 d-md-none pb-3" />

// <div className="col-md-3 mb-md-0 mb-3">

//     <h5 className="text-uppercase">Links</h5>

//     <ul className="list-unstyled">
//     <li>
//         <a href="#!">Link 1</a>
//     </li>
//     <li>
//         <a href="#!">Link 2</a>
//     </li>
//     <li>
//         <a href="#!">Link 3</a>
//     </li>
//     <li>
//     <a href="#!">Link 4</a>
// </li>
// </ul>

// </div>


// <div className="col-md-3 mb-md-0 mb-3">

// <h5 className="text-uppercase">Links</h5>

// <ul className="list-unstyled">
// <li>
//     <a href="#!">Link 1</a>
// </li>
// <li>
//     <a href="#!">Link 2</a>
// </li>
// <li>
//     <a href="#!">Link 3</a>
// </li>
// <li>
//     <a href="#!">Link 4</a>
// </li>
// </ul>

// </div>


// </div>

// </div>



// <div className="footer-copyright text-center py-3">© 2018 Copyright:
// <a href="https://mdbootstrap.com/education/bootstrap/"> MDBootstrap.com</a>
// </div>

// </footer>
//         </div>

            <div className={classes.lightBackground}>
            <Grid container direction='row' justify='flex-start' alignItems='flex-start' spacing={3}>
                <Grid item xs={1}>
                    <img className={classes.logoImg} src={lazuLogo} alt="lazulli logo" />
                </Grid>
                <Grid item xs={6}>
                    <ul>
                        <li>
                            <NavLink to="#home" content="Home" />
                        </li>
                        <li>
                        <NavLink to="#servicos" content="Servicos" />
                        </li>
                        <li>
                            <NavLink to="#about" content="About" />
                        </li>
                        <li>
                            <NavLink to="#contato" content="Contato" />
                        </li>
                    </ul>
                </Grid>
            </Grid>
            </div>
    );
};

export default myFooter;