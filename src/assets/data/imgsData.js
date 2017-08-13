let imgsData = []

for(let i=1;i<101;i++){
    imgsData.push({
      id:i,
      src: require(`../imgs/hg${i}.jpeg`),
      title: '美美',
      extend:'hg'
    })
}
  export default imgsData