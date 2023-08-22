import React from 'react';
import cl from './MyModal.module.css';

const MyModal = ({children, visible, setVisible}) => {

    const rootClasses = [cl.myModal];

    if (visible) {
        // activ-ов может быть несколько, почему так можно делать?
        rootClasses.push(cl.active);
    }

    return (
        <div className={rootClasses.join(' ')}>
            <div className={cl.myModalContent}>
                {children}
            </div>
        </div>
    );
};

export default MyModal;