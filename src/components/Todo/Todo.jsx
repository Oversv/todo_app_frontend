import React from 'react';
import S_Add_task from './S_Add_task';
import S_Status_bar from './S_Status_bar';
import S_Task from './S_Task';
import S_Filter_bar from './S_Filter_bar';

class Todo extends React.Component {
    render() {
        return ( 
            <main class="main">
                <div className="container sizeTodo">
                    <S_Add_task/>
                    <S_Status_bar/>

                    <S_Task text="Task 1" done={false}/>
                    <S_Task text="Task 2" done={false}/>
                    <S_Task text="Task 3" done={true}/>
                    <S_Task text="Task 4" done={false}/>
                    <S_Task text="Task 5" done={true}/>
                    <S_Task text="Task 6" done={false}/>
                    <S_Task text="Task 7" done={true}/>

                    <S_Filter_bar/>
                </div>
            </main>
        )
    }
}

export default Todo;