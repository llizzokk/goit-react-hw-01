import clsx from "clsx";
import styles from "./TransactionHistory.module.css";

const TransactionHistory = ({ items }) => {
  return (
    <table className={styles.table}>
      <thead className={styles.tableHead}>
        <tr className={styles.row}>
          <th className={styles.headName}>Type</th>
          <th className={styles.headName}>Amount</th>
          <th className={styles.headName}>Currency</th>
        </tr>
      </thead>

      <tbody className={styles.tableBody}>
        {items.map((item) => {
          return (
            <tr className={styles.row} key={item.id}>
              <td className={clsx(styles.bodyData, styles.dataType)}>
                {item.type}
              </td>
              <td className={styles.bodyData}>{item.amount}</td>
              <td className={styles.bodyData}>{item.currency}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default TransactionHistory;
