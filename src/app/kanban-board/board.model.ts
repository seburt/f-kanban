export interface BoardModel {
  id?: string;
  title?: string;
  priority?: number;
  tasks?: TaskModel[];
}

export interface TaskModel {
  label?: ['green' | 'red'];
  description?: string;
}
