import { useState, useEffect, useReducer } from 'react'
import { db } from '../firebase/cofig'
import { collection, addDoc, Timestamp } from 'firebase/firestore'

const initialState = {
    loading: null,
    error: null
}

const insertReducer = (state, action) => {
    switch (action.type) {
        case 'LOADING':
            return { loading: true, error: null }
        case 'INSERTED_DOC':
            return { loading: false, error: null }
        case 'ERROR':
            return { loading: false, error: action.payload}
        default:
            return state;
    }
}

export const useInsertDocument = (docCollection) => {
    const [response, dispatch] = useReducer(insertReducer,  initialState)

    // deal with memory leak
    const [cancelled, setCanseled] = useState(false)
    const checkCanselBeforeDispatch = (action) => {
        if (!cancelled) {
            dispatch(action)
        }
    }

    const insertDocument = async(document) => {
        checkCanselBeforeDispatch({
            type: 'LOADING'   
        })

        try {
            const newDocument = {...document, createAt: Timestamp.now()}
            const insertedDocument = await addDoc(
                collection(db, docCollection),
                newDocument
            )

            checkCanselBeforeDispatch({
                type: 'INSERTED_DOC',   
                payload: insertDocument
            })

        } catch (error) {
            checkCanselBeforeDispatch({
                type: 'ERROR',   
                payload: error.message
            })
        }
    }

    useEffect(() => {
        return () => setCanseled(true)
    }, []) 

    return {insertDocument, response}
}