import React from 'react' ;
import One from '../../../Assets/featured/One.png'
import Two from '../../../Assets/featured/Two.png' ;
import Three from '../../../Assets/featured/Three.png' ;
import Four from '../../../Assets/featured/Four.png' ;

const Featured = () => {
    return(
        <div className="featured">
            <div className="head">
                <div className="name">
                    <h1>FEATURED PROJECTS</h1>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
                </div>
                <button>VIEW ALL</button>
            </div>

            <div className="project">
                <div className="pOne left">
                    <div className="imgContainer">
                        <img src={One} alt="" />
                    </div>
                    <div className="info">
                        <h3>The Company</h3>
                        <h5>KNOW MORE &rarr;</h5>
                    </div>
                </div>

                <div className="pOne right">
                    <div className="imgContainer">
                        <img src={Two} alt="" />
                    </div>
                    <div className="info">
                        <h3>The Vintage</h3>
                        <h5>KNOW MORE &rarr;</h5>
                    </div>
                </div>

                <div className="pOne left">
                    <div className="imgContainer">
                        <img src={Three} alt="" />
                    </div>
                    <div className="info">
                        <h3>Lang Accent</h3>
                        <h5>KNOW MORE &rarr;</h5>
                    </div>
                </div>

                <div className="pOne right">
                    <div className="imgContainer">
                        <img src={Four} alt="" />
                    </div>
                    <div className="info">
                        <h3>Mozark</h3>
                        <h5>KNOW MORE &rarr;</h5>
                    </div>
                </div>
            </div>

            <div className="contact">
                <div className="left">
                    <h1>Let's work together on your next project</h1>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit, sint quibusdam distinctio fugiat quia eius aliquam</p>
                </div>
                <button>CONTACT</button>
            </div>
        </div>
    );
}

export default Featured ;