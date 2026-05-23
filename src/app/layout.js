import "./globals.css";

export const metadata = {
  title: "Qartlo - Online Store Builder",
  description:
    "Qartlo helps businesses create online stores, manage products, receive orders, connect payments, and grow online.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}