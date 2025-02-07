import { useState } from "react";
import "./Select.scss";

export const Select = () => {
  const LANGUAGE_OPTIONS = ["UA", "EN", "RU"];

  const [selected, setSelected] = useState("UA");
  const [isOpen, setIsOpen] = useState(false);
  const [avaiableLanguages, setAvaiableLanguages] = useState(LANGUAGE_OPTIONS);

  const handleSelectLanguage = (event: React.MouseEvent<HTMLLIElement>) => {
    const newLanguage = event.currentTarget.textContent;

    if (!newLanguage) return;

    setAvaiableLanguages((prevLanguages) => {
      const filteredLanguages = prevLanguages.filter(
        (lg) => lg !== newLanguage
      );

      return [newLanguage, ...filteredLanguages];
    });

    setSelected(newLanguage);
  };

  return (
    <div
      className={`custom-select ${isOpen ? "open" : ""}`}
      onClick={() => setIsOpen(!isOpen)}
    >
      <div className="selected">{selected}</div>
      {isOpen && (
        <ul className="options">
          {avaiableLanguages.map((option) => (
            <li key={option} onClick={handleSelectLanguage}>
              {option}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
