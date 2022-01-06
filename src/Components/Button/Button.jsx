import PropTypes from 'prop-types';
import { Button } from 'react-bootstrap';

export default function Buttonn({ type, title, onClick, disabled, children }) {
  return (
    <Button
      variant="outline-dark"
      type={type}
      title={title}
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </Button>
  );
}

Button.defaultProps = {
  title: null,
  onClick: () => null,
  disabled: false,
  children: null,
};

Button.propTypes = {
  type: PropTypes.oneOf(['button', 'submit', 'reset']).isRequired,
  title: PropTypes.string,
  onClick: PropTypes.func,
  disabled: PropTypes.bool,
  children: PropTypes.node,
};
