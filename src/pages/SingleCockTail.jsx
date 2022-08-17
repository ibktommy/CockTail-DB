import React, { useEffect, useState } from "react";
import Loading from "../components/Loading";
import { Link, useParams } from "react-router-dom";

// API URL
const URL = "https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=";

const SingleCockTail = () => {
	const { id } = useParams();
	// Setting Component States
	const [isLoading, setIsLoading] = useState(false);
	const [cockTailDetail, setCockTailDetail] = useState(null);

	// Function to Fetch Data
	async function fetchDataDetail() {
		// Show Loader before when fetching Data
		setIsLoading(true);
		// Fetching Data
		try {
			const response = await fetch(`${URL}${id}`);
			const responseData = await response.json();
			console.log(responseData);

			if (responseData.drinks) {
				const {
					strDrink: name,
					strDrinkThumb: image,
					strAlcoholic: info,
					strCategory: category,
					strGlass: glass,
					strInstructions: instructions,
					strIngredient1,
					strIngredient2,
					strIngredient3,
					strIngredient4,
					strIngredient5,
				} = responseData.drinks[0];
				// Combine All Ingredient Data into a Single Array
				const ingredients = [
					strIngredient1,
					strIngredient2,
					strIngredient3,
					strIngredient4,
					strIngredient5,
				];
				// Set the Data Object to the cockTailDetail-state
				const cockTailItem = {
					name,
					image,
					info,
					category,
					glass,
					instructions,
					ingredients,
				};

				setCockTailDetail(cockTailItem);
			} else {
				setCockTailDetail(null);
			}
			setIsLoading(false);
		} catch (error) {
			setIsLoading(false);
			throw new Error(`${error.message}`);
		}
	}

	// UseEffect to Render Data
	useEffect(() => {
		fetchDataDetail();
	}, [id]);

	if (isLoading) {
		return <Loading />;
	}

	if (!cockTailDetail) {
		return (
			<h2 className="section-title">
				Data-Error: CockTail Detail Cannot Be Displayed
			</h2>
		);
	}

	// Destructuring values from the cockTailDetail-object-state
	const { name, image, info, category, glass, instructions, ingredients } =
		cockTailDetail;
	
	return (
		<section className="section cocktail-section">
			<Link to='/' className="btn btn-primary">Back Home</Link>
			<h2 className="section-title">{name}</h2>
			<div className="drink">
				<img src={image} alt={name} />
				<div className="drink-info">
					<p>
						<span className="drink-data">
							name : 
						</span>
						{name}
					</p>
					<p>
						<span className="drink-data">
							category : 
						</span>
						{category}
					</p>
					<p>
						<span className="drink-data">
							info : 
						</span>
						{info}
					</p>
					<p>
						<span className="drink-data">
							glass : 
						</span>
						{glass}
					</p>
					<p>
						<span className="drink-data">
							instructions : 
						</span>
						{instructions}
					</p>
					<p>
						<span className="drink-data">
							ingredients : 
						</span>
						{ingredients.map((item, index) => {
							return item ? <span key={index}>{item}</span> : null
						})}
					</p>
				</div>
			</div>
		</section>
	);
};

export default SingleCockTail;
