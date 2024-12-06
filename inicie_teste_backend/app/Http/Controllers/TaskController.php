<?php

namespace App\Http\Controllers;
use App\Models\Task;
use Illuminate\Http\Request;


class TaskController extends Controller
{
    public function index()
    {
        return Task::all();
    }

      public function store(Request $request)
    {
        $validated = $request->validate([
            'title' => 'required|string|max:255',
        ]);

        $task = Task::create([
            'title' => $validated['title'],
            'status' => 'pendente',
        ]);

        return response()->json($task, 201);
    }

    public function update(Request $request, $id)
    {
        $task = Task::findOrFail($id);
        $task->update($request->only('status'));
        return $task;
    }

    public function destroy($id)
    {
        $task = Task::find($id);
    
        if (!$task) {
            return response()->json(['message' => 'Tarefa não encontrada'], 404);
        }
    
        $task->delete();
        return response()->json(['message' => 'Tarefa excluída com sucesso'], 200);
    }
    

    public function updateStatus($id)
    {
        $task = Task::findOrFail($id);
        $task->status = $task->status === 'pendente' ? 'concluída' : 'pendente';
        $task->save();

        return response()->json($task);
    }

}
