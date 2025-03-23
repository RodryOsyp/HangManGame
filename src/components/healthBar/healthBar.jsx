import React from "react";
import { MdHeartBroken } from "react-icons/md";
import style from "./healthBar.module.css";
import { useStore } from "../../store/game-store";
export const HealthBar = () => {
  const { health, minusHealth } = useStore();
  return (
    <div className={style.healthBar}>
      {Array(health)
        .fill(null)
        .map(() => (
          <MdHeartBroken color="red" className={style.heart} />
        ))}
    </div>
  );
};
