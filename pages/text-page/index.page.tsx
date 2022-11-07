import React, { useState, useEffect } from 'react';
import { gql, useQuery, useMutation } from '@apollo/client';



function Page() {

    const page_query = gql`
    query Pages($identifiers: [String!]!) {
        Pages(identifiers: $identifiers) {
            ... on TextPage {
                title
                body
                accessibilityAudioAssetP
            }
        }
    }`

    const { data: page_data, error: page_error } = useQuery(page_query, {
        variables: { identifiers: ["b564574c-947c-492c-9823-e94447c35c0b"] }
    });


    return (
        <div>
            <h1>Hey!</h1>
        </div>
    );
}


export { Page };