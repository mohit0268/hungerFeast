import React from 'react'



class User extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            userInfo:{
                name:'unknown',
                location :' unidentify'
            }
        }
    }
    
    async componentDidMount(){
        const data = await fetch("https://api.github.com/users/mohit0268");
        const json = await data.json();
        
        this.setState({
            userInfo:json,
        })
        console.log(json)
    }
    

    render(){

        const {name,location,avatar_url}=this.state.userInfo;

        return(
            <div className='about-section'>
                <div className="user-card">
                <div className="user-img">
                <img src={avatar_url} alt="" />
                </div>
                <div className="user-details">
                <h2>{name}</h2>
                <h3>{location}</h3>
                </div>
            </div>

            </div>
        )
    }
}

export default User;