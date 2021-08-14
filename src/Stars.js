import React from 'react';
import shortid from 'shortid';
import PropTypes from 'prop-types';
import Star from './Star';

const ratingCount = [0, 1, 2, 3, 4, 5];

function Stars({ count }) {
  return ratingCount.includes(count) && (
    <ul className="card-body-stars u-clearfix">
      {
        [...new Array(count)].map(() => (<Star key={shortid.generate()} />))
      }
    </ul>
  );
}

Stars.defaultProps = {
  count: 0,
};

Stars.propTypes = {
  count: PropTypes.oneOf(ratingCount),
};

export default Stars;
