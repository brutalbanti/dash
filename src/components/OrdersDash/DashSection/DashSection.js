import Plus from '../assets/plus.svg';
import ListIcon from '../assets/line.svg';
import DashIcon from '../assets/dash.svg';
import SortIcon from '../assets/sort.svg';
import SettingsIcon from '../assets/settings.svg';
import SearchIcon from '../assets/search.svg';
import VectorCrumb from '../assets/Vector.svg';
import GantIcon from '../assets/gantt.svg';
import DotsIcon from '../assets/dots.svg';
import MoreIcon from '../assets/more.svg';
import StatusIcon from '../assets/status.svg';
import ClockIcon from '../assets/clock.svg';
import UserIcon from '../assets/user.svg';
import styles from './DashSection.module.scss';

function DashSection() {
    return (
        <section className={styles["dash-section"]}>
            <div className="dash__container">
                <div className={styles["dash-crumb"]}>
                    <a href='' className={styles["dash__crumb-item"]}>
                        Головна сторінка
                    </a>
                    <span><img src={VectorCrumb} alt="" /></span>
                    <a href='' className={styles["dash__crumb-item"]}>
                        Закази
                    </a>
                </div>
                <div className={styles["dash__content"]}>
                    <div className={`${styles["dash-item"]} ${styles.block}`}>
                        <div className={styles["dash-item__top"]}>
                            <button className={styles["dash-item__btn"]}>
                                Додати новий заказ
                                <img src={Plus} alt="" />
                            </button>
                        </div>
                        <div className={styles["dash-item-info"]}>
                            <div className={styles["dash-item-buttons"]}>
                                <div className={styles["dash-item-buttons__left"]}>
                                    <button className={`${styles["dash-item-buttons__btn"]}`}>
                                        <img src={ListIcon} alt="" />
                                        Ліст
                                    </button>
                                    <button className={`${styles["dash-item-buttons__btn"]} ${styles.active}`}>
                                        <img src={DashIcon} alt="" />
                                        Дошка
                                    </button>
                                    <button className={styles["dash-item-buttons__btn"]}>
                                        <img src={GantIcon} alt="" />
                                        Гант
                                    </button>
                                </div>
                                <div className={styles["dash-item-buttons__right"]}>
                                    <button className={styles["dash-item-buttons__icons-btn"]}>
                                        <img src={SortIcon} alt="" />
                                    </button>
                                    <button className={styles["dash-item-buttons__icons-btn"]}>
                                        <img src={SettingsIcon} alt="" />
                                    </button>
                                    <div className={styles["dash-item-buttons__input-wrap"]}>
                                        <button className={styles["dash-item-buttons__input-btn"]}>
                                            <img src={SearchIcon} alt="" />
                                        </button>
                                        <input
                                            type="text"
                                            className={styles["dash-item-buttons__input"]}
                                            placeholder="Пошук"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={styles["dash__lists"]}>
                        <div className={styles["dash-list"]}>
                            <div className={styles["dash-list__title"]}>
                                Планування
                                <img src={MoreIcon} alt="" />
                            </div>
                            <div className={styles["dash-list-items"]}>
                                <div className={styles["dash-list-item"]}>
                                    <div className={styles["dash-list-item__name"]}>
                                        <div className={styles["dash-list-item__name-left"]}>
                                            <div className={styles["dash-list-item__name-icons"]}>
                                                <div className={styles["dash-list-item__name-status"]}></div>
                                                <img src={DotsIcon} alt="" />
                                            </div>
                                            <div className={styles["dash-list-item__name-text"]}>
                                                Заказ 009
                                            </div>
                                        </div>
                                        <div className={styles["dash-list-item__name-right"]}>
                                            <img src={MoreIcon} alt="" />
                                        </div>
                                    </div>
                                    <div className={styles["dash-list-item__information"]}>
                                        <div className={styles["dash-list-item__info-item"]}>
                                            <img src={ClockIcon} alt="" />
                                            Час
                                        </div>
                                        <div className={styles["dash-list-item__info-item"]}>
                                            <img src={StatusIcon} alt="" />
                                            Статус
                                        </div>
                                        <div className={styles["dash-list-item__info-item"]}>
                                            <img src={UserIcon} alt="" />
                                            Виконавець
                                        </div>
                                    </div>
                                </div>
                                <div className={styles["dash-list-item"]}>
                                    <div className={styles["dash-list-item__name"]}>
                                        <div className={styles["dash-list-item__name-left"]}>
                                            <div className={styles["dash-list-item__name-text"]}>
                                                Заказ 009
                                            </div>
                                        </div>
                                        <div className={styles["dash-list-item__name-right"]}>
                                            <img src={MoreIcon} alt="" />
                                        </div>
                                    </div>
                                    <div className={styles["dash-list-item__information"]}>
                                        <div className={styles["dash-list-item__info-item"]}>
                                            <img src={ClockIcon} alt="" />
                                            Час
                                        </div>
                                        <div className={styles["dash-list-item__info-item"]}>
                                            <img src={StatusIcon} alt="" />
                                            Статус
                                        </div>
                                        <div className={styles["dash-list-item__info-item"]}>
                                            <img src={UserIcon} alt="" />
                                            Виконавець
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <button className={styles["dash-list-item__add-btn"]}>
                                Додати заказ
                                <img src={Plus} alt="" />
                            </button>
                        </div>
                        <div className={styles["dash-list"]}>
                            <div className={styles["dash-list__title"]}>
                                У виконанні
                                <img src={MoreIcon} alt="" />
                            </div>
                            <div className={styles["dash-list-items"]}>
                                <div className={styles["dash-list-item"]}>
                                    <div className={styles["dash-list-item__name"]}>
                                        <div className={styles["dash-list-item__name-left"]}>
                                            <div className={styles["dash-list-item__name-text"]}>
                                                Заказ 009
                                            </div>
                                        </div>
                                        <div className={styles["dash-list-item__name-right"]}>
                                            <img src={MoreIcon} alt="" />
                                        </div>
                                    </div>
                                    <div className={styles["dash-list-item__information"]}>
                                        <div className={styles["dash-list-item__info-item"]}>
                                            <img src={ClockIcon} alt="" />
                                            Час
                                        </div>
                                        <div className={styles["dash-list-item__info-item"]}>
                                            <img src={StatusIcon} alt="" />
                                            Статус
                                        </div>
                                        <div className={styles["dash-list-item__info-item"]}>
                                            <img src={UserIcon} alt="" />
                                            Виконавець
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <button className={styles["dash-add-btn"]}>
                            Додати дошку
                            <img src={Plus} alt="" />
                        </button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default DashSection;