import React from 'react';
import { ThemeContext } from '../context/ThemeContext';
class TodoList extends React.Component{
    static contextType =  ThemeContext;
    render(){
        const { isDarkTheme, darkTheme, lightTheme} = this.context;

        const theme = isDarkTheme ? darkTheme : lightTheme;
        return(
            <div style={{ background: theme.background, color: theme.text, height: '140px '}} >
                <p className='iten'>Trip</p>
                <p className='iten'>Study</p>
                <p className='iten'>Pray</p>
            </div>
        );
    }
}

export default TodoList
