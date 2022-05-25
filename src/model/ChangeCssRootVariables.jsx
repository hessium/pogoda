import React from 'react';

const ChangeCssRootVariables = (theme) => {
    const root = document.querySelector(':root') ;
    const components = [
        'body-background',
        'components-background',
        'card-background',
        'card-shadow',
        'text-color'    
    ]

    components.forEach((component) => {
        root.style.setProperty(`--${component}-default`, 
        `var(--${component}-${theme})`)
    })

    return (
        <div>
            
        </div>
    );
};

export default ChangeCssRootVariables;