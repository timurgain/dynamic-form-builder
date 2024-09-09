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
  const [filteredOptions, setFilteredOptions] = useState<Option[]>(options);
  const [focusedOptionIndex, setFocusedOptionIndex] = useState<number | null>(
    null,
  );
  const optionRefs = React.useRef<HTMLLIElement[]>([]);

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
    if (e.key === "Escape") setIsOpen(false);

    if (e.key === "Enter") {
      if (!isOpen) {
        setIsOpen(true);
        return;
      }
      if (focusedOptionIndex !== null && filteredOptions[focusedOptionIndex]) {
        const option = filteredOptions[focusedOptionIndex];
        onSelect(option);
        setIsOpen(false);
        setInputValue(option.label);
        setFocusedOptionIndex(null);
      }
    }
    if (e.key === "ArrowDown") {
      setFocusedOptionIndex((prev) =>
        prev === null || prev === filteredOptions.length - 1 ? 0 : prev + 1,
      );
    }
    if (e.key === "ArrowUp") {
      setFocusedOptionIndex((prev) =>
        prev === null || prev === 0 ? filteredOptions.length - 1 : prev - 1,
      );
    }
  };

  const handleOptionClick =
    (option: Option) => (e: React.MouseEvent<HTMLLIElement, MouseEvent>) => {
      e.stopPropagation();
      onSelect(option);
      setInputValue(option.label);
      setIsOpen(false);
    };

  return (
    <label
      className={styles.container}
      onBlur={() => setIsOpen(false)}
      onClick={() => setIsOpen(!isOpen)}
      onFocus={() => setIsOpen(true)}
    >
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
      />
      <div className={clsx(styles.icon, { [styles["icon_rotate"]]: isOpen })}>
        <ShevronIcon />
      </div>
      {error && !isOpen && <span className={styles["error-msg"]}>{error}</span>}

      <ul
        className={clsx(styles.dropdown, { [styles["dropdown_open"]]: isOpen })}
      >
        {filteredOptions?.map((option, index) => (
          <li
            key={option.value}
            className={clsx(styles.option, {
              [styles["option_focused"]]: index === focusedOptionIndex,
            })}
            onClick={handleOptionClick(option)}
            ref={(el) => {
              if (el) optionRefs.current.push(el);
            }}
          >
            {option.label}
          </li>
        ))}
      </ul>
    </label>
  );
}
