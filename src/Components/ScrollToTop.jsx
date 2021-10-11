import React, {useState} from 'react'
import {ScrollToTheTop} from "../CSS/CSS";

const ScrollToTop = (props) => {
    const [visible, setVisible] = useState(false)
    const toggleVisible = () => {
        const scrolled = document.documentElement.scrollTop;
        if (scrolled > 300) {
            setVisible(true)
        } else if (scrolled <= 300) {
            setVisible(false)
        }
    };

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };
    window.addEventListener('scroll', toggleVisible);

    return (
        <ScrollToTheTop justify-content={"end"} onClick={scrollToTop}
                        style={{display: visible ? 'inline' : 'none'}}>
            <svg width="24" height="24" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M5.2098 10.0784C5.1433 10.0121 5.09053 9.93326 5.05453 9.8465C5.01853 9.75974 5 9.66673 5 9.5728C5 9.47887 5.01853 9.38586 5.05453 9.2991C5.09053 9.21234 5.1433 9.13353 5.2098 9.0672L9.49458 4.78242C9.56092 4.71591 9.63972 4.66315 9.72648 4.62715C9.81324 4.59115 9.90625 4.57261 10.0002 4.57261C10.0941 4.57261 10.1871 4.59115 10.2739 4.62715C10.3606 4.66315 10.4395 4.71591 10.5058 4.78242L14.7906 9.0672C14.9247 9.20129 15 9.38316 15 9.5728C15 9.76244 14.9247 9.94431 14.7906 10.0784C14.6565 10.2125 14.4746 10.2878 14.285 10.2878C14.0953 10.2878 13.9135 10.2125 13.7794 10.0784L10.0002 6.2978L6.22101 10.0784C6.15467 10.1449 6.07587 10.1977 5.98911 10.2337C5.90235 10.2697 5.80934 10.2882 5.71541 10.2882C5.62147 10.2882 5.52846 10.2697 5.4417 10.2337C5.35494 10.1977 5.27614 10.1449 5.2098 10.0784Z"
                    fill="#295E96"/>
                <path
                    d="M10.0002 16C9.81083 16 9.62919 15.9248 9.49527 15.7908C9.36134 15.6569 9.2861 15.4753 9.2861 15.2859L9.2861 6.00218C9.2861 5.81278 9.36134 5.63114 9.49527 5.49721C9.62919 5.36329 9.81083 5.28805 10.0002 5.28805C10.1896 5.28805 10.3713 5.36329 10.5052 5.49721C10.6391 5.63114 10.7144 5.81278 10.7144 6.00218L10.7144 15.2859C10.7144 15.4753 10.6391 15.6569 10.5052 15.7908C10.3713 15.9248 10.1896 16 10.0002 16Z"
                    fill="#295E96"/>
            </svg>
        </ScrollToTheTop>
    )
}

export default ScrollToTop