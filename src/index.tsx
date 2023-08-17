import React, { useState, useEffect } from 'react';
import './styles.scss';
import FabListItem from './components/atoms/FabListItem/FabListItem';

const Counter: React.FC<{
    count: number;
    className: string;
}> = ({ count, className }) => (
    <div className={`counter ${className}`}>
        <p
            key={count}
            className={`counter__count ${
                className ? className + '__count' : ''
            }`}
        >
            {count}
        </p>
    </div>
);

export type ICounterProps = {
    className?: string;
};

const App: React.FC<ICounterProps> = ({ className = '' }) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            if (count > 99) return setCount(0);

            setCount(count + 1);
        }, 500);

        return () => clearInterval(interval);
    }, [count, setCount]);

    return (
        <div>
            <Counter className={className} count={count} />
            <FabListItem />
        </div>
    );
};

export default App;
