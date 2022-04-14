import React from 'react';
import QRCode from 'react-qr-code'


const FinalBooking = (props) => {
    let detail = JSON.parse(localStorage.getItem('details'));
    let name = localStorage.getItem('Title');
    let qrstr = `Movie: ${name}`;
    const QRdetail = () => {
        for (let key in detail) {
            qrstr += `\n${key}:${detail[key]}`;
        }
    }

    const renderDetail = () => {
        return (
            <div id="box">
                <div class="row">
                    <div class="col-md-6">
                        <p>scan to display the booking details</p>
                        <QRCode value={`${qrstr}`} />
                    </div>
                    <div class="col-md-6">
                        <h3>Movie: {name}</h3>
                        <hr style={{ borderTop: "1px solid gray" }} />
                        <h3>Booked On: {detail.Date}</h3>
                        <hr style={{ borderTop: "1px solid gray" }} />
                        <h3>Show Time: {detail.Time}</h3>
                        <hr style={{ borderTop: "1px solid gray" }} />
                        <h3>Seats Occupied: {detail.seats}</h3>
                    </div>
                </div>
            </div>
        )
    }

    return (
        <div style={{ marginTop: '100px' }}>
            <center><h2>Booking Details</h2></center>           
            {QRdetail()}
            {renderDetail()}
        </div>
    )
}
export default FinalBooking