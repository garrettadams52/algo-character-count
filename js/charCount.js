exports.charCount = function(str) { 
    let map = new Map()

    str = str.replace(/\s+/g, '').split('')
    ans = []

    //build map
    for(let i = 0; i<str.length; i++){
        if(!map.has(str[i]))
            map.set(str[i], 1)
        else   
            map.set(str[i], map.get(str[i])+1)
    }

    //sort map by value
    let sortedMap = new Map([...map.entries()].sort((a,b)=>b[1] - a[1]))

    //sort map by key
    sortedMap = new Map([...sortedMap.entries()].sort(function(a,b){
       
        if(!(b[1]===a[1])){
            return 0
        }
        else{
            if(b[0]>a[0]){
                return -1
            }
            else{
                return 1
            }
        }
            
    }))




    //turn map into list of lists
    for(let[key,value] of sortedMap){
        ans.push([key,value])
    }


   return ans
};


