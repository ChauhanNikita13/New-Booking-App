import React from "react";
import AuthForm from "../Auth/AuthForm";
import { sendAdminAuthRequest } from "../../Api-helpers/api-helper";
import { useDispatch } from "react-redux";
import { adminActions } from "../../store";

const Admin = () => {
  const dispatch = useDispatch();
  const onReceived = (data) => {
    console.log(data);
    dispatch(adminActions.login());
    localStorage.setItem("adminID", data.id);
    localStorage.setItem("token", data.token);
  };
  const getData = (data) => {
    console.log("Admin", data);
    sendAdminAuthRequest(data.inputs)
      .then(onReceived)
      .catch((err) => console.log(err));
  };
  return (
    <div>
      <AuthForm onSubmit={getData} isAdmin={true} />
    </div>
  );
};

export default Admin;
