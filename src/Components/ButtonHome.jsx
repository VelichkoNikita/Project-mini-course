import React from 'react'
import {Link} from "react-router-dom"
import {HomeButton} from "../CSS/CSS";

const ButtonHome = () => {

    return (
        <Link to="/StartPage">
            <HomeButton>
                <svg width="24" height="24" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M10.5311 4.21993C10.3902 4.07911 10.1992 4 10 4C9.80082 4 9.6098 4.07911 9.46893 4.21993L4.21086 9.478C4.07403 9.61967 3.99832 9.80942 4.00003 10.0064C4.00174 10.2033 4.08074 10.3917 4.22001 10.531C4.35928 10.6703 4.54768 10.7493 4.74463 10.751C4.94158 10.7527 5.13132 10.677 5.27299 10.5401L5.49308 10.32V15.2671C5.49308 15.4664 5.57222 15.6574 5.71309 15.7983C5.85395 15.9392 6.04501 16.0183 6.24423 16.0183H7.74654C7.94576 16.0183 8.13682 15.9392 8.27768 15.7983C8.41855 15.6574 8.49769 15.4664 8.49769 15.2671V13.7648C8.49769 13.5656 8.57683 13.3746 8.7177 13.2337C8.85857 13.0928 9.04963 13.0137 9.24885 13.0137H10.7512C10.9504 13.0137 11.1414 13.0928 11.2823 13.2337C11.4232 13.3746 11.5023 13.5656 11.5023 13.7648V15.2671C11.5023 15.4664 11.5814 15.6574 11.7223 15.7983C11.8632 15.9392 12.0542 16.0183 12.2535 16.0183H13.7558C13.955 16.0183 14.146 15.9392 14.2869 15.7983C14.4278 15.6574 14.5069 15.4664 14.5069 15.2671V10.32L14.727 10.5401C14.8687 10.677 15.0584 10.7527 15.2554 10.751C15.4523 10.7493 15.6407 10.6703 15.78 10.531C15.9193 10.3917 15.9983 10.2033 16 10.0064C16.0017 9.80942 15.926 9.61967 15.7891 9.478L10.5311 4.21993V4.21993Z"
                        fill="#295E96"/>
                </svg>
            </HomeButton>
        </Link>
    )
}

export default ButtonHome