import React from "react";
import NotFound from '../assets/404.jpg'
function PageNotFound() {
  return (
    <div className="container mx-auto">
      <div className="flex flex-col justify-center items-center h-screen">
        <img src={NotFound} alt=" PageNotFound 404" />
      </div>
    </div>
  );
}

export default PageNotFound;
