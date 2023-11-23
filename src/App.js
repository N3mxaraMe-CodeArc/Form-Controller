import React from 'react'
import FormExpernse from './components/FormExpernse';
import FormDetailAppend from './components/FormDetailAppend';

const App = () => {
  const [formDataList, setFormDataList] = React.useState([]);

  const handleFormSubmit = (formData) => {
    setFormDataList([...formDataList, formData]);
  };
  return (
    <div className='container-fluid'>
      <div className="row">
        <div className="col-12 col-sm-12 col-md-6 col-lg-6">
          <FormExpernse onSubmit={handleFormSubmit} />
        </div>
        <div className="col-12 col-sm-12 col-md-6 col-lg-6">
          <FormDetailAppend data={formDataList}/>
        </div>
      </div>
    </div>
  )
}

export default App;
