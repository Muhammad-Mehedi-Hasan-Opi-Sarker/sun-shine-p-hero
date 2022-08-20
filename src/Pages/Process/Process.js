import React from 'react';
import { DiAndroid,DiAptana,DiYeoman,DiGoogleAnalytics } from "react-icons/di";
import { Link } from 'react-router-dom';
import Explore from './Explore';


const Process = () => {
    
    return (
        <div className="bg-[url('https://img.freepik.com/free-photo/old-black-background-grunge-texture-dark-wallpaper-blackboard-chalkboard-room-wall_1258-28312.jpg?w=996&t=st=1660995485~exp=1660996085~hmac=3f6d17a79769417553f05304e7f6ca936719624ce6df6ea7a5c6a738dc3b74c2')]">
            
            <div className="px-12 p-20">
            <div className='mb-3'>
                <div className='w-14'>
                <p style={{backgroundColor:'rgb(255,228,170)'}}>Process</p>
                </div>
            </div>
            <h1 className='font-bold text-5xl mb-4 text-white'>Our Solution Process</h1>
            <div className='grid lg:grid-cols-4 gap-6'>
                {/* card 1 */}
                <div class="card card-compact  text-white p-5 hover:border-red-300 border">

                    <div class="card-body grid justify-center">
                        <span className='text-6xl '><DiAndroid></DiAndroid></span>
                        <div class="badge badge-outline m-4">Step 1</div>
                        <Link to='/explore'><h2 className='mb-4 text-2xl font-bold'>Plan For Work</h2></Link>
                        <span>Through plans, you break down a </span>
                        <span>process into small
                            and identify the </span>
                        <span>things you accomplish.. </span>

                    </div>
                </div>


                {/* card 2 */}
                <div>
                    <div class="card card-compact  text-white shadow p-5 hover:border-red-300 border">

                        <div class="card-body grid justify-center">
                            <span className='text-6xl mb-4'><DiAptana></DiAptana> </span>
                            <div class="badge badge-outline mb-4">Step 2</div>
                            <Link to='explore'><h2 className='mb-4 text-2xl font-bold'>Implementation</h2></Link>
                            <span>Through plans, you break down a </span>
                            <span>process into small
                                and identify the </span>
                            <span>things you accomplish.. </span>
                        </div>
                    </div>
                </div>

                {/* card 3 */}
                <div>
                    <div class="card card-compact  text-white shadow p-5 hover:border-red-300 border">

                        <div class="card-body grid justify-center">
                            <span className='text-6xl mb-4'><DiYeoman></DiYeoman></span>
                            <div class="badge badge-outline mb-4">Step 3</div>
                            <Link to='/explore'><h2 className='mb-4 text-2xl font-bold'>Consultancy</h2></Link>
                            <span>Through plans, you break down a </span>
                            <span>process into small
                                and identify the </span>
                            <span>things you accomplish.. </span>
                        </div>
                    </div>
                </div>

                {/* card 4 */}
                <div>
                    <div class="card card-compact  text-white shadow p-5 hover:border-red-300 border">

                        <div class="card-body grid justify-center">
                            <span className='text-6xl mb-4'><DiGoogleAnalytics></DiGoogleAnalytics></span>
                            <div class="badge badge-outline mb-4">Step 4</div>
                            <Link to='/explore'><h2 className='mb-4 text-2xl font-bold'>Project Closure</h2></Link>
                            <span>Through plans, you break down a </span>
                            <span>process into small
                                and identify the </span>
                            <span>things you accomplish.. </span>
                        </div>
                    </div>
                </div>
            </div>
            </div>
        </div>
    );
};

export default Process;