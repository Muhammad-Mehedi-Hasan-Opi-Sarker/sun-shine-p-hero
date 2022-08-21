import React from 'react';

const FeaturedCourses = () => {
    return (
        <div className='lg:px-12 px-5' style={{ backgroundColor: 'rgb(251,247,245)' }}>

            <div className='grid justify-items-center'>
                <p className='font-bold mb-5 mt-20'>Featured</p>
                <h1 className='font-bold text-5xl mb-12'>Featured Courses</h1>
            </div>

            <div className='grid lg:grid-cols-4 gap-6 mb-20'>

                {/* card 1 */}
                <div class="card w-fit bg-base-100 rounded-none">
                    <figure><img src="https://themexriver.com/wp/avarton/wp-content/uploads/2022/01/course-3.jpg" alt="Shoes" /></figure>
                    <div class="card-body">
                        <h3 className='font-bold text-lg'>Global Master of Business Administration</h3>
                        <div>
                            <span className='p-2'  style={{ backgroundColor: 'rgb(205,240,255)' }}> Expert 59 minutes</span>
                        </div>
                    </div>
                </div>

                {/* card 2 */}
                <div class="card w-fit bg-base-100  rounded-none">
                    <figure><img className='w-fit' src="https://themexriver.com/wp/avarton/wp-content/uploads/2022/01/course-4.jpg" alt="Shoes" /></figure>
                    <div class="card-body">
                        <h3 className='font-bold text-lg'>Learning Programing Language Python</h3>
                        <div>
                            <span  className='p-2' style={{ backgroundColor: 'rgb(205,240,255)' }}>Beginner 32 minutes</span>
                        </div>
                    </div>
                </div>

                {/* card 3 */}
                <div class="card w-fit bg-base-100  rounded-none">
                    <figure><img src="https://themexriver.com/wp/avarton/wp-content/uploads/2022/01/course-1.jpg" alt="Shoes" /></figure>
                    <div class="card-body">
                        <h3 className='font-bold text-lg'>Computer Fundamentals Basic Startup</h3>
                        <div>
                            <span className='p-2'  style={{ backgroundColor: 'rgb(205,240,255)' }}>Expert 35 minutes</span>
                        </div>
                    </div>

                </div>

                {/* card 4 */}
                <div class="card w-fit bg-base-100 rounded-none">
                    <figure><img src="https://themexriver.com/wp/avarton/wp-content/uploads/2022/01/course-2.jpg" alt="Shoes" /></figure>
                    <div class="card-body">
                        <h3 className='font-bold text-lg'>Computer Fundamentals Basic Startup</h3>
                        <div>
                            <span className='p-2'  style={{ backgroundColor: 'rgb(205,240,255)' }}>All Levels 45 minutes  </span>
                        </div>
                    </div>
                </div>

            </div>

        </div>
    );
};

export default FeaturedCourses;