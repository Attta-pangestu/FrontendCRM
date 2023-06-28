import React, { useEffect } from "react";
import styles from "../../styles/PaginaLayout1.module.scss";
import Tabel from "../../components/Tabel/Tabel";
import { useDispatch, useSelector } from "react-redux";
import AddBtn from "../../components/Butoane/AddBtn";
import { fetchObiective } from "../../features/obiective/ObiectiveSlice";

function Obiective() {
  const { header_tabel } = useSelector((state) => state.headers);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchObiective());
  }, [dispatch]);

  const obiective = useSelector((state) => state.obiective);

  return (
    <div className={styles.pagina_principala}>
      <div className={styles.header}>
        <div className={styles.titlu}>Obiective</div>
        <AddBtn name="Adauga un nou obiectiv" link="/adauga_obiectiv" />
      </div>
      <Tabel table_column_name="obiective_tabel" />
    </div>
  );
}

export default Obiective;
