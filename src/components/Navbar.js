import React from 'react';
import { ThemeContext } from '../context/ThemeContext';

//Context type can be used in class component but not in functional
class Navbar extends React.Component {
    static contextType =  ThemeContext;
    render() {
        console.log(this.context);
        //Destructing of Json Object;
        const { isDarkTheme, darkTheme, lightTheme} = this.context;
        const theme = isDarkTheme ? darkTheme : lightTheme;
        return (
            <nav style={{ background: theme.background, color: theme.text, height: '120px '}}>
            <h2 style={{ textAlign : 'center'}}>
            My test 
            </h2>
            <div className = 'ui three buttons'> </div>
            <button className = 'ui button'> Overview </button>
            <button className = 'ui button'> Contact </button>
            <button className = 'ui button'> Support </button>
            </nav>
        )
    }
}

export default Navbar