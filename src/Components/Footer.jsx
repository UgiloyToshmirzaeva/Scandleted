import './Footer.css'
import Button from './Button'

export default function Footer(props){
    return(
        <div>
        <div className="footer">
           <div className="wrap">
           <div className="foot1">
            <div className="box1">
                    <img className="logo" src="https://i.ibb.co/nf7P2PR/Logo.png" alt="" />
                    <ul className="ul1">
                        <li><a href="#">New Arrivals</a></li>
                        <li><a href="#">About</a></li>
                        <li><a href="#">Influencer</a></li>
                        <li><a href="#">Blog</a></li>
                        <li><a href="#">Contact us</a></li>
                    </ul>
                    <ul className="ul2">
                        <li><a href="#">Facebook</a></li>
                        <li><a href="#">instagram</a></li>
                        <li><a href="#">twitter</a></li>
                        <li><a href="#">linkedin</a></li>
                    </ul>
                    </div>
                    <div className="box2">
                        <h3>Stay in the know — we’ll send you offers & more.</h3>
                        <Button buttonText="SIGN UP" styleType="style2"/>
                    </div>
            </div>
            <hr />
            <div className="foot2">
                <p>© 2022 Scandleted. All right reserved.</p>
                <p>Design Made By TeamUp Agency</p>
            </div>
           </div>

        </div>
        </div>
    )
}