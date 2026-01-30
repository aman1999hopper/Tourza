"use client";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../../components/ui/table";
import { Badge } from "../../components/ui/badge";
import { Button } from "../../components/ui/button";
import { PlusCircle } from "lucide-react";

const walletTransactions = [
  {
    id: "TXN001",
    type: "Credit",
    description: "Booking commission",
    date: "12 Feb 2026",
    amount: "₹5,200",
    status: "Success",
  },
  {
    id: "TXN002",
    type: "Debit",
    description: "Flight booking payment",
    date: "10 Feb 2026",
    amount: "₹18,900",
    status: "Success",
  },
  {
    id: "TXN003",
    type: "Credit",
    description: "Refund received",
    date: "08 Feb 2026",
    amount: "₹3,500",
    status: "Pending",
  },
  {
    id: "TXN004",
    type: "Debit",
    description: "Hotel booking payment",
    date: "05 Feb 2026",
    amount: "₹12,000",
    status: "Failed",
  },
];

export default function WalletTransactions() {
  const getStatusVariant = (status) => {
    if (status === "Success") return "success";
    if (status === "Pending") return "warning";
    return "destructive";
  };

  const getTypeColor = (type) => {
    return type === "Credit"
      ? "text-green-600"
      : "text-red-600";
  };

  return (
    <div className="rounded-xl border bg-white dark:bg-background">
      {/* HEADER */}
      <div className="flex items-center justify-between border-b p-6">
        <div>
          <h2 className="text-lg font-semibold">Wallet Transactions</h2>
          <p className="text-sm text-muted-foreground">
            Credit & debit history of your wallet
          </p>
        </div>

        <Button>
          <PlusCircle className="mr-2 h-4 w-4" />
          Add Balance
        </Button>
      </div>

      {/* TABLE */}
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Transaction ID</TableHead>
            <TableHead>Type</TableHead>
            <TableHead>Description</TableHead>
            <TableHead>Date</TableHead>
            <TableHead>Amount</TableHead>
            <TableHead>Status</TableHead>
          </TableRow>
        </TableHeader>

        <TableBody>
          {walletTransactions.map((txn) => (
            <TableRow key={txn.id}>
              <TableCell className="font-medium">
                {txn.id}
              </TableCell>

              <TableCell className={getTypeColor(txn.type)}>
                {txn.type}
              </TableCell>

              <TableCell>{txn.description}</TableCell>
              <TableCell>{txn.date}</TableCell>
              <TableCell>{txn.amount}</TableCell>

              <TableCell>
                <Badge variant={getStatusVariant(txn.status)}>
                  {txn.status}
                </Badge>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
