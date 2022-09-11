import React from 'react';
import { Button, Spinner } from 'react-bootstrap';

const Loading = () => {
  return (
    <div>
        <Button variant="dark" disabled>
            <Spinner
                as="span"
                variant="light"
                size="sm"
                role="status"
                aria-hidden="true"
                animation="border"/>
                Loading...
        </Button>
    </div>
  )
}

export default Loading;