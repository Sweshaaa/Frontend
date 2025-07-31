import axios from "axios";

const API=" localhost:5000/api/auth/users";

export const getUsers=()=>axios.get(API);
export const getUserById=(id)=>axios.get('$(API)/$(id)');

export const createUser=(data)=>axios.post(API,data);
export const updateUser=(id,data)=>axios.put('$(API)/$(id)',data);
export const deleteUser=(id)=>axios.delete('$(API)/$(id)');