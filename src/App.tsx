import { useState } from "react";
import { Dashboard } from "./components/Dashboard";
import { Header } from "./components/Header";
import { NewTransactionModal } from "./components/NewTransactionsModal";
import { GlobalStyle } from "./styles/global";
import {TransactionsProvider } from "./TransactionsContext";
export function App() {

  const [isNewTransactionsModalOpen,setIsNewTransactionsModalOpen]=useState(false);
  function handleOpenNewTransactionModal(){
      setIsNewTransactionsModalOpen(true)
  }
  function handleCloseNewTransactionModal(){
      setIsNewTransactionsModalOpen(false)
  }


  return (
    <TransactionsProvider>
      <Header  
      onOpenNewTransactionModal={handleOpenNewTransactionModal}
      />
      <Dashboard />

      <NewTransactionModal
        isOpen={isNewTransactionsModalOpen}
        onRequestClose={handleCloseNewTransactionModal}
      />
      <GlobalStyle />
    </TransactionsProvider>
  );
}

export default App;
