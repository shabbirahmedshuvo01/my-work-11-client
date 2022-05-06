import React from 'react';
import './Partnership.css';
import friend1 from '../../images/books house/snip.jpg';
import friend2 from '../../images/books house/snip2.jpg';
import friend3 from '../../images/books house/snip3.jpg';
import Partner from './Partner';

const Partnership = () => {
    const partners = [
        { id: 1, name: "Book House", days: '3 years', description: 'we are here for best deals.they mostly friends and help us to dealing', image: friend1 },
        { id: 2, name: "Book Dellers", days: '1 years', description: 'we are here for best deals.they mostly friends and help us to dealing', image: friend2 },
        { id: 3, name: "Book Shop", days: '2 years', description: 'we are here for best deals.they mostly friends and help us to dealing', image: friend3 },
    ]
    return (
        <div>
            <div className="container mt-5">
                <div className='row bg-success text-dark bg-opacity-25'>
                    {
                        partners.map(partner => <Partner key={partner.id} partner={partner}></Partner>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Partnership;