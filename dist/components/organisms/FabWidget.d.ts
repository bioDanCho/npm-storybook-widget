import React from 'react';
import './styles.scss';
type FabWidgetProps = {
    componentsArr: {
        id: number;
        project_source: string;
        component_name: string;
        component_category: string;
        url: string;
    }[];
};
declare const FabWidget: ({ componentsArr }: FabWidgetProps) => React.JSX.Element;
export default FabWidget;
