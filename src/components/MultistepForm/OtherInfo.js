import React from "react";

function OtherInfo({ formData, setFormData }) {
  return (
    <div className="other-info-container">
      <input
        type="text"
        placeholder="What service you need..."
        value={formData.service}
        onChange={(e) => {
          setFormData({ ...formData, service: e.target.value });
        }}
      />
      <input
        type="text"
        placeholder="Message..."
        value={formData.message}
        onChange={(e) => {
          setFormData({ ...formData, message: e.target.value });
        }}
      />
    </div>
  );
}

export default OtherInfo;