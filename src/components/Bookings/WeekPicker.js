import { useReducer, useState } from "react";

import weekReducer from "../../reducers/week-reducer";
import { getWeek } from "../../utils/date-wrangler";

//action creator functions imports
import {
  nextWeek,
  previousWeek,
  today,
  setDate,
} from "../../reducers/action-creators";

//icon components imports
import {
  FaChevronLeft,
  FaCalendarDay,
  FaChevronRight,
  FaCalendarCheck,
} from "react-icons/fa";

//WeekPicker component
const WeekPicker = ({ date }) => {
  const [week, dispatch] = useReducer(weekReducer, date, getWeek);
  const [dateText, setDateText] = useState("2022-09-21");

  //sets particular date from date textbox input
  const goToDate = () => {
    dispatch(setDate(dateText));
  };

  return (
    <div>
      <p className="date-picker">
        {/* previous button */}
        <button className="btn" onClick={() => dispatch(previousWeek())}>
          <FaChevronLeft />
          <span>Prev</span>
        </button>

        {/* Today button */}
        <button className="btn" onClick={() => dispatch(today())}>
          <FaCalendarDay />
          <span>Today</span>
        </button>

        {/* Date text input */}
        <span>
          <input
            type="text"
            placeholder="2022-09-28"
            defaultValue={dateText}
            onChange={(e) => setDateText(e.target.value)}
          />
        </span>

        {/* Go button */}
        <button className="btn go" onClick={goToDate}>
          <FaCalendarCheck />
          <span>Go</span>
        </button>

        {/* Next button */}
        <button className="btn" onClick={() => dispatch(nextWeek())}>
          <span>Next</span>
          <FaChevronRight />
        </button>
      </p>

      {/* start to end week date strings */}
      <p>
        {week.start.toDateString()} - {week.end.toDateString()}
      </p>
    </div>
  );
};

export default WeekPicker;
