import React, { useState } from 'react';

const NewCustomer = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    totalSpend: 0,
    visitCount: 0,
    lastVisit: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Customer Data Submitted:', formData);
    setFormData({
      name: '',
      email: '',
      phone: '',
      totalSpend: 0,
      visitCount: 0,
      lastVisit: '',
    });
  };

  return (
    <div className="container my-4">
      <h2 className="text-center text-primary">Add New Customer</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label">Name</label>
          <input
            type="text"
            className="form-control"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Email</label>
          <input
            type="email"
            className="form-control"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Phone</label>
          <input
            type="text"
            className="form-control"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Total Spend</label>
          <input
            type="number"
            className="form-control"
            name="totalSpend"
            value={formData.totalSpend}
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Visit Count</label>
          <input
            type="number"
            className="form-control"
            name="visitCount"
            value={formData.visitCount}
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Last Visit</label>
          <input
            type="date"
            className="form-control"
            name="lastVisit"
            value={formData.lastVisit}
            onChange={handleChange}
          />
        </div>
        <button type="submit" className="btn btn-primary w-100">
          Add Customer
        </button>
      </form>
    </div>
  );
};

export default NewCustomer;
