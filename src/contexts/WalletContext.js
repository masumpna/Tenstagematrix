import { createContext, useState } from 'react';

export const WalletContext = createContext();

export const WalletProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  return (
    <WalletContext.Provider value={{ user, setUser }}>
      {children}
    </WalletContext.Provider>
  );
};
