import styles from './Logo.module.css'

type props = {
    primaryTextColor?: string;
}
export const Logo: React.FC<props> = ({primaryTextColor}) => { 

    return (
        <div className={styles.logo}
            style={{color: primaryTextColor}}
        >
            <h1>Logo</h1>
        </div>
    );
}