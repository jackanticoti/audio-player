import React, { useState, useEffect } from 'react';
import { gql, useQuery, useMutation } from '@apollo/client';



function Page() {

    const [title, setTitle] = useState("");
    const [body, setBody] = useState("");
    const [url, setUrl] = useState("");

    const page_query = gql`
    query Pages($identifiers: [String!]!) {
        Pages(identifiers: $identifiers) {
            ... on TextPage {
                title
                body
                accessibilityAudioAsset
                accessibilityAudioAssetUrl
            }
        }
    }`

    const { data: page_data, error: page_error } = useQuery(page_query, {
        variables: { identifiers: ["641a8013-4213-49be-9783-60ccff32e85a"] }
    });
    

    let audioPlayer;

    if (page_data) {
        useEffect(() => {
            setTitle(page_data.Pages[0].title)
            setBody(page_data.Pages[0].body)
        }, [])
        audioPlayer = <audio controls>
            <source src={page_data.Pages[0].accessibilityAudioAssetUrl} type="audio/mpeg"/>
            Your browser does not support the audio element.
        </audio>
    }


    return (
        <div>
            <h1>{title}</h1>
            <h1>{body}</h1>
            { audioPlayer }
            <h1
                className='bg-gray-400 rounded-lg w-32 mt-8 text-center hover:bg-gray-300 border-2 cursor-pointer text-2xl'
                onClick={() => {
                    location.href = "https://anticoregular.thoughtindustries.com/learn/course/history-of-philly/sports/eagles"
                }}
                >Next Page</h1>
            
        </div>
    );
}


export { Page };