import React, { Component } from 'react'

export default class Greetings extends Component {
    render() {
    
        const date1 = new Date();
        const hour = date1.getHours()
        let timeofDay;
        
        if(hour<12){
            timeofDay = 'Good Morning'
        }else if(hour>=12 && hour <17){
        timeofDay='Good Afternoon'
        }
        else{
            timeofDay='Good Evening'
        }
        
        
    return (
        
        <div>
        <h1>very {timeofDay} to you, Sir/Madam</h1>
        </div>
        )
    }
    }

    

