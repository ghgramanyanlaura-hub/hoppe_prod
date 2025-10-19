"use client"
import React, { useEffect, useState } from 'react';
import { FC } from 'react';
import styles from '../style/navigation.module.scss';
import Link from 'next/link';

const Navigation: FC = () => {

    return (
        <div className={styles.container}>
     <div className={styles.white_div}>
        <div className={styles.words_div}>
            <h1 className={styles.logo_word}>
                HOPP
            </h1>
            <h3 className={styles.main_word}>by wix</h3>
        </div>
        <div className={styles.main_div}>
            <a href="#" className={styles.login_word}>Log in</a>
            <div className={styles.black_div}>
                <h3 className={styles.white_word}>Get Started for Free</h3>
            </div>
        </div>
     </div>
</div>
     

    )
}

export default Navigation;
