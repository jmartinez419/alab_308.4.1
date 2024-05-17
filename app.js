//taking the information that was given and putting said information into a string named "cell"
let cell = "ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor’s Assistant,26"

// made an array labeled "parentArray" and utilized .split on "cell" to target each \n and put all the information without said \n into an array
let parentArray = cell.split('\n')

//created a function labeled "Myarray" to house my for loop that would create new arrays for each row of information that was provided 
function Myarray(){

    //created new empty arrays that can be sorted into by the upcoming for loop
    let new_array = []

    //for loop that goes over the "parentArray" which ultimately contains the cell that is being split by the characters \n
    for (let i = 0; i <= parentArray.length-1; i++){

        //taking each index (letter) and adding it to a new array, which creates a new array for each row of information
        new_array.push(parentArray[i].split(','))

    }
    //takes the new arrays and shows it to the global scopes
    return new_array  
   
}
//making a var for the above function
let myarr = Myarray()

//making a function to use for loops 
function sortArrayIntoObj(myarr) {
    //making a var for what the kays are going to be
    const keys = myarr[0]
    //making empty objects that are going to be pushed into
    let obj = {};
    //making a new empty array that will hold the objects for each row
    let rArr=[]
    //making a for loop that will sort through the parent array
    for(let i = 1; i <= myarr.length-1; i++){
        //creating a var that the second for loop will go through
        let subArr = myarr[i]
      //a for loop that will go through each array inside of the parent array
      for(let j=0; j <= subArr.length-1; j++){
        
        //creating a var for the keys to be used
        const key = keys[j]
        //creating a var for the value of what both of the for loops create
        const value = myarr[i][j]
        //defining what the keys are for the objects that are going to be created and pushed into
        obj[key] = value

        }
        // pushing above information that is being looped through into an obj  
        rArr.push(obj)
    
        //creating empty objects to be pushing into
        obj = {};

        
    }
    //returning the value to the global scope 
    return rArr

} 


//delcaring a var for the function made above
let New_array = sortArrayIntoObj(myarr)

//using .splice() to make modifications to the objects housed inside of the parent array
New_array.splice(1,0, { id: "48", name: "Barry", occupation: "Runner", age: "25" })
New_array.splice(4,4, { id: "7", name: "Bilbo", occupation: "None", age: "111" })

//showing the var "New_Array" on the console
console.log(New_array)
