import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { DragDropContext, Draggable, Droppable } from 'react-beautiful-dnd';
import GoalForm from '../components/GoalForm';
import GoalItem from '../components/GoalItem';
import Spinner from '../components/Spinner';
import { getGoals, reset } from '../features/goals/goalSlice';

function Dashboard() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { t } = useTranslation();

  const { user } = useSelector((state) => state.auth);
  const { goals, isLoading, isError, message } = useSelector(
    (state) => state.goals
  );

  useEffect(() => {
    if (isError) {
      console.log(message);
    }

    if (!user) {
      navigate('/login');
    }

    dispatch(getGoals());

    return () => {
      dispatch(reset());
    };
  }, [user, navigate, isError, message, dispatch]);

  // const [positionGoals, setPositionGoals] = useState(goals);

  // function handleOnDragEnd(result) {
  //   if (!result.destination) return;
  //   const items = Array.from(goals);
  //   const [reorderedItem] = items.splice(result.source.index, 1);
  //   items.splice(result.destination.index, 0, reorderedItem);

  //   setPositionGoals(items);
  // }

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <>
      <section className="heading">
        <h1>
          {t('welcome')} {user && user.name}
        </h1>
        <p>{t('dashboard')}</p>
      </section>

      <GoalForm />

      <DragDropContext>
        <section className="content">
          {goals.length > 0 ? (
            <Droppable droppableId="goals">
              {(provided) => (
                <div
                  className="goals"
                  {...provided.droppableProps}
                  ref={provided.innerRef}
                >
                  {goals.map((goal, index) => (
                    <Draggable
                      key={goal._id}
                      draggableId={goal._id}
                      index={index}
                    >
                      {(provided) => (
                        <div
                          ref={provided.innerRef}
                          {...provided.draggableProps}
                          {...provided.dragHandleProps}
                        >
                          <GoalItem key={goal._id} goal={goal} />
                        </div>
                      )}
                    </Draggable>
                  ))}
                  {provided.placeholder}
                </div>
              )}
            </Droppable>
          ) : (
            <h3>{t('no_goals')}</h3>
          )}
        </section>
      </DragDropContext>
    </>
  );
}

export default Dashboard;
