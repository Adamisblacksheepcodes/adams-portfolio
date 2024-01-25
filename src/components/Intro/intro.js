import React from 'react';
import './intro.css';
import bg from '../../assets/image.png';
import Lo from '../../assets/Lo.png';
import { Link } from 'react-scroll';

const Intro = () => {
    return (
        <section id="intro">
            <div className="introContent">
                <span className="hello">Hello,</span>
                <span className="introText">I'm <span className="introName">Adam</span> <br />Web Developer</span>                
                <p className="introPara">I am a Front-End Developer located in the UK <br />
                    who has a passion for UI effects, animations,<br />
                    and creating intuitive, dynamic user experiences.</p>

                <Link onClick={() => {
                document.getElementById('contact').scrollIntoView({behavior: 'smooth'});}}><button className="btn">Hire Me</button></Link>

                {/* <button className="desktopMenuBtn" onClick={() => {
                document.getElementById('contact').scrollIntoView({behavior: 'smooth'});
            }}>
                <img src={contactImg} alt="" className="desktopMenuImg" />Contact Me</button> */}



            </div>
            <img src={Lo} alt="Profile" className="bg" />
            <div class="flash">
				<p class="flash__hello">"Hello world"</p>
				<p class="flash__script"> script </p>
				<p class="flash__hakon"> Hakon Wium Lie</p>
				<p class="flash__tim">Tim Berners-Lee</p>
				<p class="flash__sass">Sass vs Css</p>
				<p class="flash__html5">React</p>
				<p class="flash__est">Est. 1089</p>
				<p class="flash__key">@Keyframes</p>
				<p class="flash__css3">Css3</p>
				<p class="flash__stylesheet">TypeScript</p>
				<p class="flash__bootstrap">Bootstrap</p>
				<p class="flash__data">Data Structures</p>
				<p class="flash__algorithm">Algorithm</p>
				<p class="flash__dom">Virtual DOM</p>
				<p class="flash__functions">Functions</p>
				<p class="flash__objects">Redux</p>
				<p class="flash__maps">Maps</p>
			</div>
        </section>
    );
}

export default Intro;