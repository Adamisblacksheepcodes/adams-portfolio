import React from 'react';
import './works.css';
// import Portfolio1 from '../../assets/portfolio-1.png';
import imgspott from '../../assets/imgspott.png';
import imghylyt from '../../assets/imghylyt.png';
import imgabby from '../../assets/imgabby.png';
import imgamb from '../../assets/imgamb.png';
import undercons from '../../assets/undercons.png';
import Portfolio6 from '../../assets/portfolio-6.png';


const Works = () => {
    return (
        <section id='works'>
            <h2 className="worksTitle">My Portfolio</h2>
            <span className="worksDesc">I take pride in paying attention to the smallest details and making sure that my work is pixel perfect. I am excited to bring my skills and experience to help businesses achieve their goals and create a strong online presence.</span>
            {/* <div className="worksImgs">
                <img src={Portfolio1} alt="" className="worksImg" />
                <img src={Portfolio2} alt="" className="worksImg" />
                <img src={Portfolio3} alt="" className="worksImg" />
                <img src={Portfolio4} alt="" className="worksImg" />
                <img src={Portfolio5} alt="" className="worksImg" />
                <img src={Portfolio6} alt="" className="worksImg" />
            </div> */}
            <button className="workBtn">See More</button><div className="worksImgs" />
            <div class="workcardcontainer">
                <div class="workcardesrp">
                    <img src={imgspott} alt="" className="worksImg" />
                    <p class="workcardpara">Jamming is a React web application that calls the spotify API and saves a plalist to spotify</p>
                </div>
                <div class="workcardesrp">
                    <img src={imghylyt} alt="" className="worksImg" />
                    <p class="workcardpara"> Hylyts was crafted using HTML, CSS, and JavaScript for a seamless and eco-friendly user experience."</p>
                </div>
                <div class="workcardesrp">
                    <img src={imgabby} alt="" className="worksImg" />
                    <p class="workcardpara">Abby's Event is an interactive event website built with HTML, CSS, and JavaScript.</p>
                </div>
                <div class="workcardesrp">
                    <img src={imgamb} alt="" className="worksImg" />
                    <p class="workcardpara">Ambience Hotel is a hotel website with a seamless online experience, elegantly designed with HTML, CSS, and JavaScript.</p>
                </div>
                <div class="workcardesrp">
                    <img src={undercons} width="240" alt="" className="worksImg" />
                    <p class="workcardpara">Craving is a cutting-edge food delivery web app in the making with the use of React, Redux, javaScript, and firebase</p>
                </div>
                <div class="workcardesrp">
                    <img src={Portfolio6} alt="" className="worksImg" />
                    <p class="workcardpara">Ready for the next project? Let's collaborate on something amazing! What project should I embark on next?</p>
                </div>
            </div>
                
                
                
            

        </section>
    );
}

export default Works;