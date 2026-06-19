import { ThemeProvider } from '../context/ThemeContext';
import '../styles/globals.css'; // Adjust this path if your global CSS lives in a different folder

export const metadata = {
  title: 'HimShakti AI Generator',
  description: 'AI-Powered Product Description Generator for HimShakti Food Processing Unit',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="antialiased bg-white text-gray-900 dark:bg-gray-950 dark:text-gray-50 transition-colors duration-200">
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}