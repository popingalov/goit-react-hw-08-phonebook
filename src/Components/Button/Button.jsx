import PropTypes from 'prop-types';

export default function Button({ type, title, onClick, disabled, children }) {
  return (
    <button type={type} title={title} disabled={disabled} onClick={onClick}>
      {children}
    </button>
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
