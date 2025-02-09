import { Select } from '@felipegangrel/core-ui';
import type { Meta, StoryObj } from '@storybook/react';

/**
 * Displays a list of options for the user to pick from—triggered by a button.
 */
const meta: Meta<typeof Select> = {
  title: 'core-ui/Select',
  component: Select,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
};

export default meta;

type Story = StoryObj<typeof Select>;

export const Example: Story = {
  args: {
    children: (
      <>
        <Select.Trigger className="w-screen max-w-[240px]">
          <Select.Value placeholder="Theme" />
        </Select.Trigger>
        <Select.Content>
          <Select.Item value="light">Light</Select.Item>
          <Select.Item value="dark">Dark</Select.Item>
          <Select.Item value="system">System</Select.Item>
        </Select.Content>
      </>
    ),
  },
};

export const Scrollable: Story = {
  args: {
    children: (
      <>
        <Select.Trigger className="w-screen max-w-[240px]">
          <Select.Value placeholder="Select a timezone" />
        </Select.Trigger>
        <Select.Content>
          <Select.Group>
            <Select.Label>North America</Select.Label>
            <Select.Item value="est">Eastern Standard Time (EST)</Select.Item>
            <Select.Item value="cst">Central Standard Time (CST)</Select.Item>
            <Select.Item value="mst">Mountain Standard Time (MST)</Select.Item>
            <Select.Item value="pst">Pacific Standard Time (PST)</Select.Item>
            <Select.Item value="akst">Alaska Standard Time (AKST)</Select.Item>
            <Select.Item value="hst">Hawaii Standard Time (HST)</Select.Item>
          </Select.Group>
          <Select.Group>
            <Select.Label>Europe & Africa</Select.Label>
            <Select.Item value="gmt">Greenwich Mean Time (GMT)</Select.Item>
            <Select.Item value="cet">Central European Time (CET)</Select.Item>
            <Select.Item value="eet">Eastern European Time (EET)</Select.Item>
            <Select.Item value="west">
              Western European Summer Time (WEST)
            </Select.Item>
            <Select.Item value="cat">Central Africa Time (CAT)</Select.Item>
            <Select.Item value="eat">East Africa Time (EAT)</Select.Item>
          </Select.Group>
          <Select.Group>
            <Select.Label>Asia</Select.Label>
            <Select.Item value="msk">Moscow Time (MSK)</Select.Item>
            <Select.Item value="ist">India Standard Time (IST)</Select.Item>
            <Select.Item value="cst_china">
              China Standard Time (CST)
            </Select.Item>
            <Select.Item value="jst">Japan Standard Time (JST)</Select.Item>
            <Select.Item value="kst">Korea Standard Time (KST)</Select.Item>
            <Select.Item value="ist_indonesia">
              Indonesia Central Standard Time (WITA)
            </Select.Item>
          </Select.Group>
          <Select.Group>
            <Select.Label>Australia & Pacific</Select.Label>
            <Select.Item value="awst">
              Australian Western Standard Time (AWST)
            </Select.Item>
            <Select.Item value="acst">
              Australian Central Standard Time (ACST)
            </Select.Item>
            <Select.Item value="aest">
              Australian Eastern Standard Time (AEST)
            </Select.Item>
            <Select.Item value="nzst">
              New Zealand Standard Time (NZST)
            </Select.Item>
            <Select.Item value="fjt">Fiji Time (FJT)</Select.Item>
          </Select.Group>
          <Select.Group>
            <Select.Label>South America</Select.Label>
            <Select.Item value="art">Argentina Time (ART)</Select.Item>
            <Select.Item value="bot">Bolivia Time (BOT)</Select.Item>
            <Select.Item value="brt">Brasilia Time (BRT)</Select.Item>
            <Select.Item value="clt">Chile Standard Time (CLT)</Select.Item>
          </Select.Group>
        </Select.Content>
      </>
    ),
  },
};
