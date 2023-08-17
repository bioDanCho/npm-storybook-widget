import React, { useState } from 'react';
import './styles.scss';
import classNames from 'classnames';
import { BsArrowsAngleExpand, BsArrowsAngleContract } from 'react-icons/bs';
import FabList from '../molecules/FabList/FabList';

type FabWidgetProps = {
    componentsArr: {
        id: number;
        project_source: string;
        component_name: string;
        component_category: string;
        url: string;
    }[];
};

const FabWidget = ({ componentsArr }: FabWidgetProps) => {
    const [isOpen, setIsOpen] = useState(false);

    const handleBtnClick = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className='wrapper'>
            <div
                className={classNames('widget', {
                    'widget--open': isOpen,
                })}
            >
                {/* content */}
                <FabList isOpen={isOpen} componentsArr={componentsArr} />

                {/* button */}
                <div
                    className={classNames('widget__btn', {
                        'widget__btn--open': isOpen,
                    })}
                    onClick={handleBtnClick}
                >
                    {isOpen ? (
                        <BsArrowsAngleContract className='widget__btn__icon' />
                    ) : (
                        <BsArrowsAngleExpand className='widget__btn__icon' />
                    )}
                </div>
            </div>

            {/* backdrop */}
            {isOpen && (
                <div
                    className='backdrop'
                    onClick={() => setIsOpen(false)}
                ></div>
            )}
        </div>
    );
};

export default FabWidget;
