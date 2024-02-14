"use client";

import {
  Box,
  Collapse,
  Group,
  ThemeIcon,
  UnstyledButton,
  rem,
} from "@mantine/core";
import { useState } from "react";
import classes from "./sidebar.module.css";
import { IconChevronRight } from "@tabler/icons-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import classNames from "classnames";

interface SidebarMenuProps {
  icon: React.FC<any>;
  label: string;
  initiallyOpened?: boolean;
  link?: string;
  links?: { label: string; link: string }[];
}

export default function SidebarMenu({
  icon: Icon,
  label,
  link,
  initiallyOpened,
  links,
}: SidebarMenuProps) {
  const [opened, setOpened] = useState(initiallyOpened || false);

  const pathName = usePathname();

  const hasLinks = Array.isArray(links);

  const controlClassNames = classNames(classes.control, {
    [classes.link__active]: pathName === link,
  });

  const items = (hasLinks ? links : []).map((link) => {
    const linkClassNames = classNames(classes.link, {
      [classes.link__active]: pathName === link.link,
    });

    return (
      <UnstyledButton
        className={linkClassNames}
        key={link.link}
        component={Link}
        href={link.link}
      >
        {link.label}
      </UnstyledButton>
    );
  });

  return (
    <>
      {!hasLinks && !!link ? (
        <UnstyledButton
          component={Link}
          href={link}
          className={controlClassNames}
        >
          <Group justify="space-between" gap={0}>
            <Box style={{ display: "flex", alignItems: "center" }}>
              <ThemeIcon variant="light" size={30}>
                <Icon style={{ width: rem(18), height: rem(18) }} />
              </ThemeIcon>
              <Box ml="md">{label}</Box>
            </Box>
          </Group>
        </UnstyledButton>
      ) : (
        <UnstyledButton
          onClick={() => setOpened((o) => !o)}
          className={controlClassNames}
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
      )}

      {hasLinks ? <Collapse in={opened}>{items}</Collapse> : null}
    </>
  );
}
