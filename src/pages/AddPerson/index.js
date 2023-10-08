import { setProducts } from "@/Libraries/redux/Slices/Products/ProductReducer";
import { useRouter } from "next/router";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { v4 as uuidv4 } from "uuid";

const AddPerson = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products.products);
  const { push } = useRouter();
  const onSubmitHandler = (e) => {
    e.preventDefault();
    const newProduct = {
      id: uuidv4(),
      first_name: e.target.firstName.value,
      last_name: e.target.lastName.value,
      email:e.target.email.value,
      avatar: e.target.avatar.value,
    };
    dispatch(setProducts([...products,newProduct]));
    toast.success("Youre Submitted Successfully");
    setTimeout(() => {
      push("/");
    }, 2000);
  };

  return (
    <form className="d-flex flex-column gap-4 px-4" onSubmit={onSubmitHandler}>
      <div className="form-group">
        <label for="exampleInputEmail1">Email address</label>
        <input
          type="email"
          name="email"
          className="form-control my-2"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
          placeholder="Enter email"
        />
      </div>
      <div className="form-group">
        <label for="exampleInputPassword1">First Name</label>
        <input
          type="text"
          name="firstName"
          className="form-control my-2"
          id="exampleInputPassword1"
          placeholder="First Name"
        />
      </div>
      <div className="form-group">
        <label for="exampleInputPassword1">Last Name</label>
        <input
          type="text"
          name="lastName"
          className="form-control my-2"
          id="exampleInputPassword1"
          placeholder="Last Name"
        />
      </div>
      <div className="form-group">
        <label for="exampleInputPassword1">Your Avatar Url</label>
        <input
          type="text"
          name="avatar"
          className="form-control my-2"
          id="exampleInputPassword1"
          placeholder="Avatar Link"
        />
      </div>
      <button type="submit" className="btn btn-primary w-25">
        Submit
      </button>
    </form>
  );
};

export default AddPerson;
