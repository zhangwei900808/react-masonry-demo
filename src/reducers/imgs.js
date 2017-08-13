const initState={
    imgs:[
        {
            id:1,
            src:require('../assets/imgs/mm1.jpeg'),
            text:'美美的照片'
        }
    ]
}

const imgs = (state=initState.imgs,action)=>{
    let index = action.index
    switch(action.type){
        case 'img':
            let data_img = [
                ...state,
                {
                    id:index,
                    src:require(`../assets/imgs/mm${index}.jpeg`),
                    text:`美美的照片${index}`
                }
            ]
            console.log('return imgs store:')
            console.log(data_img)
            return data_img
        case "test":
            let data_test = [{
                    id:index,
                    src:require(`../assets/imgs/mm${index}.jpeg`),
                    text:`美美的照片${index}`
                }]
            console.log('return imgs store:')
            console.log(data_test)
            return data_test
        default:
            return state
    }
}

export default imgs