import React from 'react';

const About = () => {
    return (
        <div className='mt-8 mb-12 lg:px-12 px-3 grid justify-center'>
            <h1 className='font-bold text-2xl'>About Us</h1>

            {/* card  */}
            <div className="card lg:card-side bg-base-100 rounded-none">
                <figure><img src="https://themexriver.com/wp/avarton/wp-content/uploads/2022/01/years.png" alt="Album"/></figure>
                <div className="card-body">
                    <div className='card shadow-xl p-5'><h3 className='font-bold'>Brightest Minds</h3>
                    <p>Dramatically maintain clicks <br /> & mortar for the solutions</p>
                    </div>
                    <div className='card shadow-xl p-5'><h3 className='font-bold'>Engage Users</h3>
                    <p>Dramatically maintain clicks <br /> & mortar for the solutions.</p>
                    </div>
                    <div className='card shadow-xl p-5'><h3 className='font-bold'>Business Solutions</h3>
                    <p>Dramatically maintain clicks <br /> & mortar for the solutions.</p>
                    </div>
                    <div className='card shadow-xl p-5'><h3 className='font-bold'>Wherever You Go</h3>
                    <p>Dramatically maintain clicks <br /> & mortar for the solutions.</p>
                    </div>
                    <div className='card shadow-xl p-5'><h3 className='font-bold'>Wherever You Go</h3>
                    <p>Dramatically maintain clicks <br /> & mortar for the solutions.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;