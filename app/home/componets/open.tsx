"use client"
import React, { useState } from "react";
import styles from "../style/open.module.scss";
import { MdArrowOutward } from "react-icons/md";
import { FaArrowRight } from "react-icons/fa6";

const Open = () => {
    const [openIndex, setOpenIndex] = useState(null);

    const toggleOpen = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    const items = [
        {
            id: styles.blue,
            extraClass: styles.extra_blue,
            text: 'Your followers are always asking "Where can I get that?" 🤔',
            extra: "Offer your affiliates a long-standing code that will always be searchable from your link in bio. 🙌🏻"
        },
        {
            id: styles.black,
            extraClass: styles.extra_black,
            text: "Your brand partners keep asking you to change your link in bio 😣",
            extra: "Keep all your partners happy with one link that works for everyone. 💡"
        },
        {
            id: styles.light_pink,
            extraClass: styles.extra_light_pink,
            text: "Your current link in bio is so stacked with links it's impossible to navigate 🤯",
            extra: "Make it clean, organized and user-friendly. 🚀"
        }
    ];

    return (
        <div className={styles.container}>
            <h2 className={styles.title}>Any of these sound familiar?</h2>

            <div className={styles.open_container}>
                {items.map((item, index) => (
                    <div key={index}>
                        <div
                            className={styles.open_div}
                            id={item.id}
                            onClick={() => toggleOpen(index)}
                        >
                            <div className={styles.text_container}>
                                <h2 className={styles.text}>{item.text}</h2>
                            </div>
                            <MdArrowOutward
                                className={`${styles.arrow} ${openIndex === index ? styles.active : ""
                                    }`}
                            />
                        </div>

                        {openIndex === index && (
                            <div className={`${styles.extra_text} ${item.extraClass}`}>
                                {item.extra}
                            </div>
                        )}
                    </div>
                ))}
            </div>

            <button className={styles.btn}>Try It Free <FaArrowRight /></button>
        </div>
    );
};

export default Open;
