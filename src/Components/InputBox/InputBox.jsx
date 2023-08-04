import "./InputBox.css";

const InputBox = ({ fetch, input, setInput }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    fetch();
  };
  return (
    <div className="input-links-containers">
      <div className="input-container ">
        <form
          onSubmit={
            input === "" || null || undefined
              ? (e) => {
                  alert(`Form is empty, please provide a link`);
                  e.preventDefault();
                }
              : handleSubmit
          }
        >
          <div>
            <input
              type="Url"
              placeholder="Shorten a link here..."
              value={input}
              // required={true}
              onChange={(e) => setInput(e.target.value)}
            />
            <span>Please add a link</span>
          </div>
          <button type="submit">Shorten It!</button>
        </form>
      </div>
    </div>
  );
};
export default InputBox;


