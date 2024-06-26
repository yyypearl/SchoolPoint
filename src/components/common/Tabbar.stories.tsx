import React from "react";
import { Meta, StoryFn } from "@storybook/react";
import Tabbar from "@/components/common/Tabbar";

export default {
  component: Tabbar,
  title: "Components/Tabbar",
  parameters: {
    nextjs: {
      appDirectory: true,
    },
  },
  decorators: [
    (Story: StoryFn) => (
      <div style={{ padding: "20px" }}>
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof Tabbar>;

export const Default = () => <Tabbar />;
