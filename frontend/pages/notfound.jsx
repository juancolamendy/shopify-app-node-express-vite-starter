import { Card, EmptyState, Page } from "@shopify/polaris";

import notFoundImage from "../assets/not-found.svg";

const NotFound = () => {
  return (
    <Page>
      <Card>
        <Card.Section>
          <EmptyState
            heading="There is no page at this address"
            image={notFoundImage}
          >
            <p>
              Check the URL and try again, or use the search bar to find what
              you need.
            </p>
          </EmptyState>
        </Card.Section>
      </Card>
    </Page>
  );
}

export default NotFound;
