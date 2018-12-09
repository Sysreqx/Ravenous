const apiKey = 'rG6NSID4w6czdFUIAPKLJoLrI61lDD8sV1LYJrh98L9BS-1jrMIj_xYcNK-5zFqcMc-6ZswqmqP7VxelV8UYw9-BPAdWCUg-19ctD-4OkyZkWK6r3oTsIh34S6kMXHYx';

const Yelp = {
	search(term, location, sortBy) {
		return fetch(`https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?${term}=TERM&${location}=LOCATION&${sortBy}=SORT_BY`, {
			headers: {
				Authorization: `Bearer ${apiKey}`
			}
		}).then(response => {
			return response.json();
		}).then(jsonResponse => {
			if (jsonResponse.businesses) {
				return jsonResponse.businesses.map(business => {
					return {
						id: business.id,
						imageSrc: business.imageSrc,
						name: business.name,
						address: business.address,
						city: business.city,
						state: business.state,
						zipCode: business.zipCode,
						category: business.category,
						rating: business.rating,
						reviewCount: business.reviewCount
					}
				});
			}
		});
	}
};

export default Yelp;