import styles from './ButtonsConatiner.module.css'

export default function ButtonsConatiner() {

    const buttonsNames = ['C', '1', '2', '+', '3', '4', '-', '5', '6', '*', '7', '8', '/', '=', '0', '.'];

    return (
        <div className={styles.buttonsContainer}>
            {buttonsNames.map((buttonName) => (<button className={styles.button} key={buttonName}>{buttonName}</button>))
            }


        </div >)
}
