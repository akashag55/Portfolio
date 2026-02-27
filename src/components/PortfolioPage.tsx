"use client";

import {
  ActionIcon,
  Anchor,
  Badge,
  Box,
  Burger,
  Button,
  Card,
  Container,
  Divider,
  Drawer,
  Grid,
  Group,
  Paper,
  Pill,
  SegmentedControl,
  SimpleGrid,
  Stack,
  Text,
  ThemeIcon,
  Timeline,
  Title,
  useComputedColorScheme,
  useMantineColorScheme,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import {
  IconArrowUpRight,
  IconBrandGithub,
  IconBrandLinkedin,
  IconCode,
  IconFileCv,
  IconMail,
  IconMoon,
  IconSparkles,
  IconSun,
} from "@tabler/icons-react";
import { useMemo, useState } from "react";
import { portfolioConfig } from "@/src/config/portfolio";

const sections = [
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "skills", label: "Skills" },
  { id: "connect", label: "Connect" },
];

const iconMap = {
  GitHub: IconBrandGithub,
  LinkedIn: IconBrandLinkedin,
  Email: IconMail,
  Medium: IconCode,
} as const;

export function PortfolioPage() {
  const [opened, { toggle, close }] = useDisclosure(false);
  const [projectFilter, setProjectFilter] = useState<"All" | "Frontend" | "Full Stack" | "Desktop">("All");
  const { setColorScheme } = useMantineColorScheme();
  const computedColorScheme = useComputedColorScheme("dark");

  const filteredProjects = useMemo(() => {
    if (projectFilter === "All") {
      return portfolioConfig.projects;
    }
    return portfolioConfig.projects.filter((project) => project.category === projectFilter);
  }, [projectFilter]);

  const isDark = computedColorScheme === "dark";

  return (
    <Container size="lg" px="md" py="xl">
      <Paper
        radius="xl"
        p={{ base: "md", md: "xl" }}
        withBorder
        className="float-in"
        style={{
          backdropFilter: "blur(10px)",
          background: isDark ? "rgba(27,27,32,0.72)" : "rgba(255,255,255,0.82)",
          borderColor: isDark ? "rgba(255,255,255,0.1)" : "rgba(17,17,17,0.1)",
        }}
      >
        <Group justify="space-between" align="center" mb="xl">
          <Group gap="xs">
            <ThemeIcon variant="gradient" gradient={{ from: "orange.6", to: "red.6" }} size={34} radius="md">
              <IconSparkles size={18} />
            </ThemeIcon>
            <Text fw={700} size="lg">
              {portfolioConfig.profile.name}
            </Text>
          </Group>

          <Group gap="xs" visibleFrom="sm">
            {sections.map((section) => (
              <Anchor key={section.id} href={`#${section.id}`} c="gray.2">
                {section.label}
              </Anchor>
            ))}
          </Group>

          <Group gap="xs">
            <ActionIcon
              variant="light"
              aria-label="Toggle theme"
              onClick={() => setColorScheme(isDark ? "light" : "dark")}
            >
              {isDark ? <IconSun size={18} /> : <IconMoon size={18} />}
            </ActionIcon>
            <ActionIcon hiddenFrom="sm" variant="light" aria-label="menu" onClick={toggle}>
              <Burger opened={opened} size="sm" />
            </ActionIcon>
          </Group>
        </Group>

        <Drawer opened={opened} onClose={close} title="Navigate" position="right" hiddenFrom="sm">
          <Stack gap="sm">
            {sections.map((section) => (
              <Anchor key={section.id} href={`#${section.id}`} onClick={close}>
                {section.label}
              </Anchor>
            ))}
          </Stack>
        </Drawer>

        <Stack id="about" gap="lg" mb={42}>
          <Badge variant="light" color="orange" size="lg">
            {portfolioConfig.profile.title}
          </Badge>
          <Title order={1} fz={{ base: 30, sm: 44 }}>
            Building frontend products that feel fast, clear, and reliable.
          </Title>
          <Text maw={760} c={isDark ? "gray.3" : "dark.6"} size="lg">
            {portfolioConfig.profile.intro}
          </Text>
          <Group>
            <Button
              className="accent-glow"
              component="a"
              href={portfolioConfig.profile.resumeUrl}
              target="_blank"
              leftSection={<IconFileCv size={16} />}
              color="orange"
            >
              View CV
            </Button>
            <Button
              variant="default"
              component="a"
              href="mailto:agarwalakash551999@gmail.com"
              leftSection={<IconMail size={16} />}
            >
              Contact Me
            </Button>
          </Group>
          <SimpleGrid cols={{ base: 1, sm: 3 }}>
            {portfolioConfig.metrics.map((metric) => (
              <Card key={metric.label} padding="lg" radius="md" withBorder>
                <Text size="xs" tt="uppercase" c="dimmed">
                  {metric.label}
                </Text>
                <Text fw={700}>{metric.value}</Text>
              </Card>
            ))}
          </SimpleGrid>
        </Stack>

        <Divider my="xl" />

        <Box id="experience" mb={42}>
          <Title order={2} mb="lg">
            Experience
          </Title>
          <Timeline active={portfolioConfig.experience.length} bulletSize={24} lineWidth={2}>
            {portfolioConfig.experience.map((item) => (
              <Timeline.Item
                key={`${item.company}-${item.role}`}
                title={
                  <Group gap="xs">
                    <Text fw={700}>{item.role}</Text>
                    <Text c="dimmed">{item.company}</Text>
                  </Group>
                }
              >
                <Text size="sm" c="dimmed" ff="var(--font-ibm-plex-mono)">
                  {item.start} - {item.end}
                </Text>
                <Stack gap={6} mt={8}>
                  {item.highlights.map((line) => (
                    <Text key={line} size="sm">
                      {line}
                    </Text>
                  ))}
                </Stack>
              </Timeline.Item>
            ))}
          </Timeline>
        </Box>

        <Divider my="xl" />

        <Box id="projects" mb={42}>
          <Group justify="space-between" align="end" mb="lg">
            <Title order={2}>Projects</Title>
            <SegmentedControl
              value={projectFilter}
              onChange={(value: string) => setProjectFilter(value as "All" | "Frontend" | "Full Stack" | "Desktop")}
              data={["All", "Frontend", "Full Stack", "Desktop"]}
              size="sm"
            />
          </Group>
          <Grid>
            {filteredProjects.map((project) => (
              <Grid.Col key={project.title} span={{ base: 12, md: 6 }}>
                <Card withBorder radius="md" padding="lg" h="100%">
                  <Group justify="space-between" mb="sm">
                    <Text fw={700}>{project.title}</Text>
                    <Badge variant="light">{project.category}</Badge>
                  </Group>
                  <Text size="sm" c="dimmed" mb="md">
                    {project.summary}
                  </Text>
                  <Group gap="xs" mb="md">
                    {project.tech.map((tech) => (
                      <Pill key={tech} size="sm">
                        {tech}
                      </Pill>
                    ))}
                  </Group>
                  <Group mt="auto">
                    {project.repo ? (
                      <Button
                        variant="default"
                        size="xs"
                        component="a"
                        href={project.repo}
                        target="_blank"
                        leftSection={<IconBrandGithub size={14} />}
                      >
                        Code
                      </Button>
                    ) : null}
                    {project.live ? (
                      <Button
                        size="xs"
                        component="a"
                        href={project.live}
                        target="_blank"
                        leftSection={<IconArrowUpRight size={14} />}
                        color="orange"
                      >
                        Live
                      </Button>
                    ) : null}
                  </Group>
                </Card>
              </Grid.Col>
            ))}
          </Grid>
        </Box>

        <Divider my="xl" />

        <Box id="skills" mb={42}>
          <Title order={2} mb="lg">
            Technical Stack
          </Title>
          <SimpleGrid cols={{ base: 1, sm: 2 }}>
            {portfolioConfig.skillGroups.map((group) => (
              <Card withBorder key={group.title} radius="md" p="lg">
                <Text fw={700} mb="sm">
                  {group.title}
                </Text>
                <Group gap="xs">
                  {group.items.map((item) => (
                    <Badge key={item} variant="dot" color="gray">
                      {item}
                    </Badge>
                  ))}
                </Group>
              </Card>
            ))}
          </SimpleGrid>
        </Box>

        <Divider my="xl" />

        <Box id="connect">
          <Title order={2} mb="sm">
            Let&apos;s Build Something Useful
          </Title>
          <Text c="dimmed" mb="md">
            Open to frontend-heavy product roles, consulting, and high-impact engineering collaborations.
          </Text>
          <Group>
            {portfolioConfig.socialLinks.map((link) => {
              const Icon = iconMap[link.label as keyof typeof iconMap] ?? IconCode;
              return (
                <Button
                  key={link.label}
                  component="a"
                  href={link.href}
                  target="_blank"
                  variant="light"
                  leftSection={<Icon size={16} />}
                  color="orange"
                >
                  {link.label}
                </Button>
              );
            })}
          </Group>
        </Box>
      </Paper>
    </Container>
  );
}
