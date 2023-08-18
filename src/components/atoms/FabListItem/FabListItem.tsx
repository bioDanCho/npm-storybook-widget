import React from 'react';
import './styles.scss';
import { FabListItemProps } from '../../../types';

const FabListItem = ({
    url,
    componentName,
    componentCategory,
}: FabListItemProps) => {
    const handleItemClick = () => {
        const newWindow = window.open(url, '_blank', 'noopener,noreferrer');
        if (newWindow) newWindow.opener = null;
    };

    return (
        <div className='fab-list-item' onClick={handleItemClick}>
            <div className='fab-list-item__name'>{componentName}</div>
            <div className='fab-list-item__category'>{componentCategory}</div>
        </div>
    );
};

export default FabListItem;
