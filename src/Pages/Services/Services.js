import React, { useEffect, useState } from 'react';
import Footer from '../sheard/Footer';
import AddBanner from './AddBanner';
import Service from './Service';

const Services = () => {
    const [allData, setData] = useState([]);
    useEffect(() => {

        fetch('data.json')
            .then(res => res.json()).then(data => setData(data))
    }, [])
    return (
        <div>
            <AddBanner></AddBanner>
            <div className='grid lg:grid-cols-3 lg:px-16'>
                {
                    allData.map(data => <Service
                        key={data.id}
                        data={data}
                    ></Service>)
                }
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Services;