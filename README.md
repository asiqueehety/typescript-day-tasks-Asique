# 🧩 TypeScript Practice Tasks — Day 1

This project demonstrates fundamental **TypeScript concepts** through a series of beginner-friendly coding exercises. Each task focuses on a specific language feature used to make JavaScript development safer and more structured.

---

## 📘 Overview

The code explores several TypeScript features including interfaces, union types, generics, utility types, enums, and async functions. The goal is to build a strong understanding of how TypeScript handles type safety, structure, and flexibility in real-world applications.

---

## 🧱 Tasks Summary

### 1. Basic Type & Interface Practice

An interface named `User` is defined to represent a user’s data structure. It includes required fields like name and email, and optional ones like phone number and active status. This helps enforce consistent data handling throughout the program.

---

### 2. Union & Type Narrowing

A function is created that accepts either a number or a string as input. It uses type narrowing (`typeof` checks) to safely determine the data type at runtime before performing operations, ensuring the program avoids type-related errors.

---

### 3. Array & Object Typing

A list of products is defined with strict typing for each property (name, price, and stock availability). This ensures that only valid product data can be stored in the array, enhancing reliability and reducing runtime bugs.

---

### 4. Function with Generics

A generic function is introduced to retrieve the first item from any given array, regardless of the element type. Generics make the function reusable and type-safe across different data structures.

---

### 5. Readonly & Partial Utility Types

Utility types are used to demonstrate two common real-world use cases:

* **Readonly:** Preventing modification of object properties after creation.
* **Partial:** Allowing partial updates to objects (like in update forms) without needing all fields.

---

### 6. Type Assertion & Casting

A function is implemented to safely convert unknown data types to strings. Type checking ensures that conversion only happens when valid, helping maintain strong type safety in mixed-type environments.

---

### 7. Enum & Literal Type

An enumeration is defined to represent user roles such as Admin or User. This restricts possible role values to predefined options, reducing logical errors and improving code readability.

---

### 8. Function Return Type Practice

An asynchronous function simulates fetching user data and returns it as a Promise containing a typed array of `User` objects. This task reinforces understanding of async/await syntax with proper return type annotations.

---

## 🧠 Key Concepts Practiced

* Interface creation and optional typing
* Union types and type guards
* Array and object typing
* Generic functions for reusability
* Utility types (`Readonly`, `Partial`)
* Type casting and assertions
* Enumerations and literal constraints
* Async/Await with typed Promises

---

## ⚙️ Purpose

The goal of this practice is to get comfortable with **TypeScript’s static typing system** and understand how it enhances code reliability, readability, and scalability in both small and large projects.

---

## 👨‍💻 Author

**Asique Ehetasamul Haque**
TypeScript Practice — *Day 1: Core TypeScript Concepts*
📧 [haque2107096@stud.kuet.ac.bd](mailto:haque2107096@stud.kuet.ac.bd)
