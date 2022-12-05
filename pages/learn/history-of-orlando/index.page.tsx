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
        variables: { identifiers: ["6a653ef2-7229-4b64-8d66-305c70841e3f"] }
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
            <h1>Hi</h1>
            { audioPlayer }
        </div>
    );
}


export { Page };