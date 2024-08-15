import Plus from '../assets/plus.svg';
import ListIcon from '../assets/line.svg';
import DashIcon from '../assets/dash.svg';
import SortIcon from '../assets/sort.svg';
import SettingsIcon from '../assets/settings.svg';
import SearchIcon from '../assets/search.svg';
import styles from './TechDep.module.scss';

function TechDepSection() {
    return (
        <section className={styles["tech-section"]}>
            <div className="tech__container">
                <div className={styles["tech__content"]}>
                    <div className={styles["tech-item"]}>
                        <div className={styles["tech-item__top"]}>
                            <div className={styles["tech-item__title"]}>
                                Техвідділ
                            </div>
                            <button className={styles["tech-item__btn"]}>
                                Додати новий
                                <img src={Plus} alt="" />
                            </button>
                        </div>
                        <div className={styles["tech-item-info"]}>
                            <div className={styles["tech-item-buttons"]}>
                                <div className={styles["tech-item-buttons__left"]}>
                                    <button className={`${styles["tech-item-buttons__btn"]} ${styles.active}`}>
                                        <img src={ListIcon} alt="" />
                                        Ліст
                                    </button>
                                </div>
                                <div className={styles["tech-item-buttons__right"]}>
                                    <button className={styles["tech-item-buttons__icons-btn"]}>
                                        <img src={SortIcon} alt="" />
                                    </button>
                                    <button className={styles["tech-item-buttons__icons-btn"]}>
                                        <img src={SettingsIcon} alt="" />
                                    </button>
                                    <div className={styles["tech-item-buttons__input-wrap"]}>
                                        <button className={styles["tech-item-buttons__input-btn"]}>
                                            <img src={SearchIcon} alt="" />
                                        </button>
                                        <input type="text" className={styles["tech-item-buttons__input"]} placeholder='Пошук' />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={styles["tech-bottom__items"]}>
                            <div className={styles["tech-bottom__item"]}>
                                Конструкторський відділ
                            </div>
                            <div className={styles["tech-bottom__item"]}>
                                Провідні інжененри
                            </div>
                            <div className={styles["tech-bottom__item"]}>
                                Інженери
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default TechDepSection;