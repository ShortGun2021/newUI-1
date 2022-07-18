import React from 'react'
import {ImProfile} from 'react-icons/im';
import {MdNotificationsNone, MdOutlineLocalOffer} from 'react-icons/md' 
import {BsShieldShaded, BsCurrencyDollar} from 'react-icons/bs'

const SideNavSettings = () => {
  return (
    <div className="container my-3">
    <h3
    style={{
        fontFamily: "Poppins",
fontSize: "20px",
fontWeight: "500",
lineHeight: "27px",
marginBottom:"2%"
    }}
    >Settings</h3>
      <div class="d-flex align-items-start">
        <div
          class="nav flex-column nav-pills me-3"
          id="v-pills-tab"
          role="tablist"
          aria-orientation="vertical"
        >
          <button
            style={{
              backgroundColor: "#6739B714",
              color: "black",
              fontFamily: "Poppins",
              fontSize: "16px",
              fontWeight: "700",
              borderRadius: "9px"
            }}
            class="nav-link active text-start"
            id="v-pills-home-tab"
            data-bs-toggle="pill"
            data-bs-target="#v-pills-home"
            type="button"
            role="tab"
            aria-controls="v-pills-home"
            aria-selected="true"
          >
            <ImProfile className="m-1"/>Profile
          </button>
          <button
          style={{
            color: "black",
            fontFamily: "Poppins",
            fontSize: "16px",
            fontWeight: "700",
            borderRadius: "9px"
          }}
            class="nav-link text-start"
            id="v-pills-disabled-tab"
            data-bs-toggle="pill"
            data-bs-target="#v-pills-disabled"
            type="button"
            role="tab"
            aria-controls="v-pills-disabled"
            aria-selected="false"
            disabled
          >
            <MdNotificationsNone className="m-1"/>Notifications
          </button>
          <button
          style={{
            color: "black",
            fontFamily: "Poppins",
            fontSize: "16px",
            fontWeight: "700",
            borderRadius: "9px"
          }}
            class="nav-link text-start"
            id="v-pills-disabled-tab"
            data-bs-toggle="pill"
            data-bs-target="#v-pills-disabled"
            type="button"
            role="tab"
            aria-controls="v-pills-disabled"
            aria-selected="false"
            disabled
          >
            <MdOutlineLocalOffer className="m-1"/>Offers
          </button>
          <button
          style={{
            color: "black",
            fontFamily: "Poppins",
            fontSize: "16px",
            fontWeight: "700",
            borderRadius: "9px"
          }}
            class="nav-link text-start"
            id="v-pills-disabled-tab"
            data-bs-toggle="pill"
            data-bs-target="#v-pills-disabled"
            type="button"
            role="tab"
            aria-controls="v-pills-disabled"
            aria-selected="false"
            disabled
          >
            <BsShieldShaded className="m-1"/>Account Support
          </button>
          <button
          style={{
            color: "black",
            fontFamily: "Poppins",
            fontSize: "16px",
            fontWeight: "700",
            borderRadius: "9px"
          }}
            class="nav-link text-start"
            id="v-pills-disabled-tab"
            data-bs-toggle="pill"
            data-bs-target="#v-pills-disabled"
            type="button"
            role="tab"
            aria-controls="v-pills-disabled"
            aria-selected="false"
            disabled
          >
            <BsCurrencyDollar className="m-1"/>Earnings
          </button>
        </div>
        <div class="tab-content" id="v-pills-tabContent">
          <div
            class="tab-pane fade show active"
            id="v-pills-home"
            role="tabpanel"
            aria-labelledby="v-pills-home-tab"
            tabindex="0"
          >
            
          </div>
          <div
            class="tab-pane fade"
            id="v-pills-disabled"
            role="tabpanel"
            aria-labelledby="v-pills-disabled-tab"
            tabindex="0"
          >
            
          </div>
          <div
            class="tab-pane fade"
            id="v-pills-disabled"
            role="tabpanel"
            aria-labelledby="v-pills-disabled-tab"
            tabindex="0"
          >
            
          </div>
          <div
            class="tab-pane fade"
            id="v-pills-disabled"
            role="tabpanel"
            aria-labelledby="v-pills-disabled-tab"
            tabindex="0"
          >
            
          </div>
          <div
            class="tab-pane fade"
            id="v-pills-disabled"
            role="tabpanel"
            aria-labelledby="v-pills-disabled-tab"
            tabindex="0"
          >
            
          </div>
        </div>
      </div>
      </div>
  )
}

export default SideNavSettings