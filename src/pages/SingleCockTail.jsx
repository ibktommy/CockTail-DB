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
	
	return <div>{id}</div>;
};

export default SingleCockTail;
