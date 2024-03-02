
const Scale = ({text, value, setValue}) => {

  const handleRatingChange = (event) => {
    setValue(parseInt(event.target.value, 10));
  };

  return (
    <div className="symptom-rating-container">
      <label htmlFor="symptomRating" style={{color: "black"}}>{text}: {value}</label>
      <input
        type="range"
        id="symptomRating"
        name="symptomRating"
        min="1"
        max="10"
        value={value}
        onChange={handleRatingChange}
        className="rating-slider"
      />
    </div>
  );
};

export default Scale;
