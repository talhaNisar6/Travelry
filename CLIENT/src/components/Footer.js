import "./../components/Footer.css";
import facebookIcon from './../images/facebook.jpeg';
import instagramIcon from './../images/instagram.jpeg';
import twitterIcon from './../images/twitter.jpeg';
import linkedinIcon from './../images/linkedin.jpeg';

const Footer = () => {
    return (
        <div className="footer">
            <h1>Travelry</h1>
            <div className="list">
                <ul>
                    <li>Travel</li>
                    <li>Hotels</li>
                    <li>Places</li>
                    <li>Weather</li>
                    <li>To Do's</li>
                    <li>Upload</li>
                </ul>
            </div>
            <div className="icons">
                <ul>
                    <li> <a href="https://www.facebook.com/" target="_blank" rel="noreferrer"> <img src={facebookIcon} className="facebookIcon" alt="facbookIcon" /> </a> </li>
                    <li> <a href="https://www.instagram.com/" target="_blank" rel="noreferrer"> <img src={instagramIcon} className="facebookIcon" alt="instagramIcon" /> </a> </li>
                    <li> <a href="https://www.twitter.com/" target="_blank" rel="noreferrer"> <img src={twitterIcon} className="facebookIcon" alt="twitterIcon" /> </a> </li>
                    <li> <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer"> <img src={linkedinIcon} className="facebookIcon" alt="linkedinIcon" /> </a> </li>
                </ul>
            </div>
            <div className="terms">
                <div className="copyright"> &copy; 2022 Travelry. All Rights Reserved.</div>
                <div className="termsOfUse"><a href="https://www.facebook.com/">Terms of Use</a></div>
                <div className="privacyPolicy"><a href="https://www.facebook.com/">Privacy Policy</a></div>
            </div>

        </div>
    )
}

export default Footer;