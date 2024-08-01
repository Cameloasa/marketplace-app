import React from 'react'

function Card() {
  return (
    <div className="row">
    
      <div className="card mb-4 col-md-4">
        <img className="card-img-top" src="https://via.placeholder.com/150" alt="Ad 1"/>
        <div className="card-body">
          <h5 className="card-title">Ad 1</h5>
          <p className="card-text">This is the first advertisement.</p>
          <p className="card-text" onclick="alert('Contact: contact1@example.com')">Contact: ***</p>
        </div>
        <div className="card-footer text-center">
          <button className="btn btn-info btn-block" onclick="alert('Contact: contact1@example.com')">Details</button>
        </div>
      </div>

      <div className="card mb-4 col-md-4">
        <img className="card-img-top" src="https://via.placeholder.com/150" alt="Ad 2"/>
        <div className="card-body">
          <h5 className="card-title">Ad 2</h5>
          <p className="card-text">This is the second advertisement.</p>
          <p className="card-text" onclick="alert('Contact: contact2@example.com')">Contact: ***</p>
        </div>
        <div className="card-footer text-center">
          <button className="btn btn-info btn-block" onclick="alert('Contact: contact2@example.com')">Details</button>
        </div>
      </div>

      <div className="card mb-4 col-md-4">
        <img className="card-img-top" src="https://via.placeholder.com/150" alt="Ad 3"/>
        <div className="card-body">
          <h5 className="card-title">Ad 3</h5>
          <p className="card-text">This is the third advertisement.</p>
          <p className="card-text" onclick="alert('Contact: contact3@example.com')">Contact: ***</p>
        </div>
        <div className="card-footer text-center">
          <button className="btn btn-info btn-block" onclick="alert('Contact: contact3@example.com')">Details</button>
        </div>
      </div>

      <div className="card mb-4 col-md-4">
        <img className="card-img-top" src="https://via.placeholder.com/150" alt="Ad 4"/>
        <div className="card-body">
          <h5 className="card-title">Ad 4</h5>
          <p className="card-text">This is the fourth advertisement.</p>
          <p className="card-text" onclick="alert('Contact: contact4@example.com')">Contact: ***</p>
        </div>
        <div className="card-footer text-center">
          <button className="btn btn-info btn-block" onclick="alert('Contact: contact4@example.com')">Details</button>
        </div>
      </div>

      <div className="card mb-4 col-md-4">
        <img className="card-img-top" src="https://via.placeholder.com/150" alt="Ad 5"/>
        <div className="card-body">
          <h5 className="card-title">Ad 5</h5>
          <p className="card-text">This is the fifth advertisement.</p>
          <p className="card-text" onclick="alert('Contact: contact5@example.com')">Contact: ***</p>
        </div>
        <div className="card-footer text-center">
          <button className="btn btn-info btn-block" onclick="alert('Contact: contact5@example.com')">Details</button>
        </div>
      </div>

      <div className="card mb-4 col-md-4">
        <img className="card-img-top" src="https://via.placeholder.com/150" alt="Ad 6"/>
        <div className="card-body">
          <h5 className="card-title">Ad 6</h5>
          <p className="card-text">This is the sixth advertisement.</p>
          <p className="card-text" onclick="alert('Contact: contact6@example.com')">Contact: ***</p>
        </div>
        <div className="card-footer text-center">
          <button className="btn btn-info btn-block" onclick="alert('Contact: contact6@example.com')">Details</button>
        </div>
      </div>
    </div>
  )
}

export default Card
