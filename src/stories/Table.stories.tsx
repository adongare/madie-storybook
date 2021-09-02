import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Table } from '../components/Table/Table';
import { TableProps } from '../components/Table/TableProps';

export default {
  title: "UI/Table",
  component: Table,
  argTypes: {
    rows: { control: '' },
    headers: { control: '' },
    borderWidth: {
      control: {type: 'select'},
    }
  },
} as ComponentMeta<typeof Table>;

const Template: ComponentStory<typeof Table> = (args: TableProps) => <Table {...args} />; 
export const Default = Template.bind({});

Default.args = {
  rows: [
    ['This', 'is', 'just', 'a', 'test'],
    ['This', 'is', 'also', 'a', 'test'],
    ['Just', 'is', 'another', 'test', 'data'],
    ['Row', 'number', 'four', 'right', 'here'],
  ],
  headers: ['Col 1', 'Col 2', 'Col 3', 'Col 4', 'Col 5'],
  borderWidth: 'thin'
};