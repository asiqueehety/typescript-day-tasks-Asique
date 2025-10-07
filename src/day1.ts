// *Day:1 TypeScript Task*

// Basic Type & Interface Practice
// Goal: define User interface with optional fields
// Note: use name, email, phone?, active?

interface User{
    name: string,
    email: string,
    phone? : string,
    active? : boolean
};

// Union & Type Narrowing
// Goal: handle number | string input safely
// Note: check type before using (typeof guard)

var phoneNo: number|string;
function checkType(phoneNo: number|string)
{
    if(typeof(phoneNo) == 'number' || typeof(phoneNo) == 'string')
    {
        if(typeof(phoneNo)==='number'){console.log(`It's a number`)}
        if(typeof(phoneNo)==='string'){console.log(`It's a string`)}
    }
    else{
        console.log(`unknown type`);
    }
}

// Array & Object Typing
// Goal: type a list of products
// Note: Product[] with name, price, inStock

interface Product{
    name: string,
    price: number,
    inStock: boolean
}

var products:Product[];

// Function with Generics
// Goal: create getFirstItem<T>(arr: T[]): T | null
// Note: return first element or null

function getFirstItem<T>(arr: T[]):T|null{
    if(arr.length===0){return null;}
    else{
        return arr[0];
    }
}

// Readonly & Partial Utility
// Goal: use Readonly and Partial with interfaces
// Note: Partial<User> for update form

//using User interface from earlier
const readonlyUser: Readonly<User> = {
  name: "Asique",
  email: "haque2107096@stud.kuet.ac.bd",
  phone: "01896121096",
  active: true
};

const updateUser: Partial<User> = {  
  email: "asique228@gmail.com"
};

// Type Assertion & Casting
// Goal: safely cast unknown to string
// Note: use as string only after checking

function safeCastToString(value: unknown): string{
    if (typeof(value) === "string")
    {
        return value as string;
    }
    else{
        return ((value as unknown)as string);
    }
}

// Enum & Literal Type
// Goal: define enum Role { Admin, User }
// Note: restrict variable type: let role: Role = Role.Admin

enum Role{
    Admin,
    User
}

let role:Role = Role.Admin;

// Function Return Type Practice
// Goal: type function that returns Promise<User[]>
// Note: practice async/await + return type annotation

function fetchUsers(): Promise<User[]>
{
  return new Promise((resolve)=>
    {
    setTimeout(()=>
        {
        const users: User[] = 
        [
            { name: "A", email: "a@mail.com", active: true },
            { name: "B", email: "b@mail.com" },
            { name: "C", email: "c@mail.com", phone: "01234567890" }
        ];
        resolve(users);
        }, 1500);
    });
}

async function main():Promise<User[]>{
    return await fetchUsers();
}
