import { Button } from 'react-bootstrap';

export default function ContactAdder({ forClick }) {
  return (
    <div>
      <p>Add contacts</p>
      <Button
        variant="outline-dark"
        type="button"
        title="Add contact"
        onClick={forClick}
        aria-label="Add contact"
      >
        Click me
      </Button>
    </div>
  );
}
