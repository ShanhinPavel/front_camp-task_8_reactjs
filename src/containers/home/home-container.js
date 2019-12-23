import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import styles from './home-container.module.css';
import {
  FilmsCardsSummary,
  FilmInfoCardsSection,
  Footer,
  TabButtonSection,
  TabButtonSectionTitles,
} from '../../components/';
import { Header } from './header';
import { store } from '../../store';
import { searchBy, sortBy } from '../../services';
import { fetchFilms } from '../../actions';

class HomeContainer extends React.Component {
  componentDidMount() {
    store.dispatch(
      fetchFilms({
        searchBy: searchBy.TITLE,
        sortBy: sortBy.RATING,
        search: '',
      }),
    );
  }

  render() {
    const { error, isLoading } = this.props;

    if (error) return <div>Error</div>;

    if (isLoading) return <div>Spinner</div>;

    return (
      <div className={styles.container}>
        <Header />
        <div className={styles.filmsCardsSortingSummary}>
          <FilmsCardsSummary />
          <TabButtonSection
            tabButtonsTitles={[TabButtonSectionTitles.RAITING, TabButtonSectionTitles.RELEASE_DATE]}
            sectionTitle={TabButtonSectionTitles.SORT_BY}
          />
        </div>
        <FilmInfoCardsSection />
        <Footer />
      </div>
    );
  }
}

HomeContainer.propTypes = {
  idLoading: PropTypes.bool,
  error: PropTypes.bool,
};

const mapStateToProps = (state) => {
  return {
    isLoading: state.isLoading,
    error: state.error,
  };
};

export const homeContainer = connect(mapStateToProps)(HomeContainer);
