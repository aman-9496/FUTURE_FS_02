import axios from 'axios';

const BASE = '/api';

const authHeaders = () => ({
  'Content-Type':  'application/json',
  'Authorization': `Bearer ${localStorage.getItem('token')}`,
});

export const loginAdmin = (username, password) =>
  axios.post(`${BASE}/auth/login`, { username, password });

export const getLeads = () =>
  axios.get(`${BASE}/leads`, { headers: authHeaders() });

export const addLead = (data) =>
  axios.post(`${BASE}/leads`, data);

export const updateLead = (id, data) =>
  axios.put(`${BASE}/leads/${id}`, data, { headers: authHeaders() });

export const deleteLead = (id) =>
  axios.delete(`${BASE}/leads/${id}`, { headers: authHeaders() });
