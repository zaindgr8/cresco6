
import '@fortawesome/fontawesome-free/css/all.min.css';
import './globals.css'
import { Inter_Tight } from 'next/font/google'
import { AOSInit } from './aoshook/aoshook';
import ImportBs from './importBs';
import localFont from "next/font/local"
import Header from '@/components/Header';
import { Open_Sans, Roboto_Mono } from "next/font/google";

const openSans = Open_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-opensans",
});

const robotoMono = Roboto_Mono({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-roboto-mono",
});

const inter = Inter_Tight({ subsets: ['latin'] })

const myFont = localFont({ 
src: "./fonts/Roboto-Black.ttf", 
variable:"--font-myfont"})

const robotoThin = localFont({
  src: "./fonts/Roboto-Thin.ttf",
  variable: "--font-robotoThin",
});

const robotoReg = localFont({
  src: "./fonts/Roboto-Regular.ttf",
  variable: "--font-robotoReg",
});


export const metadata = {
  title: 'CRESCO- Your Trust is our priority!',
  description: 'Real Estate Website',
  icons: {
    icon: ['/cresco.png?v=4'],
    apple: ['/cresco.png?v4'],
    shortcut: ['/cresco.png']
  }
}

export default function RootLayout({ children }) {
 
  return (
    <html
      lang="en"
      className={`${myFont.className} ${robotoReg.className} ${robotoThin.className} ${openSans.variable} ${robotoMono.variable} font-sans`}
    >
      <AOSInit />
      
      <body>
      <Header />
      
        <ImportBs />
        <div>{children}</div>
      </body>
    </html>
  );
}
