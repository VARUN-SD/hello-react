import React from "react";

class UserClass extends React.Component{
    constructor(props){
        super(props);
        this.state={
            UserInfo:{
                name:"KV",
                location:"Local",
            }
        }
    }

async componentDidMount(){
    const data=await fetch("https://api.github.com/users/VARUN-SD");
    const json=await data.json();
    console.log(json);
    this.setState({
        UserInfo:json
    });
    
  }
    render(){
        const {name,location,avatar_url}=this.state.UserInfo;
        return(
            <div className="user">
                <img className="rounded-full w-48 " src={avatar_url}></img>
                <h2>Name:{name}</h2>
                <h3>Phone:1234567890</h3>
                <h4>Location:{location}</h4>
            </div>
        )
    }
};

export default UserClass;