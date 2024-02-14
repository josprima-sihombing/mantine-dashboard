"use client";

import { Code, Flex, Group, ScrollArea, Title } from "@mantine/core";

import classes from "./sidebar.module.css";
import SidebarMenu from "./menu";
import {
  IconCalendarStats,
  IconSettings,
  IconUsers,
} from "@tabler/icons-react";

export default function Sidebar() {
  return (
    <Flex direction="column" h="100%" className={classes.sidebar}>
      <div className={classes.header}>
        <Title order={4}>Dashboard</Title>
      </div>

      <ScrollArea h="100%" miw={200}>
        <SidebarMenu icon={IconCalendarStats} label="Dashboard" link="/" />
        <SidebarMenu
          icon={IconUsers}
          label="User Management"
          links={[
            {
              label: "User List",
              link: "/user-management",
            },
            {
              label: "Manage Access",
              link: "/user-management/access",
            },
          ]}
        />
      </ScrollArea>

      <div className={classes.footer}>
        <Group>
          <Code>v0.0.1</Code>
        </Group>
      </div>
    </Flex>
  );
}
