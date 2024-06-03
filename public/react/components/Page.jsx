import React, { useState } from 'react'

export const Page = ({ page }) => {
    const [showDetails, setShowDetails] = useState(false);

    const handleClick = () => {
        setShowDetails(!showDetails);
    }

    const handleDelete = () => {
        fetch(`${apiUrl}/wiki/${page.id}`, { // replace with the right API URL
            method: 'DELETE',
        })
            .then(response => response.json())
            .then(() => console.log('Page deleted.'))
            .catch(error => console.error('Error:', error));
    }

    return (
        <div>
            <h3 onClick={handleClick}>{page.title}</h3>
            <button onClick={handleDelete}>Delete Page</button>
            {
                showDetails &&
                <div>
                    <p>{page.author}</p>
                    <p>{page.content}</p>
                    <p>{page.tags}</p>
                    <p>{page.date}</p>
                </div>
            }
        </div>
    )
}