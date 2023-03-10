import React from 'react';

type TodolistPropsType = {
    title: string
    tasks: Array<TasksType>
}

type TasksType = {
    id: number
    title: string
    isDone: boolean
}

export const Todolist = (props: TodolistPropsType) => {
    return (
        <div>
            <h3>{props.title}</h3>
            <div>
                <input/>
                <button>+</button>
            </div>
            <ul>
                {props.tasks.map((t)=>{
                        return (
                            <li key={t.id}><input type="checkbox" checked={t.isDone}/> <span>{t.title}</span></li>
                        )
                    })}
            </ul>
            <div>
                <button>All</button>
                <button>Active</button>
                <button>Completed</button>
            </div>
        </div>
    );
};