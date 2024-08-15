import React from 'react';
import MoreIcon from './assets/more.svg'
import SendIcon from './assets/send.svg'
import MessageIcon from './assets/message.svg'
import EnvelopeIcon from './assets/envelope.svg'
import AttachIcon from './assets/attach.svg'
import StarIcon from './assets/star.svg'
import DoneIcon from './assets/done.svg'
import styles from './Chat.module.scss';
import { useLocation } from 'react-router-dom';
function Chat({ message }) {
    const location = useLocation();

    // Текущий путь
    console.log(location.pathname);
    return (
        <section className={styles["chat-section"]}>
            <div className={styles["chat-content"]}>
                <div className={styles["chat-top"]}>
                    <div className={styles["chat__title"]}>
                        Дії та повідомлення
                    </div>
                    <div className={styles["chat-items"]}>
                        {message.map((item, index) => (
                            <div className={styles["chat__item"]} key={index}>
                                <div className={styles["chat-item__text"]}>
                                    {item.title}
                                </div>
                                <div className={styles["chat-item__time"]}>
                                    {item.time}
                                    <img src={MoreIcon} alt="" />
                                </div>
                            </div>
                        ))}
                        {location.pathname === '/contract' &&
                            <div className={styles["chat-item"]}>
                                <div className={styles["chat-item__reward-top"]}>
                                    <div className={styles["chat-item__text"]}>
                                        Юра Куліков
                                    </div>
                                    <div className={styles["chat-item__time"]}>
                                        15:35
                                        <img src={MoreIcon} alt="" />
                                    </div>
                                </div>
                                <textarea name="" id="" className={styles["chat-item__reward-textarea"]} placeholder='Повідомлення'></textarea>
                                <div className={styles["chat-item__reward-bottom"]}>
                                    <div className={styles["chat-item__reward-icons"]}>
                                        <div className={styles["tooltip-container"]} data-tooltip='Позначити як виконане'>
                                            <img src={DoneIcon} alt="" />
                                        </div>
                                        <div className={`${styles["tooltip-container"]} ${styles.second}`} data-tooltip='Поставити реакцію'>
                                            <img src={StarIcon} alt="" />
                                        </div>
                                    </div>
                                    <div className={styles["chat-item__reward-text"]}>
                                        Відповісти
                                    </div>
                                </div>
                            </div>
                        }
                    </div>
                </div>
                <div className={styles["chat-bottom"]}>
                    <div className={styles["chat-message"]}>
                        <div className={styles["chat-message__input-wrap"]}>
                            <input type="text" className={styles["chat-message__input"]} placeholder='Відправити повідомлення' />
                            <button className={styles["chat-message__input-btn"]}>
                                <img src={SendIcon} alt="" />
                            </button>
                        </div>
                        <div className={styles["chat-message__additional"]}>
                            <div className={styles["chat-message__icons"]}>
                                <button className={`${styles["chat-message__btn"]} ${styles.active}`}>
                                    <img src={MessageIcon} alt="" />
                                </button>
                                <button className={styles["chat-message__btn"]}>
                                    <img src={EnvelopeIcon} alt="" />
                                </button>
                            </div>
                            <button className={styles["chat-message__attach"]}>
                                <img src={AttachIcon} alt="" />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Chat;