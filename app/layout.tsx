import type { Metadata } from 'next';
import Link from 'next/link';
import { QrCode } from 'lucide-react';
import './globals.css';
export const metadata: Metadata = {metadataBase:new URL('https://pdftoqr.vercel.app'),title:'PDF TO QR — Share a PDF with a scan',openGraph:{title:'PDF TO QR',description:'Create a QR code for your PDF document.',type:'website'},description:'Create and customize a QR code that opens your PDF.'};
export default function Layout({children}:{children:React.ReactNode}){return <html lang="en"><body><header><nav className="nav"><Link className="brand" href="/"><QrCode size={24}/> PDF TO QR</Link><div className="navlinks"><Link href="/help">Help</Link></div></nav></header>{children}<footer><span className="brand">PDF TO QR</span><div><Link href="/privacy">Privacy</Link><Link href="/terms">Terms</Link><Link href="/help">Help</Link></div></footer></body></html>}