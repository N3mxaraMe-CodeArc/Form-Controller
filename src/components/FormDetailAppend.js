import React from 'react'

const FormDetailAppend = ({data}) => {
  
  return (
    <div>
      <div className="container-fluid">
        <div className="row">
          <table class="table">
            <thead>
              <tr>
                <th scope="col-4 col-sm-6 col-md-4 col-lg-4">Name</th>
                <th scope="col-4 col-sm-6 col-md-4 col-lg-4">Amount</th>
                <th scope="col-4 col-sm-6 col-md-4 col-lg-4">Date</th>
                <th scope="col-4 col-sm-6 col-md-4 col-lg-4">Catergory</th>
              </tr>
            </thead>
            <tbody>
              {data.map((item, index) => (
                <tr key={index}>
                  <td>{item.name}</td>
                  <td>{item.amount}</td>
                  <td>{item.date}</td>
                  <td>{item.category}</td>
                  <td>{item.note}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default FormDetailAppend;
