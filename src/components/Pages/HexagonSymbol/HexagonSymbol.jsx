

import PropTypes from 'prop-types';
import './HexagonSymbol.css';

const HexagonSymbol = ({ color = 'blue', size = 135, rotation = 0 }) => {
  const style = {
    color: color,
    fontSize: `${size}px`,
    transform: `rotate(${rotation}deg)`,
  };

  return <span className="hexagon-symbol" style={style}>&#x2B22;</span>;
};

// Define PropTypes for validation
HexagonSymbol.propTypes = {
  color: PropTypes.string,
  size: PropTypes.number,
  rotation: PropTypes.number,
};

export default HexagonSymbol;