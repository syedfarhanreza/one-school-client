import React from 'react';
import { FaDiscord, FaFacebook, FaGithub } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="page-footer font-small blue pt-4 bg-dark mt-4">
    <div className="container-fluid text-center text-md-left">
        <div className="row">
            <div className="col-md-6 mt-md-0 mt-3">
                <h5 className="text-uppercase text-white">OneSchool</h5>
                <p className='text-white'>“The most profound words will remain unread unless you can keep the learner engaged. You can’t see their eyes to know if they got it so … say it, show it, write it, demo it and link it to an activity.” </p>
            </div>

            <hr className="clearfix w-100 d-md-none pb-0"/>

            <div className="col-md-3 mb-md-0 mb-3">
                <h5 className="text-uppercase">Links</h5>
                <ul className="list-unstyled">
                    <li><Link className='text-success'><FaFacebook></FaFacebook> Facebook</Link></li>
                    <li><Link  className='text-success'><FaGithub></FaGithub> Github</Link></li>
                    <li><Link  className='text-success'><FaDiscord></FaDiscord> Discord</Link></li>
                    <li><Link  className='text-success'>About Us</Link></li>
                </ul>
            </div>
        </div>
    </div>

    <div className="footer-copyright text-center py-3 text-white">© 2022 Copyright:
        <Link className='text-decoration-none text-white'> OneSchool</Link>
    </div>

</footer>
    );
};

export default Footer;