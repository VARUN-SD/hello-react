import UserContext from "../utils/UserContext";
import UserClass from "./UserClass";
import {Component} from "react"

class About extends Component{
  constructor(props){
    super(props);
  }

  componentDidMount(){
  }

  render(){
    return (
    <div>
      <h1>About Us Page</h1>
      <UserContext.Consumer>
        {({loggedInUser})=> <h1 className="text-2xl font-bold">{loggedInUser}</h1>}
      </UserContext.Consumer>
      <UserClass name="Third" location="WGL" />
    </div>
  )
  }
}

export default About;
