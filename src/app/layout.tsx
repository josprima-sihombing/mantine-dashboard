import "@mantine/core/styles.css";
import "./globals.css";

import { ColorSchemeScript, Flex, MantineProvider } from "@mantine/core";
import Sidebar from "@/components/sidebar";

export const metadata = {
  title: "My Mantine app",
  description: "I have followed setup instructions carefully",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <ColorSchemeScript />
      </head>
      <body>
        <MantineProvider>
          <Flex direction="row" h="100%">
            <Sidebar />

            <div>{children}</div>
          </Flex>
        </MantineProvider>
      </body>
    </html>
  );
}
