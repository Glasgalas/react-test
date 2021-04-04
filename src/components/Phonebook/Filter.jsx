const Filter = ({ value, onChange }) => (
  <label>
    Search contact 🔍
    <input type="text" value={value} onChange={onChange} />
  </label>
);

export default Filter;
