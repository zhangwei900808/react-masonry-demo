import React from 'react'

class ImgList extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return (
            <div>
                {this.props.imgs.map(img=>{
                    if(img.id==3){
                        return (
                            <img key={img.id} src={img.src} onClick={
                                    e=>{
                                        e.preventDefault()
                                        this.props.onTestClick()
                                    }
                                } alt=""/>
                        )
                    }else{
                        return (
                                <img key={img.id} src={img.src} onClick={
                                        e=>{
                                            e.preventDefault()
                                            this.props.onImgClick()
                                        }
                                    } alt=""/>
                            )
                    }
                })}
            </div>
        )
    }
}

export default ImgList