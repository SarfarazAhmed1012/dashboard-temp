import React, { useState } from "react";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import PaymentIcon from "@mui/icons-material/Payment";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import "./Dashboard.scss";
import { Bar } from "react-chartjs-2";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import DatePicker from "../datepicker/Datepicker";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";
import { faker } from "@faker-js/faker";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  BarElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top",
    },
    title: {
      display: true,
      text: "Total income",
    },
  },
};

export const optionsBar = {
  responsive: true,
  plugins: {
    legend: {
      position: "top",
    },
    title: {
      display: true,
      text: "Average Income",
    },
  },
  type: "bar",
};

const labels = ["January", "February", "March", "April", "May", "June", "July"];

export const data = {
  labels,
  datasets: [
    {
      label: "Dataset 1",
      data: labels.map(() => faker.datatype.number({ min: -1000, max: 1000 })),
      borderColor: "rgb(255, 99, 132)",
      backgroundColor: "rgba(255, 99, 132, 0.5)",
    },
    {
      label: "Dataset 2",
      data: labels.map(() => faker.datatype.number({ min: -1000, max: 1000 })),
      borderColor: "rgb(53, 162, 235)",
      backgroundColor: "rgba(53, 162, 235, 0.5)",
    },
  ],
};
const Dashboard = () => {
  const [date, setDate] = useState(new Date());
  const [showCalendar, setShowCalendar] = useState(false);

  const handleDatePicker = () => {
    setShowCalendar(!showCalendar);
  };
  console.log("date", date);
  return (
    <div className="dashboard">
      <div className="dashboard_container">
        {showCalendar && (
          <div className="balance_calendar">
            <DatePicker selectedDate={date} onChange={setDate} />
          </div>
        )}
        <div className="dashboard_top">
          <div className="dashboard_top_left">
            <h1>$114.158,62</h1>
            <div className="left_text">
              <h5>Total balance from all accounts</h5>
              <span>EUR</span>
            </div>
          </div>
          <div className="dashboard_top_right">
            <AddCircleOutlineIcon />
            <span>Open an account or deposit</span>
          </div>
        </div>
        <div className="dashboard_bottom">
          <div className="dashboard_bottom_left">
            <div className="dashboard_bottom_left_card_heading">
              <h3>Overview</h3>
              <div className="dashboard_bottom_button">
                <div className="dashboard_bottom_button_buttons">
                  <button style={{ backgroundColor: "black", color: "white" }}>
                    7 days
                  </button>
                  <button>14 days</button>
                  <button>30 days</button>
                </div>
                <CalendarMonthIcon
                  onClick={handleDatePicker}
                  style={{ cursor: "pointer" }}
                />
              </div>
            </div>
            <div className="dashboard_bottom_left_transaction_details">
              <div className="dashboard_bottom_left_transaction_details_left">
                <h4>10,840.00$</h4>
                <span>Total income</span>
              </div>
              <div className="dashboard_bottom_left_transaction_details_right">
                <h4>10,840.00$</h4>
                <span>Average income</span>
              </div>
            </div>
            <div className="dashboard_bottom_left_graphs">
              <div className="dashboard_bottom_left_graphs_graph1">
                <div style={{ height: "400px", width: "350px" }}>
                  <Line height="300%" options={options} data={data} />
                </div>
              </div>
              <div className="dashboard_bottom_left_graphs_graph2">
                <div
                  style={{
                    height: "400px",
                    width: "350px",
                    marginRight: "2rem",
                  }}
                >
                  <Bar height="300%" options={optionsBar} data={data} />
                </div>
              </div>
            </div>
            <div className="dashboard_bottom_left_cards">
              <h5>Your cards</h5>
              <div className="dashboard_bottom_left_card">
                <div className="dashboard_bottom_left_section">
                  <img
                    src="https://cdn-icons-png.flaticon.com/512/2504/2504802.png"
                    alt=""
                  />
                  <div className="dashboard_bottom_cardnumber">
                    <h4>9232 **** **** 3425</h4>
                    <span>Card number</span>
                  </div>
                </div>
                <div className="dashboard_bottom_right_section">
                  <div className="dashboard_bottom_right_date">
                    <h4>03/25</h4>
                    <span>Valid</span>
                  </div>
                  <div className="dashboard_bottom_right_balance">
                    <h4>$88,200,00</h4>
                    <span>Card balance</span>
                  </div>
                  <MoreHorizIcon />
                </div>
              </div>
              <div className="dashboard_bottom_left_card">
                <div className="dashboard_bottom_left_section">
                  <img
                    src="https://cdn-icons-png.flaticon.com/512/2504/2504802.png"
                    alt=""
                  />
                  <div className="dashboard_bottom_cardnumber">
                    <h4>9232 **** **** 3425</h4>
                    <span>Card number</span>
                  </div>
                </div>
                <div className="dashboard_bottom_right_section">
                  <div className="dashboard_bottom_right_date">
                    <h4>03/25</h4>
                    <span>Valid</span>
                  </div>
                  <div className="dashboard_bottom_right_balance">
                    <h4>$88,200,00</h4>
                    <span>Card balance</span>
                  </div>
                  <MoreHorizIcon />
                </div>
              </div>
            </div>
          </div>
          <div className="dashboard_bottom_right">
            <div className="bottom_right_dashboard_heading">
              <h3>Your wallet</h3>
              <PaymentIcon />
            </div>
            <span className="latest_transactions_dashboard">28 August</span>
            <div className="latest_transactions_dashboard_list">
              <div className="latest_transactions_dashboard_list_left">
                <img
                  src="https://static-00.iconduck.com/assets.00/amazon-circle-icon-512x512-caekxcgk.png"
                  alt=""
                />
                <div className="details">
                  <h3>Online purchase at Ebay.com</h3>
                  <span>25 AUG, 3:00 PM</span>
                </div>
              </div>
              <div className="latest_transactions_dashboard_list_right">
                <span>-$10,480.00</span>
              </div>
            </div>
            <div className="latest_transactions_dashboard_list">
              <div className="latest_transactions_dashboard_list_left">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/YouTube_social_red_circle_%282017%29.svg/300px-YouTube_social_red_circle_%282017%29.svg.png?20220808215554"
                  alt=""
                />
                <div className="details">
                  <h3>Online purchase at Ebay.com</h3>
                  <span>25 AUG, 3:00 PM</span>
                </div>
              </div>
              <div className="latest_transactions_dashboard_list_right">
                <span>-$10,480.00</span>
              </div>
            </div>
            <div className="latest_transactions_dashboard_list">
              <div className="latest_transactions_dashboard_list_left">
                <img
                  src="https://icms-image.slatic.net/images/ims-web/fb7adc81-c369-4fe8-b62e-7595b09c7741.png"
                  alt=""
                />
                <div className="details">
                  <h3>Online purchase at Ebay.com</h3>
                  <span>25 AUG, 3:00 PM</span>
                </div>
              </div>
              <div className="latest_transactions_dashboard_list_right">
                <span>-$10,480.00</span>
              </div>
            </div>
            <span className="latest_transactions_dashboard">29 August</span>
            <div className="latest_transactions_dashboard_list">
              <div className="latest_transactions_dashboard_list_left">
                <img
                  src="https://cdn-icons-png.flaticon.com/512/2504/2504739.png"
                  alt=""
                />
                <div className="details">
                  <h3>Online purchase at Ebay.com</h3>
                  <span>25 AUG, 3:00 PM</span>
                </div>
              </div>
              <div className="latest_transactions_dashboard_list_right">
                <span>-$10,480.00</span>
              </div>
            </div>
            <div className="latest_transactions_dashboard_list">
              <div className="latest_transactions_dashboard_list_left">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/YouTube_social_red_circle_%282017%29.svg/300px-YouTube_social_red_circle_%282017%29.svg.png?20220808215554"
                  alt=""
                />
                <div className="details">
                  <h3>Online purchase at Ebay.com</h3>
                  <span>25 AUG, 3:00 PM</span>
                </div>
              </div>
              <div className="latest_transactions_dashboard_list_right">
                <span>-$10,480.00</span>
              </div>
            </div>
            <div className="latest_transactions_dashboard_list">
              <div className="latest_transactions_dashboard_list_left">
                <img
                  src="https://cdn-icons-png.flaticon.com/512/2504/2504739.png"
                  alt=""
                />
                <div className="details">
                  <h3>Online purchase at Ebay.com</h3>
                  <span>25 AUG, 3:00 PM</span>
                </div>
              </div>
              <div className="latest_transactions_dashboard_list_right">
                <span>-$10,480.00</span>
              </div>
            </div>
            <div className="latest_transactions_dashboard_list">
              <div className="latest_transactions_dashboard_list_left">
                <img
                  src="https://static-00.iconduck.com/assets.00/amazon-circle-icon-512x512-caekxcgk.png"
                  alt=""
                />
                <div className="details">
                  <h3>Online purchase at Ebay.com</h3>
                  <span>25 AUG, 3:00 PM</span>
                </div>
              </div>
              <div className="latest_transactions_dashboard_list_right">
                <span>-$10,480.00</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
