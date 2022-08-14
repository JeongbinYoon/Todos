import React, { useState } from "react";
import { useForm } from "react-hook-form";

// function ToDoList() {
//   const [todo, setTodo] = useState("");
//   const onChange = (e: React.FormEvent<HTMLInputElement>) => {
//     const {
//       currentTarget: { value },
//     } = e;
//     setTodo(value);
//   };

//   const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
//     e.preventDefault();
//     console.log(todo);
//   };
//   return (
//     <div>
//       <form onSubmit={onSubmit}>
//         <input onChange={onChange} value={todo} type="Write a to do" />
//         <button>Add</button>
//       </form>
//     </div>
//   );
// }

function ToDoList() {
  const { register, handleSubmit, formState } = useForm();
  const onValid = (data: any) => {
    console.log(data);
  };
  console.log(formState.errors);
  return (
    <div>
      <form
        style={{ display: "flex", flexDirection: "column" }}
        onSubmit={handleSubmit(onValid)}
      >
        <input {...register("email", { required: true })} type="Email" />
        <input
          {...register("firstName", { required: true })}
          type="First Name"
        />
        <input {...register("lastName", { required: true })} type="Last Name" />
        <input
          {...register("userName", { required: true, minLength: 10 })}
          type="User name"
        />
        <input
          {...register("password", { required: true, minLength: 5 })}
          type="Password"
        />
        <input
          {...register("password1", {
            required: "Password is required",
            minLength: {
              value: 5,
              message: "Your password is too short",
            },
          })}
          type="Password1"
        />
        <button>Add</button>
      </form>
    </div>
  );
}

export default ToDoList;
