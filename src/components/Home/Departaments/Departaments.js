import PlusIcon from '../assets/plus-white.svg';

import styles from './Deparaments.module.scss';

function DepartamentsSection() {
    return (
        <section className={styles["departaments-section"]}>
            <div className="departaments__container">
                <div className={styles["departaments__buttons"]}>
                    <button className={styles["departaments__btn"]}>
                        Виробництво
                    </button>
                    <button className={styles["departaments__btn"]}>
                        P3A
                    </button>
                </div>
                <button className={styles["departaments__add-btn"]}>
                    Додати відділ
                    <img src={PlusIcon} alt="" />
                </button>
            </div>
        </section>
    )
}

export default DepartamentsSection;