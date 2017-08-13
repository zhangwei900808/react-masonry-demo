import React from 'react'

import CdPlayer from 'react-cd-player'
import Grid from 'material-ui/Grid';

export default class Player extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        const musicList =[{
            "id": 1,
            "title": "追光者",
            "artist": "岑宁儿",
            "cover": 'http://cdn.awbeci.com/images/awbeci-xyz/blog/01.jpg',
            "mp3": 'http://cdn.awbeci.com/music/react-cd-player/01.mp3'
            }, {
            "id": 2,
            "title": "被风吹过的夏天",
            "artist": "林俊杰-金纱",
            "cover": 'http://cdn.awbeci.com/images/awbeci-xyz/blog/02.jpg',
            "mp3": 'http://cdn.awbeci.com/music/react-cd-player/02.mp3'
            }, {
            "id": 3,
            "title": "小酒窝",
            "artist": "林俊杰-阿sa",
            "cover": 'http://cdn.awbeci.com/images/awbeci-xyz/blog/03.jpg',
            "mp3": 'http://cdn.awbeci.com/music/react-cd-player/03.mp3'
            }]
        return(
            <div>
                <Grid container spacing={0} align="center" justify="center">
                    <Grid item xs >
                        <CdPlayer musicList={musicList}></CdPlayer>
                    </Grid>
                </Grid>
            </div>            
        )
    }
}