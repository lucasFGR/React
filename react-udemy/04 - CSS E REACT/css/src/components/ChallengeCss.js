import styles from "./ChallengeCss.module.css";

const ChallengeCss = ({ modelo, fabricante, novo }) => {
  return (
    <div className={styles.ChallengeCss}>
      <div className={styles.carro_info}>
        <h1 className={styles.modelo}>{modelo}</h1>
        <p className={styles.fabricante}>{fabricante}</p>
        <p className={styles.novo}>{novo ? "Novo" : "Usado"}</p>
      </div>
    </div>
  );
};

export default ChallengeCss;
