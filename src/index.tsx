import React from 'react';
import './styles.scss';
import FabWidget from './components/organisms/FabWidget';

export type WidgetProps = {};

const App: React.FC<WidgetProps> = () => {
    return <FabWidget />;
};

export default App;
