import React, { useState, useEffect } from 'react';
import { gql, useQuery, useMutation } from '@apollo/client';
import NavBar from '../../../components/Navigation/NavBar';

function Page() {


    return (
        <div>
            <NavBar/>
            <h1>This is the history of Orlando course!</h1>
            <h1
                className='bg-gray-400 rounded-lg w-32 mt-8 text-center hover:bg-gray-300 border-2 cursor-pointer text-2xl'
                onClick={() => {
                    location.href = "https://anticoregular.thoughtindustries.com/learn/history-of-orlando"
                }}
                >Click me to start the course</h1>
        </div>
    );
}


export { Page };