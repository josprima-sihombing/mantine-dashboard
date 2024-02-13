"use client";

import {
  Box,
  Collapse,
  Group,
  Text,
  ThemeIcon,
  UnstyledButton,
  rem,
} from "@mantine/core";
import { useState } from "react";
import classes from "./sidebar.module.css";
import { IconChevronRight } from "@tabler/icons-react";

interface SidebarMenuProps {
  icon: React.FC<any>;
  label: string;
  initiallyOpened?: boolean;
  links?: { label: string; link: string }[];
}

export default function SidebarMenu({
  icon: Icon,
  label,
  initiallyOpened,
  links,
}: SidebarMenuProps) {
  const hasLinks = Array.isArray(links);
  const [opened, setOpened] = useState(initiallyOpened || false);
  const items = (hasLinks ? links : []).map((link) => (
    <Text<"a">
      component="a"
      className={classes.link}
      href={link.link}
      key={link.label}
      onClick={(event) => event.preventDefault()}
    >
      {link.label}
    </Text>
  ));

  return (
    <>
      <UnstyledButton
        onClick={() => setOpened((o) => !o)}
        className={classes.control}
      >
        <Group justify="space-between" gap={0}>
          <Box style={{ display: "flex", alignItems: "center" }}>
            <ThemeIcon variant="light" size={30}>
              <Icon style={{ width: rem(18), height: rem(18) }} />
            </ThemeIcon>
            <Box ml="md">{label}</Box>
          </Box>

          {hasLinks && (
            <IconChevronRight
              className={classes.chevron}
              stroke={1.5}
              style={{
                width: rem(16),
                height: rem(16),
                transform: opened ? "rotate(-90deg)" : "none",
              }}
            />
          )}
        </Group>
      </UnstyledButton>

      {hasLinks ? <Collapse in={opened}>{items}</Collapse> : null}
    </>
  );
}
