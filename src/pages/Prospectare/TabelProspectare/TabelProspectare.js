import React, { useEffect } from "react";
import styles from "./TabelProspectare.module.scss";
// import PopUpPlandeactiune from "./../PopUpPlandeactiune/PopUpPlandeactiune";
import {
  BsFillArrowLeftSquareFill,
  BsFillArrowRightSquareFill,
} from "react-icons/bs";

import {
  fetchProspectare,
  openPopUp,
} from "../../../features/prospectare/ProspectareSlice";
import { useDispatch, useSelector } from "react-redux";

function TabelProspectare() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProspectare());
  }, [dispatch]);

  const prospectare = useSelector((state) => state.prospectare);
  return (
    <div className={styles.tabel_prospectare}>
      <div className={styles.main}>
        <div className={styles.header}>
          <div className={styles.hdata}>Tipul</div>
          <div className={styles.hdata}>Titlu</div>
          <div className={styles.hdata}>Identificat de </div>
          <div className={styles.hdata}>Data crearii</div>
          <div className={styles.hdata}>Perioada de desfasurare</div>
          <div className={styles.hdata}>Deadline</div>
        </div>
        <div className={styles.rows}>
          {prospectare.loading && <div>Loading...</div>}
          {!prospectare.loading && prospectare.error ? (
            <div>Error: {prospectare.error}</div>
          ) : null}
          {prospectare &&
            prospectare.payload.map((item, index) => {
              return (
                <div
                  key={index}
                  className={styles.row}
                  onClick={() => {
                    dispatch(openPopUp(item.companie_id));
                  }}
                >
                  <div className={styles.td}>fdgd</div>
                  <div className={styles.td}>dsad</div>
                  <div className={styles.td}>dsad</div>
                  <div className={styles.td}>dsadame</div>
                  <div className={styles.td}>dsadte</div>
                  <div className={styles.td}>dsad</div>
                </div>
              );
            })}
        </div>
      </div>
      <div className={styles.arrows}>
        <BsFillArrowLeftSquareFill className={styles.arrow} />
        <div className={styles.numerotare}>1</div>
        <BsFillArrowRightSquareFill className={styles.arrow} />
      </div>
      {/* <PopUpOportunitati /> */}
    </div>
  );
}

export default TabelProspectare;
