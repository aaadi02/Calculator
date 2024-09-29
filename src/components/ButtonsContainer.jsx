import styles from './ButtonsContainer.module.css'

function ButtonsContainer({onButtonClicked}) {

    const buttonNames = ['C', '1', '2', '+', '3', '4', '-', '5', '6', '*', '7', '8', '/', '=', '9', '0', '.'];
    return (
        <div className={styles.buttonContainer}>
            {buttonNames.map(buttonName => <button onClick={() => onButtonClicked(buttonName)} key={buttonName} className={styles.button}>{buttonName}</button>)}
        </div>
    )
}

export default ButtonsContainer;