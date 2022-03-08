import styles from './MetaTab.module.css';
import { metadata } from './metadata';
import React from 'react';

export default function MetaTab({currentSubMenu, cancleMeta}) {
    const [currentMeta, setCurrentMeta] = React.useState("Sofas and Recliners");
    return (
        <div className={styles.cont}>
            <div onMouseLeave={() => cancleMeta()}>
                <div>
                    <ul className={styles.meta}>
                        {
                            metadata[currentSubMenu]["category"].map( (ele,ind) => (
                                <li onMouseOver={() => setCurrentMeta(ele)}>{ele}</li>
                            ))
                        }
                    </ul>
                </div>
                <div>
                    <ul className={styles.meta}>
                        {
                            metadata[currentSubMenu]["info"][currentMeta].map( (ele, ind) => (
                                <li>{ele}</li>
                            ))
                        }
                    </ul>
                </div>
                <div>
                    <h2>Popular Brands</h2>
                    <ul className={styles.check}>
                        {
                            metadata[currentSubMenu]["brands"].map( (ele, ind) => (
                                <li>{ele}</li>
                            ))
                        }
                    </ul>
                </div>
                <div>
                        <img src={metadata[currentSubMenu]["img"]} height="100%" width="100%"/>
                </div>
            </div>
        </div>
    )
}