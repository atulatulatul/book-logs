import React, { useState } from "react"
import { HStack, VStack } from "./Flex"

const DEFAULT_BOOK_DETAILS = {
    name: '',
    price: 0,
    category: '',
    description: ''
}

function Input({ label, onChange, value, name, type }) {
    const id = React.useId()
    return <VStack>
        <label htmlFor="name-field" className="form-label">
            {label}{': '}
        </label>
        <input
            id={id}
            required
            name={name}
            type={type}
            value={value}
            onChange={onChange}
            className='input form-control'
        />
    </VStack>
}

function BookForm({ handleAddBook, handleClose }) {
    const [bookDetails, setBookDetails] = useState(DEFAULT_BOOK_DETAILS)

    const handleInputChange = (e) => {
        console.log(e.target.value)
        setBookDetails({
            ...bookDetails,
            [e.target.name]: e.target.value
        })
    }

    return (
        <form onSubmit={(e) => {
            e.preventDefault();
            handleAddBook({ ...bookDetails, id: Math.random() })
        }}>
            <VStack >
                <Input
                    name='name'
                    value={bookDetails.name}
                    type='text'
                    onChange={handleInputChange}
                    label={'Book Name'}
                />
                <Input
                    name='price'
                    value={bookDetails.price}
                    type='number'
                    onChange={handleInputChange}
                    label={'Price'}
                />
                <Input
                    name='category'
                    value={bookDetails.category}
                    type='text'
                    onChange={handleInputChange}
                    label={'Category'}
                />
                <label htmlFor="description" className="form-label">
                    Description:
                </label>
                <textarea
                    id="description"
                    name="description"
                    value={bookDetails.description}
                    onChange={handleInputChange}
                    className='form-control'
                />

                <HStack styleProps={{ marginTop: 10, justifyContent: 'center' }}>
                    <input className="btn btn-info" type="submit" />
                    <button className="btn btn-danger" onClick={handleClose}>Cancel</button>
                </HStack>
            </VStack>
        </form>
    )
}

export default BookForm
