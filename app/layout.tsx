/*
 * @Date: 2024-03-06 09:55:46
 * @LastEditors: 庄鸿斌
 * @LastEditTime: 2024-03-15 14:33:24
 */
import '@/app/ui/global.css';
import { inter } from '@/app/ui/fonts';
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}
