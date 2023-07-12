import { useState, useEffect } from "react";
import { db } from '../firebase/cofig'
import { collection, query, orderBy, onSnapshot, where } from "firebase/firestore";

export const useFatchDocuments = (docCollection, search = null, uid = null) => {
    const [documents, setDocuments] = useState(null)
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(null)

    // deal with memory leak
    const [cancelled, setCanselled] = useState(false)
    
    useEffect(() => {
        async function loadData(){
            alert(`This cancelled: ${cancelled}`)
            if (cancelled) return

            setLoading(true)
            const collectionRef = await collection(db, docCollection)

            try {
                let q
                //busca

                //dashboard
                //home
                q = await query(collectionRef, orderBy('createdAt', 'desc'))
                await onSnapshot(q, (querySnapshot) => {
                    setDocuments(
                        querySnapshot.docs.map((doc) => ({
                            id: doc.id,
                            ...doc.data()
                        }))
                    )
                })
                
                console.log(`Data documents: ${documents}`)
                setLoading(false)

            } catch (error) {
                console.log(error)
                setError(error.message)

                setLoading(false)
            }

        }

        loadData()
    }, [docCollection, search, uid, cancelled])

    useEffect(() => {
        return () => setCanselled(true)
    }, [])

    return { documents, loading, error }
}