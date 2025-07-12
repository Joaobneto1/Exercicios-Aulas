export interface ITransaction {
  id: string;
  description: string;
  price: number;
  dueDate: string;
  status: string;
}

export interface DetailTransactionProps {
  params: {
    id: string;
  };
}
