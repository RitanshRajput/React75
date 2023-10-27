import React from 'react' ;
import {AiOutlineAntDesign} from 'react-icons/ai'
import {RiDashboardFill} from 'react-icons/ri'
import {TbBrandOpenai} from 'react-icons/tb'

const Card = () => {

    return(
        <div className="card">
            <div className="partOne"></div>

            <div className="partTwo">
                <div className="sectionOne">
                <div className="design">
                    <div className="design1 ui">
                        <AiOutlineAntDesign />
                        <h2>UI Design</h2>
                        <p>Lorem Ipsum is simply text of the printing type</p>
                        <h3>KNOW MORE &rarr;</h3>
                    </div>

                    <div className="design1 product">
                        <RiDashboardFill />
                        <h2>Product Design</h2>
                        <p>Lorem Ipsum is simply text of the printing type</p>
                        <h3>KNOW MORE &rarr;</h3>
                    </div>

                    <div className="design1 branding">
                        <TbBrandOpenai />
                        <h2>Branding</h2>
                        <p>Lorem Ipsum is simply text of the printing type</p>
                        <h3>KNOW MORE &rarr;</h3>
                    </div>
                </div>
                </div>

               <div className="sectionTwo">
                  <div className="exp">
                    <h1>1+</h1>
                    <h2>Years Experience</h2>
                  </div>

                <div className="client">
                    <div className="one">
                        <h2>60+</h2>
                        <p>Clients</p>
                    </div>
                    <div className="one">
                        <h2>02</h2>
                        <p>Years Experience</p>
                    </div>
                    <div className="one">
                        <h2>100+</h2>
                        <p>Completed Projects</p>
                    </div>
                    <div className="one">
                        <h2>10</h2>
                        <p>Achievements</p>
                    </div>
                </div>
               </div>
            </div>
        </div>
    );
}

export default Card;