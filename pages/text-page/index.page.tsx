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
        variables: { identifiers: ["b564574c-947c-492c-9823-e94447c35c0b"] }
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
            
        </div>
    );
}


export { Page };