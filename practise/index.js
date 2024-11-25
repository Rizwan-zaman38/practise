// var Name = new Array(1,2,3,4,5)

// var Array1 = [1,2,3,4,5]

// console.log(Name)
// console.log(Array1)


// let x = "My name is Rizwan Sheikh";

// console.log(x.indexOf('m'))

// let Array = ["Zaman", "world"]

// console.log(x.replace("Sheikh", Array[0]))

// let person = {
//     first_name: 'Mukul',
//     last_name: 'Latiyan',
 
//     //method
//     getFunction: function () {
//         return (`The name of the person is 
//           ${person.first_name} ${person.last_name}`)
//     },
//     //object within object
//     phone_number: {
//         mobile: '12345',
//         landline: '6789'
//     }
// }
// console.log(person.first_name)
// console.log(person.last_name)
// console.log(person.getFunction())
// console.log(person.phone_number)
// console.log(person.phone_number.landline)
// console.log(person.phone_number.mobile)

// Using a constructor
// function person(first_name, last_name) {
//     this.first_name = first_name;
//     this.last_name = last_name;
// }
// // Creating new instances of person object
// let person1 = new person('Mukul', 'Latiyan');
// let person2 = new person('Rahul', 'Avasthi');
 
// console.log(person1.first_name);
// console.log(`${person2.first_name} ${person2.last_name}`);




// Defining class using es6
// class Vehicle {
//     constructor(name, maker, engine) {
//         this.name = name;
//         this.maker = maker;
//         this.engine = engine;
//     }
//     getDetails() {
//         return (`The name of the bike is ${this.name}.The maker of the bike is ${this.maker} and the engine of the bike is ${this.engine}.`)
//     }
// }
// // Making object with the help of the constructor
// let bike1 = new Vehicle('Hayabusa', 'Suzuki', '1340cc');
// let bike2 = new Vehicle('Ninja', 'Kawasaki', '998cc');
 
// console.log(bike1.getDetails())
// console.log(bike2.getDetails())
// console.log(bike1.name)

class Node {
    constructor(element){
        this.element = element;
        this.next = null;
    }
}

class LinkedList {
    constructor(){
        this.head = null;
        this.size = 0;
    }

    isEmpty(){
        return this.size===0;
    }

    getSize(){
        return this.size;
    }


    print(){
        if(this.isEmpty()){
            console.log('The list is empty.')
        }
        else{
            let listValue = '';
            let curr = this.head;
            while(curr){
                listValue += `${curr.element} `
                curr = curr.next
            }
            console.log(listValue)
        }
    }

    add(element){
        var node = new Node(element);

        // var current;

        if(this.isEmpty()){      // if(this.isEmpty){}
            this.head = node;
        }
        else{
            node.next = this.head;
            this.head = node;

        // while(current.head){
        //     current = current.next;
        // }

        //   current.next = node;
        }
        this.size++;
    }


    insert(element, index){
        if(index<0 || index>this.size){
            return
        }
        if(index===0){
            this.add(element)
        }
        else{
            const node = new Node(element)
            let prev = this.head
            for(let i=0;i<index-1;i++){
                prev = prev.next
            }
            node.next = prev.next
            prev.next = node
            this.size++
        }
    }

    removeFrom(index){
        if(index<0 || index>this.size){
            return null
        }
        let removeNode
        if(index===0){
            removeNode = this.head
            this.head = this.head.next
        }
        else{
            let prev = this.head
            for(let i=0;i<index-1;i++){
                prev = prev.next
            }
            removeNode = prev.next
            prev.next = removeNode.next
        }
        this.size--
        return removeNode.element
    }

    removeValue(element){
        if(this.isEmpty()){
            return null
        }
        if(this.head.element === element){
            this.head = this.head.next
            this.size--
            return element
        }
        else{
            let prev = this.head
            while(prev.next && prev.next.element!= element){
                prev = prev.next
            }
            if(prev.next){
                const removeNode = prev.next
                prev.next = removeNode.next
                this.size--
                return element
            }
            return null
        }
    }

    append(element){
        const node = new Node(element) 
        if(this.isEmpty()){
            this.head = node;
        }
        else{
        let prev = this.head
        while(prev.next){
            prev = prev.next
        }
        prev.next = node;
        }
        this.size++
    }

    search(element){
        if(this.isEmpty()){
            return -1
        }
        let i = 0
        let curr = this.head
        while(curr){
            if(curr.element === element){
                return i
            }
            i++
            curr = curr.next
        }
        return -1
    }

    reverse(){
        let prev = null
        let curr = this.head
        while(curr){
            let next = curr.next
            curr.next = prev
            prev = curr
            curr = next
        }
        this.head = prev
    }

    
 
}

const list = new LinkedList();



console.log('List is Empty: ',list.isEmpty())
console.log('List size: ',list.getSize())


list.insert(10,0)
list.insert(20,1)
list.insert(30,2)
list.insert(40,3)
// list.removeValue(30)
list.add(22)
// list.removeValue(10)


console.log("Nodes are added: ")
list.print()
list.reverse()
console.log("The reverse linked list is: ")
list.print()
console.log("30 is present in index: ")
console.log(list.search(30))
console.log('List size: ',list.getSize())

// list.append(44)
// list.insert(30,1)

// list.insert(50,3)
// list.removeFrom(0)
// list.removeValue(30)

 






