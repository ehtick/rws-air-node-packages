import { FormControl, FormHelperText, InputLabel, MenuItem, Select } from '@material-ui/core';
import ArrowDropIcon from '@material-ui/icons/ArrowDropDown';
import classnames from 'classnames';
import { useField } from 'formik';
import { SelectProps, useFieldToSelect } from 'formik-material-ui';
import React, { Fragment, useEffect, useRef, useState } from 'react';
import { When } from 'react-if';
import css from './SelectMenu.scss';

/** The possible types for the option value */
export type SelectMenuOptionValues = string | number | string[];

export interface SelectMenuOption<T extends SelectMenuOptionValues> {
  /** The value for the option */
  value: T;
  /** The label shown next to the radio button */
  label: string;
}

export interface SelectMenuProps<T extends SelectMenuOptionValues> extends SelectProps {
  /** The label of the select menu */
  label: string;
  /** The selectable options for the select menu */
  options: SelectMenuOption<T>[];
}

/**
 * Constructs a Select Menu with the formik validation
 * @param props Props to pass to the select menu component
 * @example
 * ```jsx
 * <SelectMenu
 *   name='type'
 *   type='text'
 *   required
 *   placeholder='Example Placeholder'
 *   variant='outlined'
 *   data-qa='sample-select-menu'
 *   label='Example'
 *   options={ [{ value: 'JOHN', label: 'John'}, { value: 'CONNOR', label: 'Connor'}] }
 * />
 * ```
 */
export const SelectMenu = <T extends SelectMenuOptionValues>({
  label,
  options,
  name,
  placeholder,
  className,
  autoFocus,
  required,
  ...props
}: SelectMenuProps<T>) => {
  const selectFieldProps = useFieldToSelect({ name, ...props });
  const [{ value, onChange, onBlur }, { error, touched }] = useField(name);

  const inputLabel = useRef<HTMLLabelElement>(null);
  const [labelWidth, setLabelWidth] = useState(0);

  useEffect(() => {
    if (inputLabel.current) {
      setLabelWidth(inputLabel.current.offsetWidth);
    }
  }, []);

  const selectFieldHasErrors = Boolean(error) && touched;

  return (
    <Fragment>
      <FormControl variant='outlined' fullWidth>
        <InputLabel
          classes={{ root: css.inputLabel, shrink: css.inputLabelShrink }}
          ref={inputLabel}
          id={`validated-select-menu-${label}`}
          required={required}
        >
          {label}
        </InputLabel>
        <Select
          {...selectFieldProps}
          {...props}
          type='text'
          labelId={`validated-select-menu-${label}`}
          labelWidth={labelWidth}
          className={classnames([css.select, { [css.errorSelect]: selectFieldHasErrors }])}
          IconComponent={() => <ArrowDropIcon color={selectFieldHasErrors ? 'error' : 'primary'} />}
          fullWidth
          displayEmpty
          value={value || ''}
          onChange={onChange}
          onBlur={onBlur}
          autoFocus={autoFocus}
          required={required}
          inputProps={{ classes: { root: css.input } }}
        >
          {options.map((item, index) => (
            <MenuItem
              classes={{ root: css.menuItem, selected: css.menuItemSelected }}
              key={index + 1}
              value={item.value}
            >
              {item.label}
            </MenuItem>
          ))}
        </Select>
        <When condition={selectFieldHasErrors}>
          <FormHelperText component='div' classes={{ root: css.errorLabel }}>
            {error || ''}
          </FormHelperText>
        </When>
      </FormControl>
    </Fragment>
  );
};
