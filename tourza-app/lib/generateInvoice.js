import jsPDF from "jspdf";

export function generateInvoice(booking) {
  const doc = new jsPDF();

  // HEADER
  doc.setFontSize(18);
  doc.text("Tourza - Booking Invoice", 20, 20);

  doc.setFontSize(11);
  doc.text("Thank you for booking with Tourza", 20, 30);

  // LINE
  doc.line(20, 35, 190, 35);

  // BOOKING DETAILS
  doc.setFontSize(12);
  doc.text("Booking Details", 20, 45);

  doc.setFontSize(10);
  doc.text(`Booking ID: ${booking.id}`, 20, 55);
  doc.text(`Customer: ${booking.customer}`, 20, 62);
  doc.text(`Route: ${booking.route}`, 20, 69);
  doc.text(`Date: ${booking.date}`, 20, 76);
  doc.text(`Status: ${booking.status}`, 20, 83);

  // AMOUNT BOX
  doc.rect(20, 95, 170, 25);
  doc.setFontSize(12);
  doc.text("Total Amount", 25, 105);
  doc.setFontSize(16);
  doc.text(booking.amount, 25, 115);

  // FOOTER
  doc.setFontSize(9);
  doc.text(
    "This is a system-generated invoice and does not require a signature.",
    20,
    140
  );

  // SAVE PDF
  doc.save(`Invoice_${booking.id}.pdf`);
}
