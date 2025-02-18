import React from "react";
export default function SubmitButton({ text }) {
    return (
      <button
        type="submit"
        style={{
          padding: "10px 20px",
          fontSize: "16px",
          cursor: "pointer",
          backgroundColor: "#3498db",
          color: "#fff",
          border: "none",
          borderRadius: "5px",
        }}
      >
        {text}
      </button>
    );
  }
  