import React from 'react'
import { Link } from 'react-router-dom';
import './Home.css';
class Home extends React.Component {
    render() {
        return (
            < div className="AppHome">
                <div className="bgImg src1">
                    <div className="home">
                        <h1>Old Trafford</h1>
                    </div>
                </div>
                <div className="bgImg src2">
                    <div className="home">
                        <h1>Camp Nou</h1>
                    </div>
                </div>
                <div className="bgImg src3">
                    <div className="home">
                        <h1>Anfield</h1>
                    </div>
                </div>
                <div className="bgImg src4">
                    <div className="home">
                        <h1>Estadio Santiago Bernabéu</h1>
                    </div>
                </div>


            </div>
        )
    }
}

export default Home;
