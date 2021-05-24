import React from "react";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import '../../index.css'


class SaveBtn extends React.Component
{
    constructor(props)
    {
        super(props)
        this.state={saved: false }
    }
    toggle = () => {
        let localsaved = this.state.saved;
        localsaved = !localsaved;
        this.setState({ saved: localsaved });
      };
      render() {
        return (
         
              <div
                className="savedBtn"
                
                onClick={() => this.toggle()} >
                {this.state.saved === false ? (
                  <FontAwesomeIcon icon={faStar} />
                ) : (
                  <FontAwesomeIcon icon={faStar} style={{color: "gold" }}/>
                )}
              </div>
           
        );
      }
    }
      
    export default SaveBtn;
