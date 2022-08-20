import React from 'react';
import { GoBook,GoBookmark } from "react-icons/go";

const Career = () => {
    return (
        <div className='grid lg:grid-cols-2 justify-items-center mb-20 lg:px-20'>
                <div className="mb-4 card card-compact w-96 bg-base-100 shadow-xl border rounded-none">
                    <div className="card-body flex p-5">
                    <div className='text-4xl'>
                    <GoBook></GoBook>        
                    </div>
                        <div>
                        <h3 className='font-bold text-2xl'>Become a Partner of Avarton</h3>
                        <p>To take a trivial example, which of us u
                            ndertakes laborious physical exercise ye
                            s is this happen here.</p>
                        </div>
                    </div>
                </div>
        
                <div className="card card-compact w-96 bg-base-100 shadow-xl border rounded-none">
                    <div className="card-body flex p-5">
                        <div className='text-4xl'>
                            <GoBookmark></GoBookmark>
                        </div>
                        <div>
                        <h3 className='font-bold text-2xl'>Become a Partner of Avarton</h3>
                        <p>To take a trivial example, which of us u
                            ndertakes laborious physical exercise ye
                            s is this happen here.</p>
                        </div>
                    </div>
            </div>
        </div>
    );
};

export default Career;