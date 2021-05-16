import covidLogo from '../../images/covid-logo.png';
import styles from './Title.module.css';
import cx from 'classnames';

const Title = () => {
    return(
        <div className={styles.container}>
            <h1 className={styles.title}>C</h1>
            <img className={cx(styles.image, styles.rotate)} src={covidLogo} alt='Covid-19 logo'/>
            <h1 className={styles.title}>VID-19 Tracker</h1>
        </div>
    )
}

export default Title;