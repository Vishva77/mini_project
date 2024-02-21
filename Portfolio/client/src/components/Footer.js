import "./Footer.css";
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import YoutubeIcon from '@mui/icons-material/YouTube';

export function Footer() {
    return(
        <div id="Footer">
            <h4>@Since 2004</h4>
            <br/>
            <div className="icons">
                <a href="https://www.instagram.com/">
                    <InstagramIcon sx={{ fontSize: 35,color:"red"}}/>
                </a>
                <a href="https://www.youtube.com/">
                    <YoutubeIcon sx={{ fontSize: 40,color:"red" }}/>
                </a>
                <a href="https://www.facebook.com/">
                    <FacebookIcon sx={{ fontSize: 38,color:"skyblue" }}/>
                </a>
            </div>

        </div>
    );
}