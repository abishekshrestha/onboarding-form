import React, { useState } from "react";
import { superCalc } from "../taxCalculator/superCalc";
import { taxCalc } from "../taxCalculator/taxCalc";
import { isNumber } from "../taxCalculator/isNumber";

export const Form = () => {
  const [salary, setSalary] = useState(0);
  const [superRate, setSuperRate] = useState(10.5);
  const [tax, setTax] = useState(0);
  const [superAmount, setSuperAmount] = useState(0);
  const [totalSalaryInclSuper, setTotalSalaryInclSuper] = useState(0);

  //submits form
  const handleSubmit = (e) => {
    e.preventDefault();
    const taxValue = taxCalc(salary);
    const superValue = superCalc(salary, superRate);
    const totalSalary = parseFloat(salary) + parseFloat(superValue);
    setTax(taxValue);
    setSuperAmount(superValue);
    setTotalSalaryInclSuper(totalSalary);
  };

  return (
    <>
      <form className="m-4 bg-light p-4" onSubmit={handleSubmit}>
        <h1>Onboarding form</h1>
        <div className="form-group d-flex justify-content-between">
          <div className="flex-grow-1 me-2">
            <label htmlFor="fname">First name</label>
            <input
              type="text"
              className="form-control mb-2"
              id="fname"
              aria-describedby="fname"
              placeholder="Enter your first name"
            />
          </div>
          <div className="flex-grow-1">
            <label htmlFor="lname">Last name</label>
            <input
              type="text"
              className="form-control mb-2"
              id="lname"
              aria-describedby="lname"
              placeholder="Enter your last name"
            />
          </div>
        </div>

        <label>Gender</label>
        <div className="form-check">
          <input
            className="form-check-input"
            type="radio"
            name="flexRadioDefault"
            id="male"
          />
          <label className="form-check-label" htmlFor="male">
            Male
          </label>
        </div>
        <div className="form-check">
          <input
            className="form-check-input"
            type="radio"
            name="flexRadioDefault"
            id="female"
          />
          <label className="form-check-label" htmlFor="female">
            Female
          </label>
        </div>
        <div className="form-check mb-2">
          <input
            className="form-check-input"
            type="radio"
            name="flexRadioDefault"
            id="other"
          />
          <label className="form-check-label" htmlFor="other">
            Other
          </label>
        </div>

        <div className="form-group">
          <label htmlFor="dob">Date of birth (DD/MM/YYYY)</label>
          <input
            type="text"
            className="form-control mb-2"
            id="dob"
            aria-describedby="dob"
            placeholder="Enter your date of birth"
          />
          <label htmlFor="email">Email</label>
          <input
            type="text"
            className="form-control mb-2"
            id="email"
            aria-describedby="email"
            placeholder="Enter your email"
          />
          <label htmlFor="mobile">Mobile number</label>
          <input
            type="text"
            className="form-control mb-2"
            id="mobile"
            aria-describedby="mobile"
            placeholder="Enter your mobile"
          />
          <label htmlFor="address">Address</label>
          <input
            type="text"
            className="form-control mb-2"
            id="address"
            aria-describedby="address"
            placeholder="Enter your address"
          />
          <label htmlFor="department">Department</label>
          <select
            id="department"
            className="form-select mb-2 "
            aria-label="department"
            defaultValue={"DEFAULT"}
          >
            <option value="DEFAULT">Select department</option>
            <option value="accounting">Accounting</option>
            <option value="it">IT</option>
            <option value="sales">Sales</option>
          </select>
          <label htmlFor="position">Position</label>
          <input
            type="text"
            className="form-control mb-2"
            id="position"
            aria-describedby="position"
            placeholder="Enter your position"
          />
          <label htmlFor="position">Reporting manager</label>
          <input
            type="text"
            className="form-control mb-2"
            id="manager"
            aria-describedby="manager"
            placeholder="Enter your manager name"
          />
        </div>
        <div className="form-group mb-4">
          <label htmlFor="salary">Salary excluding super</label>
          <input
            type="text"
            className="form-control mb-2"
            id="salary"
            placeholder="Enter your salary"
            value={salary}
            onChange={(e) => setSalary(e.target.value)}
          />

          {!isNumber(salary) ? (
            <div className="text-danger mb-2">Please enter valid salary</div>
          ) : null}
        </div>
        <div className="form-group mb-4">
          <h6>Salary and superannuation</h6>
          <label htmlFor="salary">
            Superannuation contribution rate (in %, rate between 10.5 and 25)
          </label>
          <input
            type="text"
            className="form-control mb-2"
            id="superannuation"
            placeholder="Enter your superannuation"
            value={superRate}
            onChange={(e) => setSuperRate(e.target.value)}
          />
          {!isNumber(superRate) || superRate < 10.5 || superRate > 25 ? (
            <div className="text-danger mb-2">
              Please enter valid superannuation
            </div>
          ) : null}
        </div>
        <div className="form-group">
          <h6>Bank details</h6>
          <label htmlFor="accountName">Account Name</label>
          <input
            type="text"
            className="form-control mb-2"
            id="accountName"
            aria-describedby="accountName"
            placeholder="Enter your account name"
          />
          <label htmlFor="bsb">BSB</label>
          <input
            type="text"
            className="form-control mb-2"
            id="bsb"
            aria-describedby="bsb"
            placeholder="Enter your BSB"
          />
          <label htmlFor="accountNumber">Account Number</label>
          <input
            type="text"
            className="form-control mb-2"
            id="accountNumber"
            aria-describedby="accountNumber"
            placeholder="Enter your account number"
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>

      <div className="m-4 p-4 bg-light">
        <h1>Tax description</h1>

        {!isNumber(superAmount) || !isNumber(tax) ? (
          "Please enter valid values"
        ) : (
          <div>
            <h6 className="font-weight-bold">Tax: ${tax.toFixed(2)}</h6>
            <h6 className="font-weight-bold">
              Superannuation: ${superAmount.toFixed(2)}
            </h6>
            <h6 className="font-weight-bold">
              Total salary including super: ${totalSalaryInclSuper.toFixed(2)}
            </h6>
          </div>
        )}
      </div>
    </>
  );
};
