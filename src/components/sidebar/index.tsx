"use client";

import { Flex, ScrollArea, Title } from "@mantine/core";

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
        <SidebarMenu icon={IconCalendarStats} label="Dashboard" />
        <SidebarMenu
          icon={IconUsers}
          label="User Management"
          links={[
            {
              label: "User List",
              link: "/",
            },
            {
              label: "Revoke Access",
              link: "/",
            },
          ]}
        />
        <SidebarMenu
          icon={IconSettings}
          label="Settings"
          links={[
            {
              label: "Account Setting",
              link: "/",
            },
            {
              label: "Account Activity",
              link: "/",
            },
          ]}
        />
      </ScrollArea>
    </Flex>
  );
}
