import React, { useState, useEffect } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import Logo2 from "../../img/Logo-2.png";
import { Modal, Button } from "antd";

const Addcustomer = () => {
  const [visible, setVisible] = useState(false);

  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [photo, setPhoto] = useState("");
  const [loading, setLoading] = useState(false); //additional
  const [isError, setIsError] = useState(false);
  const [listOfUsers, setListOfUsers] = useState([]);



  const [newUser, setNewUser] = useState({
    name: "",
    age: "",
    gender: "",
    address: "",
    phone: "",
    email: "",
    photo: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    setLoading(true);
    setIsError(false); //additional

    const formData = new FormData();
    formData.append("photo", newUser.photo);
    formData.append("address", newUser.address);
    formData.append("phone", newUser.phone);
    formData.append("email", newUser.email);
    formData.append("name", newUser.name);
    formData.append("age", newUser.age);
    formData.append("gender", newUser.gender);

    axios
      .post("http://localhost:8070/customer/add", formData)
      .then((res) => {
        console.log(res);
        setLoading(false);
        setNewUser({
          name: "",
          age: "",
          gender: "",
          address: "",
          photo: "",
          email: "",
          phone: "",
        });

        toast("Customer added successfully !!");
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
        setIsError(true);
        toast(
          "Error! Customer not Added Duplicate Key Found: Email must be unique"
        );
      });
  };

  const handleChange = (e) => {
    setNewUser({ ...newUser, [e.target.name]: e.target.value });
  };

  const handlePhoto = (e) => {
    setNewUser({ ...newUser, photo: e.target.files[0] });
  };

  //dynamic search box
  const [myOptions, setMyOptions] = useState([]);

  const getDataFromAPI = () => {
    console.log("Options Fetched from API");

    axios
      .get("http://localhost:8070/customer")
      .then((response) => {
        return response.json();
      })
      .then((res) => {
        console.log(res.data);
        for (var i = 0; i < res.data.length; i++) {
          myOptions.push(res.data[i].customer_name);
        }
        setMyOptions(myOptions);
      });
  };
  const Clear = () => {
    setName("");
    setAge("");
    setGender("");
    setAddress("");
    setPhone("");
    setPhoto("");
    setEmail("");
  };

  return (
    <>
      <header class="text-gray-400  body-font  fixed ">
        <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center fixed bg-white border-2 border-slate-100">
          <a
            href="/home"
            class="flex title-font font-medium items-center text-white mb-4 md:mb-0"
          >
            <img src={Logo2} className="w-12" />
            <span class="ml-3 text-xl text-red-700">FOOD HUB</span>
          </a>
          <nav class="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-700	flex flex-wrap items-center text-base justify-center">
            <a
              href="/addcustomer"
              class="mr-5 hover:text-red-700 duration-500 "
            >
              Dashboard
            </a>
            <a
              href="/customerlist"
              class="mr-5 hover:text-red-700 duration-500"
            >
              Account List
            </a>
            <a
              href="/customerlist"
              class="mr-5 hover:text-red-700 duration-500"
            >
          
            </a>
          </nav>
          {/* <div className="">  {listOfUsers.map((user) => ( <img class="h-10 w-10 rounded-full" src={"images/" + user.photo}></img>))}</div>  */}

          <a href="/home">
            {" "}
            <button class="inline-flex items-center bg-white border-solid border-2 border-black py-1 px-3 focus:outline-none hover:text-red-700 rounded text-base mt-4 md:mt-0 mr-7">
              Log Out
              <ion-icon name="person-circle-outline"></ion-icon>
            </button>
          </a>
        </div>
      </header>
      <Button
        type="primary"
        className="mt-32 ml-5"
        onClick={() => setVisible(true)}
      >
        Add Customer
      </Button>
      <Modal
        className="mt-52"
        title="Add New Customer"
        visible={visible}
        onOk={() => setVisible(false)}
        onCancel={() => setVisible(false)}
        width={800}
      >
        <div>
          <div className="grid min-h-screen place-items-center ">
            <br />
            <br />
            <form
              onSubmit={handleSubmit}
              encType="multipart/form-data"
              className=" w-96"
            >
              <br />

              <div className="">
                <div class="">
                  Name
                  <input
                    value={newUser.name}
                    onChange={handleChange}
                    title="Name cannot contain any numbers or special characters"
                    type="text"
                    name="name"
                    class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                    placeholder=" "
                  />
                </div>

                <br />
                <div class="">
                  Age
                  <input
                    value={newUser.age}
                    onChange={handleChange}
                    required
                    pattern="[1-9]{1,3}"
                    title="Age cannot contain any letters or special characters  and Age > 0"
                    type="text"
                    name="age"
                    class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                    placeholder=" "
                  />
                  <label
                    for="age"
                    class="related text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                  ></label>
                </div>
                <br />
                <div class="">
                  Gender
                  <input
                    value={newUser.gender}
                    onChange={handleChange}
                    required
                    pattern="[A-Za-z]+"
                    title="Gender cannot contain any numbers or special characters"
                    type="text"
                    name="gender"
                    class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                    placeholder=" "
                  />
                  <label
                    for="gender"
                    class=" text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                  ></label>
                </div>
                <br />

                <div class="">
                  Address
                  <input
                    value={newUser.address}
                    onChange={handleChange}
                    required
                    type="text"
                    name="address"
                    class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                    placeholder=" "
                  />
                  <label
                    for="address"
                    class="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                  >
                    Address
                  </label>
                </div>

                <br />
                <div class="">
                  Phone
                  <input
                    value={newUser.phone}
                    onChange={handleChange}
                    required
                    pattern="[0-9]{10}"
                    title="Phone cannot contain any letters or special characters and cannot exceeded 10 digits"
                    type="text"
                    name="phone"
                    class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                    placeholder=" "
                  />
                  <label
                    for="phone"
                    class="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                  >
                    Phone
                  </label>
                </div>

                <br />
                <div class="">
                  Email
                  <input
                    value={newUser.email}
                    onChange={handleChange}
                    required
                    pattern="[0-9a-zA-Z%&$@.]+@[a-zA-Z]+\.+[a-zA-Z]{2,3}"
                    type="email"
                    name="email"
                    class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                    placeholder=" "
                  />
                  <label
                    for="email"
                    class="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                  >
                    Email
                  </label>
                </div>
              </div>

              <div className="jumbotron" style={{ textAlign: "center" }}>
                <h1 className="display-4" style={{ color: "black" }}>
                  Upload a Photo of Customer
                </h1>

                <hr className="my-4" />
              </div>
              <div style={{ textAlign: "center" }}>
                <i
                  class="fa fa-folder-open"
                  aria-hidden="true"
                  style={{ color: "red" }}
                ></i>
                <input
                  type="file"
                  accept=".png, .jpg, .jpeg"
                  name="photo"
                  onChange={handlePhoto}
                  required
                  style={{ color: "white", backgroundColor: "black" }}
                />
              </div>

              <br />

              <div style={{ textAlign: "center" }}>
                <button
                  onClick={Clear}
                  type="button"
                  data-modal-toggle="delete-user-modal"
                  class="py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
                >
                  Clear
                </button>
                {isError && (
                  <small className="mt-3 d-inline-block text-danger">
                    <br />
                    Something went wrong. Please try again later.
                  </small>
                )}
                {/*decision*/}
                <button
                  type="submit"
                  className="py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
                  disabled={loading}
                >
                  <i class="fa fa-upload" aria-hidden="true"></i>{" "}
                  {loading ? "Uploading..." : "Upload"}
                </button>
                <ToastContainer style={{ marginTop: "50px" }} />
              </div>
            </form>
            
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
          </div>
        </div>
      </Modal>
    </>
  );
};

export default Addcustomer;
