import React from "react";
export default function InputField({ type, placeholder, value, onChange }) {
    return (
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        style={{
          padding: "10px",
          margin: "10px 0",
          borderRadius: "5px",
          border: "1px solid #ccc",
          fontSize: "16px",
        }}
        required
      />
    );
  }
  