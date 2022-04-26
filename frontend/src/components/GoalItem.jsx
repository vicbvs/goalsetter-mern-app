import React from 'react';
import { useDispatch } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { deleteGoal } from '../features/goals/goalSlice';

function GoalItem({ goal }) {
  const dispatch = useDispatch();
  const { t } = useTranslation();

  const handleClick = (e) => {
    switch (e.detail) {
      case 1:
        console.log('click');
        break;
      case 2:
        console.log('double click');
        break;
      case 3:
        console.log('triple click');
        break;
      default:
        return;
    }
  };

  return (
    <div className="goal" onClick={handleClick}>
      <div>{new Date(goal.createdAt).toLocaleString(t('date_time'))}</div>
      <h2>{goal.text}</h2>
      <button onClick={() => dispatch(deleteGoal(goal._id))} className="close">
        X
      </button>
    </div>
  );
}

export default GoalItem;
