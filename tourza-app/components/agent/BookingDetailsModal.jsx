"use client";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "../../components/ui/dialog";
import { Badge } from "../../components/ui/badge";

export default function BookingDetailsModal({ open, onClose, booking }) {
  if (!booking) return null;

  const getBadgeVariant = (status) => {
    if (status === "Confirmed") return "success";
    if (status === "Pending") return "warning";
    return "destructive";
  };

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="max-w-lg">
        <DialogHeader>
          <DialogTitle>Booking Details</DialogTitle>
        </DialogHeader>

        <div className="space-y-4 text-sm">
          <div className="flex justify-between">
            <span className="text-muted-foreground">Booking ID</span>
            <span className="font-medium">{booking.id}</span>
          </div>

          <div className="flex justify-between">
            <span className="text-muted-foreground">Customer</span>
            <span>{booking.customer}</span>
          </div>

          <div className="flex justify-between">
            <span className="text-muted-foreground">Route</span>
            <span>{booking.route}</span>
          </div>

          <div className="flex justify-between">
            <span className="text-muted-foreground">Date</span>
            <span>{booking.date}</span>
          </div>

          <div className="flex justify-between">
            <span className="text-muted-foreground">Amount</span>
            <span className="font-semibold">{booking.amount}</span>
          </div>

          <div className="flex justify-between items-center">
            <span className="text-muted-foreground">Status</span>
            <Badge variant={getBadgeVariant(booking.status)}>
              {booking.status}
            </Badge>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
