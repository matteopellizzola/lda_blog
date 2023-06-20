import React, { useEffect, useState } from 'react';
import "./edit.scss";
import api from "../../services/api";

function Edit (props) {
    const initialFormState = {
        name: '',
        description: '',
        ingredients: '',
        bakingDay: '',
        typeOfCooking: '',
        shelfLife: '',
        img1: '',
        img2: '',
        online: true
    };
    const apiUrl = process.env.REACT_APP_API_PUBLIC_URL || "http://localhost:5050";

    const [formData, setFormData] = useState(initialFormState);

    async function createData () {
        if (!formData.name || !formData.description) return;

        api.products.addProduct(formData).then((data) => {
            if (data.acknowledged) {
                console.log('done');
                setFormData(initialFormState);
                console.log(JSON.stringify(formData));
            }
        });
    }

    async function deleteProduct () {
        api.products.removeProduct('6491b926e0326cd3ff163183').then((data) => {
            console.log(data);
            //setProducts(data);
        });
    }

    // async function onChange (e, field) {
    //     if (!e.target.files[0]) return;
    //     const file = e.target.files[0];
    //     switch (field) {
    //         case "img1":
    //             setFormData({ ...formData, img1: file.name });
    //             break;
    //         case "img2":
    //             setFormData({ ...formData, img2: file.name });
    //             break;
    //         default:
    //             break;
    //     }
    //     await Storage.put(file.name, file);
    //     getData();
    // }

    // useEffect(() => {
    //     getData();
    // }, []);

    return (
        <>
            <hr />
            <div className="form">
                <h2>Insert new product</h2>
                <div className='form-row'>
                    <label htmlFor="#productName">Product Name</label>
                    <input type='text' id='productName'
                        onChange={e => setFormData({ ...formData, 'name': e.target.value })}
                        placeholder="Product Name"
                        value={formData.name}
                    />
                </div>
                <div className='form-row mb-2'>
                    <input type='checkbox' id='onlineFlag' className='mx-2'
                        onChange={e => setFormData({ ...formData, 'online': e.target.checked })}
                        placeholder="online flag"
                        value={formData.online}
                    />
                    <label htmlFor="#onlineFlag">Online Product
                    </label>
                </div>
                <div className='form-row d-flex'>
                    <div className='w-100'>
                        <label htmlFor="#description">Decscription</label>
                        <textarea id='description'
                            onChange={e => {
                                setFormData({ ...formData, 'description': e.target.value });
                                console.log(formData.description);
                            }
                            }
                            placeholder="Description"
                            value={formData.description}
                        />
                    </div>
                </div>
                <div className='form-row d-flex'>
                    <div className='w-100'>
                        <label htmlFor="#ingredients">Ingredients</label>
                        <textarea id='ingredients'
                            onChange={e => setFormData({ ...formData, 'ingredients': e.target.value })}
                            placeholder="Ingredients"
                            value={formData.ingredients}
                        />
                    </div>
                </div>
                <div className='form-row d-flex justify-content-between'>
                    <div className='three-input'>
                        <label htmlFor="#bakingDay">Baking Day</label>
                        <input id='bakingDay'
                            type='text'
                            onChange={e => setFormData({ ...formData, 'bakingDay': e.target.value })}
                            placeholder="Baking Day"
                            value={formData.bakingDay}
                        />
                    </div>
                    <div className='three-input'>
                        <label htmlFor="#typeOfCooking">Type of Cooking</label>
                        <input id='typeOfCooking'
                            type='text'
                            onChange={e => setFormData({ ...formData, 'typeOfCooking': e.target.value })}
                            placeholder="Type Of Cooking"
                            value={formData.typeOfCooking}
                        />
                    </div>
                    <div className='three-input'>
                        <label htmlFor="#shelfLife">Shelf Life</label>
                        <input id='shelfLife'
                            type='text'
                            onChange={e => setFormData({ ...formData, 'shelfLife': e.target.value })}
                            placeholder="Shelf Life"
                            value={formData.shelfLife}
                        />
                    </div>
                </div>

                <div className='form-row d-flex justify-content-between'>
                    <div className='mid-input'>
                        <label htmlFor="#img1">First image</label>
                        <input id='img1'
                            type='text'
                            onChange={e => setFormData({ ...formData, 'img1': e.target.value })}
                            placeholder="Insert url"
                            value={formData.img1}
                        />
                    </div>
                    <div className='mid-input'>
                        <label htmlFor="#img2">Second image</label>
                        <input id='img2'
                            type='text'
                            onChange={e => setFormData({ ...formData, 'img2': e.target.value })}
                            placeholder="Insert url"
                            value={formData.img2}
                        />
                    </div>
                </div>

                {/* <input type='file' onChange={(e) => onChange(e, "img1")} placeholder="Primary Image" />
                <input type='file' onChange={(e) => onChange(e, "img2")} placeholder="Primary Image" /> */}

                <button className="button btn-submit btn btn-primary" onClick={createData}>Create Note</button>
            </div>

            <button onClick={deleteProduct}>delete something</button>

            {/* {todoRecord.map((e) => <ProductTile product={e} getData={getData} user={user} formData={formData} setFormData={setFormData} />)} */}
        </>
    );
}

export default Edit;