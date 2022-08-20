import React from 'react';

const Process = () => {
    return (
        <div className="bg-[url('https://img.freepik.com/free-photo/old-black-background-grunge-texture-dark-wallpaper-blackboard-chalkboard-room-wall_1258-28312.jpg?w=996&t=st=1660995485~exp=1660996085~hmac=3f6d17a79769417553f05304e7f6ca936719624ce6df6ea7a5c6a738dc3b74c2')]">
            
            <div>
            <div className='mb-3'>
                <div className='w-14'>
                <p style={{backgroundColor:'rgb(255,228,170)'}}>Process</p>
                </div>
            </div>
            <h1 className='font-bold text-5xl mb-4 text-white'>Our Solution Process</h1>
            <div className='grid lg:grid-cols-4 gap-6'>
                {/* card 1 */}
                <div class="card card-compact shadow border text-white">

                    <div class="card-body">
                        <div class="badge badge-outline">Step 1</div>
                        <h2>Plan For Work</h2>
                        <span>Through plans, you break down a </span>
                        <span>process into small
                            and identify the </span>
                        <span>things you accomplish.. </span>

                    </div>
                </div>


                {/* card 2 */}
                <div>
                    <div class="card card-compact border text-white shadow">

                        <div class="card-body">
                            <div class="badge badge-outline">Step 2</div>
                            <h2>Implementation</h2>
                            <span>Through plans, you break down a </span>
                            <span>process into small
                                and identify the </span>
                            <span>things you accomplish.. </span>
                        </div>
                    </div>
                </div>

                {/* card 3 */}
                <div>
                    <div class="card card-compact border text-white shadow">

                        <div class="card-body">
                            <div class="badge badge-outline">Step 3</div>
                            <h2>Consultancy</h2>
                            <span>Through plans, you break down a </span>
                            <span>process into small
                                and identify the </span>
                            <span>things you accomplish.. </span>
                        </div>
                    </div>
                </div>

                {/* card 4 */}
                <div>
                    <div class="card card-compact border text-white shadow">

                        <div class="card-body">
                            <div class="badge badge-outline">Step 4</div>
                            <h2>Project Closure</h2>
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