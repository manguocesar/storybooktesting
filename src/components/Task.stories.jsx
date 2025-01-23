import { fn } from "@storybook/test";


import Task from './Task';

export const ActionsData = {
    onArchiveTask: fn(),
    onPinTask: fn(),
    unPinTask: fn(),
};

export default {
    component: Task,
    title: 'Task',
    tags: ['autodocs'],
    //👇 Our exports that end in "Data" are not stories.
    excludeStories: /.*Data$/,
    args: {
        ...ActionsData,
    },
};

export const Default = {
    args: {
        task: {
            id: '1',
            title: 'Test Task',
            state: 'TASK_INBOX',
        },
    },
};

export const Pinned = {
    args: {
        task: {
            ...Default.args.task,
            title: 'Test Task (pinned)',
            state: 'TASK_PINNED',
        },
    },
};
export const UnPinned = {
    args: {
        task: {
            ...Default.args.task,
            title: 'Test Task (unpinned)',
            state: 'TASK_UNPINNED',
        },
    },
};

export const Archived = {
    args: {
        task: {
            ...Default.args.task,
            state: 'TASK_ARCHIVED',
        },
    },
};

export const Tested = {
    args: {
        task: {
            ...Default.args.task,
            title: 'Test Task (tested)',
            state: 'TASK_TESTED',
        },
    },
};