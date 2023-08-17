import React from 'react';
import './styles.scss';
type FabListItemProps = {
    url: string;
    componentName: string;
    componentCategory: string;
};
declare const FabListItem: ({ url, componentName, componentCategory, }: FabListItemProps) => React.JSX.Element;
export default FabListItem;
