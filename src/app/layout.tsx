import "./globals.css";
import { poppins } from "../../public/fonts";
import { ProductProvider } from "../../public/context/product";

export const metadata = {
  title: "MamiMarket",
  description: "shop page",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${poppins.variable} text-black font-sans bg-secondary w-full h-full`}
      >
        <ProductProvider>{children}</ProductProvider>
      </body>
    </html>
  );
}
