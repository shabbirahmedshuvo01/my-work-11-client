import React from 'react';
import book from '../../images/sepai.jpg'
import Partnership from '../Partnership/Partnership';

const Section = () => {
    return (
        <div>
            <div className='d-flex align-items-center p-5 mt-5 bg-success text-dark bg-opacity-25 justify-content-evenly'>
                <div>
                    <img style={{ height: '600px', width: '200' }} src={book} alt="" />
                </div>
                <div>
                    <h2>Best Salleing</h2>
                    <p>Chilekothar Sepai /চিলেকোঠার সেপাই (The Soldier in the Attic) (1987) - <br /> details the psychological journey of a man during the turbulent <br /> period of the mass uprisings of 1969, just prior <br /> to Bangladeshi independence in 1971.</p>

                    <button className='btn btn-primary'>More Details</button>
                </div>
            </div>
            <div>
                <Partnership></Partnership>
            </div>
        </div>
    );
};

export default Section;