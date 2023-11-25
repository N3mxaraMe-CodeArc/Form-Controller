import React from 'react'

const FormExpernse = ({ onSubmit }) => {

   const [Summary, setSummary] = React.useState("")
   const [name, setName] = React.useState('');
   const [amount, setAmount] = React.useState('');
   const [date, setDate] = React.useState('');
   const [category, setCategory] = React.useState('food');
   // const [note, setNote] = React.useState('');

   const AppendDtaintoForm = (e) => {
      e.preventDefault();

      const formData = { name, amount, date, category };
      console.log(formData);
      setSummary("Data has been submitted");
      onSubmit(formData);

      setName("");
      setAmount("");
      setDate("");
      setCategory("");
      // setNote("");

      setTimeout(() => {
         setSummary("");
      }, 3000);
   }

   return (
      <div>
         <form action="">
            <h2 className="text-center">Spend Form</h2>
            <hr />
            <div className="form-group">
               <label className='form-label' htmlFor="name">Name</label>
               <input onChange={(e) => {
                  setName(e.target.value)
               }} type="text" className="form-control" id="name" placeholder="Enter name" />
            </div>
            <div className="form-group">
               <label className='form-label' htmlFor="amount">Amount</label>
               <input onChange={(e) => {
                  setAmount(e.target.value)
               }} type="number" className="form-control" id="amount" placeholder="Enter amount" />
            </div>
            <div className="form-group">
               <label className='form-label' htmlFor="date">Date</label>
               <input onChange={(e) => {
                  setDate(e.target.value)
               }} type="date" className="form-control" id="date" placeholder="Enter date" />
            </div>
            <div className="form-group">
               <label className='form-label' htmlFor="category">Category</label>
               <select className="form-control" id="category" onChange={(e) => setCategory(e.target.value)}>
                  <option value="food">Food</option>
                  <option value="travel">Travel</option>
                  <option value="shopping">Shopping</option>
                  <option value="other">Other</option>
               </select>
            </div>
            <div className="form-group">
               <label htmlFor="note">Note</label>
               <textarea className="form-control" id="note" rows="3"></textarea>
            </div>
            <br />
            <button onClick={AppendDtaintoForm} type="submit" className="btn btn-primary">Submit</button>
            <button type="reset" className="btn btn-danger">Reset</button>
            <p className="text-center">{Summary}</p>

         </form>
      </div>
   )
}

export default FormExpernse
