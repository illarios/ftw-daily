import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from '../../util/reactIntl';
import classNames from 'classnames';
import { lazyLoadWithDimensions } from '../../util/contextHelpers';

import { NamedLink } from '../../components';

import css from './SectionSkippers.module.css';

import manosSkipperImage from './images/manos-skipper.jpg';
import manolisSkipperImage from './images/manolis-skipper.jpg';
import georgeSkipperImage from './images/george-skipper.jpg';

class LocationImage extends Component {
  render() {
    const { alt, ...rest } = this.props;
    return <img alt={alt} {...rest} />;
  }
}
const LazyImage = lazyLoadWithDimensions(LocationImage);

const locationLink = (name, image, searchQuery) => {
  const nameText = <span className={css.locationName}>{name}</span>;
  return (
    <NamedLink name="SearchPage" to={{ search: searchQuery }} className={css.location}>
      <div className={css.imageWrapper}>
        <div className={css.aspectWrapper}>
          <LazyImage src={image} alt={name} className={css.locationImage} />
        </div>
      </div>
      <div className={css.linkText}>
        <FormattedMessage
          id="SectionSkippers.listingsInLocation"
          values={{ location: nameText }}
        />
      </div>
    </NamedLink>
  );
};

const SectionSkippers = props => {
  const { rootClassName, className } = props;

  const classes = classNames(rootClassName || css.root, className);

  return (
    <div className={classes}>
      <div className={css.title}>
        <FormattedMessage id="SectionSkippers.title" />
      </div>
      <div className={css.locations}>
        {locationLink(
          'Manos',
          manosSkipperImage,
        '?address=Cyclades%2C Aegean Sea&bounds=39.31508995%2C26.67711177%2C35.49018258%2C23.32310889'
	)}
        {locationLink(
          'Manolis',
          manolisSkipperImage,
        '?address=Ionian Islands%2C Ionian Sea&bounds=40.87942188%2C22.29266022%2C37.13801836%2C18.93865734'
	)}
        {locationLink(
          'George',
          georgeSkipperImage,
        'address=Dodecanese%2C Aegean Sea&bounds=37.25858612%2C28.34403317%2C35.31435947%2C26.66438654'
	)}
      </div>
    </div>
  );
};

SectionSkippers.defaultProps = { rootClassName: null, className: null };

const { string } = PropTypes;

SectionSkippers.propTypes = {
  rootClassName: string,
  className: string,
};

export default SectionSkippers;
