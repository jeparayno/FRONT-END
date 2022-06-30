import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import moment from 'moment';

const ViewPoll = (props) => {

    const [showTop, setShowTop] = useState([]);
    const [showDates, setShowDates] = useState([]);

    useEffect(() => {
        axios.get("https://mern-voting-apps.herokuapp.com/api/showdate/")
            .then((res) => {
                // console.log(res);
                setShowDates(res.data);
            })
            .catch((err) => {
                console.log(err);
            })
    }, []);

    useEffect(() => {
        axios.get("https://mern-voting-apps.herokuapp.com/api/topthree/")
            .then((res) => {
                setShowTop(res.data);
            })
            .catch((err) => {
                console.log(err);
            })
    }, []);


    return (
        <>
            <div className="voting--dojo">
                <h1>Voting Dojo</h1>
            </div>
            <div>
                <Link to={'/create'}><button className="btn btn-success">Create your own Poll</button></Link>
            </div>
            <br />
            <div className="main--page">
                <div className="top--three">
                    <div>
                        <table className="table table-striped">
                            <thead className="bg-primary">
                                <tr>
                                    <th scope="col"><h1>Top 3</h1></th>
                                </tr> 
                            </thead>
                            <tbody>

                                    {
                                        showTop.map((tops, index) => {
                                            return (
                                                <div>
                                                <tr key={index}> 
                                                    <th scope="col"><Link to={`/poll/${tops._id}`}> {tops.question} </Link></th>
                                                </tr>
                                                <tr key={index}>
                                                    <td>Total Votes: {tops.totalPoll}</td>
                                                </tr>
                                                <tr key={index}>
                                                    <td>{moment(tops.createdAt).fromNow()}</td>
                                                </tr>
                                                </div>
                                            )
                                        })
                                    }

                            </tbody>
                        </table>
                    </div>
                </div>
                        <div><br /></div>
                <div>
                    <div>
                        <table className="table table-striped">
                            <thead className="bg-primary">
                                <td className="theads--bg"><h1>Recently Added</h1></td>
                            </thead>
                            <tbody>
                            <tr>
                                {
                                    showDates.map((dates, index) => {
                                        return (
                                            <>
                                            <tr  key={index}>
                                                <th ><Link to={`/poll/${dates._id}`}> {dates.question} </Link></th>
                                            </tr>
                                            <tr className="moments---sss">
                                                <td className="moments---sss">{moment(dates.createdAt).fromNow()}</td> &nbsp;
                                            </tr>
                                            </>
                                        )
                                    })
                                }
                            </tr>
                        </tbody>
                        </table>
                    </div>
                </div>
            </div>
            <br />
        </>
    )
}

export default ViewPoll;