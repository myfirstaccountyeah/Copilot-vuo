export interface Invoice {
  id: number;
  customerId: number;
  jobId: number;
  amount: number;
  status: 'pending' | 'paid' | 'overdue';
  issueDate: string; // ISO date string
  dueDate: string; // ISO date string
  description?: string; // Optional description of the invoice
}