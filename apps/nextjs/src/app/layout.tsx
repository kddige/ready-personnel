import type { Metadata } from "next";
import { Inter } from "next/font/google";

import "~/styles/globals.css";

import { headers } from "next/headers";
import { ClerkProvider } from "@clerk/nextjs";

import { TRPCReactProvider } from "~/trpc/react";

const fontSans = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

/**
 * Since we're passing `headers()` to the `TRPCReactProvider` we need to
 * make the entire app dynamic. You can move the `TRPCReactProvider` further
 * down the tree (e.g. /dashboard and onwards) to make part of the app statically rendered.
 */
export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Create T3 Turbo",
  description: "Simple monorepo with shared backend for web & mobile apps",
};

export default function Layout(props: { children: React.ReactNode }) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={["font-sans", fontSans.variable].join(" ")}>
          <TRPCReactProvider headers={headers()}>
            {props.children}
          </TRPCReactProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
