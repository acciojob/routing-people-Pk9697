import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

function About() {
	const { id } = useParams()
	const [user, setUser] = useState({})
	const [loading, setLoading] = useState(true)

	useEffect(() => {
		setLoading(true)
		fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
			.then((response) => response.json())
			.then((data) => setUser(data))
			.finally(() => setLoading(false))
	}, [id])

	if (loading) {
		return (
			<div>
				<p>Loading...</p>
			</div>
		)
	}

	return (
		<div>
			<h1>User Details</h1>
			<p>
				<strong>Name</strong>: {user.name}
			</p>
			<p>
				<strong>Username</strong>: {user.username}
			</p>
			<p>
				<strong>Email</strong>: {user.email}
			</p>
			<p>
				<strong>Phone</strong>: {user.phone}
			</p>
			<p>
				<strong>Website</strong>: {user.website}
			</p>
		</div>
	)
}

export default About
