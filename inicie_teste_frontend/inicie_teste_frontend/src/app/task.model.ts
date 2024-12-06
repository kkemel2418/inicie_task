// task.model.ts

export interface Task {
  id?: number; // Pode ser opcional se for gerado no backend
  title: string;
  status: string; // Pode ser 'pendente' ou 'concluída'
}
