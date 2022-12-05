import React, { useState, useEffect } from 'react';
import { gql, useQuery, useMutation } from '@apollo/client';

function Page() {

    const [name, setName] = useState("")

    const query = gql`
    query {
        CurrentUser {
            firstName
            lastName
            email
        }
    }`

    const { data, error } = useQuery(query);

    useEffect(() => {
        if (data) {
            setName(data.CurrentUser.firstName)
        }
    })

    return (
        <div>
            <h1>Your name is: {name}</h1>
        </div>
    );
}


export { Page };