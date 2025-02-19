import React from "react";
export default function CardWrapper({ children }) {
    return (
      <div
        style={{
          display:"flex",
          justifyContent:"center",
          alignItems:"center",
          maxWidth: "350px",
          margin: "auto",
          padding: "20px",
          backgroundColor: "#ecf0f1",
          borderRadius: "8px",
          boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.1)",
        }}
      >
        {children}
      </div>
    );
  }
  