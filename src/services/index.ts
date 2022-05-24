import { instance } from '../instance';

export const getEmployees = () => instance.get('/v3/employees');
