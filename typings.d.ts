interface Cardinterface {
  text: string;
  id: string;
}

interface BoardTabProps {
  tasks: Task[];
  column: Column;
  index: number;
}
interface Column {
  id: string;
  title: string;
  taskIds: string[];
}
interface Board {
  id: string;
  title: string;
  boardIds: string[];
}

interface Task {
  id: string;
  content: string;
}

interface InitialData {
  tasks: { [taskId: string]: Task };
  columns: { [columnId: string]: Column };
  columnOrder: string[];
}

interface InitialBoardsData {
  boards: { [boardId: string]: Board };
  boardOrder: string[];
}
