const iconStyles = {
  marginTop: 20,
  marginBottom: 20,
};

export default function ContactAdder({ forClick }) {
  return (
    <div>
      <p>Add contacts</p>
      <button
        type="button"
        title="Add contact"
        style={iconStyles}
        onClick={forClick}
        aria-label="Add contact"
      >
        Click me
      </button>
    </div>
  );
}
