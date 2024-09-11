import { useEffect, useState, createContext, useContext } from "react";
import { fetchData } from "../utils/Rapidapi";

export const AuthContext = createContext(); // Use createContext() correctly here

export default function AuthProvider({ children }) {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  const [value, setValue] = useState("New");

  useEffect(() => {
    fetchAlldata(value);
  }, [value]);

  const fetchAlldata = (query) => {
    setLoading(true);
    fetchData(`search/?q=${query}`).then(({ contents }) => {
      console.log(contents);
      setData(contents);
      setLoading(false);
    });
  };

  return (
    // Corrected the typo from 'prvider' to 'Provider'
    <AuthContext.Provider value={{ loading, data, value, setValue }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext); // Add useContext import and usage
