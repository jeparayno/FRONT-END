import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';


const ViewOnePoll = () => {

    const [showPoll, setShowPoll] = useState({});
    const navigate = useNavigate();
    const {question, optionOne, optionTwo, optionThree, optionFour, voteOne, voteTwo, voteThree, voteFour, totalPoll} = showPoll;
    const {id} = useParams();


    useEffect(() => {
        axios.get(`https://mern-voting-apps.herokuapp.com/api/getOnePoll/${id}`)
            .then((res) => {
                setShowPoll(res.data.results);
            })
            .catch((err) => {
                console.log(err);
            })
    }, []);

    const votingOne = () => {
        axios.patch(`https://mern-voting-apps.herokuapp.com/api/poll/${id}`, {
            voteOne: voteOne + 1,
            totalPoll: totalPoll + 1,
        })
            .then((res) => {
                // console.log(res);
                setShowPoll(res.data);
                navigate(`/poll/results/${id}`);
            })
            .catch((err) => {
                console.log(err);
            })
    };

    const votingTwo = () => {
        axios.patch(`https://mern-voting-apps.herokuapp.com/api/poll/${id}`, {
            voteTwo: voteTwo + 1,
            totalPoll: totalPoll + 1,
        })
            .then((res) => {
                console.log(res);
                setShowPoll(res.data);
                navigate(`/poll/results/${id}`);
            })
            .catch((err) => {
                console.log(err);
            })
    };

    const votingThree = (e) => {
        axios.patch(`https://mern-voting-apps.herokuapp.com/api/poll/${id}`, {
            voteThree: voteThree + 1,
            totalPoll: totalPoll + 1,
        })
            .then((res) => {
                console.log(res);
                setShowPoll(res.data);
                navigate(`/poll/results/${id}`);
            })
            .catch((err) => {
                console.log(err);
            })
    };

    const votingFour = () => {
        axios.patch(`https://mern-voting-apps.herokuapp.com/api/poll/${id}`, {
            voteFour: voteFour + 1,
            totalPoll: totalPoll + 1,
        })
            .then((res) => {
                console.log(res);
                setShowPoll(res.data);
                navigate(`/poll/results/${id}`);
            })
            .catch((err) => {
                console.log(err);
            })
    };

    return (
        <>
                <div className="voting--dojo">
                    <h1>Voting Dojo</h1>
                </div>
                <div><Link to={"/"}><button className="btn btn-success">Back to the Main Page</button></Link></div>
            <div>
                <div>
                    <h1><Link to={`/poll/results/${id}`} >{question}</Link></h1>
                </div>
                <div>
                    <h3>{optionOne}</h3>
                    <button className='btn btn-danger' onClick={(e) => votingOne(e)}>Vote {optionOne}</button>
                    
                </div>
                <div>
                    <h3>{optionTwo}</h3>
                    <button className='btn btn-success' onClick={(e) => votingTwo(e)}>Vote {optionTwo}</button>
                </div>
                {
                    optionThree && 
                <div>
                    <h3>{optionThree}</h3>
                    <button className='btn btn-danger' onClick={(e) => votingThree(e)}>Vote {optionThree}</button>
                </div>
                }
                {
                    optionFour &&
                <div>
                    <h3>{optionFour}</h3>
                    <button className='btn btn-success' onClick={(e) => votingFour(e)}>Vote {optionFour}</button>
                </div>
                }
            </div>
        </>
    )
}

export default ViewOnePoll;