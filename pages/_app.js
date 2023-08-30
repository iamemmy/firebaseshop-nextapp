import Navbar from '@/components/Navbar';
import '@/styles/globals.css';
import '../Sass/main.css';

// page/_app.tsx
import { ClerkProvider } from "@clerk/nextjs";

function MyApp({ Component, pageProps }) {
  return (
    <ClerkProvider {...pageProps}>
      <Navbar />
      <Component {...pageProps} />
    </ClerkProvider>
  );
}
 
export default MyApp;