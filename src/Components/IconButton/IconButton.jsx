import PropTypes from 'prop-types';
import s from './IconButton.module.css';

const IconButton = ({ children, title, onClick, ...allyProps }) => (
  <button
    type="button"
    title={title}
    className={s.btn}
    onClick={onClick}
    {...allyProps}
  >
    {children}
  </button>
);

IconButton.defaultProps = {
  children: null,
  title: null,
  onClick: () => null,
};

IconButton.propTypes = {
  children: PropTypes.node,
  title: PropTypes.string,
  onClick: PropTypes.func,
  'aria-label': PropTypes.string.isRequired,
};

export default IconButton;
