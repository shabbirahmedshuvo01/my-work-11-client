import React from 'react';

const Partner = ({ partner }) => {
    const { name, days, description, image } = partner;
    return (
        <div className='g-5 col-sm-12 col-md-6 col-lg-4'>
            <div>
                <div class="card" style={{ width: "18rem" }}>
                    <img style={{ height: '200px', width: '286px' }} class="card-img-top" src={image} alt="" />
                    <div class="card-body">
                        <h5 class="card-title">{name}</h5>
                        <p class="card-text">Dealings: {days}</p>
                        <p class="card-text"> comments: {description}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Partner;