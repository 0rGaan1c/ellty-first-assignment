import { useState } from "react";
import CheckmarkHold from "../../assets/checkmark-hold.svg";
import CheckmarkHover from "../../assets/checkmark-hover.svg";
import CheckmarkSelected from "../../assets/checkmark-selected.svg";
import "./style.css";

const CheckboxItem = ({ id, label, checked, onChange }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isPressed, setIsPressed] = useState(false);

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

  const getCheckboxIcon = () => {
    if (checked) return CheckmarkSelected;
    if (isPressed) return CheckmarkHold;
    if (isHovered) return CheckmarkHover;
    return null;
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
          {getCheckboxIcon() && (
            <img
              src={getCheckboxIcon()}
              alt=""
              role="presentation"
              className="checkbox-item__icon"
            />
          )}
        </div>
      </label>
    </div>
  );
};

export default CheckboxItem;
