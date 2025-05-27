import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changeFilter } from 'redux/Contacts/filterSlice';
import { selectFilter } from 'redux/Contacts/selectors';
import { Block, Input, Label } from './Filter.styled';

const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectFilter);

  return (
    <Block >
      <Label >
        Find contacts by name
        <Input
          type="text"
          value={filter}
          onChange={e => dispatch(changeFilter(e.currentTarget.value))}
        />
      </Label>
    </Block>
  );
};

export default Filter;
