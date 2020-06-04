<template>
  <div class="main">
    <h1>Racer's Guild 2020</h1>
    <div class="toggle-buttons">
      <!-- TOGGLE BUTTONS ACTIVE CLASS CONDITIONAL RENDERING -->
      <button class="btn" :class="{active: events}" @click="toggleButtons('events')">Event</button>
      <button
        class="btn"
        :class="{ active: leaderBoard}"
        @click="toggleButtons('leader')"
      >Leader Board</button>
    </div>
    <!-- conditional rendering if events is true -->
    <transition name="fade">
      <div v-if="events" class="events">
        <!-- for loop on events in event list -->
        <div v-for="(event,i) in eventList" :key="i" class="event-card">
          <div class="title">
            <h3>{{event.name}}</h3>
          </div>
          <div class="details">
            <p>Location: {{event.location}}</p>
            <p>
              Winner: {{event.winner}}
              (<span>{{event.score}}</span>)
            </p>
            <!--  ADDED DATE FORMATTING FUNCTION  -->
            <p>Date: {{formatDate(event.date)}}</p>
          </div>
        </div>
      </div>
    </transition>
    <!-- conditional rendering if leaderboard true -->
    <transition name="fade">
      <div v-if="leaderBoard" class="leaderboard">
        <div class="racer" v-for="(racer, i) in racers" :key="i">
          <label>{{i+1}}</label>
          <ul>
            <div class="racer-card">
              <!-- dynamically get image from images folder -->
              <img :src="require(`../assets/images/${racer.name.toLowerCase()}.jpg`)" />
              <p>{{racer.name}}</p>
            </div>
            <div class="info-wrapper">
              <div class="racer-info" :style="{width: `${(decrement-i-.5)* 10}%`}">
                <!-- width will be calculated based upon place calculated in percentage .5 added for cleaner styling -->
                <span :style="{backgroundColor: `rgb(${racer.color})`}">{{racer.high_score}}</span>
              </div>
              <p :style="{width: '100%', fontWeight: 'bold'}">"{{racer.quote}}"</p>
            </div>
          </ul>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  data() {
    return {
      events: true,
      leaderBoard: false,
      decrement: 10,
      //  i decided to copy and paste the data since it was small enough to have on file
      // but if the data sets were too lengthy I would have used imported the file into here
      eventList: [
        {
          name: "Race Mania",
          location: "Miami, FL",
          winner: "Amy",
          score: 520,
          date: "2020-11-05T08:15:30-05:00"
        },
        {
          name: "WipeOut Zone",
          location: "Portland, OR",
          winner: "Dan",
          score: 1020,
          date: "2020-10-08T08:12:30-05:00"
        },
        {
          name: "Race Mania",
          location: "Miami, FL",
          winner: "Brent",
          score: 630,
          date: "2020-09-04T08:15:30-05:00"
        },
        {
          name: "WipeOut Zone",
          location: "Portland, OR",
          winner: "Amy",
          score: 490,
          date: "2020-08-01T08:15:30-05:00"
        },
        {
          name: "Burn Rubber Classic",
          location: "Chicago, IL",
          winner: "Dan",
          score: 690,
          date: "2020-07-03T08:15:30-05:00"
        },
        {
          name: "Metal Road Prix",
          location: "Red Hook, NY",
          winner: "Brent",
          score: 630,
          date: "2020-06-07T18:15:30-05:00"
        }
      ],
      racers: [
        {
          name: "Amy",
          high_score: 1520,
          times_played: 5,
          quote: "Eat my dust!",
          age: 23,
          //   ADDED COLOR ATTR, ideally, a user would be able to select a color that could be represented
          //   as his personal color for background on profile image and meter
          color: "225,105,142"
        },
        {
          name: "Ben",
          high_score: 1830,
          times_played: 4,
          quote: "Second place is always the first loser.",
          age: 35,
          color: "241,179,87"
        },
        {
          name: "Brent",
          high_score: 1630,
          times_played: 5,
          quote: "Drive it like you stole it.",
          age: 26,
          color: "121,153,203"
        },
        {
          name: "Dan",
          high_score: 1140,
          times_played: 4,
          quote:
            "If you have everything under control you're not moving fast enough.",
          age: 29,
          color: "73,163,92"
        },
        {
          name: "Jessica",
          high_score: 1980,
          times_played: 5,
          quote: "Finishing races is important, but racing is more important.",
          age: 29,
          color: "134,50,140"
        },
        {
          name: "Laura",
          high_score: 1120,
          times_played: 4,
          quote:
            "The way money goes so fast these days, they should paint racing stripes on it.",
          age: 29,
          color: "217,221,80"
        }
      ]
    };
  },
  //   added async to sorted racers in case data set is very large
  async mounted() {
    //sort races
    await this.sortRacers();
  },
  methods: {
    //   conditional toggling based on status
    toggleButtons(target) {
      if (target === "events") {
        if (this.events) {
          return false;
        } else {
          this.leaderBoard = false;
          this.events = true;
          return true;
        }
      } else if (target === "leader") {
        if (this.leaderBoard) {
          return false;
        } else {
          this.leaderBoard = true;
          this.events = false;
          return true;
        }
      }
    },
    // date format function using standard JS date object
    formatDate(date) {
      let newDate = new Date(date);
      let day = newDate.getDate();
      let month = newDate.getMonth() + 1;
      let year = newDate.getFullYear();
      return `${month}/${day}/${year}`;
    },
    // On mounting need to sort racers in winning order
    sortRacers() {
      let racers = this.racers;
      let sortedRacers = racers.sort((a, b) => {
        return b.high_score - a.high_score;
      });
      this.racers = sortedRacers;
    }
  }
};
</script>

<style lang="scss" >
.main {
  h1 {
    text-align: center;
  }
  .toggle-buttons {
    .btn {
      margin-right: 10px;
      background-color: transparent;
      border: 1px solid rgb(118, 118, 118);
      color: rgb(118, 118, 118);
      font-size: 18px;
      padding: 10px 60px;
      @media screen and (max-width: 800px) {
        padding: 10px 22px;
      }
      &:focus {
        outline: transparent 1px !important;
      }
      &:hover {
        background-color: rgb(204, 204, 204);
        color: white;
        cursor: pointer;
      }
    }
    .active {
      background-color: rgb(204, 204, 204);
      color: white;
    }
  }
  .events {
    margin-top: 40px;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    @media screen and (max-width: 800px) {
      //   justify-content: space-around;
    }
    .event-card {
      width: 27%;
      display: flex;
      flex-direction: column;
      border: 1px solid rgb(118, 118, 118);
      margin-bottom: 25px;
      @media screen and (max-width: 800px) {
        width: 47%;
      }
      .title {
        text-align: center;
        border-bottom: 1px solid rgb(118, 118, 118);
        padding: 10px 0;
        h3 {
          @media screen and (max-width: 800px) {
            font-size: 15px;
          }
        }
      }
      .details {
        padding: 10px 0 0 5px;
        background-color: rgb(204, 204, 204);
        p {
          @media screen and (max-width: 800px) {
            font-size: 14px;
          }
          span {
            font-weight: bold;
          }
        }
      }
    }
  }
  .leaderboard {
    margin-top: 40px;
    .racer {
      display: flex;
      align-items: center;
      flex-direction: row;
      ul {
        width: 100%;
        display: flex;
        .info-wrapper {
          width: 100%;
        }
        @media screen and (max-width: 800px) {
          flex-wrap: wrap;
        }
      }
      @media screen and (max-width: 800px) {
        p {
          font-size: 15px;
        }
      }
      label {
        font-weight: bold;
      }
      .racer-card {
        border: 1px solid rgb(118, 118, 118);
        margin-right: 40px;
        max-width: 110px;

        img {
          width: 110px;
          border-bottom: 1px solid rgb(118, 118, 118);
        }
        p {
          margin: unset;
          padding: 10px 0;
          text-align: center;
        }
      }
      .racer-info {
        display: flex;
        flex-direction: column;
        @media screen and (max-width: 800px) {
          margin-top: 15px;
        }
        p {
          font-weight: bold;
        }
        span {
          border: 1px solid rgb(118, 118, 118);
          color: white;
          text-align: right;
          padding: 10px;
        }
      }
    }
  }
}
</style>