import Sidebar from "@/components/sidebar";
import { Flex } from "@mantine/core";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Flex direction="row" h="100%">
      <Sidebar />

      <div>{children}</div>
    </Flex>
  );
}
