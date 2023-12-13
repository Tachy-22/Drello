export const InitialBoardsData = {
  boards: {
    "demo-1": {
      id: "demo-1",
      title: "demo1",
      columnIds: ["column-1", "column-2", "column-3"],
    },
    "demo-2": {
      id: "demo-2",
      title: "demo2",
      columnIds: ["column-4", "column-5", "column-6"],
    },
  },
  boardOrder: ["demo-1", "demo-2"],
};

const initialData = {
  tasks: {
    "task-1": { id: "task-1", content: "Take out the garbage" },
    "task-2": { id: "task-2", content: "Watch my favorite show" },
    "task-3": { id: "task-3", content: "Charge my phone" },
    "task-4": { id: "task-4", content: "Cook dinner" },
  },
  columns: {
    "column-1": {
      id: "column-1",
      title: "To do",
      taskIds: ["task-1", "task-2", "task-3", "task-4"],
    },
    "column-2": {
      id: "column-2",
      title: "In progress",
      taskIds: [],
    },
    "column-3": {
      id: "column-3",
      title: "Done",
      taskIds: [],
    },
    "column-4": {
      id: "column-4",
      title: "To do",
      taskIds: ["task-1", "task-4"],
    },
    "column-5": {
      id: "column-5",
      title: "In progress",
      taskIds: ["task-2", "task-3"],
    },
    "column-6": {
      id: "column-6",
      title: "Done",
      taskIds: [],
    },
  },

  // Facilitate reordering of the columns
  columnOrder: ["column-1", "column-2", "column-3",],
};

export default initialData;
