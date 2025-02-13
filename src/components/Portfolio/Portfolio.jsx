// * src/components/Portfolio/Portfolio.jsx

// Node Module Imports
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// Local Module Imports
import { IndexTab, GOFTab, TRONTab, ESTab, CCTab } from './Tabs';
import { updateActiveTab } from '../../store/site';
import './Portfolio.css';
import './Portfolio-m.css';



export default function Portfolio() {
    // React Hooks
    const dispatch = useDispatch();
    const { activeTab } = useSelector((state) => state.site);

    const TABS = [
        <IndexTab key='p-tab-0' />,
        <GOFTab key='p-tab-1' />,
        <TRONTab key='p-tab-2' />,
        <ESTab key='p-tab-3' />,
        <CCTab key='p-tab-4' />
    ]

    useEffect(() => {
        const buttons = document.getElementById('portfolio-tabs').children;
        for(let btn of buttons) {
            const id = Number(btn.firstChild.id.split('-')[2]);
            btn.className = id === activeTab ? 'active' : '';
        }
    }, [activeTab]);

    const onClick = (event) => {
        event.stopPropagation();
        const id = Number(event.target.id.split('-')[2]);
        dispatch(updateActiveTab(id));
    }
    
    return (<main id='site-portfolio'>
        <h1 style={{display: 'none'}}>Portfolio</h1>
        <ul id='portfolio-tabs'>
            <li><button id='p-tab-0' onClick={onClick}>Index</button></li>
            <li><button id='p-tab-1' onClick={onClick}>Galaxy on Fire</button></li>
            <li><button id='p-tab-2' onClick={onClick}>TRON 2.0</button></li>
            <li><button id='p-tab-3' onClick={onClick}>EVERSPACE™</button></li>
            <li><button id='p-tab-4' onClick={onClick}>Content Creation</button></li>
        </ul>
        <div id='portfolio-content'>
            {TABS[activeTab]}
        </div>
    </main>);
}