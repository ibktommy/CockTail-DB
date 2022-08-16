import React from 'react'
import SearchForm from "../components/SearchForm";
import CockTailList from "../components/CockTailList";
import Loading from "../components/Loading";

const Home = () => {
	return (
		<main>
			<SearchForm />
			<CockTailList />
			{/* <Loading /> */}
		</main>
	);
};

export default Home