import React from "react";
import { useParams } from "react-router-dom";

// HOC - withRouter
export const withRouter = (WrappedComponent) => (props) => {
  const params = useParams();
  console.log(params);

  return <WrappedComponent {...props} params={params} />
};

export default withRouter;
