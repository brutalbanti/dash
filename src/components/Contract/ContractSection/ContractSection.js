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
import CheckDoneIcon from '../assets/check-done.svg';
import PDFIcon from '../assets/pdf.svg';
import styles from './ContractSection.module.scss';
import Chat from '../../Chat/Chat';
const array = [
    {
        title: 'Створення заказу',
        time: '15:34'
    },
    {
        title: 'Зміна назви заказу',
        time: '15:35'
    },
]
function ContractSection() {
    return (
        <section className={styles["contract-section"]}>
            <div className="contract__container">
                <div className={styles["contract-crumb"]}>
                    <a href="" className={styles["contract__crumb-item"]}>
                        Головна сторінка
                    </a>
                    <span><img src={VectorCrumb} alt="" /></span>
                    <a href="" className={styles["contract__crumb-item"]}>
                        Закази
                    </a>
                    <span><img src={VectorCrumb} alt="" /></span>
                    <a href="" className={styles["contract__crumb-item"]}>
                        Заказ 009
                    </a>
                </div>
                <div className={styles["contract__content"]}>
                    <div className={styles["contract__left"]}>
                        <div className={styles["contract__title"]}>
                            Заказ <span>009</span>
                        </div>
                        <div className={styles["contract__items"]}>
                            <div className={styles["contract-item"]}>
                                <div className={styles["contract-item__left"]}>
                                    <img src={StatusIcon} alt="" />
                                    Статус
                                </div>
                                <div className={styles["contract-item__right"]}>
                                    <button className={styles["contract-item__btn"]}>
                                        В процесі
                                        <img src={DownArrowIcon} alt="" />
                                    </button>
                                </div>
                            </div>
                            <div className={styles["contract-item"]}>
                                <div className={styles["contract-item__left"]}>
                                    <img src={ClockIcon} alt="" />
                                    Розрахунковий час виконання
                                </div>
                                <div className={styles["contract-item__right"]}>
                                    <button className={styles["contract-item__btn"]}>
                                        20 днів
                                        <img src={DownArrowIcon} alt="" />
                                    </button>
                                </div>
                            </div>
                            <div className={styles["contract-item"]}>
                                <div className={styles["contract-item__left"]}>
                                    <img src={ClockIcon} alt="" />
                                    Початок виконання
                                </div>
                                <div className={styles["contract-item__right"]}>
                                    <button className={styles["contract-item__btn"]}>
                                        06.07.2024
                                        <img src={DownArrowIcon} alt="" />
                                    </button>
                                </div>
                            </div>
                            <div className={styles["contract-item"]}>
                                <div className={styles["contract-item__left"]}>
                                    <img src={ClockIcon} alt="" />
                                    Кінець виконання
                                </div>
                                <div className={styles["contract-item__right"]}>
                                    <button className={styles["contract-item__btn"]}>
                                        23.07.2024
                                        <img src={DownArrowIcon} alt="" />
                                    </button>
                                </div>
                            </div>
                            <div className={styles["contract-item"]}>
                                <div className={styles["contract-item__left"]}>
                                    <img src={UserIcon} alt="" />
                                    Виконавець
                                </div>
                                <div className={styles["contract-item__right"]}>
                                    <button className={styles["contract-item__btn"]}>
                                        Юра Куліков
                                        <img src={DownArrowIcon} alt="" />
                                    </button>
                                </div>
                            </div>
                            <button className={styles["contract-item__add-btn"]}>
                                Показати всі поля
                                <img src={Plus} alt="" />
                            </button>
                        </div>
                        <button className={styles["contract__add-desc"]}>
                            Додати опис
                        </button>
                        <div className={`${styles["contract-block"]} ${styles.block}`}>
                            <div className={styles["contract-block__top"]}>
                                <div className={styles["contract-block__title"]}>
                                    Наряд
                                    <div className={styles["contract-block__title-additionally"]}>
                                        <div className={styles["contract-block__title-img"]}>
                                            <img src={CheckDoneIcon} alt="" />
                                        </div>
                                        P3A
                                    </div>
                                </div>
                                <div className={styles["contract-block-title__right"]}>
                                    <button className={styles["contract-block__btn"]}>
                                        Згорнути все
                                        <img src={DoubleDownIcon} alt="" />
                                    </button>
                                    <button className={styles["contract-block__btn"]}>
                                        На весь екран
                                        <img src={AllScreenIcon} alt="" />
                                    </button>
                                </div>
                            </div>
                            <div className={styles["contract-block-info"]}>
                                <div className={styles["contract-block-buttons"]}>
                                    <div className={styles["contract-block-buttons__left"]}>
                                        <button className={`${styles["contract-block-buttons__btn"]} ${styles.active}`}>
                                            <img src={ListIcon} alt="" />
                                            Таблиця
                                        </button>
                                        <button className={styles["contract-block-buttons__btn"]}>
                                            <img src={DashIcon} alt="" />
                                            Дошка
                                        </button>
                                        <button className={styles["contract-block-buttons__btn"]}>
                                            <img src={GantIcon} alt="" />
                                            Гант
                                        </button>
                                    </div>
                                    <div className={styles["contract-block-buttons__right"]}>
                                        <button className={styles["contract-block-buttons__icons-btn"]}>
                                            <img src={SortIcon} alt="" />
                                        </button>
                                        <button className={styles["contract-block-buttons__icons-btn"]}>
                                            <img src={SettingsIcon} alt="" />
                                        </button>
                                        <div className={styles["contract-block-buttons__input-wrap"]}>
                                            <button className={styles["contract-block-buttons__input-btn"]}>
                                                <img src={SearchIcon} alt="" />
                                            </button>
                                            <input type="text" className={styles["contract-block-buttons__input"]} placeholder="Пошук" />
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
                            <div className={styles["contract-block__items"]}>
                                <div className={styles["contract-block__item"]}>
                                    <div className={styles["contract-block__item-top"]}>
                                        <div className={styles["contract-block__item-left"]}>
                                            <img src={DownArrowIcon} alt="" />
                                            Продукт
                                        </div>
                                        <img src={MoreIcon} alt="" />
                                    </div>
                                    <div className={styles["contract-block__item-top__dress"]}>
                                        <div className={styles["contract-block__item-left"]}>
                                            <img src={DownArrowIcon} alt="" />
                                            Виріб
                                        </div>
                                        <img src={MoreIcon} alt="" />
                                    </div>
                                    <div className={styles["contract-block__item-operation"]}>
                                        Операція 1
                                        <img src={MoreIcon} alt="" />
                                    </div>
                                    <div className={styles["contract-block__item-operation"]}>
                                        Операція 2
                                        <img src={MoreIcon} alt="" />
                                    </div>
                                    <div className={styles["contract-block__item-product"]}>
                                        Додати виріб
                                        <img src={Plus} alt="" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={styles["contract__add-btn-dress"]}>
                            <div className={styles["contract__add-btn-dress__content"]}>
                                Додати наряд
                                <img src={Plus} alt="" />
                            </div>
                        </div>
                        <div className={styles["document-block"]}>
                            <div className={styles["document-block__title"]}>
                                Документи
                                <button className={styles["document-block__btn"]}>
                                    На весь екран
                                    <img src={AllScreenIcon} alt="" />
                                </button>
                            </div>
                            <div className={styles["document-block__buttons"]}>
                                <button className={styles["document-block__icons-btn"]}>
                                    <img src={SortIcon} alt="" />
                                </button>
                                <button className={styles["document-block__icons-btn"]}>
                                    <img src={SettingsIcon} alt="" />
                                </button>
                                <div className={styles["document-block__input-wrap"]}>
                                    <button className={styles["document-block__input-btn"]}>
                                        <img src={SearchIcon} alt="" />
                                    </button>
                                    <input type="text" className={styles["document-block__input"]} placeholder="Пошук" />
                                </div>
                            </div>
                            <div className={styles["document-block__content"]}>
                                <div className={styles["document-block__document"]}>
                                    <div className={styles["document-block__document-title"]}>
                                        Новий документ
                                        <img src={MoreIcon} alt="" />
                                    </div>
                                    <div className={styles["document-block__document-img"]}>
                                        <img src={PDFIcon} alt="" />
                                    </div>
                                    <div className={styles["document-block__document-info"]}>
                                        Юра Куліков
                                        <span>15:35</span>
                                    </div>
                                </div>
                                <div className={styles["document-block__add-document"]}>
                                    <div className={styles["document-block__add-document-title"]}>
                                        Перетягніть або <span>виберіть файл</span><input type='file' className={styles["document-block__add-document-attach"]} placeholder='виберіть файл' />
                                    </div>
                                    <div className={styles["document-block__add-document-desc"]}>
                                        Файл не може важити більше ніж 20МБ
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <Chat message={array} />
                </div>
            </div>
        </section>
    )
}

export default ContractSection;