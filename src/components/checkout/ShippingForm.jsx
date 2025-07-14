import { useState } from 'react';
import './checkout.css'
import { useNavigate } from 'react-router-dom';

export const ShippingForm = () => {

     const navigate = useNavigate();

     const [errors, setErrors] = useState({});

     const generateOrderId = () => {
          const str = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
          let newid = "ORD";
          for (let i = 1; i <= 8; i++) {
               newid += str.charAt(Math.floor(Math.random() * str.length));
          }
          return newid;
     };

     const handleSubmit = (e) => {
          e.preventDefault();
          const form = e.target;
          const formData = new FormData(form);
          const data = Object.fromEntries(formData.entries());

          let newErrors = {};

          if (!(data.name || "").trim()) newErrors.name = "Name is required";
          if (!(data.phonenumber || "").trim()) {
               newErrors.phonenumber = "Phone number is required";
          } else if (!/^[0-9]{10}$/.test(data.phonenumber)) {
               newErrors.phonenumber = "Enter 10-digit valid phone number";
          }
          if (!(data.housename || "").trim()) newErrors.housename = "House name is required";
          if (!(data.street || "").trim()) newErrors.street = "Street name is required";
          if (!(data.pincode || "").trim()) {
               newErrors.pincode = "Pincode is required";
          } else if (!/^[0-9]{6}$/.test(data.pincode)) {
               newErrors.pincode = "Enter 6-digit valid pincode";
          }
          if (!(data.state || "").trim()) newErrors.state = "State is required";
          if (!(data.payby || "")) newErrors.payby = "Select a payment method";

          setErrors(newErrors);

          if (Object.keys(newErrors).length === 0) {
               const generatedId  = generateOrderId();
               data.id = generatedId
               localStorage.setItem("shippingInfo", JSON.stringify(data))
               navigate("/thank-you");
          }
     };

     return (
          <><form className="shipping_form" onSubmit={handleSubmit}>
               <h4 className="form_hd">Contact Details</h4>
               <div className="row">
                    <div className="col-12">
                         <div className="input_wrapper">
                              <input type="text" name="name" id="" className="" placeholder="Name" />
                              {errors.name && <p className="error">{errors.name}</p>}
                         </div>

                    </div>
                    <div className="col-12">
                         <div className="input_wrapper">
                              <input type="tel" name="phonenumber" id="" className="" placeholder="Phone no" maxLength={10} />
                              {errors.phonenumber && <p className="error">{errors.phonenumber}</p>}
                         </div>
                    </div>
               </div>
               <h4 className="form_hd">Address Line</h4>
               <div className="row">
                    <div className="col-md-6">
                         <div className="input_wrapper">
                              <input type="text" name="housename" id="" className="" placeholder="House/Building/Flat-no" />
                              {errors.housename && <p className="error">{errors.housename}</p>}
                         </div>

                    </div>
                    <div className="col-md-6">
                         <div className="input_wrapper">
                              <input type="tel" name="street" id="" className="" placeholder="Street/Locality name" />
                              {errors.street && <p className="error">{errors.street}</p>}
                         </div>
                    </div>
                    <div className="col-md-6">
                         <div className="input_wrapper">
                              <input type="text" name="pincode" id="" className="" placeholder="Pincode" maxLength={6} />
                              {errors.pincode && <p className="error">{errors.pincode}</p>}
                         </div>
                    </div>
                    <div className="col-md-6">
                         <div className="input_wrapper">
                              <select name="state" defaultValue="">
                                   <option value="" disabled>Select State</option>
                                   <option value="Andhra Pradesh">Andhra Pradesh</option>
                                   <option value="Arunachal Pradesh">Arunachal Pradesh</option>
                                   <option value="Assam">Assam</option>
                                   <option value="Bihar">Bihar</option>
                                   <option value="Chhattisgarh">Chhattisgarh</option>
                                   <option value="Goa">Goa</option>
                                   <option value="Gujarat">Gujarat</option>
                                   <option value="Haryana">Haryana</option>
                                   <option value="Himachal Pradesh">Himachal Pradesh</option>
                                   <option value="Jharkhand">Jharkhand</option>
                                   <option value="Karnataka">Karnataka</option>
                                   <option value="Kerala">Kerala</option>
                                   <option value="Madhya Pradesh">Madhya Pradesh</option>
                                   <option value="Maharashtra">Maharashtra</option>
                                   <option value="Manipur">Manipur</option>
                                   <option value="Meghalaya">Meghalaya</option>
                                   <option value="Mizoram">Mizoram</option>
                                   <option value="Nagaland">Nagaland</option>
                                   <option value="Odisha">Odisha</option>
                                   <option value="Punjab">Punjab</option>
                                   <option value="Rajasthan">Rajasthan</option>
                                   <option value="Sikkim">Sikkim</option>
                                   <option value="Tamil Nadu">Tamil Nadu</option>
                                   <option value="Telangana">Telangana</option>
                                   <option value="Tripura">Tripura</option>
                                   <option value="Uttarakhand">Uttarakhand</option>
                                   <option value="Uttar Pradesh">Uttar Pradesh</option>
                                   <option value="West Bengal">West Bengal</option>
                              </select>
                              {errors.state && <p className="error">{errors.state}</p>}
                         </div>

                    </div>
                    <h4 className="form_hd">Payment Options</h4>
                    <div className="col-12">
                         <ul className="payoption_item">
                              <li>
                                   <input type="radio" id="cod" name="payby" value="01" />
                                   <label htmlFor="cod">Cash On Delivery</label>
                              </li>
                              <li>
                                   <input type="radio" id="online" name="payby" value="02" />
                                   <label htmlFor="online">Online</label>
                              </li>
                              <li>
                                   <input type="radio" id="card" name="payby" value="03" />
                                   <label htmlFor="card">Debit/Credit Card</label>
                              </li>
                         </ul>
                         {errors.payby && <p className="error">{errors.payby}</p>}

                         <button type='submit' className="common_btn btn-place-order mt-3">
                              PAY NOW
                         </button>
                    </div>

               </div>

          </form></>
     )
}
