import css from './TransactionHistory.module.css';

const tableHeaders = ['type', 'amount', 'currency'];

const TransactionHistory = ({ items }) => {
  return (
    <table className={css.table}>
      <thead className={css.thead}>
        <tr>
          {tableHeaders.map(item => (
            <th key={item} className={css.th}>
              {item}
            </th>
          ))}
        </tr>
      </thead>

      <tbody>
        {items.map(({ id, type, amount, currency }) => (
          <tr key={id} className={css.tr}>
            <td className={css.td}>{type}</td>
            <td className={css.td}>{amount}</td>
            <td className={css.td}>{currency}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default TransactionHistory;
