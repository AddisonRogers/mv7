import React, {useState, useEffect} from 'react'
import {PagesList} from './PagesList'
import apiURL from '../api'
import {NewPageButton} from "./NewPageButton";
import {isElementOfType} from "react-dom/test-utils";
import {NewPage} from "./NewPage";

export const App = () => {
    const [pages, setPages] = useState([])
    const [isNewPage, setIsNewPage] = useState(false)
    
    async function fetchPages() { // Get data from the server defined in .../server
        try {
            const response = await fetch(`${apiURL}/wiki`)
            const pagesData = await response.json()
            setPages(pagesData)
        } catch (err) {
            console.log('Oh no an error! ', err)
        }
    }

    useEffect(() => {
        fetchPages()
    }, [])

    if (isNewPage) {
        return <NewPage setIsNewPage={setIsNewPage}/>
    }
    
    return (
        <main>
            <h1>WikiVerse</h1>
            <h2>An interesting 📚</h2>
            <PagesList pages={pages}/>
            <NewPageButton isNewPage={isNewPage} setIsNewPage={setIsNewPage}/>
        </main>
    )
}