import React, { useState, useEffect } from 'react';
import { gql, useQuery, useMutation } from '@apollo/client';

function Page() {

    const query = gql`
    query {
        CurrentUser {
            firstName
            lastName
            email
        }
    }`

    const { data, error } = useQuery(query);

    let hello

    if (data) {
        hello = <h1>Hello User</h1>
    } else {
        hello = <h1>Hello World</h1>
    }

    return (
        <div>
            { hello }
        </div>
    );
}


export { Page };