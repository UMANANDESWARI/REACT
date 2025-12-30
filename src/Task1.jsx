// import React, { useState } from 'react';
// import './Task1.css';

// const Task1 = () => {
//   const [showForm, setShowForm] = useState(false);

// return (
//     <center>
//       {!showForm ? (
//         <div style={{ display: 'flex', gap: '50px', justifyContent: 'center', marginTop: '40px' }}>
//           <button
//             onClick={() => setShowForm(true)}
//             style={{ padding: '12px 24px', fontSize: '18px', borderRadius: '6px' }}
//           >
//             Add Card
//           </button>
//           <button
//             onClick={() => alert('Visit Card clicked')}
//             style={{ padding: '12px 24px', fontSize: '18px', borderRadius: '6px' }}
//           >
//             Visit Card
//           </button>
//         </div>
//       ) : (
//         <form style={{ marginTop: '40px' }}>
//           <label>FirstName:</label>
//           <input type="text" placeholder="Enter First Name" required />
//           <br /><br />
//           <label>LastName:</label>
//           <input type="text" placeholder="Enter Last Name" required />
//           <br /><br />
//           <label>Phone Number:</label>
//           <input type="number" placeholder="Enter ph number" required />
//           <br /><br />
//           <label>Email:</label>
//           <input type="email" placeholder="Enter Your email" required />
//           <br /><br />
//           <label>Gender:</label>
//           <input type="radio" value="male" name="gender" required />
//           <label>Male</label>
//           <input type="radio" value="female" name="gender" required />
//           <label>Female</label>
//           <br /><br />
//           <label>DateOfBirth:</label>
//           <input type="date" required />
//           <br /><br />
//           <div style={{ display: 'flex', gap: '50px', justifyContent: 'center' }}>
//             <button type="submit"  style={{ padding: '12px 24px', fontSize: '18px', borderRadius: '6px' }}>
//               Submit
//             </button>
//             <button
//               type="button"
//               onClick={() => setShowForm(false)}
//               style={{ padding: '12px 24px', fontSize: '18px', borderRadius: '6px' }}
//             >
//               Cancel
//             </button>
//           </div>
//         </form>
//       )}
//     </center>
//   );
// };

// export default Task1;

import React, { useState } from "react";
import "./Task1.css";

function Task1() {
  const [activeTab, setActiveTab] = useState("add");
  const [formData, setFormData] = useState({
    name: "",
    brand: "",
    price: "",
    description: "",
    image: "",
  });
  const [cards, setCards] = useState([]);
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "image" && files[0]) {
      const imageUrl = URL.createObjectURL(files[0]);
      setFormData({ ...formData, image: imageUrl });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.brand || !formData.price) {
      setMessage("⚠ Please fill all required fields!");
      return;
    }

    setCards([...cards, formData]);
    setMessage("✅ Data added successfully!");

    setFormData({
      name: "",
      brand: "",
      price: "",
      description: "",
      image: "",
    });
  };

  const handleClear = () => {
    setFormData({
      name: "",
      brand: "",
      price: "",
      description: "",
      image: "",
    });
    setMessage("");
  };

  return (
    <div className="page-container">
      {/* Header Section */}
      <header className="header">
        <button
          className={`tab-btn ${activeTab === "add" ? "active" : ""}`}
          onClick={() => setActiveTab("add")}
        >
          Add Card
        </button>
        <button
          className={`tab-btn ${activeTab === "visit" ? "active" : ""}`}
          onClick={() => setActiveTab("visit")}
        >
          Visit Card
        </button>
      </header>

      {/* Body Section */}
      <main className="main-section">
        {activeTab === "add" ? (
          <div className="form-container">
            <h2>Add Product Details</h2>
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Product Name"
              />
              <input
                type="text"
                name="brand"
                value={formData.brand}
                onChange={handleChange}
                placeholder="Brand"
              />
              <input
                type="number"
                name="price"
                value={formData.price}
                onChange={handleChange}
                placeholder="Price"
              />
              <textarea
                name="description"
                value={formData.description}
                onChange={handleChange}
                placeholder="Description"
              ></textarea>
              <input
                type="file"
                name="image"
                accept="image/*"
                onChange={handleChange}
              />

              <div className="form-buttons">
                <button
                  type="button"
                  onClick={handleClear}
                  className="clear-btn"
                >
                  Clear
                </button>
                <button type="submit" className="submit-btn">
                  Submit
                </button>
              </div>
            </form>
            {message && <p className="message">{message}</p>}
          </div>
        ) : (
          <div className="cards-section">
            <h2>Submitted Product Cards</h2>
            {cards.length === 0 ? (
              <p className="no-cards">No cards added yet.</p>
            ) : (
              <div className="cards-grid">
                {cards.map((card, index) => (
                  <div key={index} className="card">
                    {card.image && (
                      <img
                        src={card.image}
                        alt={card.name}
                        className="card-img"
                      />
                    )}
                    <div className="card-content">
                      <h3>{card.brand}</h3>
                      <p className="price">${card.price}</p>
                      <p className="name">{card.name}</p>
                      <p className="desc">{card.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}
      </main>
    </div>
  );
}

export default Task1;
