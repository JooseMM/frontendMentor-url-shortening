import { useState } from "react";
import "./links.css";

const Links = ({ data }) => {
  const [copy, setCopy] = useState([false, false, false]);
  const isCopy = (index) => {
    const whatsCopy = copy.map((c, i) => {
      if (i === index) {
        // change the value to true
        return (c = true);
      } else {
        // The rest is false
        return (c = false);
      }
    });
    setCopy(whatsCopy);
  };
  return (
    <ul className="links-list">
      {/* maps trought the states if this is not empty */}
      {data != null
        ? data.map((item, i) => (
            <li key={i}>
              <div className="link-li">
                <a className="long-link" href={item.long} target="_blank">
                  {item.long}
                </a>
                <hr />
                <div>
                  <a className="short-link" href={item.short} target="_blank">
                    {item.short}
                  </a>
                  <button
                    className={copy[i] ? "copied-state" : null}
                    onClick={() => {
                      navigator.clipboard.writeText(item.short);
                      isCopy(i);
                    }}
                  >
                    {copy[i] ? "Copied!" : "Copy"}
                  </button>
                </div>
              </div>
            </li>
          ))
        : null}
    </ul>
  );
};

export default Links;
