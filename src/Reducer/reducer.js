export const reducer = (state,action)=>{


switch (action.type) {
    case "SET MOIVES":

let filterNewmovies = action.payload.filter((currItem,index)=>currItem.new===true);

const getCategory = (data,property)=>{
    let newVal = data.map((currItem,index)=>{
        return currItem[property]
    })
    
    newVal = [... new Set(newVal)];

    return newVal
}



let filtercategory = getCategory(action.payload,"category")

        return{
            ...state,
            movies:action.payload,
            newmovies:filterNewmovies,
            moviescategory:filtercategory
        }    


    default:return state
}

}