import React from 'react';
import about from '../../aserts/about1.png'
import { VscCheck } from 'react-icons/vsc';

const Info = () => {
    return (
        <div className='mb-24'>
            <div className="lg:px-12 px-2 card lg:card-side bg-base-100 rounded-none"
                style={{ backgroundColor: 'rgb(251,247,245)' }}>
                <figure className='lg:p-12 p-8'><img src={about} alt="Movie" /></figure>
                <div className="card-body">
                    <div>
                        {/* title  */}
                        <span className='lg:mt-12'><button
                            className='font-bold p-2'
                            style={{ backgroundColor: 'rgb(255,228,170)' }}>About us</button></span>
                        {/* h1  */}
                        <h1
                            className='font-bold text-5xl'
                        >I help individuals to </h1>
                        <h1 className='font-bold text-5xl mb-4'>become their best version.</h1>
                        {/* paragraph */}
                        <div>
                            <p className='mb-8'>I am glad that you have made it here to send a distress signal, and
                                inform the Senate that all on board were killed. Dantooine.
                                I’m not going to Alderaan. I really got to go. But that to me.</p>
                            <div className='grid lg:grid-cols-3'>

                                <div className='mb-3 flex'>
                                    <span className='text-4xl mr-5 grid justify-items-center content-center'
                                        style={{ backgroundColor: 'rgb(255,228,170)', height: '50px', width: '50px' }}
                                    ><VscCheck></VscCheck></span>
                                    <h5 className='font-bold text-lg'>
                                        <span>Time to time</span><br />
                                        <span>shedule</span>
                                    </h5>
                                </div>

                                <div className='mb-3 flex'>
                                    <span
                                        style={{ backgroundColor: 'rgb(49,100,94)', height: '50px', width: '50px' }}
                                        className='text-4xl text-white mr-5 grid justify-items-center content-center'><VscCheck></VscCheck></span>
                                    <h5 className='font-bold text-lg'>
                                        <span>24/7 Online</span><br />
                                        <span>Suppport</span>
                                    </h5>
                                </div>

                                <div className='flex'>
                                    <span
                                        style={{ backgroundColor: '#FFFFFF', height: '50px', width: '50px' }}
                                        className='text-4xl mr-5 grid justify-items-center content-center'><VscCheck></VscCheck></span>
                                    <h5 className='font-bold text-lg'>
                                        <span>Man to</span><br />
                                        <span>Optimize</span>
                                    </h5>
                                </div>

                            </div>
                        </div>

                        {/* slat here  */}
                        <div className='mt-8'>
                            <div className="stats stats-vertical lg:stats-horizontal">

                                <div className="stat flex">
                                    <div className="stat-value">31K</div>
                                    <div className="stat-title">Active <br /> students <br />
                                        worldwide</div>
                                </div>

                                <div className="stat">
                                    <div className="stat-value">10k</div>
                                    <div className="stat-title">Basement <br />
                                        in New York</div>
                                </div>

                                <div className="stat">
                                    <div className="stat-value">2k</div>
                                    <div className="stat-title">Cup of tea & <br />
                                        coffee</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Info;