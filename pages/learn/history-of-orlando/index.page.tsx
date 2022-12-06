import React, { useState, useEffect } from 'react';
import { gql, useQuery, useMutation } from '@apollo/client';
import NavBar from '../../../components/Navigation/NavBar';

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
            <NavBar/>
            <div className='px-32'>
                <div className='flex flex-row justify-between mt-20'>
                    <h1 className='text-5xl'>{title}</h1>
                    { audioPlayer }
                </div>
                <h1 className='mt-10 text-xl'>{body.replace(/<[^>]+>/g, '')}</h1>
                <div className='flex flex-row justify-end mt-10'>
                    <h1
                        onClick={() => {
                            location.href = "https://anticoregular.thoughtindustries.com/dashboard"
                        }}
                        className='bg-gray-400 rounded-lg w-64 mt-8 text-center hover:bg-gray-300 border-2 cursor-pointer text-2xl'>
                            Complete course
                    </h1>
                </div>
            </div>
        </div>
    );
}


export { Page };