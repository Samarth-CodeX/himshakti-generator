import { ThemeProvider } from '../context/ThemeContext';
import './globals.css'; 

export const metadata = {
  title: 'HimShakti AI Generator',
  description: 'AI-Powered Product Description Generator',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="antialiased bg-white text-slate-800 dark:bg-[#0B0F19] dark:text-slate-200 transition-colors duration-300" suppressHydrationWarning>
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}