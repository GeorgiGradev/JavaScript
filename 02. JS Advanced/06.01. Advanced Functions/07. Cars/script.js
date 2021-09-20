function solve(arr){
    let objects = {}
    for (let line of arr){
        [command, name, ...other] = line.split(' ')
        if (command == 'set'){
            set(name, other[0], other[1])
        }else if(command == 'print'){
            print(name)
        }
        else if (command == 'create' && other.length == 0){
            create(name)
        }else{
            inherit(name, other[1])
        }
    }
    function create(createName){
        objects[createName] = {arr:[]}
    }
    function inherit(createName, inheritName){
        create(createName)
        objects[createName]['inherit'] = inheritName
    }
    function set(setName, k, v){
        for (let key of Object.keys(objects)){
            if (key == setName){
                objects[setName]['arr'].push(`${k}:${v}`)
            }
        }
    }
    function print(printName){
        let printArr = []
        for ([k,v] of Object.entries(objects[printName])){
            if (k != 'inherit'){
                printArr.push(v)
            }
        }
        let inheritedArr = recursiveSearch(printName)
        if (printArr[0]==false){
            console.log(inheritedArr.join(', '))
        }else{
            if (inheritedArr.length > 0){
                printArr.push([...inheritedArr])
            }
            console.log(printArr.join(', '))
        }
    }
 
    function recursiveSearch(name, resultArr=[]){
        if ('inherit' in objects[name]){
            let newName = objects[name]['inherit']
            resultArr.push([...objects[newName]['arr']])
            return recursiveSearch(newName, resultArr)
        }else{
            return resultArr
        }
    }
}