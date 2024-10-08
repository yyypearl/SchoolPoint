import { theme } from "@/styles/theme";
import styled from "styled-components";
import Card, { CardProps } from "../common/Card";
import Axios from "@/apis/axios";
import { useEffect, useState } from "react";
import { noDataMessage } from "@/data/timeTableData";

interface Timetable {
  time: number;
  subject: string;
}

const TimeTable = () => {
  const [timeToday, setTimeToday] = useState<Timetable[]>([]);
  let now = new Date();
  const week = ["일", "월", "화", "수", "목", "금", "토"];

  const [language, setLanguage] = useState<string>("ko");

  useEffect(() => {
    setLanguage(localStorage.getItem("language") || "ko");
  }, []);

  useEffect(() => {
    Axios.get(`/api/v1/timetables/today`)
      .then((response) => {
        const timeToday: Timetable[] = response.data.timetables;
        setTimeToday(timeToday);
      })
      .catch(() => {});
  }, []);

  return (
    <TimeContainer>
      오늘의 시간표
      <TableContainer>
        {timeToday.length > 0 ? (
          timeToday.map((data, index) => (
            <Card
              key={index}
              sub={`${data.time.toString()}교시`}
              main={data.subject}
              color="orange"
              type="timetable"
            />
          ))
        ) : (
          <NoData>
            {noDataMessage[language as keyof typeof noDataMessage]}
          </NoData>
        )}
      </TableContainer>
    </TimeContainer>
  );
};

export default TimeTable;

const TimeContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 6px;
  ${(props) => props.theme.fonts.body2_b};
  color: ${theme.colors.b600};
`;

const TableContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  gap: 5px;
`;

const NoData = styled.div`
  ${(props) => props.theme.fonts.body3_m};
`;
