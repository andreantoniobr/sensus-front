import { createContext, useContext, useState, useEffect } from "react";
import { useLocation } from "react-router";

type DropdownContextType = {
  openId: string | null;
  setOpenId: (id: string | null) => void;
  toggle: (id: string) => void;
  close: () => void;
};

const DropdownContext = createContext({} as DropdownContextType);

export function DropdownProvider({ children }: { children: React.ReactNode }) {
  const [openId, setOpenId] = useState<string | null>(null);
  const location = useLocation();

  function toggle(id: string) {
    setOpenId((prev) => (prev === id ? null : id));
  }

  function close() {
    setOpenId(null);
  }

  // fecha ao mudar rota
  useEffect(() => {
    close();
  }, [location.pathname]);

  return (
    <DropdownContext.Provider value={{ openId, setOpenId, toggle, close }}>
      {children}
    </DropdownContext.Provider>
  );
}

export function useDropdown() {
  return useContext(DropdownContext);
}