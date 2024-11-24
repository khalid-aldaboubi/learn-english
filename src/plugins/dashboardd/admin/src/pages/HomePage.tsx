import { Main } from '@strapi/design-system';
import { useIntl } from 'react-intl';
import jwt from 'jsonwebtoken'; // Ensure proper typings are installed

const HomePage: React.FC = () => {
  const iframeUrl = "http://213.199.37.28/metabase/public/dashboard/2dbaa1e1-a3c9-4a51-8325-546d7e0cc1ac";

  return (
    <Main
      style={{
        display: 'flex',
        flexDirection: 'column',
        height: '100vh', // Full viewport height
        margin: 0, // Ensure no extra margins
      }}
    >
      <iframe
        src={iframeUrl}
        frameBorder="0"
        width="100%"
        height="100%" // Full height within its container
        allowTransparency
        title="Metabase Dashboard"
        style={{
          flex: 1, // Ensures it stretches to fill the remaining space
          border: 'none', // Removes the border
        }}
      ></iframe>
    </Main>
  );
};

export { HomePage };
