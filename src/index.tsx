import React, { useState, useEffect } from 'react';
import FabWidget from './components/organisms/FabWidget';

import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
    'https://vxpfosdeqbislorhsocs.supabase.co',
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZ4cGZvc2RlcWJpc2xvcmhzb2NzIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODMyOTgxOTEsImV4cCI6MTk5ODg3NDE5MX0.uqBU8-MwlGxi3twhPyTfxErkV6qFmDHCzfAsQ5E_GSs'
);

export type AppProps = {
    projectSource: string;
};

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

        setComponentsData(data);
    };

    return <FabWidget componentsArr={componentsData} />;
};

export default App;
