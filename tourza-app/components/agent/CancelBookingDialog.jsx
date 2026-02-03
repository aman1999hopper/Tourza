"use client";

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "../../components/ui/alert-dialog";
import { Badge } from "../../components/ui/badge";

export default function CancelBookingDialog({
  open,
  onClose,
  booking,
  onConfirm,
}) {
  if (!booking) return null;

  return (
    <AlertDialog open={open} onOpenChange={onClose}>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>
            Cancel Booking?
          </AlertDialogTitle>

          <AlertDialogDescription>
            This action cannot be undone. This will permanently
            cancel the booking.
          </AlertDialogDescription>
        </AlertDialogHeader>

        {/* BOOKING SUMMARY */}
        <div className="mt-4 space-y-2 text-sm">
          <div className="flex justify-between">
            <span className="text-muted-foreground">Booking ID</span>
            <span className="font-medium">{booking.id}</span>
          </div>

          <div className="flex justify-between">
            <span className="text-muted-foreground">Customer</span>
            <span>{booking.customer}</span>
          </div>

          <div className="flex justify-between items-center">
            <span className="text-muted-foreground">Status</span>
            <Badge variant="destructive">
              {booking.status}
            </Badge>
          </div>
        </div>

        <AlertDialogFooter className="mt-6">
          <AlertDialogCancel>
            Keep Booking
          </AlertDialogCancel>

          <AlertDialogAction
            className="bg-red-600 hover:bg-red-700"
            onClick={() => onConfirm(booking)}
          >
            Yes, Cancel Booking
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
