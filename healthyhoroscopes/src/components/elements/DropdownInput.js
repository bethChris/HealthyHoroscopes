
const Dropdown = ({value, setValue}) => {

  const handleOptionChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <div className="dropdown-container">
      <label htmlFor="dropdown">Select your favorite music genre:</label>
      <select
        id="dropdown"
        name="dropdown"
        value={value}
        onChange={handleOptionChange}
        className="dropdown-select"
      >
        <option value="">-- Select --</option>
        <option value="Classical">Classical</option>
        <option value="Country">Country</option>
        <option value="EDM">EDM</option>
        <option value="Folk">Folk</option>
        <option value="Gospel">Gospel</option>
        <option value="HipHop">Hip Hop</option>
        <option value="Jazz">Jazz</option>
        <option value="KPop">KPop</option>
        <option value="Latin">Latin</option>
        <option value="Lofi">Lofi</option>
        <option value="Metal">Metal</option>
        <option value="Pop">Pop</option>
        <option value="RNB">RNB</option>
        <option value="Rap">Rap</option>
        <option value="Rock">Rock</option>
        <option value="VideoGameMusic">Video Game Music</option>
      </select>
    </div>
  );
};

export default Dropdown;
