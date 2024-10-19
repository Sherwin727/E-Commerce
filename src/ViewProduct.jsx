import {Accordion} from 'react-bootstrap'

function ViewProduct ()
{
    const items = [
        { id: 1, name: 'Item A', details: 'Detail1', price: '$69', quantity: 2},
        { id: 2, name: 'Item B', details: 'Detail2', price: '$727', quantity: 6 },
        { id: 3, name: 'Item C', details: 'Detail3', price: '$420', quantity: 50 },
        { id: 4, name: 'Item D', details: 'Detail4', price: '$1000', quantity: 0},
        { id: 5, name: 'Item E', details: 'Detail5', price: '$300', quantity: 1},
    ];//Temporary Items for the Table to work visually
    return(
        <div className="table-container">
                <h2 align="center">Product List</h2>
            <table className="item-table">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Price</th>
                        <th>Quantity</th>
                    </tr>
                </thead>
                <tbody> 
                    {items
                    .filter((item)=> item.quantity > 0) //displays the quantity of items if more than 0
                    .map((item) => (
                        <tr key={item.id}>
                            <td>{item.id}</td>
                            <td>
                                <Accordion>
                                    <Accordion.Item eventKey="{item.id}">
                                    <Accordion.Header>{item.name}</Accordion.Header>
                                    <Accordion.Body>{item.details}</Accordion.Body>
                                    </Accordion.Item>
                                </Accordion>
                            </td>
                            <td>{item.price}</td>
                            <td>{item.quantity}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}
export default ViewProduct