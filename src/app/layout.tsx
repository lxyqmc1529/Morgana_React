'use client';
import { ConfigProvider } from "antd";
import { Inter } from "next/font/google";
import {antdTheme} from '@/theme/antd';
import { Provider } from "react-redux";
import store from "@/store";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ConfigProvider theme={antdTheme}>
          <Provider store={store}>{children}</Provider>
          </ConfigProvider>
  </body>
    </html>
  );
}
