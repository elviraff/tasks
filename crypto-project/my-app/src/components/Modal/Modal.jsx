import styles from './styles.module.css'
import classNames from 'classnames'

export const Modal = ({active, setActive, children}) => {
    return (
        <div className={active ? classNames(styles.modal_active, styles.modal) : classNames(styles.modal)}  onClick={() => setActive(false)}>
            <div className={active ? classNames(styles.modal__content_active, styles.modal__content) : classNames(styles.modal__content)} onClick = {e => e.stopPropagation()}>
                {children}
            </div>

        </div>
    )
}