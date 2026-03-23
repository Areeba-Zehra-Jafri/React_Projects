import { useState } from "react";

function SignupForm() {
  const [form, setForm] = useState({
    name: "",
    fatherName: "",
    dob: "",
    cnic: "",
    email: "",
    mobile: "",
    gender: "",
    religion: "",
    presentAddress: "",
    permanentAddress: "",
    board: "",
    hscYear: "",
    hscMarks: "",
    hscTotal: "",
    matricMarks: "",
    matricTotal: "",
    category: "",
    program: "",
    password: "",
    confirmPassword: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (form.password !== form.confirmPassword) {
      setError("Passwords do not match!");
      return;
    }
    setError("");
    setSubmitted(true);
  }

  if (submitted) {
    return <h3>Registration Successful! Welcome, {form.name}.</h3>;
  }

  return (
    <div>
      <h2>NED University — Undergraduate Admission Registration</h2>
      <hr />
      <form onSubmit={handleSubmit}>
        <h3>Personal Information</h3>

        <div>
          <label>Full Name (as per Matric Certificate): </label>
          <input name="name" value={form.name} onChange={handleChange} required />
        </div>

        <div>
          <label>Father's Name: </label>
          <input name="fatherName" value={form.fatherName} onChange={handleChange} required />
        </div>

        <div>
          <label>Date of Birth: </label>
          <input type="date" name="dob" value={form.dob} onChange={handleChange} required />
        </div>

        <div>
          <label>CNIC / B-Form Number: </label>
          <input name="cnic" placeholder="XXXXX-XXXXXXX-X" value={form.cnic} onChange={handleChange} required />
        </div>

        <div>
          <label>Gender: </label>
          <select name="gender" value={form.gender} onChange={handleChange} required>
            <option value="">-- Select --</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
        </div>

        <div>
          <label>Religion: </label>
          <select name="religion" value={form.religion} onChange={handleChange}>
            <option value="">-- Select --</option>
            <option value="islam">Islam</option>
            <option value="christianity">Christianity</option>
            <option value="hinduism">Hinduism</option>
            <option value="other">Other</option>
          </select>
        </div>

        <div>
          <label>Present Address: </label>
          <textarea name="presentAddress" value={form.presentAddress} onChange={handleChange} required />
        </div>

        <div>
          <label>Permanent Address: </label>
          <textarea name="permanentAddress" value={form.permanentAddress} onChange={handleChange} required />
        </div>

        <hr />

        <h3>Contact Information</h3>

        <div>
          <label>Email: </label>
          <input type="email" name="email" value={form.email} onChange={handleChange} required />
        </div>

        <div>
          <label>Mobile Number: </label>
          <input name="mobile" placeholder="03XX-XXXXXXX" value={form.mobile} onChange={handleChange} required />
        </div>

        <hr />

        <h3>Academic Information</h3>

        <div>
          <label>Board of Intermediate: </label>
          <select name="board" value={form.board} onChange={handleChange} required>
            <option value="">-- Select Board --</option>
            <option value="karachi">Board of Intermediate Education Karachi</option>
            <option value="hyderabad">Board of Intermediate Education Hyderabad</option>
            <option value="sukkur">Board of Intermediate Education Sukkur</option>
            <option value="other">Other</option>
          </select>
        </div>

        <div>
          <label>HSC Passing Year: </label>
          <select name="hscYear" value={form.hscYear} onChange={handleChange} required>
            <option value="">-- Select Year --</option>
            <option value="2024">2024</option>
            <option value="2023">2023</option>
            <option value="2022">2022</option>
            <option value="2021">2021</option>
          </select>
        </div>

        <div>
          <label>HSC Marks Obtained: </label>
          <input type="number" name="hscMarks" value={form.hscMarks} onChange={handleChange} required />
        </div>

        <div>
          <label>HSC Total Marks: </label>
          <input type="number" name="hscTotal" value={form.hscTotal} onChange={handleChange} required />
        </div>

        <div>
          <label>Matric Marks Obtained: </label>
          <input type="number" name="matricMarks" value={form.matricMarks} onChange={handleChange} required />
        </div>

        <div>
          <label>Matric Total Marks: </label>
          <input type="number" name="matricTotal" value={form.matricTotal} onChange={handleChange} required />
        </div>

        <hr />

        <h3>Admission Preference</h3>

        <div>
          <label>Category of Admission: </label>
          <select name="category" value={form.category} onChange={handleChange} required>
            <option value="">-- Select Category --</option>
            <option value="open">Open Merit</option>
            <option value="selfFinance">Self Finance</option>
            <option value="foreign">Foreign/Overseas Pakistani</option>
            <option value="disabled">Differently Abled</option>
          </select>
        </div>

        <div>
          <label>Program Applying For: </label>
          <select name="program" value={form.program} onChange={handleChange} required>
            <option value="">-- Select Program --</option>
            <option value="civil">BE Civil Engineering</option>
            <option value="computer">BE Computer Engineering</option>
            <option value="electrical">BE Electrical Engineering</option>
            <option value="mechanical">BE Mechanical Engineering</option>
            <option value="software">BS Software Engineering</option>
            <option value="cs">BS Computer Science</option>
            <option value="architecture">B Architecture</option>
          </select>
        </div>

        <hr />

        <h3>Account Setup</h3>

        <div>
          <label>Password: </label>
          <input type="password" name="password" value={form.password} onChange={handleChange} required />
        </div>

        <div>
          <label>Confirm Password: </label>
          <input type="password" name="confirmPassword" value={form.confirmPassword} onChange={handleChange} required />
        </div>

        {error && <p style={{ color: "red" }}>{error}</p>}

        <br />
        <button type="submit">Register</button>

      </form>
    </div>
  );
}

export default SignupForm;