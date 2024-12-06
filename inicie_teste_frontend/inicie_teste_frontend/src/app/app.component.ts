import { Component, OnInit } from '@angular/core';
import { TaskService } from './services/task.service';
import { Task } from './task.model';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http'; // Importação do HttpClient


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'inicie_teste_frontend';
  tasks: Task[] = [];
  newTaskTitle: string = '';

  constructor(private taskService: TaskService) {}

  ngOnInit(): void {
    this.loadTasks();
  }

  loadTasks(): void {
    this.taskService.getTasks().subscribe((data: Task[]) => {
      console.log(data);
      this.tasks = data;
    });
  }

  addTask(title: string): void {
    if (!title.trim()) {
      alert('Por favor, insira o título da tarefa!');
      return;
    }
    const newTask: Task = {
      title: title.trim(),
      status: 'pendente', // O status inicial é 'pendente'
    };
    this.taskService.addTask(newTask).subscribe((task: Task) => {
      this.tasks.push(task); // Adiciona a nova tarefa à lista de tarefas
      this.newTaskTitle = ''; 
    });
  }

  
  updateTaskStatus(id: number, currentStatus: string): void {
    const updatedStatus = currentStatus === 'pendente' ? 'concluído' : 'pendente';
    this.taskService.updateTask(id, { status: updatedStatus }).subscribe((updatedTask: Task) => {
      const taskIndex = this.tasks.findIndex((task) => task.id === id);
      if (taskIndex !== -1) {
        this.tasks[taskIndex].status = updatedTask.status; // Atualiza o status localmente
      }
    });
  }
  
  
  deleteTask(id: number | undefined): void {
    if (id === undefined) {
      alert('ID inválido. Não é possível excluir a tarefa.');
      return;
    }
    console.log('Excluir tarefa com ID:', id);  // Verifique se o ID está correto
    this.taskService.deleteTask(id).subscribe(
      (response) => {
        this.tasks = this.tasks.filter(task => task.id !== id);
        alert('Tarefa excluída com sucesso');
      },
      (error) => {
        alert('Erro ao excluir a tarefa');
      }
    );
  }
  
  
  


}
