import React from 'react';

const Trusted = () => {
  return (
    <div className='trusted flex justify-center items-center mt-11'>
      <div className="container">
        <div className="heading flex justify-center">
          <h1 className='text-4xl font-bold'> Trusted By</h1>
        </div>
        <div className="sub flex flex-wrap justify-center mt-2 max-md:block max-md:text-center">
          <div className="each max-md:m-12">
            <p className='text-3xl font-bold px-4 py-1'>
              ISL
            </p>
          </div>
          <div className="each max-md:m-12">
            <p className='text-3xl font-bold px-4 py-1'>
              Deaf & Mute People
            </p>
          </div>
          <div className="each max-md:m-12">
            <p className='text-3xl font-bold px-4 py-1'>
              Trusts
            </p>
          </div>
          <div className="each max-md:m-12">
            <p className='text-3xl font-bold px-4 py-1'>
              School
            </p>
          </div>
          <div className="each max-md:m-12">
            <p className='text-3xl font-bold px-4 py-1'>
              WHO
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Trusted;
