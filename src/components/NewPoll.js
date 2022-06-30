import React, {useState} from "react";
import axios from 'axios';
import {Link, useNavigate} from 'react-router-dom';

const NewPoll = (props) => {

    const navi = useNavigate();
    const [question, setQuestion] = useState("");
    const [optionOne, setOptionOne] = useState("");
    const [optionTwo, setOptionTwo] = useState("");
    const [optionThree, setOptionThree] = useState("");
    const [optionFour, setOptionFour] = useState("");
    const [errors, setErrors] = useState({});

    const submitPoll = (e) => {
        e.preventDefault();
        
        axios.post("https://mern-voting-apps.herokuapp.com/api/createpoll/", {
            question,
            optionOne,
            optionTwo,
            optionThree,
            optionFour
        })
            .then((res) => {
                console.log(res);
                navi('/');
            })
            .catch((err) => {
                setErrors(err.response.data.errors);
            })
    };

    return (
        <div>
            
                <div className="voting--dojo">
                    <h1>Voting Dojo</h1>
                </div>
                <div>
                    <Link to={"/"}><button className="btn btn-success">Back to Main Page</button></Link>
                </div>

                <form onSubmit={submitPoll}>
                    <div className="forms">
                        <div className="form-group col">
                            <label htmlFor="question">Your Question: <span>*</span></label>
                            <div>
                            <textarea name={question} type="textarea" value={question} id="question" onChange={(e) => setQuestion(e.target.value)}></textarea><br />
                            {errors.question && (<span> {errors.question.message} </span>)}<br />
                            </div>
                            <br />
                            <div><button type="submit" className="btn btn-danger">Submit</button></div>
                            <span>* indicate a required fields</span>
                        </div>
                        <div className="form-group col">
                            <label htmlFor="optionOne">Option 1: <span>*</span></label> <br />
                            {errors.optionOne && (<span> {errors.optionOne.message} </span>)}<br />
                            <input type="text" name={optionOne} value={optionOne} id="optionOne" onChange={(e) => setOptionOne(e.target.value)}></input> <br />
                            <br />
                            <label htmlFor="optionTwo">Option 2: <span>*</span></label> <br />
                            {errors.optionTwo && (<span> {errors.optionTwo.message} </span>)}<br />
                            <input type="text" name={optionTwo} value={optionTwo} id="option2" onChange={(e) => setOptionTwo(e.target.value)}></input> <br />
                            <br />
                            <label htmlFor="optionThree">Option 3:</label> <br />
                            <br />
                            <input type="text" name={optionThree} value={optionThree} id="option3" onChange={(e) => setOptionThree(e.target.value)}></input> <br />
                            <br />
                            <label htmlFor="optionFour">Option 4:</label> <br />
                            <br />
                            <input type="text" name={optionFour} value={optionFour} id="option4" onChange={(e) => setOptionFour(e.target.value)}></input> <br />
                        </div>
                    </div>
                </form>
        </div>
    )
}

export default NewPoll;