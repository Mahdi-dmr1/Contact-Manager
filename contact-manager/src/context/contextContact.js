import {  createContext } from "react";

export const ContactContext = createContext({
    loading: false,
    setLoading: () => {},
    contact: {},
    setContacts: () => {},
    setFilteredContacts: () => {},
    contacts: [],
    contactQuery: {},
    filteredContacts: [],
    groups: [],
    onContactChange: () =>{},
    deleteContact: () => {},
    createContact: () => {},
    contactSearch: () => {},
})