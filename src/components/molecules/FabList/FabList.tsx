import React from 'react';
import './styles.scss';
import classNames from 'classnames';
import FabListItem from '../../atoms/FabListItem/FabListItem';

type FabListProps = {
    isOpen: boolean;
};

const FabList = ({ isOpen }: FabListProps) => {
    return (
        <div
            className={classNames('fab-list', {
                'fab-list--open': isOpen,
            })}
        >
            <FabListItem />
            <FabListItem />
            <FabListItem />
            <FabListItem />
            <FabListItem />
            <FabListItem />
            <FabListItem />
            <FabListItem />
            <FabListItem />
            <FabListItem />
        </div>
    );
};

export default FabList;
