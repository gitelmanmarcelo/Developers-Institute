import React from 'react';

export function BootStrapCard(props) {
    const {imageUrl, title, description  } = props.data;
    return (
    <div className="card m-5" style={{width: '30rem'}}>
        <img className="card-img-top" src={imageUrl} alt="Card image cap" />
        <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}</p>
            <a href="#" class="btn btn-primary">Go to Wikipedia</a>
        </div>
</div>
    )
}