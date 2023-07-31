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

//test link:
// https://drive.google.com/file/d/1K6zkr8mJYe5VeKR6z7_FP2CeesxKfWgz/view?usp=sharing
// https://drive.google.com/file/d/1YL2tBJz5nr2QJ_72UgNvU27sZOFReEF9/view?usp=sharing
// https://drive.google.com/file/d/1qQOoJZ4TdBxEw0DRCpjbJz0dqpHpb3I9/view?usp=sharing
// https://drive.google.com/file/d/1fnsp44EiPNtbHiO25Msw4UhVugSmeinp/view?usp=sharing
