import React from 'react';
import { UlList, Button, Item } from './ContactList.styled';

import { useDispatch, useSelector } from 'react-redux';
import { getContacts } from 'redux/selectors';
import { deleteContact } from 'redux/operations';

export default function ContactList() {
  const contacts = useSelector(getContacts);
  const dispatch = useDispatch();
  const filter = useSelector(store => store.filter);

  const handleDelete = id => dispatch(deleteContact(id));

  const filteredContacts = contacts.filter(obj =>
    obj.name.toLowerCase().trim().includes(filter)
  );
  return (
    <UlList className="listItems">
      {filteredContacts.map(({ name, number, id }) => (
        <Item key={id}>
          <p>
            {name} : {number}
          </p>
          <Button
            type="button"
            onClick={() => {
              handleDelete(id);
            }}
          ></Button>
        </Item>
      ))}
    </UlList>
  );
}
