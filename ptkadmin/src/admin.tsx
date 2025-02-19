import React, { useState } from "react";
import "./global.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleUser } from "@fortawesome/free-solid-svg-icons";

// Define a type for the component's state
type ActiveDivType = 0 | 1 | 2;

const Admin: React.FC = () => {
  const [activeDiv, setActiveDiv] = useState<ActiveDivType>(0); // State to track active div

  const handleClick = (index: ActiveDivType): void => {
    setActiveDiv(index); // Update active div state on click
  };

  return (
    <div className="container">
      <div className="m-container">
        <div className="box" onClick={() => handleClick(0)}>
          <div className="content">
            <FontAwesomeIcon icon={faCircleUser} />
            <span className={activeDiv === 0 ? "active-text" : ""}>
              Content Management
            </span>
          </div>
        </div>
        <div className="box" onClick={() => handleClick(1)}>
          <div className="content">
            <FontAwesomeIcon icon={faCircleUser} />
            <span className={activeDiv === 1 ? "active-text" : ""}>
              Document Management
            </span>
          </div>
        </div>
        <div className="box" onClick={() => handleClick(2)}>
          <div className="content">
            <FontAwesomeIcon icon={faCircleUser} />
            <span className={activeDiv === 2 ? "active-text" : ""}>
              User Management
            </span>
          </div>
        </div>
      </div>
      <div>
        {activeDiv === 0 && <div className="c-container">Div1</div>}
        {activeDiv === 1 && <div className="c-container">Div2</div>}
        {activeDiv === 2 && <div className="c-container">Div3</div>}
      </div>
    </div>
  );
};

export default Admin;
