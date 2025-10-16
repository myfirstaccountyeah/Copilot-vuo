export interface Job {
  id: number;
  title: string;
  description: string;
  customerId: number;
  status: 'pending' | 'in-progress' | 'completed' | 'cancelled';
  createdAt: string; // ISO date string
  updatedAt: string; // ISO date string
}