import { createContext, useContext, useState } from 'react';

interface GlobalData {
  accessToken?: string;
}

interface globalContextProps {
  globalData: GlobalData;
  setGlobalData: (globalData: GlobalData) => void;
}

const GlobalContext = createContext({} as globalContextProps);

interface GlobalProviderProps {
  children: React.ReactNode;
}

export const GlobalProvider = ({ children }: GlobalProviderProps) => {
  const [globalData, setGlobalData] = useState<GlobalData>({});

  return (
    <GlobalContext.Provider value={{ globalData, setGlobalData }}>
      {children}
    </GlobalContext.Provider>
  );
};

export const useGlobalContext = () => {
  const { globalData, setGlobalData } = useContext(GlobalContext);

  const setAccessToken = (accessToken: string) => {
    setGlobalData({
      ...globalData,
      accessToken,
    });
  };

  return {
    accessToken: globalData?.accessToken,
    setAccessToken,
  };
};
