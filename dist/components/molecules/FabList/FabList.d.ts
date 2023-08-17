import React from 'react';
import './styles.scss';
type FabListProps = {
    isOpen: boolean;
    componentsArr: {
        id: number;
        project_source: string;
        component_name: string;
        component_category: string;
        url: string;
    }[];
};
declare const FabList: ({ isOpen, componentsArr }: FabListProps) => React.JSX.Element;
export default FabList;
