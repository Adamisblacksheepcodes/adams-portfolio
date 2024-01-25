import React from 'react';
import './skills.css';
import UIDesign from '../../assets/ui-design.png';
import WebDesign from '../../assets/website-design.png';
import AppDesign from '../../assets/app-design.png';
import minionhello from '../../assets/minionhello.gif';
import minionrocket from '../../assets/minionrocket.gif';
import minionfart from '../../assets/minionfart.gif';

const Skills = () => {
    return (
        <section id='skills'>
            <span className="skillTitle">What I do</span>            
            <span className="skillDesc">Welcome to my digital playground, where pixels come to life and user experiences take center stage. As a passionate 
            front-end developer, I specialize in translating design concepts into seamless, interactive, and visually stunning web 
            applications.</span>

            <div className="skillBars">
                <div className="skillBar">
                    <img src={UIDesign} alt="UIDesign" className="skillBarImg" />
                    <div className="skillBarText">
                        <h2>products</h2>
                        <p>Hi there! i'm Adam, I am a Freelance web developer and digital marketing specialist 
									who works with passionate startups to create their dream website.</p>
                    </div>
                </div>
                <div className="skillBar">
                    <img src={WebDesign} alt="WebDesign" className="skillBarImg" />
                    <div className="skillBarText">
                        <h2>Website Design</h2>
                        <p>I currently work as a freelancer, creating and bringing to life the dream 
									websites and enhancing them into marketing tools to bring about high ROI.</p>
                    </div>
                </div>
                <div className="skillBar">
                    <img src={AppDesign} alt="AppDesign" className="skillBarImg" />
                    <div className="skillBarText">
                        <h2>Partners</h2>
                        <p>have been priviledged to build amazing websites that solve 
									pressing needs of my clients, ranging from driving traffic to conversion that leads to sales.</p>
                    </div>
                </div>


                
                    
                <div class="card">
                    <div class="card__frame">
                        <div class="services__content">								
								<img src={minionhello} alt="" class="about" />
								<p class="services__text"> Hi there! i'm Adam, I am a Freelance web developer and digital marketing specialist 
									who works with passionate startups to create their dream website.
								</p>								
						</div>                    
                        <div class="card__front--upperhalf1 card__front--upperhalf1--color1">
                            <p class="card__label">products</p>
                        </div>
                            
                        <div class="card__front--lowerhalf1 card__front--lowerhalf1--color1">

                        </div>

                    </div>
                </div>                          
                                    
                <div class="card">
                    <div class="card__frame">
                    <div class="services__content">								
								<img src={minionrocket} alt="minion" class="about2" />
								<p class="services__text2"> I currently work as a freelancer, creating and bringing to life the dream 
									websites and enhancing them into marketing tools to bring about high ROI.
								</p>								
						</div>
                        <div class="card__front--upperhalf1 card__front--upperhalf1--color2">
                            <p class="card__label">services</p>
                        </div>

                        <div class="card__front--lowerhalf1 card__front--lowerhalf1--color2">

                        </div>

                    </div>
                </div>           

            
                <div class="card">
                    <div class="card__frame">
                    <div class="services__content">								
								<img src={minionfart} alt="minion" class="about3" />
								<p class="services__text3"> I have been priviledged to build amazing websites that solve 
									pressing needs of my clients, ranging from driving traffic to conversion that leads to sales
								</p>								
						</div>
                        <div class="card__front--upperhalf1 card__front--upperhalf1--color3">
                            <p class="card__label">partners</p>
                        </div>

                        <div class="card__front--lowerhalf1 card__front--lowerhalf1--color3">

                        </div>

                    </div>
                </div>               
                
                    
            </div>
        </section>
    );
}

export default Skills;