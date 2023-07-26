import { HStack } from "./Flex"

function Book({ book, handleDelete }) {
    return (
        <>
            <div className="book-card-container elevation">
                <HStack vCentered styleProps={{ justifyContent: 'space-between' }}>
                    <HStack gap={0} vCentered>
                        <div className="book-card-header">{book.name}</div>
                        <div className="book-card-price">(${book.price})</div>
                    </HStack>

                    <div>
                        <button className="btn btn-danger" onClick={() => { handleDelete(book) }}>Delete</button>
                    </div>
                </HStack>
                <div className="book-card-category">{book.category}</div>
            </div>
        </>
    )
}

export default Book