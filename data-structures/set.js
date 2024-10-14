class CustomSet {
    constructor(){
         this.items={}
    }

    add(value) {
         if(!this.has(value)) {
             this.items[value] = value
             return true 
         }

         return false 
    }

    remove(value) {
        if(this.has(value)) {
            delete this.items[value] 
            return true
        }
        return false
    }

    size() {
       return Object.keys(this.items).length 
    }

    has(value) {
         return this.items.hasOwnProperty(value)
    }

    clear() {
      this.items={}
    }

    values() {
       return Object.keys(this.items)   
    }
}

const set = new CustomSet()

set.add(1)
set.add(2)
set.add(2)
set.add(3)


console.log(set.values())