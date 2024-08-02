import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function Card() {
  const handleContactClick = (email) => {
    alert(`Contact: ${email}`);
  };

  const ads = [
    { title: "Ad 1", text: "This is the first advertisement.", img: "https://via.placeholder.com/150", contact: "contact1@example.com" },
    { title: "Ad 2", text: "This is the second advertisement.", img: "https://via.placeholder.com/150", contact: "contact2@example.com" },
    { title: "Ad 3", text: "This is the third advertisement.", img: "https://via.placeholder.com/150", contact: "contact3@example.com" },
    { title: "Ad 4", text: "This is the fourth advertisement.", img: "https://via.placeholder.com/150", contact: "contact4@example.com" },
    { title: "Ad 5", text: "This is the fifth advertisement.", img: "https://via.placeholder.com/150", contact: "contact5@example.com" },
    { title: "Ad 6", text: "This is the sixth advertisement.", img: "https://via.placeholder.com/150", contact: "contact6@example.com" }
  ];

  return (
    <div className="container">
      <div className="row">
        {ads.map((ad, index) => (
          <div className="col-md-4 mb-4" key={index}>
            <div className="card">
              <img className="card-img-top" src={ad.img} alt={ad.title} />
              <div className="card-body">
                <h5 className="card-title">{ad.title}</h5>
                <p className="card-text">{ad.text}</p>
                <p className="card-text" onClick={() => handleContactClick(ad.contact)}>Contact: ***</p>
              </div>
              <div className="card-footer text-center">
                <button
                  className="btn btn-info btn-block"
                  onClick={() => handleContactClick(ad.contact)}
                >
                  Details
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Card;
