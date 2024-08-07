import { useDispatch, useSelector } from "react-redux";
import css from "./Home.module.css";
import useAxiosWithInterceptors from "../utils/useAxiosWithInterceptors";

const Home = () => {
  const { user } = useSelector(
    (state) => state.user
  );
  
  useAxiosWithInterceptors();

  return (
    <div className={css.main} id="home">
      <div className={css.mainParts}>
        <div className={css.bigCircle}>
          <h1 className={css.mainHeading}>
            Keep Tracking Your <br />{" "}
            <span className={css.headingSpan}>Incomes & Expenses</span> <br />{" "}
            Save Money ⇀⇀⇀
          </h1>
        </div>
        <div className={css.smallCircles}></div>
        <div className={css.smallCircles}></div>
      </div>
      <div className={css.mainParts}>
        <div className={css.showBox}>
          <h1>
            Total Incomes ↴ <br />
            {user ? user.totalIncome.toLocaleString("en-IN") : 0 }
          </h1>
        </div>
        <div className={css.showBox}>
          <h1>
            Total Expenses ↴ <br />
            {user ? user.totalExpense.toLocaleString("en-IN") : 0 }
          </h1>
        </div>
        <div className={css.showBox}>
          <h1>
            Total Remaining ↴ <br />
            {user ? user.remainingAmount.toLocaleString("en-IN") : 0 }
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Home;
