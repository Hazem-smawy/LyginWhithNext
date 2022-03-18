import {data} from '../../../data'

export default function handler({query:{id}},res){
    
    const filtered = data.filter(article => article.id == id)
    console.log(filtered)
    if(filtered.length > 0){
        res.status(200).json(filtered[0])
    }else {
        res.status(404).json({Message:`article with the id ${id} not fount`})
    }
}

