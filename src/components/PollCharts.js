import React from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import {Pie} from 'react-chartjs-2';
import { Chart,ArcElement,Tooltip } from "chart.js";
Chart.register(ArcElement,Tooltip);

const PollCharts = () => {
    const [showPoll, setShowPoll] = useState({});
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

    const pollData = {
        labels: [`${optionOne}`,`${optionTwo}`,`${optionThree}`,`${optionFour}`],
        datasets:[{
            data: [`${voteOne}`, `${voteTwo}`, `${voteThree}`,`${voteFour}`],
            backgroundColor: ["#0ED526","#0382EC","#EC0390","#EC0303"]
        }]
    }

    return (
        <>
                <div className="voting--dojo">
                    <h1>Voting Dojo</h1>
                </div>
                <div>
                    <Link to={"/"}><button className="btn btn-success">Back to Main Page</button></Link>
                </div>
                <br />
                <div>
                    <div>Question: {question}</div>
                </div>
                <div className="pie--chart">
                    <Pie data={pollData} />
                    <span>Total Votes: {totalPoll}</span>
                </div>
                <br />
                <br />
                <br />
                <br />
                <div>
                    <div>
                        <h2>{optionOne}</h2>
                        <p>{voteOne}</p>
                    </div>
                    <div>
                        <h2>{optionTwo}</h2>
                        <p>{voteTwo}</p>
                    </div>
                {
                    optionThree &&
                    <div>
                        <h2>{optionThree}</h2>
                        <p>{voteThree}</p>
                    </div>
                }
                {
                    optionFour &&
                    <div>
                        <h2>{optionFour}</h2>
                        <p>{voteFour}</p>
                    </div>
                }
                </div>
        </>
    )
}

export default PollCharts;