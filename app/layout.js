import { Inter } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
const inter = Inter({ subsets: ["latin"] });
import { dark } from "@clerk/themes";
import Providers from "./providers";

export const metadata = {
  title: "GPTGenius",
  description:
    "GPTGenius: Your AI language companion. Powered by OpenAI, it enhances your conversations, content creation, and more!",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider
      appearance={{
        baseTheme: dark,
      }}>
      <html lang="en" data-theme="dracula">
        <body className={inter.className}>
          <Providers>{children}</Providers>
        </body>
      </html>
    </ClerkProvider>
  );
}
