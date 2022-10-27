export const getContacts = state => state.contacts

export const getFilter = state => state.filter.filter;

export const getLoading = state => state.contacts.isLoading;

export const getError = state => state.contacts.error;