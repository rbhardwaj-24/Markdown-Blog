import Navbar from "./components/navbar";
import "./globals.css";
import { ThemeProvider } from "./components/theme-provider";
import Footer from "./components/footer";

export default function RootLayout({
  children,
}) {
  return (
    <html lang="en" className="scroll-p-20 scroll-smooth">
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          {children}
          <hr />
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
