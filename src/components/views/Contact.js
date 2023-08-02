import React, { useEffect, useState } from 'react'
import LoaderComponent from '../partials/Loader';

import './Contact.css'
function Contact() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulating content loading time
    setTimeout(() => {
      setIsLoading(false);
    }, 600);
  }, []);

  return (
    <>
      {isLoading ? (
        <LoaderComponent />
      ) : (
        <main className="main-contact-container">
          <h1>Contact page</h1>
        </main>
      )}
    </>
  )
}

export default Contact
