import React from 'react'
import {Page} from './Page'
import {NewPage} from './NewPage'

export const PagesList = ({pages}) => {
    return <>
        {
            pages.map((page, idx) => {
                return <Page page={page} key={idx}/>
            })
        }
    </> // I want to add a new page button here
}