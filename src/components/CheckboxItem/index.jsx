import { useState } from "react";
import CheckmarkIcon from "../CheckmarkIcon";
import "./style.css";

const CheckboxItem = ({ id, label, checked, onChange }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isPressed, setIsPressed] = useState(false);

  const getIconState = () => {
    if (checked) return "selected";
    if (isPressed) return "hold";
    if (isHovered) return "hover";
    return "default";
  };

  const handleInteraction = {
    onMouseEnter: () => setIsHovered(true),
    onMouseLeave: () => {
      setIsHovered(false);
      setIsPressed(false);
    },
    onMouseDown: () => setIsPressed(true),
    onMouseUp: () => {
      setIsPressed(false);
      onChange(id);
    }
  };

  const checkboxStates = {
    checked,
    hovered: isHovered && !checked,
    pressed: isPressed,
    checkedHovered: isHovered && checked
  };

  return (
    <div className="checkbox-item">
      <label className="checkbox-item__label" {...handleInteraction}>
        <span className="checkbox-item__text">{label}</span>
        <div
          className={`
            checkbox-item__box
            ${checkboxStates.checked ? "checkbox-item__box--checked" : ""}
            ${checkboxStates.hovered ? "checkbox-item__box--hovered" : ""}
            ${checkboxStates.pressed ? "checkbox-item__box--pressed" : ""}
            ${
              checkboxStates.checkedHovered
                ? "checkbox-item__box--checked-hovered"
                : ""
            }
          `}
        >
          <input
            type="checkbox"
            id={id}
            className="checkbox-item__input"
            checked={checked}
            readOnly
          />
          <CheckmarkIcon state={getIconState()} />
        </div>
      </label>
    </div>
  );
};

export default CheckboxItem;
