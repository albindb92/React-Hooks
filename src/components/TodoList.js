import React from 'react';

class TodoList extends React.Component{
    render(){
        return(
            <div className='ui list'>
                <p className='iten'>Trip</p>
                <p className='iten'>Study</p>
                <p className='iten'>Pray</p>
            </div>
        );
    }
}

export default TodoList
