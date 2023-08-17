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
            <FabListItem
                componentName='Avatar'
                componentCategory='data display'
                url={
                    'https://bio-storybook.vercel.app/?path=/docs/data-display-avatar-lemonade--docs'
                }
            />
            <FabListItem
                componentName='Button'
                componentCategory='inputs'
                url={
                    'https://bio-storybook.vercel.app/?path=/docs/inputs-buttons-lemonade--docs'
                }
            />
            <FabListItem
                componentName='Checkbox'
                componentCategory='inputs'
                url={
                    'https://bio-storybook.vercel.app/?path=/docs/inputs-checkbox-lemonade--docs'
                }
            />
            <FabListItem
                componentName='Radio'
                componentCategory='inputs'
                url={
                    'https://bio-storybook.vercel.app/?path=/docs/inputs-radio-lemonade--docs'
                }
            />
            <FabListItem
                componentName='Radio Group'
                componentCategory='inputs'
                url={
                    'https://bio-storybook.vercel.app/?path=/docs/inputs-radiogroup-lemonade--docs'
                }
            />
            <FabListItem
                componentName='Select'
                componentCategory='inputs'
                url={
                    'https://bio-storybook.vercel.app/?path=/docs/inputs-select-lemonade--docs'
                }
            />
            <FabListItem
                componentName='Switch'
                componentCategory='inputs'
                url={
                    'https://bio-storybook.vercel.app/?path=/docs/inputs-switch-lemonade--docs'
                }
            />
            <FabListItem
                componentName='Text Field'
                componentCategory='inputs'
                url={
                    'https://bio-storybook.vercel.app/?path=/docs/inputs-text-fields-lemonade--docs'
                }
            />
        </div>
    );
};

export default FabList;
