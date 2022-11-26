import './aside.scss'
import Logo from '../../components/img/logo-image.svg'
import SmallLogo from '../../components/img/small-logo.svg'
import React, { useState, FC } from "react";

function Aside() {
    const [toggle, setToggle] = useState(false);

    return (
        <div className="aside">
            <img src={Logo} onClick={() => setToggle(!toggle)} />
            {toggle ?
                <div className='small-aside' id='small-aside'>
                    <aside>
                        <div className='medicine'>
                            {/* <h2>medicine</h2> */}
                            <nav>
                                <ul>
                                    <li className='dash'><a href='#'></a></li>
                                    <li className='appoint'><a href='#'></a></li>
                                    <li className='dr'><a href='#'></a></li>
                                    <li className='depart'><a href='#'></a></li>
                                    <li className='patients'><a href='#'></a></li>
                                    <li className='pay'><a href='#'></a></li>
                                    <li className='help'><a href='#'></a></li>
                                </ul>
                            </nav>
                        </div>
                    </aside>
                </div>
                :
                <div className="main-aside" id='main-aside'>
                    <aside>
                        <div className='medicine'>
                            <h2 >medicine</h2>
                            <nav>
                                <ul>
                                    <li className='dash'><a href='#'>Dashboard</a></li>
                                    <li className='appoint'><a href='#'>Appointments</a></li>
                                    <li className='dr'><a href='#'>Doctors</a></li>
                                    <li className='depart'><a href='#'>Departments</a></li>
                                    <li className='patients'><a href='#'>Patients</a></li>
                                    <li className='pay'><a href='#'>Payments</a></li>
                                    <li className='help'><a href='#'>Help</a></li>
                                </ul>
                            </nav>
                        </div>
                    </aside>
                </div>
            }
        </div>
    );
}

export default Aside;