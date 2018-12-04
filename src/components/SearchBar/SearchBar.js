import React from 'react';
import './SearchBar.css';

sortByOptions {
	'Best Match': 'best_match',
	'Highest Rated': 'rating',
	'Most Reviewed': 'review_count'
}

/*
Object.keys()
Returns an array containing the names of all of the given object's own enumerable string properties.*/
class SearchBar extends React.Component {
	renderSortByOptions() {
		return Object.keys(sortByOptions).map(sortByOption => {
			let sortByOptionValue = sortByOptions[sortByOption];
			return <li key={sortByOptionValue}>{sortByOption}</li>;
		});

	}
}