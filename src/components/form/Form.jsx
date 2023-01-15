import React, { useEffect, useState } from "react";
import { superCalc } from "../taxCalculator/superCalc";
import { taxCalc } from "../taxCalculator/taxCalc";
import { isNumber } from "../taxCalculator/isNumber";

export const Form = () => {
  const [salary, setSalary] = useState(0);
  const [superRate, setSuperRate] = useState(10.5);
  const [tax, setTax] = useState(0);
  const [superAmount, setSuperAmount] = useState(0);
  const [totalSalaryInclSuper, setTotalSalaryInclSuper] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();
    setTax(taxCalc(salary));
    setSuperAmount(superCalc(salary, superRate));
  };

  useEffect(() => {
    setTotalSalaryInclSuper(parseFloat(salary) + parseFloat(superAmount));
  }, [tax, superAmount]);

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
        <div className="form-group">
          <label htmlFor="dob">Date of birth</label>
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
        </div>
        <div className="form-group">
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
        <div className="form-group">
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
