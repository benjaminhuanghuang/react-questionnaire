import React, {  useEffect } from "react";
import Alert from "@material-ui/lab/Alert";

//
import "./Dashboard.css";
// Redux
import { useDispatch, useSelector } from "react-redux";
import { fetchQuestions, selectQuestion } from "../redux/questionActions";

import Sidebar from "../components/Sidebar";
import Loader from "../components/Loader";
import QuestionForm from "../components/QuestionForm";

function Dashboard() {
  const { questions, isQuestionsLoading, questionsError, currentQuestionId } = useSelector((state) => state.question);
  const { needVerification } = useSelector((state) => state.auth);

  const dispatch = useDispatch();

  const handleSelect = (id)  =>
  { 
    dispatch(selectQuestion(id));
  }

  useEffect(() => {
    dispatch(fetchQuestions());
  }, []);

  if (isQuestionsLoading) {
    return <Loader />;
  }
  return (
    <div className="dashboard">
      <div className="dashborad__body">
        {needVerification && <Alert severity="warning">Please verify your email address</Alert>}
        {questionsError && <Alert severity="error">{questionsError}</Alert>}
        <Sidebar questions={questions} currentQuestionId={currentQuestionId}  onSelect={handleSelect} />
        <QuestionForm/>
      </div>
    </div>
  );
}

export default Dashboard;
