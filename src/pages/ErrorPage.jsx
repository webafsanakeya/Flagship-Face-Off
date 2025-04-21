import React from 'react';
import Navbar from '../components/Navbar';
import { Link, useRouteError } from 'react-router';
import Button from '../components/ui/Button';

const ErrorPage = () => {
    const error = useRouteError()
    console.log(error?.error?.message)
    
    return (
        <>
            <Navbar/>
            <div className='py-24 text-center'>
                <h1 className='mb-8 text-7xl font-thin text-gray-900 md:text-2xl'>{error?.status || 400}</h1>
                <p className='mb-3 text-xl font-bold text-gray-900 md:text-2xl'>{error?.error?.message || 'Something Went Wrong!'}</p>
                <Link to='/' >
                <Button label='Go to Homepage' />
                </Link>
            </div>
           
        </>
    );
};

export default ErrorPage;