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

interface IForm {
  errors: {
    email: {
      message: string;
    };
  };
  email: string;
  firstName: string;
  lastName: string;
  password: string;
  password1: string;
}

function ToDoList() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IForm>({
    defaultValues: {
      email: "@naver.com",
    },
  });
  const onValid = (data: any) => {
    console.log(data);
  };
  console.log(errors);
  return (
    <div>
      <form
        style={{ display: "flex", flexDirection: "column" }}
        onSubmit={handleSubmit(onValid)}
      >
        <input
          {...register("email", {
            required: "Email required",
            pattern: {
              value: /^[A-Za-z0-9._%+-]+@naver.com$/,
              message: "Only naver.com emails allowed.",
            },
          })}
          type="Email"
        />
        <span>{errors.email?.message}</span>

        <input
          {...register("firstName", { required: true })}
          type="First Name"
        />
        <span>{errors.firstName?.message}</span>

        <input {...register("lastName", { required: true })} type="Last Name" />
        <span>{errors.lastName?.message}</span>

        <input
          {...register("password", { required: true, minLength: 5 })}
          type="Password"
        />
        <span>{errors.password?.message}</span>

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
        <span>{errors.password1?.message}</span>

        <button>Add</button>
      </form>
    </div>
  );
}

export default ToDoList;
