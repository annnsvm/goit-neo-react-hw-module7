import { createSlice } from '@reduxjs/toolkit';

import { fetchContacts, addContacts, deleteContacts } from './operations';
import { logOut } from 'redux/Authorization/operations';

const initialState = {
  contacts: [{name:'Anna',phone:'456-643-211'}],
  isLoading: false,
  error: null,
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(fetchContacts.pending, state => {
        state.isLoading = true;
      })
      .addCase(fetchContacts.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      })
      .addCase(fetchContacts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.contacts = action.payload;
      })
      .addCase(addContacts.pending, state => {
        state.isLoading = true;
      })
      .addCase(addContacts.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      })
      .addCase(addContacts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.contacts.push(action.payload);
      })
      .addCase(deleteContacts.pending, state => {
        state.isLoading = true;
      })
      .addCase(deleteContacts.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      })
      .addCase(deleteContacts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.contacts = state.contacts.filter(
          item => item.id !== action.payload.id
        );
      })
      .addCase(logOut.fulfilled, state => {
        state.items = [];
        state.error = null;
        state.isLoading = false;
      });
  },
});

export default contactsSlice.reducer;
