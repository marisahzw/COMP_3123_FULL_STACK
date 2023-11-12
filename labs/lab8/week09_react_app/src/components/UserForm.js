import React, { Component } from 'react'
import '../App.css';

export default class UserForm extends Component {
    constructor(props) {
        super(props);
        this.provinces = [
            'Choose...',
            'Alberta',
            'British Columbia',
            'Manitoba',
            'New Brunswick',
            'Newfoundland and Labrador',
            'Nova Scotia',
            'Ontario',
            'Prince Edward Island',
            'Quebec',
            'Saskatchewan'
        ];
        this.state = {
            email: '',
            fullname: '',
            address: '',
            address2: '',
            city: '',
            province: '',
            postalcode: '',
            checkbox: '',
            submitted: false
        };
    }
    onValueChanged = (event) => {
        event.preventDefault()
        this.setState({
            [event.target.name]: event.target.value
        })
    }
    

    onSubmitForm = (event) => {
        event.preventDefault();
        this.setState({ submitted: true }); 
      };

    render() {
    return (
        <div className='container'>
            <div className='container1'>
        <div>
        <h1>Data Entry Form</h1>
        <form onSubmit={(e) => this.onSubmitForm(e)}>
        
          <div className="input-container">
            <div className="input-container">
              <label>Email</label>
              <input
                name='email'
                type="text"
                onChange={(e) => this.onValueChanged(e)}
                placeholder="Enter Email"
              />
            </div>
            <div className="input-container">
              <label>Name</label>
              <input
                name='fullname'
                type="text"
                onChange={(e) => this.onValueChanged(e)}
                placeholder="Full Name"
              />
            </div>
          </div>
      
          <div className="input-container">
            <label>Address</label>
            <input
              name='address'
              type="text"
              onChange={(e) => this.onValueChanged(e)}
              placeholder="1234 Main Street"
            />
          </div>
      
          <div className="input-container">
            <label>Address 2</label>
            <input
              name='address2'
              type="text"
              onChange={(e) => this.onValueChanged(e)}
              placeholder="Apartment, studio, floor"
            />
          </div>
      
          <div className="input-container">
            <div className="input-container">
              <label>City</label>
              <input
                name='city'
                type="text"
                onChange={(e) => this.onValueChanged(e)}
                placeholder="East York, Toronto"
              />
            </div>
      
            <div className="input-container">
              <label>Province</label>
              <select name='province' onChange={(e) => this.onValueChanged(e)}>
                {this.provinces.map((province) => (
                  <option key={province} value={province}>
                    {province}
                  </option>
                ))}
              </select>
            </div>
      
            <div className="input-container">
              <label>Postal Code</label>
              <input
                name='postalcode'
                type="text"
                onChange={(e) => this.onValueChanged(e)}
              />
            </div>
          </div>
      
       

        <div className="checkbox-container">
        <div className='checkbox'>
        <input
          type='checkbox'
          name='checkbox'
          onChange={(e) => this.onValueChanged(e)}
        />
        </div>
        <label>Agree to Terms and Conditions</label>
        </div>
        <div className ="btn-container">
            <input
                name='btnSubmit'
                type="submit"
                value="Submit"
            />

            </div>
     
    </form>
    </div>
    </div>
      

<br></br>
<br></br>
  
{this.state.submitted && (
  <div className="submitted-data-container">
    <h2 style={{ color: 'green' }}>Submitted Information:</h2>
    <p>
      <strong style={{ color: 'green' }}>Email:</strong> {this.state.email}
    </p>
    <p>
      <strong style={{ color: 'green' }}>Full Name:</strong> {this.state.fullname}
    </p>
    <p>
      <strong style={{ color: 'green' }}>Address:</strong> {this.state.address} {this.state.address2}
    </p>

    <p>
      <strong style={{ color: 'green' }}>City:</strong> {this.state.city}
    </p>
    <p>
      <strong style={{ color: 'green' }}>Province:</strong> {this.state.province}
    </p>
    <p>
      <strong style={{ color: 'green' }}>Postal Code:</strong> {this.state.postalcode}
    </p>

  </div>
)}


</div> 
    )
}
}
