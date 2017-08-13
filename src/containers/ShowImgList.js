import {connect} from 'react-redux'
import ImgList from '../components/ImgList'

let nextIndex = 2

const mapStateToProps = state=>{
    return{
        imgs:state.imgs
    }
}

const mapDispatchToProps = dispatch =>{
    return {
        onImgClick:()=>{
            dispatch({
            type:"img",
            index:nextIndex++
        })
        },
        onTestClick:()=>{
            dispatch({
            type:"test",
            index:nextIndex++
        })
        }
    }
}

let ShowImgList  = connect(
    mapStateToProps,
    mapDispatchToProps
)(ImgList)

export default ShowImgList