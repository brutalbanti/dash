import Plus from '../assets/plus.svg';
import VectorCrumb from '../assets/Vector.svg';
import DownArrowIcon from '../assets/down-line.svg';
import StatusIcon from '../assets/status.svg';
import ClockIcon from '../assets/clock.svg';
import UserIcon from '../assets/user.svg';
import AllScreenIcon from '../assets/screen.svg';
import PlayIcon from '../assets/play.svg';
import PauseIcon from '../assets/pause.svg';
import RecorsIcon from '../assets/record.svg';
import styles from './OperationInfoSection.module.scss';
import Chat from '../../Chat/Chat';
const array = [
    {
        title: 'Створення операції при створенні виробу',
        time: '15:34'
    },
]
function OperationInfoSection() {
    return (
        <section className={styles["operation-info-section"]}>
            <div className="operation-info__container">
                <div className={styles["operation-info-crumb"]}>
                    <a href='' className={styles["operation-info__crumb-item"]}>
                        Головна сторінка
                    </a>
                    <span><img src={VectorCrumb} alt="" /></span>
                    <a href='' className={styles["operation-info__crumb-item"]}>
                        Закази
                    </a>
                    <span><img src={VectorCrumb} alt="" /></span>
                    <a href='' className={styles["operation-info__crumb-item"]}>
                        Заказ 009
                    </a>
                    <span><img src={VectorCrumb} alt="" /></span>
                    <a href='' className={styles["operation-info__crumb-item"]}>
                        Продукт 1
                    </a>
                    <span><img src={VectorCrumb} alt="" /></span>
                    <a href='' className={styles["operation-info__crumb-item"]}>
                        Виріб 1
                    </a>
                    <span><img src={VectorCrumb} alt="" /></span>
                    <a href='' className={styles["operation-info__crumb-item"]}>
                        Операція
                    </a>
                </div>
                <div className={styles["operation-info__content"]}>
                    <div className={styles["operation-info__left"]}>
                        <div className={styles["operation-info__title"]}>
                            Операція <span>1</span>
                        </div>
                        <div className={styles["operation-info__items"]}>
                            <div className={styles["operation-info-item"]}>
                                <div className={styles["operation-info-item__left"]}>
                                    <img src={StatusIcon} alt="" />
                                    Статус
                                </div>
                                <div className={styles["operation-info-item__right"]}>
                                    <button className={styles["operation-info-item__btn"]}>
                                        В процесі
                                        <img src={DownArrowIcon} alt="" />
                                    </button>
                                </div>
                            </div>
                            <div className={styles["operation-info-item"]}>
                                <div className={styles["operation-info-item__left"]}>
                                    <img src={ClockIcon} alt="" />
                                    Час
                                </div>
                                <div className={styles["operation-info-item__right"]}>
                                    <button className={styles["operation-info-item__btn"]}>
                                        20 днів
                                        <img src={DownArrowIcon} alt="" />
                                    </button>
                                </div>
                            </div>
                            <div className={styles["operation-info-item"]}>
                                <div className={styles["operation-info-item__left"]}>
                                    <img src={UserIcon} alt="" />
                                    Відповідальний
                                </div>
                                <div className={styles["operation-info-item__right"]}>
                                    <button className={styles["operation-info-item__btn"]}>
                                        Олег Шевченко
                                        <img src={DownArrowIcon} alt="" />
                                    </button>
                                </div>
                            </div>
                            <div className={styles["operation-info-item"]}>
                                <div className={styles["operation-info-item__left"]}>
                                    <img src={UserIcon} alt="" />
                                    Виконавець
                                </div>
                                <div className={styles["operation-info-item__right"]}>
                                    <button className={styles["operation-info-item__btn"]}>
                                        Юра Куліков
                                        <img src={DownArrowIcon} alt="" />
                                    </button>
                                </div>
                            </div>
                            <button className={styles["operation-info-item__add-btn"]}>
                                Показати всі поля
                                <img src={Plus} alt="" />
                            </button>
                        </div>
                        <div className={styles["timer"]}>
                            <div className={styles["timer-title"]}>
                                <div className={styles["timer-title__left"]}>
                                    <p className={styles["timer-title__small"]}>
                                        Операція 1
                                    </p>
                                    <p className={styles["timer-title__bold"]}>
                                        Вимірювання часу
                                    </p>
                                </div>
                                <div className={styles["timer-title__right"]}>
                                    <button className={styles["timer-title__btn"]}>
                                        На весь екран
                                        <img src={AllScreenIcon} alt="" />
                                    </button>
                                </div>
                            </div>
                            <div className={styles["timer-time"]}>
                                03:56
                            </div>
                            <div className={styles["timer__buttons"]}>
                                <button className={styles["timer__btn"]}>
                                    <img src={PlayIcon} alt="" />
                                </button>
                                <button className={`${styles["timer__btn"]} ${styles.pause}`}>
                                    <img src={PauseIcon} alt="" />
                                </button>
                                <button className={styles["timer__btn"]}>
                                    <img src={RecorsIcon} alt="" />
                                </button>
                            </div>
                        </div>
                    </div>
                    <Chat message={array}/>
                </div>
            </div>
        </section>
    )
}

export default OperationInfoSection;