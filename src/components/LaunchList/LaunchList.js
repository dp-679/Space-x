import React from 'react';
import Launch from '../Launch/Launch';
import './style.css';
import axios from 'axios';



export class LaunchList extends React.Component{

    state = {
        launches:[]
    }

    componentDidMount = () => {
        this.getLaunches()
    }

    getLaunches = () => {
        axios.get('https://api.spacexdata.com/v3/launches').then((response)=>{
            this.setState(
                { launches: response.data }
            )
        }).catch((error)=>{
            console.log(error)
        })
    }

    launchList = () => {
        const launchListComponents = this.state.launches.map((launch,index)=>{
            const image= launch.links.flickr_images.length === 0 ?
            'https://i.insider.com/608d79c734af8d001859a6db?width=700' : launch.links.flickr_images[0]

            return <Launch 
                key={"launch_"+index}
                banner={image}
                title={launch.mission_name}
                launchData={launch.launch_date_local}
                description={launch.details }/> 

        })
        return launchListComponents;
    }

    render(){

        return(
            <div className="launch-list">
               {this.launchList()}
            </div>
        )
    }
}


export default LaunchList;