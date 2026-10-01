import { useSelector, useDispatch } from "react-redux";
import type { RootState } from "../store/store";
import { increment, decrement, reset } from "../store/actions/counterActions";
import styles from "./Counter.module.css";

const Counter = () => {
  const count = useSelector((state: RootState) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div className={styles.counterContainer}>
      <h2 className={styles.count}>Counter: {count}</h2>
      <div className={styles.row}>
        <button className={styles.stepButton} onClick={() => dispatch(increment())}>
          +
        </button>
        <button className={styles.stepButton} onClick={() => dispatch(decrement())}>
          -
        </button>
      </div>
      <button className={styles.resetButton} onClick={() => dispatch(reset())}>
        Reset
      </button>
    </div>
  );
};

export default Counter;