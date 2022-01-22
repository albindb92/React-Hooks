import React from 'react';
import { ThemeContext } from '../context/ThemeContext';

//Context type can be used in class component but not in functional
//Context consumer can be used in both class and functional
class Navbar extends React.Component {
  
    render() {

        return (
            <ThemeContext.Consumer>{(context) => {
                const { isDarkTheme, darkTheme, lightTheme} = context;
                const theme = isDarkTheme ? darkTheme : lightTheme;
               return(
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
            }}
            </ThemeContext.Consumer>

        )
    }
}

export default Navbar