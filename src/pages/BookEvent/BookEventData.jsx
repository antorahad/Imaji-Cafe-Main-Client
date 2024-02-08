const BookEventData = ({ item, handleRemove }) => {
    const { _id, image, name, event, entryFee, guest, arrivalDate, startingDate, endingDate, contact } = item;
    return (
        <tr>
            <td>
                <button onClick={() => handleRemove(_id)} className="btn btn-circle btn-sm">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                </button>
            </td>
            <td>
                <div className="avatar">
                    <div className="w-12 rounded">
                        <img src={image} />
                    </div>
                </div>
            </td>
            <td>{event}</td>
            <td>{name}</td>
            <td>{contact}</td>
            <td>{entryFee}</td>
            <td>{guest}</td>
            <td>{arrivalDate}</td>
            <td>{startingDate}</td>
            <td>{endingDate}</td>
            <td><button className="btn btn-warning btn-sm text-xs border-none outline-none text-white rounded-md">Pending</button></td>
        </tr>
    );
};

export default BookEventData;