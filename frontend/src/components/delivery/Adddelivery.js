import React from "react";
import "./delivery.css"

const Adddelivery = () => {

    
      
      
    
  
    return (
            
        <div><div className="container"><form>
        <div class="mb-3">
          <label for="exampleInputEmail1" class="form-label">Name</label>
          <input type="text" class="form-control textbox" id="exampleInputEmail1" aria-describedby="emailHelp"/>
          
        </div>
        <div class="mb-3">
          <label for="exampleInputPassword1" class="form-label">Age</label>
          <input type="text" class="form-control" id="exampleInputPassword1"/>
        </div>

        <div class="mb-3">
          <label for="exampleInputPassword1" class="form-label">Workdate</label>
          <input type="text" class="form-control" id="exampleInputPassword1"/>
        </div>

        <div class="mb-3">
          <label for="exampleInputPassword1" class="form-label">Birth Day</label>
          <input type="text" class="form-control" id="exampleInputPassword1"/>
        </div>

        <div class="mb-3">
          <label for="exampleInputPassword1" class="form-label">Address</label>
          <input type="text" class="form-control" id="exampleInputPassword1"/>
        </div>

        <div class="mb-3">
          <label for="exampleInputPassword1" class="form-label">Phone Number</label>
          <input type="text" class="form-control" id="exampleInputPassword1"/>
        </div>

        <div class="mb-3">
          <label for="exampleInputPassword1" class="form-label">Email Address </label>
          <input type="text" class="form-control" id="exampleInputPassword1"/>
        </div>
        
        <button type="submit" class="btn btn-primary">Submit</button>
      </form></div></div>
    )
      
    }
  export default Adddelivery;
  