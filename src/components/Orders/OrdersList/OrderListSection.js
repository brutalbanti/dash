import Plus from '../assets/plus.svg';
import ListIcon from '../assets/line.svg';
import DashIcon from '../assets/dash.svg';
import SortIcon from '../assets/sort.svg';
import SettingsIcon from '../assets/settings.svg';
import SearchIcon from '../assets/search.svg';
import VectorCrumb from '../assets/Vector.svg';
import GantIcon from '../assets/gantt.svg';
import NameIcon from '../assets/name.svg';
import StatusIcon from '../assets/status.svg';
import ClockIcon from '../assets/clock.svg';
import UserIcon from '../assets/user.svg';
import DotsIcon from '../assets/dots.svg';
import DownLineIcon from '../assets/down-line.svg';
import MoreIcon from '../assets/more.svg';
import styles from './OrdersList.module.scss';

function OrderListSection() {
    return (
        <section className={styles["order-list-section"]}>
            <div className="order-list__container">
                <div className={styles["order-list-crumb"]}>
                    <a href='' className={styles["order-list__title"]}>
                        Головна сторінка
                    </a>
                    <span><img src={VectorCrumb} alt="" /></span>
                    <a href='' className={styles["order-list__title"]}>
                        Закази
                    </a>
                </div>
                <div className={styles["order-list__content"]}>
                    <div className={`${styles["order-list-item"]} ${styles.block}`}>
                        <div className={styles["order-list-item__top"]}>
                            <button className={styles["order-list-item__btn"]}>
                                Додати новий заказ
                                <img src={Plus} alt="" />
                            </button>
                        </div>
                        <div className={styles["order-list-item-info"]}>
                            <div className={styles["order-list-item-buttons"]}>
                                <div className={styles["order-list-item-buttons__left"]}>
                                    <button className={`${styles["order-list-item-buttons__btn"]} ${styles.active}`}>
                                        <img src={ListIcon} alt="" />
                                        Ліст
                                    </button>
                                    <button className={styles["order-list-item-buttons__btn"]}>
                                        <img src={DashIcon} alt="" />
                                        Дошка
                                    </button>
                                    <button className={styles["order-list-item-buttons__btn"]}>
                                        <img src={GantIcon} alt="" />
                                        Гант
                                    </button>
                                </div>
                                <div className={styles["order-list-item-buttons__right"]}>
                                    <button className={styles["order-list-item-buttons__icons-btn"]}>
                                        <img src={SortIcon} alt="" />
                                    </button>
                                    <button className={styles["order-list-item-buttons__icons-btn"]}>
                                        <img src={SettingsIcon} alt="" />
                                    </button>
                                    <div className={styles["order-list-item-buttons__input-wrap"]}>
                                        <button className={styles["order-list-item-buttons__input-btn"]}>
                                            <img src={SearchIcon} alt="" />
                                        </button>
                                        <input type="text" className={styles["order-list-item-buttons__input"]} placeholder='Пошук' />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={styles["info-header"]}>
                            <div className={styles["info-header__left"]}>
                                <div className={styles["info-header__item"]}>
                                    <div className={styles["info-header__item-left"]}>
                                        <img src={NameIcon} alt="" />
                                        Назва
                                    </div>
                                    <span>
                                        <img src={SortIcon} alt="" className={styles['info-header__sort-icon']} />
                                    </span>
                                </div>
                            </div>
                            <div className={styles["info-header__right"]}>
                                <div className={styles["info-header__item-left"]}>
                                    <img src={StatusIcon} alt="" />
                                    Статус
                                </div>
                                <div className={styles["info-header__item-left"]}>
                                    <img src={ClockIcon} alt="" />
                                    Час
                                </div>
                                <div className={styles["info-header__item-left"]}>
                                    <img src={UserIcon} alt="" />
                                    Виконавець
                                </div>
                            </div>
                        </div>
                        <div className={styles["order-list-bottom__items"]}>
                            <div className={styles["order-list-item"]}>
                                <div className={styles["order-list-item__wrap"]}>
                                    <div className={styles["order-list-item__left"]}>
                                        <div className={styles["order-list-item__icons"]}>
                                            <img src={DotsIcon} alt="" />
                                            <div className={styles["order-list-item__status"]}></div>
                                        </div>
                                        <div className={styles["order-list-item__name"]}>
                                            <img src={DownLineIcon} alt="" />
                                            Заказ 009
                                        </div>
                                    </div>
                                    <div className={styles["order-list-item__right"]}>
                                        <img src={MoreIcon} alt="" />
                                    </div>
                                </div>
                                <div className={styles["order-list-item__addionational"]}>
                                    <div className={`${styles["order-list-addionational__block"]} ${styles["first"]}`}>
                                        <div className={styles["order-list-item__left"]}>
                                            <div className={styles["order-list-item__name"]}>
                                                <img src={DownLineIcon} alt="" />
                                                Наряд 009/1
                                            </div>
                                        </div>
                                        <div className={styles["order-list-item__right"]}>
                                            <img src={MoreIcon} alt="" />
                                        </div>
                                    </div>
                                    <div className={`${styles["order-list-addionational__block"]} ${styles["second"]}`}>
                                        <div className={styles["order-list-item__left"]}>
                                            <div className={styles["order-list-item__name"]}>
                                                <img src={DownLineIcon} alt="" />
                                                Виріб
                                            </div>
                                        </div>
                                        <div className={styles["order-list-item__right"]}>
                                            <img src={MoreIcon} alt="" />
                                        </div>
                                    </div>
                                </div>
                                <div className={styles["order-list-item__operations"]}>
                                    <div className={styles["order-list-item__operation"]}>
                                        Операція 1
                                        <img src={MoreIcon} alt="" />
                                    </div>
                                    <div className={styles["order-list-item__operation"]}>
                                        Операція 2
                                        <img src={MoreIcon} alt="" />
                                    </div>
                                </div>
                                <div className={styles["order-list-item__add-product"]}>
                                    Додати виріб
                                    <img src={Plus} alt="" />
                                </div>
                                <div className={styles["order-list-item__add-dress"]}>
                                    Додати наряд
                                    <img src={Plus} alt="" />
                                </div>
                                <div className={styles["order-list-item__add-order"]}>
                                    Додати заказ
                                    <img src={Plus} alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default OrderListSection;