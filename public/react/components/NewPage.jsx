// I want to make a new page route that lets the user add a new page
import React, {useState} from 'react'
import {NewPageButton} from "./NewPageButton";
import {JSON} from "sequelize";
import {response} from "express";
import * as console from "node:console";
import error from "eslint-plugin-react/lib/util/error";
import apiURL from '../api'

export const NewPage = ({setIsNewPage}) => {
    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')
    const [authorName, setAuthorName] = useState('')
    const [authorEmail, setAuthorEmail] = useState('')
    const [tags, setTags] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        const newPage = {
            title,
            content,
            name: authorName,
            email: authorEmail,
            tags
        }
        // I want to send the data to the server
        fetch(apiURL + '/wiki', { 
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newPage)
        })
            .then(response => response.json())
            .then(data => console.log(data))
            .catch(error => console.error(error));
        
        setIsNewPage(false)
    }

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="title">Title</label>
            <input type="text" id="title" name="title" value={title} onChange={(e) => setTitle(e.target.value)}/>

            <label htmlFor="content">Content</label>
            <textarea id="content" name="content" value={content} onChange={(e) => setContent(e.target.value)}/>

            <label htmlFor="authorName">Author Name</label>
            <input type="text" id="authorName" name="authorName" value={authorName} onChange={(e) => setAuthorName(e.target.value)}/>

            <label htmlFor="authorEmail">Author Email</label>
            <input type="email" id="authorEmail" name="authorEmail" value={authorEmail} onChange={(e) => setAuthorEmail(e.target.value)}/>

            <label htmlFor="tags">Tags</label>
            <input type="text" id="tags" name="tags" value={tags} onChange={(e) => setTags(e.target.value)}/>

            <button type="submit">Add Page</button>
        </form>
    );
}