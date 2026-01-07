function StudentForm() {
  return (
    <div className="container">
      <form className="student-form">
        <h2>Student Details</h2>

        <label>Name</label>
        <input type="text" placeholder="Enter Name" />

        <label>Roll Number</label>
        <input type="text" placeholder="Enter Roll Number" />

        <label>Email</label>
        <input type="email" placeholder="Enter Email" />

        <label>Department</label>
        <input type="text" placeholder="Enter Department" />

        <label>College</label>
        <input type="text" placeholder="Enter College Name" />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default StudentForm;
