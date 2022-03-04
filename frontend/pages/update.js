import React from "react";
import UpdateProduct from "../components/UpdateProduct";
import Page from "../components/Page";

const UpdatePage = ({ query }) => {
  return (
    <div>
      <UpdateProduct id={query.id} />
    </div>
  );
};

export default UpdatePage;
