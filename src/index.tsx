import React, { useState, useEffect } from 'react';
import { AppProps, ComponentObj } from './types';
import { createClient } from '@supabase/supabase-js';
import FabWidget from './components/organisms/FabWidget';

const supabase = createClient(
    'https://vxpfosdeqbislorhsocs.supabase.co',
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZ4cGZvc2RlcWJpc2xvcmhzb2NzIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODMyOTgxOTEsImV4cCI6MTk5ODg3NDE5MX0.uqBU8-MwlGxi3twhPyTfxErkV6qFmDHCzfAsQ5E_GSs'
);

const App: React.FC<AppProps> = ({ projectSource }) => {
    const [componentsData, setComponentsData] = useState([]);

    useEffect(() => {
        getComponents();
    }, []);

    const getComponents = async () => {
        const { data }: { data: any } = await supabase
            .from('components')
            .select('*')
            .eq('project_source', projectSource);

        // sort alphabetically
        const sortedData = data.sort(function (
            a: ComponentObj,
            b: ComponentObj
        ) {
            return a.component_name === b.component_name
                ? 0
                : a.component_name < b.component_name
                ? -1
                : 1;
        });

        setComponentsData(sortedData);
    };

    return <FabWidget componentsArr={componentsData} />;
};

export default App;
