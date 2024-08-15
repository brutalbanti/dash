import Plus from '../assets/plus.svg';
import ListIcon from '../assets/line.svg';
import DashIcon from '../assets/dash.svg';
import SortIcon from '../assets/sort.svg';
import SettingsIcon from '../assets/settings.svg';
import SearchIcon from '../assets/search.svg';
import styles from './Orders.module.scss';

function OrdersSection() {
    return (
        <section className={styles["order-section"]}>
            <div className="order__container">
                <div className={styles["order__title"]}>
                    Головна
                </div>
                <div className={styles["order__content"]}>
                    <div className={styles["order-item"]}>
                        <div className={styles["order-item__top"]}>
                            <div className={styles["order-item__title"]}>
                                Закази
                            </div>
                            <button className={styles["order-item__btn"]}>
                                Додати новий
                                <img src={Plus} alt="" />
                            </button>
                        </div>
                        <div className={styles["order-item-info"]}>
                            <div className={styles["order-item-buttons"]}>
                                <div className={styles["order-item-buttons__left"]}>
                                    <button className={`${styles["order-item-buttons__btn"]} ${styles.active}`}>
                                        <img src={ListIcon} alt="" />
                                        Ліст
                                    </button>
                                    <button className={styles["order-item-buttons__btn"]}>
                                        <img src={DashIcon} alt="" />
                                        Дошка
                                    </button>
                                </div>
                                <div className={styles["order-item-buttons__right"]}>
                                    <button className={styles["order-item-buttons__icons-btn"]}>
                                        <img src={SortIcon} alt="" />
                                    </button>
                                    <button className={styles["order-item-buttons__icons-btn"]}>
                                        <img src={SettingsIcon} alt="" />
                                    </button>
                                    <div className={styles["order-item-buttons__input-wrap"]}>
                                        <button className={styles["order-item-buttons__input-btn"]}>
                                            <img src={SearchIcon} alt="" />
                                        </button>
                                        <input type="text" className={styles["order-item-buttons__input"]} placeholder='Пошук' />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={styles["order-bottom__items"]}>
                            <div className={styles["order-bottom__item"]}>
                                Заказ 009
                            </div>
                            <div className={styles["order-bottom__item"]}>
                                Заказ 010
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default OrdersSection;