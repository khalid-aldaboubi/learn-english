import React, { useEffect, useState } from "react";
// import jwt from "jsonwebtoken";

// const METABASE_SITE_URL = "http://213.199.37.28"; // Replace with your Metabase URL
// const METABASE_SECRET_KEY = "0098a3057c39cc154b3fad7c381003112ecdf0b610fc126e9a13567d0b22e62c"; // Replace with your Metabase secret key

const App = () => {
  const [iframeUrl, setIframeUrl] = useState("");

  useEffect(() => {
  

  }, []);

  return (
    <div>
      { (
        <iframe
          src="http://213.199.37.28/embed/dashboard/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyZXNvdXJjZSI6eyJkYXNoYm9hcmQiOjJ9LCJwYXJhbXMiOnt9LCJleHAiOjE3MzIzOTcyNTAsImlhdCI6MTczMjM5NjY0OX0.QcagVySkXWH9IRDp78-rHS0-AQjWy6YgQbTLBNUQ4OU#bordered=true&titled=true"
          frameBorder="0"
          width="100%"
          height="600"
          allowTransparency
        ></iframe>
      )}
    </div>
  );
};

export default App;
