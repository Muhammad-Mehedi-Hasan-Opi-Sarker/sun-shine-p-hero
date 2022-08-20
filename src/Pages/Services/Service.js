import React from 'react';
import { BiBookReader,BiBookOpen } from "react-icons/bi";

const Service = ({ data }) => {
    return (
        <div>
            <div class="card w-96 bg-base-100 shadow-xl mb-5 rounded-none">
                <figure><img src={data.img} alt="Shoes" /></figure>
                <div class="card-body">
                    <h3 className='font-bold text-xl'>{data.name}</h3>
                    <div class="card-actions justify-end">
                        <div class="badge badge-outline flex">
                            <p>{data.a} {data.b}</p>
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Service;