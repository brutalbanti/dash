import Plus from '../assets/plus.svg';
import ListIcon from '../assets/line.svg';
import DashIcon from '../assets/dash.svg';
import SortIcon from '../assets/sort.svg';
import SettingsIcon from '../assets/settings.svg';
import SearchIcon from '../assets/search.svg';
import VectorCrumb from '../assets/Vector.svg';
import GantIcon from '../assets/gantt.svg';
import DownArrowIcon from '../assets/down-line.svg';
import StatusIcon from '../assets/status.svg';
import ClockIcon from '../assets/clock.svg';
import UserIcon from '../assets/user.svg';
import AllScreenIcon from '../assets/screen.svg';
import DoubleDownIcon from '../assets/double-down.svg';
import NameIcon from '../assets/name.svg';
import MoreIcon from '../assets/more.svg';
import styles from './ProductSection.module.scss';
import Chat from '../../Chat/Chat';
const array = [
    {
        title: 'Додавання виробу',
        time: '15:34'
    },
]
function ProductSection() {
    return (
        <section className={styles["product-section"]}>
            <div className="product__container">
                <div className={styles["product-crumb"]}>
                    <a href="" className={styles["product__crumb-item"]}>
                        Головна сторінка
                    </a>
                    <span><img src={VectorCrumb} alt="" /></span>
                    <a href="" className={styles["product__crumb-item"]}>
                        Закази
                    </a>
                    <span><img src={VectorCrumb} alt="" /></span>
                    <a href="" className={styles["product__crumb-item"]}>
                        Заказ 009
                    </a>
                    <span><img src={VectorCrumb} alt="" /></span>
                    <a href="" className={styles["product__crumb-item"]}>
                        Продукт 1
                    </a>
                    <span><img src={VectorCrumb} alt="" /></span>
                    <a href="" className={styles["product__crumb-item"]}>
                        Виріб 1
                    </a>
                </div>
                <div className={styles["product__content"]}>
                    <div className={styles["product__left"]}>
                        <div className={styles["product__title"]}>
                            Виріб <span>1</span>
                        </div>
                        <div className={styles["product__items"]}>
                            <div className={styles["product-item"]}>
                                <div className={styles["product-item__left"]}>
                                    <img src={StatusIcon} alt="" />
                                    Статус
                                </div>
                                <div className={styles["product-item__right"]}>
                                    <button className={styles["product-item__btn"]}>
                                        В процесі
                                        <img src={DownArrowIcon} alt="" />
                                    </button>
                                </div>
                            </div>
                            <div className={styles["product-item"]}>
                                <div className={styles["product-item__left"]}>
                                    <img src={ClockIcon} alt="" />
                                    Час
                                </div>
                                <div className={styles["product-item__right"]}>
                                    <button className={styles["product-item__btn"]}>
                                        20 днів
                                        <img src={DownArrowIcon} alt="" />
                                    </button>
                                </div>
                            </div>
                            <div className={styles["product-item"]}>
                                <div className={styles["product-item__left"]}>
                                    <img src={UserIcon} alt="" />
                                    Виконавець
                                </div>
                                <div className={styles["product-item__right"]}>
                                    <button className={styles["product-item__btn"]}>
                                        Юра Куліков
                                        <img src={DownArrowIcon} alt="" />
                                    </button>
                                </div>
                            </div>
                            <button className={styles["product-item__add-btn"]}>
                                Показати всі поля
                                <img src={Plus} alt="" />
                            </button>
                        </div>
                        <button className={styles["product__add-desc"]}>
                            Додати опис
                        </button>
                        <div className={`${styles["product-block"]} ${styles.block}`}>
                            <div className={styles["product-block__top"]}>
                                <div className={styles["product-block__title"]}>
                                    Закази
                                </div>
                                <div className={styles["product-block-title__right"]}>
                                    <button className={styles["product-block__btn"]}>
                                        Згорнути все
                                        <img src={DoubleDownIcon} alt="" />
                                    </button>
                                    <button className={styles["product-block__btn"]}>
                                        На весь екран
                                        <img src={AllScreenIcon} alt="" />
                                    </button>
                                </div>
                            </div>
                            <div className={styles["product-block-info"]}>
                                <div className={styles["product-block-buttons"]}>
                                    <div className={styles["product-block-buttons__left"]}>
                                        <button className={`${styles["product-block-buttons__btn"]} ${styles.active}`}>
                                            <img src={ListIcon} alt="" />
                                            Таблиця
                                        </button>
                                        <button className={styles["product-block-buttons__btn"]}>
                                            <img src={DashIcon} alt="" />
                                            Дошка
                                        </button>
                                        <button className={styles["product-block-buttons__btn"]}>
                                            <img src={GantIcon} alt="" />
                                            Гант
                                        </button>
                                    </div>
                                    <div className={styles["product-block-buttons__right"]}>
                                        <button className={styles["product-block-buttons__icons-btn"]}>
                                            <img src={SortIcon} alt="" />
                                        </button>
                                        <button className={styles["product-block-buttons__icons-btn"]}>
                                            <img src={SettingsIcon} alt="" />
                                        </button>
                                        <div className={styles["product-block-buttons__input-wrap"]}>
                                            <button className={styles["product-block-buttons__input-btn"]}>
                                                <img src={SearchIcon} alt="" />
                                            </button>
                                            <input type="text" className={styles["product-block-buttons__input"]} placeholder="Пошук" />
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
                                            <img src={SortIcon} alt="" className={styles["info-header__sort-icon"]} />
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
                            <div className={styles["product-block__items"]}>
                                <div className={styles["product-block__item"]}>
                                    Операція 1
                                    <img src={MoreIcon} alt="" />
                                </div>
                                <div className={styles["product-block__item"]}>
                                    Операція 2
                                    <img src={MoreIcon} alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <Chat message={array}/>
                </div>
            </div>
        </section>
    )
}

export default ProductSection;