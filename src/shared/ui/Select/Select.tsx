import styles from "./Select.module.scss";
import clsx from "clsx";
import ShevronIcon from "@/shared/assets/icons/chevron.svg?react";
import React, { useState } from "react";

export enum SelectKits {
  DEFAULT = "default",
}

export type Option = {
  value: string | number;
  label: string;
};

type Props = {
  kit?: SelectKits;
  label: string;
  option?: Option;
  options: Option[];
  onSelect: (option: Option) => void;
  placeholder?: string;
  className?: string;
  disabled?: boolean;
  required?: boolean;
  error?: string;
};

export function Select({
  kit = SelectKits.DEFAULT,
  label,
  option,
  options,
  onSelect,
  placeholder,
  className,
  disabled = false,
  required = false,
  error,
}: Props) {
  const [isOpen, setIsOpen] = useState(false);
  const [inputValue, setInputValue] = useState(option?.label ?? "");
  const [isKeyboardFocus, setIsKeyboardFocus] = useState(false);
  const [filteredOptions, setFilteredOptions] = useState<Option[]>(options);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setIsOpen(true);
    const input = e.target.value;
    setInputValue(input);
    setFilteredOptions(
      options.filter((option) =>
        option.label.toLowerCase().includes(input.toLowerCase().trim()),
      ),
    );
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    setIsKeyboardFocus(true);
    if (e.key === "Escape") setIsOpen(false);
  };

  const handleMouseDown = () => {
    if (isKeyboardFocus) setIsKeyboardFocus(false);
  };

  const handleFocus = () => {
    if (isKeyboardFocus) setIsOpen(true);
  };

  const handleOptionClick = (option: Option) => () => {
    // setSelectedOption(option);
    onSelect(option);
    setInputValue(option.label);
    setIsOpen(false);
  };

  return (
    <label className={styles.container}>
      <span className={styles.label}>
        {label}
        {required && <sup className={styles["label__asterisk"]}>*</sup>}
      </span>
      <input
        className={clsx(
          styles.input,
          styles[`input_kit_${kit}`],
          { [styles["input_error"]]: error },
          className,
        )}
        name={label}
        value={inputValue}
        onChange={handleInputChange}
        placeholder={placeholder ?? ""}
        disabled={disabled}
        autoComplete="off"
        required={required}
        onKeyDown={handleKeyDown}
        onMouseDown={handleMouseDown}
        onClick={() => setIsOpen(!isOpen)}
        onFocus={() => handleFocus()}
        onBlur={() => setIsOpen(false)}
      />
      <div className={clsx(styles.icon, { [styles["icon_rotate"]]: isOpen })}>
        <ShevronIcon />
      </div>
      {error && !isOpen && <span className={styles["error-msg"]}>{error}</span>}

      <ul
        className={clsx(styles.dropdown, { [styles["dropdown_open"]]: isOpen })}
      >
        {filteredOptions?.map((option) => (
          <li
            key={option.value}
            className={styles.option}
            onClick={handleOptionClick(option)}
          >
            {option.label}
          </li>
        ))}
      </ul>
    </label>
  );
}
