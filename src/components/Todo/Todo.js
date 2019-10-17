import React from 'react';
import SubAddTask from './SubAddTask';
import SubStatusBar from './SubStatusBar';
import SubTask from './SubTask';
import SubFilterBar from './SubFilterBar';

class Todo extends React.Component {
    render() {
        return ( 
            <main class="main">
                <div className="container sizeTodo">
                    <SubAddTask/>
                    <SubStatusBar/>

                    <SubTask text="Task 1" done={false}/>
                    <SubTask text="Task 2" done={false}/>
                    <SubTask text="Task 3" done={true}/>
                    <SubTask text="Task 4" done={false}/>
                    <SubTask text="Task 5" done={true}/>
                    <SubTask text="Task 6" done={false}/>
                    <SubTask text="Task 7" done={true}/>
                    <SubTask text="Task 8" done={false}/>

                    <SubFilterBar/>
                </div>
            </main>
        )
    }
}

export default Todo;