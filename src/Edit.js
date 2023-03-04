import React, { useEffect, useState } from 'react';
import { Amplify, Auth, DataStore } from 'aws-amplify';
import { withAuthenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';

import awsExports from './aws-exports';
import { ProductCreateForm, TodoCreateForm, TodoUpdateForm } from './ui-components';
import { Todo, Product } from './models';
import ProductTile from './Pages/Products/ProductTile';
Amplify.configure(awsExports);


function Edit ({ signOut, user }) {

    const [todoRecord, setTodoRecord] = useState([]);

    async function getData () {
        const response = await DataStore.query(Product);
        //return response;
        console.log(response);
        setTodoRecord(response);
    };

    useEffect(() => {
        getData();
    }, []);

    return (
        <>
            {user && <EditProducts user={user} signOut={signOut} />}

            {todoRecord.map((e) => <ProductTile product={e} user={user} />)}
        </>
    );
}

function EditProducts (props) {
    return <>
        <h1> Hello {props.user.username}</h1>
        <button onClick={props.signOut}>Sign out</button>
        <ProductCreateForm />
    </>;
}


export default withAuthenticator(Edit);