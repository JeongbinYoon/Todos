import React, { useState } from "react";
import { useForm } from "react-hook-form";

interface IForm {
  toDo: string;
}

function ToDoList() {
  const { register, handleSubmit, setValue } = useForm<IForm>();
  const handleValid = (data: IForm) => {
    console.log("Add to do", data.toDo);
    setValue("toDo", "");
  };
  return (
    <div>
      <form onSubmit={handleSubmit(handleValid)}>
        <input
          {...register("toDo", { required: "Please write a To Do" })}
          type="Write a to do"
        />
        <button>Add</button>
      </form>
    </div>
  );
}

// interface IForm {
//   errors: {
//     email: {
//       message: string;
//     };
//   };
//   email: string;
//   firstName: string;
//   lastName: string;
//   password: string;
//   password1: string;
// }

// function ToDoList() {
//   const {
//     register,
//     handleSubmit,
//     formState: { errors },
//     setError,
//   } = useForm<IForm>({
//     defaultValues: {
//       email: "@naver.com",
//     },
//   });
//   const onValid = (data: IForm) => {
//     if (data.password !== data.password1) {
//       setError(
//         "password1",
//         { message: "Password are not the same" },
//         { shouldFocus: true }
//       );
//     }
//   };
//   console.log(errors);
//   return (
//     <div>
//       <form
//         style={{ display: "flex", flexDirection: "column" }}
//         onSubmit={handleSubmit(onValid)}
//       >
//         <input
//           {...register("email", {
//             required: "Email required",
//             pattern: {
//               value: /^[A-Za-z0-9._%+-]+@naver.com$/,
//               message: "Only naver.com emails allowed.",
//             },
//           })}
//           type="Email"
//         />
//         <span>{errors.email?.message}</span>

//         <input
//           {...register("firstName", {
//             required: true,
//             validate: {
//               nonico: (value) =>
//                 value.includes("nico") ? "No nicos allowed" : true,
//               nonick: (value) =>
//                 value.includes("nick") ? "No nick allowed" : true,
//             },
//           })}
//           type="First Name"
//         />
//         <span>{errors.firstName?.message}</span>

//         <input {...register("lastName", { required: true })} type="Last Name" />
//         <span>{errors.lastName?.message}</span>

//         <input
//           {...register("password", { required: true, minLength: 5 })}
//           type="Password"
//         />
//         <span>{errors.password?.message}</span>

//         <input
//           {...register("password1", {
//             required: "Password is required",
//             minLength: {
//               value: 5,
//               message: "Your password is too short",
//             },
//           })}
//           type="Password1"
//         />
//         <span>{errors.password1?.message}</span>

//         <button>Add</button>
//       </form>
//     </div>
//   );
// }

export default ToDoList;
