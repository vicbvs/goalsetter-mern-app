import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { createGoal } from '../features/goals/goalSlice';

function GoalForm() {
  const [text, setText] = useState('');

  const dispatch = useDispatch();
  const { t } = useTranslation();

  const onSubmit = (e) => {
    e.preventDefault();

    dispatch(createGoal({ text }));
    setText('');
  };

  return (
    <section className="form">
      <form onSubmit={onSubmit}>
        <div className="form-group">
          <label htmlFor="text">{t('goal')}</label>
          <input
            type="text"
            name="text"
            id="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
        </div>
        <div className="form-group">
          <button className="btn btn-block" type="submit">
            {t('add_goal')}
          </button>
        </div>
      </form>
    </section>
  );
}

export default GoalForm;
