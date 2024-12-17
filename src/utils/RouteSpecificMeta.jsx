import React from "react";
import { Helmet } from "react-helmet";
import { useLocation } from "react-router-dom";
import { routeMeta } from "./routeMeta";

const RouteSpecificMeta = () => {
  const location = useLocation();
  const meta = routeMeta[location.pathname];

  if (!meta) return null;

  return (
    <Helmet>
      <title>{meta.title}</title>
      <meta name="description" content={meta.description} />
    </Helmet>
  );
};

export default RouteSpecificMeta;
