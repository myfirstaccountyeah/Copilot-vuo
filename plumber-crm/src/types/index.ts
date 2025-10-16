export interface Customer {
  id: number;
  name: string;
  email: string;
  phone: string;
  address: string;
}

export interface Job {
  id: number;
  customerId: number;
  description: string;
  status: 'pending' | 'in-progress' | 'completed';
  createdAt: string;
  updatedAt: string;
}

export interface Invoice {
  id: number;
  jobId: number;
  amount: number;
  dueDate: string;
  status: 'paid' | 'unpaid' | 'overdue';
}

export interface User {
  id: number;
  username: string;
  email: string;
  role: 'admin' | 'user';
}