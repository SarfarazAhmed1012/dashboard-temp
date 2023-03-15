import React, { useState } from "react";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import MovingIcon from "@mui/icons-material/Moving";
import { Circle } from "@mui/icons-material";
import { PieChartOutlineSharp } from "@mui/icons-material";
import PaymentIcon from "@mui/icons-material/Payment";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import ModeStandbyIcon from "@mui/icons-material/ModeStandby";
import GetAppIcon from "@mui/icons-material/GetApp";
import BlockIcon from "@mui/icons-material/Block";
import "./Balance.scss";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";
import DatePicker from "../datepicker/Datepicker";

ChartJS.register(ArcElement, Tooltip, Legend);

const data = {
  labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
  datasets: [
    {
      label: "# of Votes",
      data: [12, 19, 3, 5, 2, 3],
      backgroundColor: [
        "rgba(177, 18, 52, 0.61)",
        "rgba(54, 163, 235, 0.74)",
        "rgba(255, 207, 86, 0.849)",
        "rgba(75, 192, 192, 0.8)",
        "rgba(153, 102, 255, 0.8)",
        "rgba(255, 159, 64, 0.8)",
      ],
      borderColor: [
        "rgba(255, 99, 132, 1)",
        "rgba(54, 162, 235, 1)",
        "rgba(255, 206, 86, 1)",
        "rgba(75, 192, 192, 1)",
        "rgba(153, 102, 255, 1)",
        "rgba(255, 159, 64, 1)",
      ],
      borderWidth: 1,
    },
  ],
};

const Balance = () => {
  const [date, setDate] = useState(new Date());
  const [showCalendar, setShowCalendar] = useState(false);

  const handleDatePicker = () => {
    setShowCalendar(!showCalendar);
  };
  console.log(date);

  return (
    <div className="balance">
      <div className="balance_container">
        {showCalendar && (
          <div className="balance_calendar">
            <DatePicker selectedDate={date} onChange={setDate} />
          </div>
        )}
        <div className="balance_top">
          <div className="balance_top_left">
            <h1>$114.158,62</h1>
            <div className="left_text">
              <h5>Total balance from all accounts</h5>
              <span>EUR</span>
            </div>
          </div>
          <div className="balance_top_right">
            <AddCircleOutlineIcon />
            <span>Open an account or deposit</span>
          </div>
        </div>

        <div class="balance_bottom">
          <div class="balance_bottom_left">
            <div className="bottom_left_card_heading">
              <h3>Income and Expenses</h3>
              <CalendarMonthIcon
                onClick={handleDatePicker}
                style={{ cursor: "pointer" }}
              />
            </div>
            <div
              style={{ height: "400px", width: "350px" }}
              className="balance_bottom_left_graph"
            >
              <Pie height="30%" data={data} />
            </div>
            <div className="balance_bottom_left_list">
              <div className="balance_bottom_left_list_income">
                <div className="left_list_income_left">
                  <span>Income</span>
                  <h3>
                    <Circle className="circle_icon" />
                    $9.650,00
                  </h3>
                </div>
                <div className="left_list_income_right">
                  <MovingIcon className="left_list_income_icon" />
                  <span>+5.7%</span>
                </div>
              </div>
              <div className="balance_bottom_left_list_expenses">
                <div className="left_list_expenses_left">
                  <span>expenses</span>
                  <h3>
                    <Circle className="circle_icon" />
                    $9.650,00
                  </h3>
                </div>
                <div className="left_list_expenses_right">
                  <MovingIcon className="left_list_expense_icon" />
                  <span>+5.7%</span>
                </div>
              </div>
            </div>
            <div className="see_balance_button">
              <PieChartOutlineSharp />
              <span>See detailed Report</span>
            </div>
          </div>
          <div class="balance_bottom_right">
            <div className="bottom_right_card_heading">
              <h3>Your wallet</h3>
              <PaymentIcon />
            </div>
            <div className="balance_bottom_right_slider">
              <div className="balance_bottom_right_slider_left">
                <ArrowBackIcon className="arrow_back_icon" />
              </div>
              <div className="balance_bottom_right_slider_card">
                <div className="card">
                  <div className="top">
                    <h2>Sarfaraz Ahmed</h2>
                    <img src="https://cdn-icons-png.flaticon.com/512/1436/1436392.png" />
                  </div>
                  <div className="infos">
                    <section className="card-number">
                      <p>Card Number</p>
                      <h1>5495 9549 2883 2434</h1>
                    </section>
                    <div className="bottom">
                      <aside className="infos--bottom">
                        <section>
                          <p>Expiry date</p>
                          <h3>08/24</h3>
                        </section>
                        <section>
                          <p>CVV</p>
                          <h3>748</h3>
                        </section>
                      </aside>
                      <aside>
                        <section>
                          <img
                            src="https://seeklogo.com/images/V/VISA-logo-DD37676279-seeklogo.com.png"
                            className="brand"
                          />
                        </section>
                      </aside>
                    </div>
                  </div>
                </div>
              </div>
              <div className="balance_bottom_right_slider_right">
                <ArrowForwardIcon className="arrow_forward_icon" />
              </div>
            </div>
            <div className="balance_right_card_options">
              <div className="card_options">
                <div className="card_options_icon">
                  <ModeStandbyIcon />
                </div>
                <span>Card Details</span>
              </div>
              <div className="card_options">
                <div className="card_options_icon">
                  <MovingIcon />
                </div>
                <span>Payment</span>
              </div>
              <div className="card_options">
                <div className="card_options_icon">
                  <GetAppIcon />
                </div>
                <span>Statement</span>
              </div>
              <div className="card_options">
                <div className="card_options_icon">
                  <BlockIcon />
                </div>
                <span>Block card</span>
              </div>
            </div>
            <span className="latest_transactions_balance">
              Latest Transactions
            </span>
            <div className="latest_transactions_balance_list">
              <div className="latest_transactions_balance_list_left">
                <img
                  src="https://static-00.iconduck.com/assets.00/amazon-circle-icon-512x512-caekxcgk.png"
                  alt=""
                />
                <div className="details">
                  <h3>Online purchase at Ebay.com</h3>
                  <span>25 AUG, 3:00 PM</span>
                </div>
              </div>
              <div className="latest_transactions_balance_list_right">
                <span>-$10,480.00</span>
              </div>
            </div>
            <div className="latest_transactions_balance_list">
              <div className="latest_transactions_balance_list_left">
                <img
                  src="https://static-00.iconduck.com/assets.00/amazon-circle-icon-512x512-caekxcgk.png"
                  alt=""
                />
                <div className="details">
                  <h3>Online purchase at Amazon.com</h3>
                  <span>25 AUG, 3:00 PM</span>
                </div>
              </div>
              <div className="latest_transactions_balance_list_right">
                <span>-$10,480.00</span>
              </div>
            </div>
            <div className="latest_transactions_balance_list">
              <div className="latest_transactions_balance_list_left">
                <img
                  src="https://static-00.iconduck.com/assets.00/amazon-circle-icon-512x512-caekxcgk.png"
                  alt=""
                />
                <div className="details">
                  <h3>Online purchase at Ebay.com</h3>
                  <span>25 AUG, 3:00 PM</span>
                </div>
              </div>
              <div className="latest_transactions_balance_list_right">
                <span>-$10,480.00</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Balance;
