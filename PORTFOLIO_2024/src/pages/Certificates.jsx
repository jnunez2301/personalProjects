import React, { useRef, useState } from 'react';
import { certificates } from '../helpers';

export const Certificates = () => {
  const certificatesContainerRef = useRef(null);
  const [selectedCertificate, setSelectedCertificate] = useState(null);

  const handleScrollLeft = () => {
    certificatesContainerRef.current.scrollLeft -= 300;
  };

  const handleScrollRight = () => {
    certificatesContainerRef.current.scrollLeft += 300;
  };

  const handleCertificateClick = (certificate) => {
    setSelectedCertificate(certificate);
  };

  const handleCloseModal = () => {
    setSelectedCertificate(null);
  };
  
  return (
    <section className="certificates" id='certificates'>
      <h2 style={{ borderBottom: '1px solid rgba(0,0,0,0.1)', padding: '.7rem 0' }}>Certificates</h2>
      <div className="slider-container">
        <ul className="certificates-container" ref={certificatesContainerRef}>
          {certificates && certificates.map((certificate) => (
            <li key={certificate.id} onClick={() => handleCertificateClick(certificate)}>
              <img src={certificate.url} alt={certificate.name} className="certificate-img" />
              <p>{certificate.name}</p>
            </li>
          ))}
        </ul>
        <img src='/navigation/arrow-left.svg' className="slider-button-back" onClick={handleScrollLeft} />
        <img src='/navigation/arrow-right.svg' className="slider-button-next" onClick={handleScrollRight} />
      </div>
      {selectedCertificate && (
        <>
          <div className="modal-overlay" onClick={handleCloseModal}></div>
          <div className="modal">
            <img src={selectedCertificate.url} alt={selectedCertificate.name} />
            <button onClick={handleCloseModal}>Close</button>
          </div>
        </>
      )}
    </section>
  );
};
