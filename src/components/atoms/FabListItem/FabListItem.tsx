import React from 'react';
import './styles.scss';

const FabListItem = () => {
    const handleItemClick = () => {
        const newWindow = window.open(
            'https://www.google.ca',
            '_blank',
            'noopener,noreferrer'
        );
        if (newWindow) newWindow.opener = null;
    };

    return (
        <div className='fab-list-item' onClick={handleItemClick}>
            <div className='fab-list-item__name'>Button</div>
            <div className='fab-list-item__type'>Inputs</div>
        </div>
    );
};

export default FabListItem;
