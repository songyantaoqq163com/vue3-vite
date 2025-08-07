// 排序
export function compare(arr,property){
    let data=[]
    if(property){
       data= arr.sort((a,b)=>{
           var value1 = a[property];
            var value2 = b[property];
            return value1 - value2;
        }) 
    }else{
        data=arr.sort((a, b) => {
                return a - b
            }) 
    }
    return data  
}