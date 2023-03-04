import React, { useEffect, useState } from 'react';
import { Amplify, Auth, DataStore, Storage } from 'aws-amplify';
import { Button, Grid, TextField, withAuthenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';

import awsExports from './aws-exports';
import { ProductCreateForm, TodoCreateForm, TodoUpdateForm } from './ui-components';
import { Todo, Product } from './models';
import ProductTile from './Pages/Products/ProductTile';
Amplify.configure(awsExports);


function Edit ({ signOut, user }) {
    const initialFormState = {
        name: '',
        description: '',
        ingredients: '',
        bakingDay: '',
        typeOfCooking: '',
        shelfLife: '',
        img1: '',
        img2: '',
    };

    const [todoRecord, setTodoRecord] = useState([]);

    const [formData, setFormData] = useState(initialFormState);

    async function getData () {
        const response = await DataStore.query(Product);
        var result = JSON.stringify(response);
        result = JSON.parse(result);
        console.log(response);
        await Promise.all(result.map(async item => {
            if (item.img1) {
                const img1 = await Storage.get(item.img1);
                item.img1 = img1;
            }
            if (item.img2) {
                const img2 = await Storage.get(item.img2);
                item.img2 = img2;
            }
            return item;
        }));
        setTodoRecord(result);
    };

    async function createData () {
        if (!formData.name || !formData.description) return;
        const product = new Product(formData);
        const Promise = await DataStore.save(product);
        setTodoRecord([...todoRecord, formData]);
        setFormData(initialFormState);
    }

    async function onChange (e, field) {
        if (!e.target.files[0]) return;
        const file = e.target.files[0];
        switch (field) {
            case "img1":
                setFormData({ ...formData, img1: file.name });
                break;
            case "img2":
                setFormData({ ...formData, img2: file.name });
                break;
            default:
                break;
        }
        await Storage.put(file.name, file);
        getData();
    }

    useEffect(() => {
        getData();
    }, []);

    return (
        <>
            {user && <EditProducts user={user} signOut={signOut} />}
            {user && <>


                <hr />
                <Grid>

                    <TextField
                        onChange={e => setFormData({ ...formData, 'name': e.target.value })}
                        placeholder="Product Name"
                        value={formData.name}
                    />
                    <TextField
                        onChange={e => setFormData({ ...formData, 'description': e.target.value })}
                        placeholder="Description"
                        value={formData.description}
                    />
                    <TextField
                        onChange={e => setFormData({ ...formData, 'ingredients': e.target.value })}
                        placeholder="Ingredients"
                        value={formData.ingredients}
                    />
                    <TextField
                        onChange={e => setFormData({ ...formData, 'bakingDay': e.target.value })}
                        placeholder="Baking Day"
                        value={formData.bakingDay}
                    />
                    <TextField
                        onChange={e => setFormData({ ...formData, 'typeOfCooking': e.target.value })}
                        placeholder="Type Of Cooking"
                        value={formData.typeOfCooking}
                    />
                    <TextField
                        onChange={e => setFormData({ ...formData, 'shelfLife': e.target.value })}
                        placeholder="Shelf Life"
                        value={formData.shelfLife}
                    />
                    <TextField type='file' onChange={(e) => onChange(e, "img1")} placeholder="Primary Image" />
                    <TextField type='file' onChange={(e) => onChange(e, "img2")} placeholder="Primary Image" />

                    <Button onClick={createData}>Create Note</Button>
                </Grid>
            </>}

            {todoRecord.map((e) => <ProductTile product={e} getData={getData} user={user} formData={formData} setFormData={setFormData} />)}
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
//export default Edit;