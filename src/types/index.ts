export interface Guest {
  id: string;
  name: string;
  rsvp: "going" | "not_going" | "pending";
}

export interface Expense {
  id: string;
  title: string;
  amount: number;
}