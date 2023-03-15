import React from "react";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import "./Assets.scss";
import MovingIcon from "@mui/icons-material/Moving";
import TrendingDownIcon from "@mui/icons-material/TrendingDown";
import CallMadeIcon from "@mui/icons-material/CallMade";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";
import { faker } from "@faker-js/faker";
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
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
    },
  },
};
const labels = ["January", "February", "March", "April", "May", "June", "July"];

export const data = {
  labels,
  datasets: [
    {
      fill: true,
      label: "Dataset 2",
      data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
      borderColor: "rgb(53, 162, 235)",
      backgroundColor: "rgba(53, 162, 235, 0.5)",
    },
    {
      fill: true,
      label: "Dataset 1",
      data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
      borderColor: "rgb(230, 24, 219)",
      backgroundColor: "rgba(207, 60, 212, 0.829)",
    },
  ],
};

const Assets = () => {
  return (
    <div className="assets">
      <div className="assets_container">
        <div className="assets_top">
          <div className="assets_top_left">
            <h1>$324,948,31</h1>
            <div className="left_text">
              <h5>Total assets from all accounts</h5>
              <span>EUR</span>
            </div>
          </div>
          <div className="assets_top_right">
            <AddCircleOutlineIcon />
            <span>Open an account or deposit</span>
          </div>
        </div>
        <div className="assets_bottom">
          <div className="assets_bottom_left">
            <div className="assets_bottom_left_top">
              <div className="assets_bottom_left_top_card">
                <div class="assets_bottom_left_top_card_top">
                  <h4>Income</h4>
                  <MovingIcon style={{ color: "blue" }} />
                </div>
                <div class="assets_bottom_left_top_card_middle">
                  <h2>$9.650,00</h2>
                </div>
                <div class="assets_bottom_left_top_bottom">
                  <h4>84 Transactions</h4>
                  <span style={{ color: "blue" }}>+10%</span>
                </div>
              </div>
              <div className="assets_bottom_left_top_card">
                <div class="assets_bottom_left_top_card_top">
                  <h4>Spendings</h4>
                  <TrendingDownIcon style={{ color: "red" }} />
                </div>
                <div class="assets_bottom_left_top_card_middle">
                  <h2>$7.876,00</h2>
                </div>
                <div class="assets_bottom_left_top_bottom">
                  <h4>76 Transactions</h4>
                  <span style={{ color: "red" }}>-2%</span>
                </div>
              </div>
            </div>
            <div className="assets_bottom_left_bottom">
              <div className="assets_bottom_left_bottom_heading">
                <h3>Assets</h3>
              </div>
              <div className="assets_bottom_left_bottom_graph">
                <Line options={options} data={data} />
              </div>
              <div className="assets_bottom_left_bottom_accnumber">
                <div className="assets_bottom_left_bottom_left_card">
                  <div className="assets_bottom_left_bottom_left_section">
                    <img
                      src="https://icms-image.slatic.net/images/ims-web/fb7adc81-c369-4fe8-b62e-7595b09c7741.png"
                      alt=""
                    />
                    <div className="assets_bottom_left_bottom_cardnumber">
                      <h4>9232 **** **** 3425</h4>
                      <span>Account Number</span>
                    </div>
                  </div>
                  <div className="assets_bottom_left_bottom_right_section">
                    <div className="assets_bottom_left_bottom_right_balance">
                      <h4>$88,200,00</h4>
                      <span>Account balance</span>
                    </div>
                  </div>
                </div>
                <div className="assets_bottom_left_bottom_left_card">
                  <div className="assets_bottom_left_bottom_left_section">
                    <img
                      src="https://cdn-icons-png.flaticon.com/512/2504/2504802.png"
                      alt=""
                    />
                    <div className="assets_bottom_left_bottom_cardnumber">
                      <h4>9232 **** **** 3425</h4>
                      <span>Account Number</span>
                    </div>
                  </div>
                  <div className="assets_bottom_left_bottom_right_section">
                    <div className="assets_bottom_left_bottom_right_balance">
                      <h4>$88,200,00</h4>
                      <span>Account balance</span>
                    </div>
                  </div>
                </div>
                <div className="assets_bottom_left_bottom_left_card">
                  <div className="assets_bottom_left_bottom_left_section">
                    <img
                      src="https://static-00.iconduck.com/assets.00/amazon-circle-icon-512x512-caekxcgk.png"
                      alt=""
                    />
                    <div className="assets_bottom_left_bottom_cardnumber">
                      <h4>9232 **** **** 3425</h4>
                      <span>Account Number</span>
                    </div>
                  </div>
                  <div className="assets_bottom_left_bottom_right_section">
                    <div className="assets_bottom_left_bottom_right_balance">
                      <h4>$88,200,00</h4>
                      <span>Account balance</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="assets_bottom_right">
            <div className="assets_bottom_right_heading">
              <h3>Latest Transactions</h3>
              <CallMadeIcon />
            </div>
            <div className="latest_transactions_assets_bottom_right">
              <span>28 August</span>
            </div>

            <div className="latest_transactions_assets_bottom_right_list">
              <div className="latest_transactions_assets_bottom_right_list_left">
                <img
                  src="https://static-00.iconduck.com/assets.00/amazon-circle-icon-512x512-caekxcgk.png"
                  alt=""
                />
                <div className="details">
                  <h3>Online purchase at Ebay.com</h3>
                  <span>25 AUG, 3:00 PM</span>
                </div>
              </div>
              <div className="latest_transactions_assets_bottom_right_list_right">
                <span>-$10,480.00</span>
              </div>
            </div>
            <div className="latest_transactions_assets_bottom_right_list">
              <div className="latest_transactions_assets_bottom_right_list_left">
                <img
                  src="https://thumbs.dreamstime.com/b/bank-icon-sign-facade-building-symbol-circle-isolated-white-background-flat-style-vector-illustration-145525569.jpg"
                  alt=""
                />
                <div className="details">
                  <h3>Cash Withdrawal</h3>
                  <span>28 AUG, 6:00 PM</span>
                </div>
              </div>
              <div className="latest_transactions_assets_bottom_right_list_right">
                <span>-$90,480.00</span>
              </div>
            </div>
            <div className="latest_transactions_assets_bottom_right_list">
              <div className="latest_transactions_assets_bottom_right_list_left">
                <img
                  src="https://img.freepik.com/premium-vector/bank-card-circle-icon-vector-illustration-flat-style-with-long-shadow_520826-1945.jpg"
                  alt=""
                />
                <div className="details">
                  <h3>Online purchase at Ebay.com</h3>
                  <span>25 AUG, 3:00 PM</span>
                </div>
              </div>
              <div className="latest_transactions_assets_bottom_right_list_right">
                <span>-$10,480.00</span>
              </div>
            </div>
            <div className="latest_transactions_assets_bottom_right_list">
              <div className="latest_transactions_assets_bottom_right_list_left">
                <img
                  src="https://cdn0.iconfinder.com/data/icons/social-15/200/paypal-512.png"
                  alt=""
                />
                <div className="details">
                  <h3>Cash withdrawal</h3>
                  <span>25 AUG, 3:00 PM</span>
                </div>
              </div>
              <div className="latest_transactions_assets_bottom_right_list_right">
                <span>-$10,480.00</span>
              </div>
            </div>
            <div className="latest_transactions_assets_bottom_right">
              <span>28 August</span>
            </div>
            <div className="latest_transactions_assets_bottom_right_list">
              <div className="latest_transactions_assets_bottom_right_list_left">
                <img
                  src="https://static-00.iconduck.com/assets.00/amazon-circle-icon-512x512-caekxcgk.png"
                  alt=""
                />
                <div className="details">
                  <h3>Income payment for projects</h3>
                  <span>25 AUG, 3:00 PM</span>
                </div>
              </div>
              <div className="latest_transactions_assets_bottom_right_list_right">
                <span>+$2,480.00</span>
              </div>
            </div>
            <div className="latest_transactions_assets_bottom_right_list">
              <div className="latest_transactions_assets_bottom_right_list_left">
                <img
                  src="https://img.freepik.com/premium-vector/bank-card-circle-icon-vector-illustration-flat-style-with-long-shadow_520826-1945.jpg"
                  alt=""
                />
                <div className="details">
                  <h3>Online purchase at Amazon.com</h3>
                  <span>25 AUG, 3:00 PM</span>
                </div>
              </div>
              <div className="latest_transactions_assets_bottom_right_list_right">
                <span>-$10,480.00</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Assets;
