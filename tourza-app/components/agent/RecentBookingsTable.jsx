"use client";
import { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../../components/ui/table";
import { Badge } from "../../components/ui/badge";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../../components/ui/dropdown-menu";
import { Button } from "../../components/ui/button";
import { MoreHorizontal, Eye, FileText, XCircle } from "lucide-react";
import BookingDetailsModal from "../../components/agent/BookingDetailsModal";
import { generateInvoice } from "../../lib/generateInvoice";
import CancelBookingDialog from "../../components/agent/CancelBookingDialog";

const recentBookings = [
  {
    id: "BK001",
    customer: "Rahul Sharma",
    route: "DEL → DXB",
    date: "12 Feb 2026",
    amount: "₹45,200",
    status: "Confirmed",
  },
  {
    id: "BK002",
    customer: "Anjali Verma",
    route: "BOM → SIN",
    date: "10 Feb 2026",
    amount: "₹38,900",
    status: "Pending",
  },
  {
    id: "BK003",
    customer: "Amit Patel",
    route: "DEL → LHR",
    date: "08 Feb 2026",
    amount: "₹62,500",
    status: "Cancelled",
  },
  {
    id: "BK004",
    customer: "Neha Gupta",
    route: "BLR → BKK",
    date: "05 Feb 2026",
    amount: "₹29,800",
    status: "Confirmed",
  },
];

export default function RecentBookingsTable() {
  const getBadgeVariant = (status) => {
    if (status === "Confirmed") return "success";
    if (status === "Pending") return "warning";
    return "destructive";
  };
  const [selectedBooking, setSelectedBooking] = useState(null);
  const [open, setOpen] = useState(false);
  const [cancelOpen, setCancelOpen] = useState(false);
  const [bookingToCancel, setBookingToCancel] = useState(null);

  const handleCancelBooking = (booking) => {
    console.log("Booking cancelled:", booking.id);
    setCancelOpen(false);
    setBookingToCancel(null);
  };

  return (
    <div className="rounded-xl border bg-white dark:bg-background">
      {/* HEADER */}
      <div className="border-b p-6">
        <h2 className="text-lg font-semibold">Recent Bookings</h2>
        <p className="text-sm text-muted-foreground">
          Latest flight bookings made by you
        </p>
      </div>

      {/* TABLE */}
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Booking ID</TableHead>
            <TableHead>Customer</TableHead>
            <TableHead>Route</TableHead>
            <TableHead>Date</TableHead>
            <TableHead>Amount</TableHead>
            <TableHead>Status</TableHead>
            <TableHead className="text-right">Actions</TableHead>
          </TableRow>
        </TableHeader>

        <TableBody>
          {recentBookings.map((booking) => (
            <TableRow key={booking.id}>
              <TableCell className="font-medium">{booking.id}</TableCell>
              <TableCell>{booking.customer}</TableCell>
              <TableCell>{booking.route}</TableCell>
              <TableCell>{booking.date}</TableCell>
              <TableCell>{booking.amount}</TableCell>

              {/* STATUS */}
              <TableCell>
                <Badge variant={getBadgeVariant(booking.status)}>
                  {booking.status}
                </Badge>
              </TableCell>

              {/* ACTIONS */}
              <TableCell className="text-right">
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" size="icon">
                      <MoreHorizontal className="h-4 w-4" />
                    </Button>
                  </DropdownMenuTrigger>

                  <DropdownMenuContent align="end">
                    <DropdownMenuItem
                      onClick={() => {
                        setSelectedBooking(booking);
                        setOpen(true);
                      }}
                    >
                      <Eye className="mr-2 h-4 w-4" />
                      View Details
                    </DropdownMenuItem>

                    <DropdownMenuItem onClick={() => generateInvoice(booking)}>
                      <FileText className="mr-2 h-4 w-4" />
                      Download Invoice
                    </DropdownMenuItem>

                    <DropdownMenuItem
                      className="text-red-600"
                      onClick={() => {
                        setBookingToCancel(booking);
                        setCancelOpen(true);
                      }}
                    >
                      <XCircle className="mr-2 h-4 w-4" />
                      Cancel Booking
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

      {/* Booking Details Modal */}
      <BookingDetailsModal
        open={open}
        onClose={() => setOpen(false)}
        booking={selectedBooking}
      />

      {/* 🔥 CANCEL BOOKING DIALOG */}
      <CancelBookingDialog
        open={cancelOpen}
        onClose={setCancelOpen}
        booking={bookingToCancel}
        onConfirm={handleCancelBooking}
      />
    </div>
  );
}
