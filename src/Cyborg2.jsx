import React, { Component } from 'react'
export default class More extends Component {
    render() {
        return (
            <div className="App">
                <div className='navbar'>
                    <div className='logo'>

                        <img src={"../LOGO.jpeg"} className='go' alt="no" />

                    </div>
                    <div className='search'>
                        <input type="text" placeholder="🔍 Type Something.." background-color="grey" />
                    </div>
                    <div className='links'>
                        <a href="">Home</a>
                        <a href="">Browse</a>
                        <a href="">Details</a>
                        <a href="">Streams</a>
                        <a href="">Feedback</a>
                        <div className='prof'>
                            <a href="">Profile</a>

                            <img src={"../images.jpg"} className='profileimg' alt="no" width="40px" height="40px" />

                        </div>
                    </div>
                </div>
                <div className='bigbox'>
                    <div className='box1'>
                        <p>Welcome To Cyborg</p> <br />
                        <h1><span style={{color:"pink"}}>BROWSE </span>  OUR POPULAR<br /> GAMES HERE</h1> <br />
                        <button className="start">Browse Now</button>
                    </div>

                    <div className="box2">
                        <h2><u> Most Popular</u> Right Now</h2>


                        <div className='cardbox'>


                            <div className="card1">
                                <img src={"../B1.jpeg"} alt="no" />
                                <table width="195px">
                                    <thead>
                                        <tr>
                                            <th>Fortnite</th>
                                            <th id="align">⭐4.8</th>
                                        </tr>
                                    </thead>
                                    <tfoot>
                                        <tr>
                                            <td>Sandbox</td>
                                            <td id="align">📩2.3M</td>
                                        </tr>
                                    </tfoot>


                                </table>

                            </div>

                            <div className="card2">
                                <img src={"../B2.jpeg"} alt="no" />
                                <table width="195px">
                                    <thead>
                                        <tr>
                                            <th>PubG</th>
                                            <th id="align">⭐4.8</th>
                                        </tr>
                                    </thead>
                                    <tfoot>
                                        <tr>
                                            <td>Battle S</td>
                                            <td id="align">📩2.3M</td>
                                        </tr>
                                    </tfoot>
                                </table>
                            </div>

                            <div className="card3">
                                <img src={"../B3.jpeg"} alt="no" />
                                <table width="195px">
                                    <thead>
                                        <tr>
                                            <th>Data 2</th>
                                            <th id="align">⭐4.8</th>
                                        </tr>
                                    </thead>
                                    <tfoot>
                                        <tr>
                                            <td>Stream-X</td>
                                            <td id="align">📩2.3M</td>
                                        </tr>
                                    </tfoot>
                                </table>
                            </div>

                            <div className="card4">
                                <img src={"../B4.jpeg"} alt="no" />
                                <table width="195px">
                                    <thead>
                                        <tr>
                                            <th>CS-GO</th>
                                            <th id="align">⭐4.8</th>
                                        </tr>
                                    </thead>
                                    <tfoot>
                                        <tr>
                                            <td>Legendary</td>
                                            <td id="align">📩2.3M</td>
                                        </tr>
                                    </tfoot>
                                </table>
                            </div>

                            <div className="card5">
                                <img src={"../B5.jpeg"} alt="no" />
                                <img src={"../B6.jpeg"} alt="no" />

                                <table width="195px">
                                    <thead>
                                        <tr>
                                            <th>Mini Craft</th>
                                            <th id="align">⭐4.8</th>
                                        </tr>
                                    </thead>
                                    <tfoot>
                                        <tr>
                                            <td>Legendary</td>
                                            <td id="align">📩2.3M</td>
                                        </tr>
                                    </tfoot>
                                </table>
                                <table width="195px">
                                    <thead>
                                        <tr>
                                            <th>Eagles Fly</th>
                                            <th id="align">⭐4.8</th>
                                        </tr>
                                    </thead>
                                    <tfoot>
                                        <tr>
                                            <td>Matrix Games</td>
                                            <td id="align">📩2.3M</td>
                                        </tr>
                                    </tfoot>
                                </table>
                            </div>

                            <div className="card6">
                                <img src={"../B7.jpeg"} alt="no" />
                                <table width="195px">
                                    <thead>
                                        <tr>
                                            <th>Warface</th>
                                            <th id="align">⭐4.8</th>
                                        </tr>
                                    </thead>
                                    <tfoot>
                                        <tr>
                                            <td>Max 3D</td>
                                            <td id="align">📩2.3M</td>
                                        </tr>
                                    </tfoot>
                                </table>
                            </div>

                            <div className="card7">
                                <img src={"../B8.jpeg"} alt="no" />
                                <table width="195px">
                                    <thead>
                                        <tr>
                                            <th>Warcraft</th>
                                            <th id="align">⭐4.8</th>
                                        </tr>
                                    </thead>
                                    <tfoot>
                                        <tr>
                                            <td>Legend</td>
                                            <td id="align">📩2.3M</td>
                                        </tr>
                                    </tfoot>
                                </table>
                            </div>
                        </div>
                    </div>

                    <div>
                        <button id="upper">Discover Popular</button>
                    </div>


                    <div className="box3">
                        <h2><u>Your Gaming</u>  Library</h2>

                        <table className="lib">

                            <tr>
                                <td className="align2"><img src={"../B5.jpeg"} alt="no" height="40px" /></td>
                                <td>Data 2 <br /> Sandbox</td>
                                <td className="align2">Date Added <br /> 24/08/2036
                                </td>
                                <td className="align2">Hours Played <br />634 H 22  Mins
                                </td>
                                <td className="align2">Currently <br /> Downloaded
                                </td>
                                <td className="align2"> <button className="down">Downloaded</button></td>
                            </tr>

                            <tr >
                                <td className="align2"><img src={"../B1.jpeg"} alt="no" height="40px" /></td>
                                <td>Fortnite <br /> Sandbox </td>
                                <td className="align2">Date Added <br /> 22/06/2036
                                </td>
                                <td className="align2">Hours Played <br /> 740 H 52  Mins
                                </td>
                                <td className="align2">Currently <br />  Download </td>
                                <td className="align2"> <button className="down">Download</button></td>
                            </tr>

                            <tr>
                                <td className="align2"><img src={"../B2.jpeg"} alt="no" height="40px" /></td>
                                <td>CS-GO <br /> Sandbox</td>
                                <td className="align2">Date Added <br /> 21/04/2036
                                </td>
                                <td className="align2">Hours Played <br /> 892 H 14  Mins
                                </td>
                                <td className="align2">Currently <br />  Downloaded
                                </td>
                                <td className="align2"> <button className="down">Downloaded</button></td>
                            </tr>

                        </table>

                    </div>
                    <div>
                        <button id="upper">View Your Library</button>
                    </div>
                    
                </div>
                <p className='foot'>Copyright ©️ 2036 Cyborg Gaming Company. All rights reserved. <br/> Design: TemplateMo</p>
            </div >)
    }
}
