import React, { useState } from "react";
import axios from "axios";
import "./CreateProfile.css";

const Form = () => {
  // a local state to store the currently selected file.
  const [selectedFile, setSelectedFile] = React.useState(null);
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [age, setage] = useState("");
  const [address, setaddress] = useState("");
  const [phoneNumber, setphoneNumber] = useState("");
  const [gender, setgender] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append("image", selectedFile);
    formData.append("email", email);
    formData.append("name", name);
    formData.append("address", address);
    formData.append("phone", phoneNumber);
    formData.append("age", age);
    formData.append("gender", gender);

    try {
      const response = await axios({
        method: "post",
        url: "/customer/create",
        data: formData,
        headers: { "Content-Type": "multipart/form-data" },
      });
    } catch (error) {
      console.log(error);
    }
  };

  const handleFileSelect = async (event) => {
    setSelectedFile(event.target.files[0]);
    console.log(event.target.files[0]);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>Email :</label>{" "}
      <input
        type="email"
        style={{ background: "gray" }}
        name="email"
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <label>Name :</label>{" "}
      <input
        type="text"
        style={{ background: "gray" }}
        name="name"
        onChange={(e) => setName(e.target.value)}
        required
      />
      <label>Address :</label>{" "}
      <input
        type="text"
        style={{ background: "gray" }}
        name="address"
        onChange={(e) => setaddress(e.target.value)}
        required
      />
      <label>Phone Number :</label>{" "}
      <input
        type="phone"
        style={{ background: "gray" }}
        name="phoneNumber"
        onChange={(e) => setphoneNumber(e.target.value)}
        required
      />
      <label>Age :</label>{" "}
      <input
        type="number"
        style={{ background: "gray" }}
        name="age"
        onChange={(e) => setage(e.target.value)}
        required
      />
      <label for="gender" className="form-label">
        Gender
      </label>
      <input
        type="text"
        placeholder="Enter the gender"
        className="form-control"
        name="gender"
        onChange={(e) => setgender(e.target.value)}
        required
        pattern="[A-Za-z]+"
        title="Gender cannot contain any numbers or special characters"
      />
      <input type="file" onChange={handleFileSelect} name="image" required />
      <input type="submit" value={"submit"} />
    </form>
  );
};

export default Form;
